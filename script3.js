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

// console.log( usersArray[1].friends [1]   );


// 3) Вывести общий баланс пользователей


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

// 4) Удалить пользователя Russell

let usersArray3 = JSON.parse(JSON.stringify(usersArray));
usersArray3[3] = undefined;
console.log( usersArray3)
// 5) Удалить пользователя Isaac
let usersArray1 = JSON.parse(JSON.stringify(usersArray));
usersArray1[1] = undefined;
console.log( usersArray1)



// 10) Вывести имя самого богатого пользователя(включая друзей)
const richFriend = usersArray.reduce((acc, curr) => {
    let richFriendInside = acc;
    if(acc.friends?.length) {
        acc.friends.forEach ((friend) => {
            if (friend.balance < curr.balance) {
                richFriendInside = friend
            }
        })
    }
    const friendOrUser = curr.balance < richFriendInside.balance ? richFriendInside : curr
    return acc.balance < friendOrUser.balance ? friendOrUser: acc
});
console.log (richFriend.name)


