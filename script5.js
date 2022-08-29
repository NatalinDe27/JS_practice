// 1.для смены регистра всех слов в строке - hello world - Hello World
function ucFirst(str) {
    return  str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}
console.log( ucFirst('hello world') );

// 2.вернуть массив из длинны строк ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123 ] должно выйти [2,3,4]

function getLength(arr) {
    const result = [];
    arr.forEach((element) => {
        if (typeof element === 'string' && element.length) {
            result.push(element.length)
        }
    })
    return result
}
console.log(getLength(['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123]));


// 3.вернуть количество гласных в строке 'Hello world' => 3
function findVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count;
}
console.log(findVowels( 'Hello world'));

// 4. создавать объект в зависимости от переданного вида createUser('admin', Bob') => {role: 'admin', name: 'Bob }, createUser('user', Alice') => {role: 'user', name: 'Alice }
function logUser (user, name) {
    if (user === 'admin' && name === 'Bob') {
        return {role: 'admin', name: 'Bob'}
    }
    else if (user === 'user' && name === 'Alice')  {
        return {role: 'user', name: 'Alice'}
    }
}
console.log(logUser('user', 'Alice'));

// 5.должна принимать 'aabbbccccd' и возвращать '2a3b4c1d'
function countElem (string) {
    let array = string.split('')
    let a = ''
    let b = ''
    let c =''
    let d = ''
    array.forEach((elem) => {
        if (elem === 'a') {
            a += elem
        }
        else if (elem === 'b') {
            b += elem
        }
        else if (elem === 'c') {
            c += elem
        }
        else if(elem === 'd') {
            d += elem
        }
    })
    return ((a.length+ a[0]) + (b.length + b[0]) + (c.length + c[0]) + (d.length + d[0]))
}
console.log(countElem('aabbbccccd'))

// 6.вернуть строкой количество четных и нечетных чисел [1,2,3,4,NaN, 0, 5, 10]

function getNumber(element) {
    const even = [];
    const odd = [];
    element.forEach((elems) => {
        if (elems % 2 === 0) {
            even.push(elems)
        }
        else if (elems % 2 === 1)
            odd.push(elems)
    })
    return (`${even.length} - even,  ` + `${odd.length} - odd`)
}
console.log(getNumber ([1, 2, 3, 4, NaN, 0, 5, 10]))


// 7.конвертация валют переданное кол-во гривен в переданную валюту - convert('US', 1000) - вернуть число 27.32
function convert(currency, number) {
    if (currency === 'US') {
        return (number / 36.6).toFixed(2)
    }
}
console.log(convert('US', 1000))

//8. вернуть строку с пробелами между каждым символом 'hello world' => 'h e l l o w o r l d'

function getAloneSymbol (strHello){
        return strHello.split('').join (' ');
    }
console.log(getAloneSymbol ('hello world'));

// 9.вернуть количество часов принимая количество лет getSeconds('5 years') => 43800

function getHours(date) {
    return date[0] * 365 *24
}
console.log(getHours('5 years'))

// 10.обрезать слишком длинную строку trim('hello world', 3) => 'hel...'
function cutStr (str) {
    return str.substr(0, 3)
}
console.log(cutStr ('hello world', 3))


