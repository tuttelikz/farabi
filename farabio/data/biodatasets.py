import os
import random
import subprocess
import numpy as np
import pandas as pd
from PIL import Image
import albumentations as A
from albumentations.pytorch import ToTensorV2
import matplotlib.pyplot as plt
from skimage import io, transform
from sklearn.model_selection import train_test_split
import torch
from torch.utils.data import Dataset, DataLoader
import torchvision
from torchvision import transforms
from torchvision.datasets import ImageFolder
from zipfile import ZipFile
from sklearn.preprocessing import OrdinalEncoder

kaggle_biodatasets = [
    "aptos2019-blindness-detection",
    "chest-xray-pneumonia",
    "data-science-bowl-2018",
    "histopathologic-cancer-detection",
    "intel-mobileodt-cervical-cancer-screening",
    "ranzcr-clip-catheter-line-classification",
    "skin-cancer-mnist"
]


def download_datasets(tag, path="."):
    """Helper function to download datasets

    Parameters
    ----------
    tag : str
        tag for dataset

        .. note::
            available tags:
            kaggle_biodatasets = [
                "aptos2019-blindness-detection",
                "chest-xray-pneumonia",
                "data-science-bowl-2018",
                "histopathologic-cancer-detection",
                "intel-mobileodt-cervical-cancer-screening",
                "ranzcr-clip-catheter-line-classification",
                "skin-cancer-mnist"
            ]
    path : str, optional
        path where to save dataset, by default "."
    Examples
    ----------
    >>> download_datasets(tag="skin-cancer-mnist", path=".")
    """
    if tag == "chest-xray-pneumonia":
        bash_c_tag = ["kaggle", "datasets", "download",
                      "-d", "paultimothymooney/chest-xray-pneumonia"]
    elif tag == "skin-cancer-mnist":
        bash_c_tag = ["kaggle", "datasets", "download",
                      "-d", "kmader/skin-cancer-mnist-ham10000"]
    else:
        bash_c = ["kaggle", "competitions", "download", "-c"]
        bash_c_tag = bash_c.copy()
        bash_c_tag.append(tag)

    prev_cwd = os.getcwd()
    os.chdir(path)
    process = subprocess.Popen(bash_c_tag, stdout=subprocess.PIPE)
    output, error = process.communicate()
    print(output)

    os.chdir(prev_cwd)


def extract_zip(fzip, fnew=None):
    with ZipFile(fzip, 'r') as zip:  # ZipFile(fzip, 'r') as zip:
        print('Extracting all the train files now...')
        zip.extractall(fnew)
        print('Done!')


class ChestXrayDataset(ImageFolder):
    r"""PyTorch friendly ChestXrayDataset class

    Dataset is loaded using Kaggle API. 
    For further information on raw dataset and pneumonia detection, please refer to [1]_.

    Examples
    ----------
    >>> valid_dataset = ChestXrayDataset(root=_path, download=True, mode="val", show=True)

    .. image:: ../imgs/ChestXrayDataset.png
        :width: 300

    References
    ---------------
    .. [1] https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia
    """

    def __init__(self, root: str = ".", download: bool = False, mode: str = "train", shape: int = 256, transform: transforms = None, target_transform: transforms = None, show: int = 5):
        tag = "chest-xray-pneumonia"

        modes = ["train", "val", "test"]
        assert mode in modes, "Available options for mode: train, val, test"

        self.target_transform = target_transform

        if download:
            download_datasets(tag, path=root)
            extract_zip(os.path.join(root, tag+".zip"),
                        os.path.join(root, tag))

        if transform is None:
            self.transform = self.default_transform(mode)

        if download:
            dataset_path = os.path.join(root, tag, "chest_xray", mode)
        else:
            dataset_path = os.path.join(root, mode)

        super(ChestXrayDataset, self).__init__(
                root=dataset_path, transform=self.transform)

        self.visualize_dataset(show)

    def __getitem__(self, index):
        path, target = self.samples[index]
        sample = self.loader(path)
        if self.transform is not None:
            sample = self.transform(sample)
        if self.target_transform is not None:
            target = self.target_transform(target)

        return sample, target

    def default_transform(self, mode="train"):
        if mode == "train": 
            transform = transforms.Compose([
                transforms.Resize((256, 256)),
                transforms.RandomHorizontalFlip(),
                transforms.RandomRotation((-20, +20)),
                transforms.CenterCrop(224),
                transforms.ToTensor(),
                transforms.Normalize(
                    [0.485, 0.456, 0.406],
                    [0.229, 0.224, 0.225])
            ])

        elif mode == 'val' or mode == 'test':
            transform = transforms.Compose([
                transforms.Resize((256, 256)),
                transforms.CenterCrop(224),
                transforms.ToTensor(),
                transforms.Normalize(
                    [0.485, 0.456, 0.406],
                    [0.229, 0.224, 0.225])
            ])

        return transform

    @staticmethod
    def imshow(inp, title=None):
        inp = inp.numpy().transpose((1, 2, 0))
        mean = np.array([0.485, 0.456, 0.406])
        std = np.array([0.229, 0.224, 0.225])
        inp = std * inp + mean
        inp = np.clip(inp, 0, 1)
        fig = plt.gcf()
        plt.imshow(inp)
        if title is not None:
            plt.title(title)
        plt.pause(0.001)
        return fig

    def visualize_dataset(self, show):
        loader = DataLoader(self, batch_size=show, shuffle=True)
        inputs, classes = next(iter(loader))
        class_names = self.classes
        out = torchvision.utils.make_grid(inputs)
        self.imshow(out, title=[class_names[x] for x in classes])


