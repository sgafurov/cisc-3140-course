#Table Schema

##cars
CREATE TABLE cars(
    Car_ID INT PRIMARY KEY,
    Year TEXT,
    Make TEXT,
    Model TEXT,
    Email TEXT,
    Name TEXT
);

##judges
CREATE TABLE judges(
    Judge_ID INT,
    Judge_Name TEXT, 
    num_cars INT, 
    start FLOAT, 
    end FLOAT, 
    duration INT, 
    avg_speed FLOAT
);

##car_score
CREATE TABLE car_score(
    car_id INTEGER NOT NULL PRIMARY KEY,
    score INTEGER
);

##alldata (this table is populated with all of the data from the csv file)
CREATE TABLE IF NOT EXISTS "alldata"(
  "Timestamp" TEXT,
  "Email" TEXT,
  "Name" TEXT,
  "Year" TEXT,
  "Make" TEXT,
  "Model" TEXT,
  "Car_ID" INT,
  "Judge_ID" INT,
  "Judge_Name" TEXT,
  "Racer_Turbo" INT,
  "Racer_Supercharged" INT,
  "Racer_Performance" INT,
  "Racer_Horsepower" INT,
  "Car_Overall" INT,
  "Engine_Modifications" INT,
  "Engine_Performance" INT,
  "Engine_Chrome" INT,
  "Engine_Detailing" INT,
  "Engine_Cleanliness" INT,
  "Body_Frame_Undercarriage" INT,
  "Body_Frame_Suspension" INT,
  "Body_Frame_Chrome" INT,
  "Body_Frame_Detailing" INT,
  "Body_Frame_Cleanliness" INT,
  "Mods_Paint" INT,
  "Mods_Body" INT,
  "Mods_Wrap" INT,
  "Mods_Rims" INT,
  "Mods_Interior" INT,
  "Mods_Other" INT,
  "Mods_ICE" INT,
  "Mods_Aftermarket" INT,
  "Mods_WIP" INT,
  "Mods_Overall" INT
);

#SQL Scripts

##to create the alldata table
###create_alldata.sql

##to create the cars table
###create_cars.sql

##to create the car_score table
###create_car_score.sql

##to create the initial judges table
###create_judges.sql

##to create the add the extra columns to the judges table
###alter_judges.sql

##to update the judges table with calculated data
###update_judges.sql

#CSV Outputs

##to create extract1.csv (outputs all cars with ranking)
###rank_scores.sql

##to create extract2.csv (outputs top 3 cars per car make)
###top3.sql