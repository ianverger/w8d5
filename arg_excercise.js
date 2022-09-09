// function sum(num) {
//     let totalSum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         totalSum += arguments[i];
//     }
//     return totalSum;
// }

function sum(num, ...args) {
    let totalSum = num;

    args.forEach((arg) => {
        totalSum += arg;
    })
 
    return totalSum
}

// console.log(sum(1, 2, 3, 4)) // === 10;
// console.log(sum(1, 2, 3, 4, 5)) // === 15;

