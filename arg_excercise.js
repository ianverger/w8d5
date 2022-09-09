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
// myBind(palov)(fsojs)
Function.prototype.myBind = function(context, ...args) {
    // console.log(context)
    return (...otherArgs) => {
        let args = Array.from(arguments) // convert to an array
        args = args.slice(1) // drop to array
        // this.apply(context, args)

        if (args.length > 0 && otherArgs.length > 0) {
            let newArgs = args.concat(otherArgs)
            this.apply(context, newArgs)
        } else if (args.length > 0) {
            this.apply(context, args)
        } else if (otherArgs.length > 0) {
            this.apply(context, otherArgs)
        }
    }
}


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");

  markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind(pavlov, "meow")("Markov");