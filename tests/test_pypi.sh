pip install farabio

if pip list | grep farabio; 
    then echo "farabio from PyPi is installed";
fi

pip uninstall -y farabio