class DSB18Dataset(Dataset):
    r"""PyTorch friendly DSB18Dataset class

    Dataset is loaded using Kaggle API.
    For further information on raw dataset and nuclei segmentation, please refer to [1]_.

    Examples
    ----------
    >>> train_dataset = DSB18Dataset(_path, transform=None, download=False, show=True)

    .. image:: ../imgs/DSB18Dataset.png
        :width: 300

    References
    ---------------
    .. [1] https://www.kaggle.com/c/data-science-bowl-2018/overview
    """

    def __init__(self, root: str = ".", download: bool = False, mode: str = "train", shape: int = 512, transform: transform = None, target_transform: transforms = None, show: bool = True):
    
        tag = "data-science-bowl-2018"
        modes = ["train", "val"]
        assert mode in modes, "Available options for mode: train, val"

        path = os.path.join(root, tag, "stage1_train")
        if download:
            download_datasets(tag, path=root)
            extract_zip(os.path.join(root, tag+".zip"), os.path.join(root, tag))
            extract_zip(os.path.join(root, tag, "stage1_train.zip"), path)
        else:
            path = os.path.join(root, "stage1_train")

        self.path = path
        self.folders = os.listdir(self.path)
        self.shape = shape
        
        if transform is None:
            self.transform = self.default_transform()
        else:
            self.transform = transform
        
        if target_transform is None:
            self.target_transform = self.default_target_transform()
        else:
            self.target_transform = target_transform()
        
        if show:
            self.visualize_batch()

    def __len__(self):
        return len(self.folders)

    def __getitem__(self, idx):
        image_folder = os.path.join(self.path, self.folders[idx], 'images/')
        mask_folder = os.path.join(self.path, self.folders[idx], 'masks/')
        
        fname = os.listdir(image_folder)[0]
        image_path = os.path.join(image_folder, fname)

        img = Image.open(image_path).convert('RGB')
        mask = self.get_mask(mask_folder)
        
        img = self.transform(img)
        mask = self.target_transform(mask)
        
        return img, mask, fname
    
    def get_mask(self, mask_folder):
        mask = np.zeros((self.shape, self.shape, 1), dtype=bool)
        for mask_ in os.listdir(mask_folder):
            mask_ = io.imread(os.path.join(mask_folder, mask_))
            mask_ = transform.resize(mask_, (self.shape, self.shape))
            mask_ = np.expand_dims(mask_, axis=-1)
            mask = np.maximum(mask, mask_)

        return mask
    
    def default_transform(self):
        transform = transforms.Compose([
            transforms.ToTensor(),
            transforms.Resize((self.shape, self.shape))
        ])

        return transform
    
    def default_target_transform(self):
        target_transform = transforms.Compose([
            transforms.ToTensor(),
            transforms.Resize((self.shape, self.shape))
        ])

        return target_transform
    
    def visualize_batch(self):
        loader = DataLoader(self, shuffle=True, batch_size=4)
        imgs, masks, fnames = next(iter(loader))

        batch_inputs = convert_image_dtype(imgs, dtype=torch.uint8)
        batch_outputs = convert_image_dtype(masks, dtype=torch.bool)

        cells_with_masks = [
            draw_segmentation_masks(img, masks=mask, alpha=0.6, colors = (102,255,178))
            for img, mask in zip(batch_inputs, batch_outputs)
        ]

        self.show(cells_with_masks, fnames)
    
    @staticmethod
    def show(imgs, fnames):
        if not isinstance(imgs, list):
            imgs = [imgs]
        fix, axs = plt.subplots(ncols=len(imgs), squeeze=False)
        for i, img in enumerate(imgs):
            img = img.detach()
            img = F.to_pil_image(img)
            axs[0, i].imshow(np.asarray(img))
            axs[0, i].set(xticklabels=[], yticklabels=[], xticks=[], yticks=[])
            axs[0,i].set_title("..."+fnames[i][-10:-4])


