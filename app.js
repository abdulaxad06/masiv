
// bu massiv ni 6 xil turi

// const people= [
//     {name:'abdulaxad', age:16, budjet:21000},
//     {name:'abubakr', age:19, budjet:1000},
//     {name:'ayubxon', age:62, budjet:2000},
//     {name:'javlon', age:43, budjet:3000},
//     {name:'rashid', age:23, budjet:6000},
// ]


// for each  bu ozi uchun

// people.forEach(function(person,index, salom){
//     console.log(person);
//     console.log(index);
//     console.log(salom);
// })




// map bu xamma sini ismini yoshini budjetni chiqazib beradi

//  const newPeople = people.map( person => person.age *3 )
//     console.log(newPeople);



// filtr bu filtrilaydi masalan pul yosh

// const adults = people.filter(person => {
//     if(person.age >= 18){
//         return true
//     }
// })



// reduce  xamma pulniu xisoblaydi

// const amount = people.reduce((total, person) =>{
//     return total + person.budjet
// },0)
// console.log(amount);


// find  bu bitta objecti kosatadi

// const abdulaxad = people.find(person => person.name === 'abdulaxad')
// console.log(abubakr);


// findindex  bu tartib soni

// const abdulaxad = people.findindex(person => person.name === 'abdulaxad')
// console.log(abdulaxad);



const data = [5, 3, 8]
const sort = data.reduce((a,b)=>{
    return a - b
})
console.log(data);