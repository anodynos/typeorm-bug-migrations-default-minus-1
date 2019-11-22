#!/bin/bash -ex

docker-compose rm --stop --force -v
docker-compose kill
docker-compose build

docker-compose run project /bin/bash <<EOF
set -x
npm run migration:run
npm run migration:generate
EOF
