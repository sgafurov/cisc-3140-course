# lab 4

# Start the server
Navigate to lab4 directory and run "npm run devStart" to get the backend up and running. This will also make connection with sqlite database, create the table, and populate it.

# Access the server to make requests
Visit http://localhost:3000 to access the backend.

# API Endpoints
These methods are performed in server.js.
## GET:
### /api/cars/all
This will get all the cars in the database.
### /api/cars/id/:car_id
This will get a car in the database where the car id matches the parameter.
### /api/cars/make/:make
This will get all cars in the database where the car make matches the parameter.

## POST:
### /api/cars
Make a new data insertion into the database with JSON data. It will parse the request body and insert into the database.

## PATCH:
### /api/cars/id/:car_id
Update an existing record in the database. Access it by matching car id parameter. 
