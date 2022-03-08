#!//usr/bin/awk -f

BEGIN {
    FS = ",";
    first_score_field = 8;
    car_id_field = 7;
    year_field = 4;
    car_make_field = 5;
    car_model_field = 6;
}

{
    if (NR!=1) {
        sum = 0;

        for ( i = first_score_field; i <= NF; i++) {
            sum += $i;
        }

        printf("%d,%d,%s,%s,%d\n", $car_id_field, $year_field, $car_make_field, $car_model_field, sum);
    }
}