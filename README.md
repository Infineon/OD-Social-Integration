# Online Documentation Social Features API

As part of Online Documentation Social Features, *ODS* API is a Node/Expressjs based REST API service.

## Application Set up:

1. Clone the repo.
2. Setup Database
3. Run

```
npm install
```

4. Enable javascript debugging in VS Code.
5. Run

```
npm start
```

## Database setup

1. Create database using the sql file in database Dump folder.
2. Configure application by updating /services/mysql.service.js as following:

<br>

```
var pool = mysql.createPool({
    connectionLimit: 10,
    host: ''MYDBHOST'',
    user: ''MYUSERNAME'',
    password: ''MYPW'',
    database: ''onlinedocumentation-social''
```

## Postman Setup

1. Import [Social-Features.postman_collection.json](Social-Features.postman_collection.json) in postman.
