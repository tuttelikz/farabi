#!/bin/bash
docker compose stop

docker compose up -d farabio

echo "farabio container is started"

container_id=$(docker ps -qf "name=farabio")

sleep 6

echo "The container ID is $container_id"

if [ -n "$container_id" ]; then
    docker exec "$container_id" bash
else
    echo "Error: Farabio container not found."
fi