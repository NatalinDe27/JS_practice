const usersArray = [
    {
        name: "John",
        balance: '2000$',
        friends: [
            {
                name: "Robert",
                balance: '1000$',
            },
            {
                name: "Kate",
                balance: '0$',
            },
        ],
    },
    {
        name: "Isaac",
        balance: '20000$',
        friends: [
            {
                name: "Bob",
                balance: '2000$',
            },
            {
                name: "Robert",
                balance: '150000$',
            },
        ],
    },
    {
        name: "Jane",
        balance: '200$',
        friends: [
            {
                name: "Kate",
                balance: '5000$',
            },
            {
                name: "Anne",
                balance: '1234$',
            },
            {
                name: "Bob",
                balance: '300$',
            },
        ],
    },
    {
        name: "Russell",
        balance: '100$',
        friends: [],
    },
];


// 8) Вывести массив всех пользователей включая друзей без повторения

// 9) Вывести массив пользователей у которых баланс больше 2000$

// 11) Найти пользователей с общими друзьями


// 1) Вывести имя самого богатого пользователя

const richUser = usersArray.reduce((acc, curr) => {
    return acc.balance < curr.balance ? curr: acc
});
console.log (richUser.name)

// 2) Отсортировать пользователей по имени в алфавитном порядке
let usersArraySort = JSON.parse(JSON.stringify(usersArray));
function sortByName(a, b) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
}
usersArraySort.sort(sortByName);
console.log(usersArraySort);

// 3) Вывести общий баланс пользователей
const usersBalanceList = usersArray.map((elem) => +elem.balance.substring(0, elem.balance.length -1));
const balanceSum = usersBalanceList.reduce((acc, curr) => {
    return acc += curr
}, 0)
console.log(balanceSum);

// 4) Удалить пользователя Russell

let usersArray3 = JSON.parse(JSON.stringify(usersArray));
usersArray3[3] = undefined;
console.log( usersArray3)
// 5) Удалить пользователя Isaac
let usersArray1 = JSON.parse(JSON.stringify(usersArray));
usersArray1[1] = undefined;
console.log( usersArray1)

// 6) Добавить пользователя Harry после John
let usersArrayAdd = JSON.parse(JSON.stringify(usersArray));
usersArrayAdd.splice(1, 0, ({name: "Harry", balance: '5000$',  friends: [], }));
console.log (usersArrayAdd)

// 7) Добавить пользователя Conor в конец массива
let usersArrayAddEnd = JSON.parse(JSON.stringify(usersArray));
usersArrayAddEnd.push({name: "Conor", balance: '1000$',  friends: [], })
console.log(usersArrayAddEnd)




// 10) Вывести имя самого богатого пользователя(включая друзей)
const richFriend = usersArray.reduce((acc, curr) => {
    let richFriendInside = acc;
    if(acc.friends?.length) {
        acc.friends.forEach ((friend) => {
            if (friend.balance < curr.balance) {
                richFriendInside = friend;
            }
        })
    }
    const friendOrUser = curr.balance < richFriendInside.balance ? richFriendInside : curr;
    return acc.balance < friendOrUser.balance ? friendOrUser: acc;
});
console.log (richFriend.name)

// 12) Вывести одинаковы ли массивы

const arr1 = [10, 'a', '5', 5, 1];
const arr2 = [10, 'a', 5, 5, 1];
let same = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
console.log(same)


// 13) вывести true или false в зависимости является ли строка палиндромом "искать такси", "привет мир"

function palindrome(str) {
    return str.split('').reverse().join('') == str;
}
console.log(palindrome ('искать такси'));
console.log(palindrome ('привет мир'));