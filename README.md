# Farabio

Accelerating life science research with deep learning

## Installation
### A. Install from source (up-to-date)
To install from [Github](https://github.com/tuttelikz/farabio):
```bash
git clone git@github.com:tuttelikz/farabio.git && cd farabio
conda create -n pyenv python=3.10
conda activate pyenv
pip install .
```

### B. Run container from Docker Hub
To run container from [Docker Hub](https://hub.docker.com/repository/docker/tuttelikz/farabio/general):  
```bash
docker pull tuttelikz/farabio:2.0.0
docker run -d --gpus all -t tuttelikz/farabio:2.0.0 /bin/bash
```

### C. Install from pip
To install package from [PyPI](https://pypi.org/project/farabio/):  
`pip install farabio==2.0.0`  

## Community
Farabio is always welcome to contributors, especially whose background is in life sciences. Our communication channels:  
Discord: https://discord.gg/G52xCyfKWf  
Discussions: https://github.com/tuttelikz/farabio/discussions
