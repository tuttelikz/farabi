cd farabio
pip install .
if pip list | grep farabio; 
    then echo "farabio from source is installed";
fi

pip uninstall -y farabio