#!/bin/bash
docker compose stop

docker compose up farabio -d

echo "Farabio container from docker compose is started"

container_id=$(docker ps -qf "name=farabio")

sleep 6

echo "The container ID is $container_id"

if [ -n "$container_id" ]; then
    #docker exec "$container_id" bash\
    docker stop "$container_id"
    docker container rm "$container_id"
    echo "Farabio from docker compose stopped and removed successfully"
else
    echo "Error: Farabio container from docker compose not found."
fi

docker compose down

docker container prune

docker rmi -f $(docker images -aq)

docker system prune