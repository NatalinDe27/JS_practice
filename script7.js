// 1) Что выведет код в консоль?
const user = {
    name: 'Bob',
    sayHi: function () {
        console.log(`Hi I am ${this.name}`)
    }
}
user.sayHi()
const greetingsFunc = user.sayHi;
greetingsFunc()
const user2 = {
    name: 'Jane',
    sayHi: greetingsFunc
};
user2.sayHi()

//В результате вызова трех функций консоль выведет:
// user.sayHi() --- Hi I am Bob
// greetingsFunc() --- Hi I am (because name is undefined)
// user2.sayHi()  --- Hi I am Jane



// 2) Написать функцию-конструктор для создания объектов домашних питомцев
// Пример объекта который должна возвращать функция:
// {
//     name: 'Quick',
//         kind: 'chinchilla',
//     color: 'black'
// }

function CreatePets(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;
   }

let cat = new CreatePets('Tom', 'persian', 'ginger');
console.log(cat);
let pet = new CreatePets('Quick', 'chinchilla', 'black');
console.log(pet);



// 3.Написать рекурсивное решение для расчет суммы всех символов в числе
// 152092 => 19

function calcSum (num) {
    let result = `${num}`;
    if (result.length === 1) return +result;
    return +result[0] + calcSum(result.slice(1));
}

console.log(calcSum(152092));

