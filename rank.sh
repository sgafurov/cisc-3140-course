#!//usr/bin/awk -f

BEGIN {
    FS = ",";
    rank = 0;
}

{
    if (previous != $NF) {
        rank++; #bump the rank when you run into a new 'total score'
    }
    printf("%d,%s\n", rank, $0);
    previous = $NF;
}