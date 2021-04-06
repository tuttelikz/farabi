Search.setIndex({docnames:["handbook/changelog","handbook/concepts","handbook/downloads","handbook/faq","handbook/index","handbook/overview","handbook/tutorial","index","installation","reference/core.basetrainer","reference/core.configs","reference/core.convnettrainer","reference/core.gantrainer","reference/data.biodatasets","reference/data.dirops","reference/data.imgops","reference/index","reference/models.detection.faster_rcnn.faster_rcnn_trainer","reference/models.detection.yolov3.yolo_trainer","reference/models.segmentation.attunet.attunet_trainer","reference/models.segmentation.unet.unet_trainer","reference/models.superres.srgan.srgan_trainer","reference/models.translation.cyclegan.cyclegan_trainer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["handbook/changelog.rst","handbook/concepts.rst","handbook/downloads.rst","handbook/faq.rst","handbook/index.rst","handbook/overview.rst","handbook/tutorial.rst","index.rst","installation.rst","reference/core.basetrainer.rst","reference/core.configs.rst","reference/core.convnettrainer.rst","reference/core.gantrainer.rst","reference/data.biodatasets.rst","reference/data.dirops.rst","reference/data.imgops.rst","reference/index.rst","reference/models.detection.faster_rcnn.faster_rcnn_trainer.rst","reference/models.detection.yolov3.yolo_trainer.rst","reference/models.segmentation.attunet.attunet_trainer.rst","reference/models.segmentation.unet.unet_trainer.rst","reference/models.superres.srgan.srgan_trainer.rst","reference/models.translation.cyclegan.cyclegan_trainer.rst"],objects:{"farabio.core.basetrainer":{BaseTrainer:[9,0,1,""]},"farabio.core.basetrainer.BaseTrainer":{build_model:[9,1,1,""],evaluate:[9,1,1,""],get_testloader:[9,1,1,""],get_trainloader:[9,1,1,""],init_attr:[9,1,1,""],test:[9,1,1,""],train:[9,1,1,""]},"farabio.core.configs":{_cfg_attunet:[10,2,1,""],_cfg_cyclegan:[10,2,1,""],_cfg_fasterrcnn:[10,2,1,""],_cfg_srgan:[10,2,1,""],_cfg_unet:[10,2,1,""],_cfg_yolov3:[10,2,1,""]},"farabio.core.convnettrainer":{ConvnetTrainer:[11,0,1,""]},"farabio.core.convnettrainer.ConvnetTrainer":{__init__:[11,1,1,""],build_model:[11,1,1,""],build_parallel_model:[11,1,1,""],default_attr:[11,1,1,""],define_compute_attr:[11,1,1,""],define_data_attr:[11,1,1,""],define_log_attr:[11,1,1,""],define_misc_attr:[11,1,1,""],define_model_attr:[11,1,1,""],define_test_attr:[11,1,1,""],define_train_attr:[11,1,1,""],evaluate_batch:[11,1,1,""],evaluate_epoch:[11,1,1,""],exit_trainer:[11,1,1,""],get_testloader:[11,1,1,""],get_trainloader:[11,1,1,""],init_attr:[11,1,1,""],load_model:[11,1,1,""],load_parallel_model:[11,1,1,""],loss_backward:[11,1,1,""],on_end_test_batch:[11,1,1,""],on_end_training_batch:[11,1,1,""],on_epoch_end:[11,1,1,""],on_evaluate_batch_end:[11,1,1,""],on_evaluate_batch_start:[11,1,1,""],on_evaluate_end:[11,1,1,""],on_evaluate_epoch_end:[11,1,1,""],on_evaluate_epoch_start:[11,1,1,""],on_evaluate_start:[11,1,1,""],on_start_test_batch:[11,1,1,""],on_start_training_batch:[11,1,1,""],on_test_end:[11,1,1,""],on_test_start:[11,1,1,""],on_train_end:[11,1,1,""],on_train_epoch_end:[11,1,1,""],on_train_epoch_start:[11,1,1,""],on_train_start:[11,1,1,""],optimizer_step:[11,1,1,""],optimizer_zero_grad:[11,1,1,""],save_model:[11,1,1,""],save_parallel_model:[11,1,1,""],start_logger:[11,1,1,""],stop_train:[11,1,1,""],test:[11,1,1,""],test_loop:[11,1,1,""],test_step:[11,1,1,""],train:[11,1,1,""],train_batch:[11,1,1,""],train_epoch:[11,1,1,""],train_loop:[11,1,1,""],training_step:[11,1,1,""]},"farabio.core.gantrainer":{GanTrainer:[12,0,1,""]},"farabio.core.gantrainer.GanTrainer":{__init__:[12,1,1,""],build_model:[12,1,1,""],default_attr:[12,1,1,""],define_compute_attr:[12,1,1,""],define_data_attr:[12,1,1,""],define_log_attr:[12,1,1,""],define_misc_attr:[12,1,1,""],define_model_attr:[12,1,1,""],define_test_attr:[12,1,1,""],define_train_attr:[12,1,1,""],discriminator_backward:[12,1,1,""],discriminator_loss:[12,1,1,""],discriminator_optim_step:[12,1,1,""],discriminator_zero_grad:[12,1,1,""],evaluate_batch:[12,1,1,""],evaluate_epoch:[12,1,1,""],generator_backward:[12,1,1,""],generator_loss:[12,1,1,""],generator_optim_step:[12,1,1,""],generator_zero_grad:[12,1,1,""],get_dataloader:[12,1,1,""],get_testloader:[12,1,1,""],get_trainloader:[12,1,1,""],init_attr:[12,1,1,""],load_model:[12,1,1,""],on_end_test_batch:[12,1,1,""],on_end_training_batch:[12,1,1,""],on_epoch_end:[12,1,1,""],on_evaluate_batch_end:[12,1,1,""],on_evaluate_batch_start:[12,1,1,""],on_evaluate_end:[12,1,1,""],on_evaluate_epoch_end:[12,1,1,""],on_evaluate_epoch_start:[12,1,1,""],on_evaluate_start:[12,1,1,""],on_start_test_batch:[12,1,1,""],on_start_training_batch:[12,1,1,""],on_test_end:[12,1,1,""],on_test_start:[12,1,1,""],on_train_end:[12,1,1,""],on_train_epoch_end:[12,1,1,""],on_train_epoch_start:[12,1,1,""],on_train_start:[12,1,1,""],save_model:[12,1,1,""],start_logger:[12,1,1,""],stop_train:[12,1,1,""],test:[12,1,1,""],test_loop:[12,1,1,""],test_step:[12,1,1,""],train:[12,1,1,""],train_batch:[12,1,1,""],train_epoch:[12,1,1,""],train_loop:[12,1,1,""]},"farabio.data.biodatasets":{ChestXray:[13,0,1,""]},"farabio.data.dirops":{DirOps:[14,0,1,""]},"farabio.data.dirops.DirOps":{del_files:[14,1,1,""],dirinfo:[14,1,1,""],lsmedia:[14,1,1,""],split_traintest:[14,1,1,""]},"farabio.data.imgops":{ImgOps:[15,0,1,""]},"farabio.data.imgops.ImgOps":{approx_bcg:[15,1,1,""],blend_img:[15,1,1,""],blend_imgs:[15,1,1,""],get_date:[15,1,1,""],mask_img:[15,1,1,""],pad_img:[15,1,1,""],print_imginfo:[15,1,1,""],profile_img:[15,1,1,""],random_flip:[15,1,1,""],read_image:[15,1,1,""],slice_img:[15,1,1,""]},"farabio.models.detection.faster_rcnn.faster_rcnn_trainer":{FasterRCNNTrainer:[17,0,1,""]},"farabio.models.detection.faster_rcnn.faster_rcnn_trainer.FasterRCNNTrainer":{build_model:[17,1,1,""],define_log_attr:[17,1,1,""],define_misc_attr:[17,1,1,""],define_model_attr:[17,1,1,""],define_train_attr:[17,1,1,""],evaluate_batch:[17,1,1,""],forward:[17,1,1,""],get_meter_data:[17,1,1,""],get_testloader:[17,1,1,""],get_trainloader:[17,1,1,""],load_model:[17,1,1,""],loss_backward:[17,1,1,""],on_epoch_end:[17,1,1,""],on_evaluate_batch_start:[17,1,1,""],on_evaluate_epoch_end:[17,1,1,""],on_evaluate_epoch_start:[17,1,1,""],on_start_training_batch:[17,1,1,""],on_train_epoch_start:[17,1,1,""],on_train_start:[17,1,1,""],optimizer_step:[17,1,1,""],optimizer_zero_grad:[17,1,1,""],reset_meters:[17,1,1,""],save:[17,1,1,""],save_model:[17,1,1,""],start_logger:[17,1,1,""],training_step:[17,1,1,""],update_meters:[17,1,1,""],visdom_plot:[17,1,1,""]},"farabio.models.detection.yolov3.yolo_trainer":{YoloTrainer:[18,0,1,""]},"farabio.models.detection.yolov3.yolo_trainer.YoloTrainer":{build_model:[18,1,1,""],define_compute_attr:[18,1,1,""],define_data_attr:[18,1,1,""],define_log_attr:[18,1,1,""],define_misc_attr:[18,1,1,""],define_model_attr:[18,1,1,""],define_test_attr:[18,1,1,""],define_train_attr:[18,1,1,""],detect_perform:[18,1,1,""],evaluate_batch:[18,1,1,""],get_detections:[18,1,1,""],get_trainloader:[18,1,1,""],on_end_training_batch:[18,1,1,""],on_epoch_end:[18,1,1,""],on_evaluate_batch_start:[18,1,1,""],on_evaluate_epoch_end:[18,1,1,""],on_evaluate_epoch_start:[18,1,1,""],on_start_training_batch:[18,1,1,""],on_train_epoch_start:[18,1,1,""],plot_bbox:[18,1,1,""],save_model:[18,1,1,""],test:[18,1,1,""],training_step:[18,1,1,""]},"farabio.models.segmentation.attunet.attunet_trainer":{AttunetTrainer:[19,0,1,""]},"farabio.models.segmentation.attunet.attunet_trainer.AttunetTrainer":{build_model:[19,1,1,""],build_parallel_model:[19,1,1,""],define_compute_attr:[19,1,1,""],define_data_attr:[19,1,1,""],define_log_attr:[19,1,1,""],define_misc_attr:[19,1,1,""],define_model_attr:[19,1,1,""],define_test_attr:[19,1,1,""],define_train_attr:[19,1,1,""],evaluate_batch:[19,1,1,""],generate_result_img:[19,1,1,""],get_testloader:[19,1,1,""],get_trainloader:[19,1,1,""],load_model:[19,1,1,""],load_parallel_model:[19,1,1,""],loss_backward:[19,1,1,""],on_end_test_batch:[19,1,1,""],on_end_training_batch:[19,1,1,""],on_epoch_end:[19,1,1,""],on_evaluate_batch_end:[19,1,1,""],on_evaluate_epoch_end:[19,1,1,""],on_evaluate_epoch_start:[19,1,1,""],on_start_training_batch:[19,1,1,""],on_test_start:[19,1,1,""],on_train_epoch_end:[19,1,1,""],on_train_epoch_start:[19,1,1,""],optimizer_step:[19,1,1,""],optimizer_zero_grad:[19,1,1,""],save_model:[19,1,1,""],save_parallel_model:[19,1,1,""],show_model_summary:[19,1,1,""],start_logger:[19,1,1,""],test_step:[19,1,1,""],training_step:[19,1,1,""]},"farabio.models.segmentation.unet.unet_trainer":{UnetTrainer:[20,0,1,""]},"farabio.models.segmentation.unet.unet_trainer.UnetTrainer":{build_model:[20,1,1,""],build_parallel_model:[20,1,1,""],define_compute_attr:[20,1,1,""],define_data_attr:[20,1,1,""],define_log_attr:[20,1,1,""],define_misc_attr:[20,1,1,""],define_model_attr:[20,1,1,""],define_test_attr:[20,1,1,""],define_train_attr:[20,1,1,""],evaluate_batch:[20,1,1,""],generate_result_img:[20,1,1,""],get_testloader:[20,1,1,""],get_trainloader:[20,1,1,""],load_model:[20,1,1,""],load_parallel_model:[20,1,1,""],loss_backward:[20,1,1,""],on_end_test_batch:[20,1,1,""],on_end_training_batch:[20,1,1,""],on_epoch_end:[20,1,1,""],on_evaluate_batch_end:[20,1,1,""],on_evaluate_epoch_end:[20,1,1,""],on_evaluate_epoch_start:[20,1,1,""],on_start_training_batch:[20,1,1,""],on_test_start:[20,1,1,""],on_train_epoch_end:[20,1,1,""],on_train_epoch_start:[20,1,1,""],optimizer_step:[20,1,1,""],optimizer_zero_grad:[20,1,1,""],save_model:[20,1,1,""],save_parallel_model:[20,1,1,""],show_model_summary:[20,1,1,""],start_logger:[20,1,1,""],test_step:[20,1,1,""],training_step:[20,1,1,""]},"farabio.models.superres.srgan.srgan_trainer":{SrganTrainer:[21,0,1,""]},"farabio.models.superres.srgan.srgan_trainer.SrganTrainer":{build_model:[21,1,1,""],define_compute_attr:[21,1,1,""],define_data_attr:[21,1,1,""],define_log_attr:[21,1,1,""],define_misc_attr:[21,1,1,""],define_model_attr:[21,1,1,""],define_train_attr:[21,1,1,""],discriminator_backward:[21,1,1,""],discriminator_loss:[21,1,1,""],discriminator_optim_step:[21,1,1,""],discriminator_zero_grad:[21,1,1,""],evaluate_batch:[21,1,1,""],generator_backward:[21,1,1,""],generator_loss:[21,1,1,""],generator_optim_step:[21,1,1,""],generator_zero_grad:[21,1,1,""],get_testloader:[21,1,1,""],get_trainloader:[21,1,1,""],load_model:[21,1,1,""],on_end_training_batch:[21,1,1,""],on_epoch_end:[21,1,1,""],on_evaluate_batch_end:[21,1,1,""],on_evaluate_epoch_end:[21,1,1,""],on_evaluate_epoch_start:[21,1,1,""],on_start_training_batch:[21,1,1,""],on_test_end:[21,1,1,""],on_test_start:[21,1,1,""],on_train_epoch_start:[21,1,1,""],optimizer_zero_grad:[21,1,1,""],save_csv:[21,1,1,""],save_model:[21,1,1,""],start_logger:[21,1,1,""],test_batch:[21,1,1,""],test_step:[21,1,1,""],train_batch:[21,1,1,""]},"farabio.models.translation.cyclegan.cyclegan_trainer":{CycleganTrainer:[22,0,1,""]},"farabio.models.translation.cyclegan.cyclegan_trainer.CycleganTrainer":{build_model:[22,1,1,""],cycle_g_loss:[22,1,1,""],define_compute_attr:[22,1,1,""],define_data_attr:[22,1,1,""],define_log_attr:[22,1,1,""],define_misc_attr:[22,1,1,""],define_model_attr:[22,1,1,""],define_test_attr:[22,1,1,""],define_train_attr:[22,1,1,""],discriminatorA_backward:[22,1,1,""],discriminatorA_loss:[22,1,1,""],discriminatorA_optim_step:[22,1,1,""],discriminatorA_zero_grad:[22,1,1,""],discriminatorB_backward:[22,1,1,""],discriminatorB_loss:[22,1,1,""],discriminatorB_optim_step:[22,1,1,""],discriminatorB_zero_grad:[22,1,1,""],fake_dA_loss:[22,1,1,""],fake_dB_loss:[22,1,1,""],gan_g_loss:[22,1,1,""],generator_backward:[22,1,1,""],generator_loss:[22,1,1,""],generator_optim_step:[22,1,1,""],generator_zero_grad:[22,1,1,""],get_testloader:[22,1,1,""],get_trainloader:[22,1,1,""],identity_g_loss:[22,1,1,""],load_model:[22,1,1,""],on_end_test_batch:[22,1,1,""],on_end_training_batch:[22,1,1,""],on_epoch_end:[22,1,1,""],on_start_training_batch:[22,1,1,""],on_test_start:[22,1,1,""],on_train_epoch_end:[22,1,1,""],on_train_epoch_start:[22,1,1,""],on_train_start:[22,1,1,""],real_dA_loss:[22,1,1,""],real_dB_loss:[22,1,1,""],save_model:[22,1,1,""],start_logger:[22,1,1,""],test_step:[22,1,1,""],train_batch:[22,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function"},terms:{"01497":17,"02640":18,"02767":18,"02_ssd4tb":13,"03999":19,"04597":20,"04802":21,"0b7c94e810":0,"100":15,"1024":15,"10593":22,"1505":20,"1506":[17,18],"1609":21,"1703":22,"1804":[18,19],"200820_191645":15,"2013":2,"2017":2,"2018":2,"2019":2,"255":15,"6006":6,"abstract":[9,11,12,17,18,19,20,22],"class":[5,6,9,13,14,15],"default":[14,15],"float":[14,15],"function":[4,5,10,11,12,15],"import":[6,14,15],"int":[11,12,14,15,21,22],"public":[4,13],"return":[14,15,22],"short":5,"static":15,"super":[2,5,21],"true":[13,14,15],The:[5,10,15,17],There:[0,5],These:10,Using:21,Will:6,__init__:[11,12],__main__:6,__name__:6,_cfg_attunet:10,_cfg_cyclegan:10,_cfg_fasterrcnn:10,_cfg_srgan:10,_cfg_unet:10,_cfg_yolov3:10,abbrevi:5,abc:[9,11],abl:5,abov:17,abs:[17,18,19,20,21,22],access:[2,11,12],accord:6,accur:5,action:[11,12,19,20,21,22],activ:4,adjust:6,adversari:[21,22],aitorzip:22,albument:8,all:[5,8,9],analyz:5,answer:3,append:5,applic:5,approach:5,approx_bcg:15,approxim:15,apto:2,architectur:[11,17],area:15,arg:[9,11,12,15,17,18,19,20,21,22],argument:5,arrai:[1,15],arxiv:[17,18,19,20,21,22],assert:6,associ:5,attent:[10,19],attribut:[14,15,17,18,19,20,21,22],attunet:[5,6,19],attunet_train:[5,6,16],attunettrain:[5,6],aud_fn:14,audio:14,autopep8:8,averag:15,avoid:5,back:[11,12,17,19,20,21],background:15,backward:[12,21,22],base:[9,10],basetrain:[5,11,16,18,19,20,22],bash:6,basic:[14,15],batch:[11,12,17,18,19,20,21,22],batch_siz:13,bboxtool:5,befor:14,begin:1,below:15,benchmark:2,better:5,between:15,binari:15,biodataset:16,biomed:[4,5,13],blend:15,blend_img:15,blind:2,block:5,blue:15,bool:[14,15],border:5,both:9,bowl:2,branch:0,bug:5,build:[9,11,12,17,18,19,20,21,22],build_model:[9,11,12,17,18,19,20,21,22],build_parallel_model:[11,12,19,20],can:[4,11,12],cancer:2,cannot:19,capit:5,capword:5,cervic:2,cfg:[5,6],challeng:2,chang:[4,6],changelog:[4,7],channel:15,chenyuntc:17,chest:[2,13],chestxrai:13,chestxray_dataset:13,choos:6,chw:15,clash:5,class_:5,classfic:5,classif:17,clss:5,cnn:17,coco:[2,5],code:[1,6,17,18,19,20,21,22],col1:15,col2:15,collect:[2,11,12],collect_env:5,color:15,colour:15,com:[8,17,18,19,20,21,22],combin:10,commit:0,competit:2,compil:0,complet:6,complex:5,comput:[11,12,18,19,20,21,22],compute_arg:10,concept:[4,7],conda:3,config:[5,6,11,12,16,17,18,19,20,21,22],configur:6,consist:22,constant:5,contain:[10,15],content:15,contribut:4,conv:6,convent:5,convnet:11,convnettrain:[5,16,18,19,20],coolenv:8,coordin:15,copi:15,core:[5,6,7,9,10,11,12,22],corrupt:5,creat:[6,8,14,15],create_custom_model:[5,6],creator_tool:5,cudatoolkit:8,current:[11,12,14,21,22],custom:[4,5,11,12,15,17,18,19,20,21,22],cut:15,cwd:14,cycl:22,cycle_g_loss:22,cyclegan:[2,5,6,10,22],cyclegan_train:[5,6,16],cyclegantrain:[5,6],dai:5,darknet53:6,darknet:5,data:[2,5,6,7,9,10,11,12,13,14,15,17,18,19,20,21,22],data_config:6,dataload:[5,9,11,12,13,17,18,19,20,21,22],dataset:[4,5,9,13],date:[8,15],deep:5,default_attr:[11,12],default_cfg:6,defin:[5,9,10,11,12,17,18,19,20,21,22],define_compute_attr:[11,12,18,19,20,21,22],define_data_attr:[11,12,18,19,20,21,22],define_log_attr:[11,12,17,18,19,20,21,22],define_misc_attr:[11,12,17,18,19,20,21,22],define_model_attr:[11,12,17,18,19,20,21,22],define_test_attr:[11,12,18,19,20,22],define_train_attr:[11,12,17,18,19,20,21,22],definit:15,del_fil:14,delet:14,dermatoscop:2,descript:15,desir:15,detect:[2,5,6,17,18],detect_perform:[6,18],determin:15,dict:15,dictionari:15,digit:5,dimens:15,dir:[6,14],dir_path:14,direct:15,dirinfo:14,dirop:[5,16],dirsiz:14,discrimin:[12,21,22],discriminator_backward:[12,21],discriminator_loss:[12,21],discriminator_optim_step:[12,21],discriminator_zero_grad:[12,21],discriminatora_backward:22,discriminatora_loss:22,discriminatora_optim_step:22,discriminatora_zero_grad:22,discriminatorb_backward:22,discriminatorb_loss:22,discriminatorb_optim_step:22,discriminatorb_zero_grad:22,div2k:2,download:[4,7],droi:15,dtype:15,dure:[11,17,18,19,20],easydict:6,edict:6,edit:8,educ:5,either:[11,12],element:15,elif:6,end:[1,11,12,17,18,19,20,21,22],engin:5,enhanc:5,ensur:8,entri:[11,12],epoch:[11,12,17,18,19,20,21,22],equip:5,eriklindernoren:18,especi:5,etim:6,evalu:[2,9,17,18,19,20,21],evaluate_batch:[11,12,17,18,19,20,21],evaluate_epoch:[11,12],everi:11,exact:[11,12],exampl:[13,14,15],except:[5,14],exist:14,exit:11,exit_train:11,fake:22,fake_da_loss:22,fake_db_loss:22,fals:[14,15],faq:[4,7],farabio:[5,6,9,10,11,12,13,14,15,17,18,19,20,21,22],faster:[10,17],faster_rcnn:[5,6,17],faster_rcnn_train:[5,6,16],faster_rcnn_vgg16:5,fasterrcnn:17,fasterrcnntrain:[5,6],field:6,fig:15,figur:15,file:[6,14,15],filenam:14,find:5,fire:8,first:15,fit:19,flag:[8,14],flip:15,float32:15,folder:14,follow:[5,6],format:[14,15],forward:17,frac:1,friendli:13,from:[2,3,5,6,13,14,15,19,20],from_loc:8,from_pip:8,fsize:15,fundu:2,gan:22,gan_g_loss:22,gantrain:[5,16,21,22],gener:[5,12,19,20,21,22],generate_result_img:[19,20],generator_backward:[12,21,22],generator_loss:[12,21,22],generator_optim_step:[12,21,22],generator_zero_grad:[12,21,22],get:15,get_dat:15,get_dataload:12,get_detect:18,get_meter_data:17,get_testload:[9,11,12,17,19,20,21,22],get_trainload:[9,11,12,17,18,19,20,21,22],git:[5,17,18,19,20,21,22],github:[2,3,8,17,18,19,20,21,22],given:15,going:17,gpu:[3,11,19,20],grad:21,gradient:[11,12,17,19,20,21,22],grai:15,grayscal:15,green:15,ham10000:2,handbook:7,has:5,have:5,head:17,height:15,helper:[5,6],here:[11,12,17,18,19,20,21,22],hire:1,histogram:15,histopatholog:[2,5],home:13,hook:[17,18,19,20,21,22],hooksa:11,horizont:15,hour:15,how:[3,4,7],howev:18,http:[8,17,18,19,20,21,22],human:15,iccv:2,ident:22,identity_g_loss:22,imag:[2,5,14,15,19,20,22],image_segment:19,imageio:8,img1:15,img2:15,img:15,img_b:15,img_blend:15,img_fn:14,img_g:15,img_mask:15,img_ov:15,img_pad:15,img_path:15,img_r:15,img_ref:15,img_slic:15,img_slices_info:15,imgmask:15,imgop:[5,14,16],imgpath:15,imgtoblend:15,implement:[17,18,19,20,21,22],improv:5,includ:[14,17],index:7,info:15,inform:[14,15],inherit:[9,11,18,19,20,22],init:6,init_attr:[9,11,12],initi:[9,11,12],input:13,instal:[3,7],instanc:[5,14,15],integr:5,intel:2,intens:15,interact:15,interest:[5,14,15],intermedi:15,ipdb:8,issu:3,item:14,iter:13,itim:6,its:15,jpg:15,kaggl:2,kei:15,kernel:[5,6],keyword:5,kitti:2,know:3,kwarg:17,l1loss:22,lab:5,lane:2,larg:2,learn:5,leejunhyun:19,left:1,leftthoma:21,leq:1,lesion:2,letter:5,level:5,lifecycl:18,linux:4,list:[6,8,14,15],lll:1,load:[6,11,12,13,17,19,20,21,22],load_model:[11,12,17,19,20,21,22],load_parallel_model:[11,19,20],local:[8,17],log:[11,12,17,18,19,20,21,22],log_arg:10,logdir:6,logger:[11,12,17,19,20,21,22],loop:[9,17,18,19,20,21,22],loss:[5,11,17,19,20,22],loss_backward:[11,17,19,20],lowercas:5,lsmedia:14,main:[0,10,11],make:[11,12],manner:13,mask:15,mask_img:15,match:14,matplotlib:[8,15],max:[1,15],media:14,medic:5,memori:14,meter:5,method:[9,14,15,17,18,19,20,21,22],metric:5,milesi:20,min:[1,15],misc:5,misc_arg:10,miscellan:[11,12,17,18,19,20,21,22],mnist:2,mobileodt:2,mode:[6,8,19],model:[3,4,5,7,9,11,12,17,18,19,20,21,22],model_def:6,model_nam:21,modifi:6,modul:[5,7,16],monet2photo:2,monitor:5,mseloss:22,multi:[2,11,19,20],name:[5,6],nano:6,navig:6,ndarrai:15,ndir:14,neat:14,necessari:5,neq:1,net:[10,19,20],network:[17,21,22],next:13,nfile:14,none:[13,15],normal:5,notimplementederror:9,ntire:2,nuclei:2,num:6,number:[14,15],numpi:[8,15],object:[2,11,12,15,18,21],occupi:14,on_end_test_batch:[11,12,19,20,22],on_end_training_batch:[11,12,18,19,20,21,22],on_epoch_end:[11,12,17,18,19,20,21,22],on_evaluate_batch_end:[11,12,19,20,21],on_evaluate_batch_start:[11,12,17,18],on_evaluate_end:[11,12],on_evaluate_epoch_end:[11,12,17,18,19,20,21],on_evaluate_epoch_start:[11,12,17,18,19,20,21],on_evaluate_start:[11,12],on_start_test_batch:[11,12],on_start_training_batch:[11,12,17,18,19,20,21,22],on_test_end:[11,12,21],on_test_start:[11,12,19,20,21,22],on_train_end:[11,12],on_train_epoch_end:[11,12,19,20,22],on_train_epoch_start:[11,12,17,18,19,20,21,22],on_train_start:[11,12,17,22],one:[19,20],onli:[6,14,19],open:5,opencv_python:8,oper:14,opt:15,optic:5,optim:[11,12,17,19,20,21,22],optimizer_step:[11,17,19,20],optimizer_zero_grad:[11,17,19,20,21],option:15,order:15,org:[17,18,19,20,21,22],organ:4,orien:15,orient:15,origin:[17,18,19,20,21,22],our:5,out_img:15,overag:15,overlai:15,overlap:15,overrid:[9,11,12,17,18,19,20,21,22],overview:4,packag:[3,4,7,10],pad:15,pad_img:15,page:7,panda:8,paper:2,parallel:[11,19,20],param:15,paramet:[11,12,14,15,18,19,20,21,22],parent:21,parser:5,path:[14,15],pdf:1,pep:5,perform:14,perhap:5,photographi:2,piec:15,pigment:2,pillow:8,pip:3,pipelin:5,pixel:15,place:10,pleas:5,plot:15,plot_bbox:18,pmax:15,pmin:15,pneumonia:2,png:[1,14,15],point:15,port:6,pre:5,predefin:15,prepar:5,prerequisit:7,pretrain:4,pretrained_weight:6,print:[6,14,15],print_imginfo:15,problem:5,process:5,profil:15,profile_img:15,project:15,propag:[11,12,17,19,20,21],properti:9,propos:[17,18,19,20,21,22],prototyp:5,provid:[11,12,13,14,15],pt1:15,pt2:15,pth:6,pull:5,purpos:4,pursu:5,put:[11,12,19,20,21,22],pypi:8,python:[3,6,8,9],pytorch:[8,13,17,18,20,22],qualiti:5,quick:[11,12],rai:[2,13],rais:9,random_flip:15,randomli:15,rang:15,rapidli:5,rarr:5,rather:5,ratio:[14,15],rcnn:[10,17],read:15,read_imag:15,readabl:[5,15],real:[18,22],real_da_loss:22,real_db_loss:22,recent:4,recommonmark:8,red:15,ref_:15,refer:7,reflist:14,region:[5,17],region_proposal_network:5,regul:5,relat:[4,10,11,12,17,18,19,20,21,22],releas:2,repres:15,request:5,requir:8,research:5,reserv:5,reset_met:17,resolut:[2,5,21],result:[5,15],retina:2,retreiv:[11,12,17,18,19,20,21,22],retriev:14,return_param:15,reus:5,rgb:15,right:1,road:2,roi:15,roi_cls_loss:17,roi_loc_loss:17,root:13,row1:15,row2:15,rpn:17,rpn_cls_loss:17,rpn_loc_loss:17,same:5,sampl:15,sample_list:14,save:[11,12,17,18,19,20,21,22],save_csv:21,save_dict:17,save_model:[11,12,17,18,19,20,21,22],save_parallel_model:[11,19,20],save_path:17,scalar:22,scale:2,scienc:2,scikit_imag:8,scipi:8,screen:[2,5],seaborn:8,search:7,second:15,segment:[2,5,6,19,20],self:[14,15],send:[5,12,21,22],separ:[5,10],set:[6,10,11,12,17,18,19,20,21,22],setuptool:8,sever:5,shape:15,should:5,show_model_summari:[19,20],shuffl:[13,14],simg:15,simpl:17,singl:5,size:15,skin:2,slice:15,slice_img:15,solut:3,sourc:[1,2,9,10,11,12,13,14,15,17,18,19,20,21,22],spell:5,sphinx:8,split:[13,14],split_traintest:14,srgan:[5,6,10,21],srgan_train:[5,6,16],srgantrain:[5,6],stackoverflow:3,start:[6,11,12,17,18,19,20,21,22],start_logg:[11,12,17,19,20,21,22],step:[11,12,17,19,20,21,22],stop_train:[11,12],store:6,str:[14,15],subdirectori:14,suit:2,sum:17,superr:[5,6,21],support:19,suzi:13,synonym:5,tabul:8,take:15,taken:2,tan:1,tbl:8,tbldata:5,techniqu:5,tensorboard:[4,5],tensorboardx:8,tensorflow:8,terminalt:8,test:[5,6,9,10,13,14,17,18,19,20,21,22],test_arg:[10,21],test_batch:21,test_list:14,test_loop:[11,12],test_step:[11,12,19,20,21,22],tfrecord:6,than:5,thi:[0,4,9,11,12,15,17,18,19,20,21,22],thu:5,time:[6,18],tini:5,titem:14,torch:[8,9,11,12,13,17,18,19,20,21,22],torchaudio:8,torchsummari:8,torchvis:8,total:[14,22],total_loss:17,tqdm:8,trail:5,train:[4,5,9,13,14,17,18,19,20,21,22],train_batch:[11,12,21,22],train_epoch:[11,12],train_list:14,train_loop:[11,12],trainer:[6,9,11,12,17,18,19,20,21,22],training_step:[11,17,18,19,20],transfer:2,transform:[5,13],translat:[5,6,22],trnr:6,tupl:[14,15],tutori:[4,5,7],two:15,txt:8,type:[9,15],uncommit:0,underscor:5,unet:[5,6,20],unet_train:[5,6,16],unettrain:[5,6],unist:8,unpair:22,update_met:17,upgrad:8,usag:7,use:[4,5,11,12],used:5,uses:[3,17,18,19,20,21,22],using:[2,5,22],usual:5,util:[5,6,9,11,12,13,17,18,19,20,21,22],val:13,valid:[6,9],valu:15,variabl:5,vertic:15,vgg:5,vid_fn:14,video:14,view:15,visdom:[5,8],visdom_plot:17,vision:2,visual:5,wai:[5,11,12],webpag:2,weight:[4,6],weights_path:6,were:0,what:4,wheel:8,when:0,where:6,whether:15,which:[3,11,12,14,17,18,19,20,21,22],whose:[5,15],width:15,word:5,work:[5,6,17,18,19,20,21,22],written:5,x_flip:15,x_random:15,xrai:13,y_flip:15,y_random:15,yolo:[4,18],yolo_train:[5,6,16],yolo_v3:5,yolotrain:[5,6],yolov3:[5,6,18],you:5,zero:[11,12,17,19,20,21,22]},titles:["Changelog","Concepts","Downloads","FAQ","Handbook","Overview","Tutorial","farabio","Usage","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">basetrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">configs</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">convnettrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">gantrainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">biodatasets</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">dirops</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">imgops</span></code> Module","Reference","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">faster_rcnn_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">yolo_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">attunet_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">unet_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">srgan_trainer</span></code> Module","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">cyclegan_trainer</span></code> Module"],titleterms:{"class":[11,12,17,18,19,20,21,22],"default":[10,11,12],"function":1,"public":2,activ:[1,8],arctan:1,arctang:1,argument:10,attribut:[11,12],attunet_train:19,attunettrain:19,basetrain:9,binari:1,biodataset:13,biomed:2,bipolar:1,can:5,categori:10,caveat:5,chang:0,changelog:0,clean:5,clone:8,code:5,concept:1,conda:8,config:10,configur:10,content:[1,6],contribut:5,convnettrain:11,core:16,custom:6,cyclegan_train:22,cyclegantrain:22,data:16,dataset:[2,6],diagram:5,dirop:14,doc:[11,12],download:2,elu:1,environ:8,evalu:[11,12],exponenti:1,faq:3,farabio:7,faster_rcnn_train:17,fasterrcnntrain:17,from:8,gantrain:12,get:6,git:8,handbook:4,hook:[11,12],how:[5,6,8],hyperbol:1,imgop:15,indic:7,inherit:5,init:[11,12],instal:8,issu:5,leaki:1,lifecycl:[11,12],linear:1,linux:6,loop:[11,12],method:[11,12],model:[2,6,10,16],modul:[9,10,11,12,13,14,15,17,18,19,20,21,22],nativ:[11,12],non:[11,12],organ:5,overview:[5,7],packag:[5,16],pid:6,piecewis:1,pip:8,prerequisit:8,pretrain:2,purpos:5,recent:0,rectifi:1,refer:[16,17,18,19,20,21,22],regist:[14,15],relat:6,relu:1,report:5,repositori:8,sigmoid:1,softplu:1,srgan_train:21,srgantrain:21,step:1,structur:5,tabl:[1,6,7],tangent:1,tanh:1,tensorboard:6,test:[11,12],thi:5,train:[6,11,12],trainer:5,tree:5,tutori:6,unet_train:20,unettrain:20,unit:1,usag:8,use:6,user:6,weight:2,what:5,yolo:6,yolo_train:18,yolotrain:18}})