let msg = "";
for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
        if ((x == 1 || x == 17 || y == 1 || y == 17) && (x != 0 && x != 18) && (y != 0 && y != 18)) {
            msg += "0";
        } else {
            msg += "1";
        }
    }
    msg += "\n";
}
alert(msg);


