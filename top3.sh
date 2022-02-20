#!//usr/bin/awk -f

BEGIN {
    FS = ",";
    car_make_field = 4;
}

{ #lines 8 thru 18 gets executed for every line in the file in order
    if (previous_make != $car_make_field) {
        allow_printing = 3;
        previous_make = $car_make_field;
    }

    if (allow_printing != 0) {
        print $0;
        allow_printing--;
    }
}