# Notes App

## Steps

Firstable it is needed to execute the start-db-container.sh located at the notes (backend) project root. 
Be sure you previously give it  execution permissions on linux, chmod -x filename.
After that it's needed the backend to run before the frontend.

## Compilers versions
Node 18 and open Jdk 17

There're also dockerfiles and a docker-compose.yml file to deploy the apps but it's not working well,
there was a problem with database connection and I haven't enough time to solve. It's the first time
I try to do it. 

So it has to be executed as normally in development process:
- ./mvn spring-boot:run from inside the notes directory. 
- npm run dev from inside de frontend directory
