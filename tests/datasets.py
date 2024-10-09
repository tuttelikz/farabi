# pytest datasets.py
import pytest
import farabio
import os

def test_dsb18():
    fpath = farabio.datasets.utils.download('dsb18')
    assert os.path.isfile(fpath) == True