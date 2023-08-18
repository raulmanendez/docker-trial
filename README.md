# docker-trial

Backend container => spring boot with one controller /docker/departent -> add | getall | delete port 8000

Database container => MySQL one database docker -> one table -> department -> id | name

Frontend => Angular - nginx port 8001

build images first 
1. mysql => docker pull mysql => in any directory
2. docker-front-end => ng build => docker build -t docker-front-end . => in docker-front-end directory
3. docker-back-end => mvn clean install => docker build -t docker-back-end . => in docker-back-end directory

compose

docker compose up -d => in ./docker-trial

GoTo => http://localhost:8001 | http://docker.myapp.com/

setup fake domain by editing /etc/hosts => put entry like 127.0.0.1     docker.myapp.com

traefik will search docker.myapp.com from docker compose and map it to port (here:8001)


# docker-trial

