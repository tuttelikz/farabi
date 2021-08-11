import torch
from torchvision import transforms
from farabio.models._utils import IntermediateLayerGetter
from farabio.models.classification.conv import resnet
from farabio.models.segmentation.fcn.fcn import FCN, FCNHead
from farabio.models.segmentation.deeplab.deeplabv3 import DeepLabHead, DeepLabV3
from farabio.utils.helpers import get_num_parameters

__all__ = ['fcn_resnet50', 'fcn_resnet101']


def _segm_model(name, backbone_name, num_classes, aux, pretrained_backbone=True):
    if 'resnet' in backbone_name:
        backbone = resnet.__dict__[backbone_name](
            replace_stride_with_dilation=[False, True, True])
        out_layer = 'layer4'
        out_inplanes = 2048
        aux_layer = 'layer3'
        aux_inplanes = 1024

    return_layers = {out_layer: 'out'}
    if aux:
        return_layers[aux_layer] = 'aux'
    backbone = IntermediateLayerGetter(backbone, return_layers=return_layers)

    aux_classifier = None

    model_map = {
        'deeplabv3': (DeepLabHead, DeepLabV3),
        'fcn': (FCNHead, FCN)
    }
    classifier = model_map[name][0](out_inplanes, num_classes)
    base_model = model_map[name][1]

    model = base_model(backbone, classifier, aux_classifier)
    return model


def _load_model(arch_type, backbone, n_classes, aux_loss, **kwargs):
    model = _segm_model(arch_type, backbone, n_classes, aux_loss, **kwargs)
    return model


def fcn_resnet50(n_classes=10, aux_loss=None, **kwargs):
    return _load_model('fcn', 'resnet50', n_classes, aux_loss, **kwargs)


def fcn_resfcn_resnet101(n_classes=10, aux_loss=None, **kwargs):
    return _load_model('fcn', 'resnet101', n_classes, aux_loss, **kwargs)


def deeplabv3_resnet50(num_classes=21, aux_loss=None, **kwargs):
    return _load_model('deeplabv3', 'resnet50', num_classes, aux_loss, **kwargs)


def deeplabv3_resnet101(num_classes=21, aux_loss=None, **kwargs):
    return _load_model('deeplabv3', 'resnet101', num_classes, aux_loss, **kwargs)


def test():
    x = torch.Tensor(4, 3, 256, 256)
    preprocess = transforms.Normalize(
        mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    input_tensor = preprocess(x)

    model = deeplabv3_resnet101()
    y = model(input_tensor)

    print("Trainable parameters: ", get_num_parameters(model))
    print("in shape: ", x.shape, ", out shape: ", y['out'].shape)


# test()
