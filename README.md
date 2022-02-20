# cisc-3140-course

# Lab 1
## Objective:
(As described in the lab pdf) This task as described focuses on the use of multi-paradigmatic programming languages to design a system that handles a basic end-to-end data analysis workflow.

## Result:
Created AWK scripts that summed the total points of each car, ranked them by their points, and printed out the top 3 cars per car-make. Used the command line to sort those cars based on car make and car ranking. Created makefile that runs those scripts and specified the targets (ranked.txt, top3.txt), and the dependencies (input files needed to create the target).

## How To Run:
The makefile should take care of it. Just run 'make lab1'.

## Description of my report's contents:
### ranked.txt
The content of this file is all of the cars ranked and the fields are in this order: car_rank, car_id, car_year, car_make, car_model, total_points.
A sum.sh file was used to sum up all the points fields per row in the original data.csv file. Then those cars were sorted based on their individual total points. A rank.sh file was used to rank the cars based on their total points. 

### top3.txt
The content of this file lists the top 3 cars for each car-make grouping. Each row has: car_rank, car_id, car_year, car_make, car_model, total_points. 
The ranked.txt file and a top3.sh file was used to make this. In the command line, I first sorted the ranked.txt file based on car make first, and then based on car rank. So all cars were grouped together and their ranks were also sorted accordinly. Then the top3 file was called to print a row for each car make only three times before moving on to the next make. 

# Lab 0
Created repository, cloned into local computer and linux account. Created AUTHOR.md file and README.md file.