class HistocancerDataset(Dataset):
    r"""Histopathologic Cancer Dataset class

    Kaggle Histopathologic Cancer Detection dataset from [1]_

    Examples
    ----------
    >>> train_dataset = HistocancerDataset(root=".", download=True, train=True)
    >>> train_dataset.visualize_dataset()

    .. image:: ../imgs/HistocancerDataset.png
        :width: 600

    References
    ---------------
    .. [1] <https://www.kaggle.com/c/histopathologic-cancer-detection/data>`_
    """

    def __init__(self, root: str, train: bool = True, transform=None, download: bool = True):
        tag = "histopathologic-cancer-detection"

        if download:
            download_datasets(tag, path=root)
            extract_zip(os.path.join(root, tag+".zip"),
                        os.path.join(root, tag))

        if train:
            self.csv_path = os.path.join(root, tag, "train_labels.csv")
            self.img_path = os.path.join(root, tag, "train")
            self.labels = pd.read_csv(self.csv_path)
            train_data, val_data = train_test_split(
                self.labels, stratify=self.labels.label, test_size=0.1)
        else:
            self.img_path = os.path.join(root, tag, "test")

        self.df = train_data.values

        if transform is None:
            self.transform = self.get_train_transform
        else:
            self.transform = transform

    def __len__(self):
        return len(self.df)

    def __getitem__(self, index):
        img_name, label = self.df[index]
        img_path = os.path.join(self.data_dir, img_name+'.tif')
        image = cv2.imread(img_path)
        if self.transform is not None:
            image = self.transform(image)
        return image, label

    @staticmethod
    def get_train_transform(self):
        """Default transform for training data
        """
        return transforms.Compose([transforms.ToPILImage(),
                                   transforms.Pad(64, padding_mode='reflect'),
                                   transforms.RandomHorizontalFlip(),
                                   transforms.RandomVerticalFlip(),
                                   transforms.RandomRotation(20),
                                   transforms.ToTensor(),
                                   transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])])

    @staticmethod
    def get_valid_transform(self):
        """Default transform for validation data
        """
        return transforms.Compose([transforms.ToPILImage(),
                                   transforms.Pad(64, padding_mode='reflect'),
                                   transforms.ToTensor(),
                                   transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])])

    def visualize_dataset(self, n_images=10):
        fig = plt.figure(figsize=(12, 4))

        train_imgs = os.listdir(self.img_path)
        for idx, img in enumerate(np.random.choice(train_imgs, n_images)):
            ax = fig.add_subplot(2, n_images//2, idx+1, xticks=[], yticks=[])
            im = Image.open(os.path.join(self.img_path, img))
            plt.imshow(im)
            lab = self.labels.loc[self.labels['id'] ==
                                  img.split('.')[0], 'label'].values[0]
            if lab == 1:
                ax.set_title(f'{lab} = tumor')
            else:
                ax.set_title(f'{lab} = non-tumor')


class RANZCRDataset(Dataset):
    r"""RANZCR 2021 dataset class

    Catheters presence and position detection from RANZCR CLiP - Catheter and Line Position Challenge from [1]_

    Examples
    ----------
    >>> train_dataset = RANZCRDataset(".", train=True, transform=None, download=True)
    >>> train_dataset.visualize_dataset()

    .. image:: ../imgs/RANZCRDataset.png
        :width: 600

    References
    ---------------
    .. [1] https://www.kaggle.com/c/ranzcr-clip-catheter-line-classification/data
    """

    def __init__(self, root: str, train: bool = True, transform=None, download: bool = False):
        tag = "ranzcr-clip-catheter-line-classification"

        if download:
            #download_datasets(tag, path=root)
            extract_zip(os.path.join(root, tag+".zip"),
                        os.path.join(root, tag))

        train_path = os.path.join(root, tag, "train")
        test_path = os  .path.join(root, tag, "test")

        # juggling
        data = pd.read_csv(os.path.join(root, tag, "train_annotations.csv"))
        data = data.drop(["data"], axis=1)

        # Converting the columns into integers.
        data_org = data['label']
        ord_enc = OrdinalEncoder()
        data[['label']] = ord_enc.fit_transform(data[['label']])

        # Converting the Labels from floats to integers.
        data.label = data.label.astype("int")

        # Grabbing the labels as a list.
        label = data["label"]
        label = label.to_list()

        seed = 42
        train_list = []

        for i in data.index:

            # Grabbing the file name.
            a = data["StudyInstanceUID"].loc[i]

            # Attaching the file's path to it.
            b = train_path + "/" + a + ".jpg"

            # Puttting it in a tupple along with it's label.
            train_list.append((b, data['label'].loc[i]))

        train_list, valid_list = train_test_split(train_list,
                                                  test_size=0.2,
                                                  random_state=seed)

        if transform is None:
            self.transforms = self.get_transform()

        if train:
            self.file_list = train_list
        else:
            self.file_list = valid_list

    def __len__(self):
        self.filelength = len(self.file_list)
        return self.filelength

    def __getitem__(self, idx):

        # Note that file list consists of tuples.
        # The first item in tuple is the image.
        img_path = self.file_list[idx][0]
        img = Image.open(img_path).convert("RGB")
        img_transformed = self.transforms(img)

        # The second item in the tuple is the label.
        label = self.file_list[idx][1]

        return img_transformed, label

    def get_transform(self):
        """Default transform
        """
        return transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.RandomResizedCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225))
        ])

    def visualize_dataset(self, n_images=5):
        random_idx = np.random.randint(1, len(self.file_list), size=16)
        fig, axes = plt.subplots(5, 5, figsize=(13, 13))

        for idx, ax in enumerate(axes.ravel()):
            img = Image.open(self.file_list[idx][0])
            ax.set_title(self.file_list[idx][-1])
            ax.imshow(img)

        # fig.savefig('RANZCRDataset.png')


