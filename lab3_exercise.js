// Program 1
// function and console.log
// Array()
// Program 1: Create 6 normal functions in Javascript which prints the above lines and call those functions in sequence

function printArray(array) {
    array.forEach(function(element) {
      console.log(element);
    });
  }

  function printFunctionAndLog() {
    console.log('function and console.log');
  }

  function printArrayIndex() {
    const array = ['Array()'];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  function printPizza() {
    const pizza = ["Started preparing Pizza", "Pizza Base is Prepared", "Cheese is added on Pizza", "Veggies are added on Pizza", "Pizza is heated", "Pizza is ready"];
    for (let i = 0; i < pizza.length; i++) {
      console.log(pizza[i]);
    }
  }

  function callAllFunctions() {
    printFunctionAndLog();
    printArray(['Array()']);
    printArrayIndex();
    printPizza();
  }
  
  callAllFunctions();


// Program 2:Replace the above normal function with Javascript Expression functions format

 const printPizza = function() {
  const pizza = ["Started preparing Pizza", "Pizza Base is Prepared", "Cheese is added on Pizza", "Veggies are added on Pizza", "Pizza is heated", "Pizza is ready"];
  console.log(pizza);
}

// Program 3:Replace the Program 1 with arrow functions

const exerciseOne = names => names.forEach(name => console.log(name));
exerciseOne(['John', 'peter', 'mart']);


// Program 4: For the program 1 make the functions asynchronous by using setTimeOut for different operations with different time durations. The output of this program should give the output in the order (Use callback pattern to solve this issue)

async function operation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Operation 1");
        resolve();
      }, 1000);
    });
  }
  
  async function runProgram() {
    await operation1();
    await operation2();
    operation3();
  }
  
  runProgram();
  
  

// Program 5 : Modify the program 4 to use Promises concept and achieve the required result

async function operation1() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Operation 1");
    resolve();
    }, 1000);
    });
    }
    
    async function operation2() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Operation 2");
    resolve();
    }, 2000);
    });
    }
    
    async function operation3() {
    console.log("Operation 3");
    }
    
    async function runProgram() {
    await operation1();
    await operation2();
    operation3();
    }
    
    runProgram();