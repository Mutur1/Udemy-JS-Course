for (let rep = 7; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const trevor = [
    'Trevor',
    'Muturi',
    2025 - 2002,
    'student',
    ['Micheal', 'Peter', 'Steven'],
    true,
];
const types = [];

for (let i = 0; i < trevor.length; i++) {
    console.log(trevor[i], typeof trevor[i]);

    types.push(typeof trevor[i]);
}
console.log(types)