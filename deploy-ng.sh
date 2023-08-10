# webapp deployment procedure

echo 'NOTE::Make sure to install npm packages manually (IF ANY)'
echo 'deploying Web project angular'

echo 'pulling source code..'

git pull

echo 'angular build running..'

ng build --configuration production

echo 'creating docker image for web app...'

docker build -t raul-fe .

echo 'Web app image created..'

# start all docker containers

echo 'starting containers...'

cd /home/raul/swapandstyle

docker compose up -d

echo 'deployment done!'
