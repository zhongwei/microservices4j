# microservices4j
Microservices for java platform.

## mvn clean install

## Create microservices4j user-defined network in docker
- `docker network create --driver bridge microservices4j`

## Start MySQL
- `docker run --name account-service-db --network-alias mysql --network microservices4j -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=account-service -d mysql`

## Start Redis
- `docker run --name redis --network-alias redis --network microservices4j -p 6379:6379 -d redis`

## Start RabbitMQ Management
- `docker run -d --hostname rabbitmq --name rabbitmq -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=zhongwei -e RABBITMQ_DEFAULT_PASS=zhongwei rabbitmq:management`

## Start account-service
- `docker run --name account-service --network microservices4j -p 8080:8080 -d zhongwei/account-service`

## Check it
- http://localhost:8080/api/accounts
