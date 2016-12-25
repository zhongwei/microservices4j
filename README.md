# microservices4j
Microservices for java platform.

## mvn clean install

## Start MySQL
- `docker run --name account-service-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=account-service -d mysql`

## Start account-service
- `docker run --name account-service --link account-service-db:mysql -p 8080:8080 -d zhongwei/account-service`

## Check it
- http://localhost:8080/api/accounts
