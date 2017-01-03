# Start microservices4j dependencies services by mannual

## Set OS ENV for development on localhost
- `vi /etc/hosts`
- 127.0.0.1   localhost mysql redis rabbitmq

## Create microservices4j user-defined network in docker
- `docker network create --driver bridge microservices4j`

## Start MySQL
- `docker run --name account-service-db --network-alias mysql --network microservices4j -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=account-service -d mysql`

## Start Redis
- `docker run --name redis --network-alias redis --network microservices4j -p 6379:6379 -d redis`

## Start RabbitMQ Management
- `docker run -d --hostname rabbitmq --name rabbitmq --network-alias rabbitmq --network microservices4j -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=zhongwei -e RABBITMQ_DEFAULT_PASS=zhongwei rabbitmq:management`

# Start microservices4j dependencies services by docker-compose
- docker-compose up

# Build account-service.jar
- `mvn clean package`

# Run account-service with local jar file
- `java -jar account-service\target\account-service-0.1.0.jar`

# Run account-service with Docker image
- `cp account-service/target/account-service-0.1.0.jar account-service/docker`
- `docker build -t zhongwei/account-service account-service/docker/Dockerfile`
- `docker run --name account-service --network microservices4j -p 8080:8080 -d zhongwei/account-service`

# Check it
- http://localhost:8080/api/accounts
- http://localhost:8080/rabbitmq/home
- http://localhost:8080/redis/home
