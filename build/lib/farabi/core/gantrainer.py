import torch
import sys
from farabi.core.basetrainer import BaseTrainer
from abc import abstractmethod
from tqdm import tqdm


class GanTrainer(BaseTrainer):
    def __init__(self, config):
        """Initializes trainer object
        """
        #super(BaseTrainer, self).__init__()
        super().__init__()

        self._num_epochs = config.num_epochs
        self._mode = config.mode

        # default values
        self._use_tqdm = False
        self.train_loader = None
        self.valid_loader = None
        self.test_loader = None
        self.model = None
        self.model_load_dir = None
        self.optimizerD = None
        self.optimizerG = None
        self._model_path = None
        self.train_epoch_iter = None
        self.valid_epoch_iter = None
        self.test_loop_iter = None
        self._save_epoch = 1
        self._start_epoch = 1
        self._has_eval = True

        self.init_attr()
        self.get_trainloader()
        self.get_testloader()
        self.build_model()

    @property
    def num_epochs(self):
        """Number of training epochs

        Returns
        -------
        int
            Number of training epochs
        """
        return self._num_epochs

    @property
    def mode(self):
        """Trainer mode

        Returns
        -------
        string
            Mode (Train/Test)
        """
        return self._mode

    def init_attr(self, *args):
        """Abstract method that initializes object attributes
        """
        pass

    def build_model(self, *args):
        """Abstract method that builds model
        """
        pass

    def get_trainloader(self, *args):
        """Hook: Retreives training set of torch.utils.data.DataLoader class
        """
        pass

    def get_testloader(self, *args):
        """Hook: Retreives test set of torch.utils.data.DataLoader class
        """
        pass

    def train(self):
        """Training loop with hooks

        Lifecycle:
        ------------
        on_train_start()
        start_logger()
            on_train_epoch_start()
                start_training_batch()
                optimizer_zero_grad()
                training_step()
                backward()
                on_end_training_batch()
            on_train_epoch_end()
            evaluate()
        on_train_end()
        """
        # hook to do on tran instart
        self.on_train_start()
        self.start_logger()
        self.train_loop()
        self.on_train_end()

    def train_loop(self):
        """Hook: training loop
        """
        for self.epoch in range(self._start_epoch, self._num_epochs+1):
            self.train_epoch()

    def train_epoch(self):
        """Hook: epoch of training loop
        """
        self.on_train_epoch_start()

        for train_epoch_var in self.train_epoch_iter:
            self.train_batch(train_epoch_var)

        self.on_train_epoch_end()

        if self._has_eval:
            self.evaluate_epoch()

        self.on_epoch_end()

    def train_batch(self, args):
        """Hook: batch of training loop
        """
        self.on_start_training_batch(args)

        ###### Discriminator ######
        self.discriminator_zero_grad()
        self.discriminator_loss()
        self.discriminator_backward()
        self.discriminator_optim_step()

        ###### Generator ######
        self.generator_zero_grad()
        self.generator_loss()
        self.generator_backward()
        self.generator_optim_step()

        self.on_end_training_batch()

    def evaluate_epoch(self):
        """Hook: epoch of evaluation loop

        Parameters
        ----------
        epoch : int
            Current epoch

        Lifecycle:
        ------------
        on_evaluate_start()
            evaluate_step()
        on_evaluate_end()
        """

        # what happens if i just put inside nograd
        with torch.no_grad():
            self.on_evaluate_epoch_start()

            for valid_epoch_var in self.valid_epoch_iter:
                self.on_evaluate_batch_start()
                self.evaluate_batch(valid_epoch_var)
                self.on_evaluate_batch_end()

            self.on_evaluate_epoch_end()

    def evaluate_batch(self, *args):
        """Hook: batch of evaluation loop
        """
        pass

    def test(self):
        """Hook: Test lifecycle

        Lifecycle:
        ------------
        on_test_start()
            on_start_test_batch()
            test_step()
            on_end_test_batch()
        on_test_end()
        """
        # self.load_model(self._model_path)
        self.load_model()
        self.on_test_start()
        self.test_loop()
        self.on_test_end()

    def test_loop(self):
        """Hook: test loop
        """
        for test_loop_var in self.test_loop_iter:
            self.on_start_test_batch()
            self.test_step(test_loop_var)
            self.on_end_test_batch()

    def get_dataloader(self):
        """Hook: Retreives torch.utils.data.DataLoader object
        """
        pass

    # Training loop related
    def on_train_start(self):
        """Hook: On start of training loop
        """

        self.batch_training_loss = 0

    def start_logger(self, *args):
        """Hook: Starts logger
        """
        pass

    def on_train_epoch_start(self):
        """Hook: On epoch start
        """
        self.batch_training_loss = 0
        self.model.train()

    def on_start_training_batch(self, *args):
        """Hook: On training batch start
        """
        pass

    def on_end_training_batch(self, *args):
        """Hook: On end of training batch
        """
        pass

    def on_train_epoch_end(self, *args):
        """Hook: On end of training epoch
        """
        pass

    def on_train_end(self):
        """Hook: On end of training
        """
        pass

    def stop_train(self, *args):
        """On end of training
        """
        sys.exit()

    # Evaluation loop related
    def on_evaluate_start(self, *args):
        """Hook: on evaluation end
        """
        pass

    def on_evaluate_epoch_start(self):
        """Hook: on evaluation start
        """
        raise NotImplementedError

    def on_evaluate_batch_start(self):
        pass

    def on_evaluate_batch_end(self):
        """Hook: On evaluate batch end
        """
        pass

    def on_evaluate_epoch_end(self, *args):
        pass

    def on_evaluate_end(self, *args):
        """Hook: on evaluation end
        """
        pass

    def on_epoch_end(self, *args):
        """Hook: on epoch end
        """
        pass

    # Test loop related
    def on_test_start(self, *args):
        """Hook: on test start
        """
        pass

    def on_start_test_batch(self, *args):
        """Hook: on test batch start
        """
        pass

    # @abstractmethod
    def test_step(self, *args):
        """Test action (Put test here)
        """
        pass

    def on_end_test_batch(self, *args):
        """Hook: on end of batch test
        """
        pass

    def on_test_end(self, *args):
        """Hook: on end test
        """
        pass

    # Misc related
    def load_model(self, *args):
        """Hook: load model
        """
        pass

    def save_model(self, *args):
        """Hook: saves model
        """
        pass

    def discriminator_zero_grad(self):
        """Hook: Zero gradients of discriminator
        """
        pass

    def discriminator_loss(self, *args):
        """Hook: Training action (Put training here)

        Parameters
        ----------
        batch : tuple
            receives batch
        batch_idx : int
            index of batch
        """
        raise NotImplementedError

    def discriminator_backward(self):
        """Hook: Discriminator back-propagation
        """
        pass

    def discriminator_optim_step(self):
        """Discriminator optimizer step
        """
        pass

    def generator_zero_grad(self):
        """Hook: Zero gradients of generator
        """
        pass

    def generator_loss(self, *args):
        """Hook: Training action (Put training here)

        Parameters
        ----------
        batch : tuple
            receives batch
        batch_idx : int
            index of batch
        """
        raise NotImplementedError

    def generator_backward(self):
        """Hook: sends backward
        """
        pass

    def generator_optim_step(self):
        """Discriminator optimizer step
        """
        pass
