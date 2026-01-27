// for (let rep = 7; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


// const types = [];

// for (let i = 0; i < trevor.length; i++) {
//     console.log(trevor[i], typeof trevor[i]);

//     types.push(typeof trevor[i]);
// }
// console.log(types)

// for(let i=0; i<trevor.length;i++ ){
//     if(typeof trevor[i] !== 'string')continue

//     console.log(trevor[i], typeof trevor[i]);
// }

// for (let i = 0; i < trevor.length; i++) {
//     if (typeof trevor[i] === 'number') break;

//     console.log(trevor[i], typeof trevor[i]);
// }



const trevor = [
    'Trevor',
    'Muturi',
    2002,
    'student',
    ['Micheal', 'Peter', 'Steven'],
    true,
git];

for (let i = trevor.length - 1; i >= 0; i--) {
    console.log(trevor[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`)
    }
}
