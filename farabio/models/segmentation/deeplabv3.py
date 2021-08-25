"""DeepLabV3

Paper: https://arxiv.org/pdf/1706.05587
Adapted from: https://github.com/qubvel/segmentation_models.pytorch/blob/master/segmentation_models_pytorch/deeplabv3/model.py

Copyright 2021 | farabio
"""
from typing import Optional, Any
import torch
import torch.nn as nn
import torch.nn.functional as F
from farabio.models.segmentation.base import SegModel, SegmentationHead
from farabio.models.segmentation.backbones._backbones import get_backbone
from farabio.utils.helpers import get_num_parameters

__all__ = [
    'DeepLabV3', 'deeplabv3_mobilenetv2', 'deeplabv3_resnet18', 'deeplabv3_resnet34', 
    'deeplabv3_resnet50', 'deeplabv3_resnet101', 'deeplabv3_resnet152'
]


class DeepLabV3(SegModel):
    def __init__(
        self,
        in_channels: int = 3,
        out_channels: int = 1,
        encoder_name: str = "resnet34",
        encoder_depth: int = 5,
        decoder_use_bn: bool = True,
        decoder_channels: int = 256,
        decoder_attention_type: Optional[str] = None,
        activation: Optional[str] = None,
        upsampling: int = 8
    ):
        super().__init__()
        
        self.encoder = get_backbone(
            encoder_name,
            in_channels = in_channels,
            depth = encoder_depth,
            output_stride=8
        )

        self.decoder = DeepLabV3Decoder(
            in_channels = self.encoder.out_channels[-1],
            out_channels = decoder_channels
        )
        
        self.seg_head = SegmentationHead(
            in_channels=self.decoder.out_channels,
            out_channels=out_channels,
            activation=activation,
            kernel_size=1,
            upsampling=upsampling
        )
        
        self.class_head = None
        self.name = "deeplabv3-{}".format(encoder_name)
        self.init()
        

class DeepLabV3Decoder(nn.Sequential):
    def __init__(self, in_channels, out_channels=256, atrous_rates=(12,24,36)):
        super().__init__(
            ASPP(in_channels, out_channels, atrous_rates),
            nn.Conv2d(out_channels, out_channels, 3, padding=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )
        self.out_channels = out_channels
        
    def forward(self, *features):
        return super().forward(features[-1])


class ASPP(nn.Module):
    def __init__(self, in_channels, out_channels, atrous_rates, separable=False):
        super(ASPP, self).__init__()
        modules = []
        modules.append(
            nn.Sequential(
                nn.Conv2d(in_channels, out_channels, 1, bias=False),
                nn.BatchNorm2d(out_channels),
                nn.ReLU()
            )
        )
        
        rate1, rate2, rate3 = tuple(atrous_rates)
        ASPPConvModule = ASPPConv if not separable else ASPPSeparableConv
        
        modules.append(ASPPConvModule(in_channels, out_channels, rate1))
        modules.append(ASPPConvModule(in_channels, out_channels, rate2))
        modules.append(ASPPConvModule(in_channels, out_channels, rate3))
        modules.append(ASPPPooling(in_channels, out_channels))
        
        self.convs = nn.ModuleList(modules)
        
        self.project = nn.Sequential(
            nn.Conv2d(5 * out_channels, out_channels, kernel_size=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(),
            nn.Dropout(0.5)
        )
    
    def forward(self, x):
        res = []
        for conv in self.convs:
            res.append(conv(x))
        res = torch.cat(res, dim=1)
        return self.project(res)
    

class ASPPConv(nn.Sequential):
    def __init__(self, in_channels, out_channels, dilation):
        super().__init__(
            nn.Conv2d(
                in_channels,
                out_channels,
                kernel_size=3,
                padding=dilation,
                dilation=dilation,
                bias=False
            ),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )


class ASPPSeparableConv(nn.Sequential):
    def __init__(self, in_channels, out_channels, dilation):
        super().__init__(
            SeparableConv2d(
                in_channels,
                out_channels,
                kernel_size=3,
                padding=dilation,
                dilation=dilation,
                bias=False
            ),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )
        

class ASPPPooling(nn.Sequential):
    def __init__(self, in_channels, out_channels):
        super().__init__(
            nn.AdaptiveAvgPool2d(1),
            nn.Conv2d(in_channels, out_channels, kernel_size=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )
    
    def forward(self, x):
        size = x.shape[-2:]
        for mod in self:
            x = mod(x)
        return F.interpolate(x, size=size, mode='bilinear', align_corners=False)
    

class SeparableConv2d(nn.Sequential):
    def __init__(
        self,
        in_channels,
        out_channels,
        kernel_size,
        stride=1,
        padding=0,
        dilation=1,
        bias=True
    ):
        depthwise_conv = nn.Conv2d(
            in_channels,
            in_channels,
            kernel_size,
            stride=stride,
            padding=padding,
            dilation=dilation,
            groups=in_channels,
            bias=False
        )
        pointwise_conv = nn.Conv2d(
            in_channels,
            out_channels,
            kernel_size=1,
            bias=bias
        )
        
        super().__init__(depthwise_conv, pointwise_conv)


def _deeplabv3(
    backbone: str = "resnet18",
    in_channels = 3,
    out_channels = 1,
    **kwargs: Any
) -> DeepLabV3:
    model = DeepLabV3(
        encoder_name=backbone,
        in_channels=in_channels,
        out_channels=out_channels
    )
    return model


def deeplabv3_mobilenetv2(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="mobilenet_v2", in_channels=in_channels, out_channels=out_channels, **kwargs)


def deeplabv3_resnet18(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="resnet18", in_channels=in_channels, out_channels=out_channels, **kwargs)


def deeplabv3_resnet34(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="resnet34", in_channels=in_channels, out_channels=out_channels, **kwargs)


def deeplabv3_resnet50(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="resnet50", in_channels=in_channels, out_channels=out_channels, **kwargs)


def deeplabv3_resnet101(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="resnet101", in_channels=in_channels, out_channels=out_channels, **kwargs)


def deeplabv3_resnet152(in_channels=3, out_channels=1, **kwargs: Any) -> DeepLabV3:
    return _deeplabv3(backbone="resnet152", in_channels=in_channels, out_channels=out_channels, **kwargs)


def test():
    x = torch.randn(4, 3, 256, 256)

    tests = {
        "deeplabv3_mobilenetv2": deeplabv3_mobilenetv2(),
        "deeplabv3_resnet18": deeplabv3_resnet18(),
        "deeplabv3_resnet34": deeplabv3_resnet34(),
        "deeplabv3_resnet50": deeplabv3_resnet50(),
        "deeplabv3_resnet101": deeplabv3_resnet101(),
        "deeplabv3_resnet152": deeplabv3_resnet152(),
    }
    
    for key, value in tests.items():
        model = tests[key]
        y = model(x)

        print("Model name: ", model.name)
        print("Trainable parameters: ", get_num_parameters(model))
        print("in shape: ", x.shape, ", out shape: ", y.shape)


# test()