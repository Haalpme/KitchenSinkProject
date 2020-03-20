let friends = ['helia', 'danilo', 'mae', 'pai','vida'];

for (i = 0; i < friends.length; i++) {
    for (n = 99; n >= 0; n--) {

        if (n === 0) {
            console.log(n + " line of code in the file, " + n + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");

        } else {
            console.log(n + " lines of code in the file, " + n + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (n - 1) + " lines of code in the file");

        }


    }
}
