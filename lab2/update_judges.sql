UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J01'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J01'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J01'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J01'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J01'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J01')
WHERE judge_id = 'J01';

.headers off

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J02'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J02'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J02'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J02'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J02'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J02')
WHERE judge_id = 'J02';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J03'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J03'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J03'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J03'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J03'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J03')
WHERE judge_id = 'J03';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J04'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J04'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J04'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J04'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J04'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J04')
WHERE judge_id = 'J04';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J05'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J05'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J05'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J05'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J05'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J05')
WHERE judge_id = 'J05';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J06'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J06'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J06'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J06'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J06'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J06')
WHERE judge_id = 'J06';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J07'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J07'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J07'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J07'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J07'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J07')
WHERE judge_id = 'J07';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J08'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J08'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J08'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J08'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J08'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J08')
WHERE judge_id = 'J08';

UPDATE judges
SET num_cars = (SELECT count(*) FROM alldata WHERE judge_id = 'J09'),
start = (SELECT min (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J09'),
end = (SELECT max (JULIANDAY('2018-08-05' || SUBSTR(timestamp, 9))) FROM alldata WHERE judge_id = 'J09'),
duration = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J09'
    ),
avg_speed = ( 
        SELECT ROUND (
            (
                JULIANDAY(max('2018-08-05' || SUBSTR(timestamp, 9))) - 
                JULIANDAY(min('2018-08-05' || SUBSTR(timestamp, 9)))
            ) * 86400
        ) FROM alldata WHERE judge_id = 'J09'
    ) / (SELECT count(*) FROM alldata WHERE judge_id = 'J09')
WHERE judge_id = 'J09';

.output