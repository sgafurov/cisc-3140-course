.output lab2/extract2.csv
.mode csv
.headers on 
-- CREATE TABLE temp as 
-- SELECT
-- DENSE_RANK() OVER(ORDER BY cs.score DESC) AS rank,
-- cs.car_id,
-- cs.score,
-- c.year,
-- c.make,
-- c.model
-- FROM car_score cs
-- INNER JOIN cars c
-- ON c.car_id = cs.car_id;
-- SELECT * FROM temp 
-- WHERE make = 'Acura'
-- LIMIT 3;
-- .headers off
-- SELECT * FROM temp 
-- WHERE make = 'Audi'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Benz'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Bmw'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Chevy'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Chrystler'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Civic'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Civic coupe'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Dodge'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Ford'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Honda'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Hyundai'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Infiniti'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Infinity'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Jeep'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Lexus'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Mazda'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Mercedes'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Mitsu'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Mitsub'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Nissan'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Scion'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Subaru'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Toyota'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Volkswagen'
-- LIMIT 3;
-- SELECT * FROM temp 
-- WHERE make = 'Volvo'
-- LIMIT 3;

SELECT rank,
    car_id,
    year,
    make,
    model,
    total
FROM (
        SELECT ROW_NUMBER() OVER(
                PARTITION BY make
                ORDER BY total DESC
            ) AS make_rank,
            DENSE_RANK() OVER(
                ORDER BY total DESC
            ) AS rank,
            *
        from (
                SELECT c.car_id,
                    c.year,
                    c.make,
                    c.model,
                    (
                        select sum(score)
                        from car_score cs
                        where c.car_id = cs.car_id
                        GROUP BY cs.car_id
                    ) total
                FROM cars c
                ORDER BY total DESC
            )
    )
where make_rank < 4;

-- drop table temp;

.output