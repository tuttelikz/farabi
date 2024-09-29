#!/bin/bash
docker run -d --name farabio_dockerhub tuttelikz/farabio:2.0.0 /bin/bash

echo "Farabio container from docker hub is started"

container_id=$(docker ps -qf "name=farabio_dockerhub")

sleep 6

echo "The container ID is $container_id"

if [ -n "$container_id" ]; then
    # docker exec "$container_id" bash
    docker stop "$container_id"
    docker container rm "$container_id"
    echo "Farabio from docker hub stopped and removed successfully"
else
    echo "Error: Farabio container from docker hub not found."
fi

docker container prune

docker rmi -f $(docker images -aq)

docker system prune