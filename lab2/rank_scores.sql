.output lab2/extract1.csv
.mode csv
.headers on

SELECT
DENSE_RANK() OVER(ORDER BY cs.score DESC) AS rank,
cs.car_id,
cs.score,
c.year,
c.make,
c.model
FROM car_score cs
INNER JOIN cars c
ON c.car_id = cs.car_id;

.output
.headers off