let string = process.argv.slice(2);

function pig(string) {
    let latin = "";

    for (let i = 0; i < string.length; i++) {
        latin += (string[i].slice(1, string[i].length) + string[i].slice(0, 1) + "ay ");
    }

    return latin;
}
console.log(string);
console.log(pig(string));