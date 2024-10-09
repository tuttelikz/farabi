
import requests
from tqdm import tqdm

root_url = 'https://192-168-219-173.tuttelikz.direct.quickconnect.to/data'

datasets = {
    "dsb18": "data-science-bowl-2018.zip"
}

def download(dataset: str):
    filepath = datasets[dataset]
    url = f"{root_url}/{datasets[dataset]}"
    response = requests.get(url, stream=True)
    total_size = int(response.headers.get("content-length", 0))
    block_size = 1024

    with tqdm(total=total_size, unit="B", unit_scale=True) as progress_bar:
        with open(filepath, "wb") as file:
            for data in response.iter_content(block_size):
                progress_bar.update(len(data))
                file.write(data)

    if total_size != 0 and progress_bar.n != total_size:
        raise RuntimeError("Could not download file")

download("dsb18")