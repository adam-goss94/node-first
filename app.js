const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Adam', 'Jacek', 'Paweł', 'Szymon', 'Rysiek', 'Marcin'];
const femaleNames = ['Marta', 'Kasia', 'Ala', 'Eliza', 'Genowefa', 'Justyna'];
const lastNames = ['Nowak,', 'Kowalik', 'Źrebak', 'Kaczke', 'Luks']
const example = [];

const randChoice = arr => {
    return Math.floor(Math.random() * (arr.length))
}

for(i=0;i<20;i++){
  const obj = {};
  obj.gender = genders[randChoice(genders)];

  if(obj.gender == "male"){
    obj.name = maleNames[randChoice(maleNames)]
  } else{
    obj.name = femaleNames[randChoice(femaleNames)]
  }

  obj.lastName = lastNames[Math.floor(Math.random() * (lastNames.length))]
  obj.age = Math.floor(Math.random() * (78 - 18) + 18)

  example.push(obj);
}

const myJSON = JSON.stringify(example);

fs.writeFile('people.json', myJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });