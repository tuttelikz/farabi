# Farabio

## Setup
### A. Run container from Docker Hub
To run container from [Docker Hub](https://hub.docker.com/repository/docker/tuttelikz/farabio/general):  
```bash
# pull image
docker pull tuttelikz/farabio:2.0.0
# run container with gpu
docker run -d --gpus all -t tuttelikz/farabio:2.0.0 /bin/bash
```


### B. Install from pip
To install package from [PyPI](https://pypi.org/project/farabio/):  
`pip install farabio==2.0.0`  
