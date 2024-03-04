#!/bin/bash

	SQL_FILE=data.sql

  mysql -h localhost -u sofi -p java notes < $SQL_FILE
