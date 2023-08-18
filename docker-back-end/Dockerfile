#FROM eclipse-temurin:17
FROM openjdk:8-jdk

LABEL maintainer="muk214782@gmail.com"

WORKDIR /app

COPY target/docker_back-end-0.0.1-SNAPSHOT.jar /app/docker_back-end-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "docker_back-end-0.0.1-SNAPSHOT.jar"]