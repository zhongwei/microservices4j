FROM openjdk
MAINTAINER zhongwei99@163.com
VOLUME /tmp
ADD account-service-0.1.0.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]