class RetinopathyDataset(Dataset):
    r"""Retinopathy Dataset class

    Retina images taken using fundus photography from Kaggle APTOS 2019 Blindness Detection competition, [1]_.

    Examples
    ----------
    >>> train_dataset = RetinopathyDataset(root=".", transform=None, download=True)
    >>> train_dataset.visualize_dataset(9)

    .. image:: ../imgs/RetinopathyDataset.png
        :width: 300

    References
    ---------------
    .. [1] <https://www.kaggle.com/c/aptos2019-blindness-detection/data>`_
    """

    def __init__(self, root: str, train: bool = True, download: bool = True, transform=None):
        tag = "aptos2019-blindness-detection"

        if download:
            download_datasets(tag, path=root)
            extract_zip(os.path.join(root, tag+".zip"),
                        os.path.join(root, tag))

        if train:
            self.csv_path = os.path.join(root, tag, "train.csv")
            self.img_path = os.path.join(root, tag, "train_images")

        self.data = pd.read_csv(self.csv_path)

        if transform is None:
            self.transform = transforms.ToTensor()

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        img_name = os.path.join(
            self.img_path, self.data.loc[idx, 'id_code'] + '.png')
        image = Image.open(img_name)
        image = image.resize((256, 256), resample=Image.BILINEAR)
        label = torch.tensor(self.data.loc[idx, 'diagnosis'])

        return {
            'image': self.transform(image),
            'labels': label
        }

    def visualize_dataset(self, n_images=9):
        """
        Function to visualize blindness images
        """
        train_csv = self.data
        fig = plt.figure(figsize=(30, 30))
        train_imgs = os.listdir(self.img_path)

        for idx, img in enumerate(np.random.choice(train_imgs, n_images)):
            ax = fig.add_subplot(3, n_images//3, idx+1, xticks=[], yticks=[])
            im = Image.open(os.path.join(self.img_path, img))
            plt.imshow(im)
            lab = train_csv.loc[train_csv['id_code'] ==
                                img.split('.')[0], 'diagnosis'].values[0]
            ax.set_title('Severity: %s' % lab, fontsize=40)
