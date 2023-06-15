# Poridhi Exam - 1

This repo consists the worker, service and client app. All communicates with each other inside a network of docker

## Local Setup

#### Step 1

Clone this repository.

```shell
git clone https://github.com/Taif71/poridhi_exam_1.git
```

#### Step 2

install node version in you local machine

#### Step 3

Go inside of each of the projects and run  the following commands 

```shell
npm install
```

#### Step 4

Add a .env file inside each projects root directory.
add the following environment variables in the .env files for each project:

Backend:
PORT = 8001
MONGO_URI=mongodb://localhost:27021/devops
REDIS_URI=redis://localhost:6379

Worker:
PORT = 9001
MONGO_URI=mongodb://localhost:27021/devops
REDIS_URI=redis://localhost:6379

Client:
BACKEND_URI=http://localhost:8001/api

#### Step: For running on Docker:
Now go to the root directory of this project and run the following command.
It should build all your images and run the containers perfectly


```shell
docker-compose up -d
```

#### Step 5 Now go to localhost:3000 client to run the app
You should be able to run the whole projects.
There are 3 api end points for service:
  GET http://localhost:8001/api/get-user/:id
  GET http://localhost:8000/api/get-all-users
  POST http://localhost:8000/api/save-user-data  
      Body example: { username: "john", age: 10, profession: "student"}