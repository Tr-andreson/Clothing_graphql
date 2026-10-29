# Clothing Graphql


# For Development (SERVER)

run:
(inside server folder)

```
docker-compose up -d
```


run:
(inside server folder)

```
bun run dev
```


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




