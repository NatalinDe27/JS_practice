// Дано - объект user который прийдет к нам с бекенда. Мы в коде хотим использовать user.cart[0].price. Что является ценой первого товара из корзины пользователя. Объект пользователя до ответа с бекенда нам не известен. Задача - написать код с логированием цены так чтоб код не упал с ошибкой до того как бекенд вернет ответ с объектом пользователя.

    // Задачу выполнить трема способами.


const user = {
    cart: {
        price: 250
    }
}

const user2 = {
    cart: [
        {price: 250},
        {price1: 550},
    ]
}

let i = 0;

//first method

if (user.cart && user.cart[i] && user.cart[i].price) {
console.log(user.cart[i].price)
}
else {
    console.log ('error')
}


if (user2.cart && user2.cart[i] && user2.cart[i].price) {
    console.log(user2.cart[i].price)
}
else {
    console.log ('error')
}

//second method

if (user?.cart[i]?.price) {
    console.log(user.cart[i].price)
}
else {
    console.log ('error')
}


if (user2?.cart[i]?.price) {
    console.log(user2.cart[i].price)
}
else {
    console.log ('error')
}


// third method

try {
    console.log(user.cart[i].price)
}
catch (e) {
    console.log ('error')
}


try {
    console.log(user2.cart[i].price)
}
catch (e) {
    console.log ('error')
}

