#define targets and dependencies
lab1 : top3.txt ranked.txt

top3.txt : ranked.txt top3.sh
	sort -t, -k4,4d -k1,1n ranked.txt | ./top3.sh > top3.txt

ranked.txt : data_lab1/data.csv sum.sh rank.sh
	./sum.sh data_lab1/data.csv | sort -t, -nk5 -r | ./rank.sh > ranked.txt

clean : 
	rm -f ranked.txt top3.txt