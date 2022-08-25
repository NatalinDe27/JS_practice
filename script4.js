const starWarCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        films: ["2", "6", "3", "1", "7"],
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        films: ["1", "2", "3", "4", "5", "6"],
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        films: ["1", "2", "3", "6"],
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        films: ["1", "2", "3", "4", "5", "6"],
    },
];

// 1.Вывести массив гендеров

let gengersArr = starWarCharacters.map((elem) => elem.gender)
console.log(gengersArr)

// 2.Найти персонажа(жей) которые снялись в найбольшем количестве фильмов

const popularPerson = starWarCharacters.reduce((acc, curr) => {
    return acc.films.length < curr.films.length ? curr : acc
});
let popularPersonList = starWarCharacters.map((elem) => {
    if (elem.films.length === popularPerson.films.length) {
        return elem
    }
});
console.log(popularPersonList)

// 3.Найти самого тяжелого по весу персонажа

const thickPerson = starWarCharacters.reduce((acc, curr) => {
    return acc.mass < curr.mass ? acc: curr
});
console.log (thickPerson.name)

// 4.Вывести фильмы в которых присутствовали все персонажи массива

const filmsArr = starWarCharacters.map((elem) => {
    return elem.films
})
let generalFilmsArr = filmsArr.shift().filter((elem1) => {
    return filmsArr.every((elem2) => {
        return elem2.indexOf(elem1) !== -1;
    });
});
console.log(generalFilmsArr)

// 5.Удалить всех персонажей из исходного массива сделав его пустым
let starWarCharactersDelete = JSON.parse(JSON.stringify(starWarCharacters));
starWarCharactersDelete.splice([{}])
console.log(starWarCharactersDelete)


