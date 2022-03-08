CREATE TABLE cars(
  Car_ID INT PRIMARY KEY,
  Year TEXT,
  Make TEXT,
  Model TEXT,
  Email TEXT,
  Name TEXT
);

INSERT INTO cars
SELECT Car_ID, Year, Make, Model, Email, Name
FROM alldata;