# Clothing Graphql


# For Development (SERVER)

run:
docker-compose up -d 
(inside server folder)

run:
bun run dev
(inside server folder)

open url 
http://localhost:8000/graphql
inside any api client Example (POSTMAN)





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




