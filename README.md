# Clothing Graphql


To Run Server Locally

docker-compose up -d inside server folder

bun run dev

open url http://localhost:8000/graphql inside any api client like postman





# For Production


## create .env.production file inside server
```
docker-compose build
docker-compose up -d

// to check if the server is running
docker-compose ps 

curl http://localhost:8000

// Result
working


```




