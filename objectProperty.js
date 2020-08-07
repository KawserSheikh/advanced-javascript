const students = [
    {id: 21, name: 'Abul'},
    {id: 25, name: 'babul'},
    {id: 31, name: 'kabul'},
    {id: 41, name: 'sabul'},
    {id: 55, name: 'ribul'}
];

const names = students.map( s => s.name);
console.log(names);

const ids = students.map( s => s.id);
console.log(ids);

const bigger = students.filter( s => s.id > 25);
console.log(bigger);

const biggerOne = students.find( s => s.id > 25);
console.log(biggerOne);