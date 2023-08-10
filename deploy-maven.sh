# project deployment procedure

echo 'deploying backend java'

echo 'pulling source code'

git pull

echo 'maven creating builds'

mvn clean install -Dmaven.test.skip

echo 'creating docker image...'

docker build -t raul-be .

# start all docker containers

echo 'starting containers...'

cd /home/raul/swapandstyle

docker compose up -d

echo 'deployment done!'