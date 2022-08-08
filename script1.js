let name = 'Nataliia';
name = 'Hanna';
const studentName = 'Nataliia';

let userName;
let topUserName;
let activeUsersNameList;
let activeUserName;

let numbers = [1, 255, 378];
let numbers1 = [466, 285, 9768];

// объект с произвольными ключами и значениями

let world = 'world';
let str = `Hello ${world}`;

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


let login=prompt ('Please, write login', '');
if (login == 'user') {
    alert ( 'Hello, user!' );
} else if (login == 'admin') {
    alert ( 'Hello, admin!' );
}
else if (login == 'topAdmin') {
    alert ( 'Hello, Top Admin!' );
}
  else if (login == 'unauthorizedUser') {
    alert ( 'Please, check in' );
}
else if (login == '') {
    alert ( 'Login is empty. Try again' );
}
  else {
    alert ( 'Login is not found. Try again' );
}


let login = prompt('Please, write login', '');
let message = (login == 'user') ? 'Hello, user!' :
    (login == 'admin') ? 'Hello, admin!' :
        (login == 'topAdmin') ? 'Hello, Top Admin!' :
            (login == 'unauthorizedUser') ? 'Please, check in' :
            'Try again';

alert( message );