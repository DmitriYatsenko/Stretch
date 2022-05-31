// let string = process.argv[2];
let string = process.argv.slice(2);

function latin(string) {
    let reverse = "";
    for (let i = 0; i < string.length; i++) {
        for (let j = string[i].length - 1; j >= 0; j--) {
            reverse += string[i][j];
        }
        reverse += "\n";
    }
    return reverse;
}
console.log(string);
console.log(latin(string));