import setuptools


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

with open('farabio/requirements.txt') as f:
    required = f.read().splitlines()

setuptools.setup(
    name="farabio",
    version="2.0.0",
    author="Sanzhar Askaruly",
    author_email="s.askaruly@gmail.com",
    description="Python toolkit for AI-based biomedical image analysis",
    license='GPLv3', #######################3
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/tuttelikz/farabio",
    project_urls={
        "Bug Tracker": "https://github.com/tuttelikz/farabio/issues",
    },
    packages=setuptools.find_packages(),
    install_requires=required,
    classifiers=[
        "Programming Language :: Python :: 3"
    ],
    python_requires='>=3.8',
)