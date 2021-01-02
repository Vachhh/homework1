// first

// function foo(arr) {
//     let count = 0
//     let arr1 = [...new Set(arr)]
//     let arr2 = []


//     arr1.forEach((val) => {
//         arr.forEach((val2) => {
//             if (val == val2) {
//                 count++
//             }
//         })
//         let o = [`${val}`, count / arr.length]
//         arr2.push(o)
//         count = 0
//     })

//     return Object.fromEntries(arr2)
// }

// console.log(foo([1, 2, 3]))




// second

// function foo(arr) {
//     let count = 0
//     let arr1 = []

//     let arrType = arr.map((val) => typeof val).forEach((val2) => {
//         arr.forEach((val3) => {
//             if (val2 == typeof val3) { count++ }
//         })

//         let o = `${val2}:${count}`;
//         (!arr1.includes(o)) ? arr1.push(o): false
//         count = 0
//     })


//     return arr1.join(',')
// }

// console.log(foo([true, 1, '10', 'hi', 2, false, 3]))




// third


// function foo(str) {

//     str = str.split(/[\s|,!#-?]+/).sort(function(a, b) { return a.length - b.length });
//     return str[str.length - 1]
// }

// console.log(foo("Which would be  worse - to live as a monster, monsrrr or to die monsbbb  as a good man?"))







// forth

// function foo(str) {
//     str = str.split('')
//     let arr = []
//     let resArr = []

//     for (let i = 0; i < str.length; i++) {
//         resArr.push(str[i])
//         for (let j = i + 1; j < str.length; j++) {

//             if (!resArr.includes(str[j]) || str[j] == ' ') {
//                 resArr.push(str[j])
//             } else {

//                 arr.push(resArr)
//                 resArr = []
//                 break

//             }
//         }

//     }
//     arr = arr.sort(function(a, b) { return a.length - b.length });
//     return arr[arr.length - 1].join('')

// }

// console.log(foo("there are no two words in the english language more harmful than 'good job'."))







// fivth

// function foo(str) {
//     let arr = []
//     str = str.split('')
//     for (let i = 0; i < str.length; i++) {
//         let o = str.splice(0, 3)
//         arr.push(o)
//     }
//     if (str.length >= 3) { arr.push(str.splice(0, 3)) }

//     arr.forEach((val) => {
//         let t = val[0]
//         for (let j = 0; j < val.length - 1; j++) {
//             val[j] = val[j + 1]
//         }
//         val[val.length - 1] = t
//     })
//     return arr.join('').split(',').join('').concat(str.join(''))

// }

// console.log(foo("dfgjkloyp"))





// sixth

// function foo(arr) {
//     let count = 0
//     let arr1 = []
//     let sum = 0
//     arr.forEach((val) => (!Array.isArray(val)) ? count++ : false)
//     if (count > 0) {
//         return "Invalid Argument"
//     } else {
//         arr.forEach((val) => {
//             val.forEach((val2) => {
//                 (val2 < 0) ? sum += val2: false
//             })
//             arr1.push(sum)
//             sum = 0
//         })
//     }
//     arr1 = arr1.filter((val) => val).sort(function(a, b) { return a - b });
//     if (arr1.length > 0) { return arr1[arr1.length - 1] } else { return "No negatives" }
// }

// console.log(foo([
//     [3, 4],
//     [11, 0],
//     [5, 6, 7, 8]
// ]))



// seventh


// function foo(arr) {
//     let arr1 = []
//     let arr2 = []

//     if (arr.length <= 3) {
//         return arr
//     } else {
//         for (var i = 0; i < arr.length; i++) {
//             for (var j = i + 1; j < arr.length; j++) {
//                 for (var z = j + 1; z < arr.length; z++) {
//                     let o = [arr[i], arr[j], arr[z]]
//                     arr1.push(o)
//                 }
//             }
//         }
//     }
//     return arr1
// }

// console.log(foo([5, 9, 23, 0, -2, -1, 7]))