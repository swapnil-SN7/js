//array 

const myArr =[0,1,2,3,4,5,6 ]


console.log(`my array is${myArr[0]}`)

//Array methods
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join(" ")
console.log(newArr)
console.log(typeof newArr)

console.log(myArr)

const marvelHeros =["shaktiman","swapnil","swapnil2.0"]
const dcheors =['swa','swap2','swap3']
// we can concat the two array by concat but the limitation is that it only concat two arry at a time but in industry 
// we use the spread operator -> ham kach ke glass ko upar se chod rahe hai neeche jake vo spread ho jayega
// const allheros = [ ...marvelHeros,...dcheors]
// console.log(allheros)

const anotherarray = [1,2,3,4,5,[6,4,5,6],[4,5]]
const flattenedarr = anotherarray.flat(Infinity)
console.log(flattenedarr)


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

