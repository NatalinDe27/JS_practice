const hello = 'Hello world';
console.log(
    hello.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);

for (let i = 3; i < 14; ++i) {
    if (i % 2 == 0) {
        console.log( 'add' );
    }if (i % 2 == 1) {
        console.log( 'even' );
    }
}

let i = 3;
while (i < 14) {
    if (i % 2 == 0) {
        console.log( 'add' );
    }if (i % 2 == 1) {
        console.log( 'even' );
    }
    ++i;
}


let str = "Nata27aBc";
let str2 = "";
for (
    let i = 0; i < str.length; i++) {
    let c = str [i];
    if (c >= "0" && c <= "9") {
        str2 += "Number,";
    console.log(typeof str2)
    } else {
        str2 += "String,";
        console.log(typeof str2)
    }

}


const strForLogging = 'a123B';
let result = ''
for(let i = 0; i < strForLogging.length; i++) {
    let currentSymbol = Number.parseInt(strForLogging[i])
    if(Number.isNaN(currentSymbol)) {
        result += 'string, '
    } else {
        if(i === strForLogging.length - 1) {
            result += 'number.'
        } else {
            result += 'number, '
        }
    }
}
console.log(result)

