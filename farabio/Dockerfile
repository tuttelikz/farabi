ARG TAG_TORCH=2.4.1-cuda12.4-cudnn9-runtime

FROM pytorch/pytorch:${TAG_TORCH}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y python3 \
                                python3-pip \
                                sudo \
                                curl \
                                git \
                                wget

WORKDIR /app
COPY farabio/ /app/
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt