#!/bin/bash
  docker run -d -p 3306:3306 --name mysql-notes-container \
    -e MYSQL_ROOT_PASSWORD=admin \
    -e MYSQL_DATABASE=notes \
    -e MYSQL_USER=sofi \
    -e MYSQL_PASSWORD=java \
    -v ./mysql:/var/lib/mysql \
    mysql/mysql-server:latest