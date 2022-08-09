// 1.Variables let and const

let name = 'Nataliia';
name = 'Hanna';
const studentName = 'Nataliia';

// 2.Names of Variables
let userName;
let topUserName;
let activeUsersNameList;
let activeUserName;

// 3. Array, object, string
let numbers = [1, 255, 378];
let numbers1 = [466, 285, 9768];

let user = {
    name: "Nataliia",
    age: 24,
    country: Ukraine
};

let world = 'world';
let string = `Hello ${world}`;

// 4. Math

// 1. 10 < 3                 false
// 2. ‘hi’ != ‘hello’        true
// 3. 1 == ‘1’               true
// 4. null == ‘null’        false
// 5. null === undefined     false
// 6. 1 === 1 && ‘hi’         true
// 7. true && ‘I love js’     true
// 8. 123 && ‘hi’ || ‘hello’   true
// 9. 0+ ? true : false         false
// 10. 1 + 1                  2
// 11. '12' + '31'           1231
// 12. 3 / '3'                1
// 13. 10 * 'hello'          NaN
// 14. '13'++                13
// 15. ++13                  14


// 16. switch, ?, if.

const isUser = true;
const isAdmin = true;
const isTopAdmin = true;
const isUnauthorizedUser = true;
if (isUser) {
    console.log ( 'Hello, user!' );
}
else if (isAdmin) {
    console.log ( 'Hello, admin!' );
}
else if (isTopAdmin) {
    console.log ( 'Hello, Top Admin!' );
}
else if (isUnauthorizedUser) {
    console.log ( 'Hello! Please, check in' );
}
  else {
    console.log ( 'Login is not found. Try again' );
}


let message = (isUser) ? 'Hello, user!' :
    (isAdmin) ? 'Hello, admin!' :
        (isTopAdmin) ? 'Hello, Top Admin!' :
            (isUnauthorizedUser) ? 'Hello! Please, check in' :
            'Try again';

console.log( message );


const switchRole = "admin";
switch (switchRole) {
    case 'user':
        console.log ( 'Hello, user!' );
        break;
    case 'admin':
        console.log( 'Hello, admin!' );
        break;
    case 'topAdmin':
        console.log( 'Hello, Top Admin!' );
        break;
    case 'unauthorizedUser':
        console.log( 'Hello! Please, check in' );
        break;
    default:
        console.log( 'Try again' );
}


// 17. Switch
const switchFood = "vitamins";

switch (switchFood) {
    case 'apple':
    case 'banana':
    case 'blueberry':
    case 'cherry':
    case 'grape':
    case 'lime':
        alert( 'fruit' );
        break;

    case 'tomato':
    case 'cucumber':
    case 'onions':
    case 'carrot':
    case 'celery':
    case 'potato':
    case 'peppers':
        alert( 'vegetable' );
        break;

    default:
        alert( 'This is not fruit or vegetable' );
}