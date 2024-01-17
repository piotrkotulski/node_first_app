const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jan', 'Piotr', 'Marek', 'Paweł', 'Tomasz'];
const femaleNames = ['Anna', 'Maria', 'Katarzyna', 'Magdalena', 'Agnieszka'];
const lastNames = ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk'];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhoneNumber() {
    let number = '+48';
    for (let i = 0; i < 9; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
}

let people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * (78 - 18 + 1) + 18);
    const phoneNumber = generatePhoneNumber();
    const email = generateEmail(firstName, lastName);

    people.push({
        gender,
        firstName,
        lastName,
        age,
        phoneNumber,
        email
    });
}

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
    if (err) {
        console.log("Something went wrong", err);
        return;
    }
    console.log('File has been successfully generated! Check people.json');
});
