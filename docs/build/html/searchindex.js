Search.setIndex({docnames:["handbook/changelog","handbook/concepts","handbook/downloads","handbook/faq","handbook/index","handbook/overview","handbook/tutorial","index","installation","reference/core.basetrainer","reference/core.configs","reference/core.convnettrainer","reference/core.gantrainer","reference/data.biodatasets","reference/data.dirops","reference/data.imgops","reference/index","reference/models.classification.class_trainer","reference/models.detection.faster_rcnn.faster_rcnn_trainer","reference/models.detection.yolov3.yolo_trainer","reference/models.segmentation.attunet.attunet_trainer","reference/models.segmentation.unet.unet_trainer","reference/models.superres.srgan.srgan_trainer","reference/models.translation.cyclegan.cyclegan_trainer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["handbook/changelog.rst","handbook/concepts.rst","handbook/downloads.rst","handbook/faq.rst","handbook/index.rst","handbook/overview.rst","handbook/tutorial.rst","index.rst","installation.rst","reference/core.basetrainer.rst","reference/core.configs.rst","reference/core.convnettrainer.rst","reference/core.gantrainer.rst","reference/data.biodatasets.rst","reference/data.dirops.rst","reference/data.imgops.rst","reference/index.rst","reference/models.classification.class_trainer.rst","reference/models.detection.faster_rcnn.faster_rcnn_trainer.rst","reference/models.detection.yolov3.yolo_trainer.rst","reference/models.segmentation.attunet.attunet_trainer.rst","reference/models.segmentation.unet.unet_trainer.rst","reference/models.superres.srgan.srgan_trainer.rst","reference/models.translation.cyclegan.cyclegan_trainer.rst"],objects:{"farabio.core.basetrainer":{BaseTrainer:[9,0,1,""]},"farabio.core.basetrainer.BaseTrainer":{build_model:[9,1,1,""],evaluate:[9,1,1,""],get_testloader:[9,1,1,""],get_trainloader:[9,1,1,""],init_attr:[9,1,1,""],test:[9,1,1,""],train:[9,1,1,""]},"farabio.core.configs":{_cfg_attunet:[10,2,1,""],_cfg_cyclegan:[10,2,1,""],_cfg_fasterrcnn:[10,2,1,""],_cfg_srgan:[10,2,1,""],_cfg_unet:[10,2,1,""],_cfg_yolov3:[10,2,1,""]},"farabio.core.convnettrainer":{ConvnetTrainer:[11,0,1,""]},"farabio.core.convnettrainer.ConvnetTrainer":{__init__:[11,1,1,""],build_model:[11,1,1,""],build_parallel_model:[11,1,1,""],default_attr:[11,1,1,""],define_compute_attr:[11,1,1,""],define_data_attr:[11,1,1,""],define_log_attr:[11,1,1,""],define_misc_attr:[11,1,1,""],define_model_attr:[11,1,1,""],define_test_attr:[11,1,1,""],define_train_attr:[11,1,1,""],evaluate_batch:[11,1,1,""],evaluate_epoch:[11,1,1,""],exit_trainer:[11,1,1,""],get_testloader:[11,1,1,""],get_trainloader:[11,1,1,""],init_attr:[11,1,1,""],load_model:[11,1,1,""],load_parallel_model:[11,1,1,""],loss_backward:[11,1,1,""],on_end_test_batch:[11,1,1,""],on_end_training_batch:[11,1,1,""],on_epoch_end:[11,1,1,""],on_evaluate_batch_end:[11,1,1,""],on_evaluate_batch_start:[11,1,1,""],on_evaluate_end:[11,1,1,""],on_evaluate_epoch_end:[11,1,1,""],on_evaluate_epoch_start:[11,1,1,""],on_evaluate_start:[11,1,1,""],on_start_test_batch:[11,1,1,""],on_start_training_batch:[11,1,1,""],on_test_end:[11,1,1,""],on_test_start:[11,1,1,""],on_train_end:[11,1,1,""],on_train_epoch_end:[11,1,1,""],on_train_epoch_start:[11,1,1,""],on_train_start:[11,1,1,""],optimizer_step:[11,1,1,""],optimizer_zero_grad:[11,1,1,""],save_model:[11,1,1,""],save_parallel_model:[11,1,1,""],start_logger:[11,1,1,""],stop_train:[11,1,1,""],test:[11,1,1,""],test_loop:[11,1,1,""],test_step:[11,1,1,""],train:[11,1,1,""],train_batch:[11,1,1,""],train_epoch:[11,1,1,""],train_loop:[11,1,1,""],training_step:[11,1,1,""]},"farabio.core.gantrainer":{GanTrainer:[12,0,1,""]},"farabio.core.gantrainer.GanTrainer":{__init__:[12,1,1,""],build_model:[12,1,1,""],default_attr:[12,1,1,""],define_compute_attr:[12,1,1,""],define_data_attr:[12,1,1,""],define_log_attr:[12,1,1,""],define_misc_attr:[12,1,1,""],define_model_attr:[12,1,1,""],define_test_attr:[12,1,1,""],define_train_attr:[12,1,1,""],discriminator_backward:[12,1,1,""],discriminator_loss:[12,1,1,""],discriminator_optim_step:[12,1,1,""],discriminator_zero_grad:[12,1,1,""],evaluate_batch:[12,1,1,""],evaluate_epoch:[12,1,1,""],generator_backward:[12,1,1,""],generator_loss:[12,1,1,""],generator_optim_step:[12,1,1,""],generator_zero_grad:[12,1,1,""],get_dataloader:[12,1,1,""],get_testloader:[12,1,1,""],get_trainloader:[12,1,1,""],init_attr:[12,1,1,""],load_model:[12,1,1,""],on_end_test_batch:[12,1,1,""],on_end_training_batch:[12,1,1,""],on_epoch_end:[12,1,1,""],on_evaluate_batch_end:[12,1,1,""],on_evaluate_batch_start:[12,1,1,""],on_evaluate_end:[12,1,1,""],on_evaluate_epoch_end:[12,1,1,""],on_evaluate_epoch_start:[12,1,1,""],on_evaluate_start:[12,1,1,""],on_start_test_batch:[12,1,1,""],on_start_training_batch:[12,1,1,""],on_test_end:[12,1,1,""],on_test_start:[12,1,1,""],on_train_end:[12,1,1,""],on_train_epoch_end:[12,1,1,""],on_train_epoch_start:[12,1,1,""],on_train_start:[12,1,1,""],save_model:[12,1,1,""],start_logger:[12,1,1,""],stop_train:[12,1,1,""],test:[12,1,1,""],test_loop:[12,1,1,""],test_step:[12,1,1,""],train:[12,1,1,""],train_batch:[12,1,1,""],train_epoch:[12,1,1,""],train_loop:[12,1,1,""]},"farabio.data.biodatasets":{ChestXrayDataset:[13,0,1,""],DSB18Dataset:[13,0,1,""],HistocancerDataset:[13,0,1,""],RetinopathyDataset:[13,0,1,""]},"farabio.data.biodatasets.ChestXrayDataset":{__init__:[13,1,1,""],get_train_transform:[13,1,1,""],imshow:[13,1,1,""],visualize_dataset:[13,1,1,""]},"farabio.data.biodatasets.DSB18Dataset":{__init__:[13,1,1,""],format_image:[13,1,1,""],format_mask:[13,1,1,""],get_mask:[13,1,1,""],get_train_transform:[13,1,1,""],visualize_dataset:[13,1,1,""]},"farabio.data.biodatasets.HistocancerDataset":{__init__:[13,1,1,""],get_train_transform:[13,1,1,""],get_valid_transform:[13,1,1,""],visualize_dataset:[13,1,1,""]},"farabio.data.biodatasets.RetinopathyDataset":{__init__:[13,1,1,""],visualize_dataset:[13,1,1,""]},"farabio.data.dirops":{DirOps:[14,0,1,""]},"farabio.data.dirops.DirOps":{del_files:[14,1,1,""],dirinfo:[14,1,1,""],lsmedia:[14,1,1,""],split_traintest:[14,1,1,""]},"farabio.data.imgops":{ImgOps:[15,0,1,""]},"farabio.data.imgops.ImgOps":{approx_bcg:[15,1,1,""],blend_img:[15,1,1,""],blend_imgs:[15,1,1,""],get_date:[15,1,1,""],mask_img:[15,1,1,""],pad_img:[15,1,1,""],print_imginfo:[15,1,1,""],profile_img:[15,1,1,""],random_flip:[15,1,1,""],read_image:[15,1,1,""],slice_img:[15,1,1,""]},"farabio.models.classification.class_trainer":{ClassTrainer:[17,0,1,""]},"farabio.models.classification.class_trainer.ClassTrainer":{build_model:[17,1,1,""],build_parallel_model:[17,1,1,""],define_compute_attr:[17,1,1,""],define_data_attr:[17,1,1,""],define_log_attr:[17,1,1,""],define_model_attr:[17,1,1,""],define_train_attr:[17,1,1,""],evaluate_batch:[17,1,1,""],get_testloader:[17,1,1,""],get_trainloader:[17,1,1,""],loss_backward:[17,1,1,""],on_end_training_batch:[17,1,1,""],on_epoch_end:[17,1,1,""],on_evaluate_batch_end:[17,1,1,""],on_evaluate_batch_start:[17,1,1,""],on_evaluate_epoch_end:[17,1,1,""],on_evaluate_epoch_start:[17,1,1,""],on_start_training_batch:[17,1,1,""],on_train_epoch_start:[17,1,1,""],optimizer_step:[17,1,1,""],optimizer_zero_grad:[17,1,1,""],training_step:[17,1,1,""]},"farabio.models.detection.faster_rcnn.faster_rcnn_trainer":{FasterRCNNTrainer:[18,0,1,""]},"farabio.models.detection.faster_rcnn.faster_rcnn_trainer.FasterRCNNTrainer":{build_model:[18,1,1,""],define_log_attr:[18,1,1,""],define_misc_attr:[18,1,1,""],define_model_attr:[18,1,1,""],define_train_attr:[18,1,1,""],evaluate_batch:[18,1,1,""],forward:[18,1,1,""],get_meter_data:[18,1,1,""],get_testloader:[18,1,1,""],get_trainloader:[18,1,1,""],load_model:[18,1,1,""],loss_backward:[18,1,1,""],on_epoch_end:[18,1,1,""],on_evaluate_batch_start:[18,1,1,""],on_evaluate_epoch_end:[18,1,1,""],on_evaluate_epoch_start:[18,1,1,""],on_start_training_batch:[18,1,1,""],on_train_epoch_start:[18,1,1,""],on_train_start:[18,1,1,""],optimizer_step:[18,1,1,""],optimizer_zero_grad:[18,1,1,""],reset_meters:[18,1,1,""],save:[18,1,1,""],save_model:[18,1,1,""],start_logger:[18,1,1,""],training_step:[18,1,1,""],update_meters:[18,1,1,""],visdom_plot:[18,1,1,""]},"farabio.models.detection.yolov3.yolo_trainer":{YoloTrainer:[19,0,1,""]},"farabio.models.detection.yolov3.yolo_trainer.YoloTrainer":{build_model:[19,1,1,""],define_compute_attr:[19,1,1,""],define_data_attr:[19,1,1,""],define_log_attr:[19,1,1,""],define_misc_attr:[19,1,1,""],define_model_attr:[19,1,1,""],define_test_attr:[19,1,1,""],define_train_attr:[19,1,1,""],detect_perform:[19,1,1,""],evaluate_batch:[19,1,1,""],get_detections:[19,1,1,""],get_trainloader:[19,1,1,""],on_end_training_batch:[19,1,1,""],on_epoch_end:[19,1,1,""],on_evaluate_batch_start:[19,1,1,""],on_evaluate_epoch_end:[19,1,1,""],on_evaluate_epoch_start:[19,1,1,""],on_start_training_batch:[19,1,1,""],on_train_epoch_start:[19,1,1,""],plot_bbox:[19,1,1,""],save_model:[19,1,1,""],test:[19,1,1,""],training_step:[19,1,1,""]},"farabio.models.segmentation.attunet.attunet_trainer":{AttunetTrainer:[20,0,1,""]},"farabio.models.segmentation.attunet.attunet_trainer.AttunetTrainer":{build_model:[20,1,1,""],build_parallel_model:[20,1,1,""],define_compute_attr:[20,1,1,""],define_data_attr:[20,1,1,""],define_log_attr:[20,1,1,""],define_misc_attr:[20,1,1,""],define_model_attr:[20,1,1,""],define_test_attr:[20,1,1,""],define_train_attr:[20,1,1,""],evaluate_batch:[20,1,1,""],generate_result_img:[20,1,1,""],get_testloader:[20,1,1,""],get_trainloader:[20,1,1,""],load_model:[20,1,1,""],load_parallel_model:[20,1,1,""],loss_backward:[20,1,1,""],on_end_test_batch:[20,1,1,""],on_end_training_batch:[20,1,1,""],on_epoch_end:[20,1,1,""],on_evaluate_batch_end:[20,1,1,""],on_evaluate_epoch_end:[20,1,1,""],on_evaluate_epoch_start:[20,1,1,""],on_start_training_batch:[20,1,1,""],on_test_start:[20,1,1,""],on_train_epoch_end:[20,1,1,""],on_train_epoch_start:[20,1,1,""],optimizer_step:[20,1,1,""],optimizer_zero_grad:[20,1,1,""],save_model:[20,1,1,""],save_parallel_model:[20,1,1,""],show_model_summary:[20,1,1,""],start_logger:[20,1,1,""],test_step:[20,1,1,""],training_step:[20,1,1,""]},"farabio.models.segmentation.unet.unet_trainer":{UnetTrainer:[21,0,1,""]},"farabio.models.segmentation.unet.unet_trainer.UnetTrainer":{build_model:[21,1,1,""],build_parallel_model:[21,1,1,""],define_compute_attr:[21,1,1,""],define_data_attr:[21,1,1,""],define_log_attr:[21,1,1,""],define_misc_attr:[21,1,1,""],define_model_attr:[21,1,1,""],define_test_attr:[21,1,1,""],define_train_attr:[21,1,1,""],evaluate_batch:[21,1,1,""],generate_result_img:[21,1,1,""],get_testloader:[21,1,1,""],get_trainloader:[21,1,1,""],load_model:[21,1,1,""],load_parallel_model:[21,1,1,""],loss_backward:[21,1,1,""],on_end_test_batch:[21,1,1,""],on_end_training_batch:[21,1,1,""],on_epoch_end:[21,1,1,""],on_evaluate_batch_end:[21,1,1,""],on_evaluate_epoch_end:[21,1,1,""],on_evaluate_epoch_start:[21,1,1,""],on_start_training_batch:[21,1,1,""],on_test_start:[21,1,1,""],on_train_epoch_end:[21,1,1,""],on_train_epoch_start:[21,1,1,""],optimizer_step:[21,1,1,""],optimizer_zero_grad:[21,1,1,""],save_model:[21,1,1,""],save_parallel_model:[21,1,1,""],show_model_summary:[21,1,1,""],start_logger:[21,1,1,""],test_step:[21,1,1,""],training_step:[21,1,1,""]},"farabio.models.superres.srgan.srgan_trainer":{SrganTrainer:[22,0,1,""]},"farabio.models.superres.srgan.srgan_trainer.SrganTrainer":{build_model:[22,1,1,""],define_compute_attr:[22,1,1,""],define_data_attr:[22,1,1,""],define_log_attr:[22,1,1,""],define_misc_attr:[22,1,1,""],define_model_attr:[22,1,1,""],define_train_attr:[22,1,1,""],discriminator_backward:[22,1,1,""],discriminator_loss:[22,1,1,""],discriminator_optim_step:[22,1,1,""],discriminator_zero_grad:[22,1,1,""],evaluate_batch:[22,1,1,""],generator_backward:[22,1,1,""],generator_loss:[22,1,1,""],generator_optim_step:[22,1,1,""],generator_zero_grad:[22,1,1,""],get_testloader:[22,1,1,""],get_trainloader:[22,1,1,""],load_model:[22,1,1,""],on_end_training_batch:[22,1,1,""],on_epoch_end:[22,1,1,""],on_evaluate_batch_end:[22,1,1,""],on_evaluate_epoch_end:[22,1,1,""],on_evaluate_epoch_start:[22,1,1,""],on_start_training_batch:[22,1,1,""],on_test_end:[22,1,1,""],on_test_start:[22,1,1,""],on_train_epoch_start:[22,1,1,""],optimizer_zero_grad:[22,1,1,""],save_csv:[22,1,1,""],save_model:[22,1,1,""],start_logger:[22,1,1,""],test_batch:[22,1,1,""],test_step:[22,1,1,""],train_batch:[22,1,1,""]},"farabio.models.translation.cyclegan.cyclegan_trainer":{CycleganTrainer:[23,0,1,""]},"farabio.models.translation.cyclegan.cyclegan_trainer.CycleganTrainer":{build_model:[23,1,1,""],cycle_g_loss:[23,1,1,""],define_compute_attr:[23,1,1,""],define_data_attr:[23,1,1,""],define_log_attr:[23,1,1,""],define_misc_attr:[23,1,1,""],define_model_attr:[23,1,1,""],define_test_attr:[23,1,1,""],define_train_attr:[23,1,1,""],discriminatorA_backward:[23,1,1,""],discriminatorA_loss:[23,1,1,""],discriminatorA_optim_step:[23,1,1,""],discriminatorA_zero_grad:[23,1,1,""],discriminatorB_backward:[23,1,1,""],discriminatorB_loss:[23,1,1,""],discriminatorB_optim_step:[23,1,1,""],discriminatorB_zero_grad:[23,1,1,""],fake_dA_loss:[23,1,1,""],fake_dB_loss:[23,1,1,""],gan_g_loss:[23,1,1,""],generator_backward:[23,1,1,""],generator_loss:[23,1,1,""],generator_optim_step:[23,1,1,""],generator_zero_grad:[23,1,1,""],get_testloader:[23,1,1,""],get_trainloader:[23,1,1,""],identity_g_loss:[23,1,1,""],load_model:[23,1,1,""],on_end_test_batch:[23,1,1,""],on_end_training_batch:[23,1,1,""],on_epoch_end:[23,1,1,""],on_start_training_batch:[23,1,1,""],on_test_start:[23,1,1,""],on_train_epoch_end:[23,1,1,""],on_train_epoch_start:[23,1,1,""],on_train_start:[23,1,1,""],real_dA_loss:[23,1,1,""],real_dB_loss:[23,1,1,""],save_model:[23,1,1,""],start_logger:[23,1,1,""],test_step:[23,1,1,""],train_batch:[23,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function"},terms:{"01497":18,"01629":17,"02640":19,"02767":19,"03385":17,"03999":20,"04381":17,"04597":21,"04802":22,"05027":17,"05431":17,"064":17,"06484":17,"06993":17,"100":15,"1024":15,"10593":23,"13678":17,"1409":17,"1505":21,"1506":[18,19],"1512":17,"1556":17,"1603":17,"1608":17,"1609":22,"1611":17,"1703":23,"1707":17,"1801":17,"1804":[19,20],"1e781dfbb0":0,"2003":17,"200820_191645":15,"2013":2,"2017":2,"2018":[2,13],"2019":[2,13],"2021":0,"255":15,"256":13,"2x64d":17,"32x4d":17,"512":13,"6006":6,"abstract":[9,11,12,17,18,19,20,21,23],"class":[5,6,9,14,15],"default":[13,14,15],"float":[14,15],"function":[4,5,10,11,12,13,15],"import":[6,14,15],"int":[11,12,13,14,15,22,23],"public":[4,13],"return":[14,15,23],"short":5,"static":[13,15],"super":[2,5,22],"true":[13,14,15],The:[5,10,15,18],There:[0,5],These:10,Using:22,Will:6,__init__:[11,12,13],__main__:6,__name__:6,_cfg_attunet:10,_cfg_cyclegan:10,_cfg_fasterrcnn:10,_cfg_srgan:10,_cfg_unet:10,_cfg_yolov3:10,abbrevi:5,abc:[9,11],abl:5,abov:18,abs:[17,18,19,20,21,22,23],access:[2,11,12],accord:6,accur:[5,13],accuraci:17,action:[11,12,20,21,22,23],activ:4,add:0,adding:0,adjust:6,adversari:[22,23],aitorzip:23,albument:[8,13],alexnet:6,alextrain:6,all:[5,8,9],analyz:5,answer:3,append:5,applic:5,approach:5,approx_bcg:15,approxim:15,apto:[2,13],arch:6,architectur:[11,18],area:15,arg:[9,11,12,15,17,18,19,20,21,22,23],argument:5,arrai:[1,15],arxiv:[17,18,19,20,21,22,23],askaruli:0,assert:6,associ:5,attent:[10,20],attribut:[0,14,15,17,18,19,20,21,22,23],attunet:[5,6,20],attunet_train:[5,6,16],attunettrain:[5,6],aud_fn:14,audio:14,autopep8:8,averag:15,avoid:5,back:[11,12,17,18,20,21,22],background:15,backward:[12,22,23],base:[9,10],basetrain:[5,11,16,17,19,20,21,23],bash:6,basic:[0,14,15],batch:[11,12,17,18,19,20,21,22,23],bboxtool:5,befor:14,begin:1,below:15,benchmark:2,better:5,between:15,binari:15,biodataset:16,biomed:[4,5,13],blend:15,blend_img:15,blind:[2,13],block:5,blue:15,bool:[13,14,15],border:5,both:9,bowl:[2,13],branch:0,bug:5,build:[9,11,12,17,18,19,20,21,22,23],build_model:[9,11,12,17,18,19,20,21,22,23],build_parallel_model:[11,12,17,20,21],can:[4,11,12],cancer:[2,13],cannot:20,capit:5,capword:5,cervic:2,cfg:[5,6],challeng:2,chang:[4,6],changelog:[4,7],channel:15,chenyuntc:18,chest:[2,13],choos:6,chw:15,clash:5,class_:5,class_train:[6,16],classfic:5,classif:[0,6,18],classtrain:6,clss:5,cnn:18,coco:[2,5],code:[1,6,18,19,20,21,22,23],col1:15,col2:15,collect:[2,11,12],collect_env:5,color:15,colour:15,com:[8,18,19,20,21,22,23],combin:10,commit:0,competit:[2,13],compil:0,complet:6,complex:5,comput:[11,12,17,19,20,21,22,23],compute_arg:10,concept:[4,7],conda:3,config:[5,6,11,12,16,17,18,19,20,21,22,23],configur:6,consist:23,constant:5,contain:[10,15],content:15,contribut:4,conv:6,convent:5,convnet:11,convnettrain:[5,16,17,19,20,21],coolenv:8,coordin:15,copi:15,core:[5,6,7,9,10,11,12,23],corrupt:5,creat:[6,8,14,15],create_custom_model:[5,6],creator_tool:5,cudatoolkit:8,current:[11,12,14,22,23],custom:[4,5,11,12,15,17,18,19,20,21,22,23],cut:15,cwd:14,cycl:23,cycle_g_loss:23,cyclegan:[2,5,6,10,23],cyclegan_train:[5,6,16],cyclegantrain:[5,6],dai:5,darknet53:6,darknet:5,data:[2,5,6,7,9,10,11,12,13,14,15,17,18,19,20,21,22,23],data_config:6,dataload:[5,9,11,12,17,18,19,20,21,22,23],dataset:[4,5,9,13],date:[8,15],deep:5,default_attr:[11,12],default_cfg:6,defin:[5,9,10,11,12,17,18,19,20,21,22,23],define_compute_attr:[11,12,17,19,20,21,22,23],define_data_attr:[11,12,17,19,20,21,22,23],define_log_attr:[11,12,17,18,19,20,21,22,23],define_misc_attr:[11,12,18,19,20,21,22,23],define_model_attr:[11,12,17,18,19,20,21,22,23],define_test_attr:[11,12,19,20,21,23],define_train_attr:[11,12,17,18,19,20,21,22,23],definit:15,del_fil:14,delet:14,densenet121:17,densenet:6,dermatoscop:2,descript:15,desir:15,detect:[2,5,6,13,18,19],detect_perform:[6,19],determin:15,dict:15,dictionari:15,digit:5,dimens:15,dir:[6,14],dir_path:14,direct:15,dirinfo:14,dirop:[5,16],dirsiz:14,discrimin:[12,22,23],discriminator_backward:[12,22],discriminator_loss:[12,22],discriminator_optim_step:[12,22],discriminator_zero_grad:[12,22],discriminatora_backward:23,discriminatora_loss:23,discriminatora_optim_step:23,discriminatora_zero_grad:23,discriminatorb_backward:23,discriminatorb_loss:23,discriminatorb_optim_step:23,discriminatorb_zero_grad:23,div2k:2,dla:17,download:[4,7,13],dpn92:[6,17],droi:15,dtype:15,dure:[11,17,18,19,20,21],easydict:6,edict:6,edit:8,educ:5,efficientnet:6,either:[11,12],element:15,elif:6,els:6,end:[1,11,12,17,18,19,20,21,22,23],engin:5,enhanc:5,ensur:8,entri:[11,12],epoch:[11,12,17,18,19,20,21,22,23],equip:5,eriklindernoren:19,especi:5,etim:6,evalu:[2,9,17,18,19,20,21,22],evaluate_batch:[11,12,17,18,19,20,21,22],evaluate_epoch:[11,12],everi:11,exact:[11,12],exampl:[13,14,15],except:[5,14],exist:14,exit:11,exit_train:11,fake:23,fake_da_loss:23,fake_db_loss:23,fals:[13,14,15],faq:[4,7],farabio:[5,6,9,10,11,12,13,14,15,17,18,19,20,21,22,23],faster:[10,18],faster_rcnn:[5,6,18],faster_rcnn_train:[5,6,16],faster_rcnn_vgg16:5,fasterrcnn:18,fasterrcnntrain:[5,6],field:6,fig:15,figur:15,file:[0,6,14,15],filenam:14,find:5,fire:8,first:15,fit:20,flag:[8,14],flip:15,float32:15,folder:[0,14],follow:[5,6],format:[14,15],format_imag:13,format_mask:13,forward:18,frac:1,friendli:13,from:[2,3,5,6,13,14,15,20,21],from_loc:8,from_pip:8,fsize:15,full:0,fundu:[2,13],gan:23,gan_g_loss:23,gantrain:[5,16,22,23],gener:[5,12,20,21,22,23],generate_result_img:[20,21],generator_backward:[12,22,23],generator_loss:[12,22,23],generator_optim_step:[12,22,23],generator_zero_grad:[12,22,23],get:15,get_dat:15,get_dataload:12,get_detect:19,get_mask:13,get_meter_data:18,get_testload:[9,11,12,17,18,20,21,22,23],get_train_transform:13,get_trainload:[9,11,12,17,18,19,20,21,22,23],get_valid_transform:13,git:[5,18,19,20,21,22,23],github:[2,3,8,18,19,20,21,22,23],given:15,going:18,googlenet:6,gpu:[3,11,17,20,21],grad:22,gradient:[11,12,17,18,20,21,22,23],grai:15,grayscal:15,green:15,ham10000:2,handbook:7,has:5,have:5,head:18,height:15,help:13,helper:[5,6],here:[11,12,17,18,19,20,21,22,23],hire:1,histogram:15,histopatholog:[2,5,13],hook:[17,18,19,20,21,22,23],hooksa:11,horizont:15,hour:15,how:[3,4,7],howev:19,http:[8,17,18,19,20,21,22,23],human:15,iccv:2,ident:23,identity_g_loss:23,imag:[2,5,13,14,15,20,21,23],image_segment:20,imageio:8,img1:15,img2:15,img:[13,15],img_b:15,img_blend:15,img_fn:14,img_g:15,img_height:13,img_mask:15,img_ov:15,img_pad:15,img_path:15,img_r:15,img_ref:15,img_shap:13,img_slic:15,img_slices_info:15,img_width:13,imgmask:15,imgop:[5,14,16],imgpath:15,imgtoblend:15,implement:[18,19,20,21,22,23],improv:5,imshow:13,includ:[14,18],index:7,info:15,inform:[14,15],inherit:[9,11,17,19,20,21,23],init:0,init_attr:[9,11,12],initi:[9,11,12,13],inp:13,instal:[3,7],instanc:[5,14,15],integr:5,intel:2,intens:15,interact:15,interest:[5,14,15],intermedi:15,ipdb:8,issu:3,item:14,itim:6,its:15,jpg:15,jupyt:0,kaggl:[2,13],kei:15,kernel:[5,6],keyword:5,kitti:2,know:3,kwarg:18,l1loss:23,lab:5,lane:2,larg:2,learn:5,leejunhyun:20,left:1,leftthoma:22,leq:1,lesion:2,letter:5,level:5,lifecycl:19,linux:4,list:[6,8,14,15],lll:1,load:[11,12,13,18,20,21,22,23],load_model:[11,12,18,20,21,22,23],load_parallel_model:[11,20,21],local:[0,8,18],log:[11,12,17,18,19,20,21,22,23],log_arg:10,logdir:6,logger:[11,12,18,20,21,22,23],loop:[9,17,18,19,20,21,22,23],loss:[5,11,17,18,20,21,23],loss_backward:[11,17,18,20,21],lowercas:5,lsmedia:14,main:[0,10,11],make:[11,12],manner:13,mask:[13,15],mask_fold:13,mask_img:15,match:14,matplotlib:[8,15],max:[1,15],media:14,medic:5,memori:14,meter:5,method:[9,14,15,17,18,19,20,21,22,23],metric:5,milesi:21,min:[1,15],misc:5,misc_arg:10,miscellan:[11,12,18,19,20,21,22,23],mnist:2,mobilenet2:6,mobilenet:6,mobilenetv2:17,mobileodt:2,mode:[6,8,13,20],model:[0,3,4,5,7,9,11,12,17,18,19,20,21,22,23],model_def:6,model_nam:22,modifi:6,modul:[5,7,16],monet2photo:2,monitor:5,mseloss:23,multi:[0,2,11,17,20,21],n_imag:13,name:[5,6],nano:6,navig:6,ndarrai:15,ndir:14,neat:14,necessari:5,neq:1,net:[10,20,21],network:[18,22,23],nfile:14,none:[13,15],normal:5,notimplementederror:9,ntire:2,nuclei:[2,13],num:6,number:[14,15],numpi:[8,15],object:[2,11,12,15,19,22],occupi:14,on_end_test_batch:[11,12,20,21,23],on_end_training_batch:[11,12,17,19,20,21,22,23],on_epoch_end:[11,12,17,18,19,20,21,22,23],on_evaluate_batch_end:[11,12,17,20,21,22],on_evaluate_batch_start:[11,12,17,18,19],on_evaluate_end:[11,12],on_evaluate_epoch_end:[11,12,17,18,19,20,21,22],on_evaluate_epoch_start:[11,12,17,18,19,20,21,22],on_evaluate_start:[11,12],on_start_test_batch:[11,12],on_start_training_batch:[11,12,17,18,19,20,21,22,23],on_test_end:[11,12,22],on_test_start:[11,12,20,21,22,23],on_train_end:[11,12],on_train_epoch_end:[11,12,20,21,23],on_train_epoch_start:[11,12,17,18,19,20,21,22,23],on_train_start:[11,12,18,23],one:[20,21],onli:[6,14,20],open:5,opencv_python:8,oper:14,opt:15,optic:5,optim:[11,12,17,18,20,21,22,23],optimizer_step:[11,17,18,20,21],optimizer_zero_grad:[11,17,18,20,21,22],option:15,order:15,org:[17,18,19,20,21,22,23],organ:4,orien:15,orient:15,origin:[18,19,20,21,22,23],our:5,out_img:15,overag:15,overlai:15,overlap:15,overrid:[9,11,12,17,18,19,20,21,22,23],overview:4,packag:[3,4,7,10],pad:15,pad_img:15,page:7,panda:8,paper:2,parallel:[11,17,20,21],param:15,paramet:[11,12,14,15,17,19,20,21,22,23],parent:22,parser:5,path:[14,15],pdf:[1,17],pep:5,perform:14,perhap:5,photographi:[2,13],piec:15,pigment:2,pillow:8,pip:3,pipelin:5,pixel:15,place:10,pleas:5,plot:15,plot_bbox:19,pmax:15,pmin:15,pneumonia:[2,13],png:[1,14,15],point:15,port:6,pre:5,preactresnet18:17,preactresnet:6,predefin:15,predict:13,prepar:5,prerequisit:7,pretrain:4,pretrained_weight:6,print:[6,14,15],print_imginfo:15,problem:5,process:5,profil:15,profile_img:15,project:15,propag:[11,12,17,18,20,21,22],properti:9,propos:[18,19,20,21,22,23],prototyp:5,provid:[11,12,13,14,15],pt1:15,pt2:15,pth:6,pull:5,purpos:4,pursu:5,put:[11,12,20,21,22,23],pypi:8,python:[3,6,8,9],pytorch:[8,13,18,19,21,23],qualiti:5,quick:[11,12],rai:[2,13],rais:9,random_flip:15,randomli:15,rang:15,rapidli:5,rarr:5,rather:5,ratio:[14,15],rcnn:[10,18],read:15,read_imag:15,readabl:[5,15],real:[19,23],real_da_loss:23,real_db_loss:23,recent:4,recommonmark:8,red:15,ref_:15,refer:7,reflist:14,region:[5,18],region_proposal_network:5,regnet:6,regnetx_200mf:17,regnety_400mf:17,regul:5,relat:[4,10,11,12,17,18,19,20,21,22,23],releas:2,repres:15,request:5,requir:8,research:5,reserv:5,reset_met:18,resnet101:17,resnet18:17,resnet50:17,resnet:6,resnext29:17,resnext:6,resolut:[2,5,22],result:[5,15],retina:[2,13],retinopathi:13,retreiv:[11,12,17,18,19,20,21,22,23],retriev:14,return_param:15,reus:5,rgb:15,right:1,road:2,roi:15,roi_cls_loss:18,roi_loc_loss:18,root:13,row1:15,row2:15,rpn:18,rpn_cls_loss:18,rpn_loc_loss:18,runtimeerror:0,same:5,sampl:15,sample_list:14,san:0,save:[11,12,18,19,20,21,22,23],save_csv:22,save_dict:18,save_model:[11,12,18,19,20,21,22,23],save_parallel_model:[11,20,21],save_path:18,scalar:23,scale:2,scienc:[2,13],scikit_imag:8,scipi:8,screen:[2,5],seaborn:8,search:7,second:15,see:13,segment:[2,5,6,13,20,21],self:[13,14,15],send:[5,12,22,23],separ:[5,10],set:[6,10,11,12,17,18,19,20,21,22,23],setuptool:8,sever:[5,17],shape:[13,15],should:5,show_model_summari:[20,21],shuffl:14,shufflenet2:6,signatur:13,simg:15,simpl:18,simpledla:[6,17],singl:5,size:15,skin:2,slice:15,slice_img:15,solut:3,sourc:[1,2,9,10,11,12,13,14,15,17,18,19,20,21,22,23],spell:5,sphinx:8,split:14,split_traintest:14,srgan:[5,6,10,22],srgan_train:[5,6,16],srgantrain:[5,6],stackoverflow:3,start:[6,11,12,17,18,19,20,21,22,23],start_logg:[11,12,18,20,21,22,23],step:[11,12,17,18,20,21,22,23],stop_train:[11,12],store:6,str:[13,14,15],subdirectori:14,suit:2,sum:18,superr:[5,6,22],support:[0,20],synonym:5,tabul:8,take:15,taken:[2,13],tan:1,target:0,target_transform:13,tbl:8,tbldata:5,techniqu:5,temporari:0,tensorboard:[4,5],tensorboardx:8,tensorflow:8,terminalt:8,test:[5,6,9,10,14,17,18,19,20,21,22,23],test_arg:[10,22],test_batch:22,test_list:14,test_loop:[11,12],test_step:[11,12,20,21,22,23],tfrecord:6,than:5,thi:[0,4,9,11,12,15,18,19,20,21,22,23],thu:5,time:[6,19],tini:5,titem:14,titl:13,torch:[8,9,11,12,17,18,19,20,21,22,23],torchaudio:8,torchsummari:8,torchvis:8,total:[14,23],total_loss:18,tqdm:8,trail:5,train:[0,4,5,9,13,14,17,18,19,20,21,22,23],train_batch:[11,12,22,23],train_dataset:13,train_epoch:[11,12],train_list:14,train_loop:[11,12],trainer:[6,9,11,12,17,18,19,20,21,22,23],training_step:[11,17,18,19,20,21],transfer:2,transform:[5,13],translat:[5,6,23],trnr:6,tupl:[14,15],tutori:[4,5,7],two:15,txt:8,type:[9,13,15],uncommit:0,underscor:5,unet:[5,6,21],unet_train:[5,6,16],unettrain:[5,6],unist:8,unpair:23,untrack:0,update_met:18,upgrad:8,usag:7,use:[4,5,11,12],used:5,uses:[3,17,18,19,20,21,22,23],using:[2,5,13,23],usual:5,util:[5,6,9,11,12,17,18,19,20,21,22,23],valid:[6,9,13],valu:15,variabl:5,vertic:15,vgg16:17,vgg:[0,5,6],vgg_trainer:0,vid_fn:14,video:14,view:15,visdom:[5,8],visdom_plot:18,vision:2,visual:[5,13],visualize_dataset:13,wai:[5,11,12],webpag:2,weight:[4,6],weights_path:6,were:0,what:4,wheel:8,when:0,where:6,whether:15,which:[3,11,12,14,18,19,20,21,22,23],whose:[5,15],width:15,word:5,work:[5,6,18,19,20,21,22,23],written:5,x_flip:15,x_random:15,y_flip:15,y_random:15,yolo:[4,19],yolo_train:[5,6,16],yolo_v3:5,yolotrain:[5,6],yolov3:[5,6,19],you:5,zero:[11,12,17,18,20,21,22,23]},titles:["Changelog","Concepts","Downloads","FAQ","Handbook","Overview","Tutorial","farabio","Usage","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">basetrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">configs</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">convnettrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">gantrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">biodatasets</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">dirops</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">imgops</span></code> Module","Reference","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">class_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">faster_rcnn_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">yolo_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">attunet_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">unet_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">srgan_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">cyclegan_trainer</span></code> Module"],titleterms:{"class":[11,12,13,17,18,19,20,21,22,23],"default":[10,11,12],"function":1,"public":2,activ:[1,8],arctan:1,arctang:1,argument:10,attribut:[11,12],attunet_train:20,attunettrain:20,basetrain:9,binari:1,biodataset:13,biomed:2,bipolar:1,can:5,categori:10,caveat:5,chang:0,changelog:0,chestxraydataset:13,cifar10:17,class_train:17,classif:17,classtrain:17,clean:5,clone:8,code:5,concept:1,conda:8,config:10,configur:10,content:[1,6],contribut:5,convnettrain:11,core:16,custom:6,cyclegan_train:23,cyclegantrain:23,data:16,dataset:[2,6],diagram:5,dirop:14,doc:[11,12,13],download:2,dsb18dataset:13,elu:1,environ:8,evalu:[11,12],exponenti:1,faq:3,farabio:7,faster_rcnn_train:18,fasterrcnntrain:18,from:8,gantrain:12,get:6,git:8,handbook:4,histocancerdataset:13,hook:[11,12],how:[5,6,8],hyperbol:1,imgop:15,indic:7,inherit:5,init:[11,12],instal:8,issu:5,leaki:1,lifecycl:[11,12],linear:1,linux:6,loop:[11,12],method:[11,12],model:[2,6,10,16],modul:[9,10,11,12,13,14,15,17,18,19,20,21,22,23],nativ:[11,12],non:[11,12],organ:5,overview:[5,7],packag:[5,16],pid:6,piecewis:1,pip:8,prerequisit:8,pretrain:2,purpos:5,recent:0,rectifi:1,refer:[16,17,18,19,20,21,22,23],regist:[14,15],relat:6,relu:1,report:5,repositori:8,retinopathydataset:13,sigmoid:1,softplu:1,srgan_train:22,srgantrain:22,step:1,structur:5,tabl:[1,6,7],tangent:1,tanh:1,tensorboard:6,test:[11,12],thi:5,train:[6,11,12],trainer:5,tree:5,tutori:6,unet_train:21,unettrain:21,unit:1,usag:8,use:6,user:6,weight:2,what:5,yolo:6,yolo_train:19,yolotrain:19}})