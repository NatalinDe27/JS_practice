const hello = 'Hello world'
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