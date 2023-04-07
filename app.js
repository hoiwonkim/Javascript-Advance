
// Module 3 Labs
// JS Advanced
// `
//1. makeCounter below is a decorator function which creates and returns a function that increments a counter.

function makeCounter() {
    let currentCount = 0;

    let result = {
        increment: function() {
            currentCount++;
            console.log(currentCount)
            return currentCount;
        }
    }

    return result;
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2


//2. Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1

let counter2 = makeCounter();
counter1(); // 1
counter2(); // 1
counter1(); // 2
counter2(); // 2


//3. Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)

function makeCounter(startFrom = 0) {
    let count = startFrom;
  
    function counter() {
      count++;
      return count;
    }
  
    return counter;
  }
  
  let counter1 = makeCounter(1);
console.log(counter1()); // 2
console.log(counter1()); // 3

let counter2 = makeCounter(10);
console.log(counter2()); // 11
console.log(counter2()); // 12

function makeCounter(startFrom = 0) {
    let count = startFrom;
  
    function counter() {
      count++;
      return count;
    }
  
    return counter;
  }
  
  let counter1 = makeCounter(1);
console.log(counter1()); // 2
console.log(counter1()); // 3

let counter2 = makeCounter(10);
console.log(counter2()); // 11
console.log(counter2()); // 12

  //4. Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

  function makeCounter() {
    let count = 0;
    function counter(incrementBy) {
      count += incrementBy;
      return count;
    }
    return counter;
  }
  
  let counter = makeCounter();
  console.log(counter(1)); // 1
  console.log(counter(2)); // 3
  console.log(counter(5)); // 8
  

//-2. The following delayMsg function is intended to be used to delay printing a message until some time has passed. 

// 1. What order will the four tests below print in? Why?
Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.

// 2. Rewrite delayMsg as an arrow function

const delayMsg = (msg) => {
    console.log(This message will be printed after a delay: ${msg});
    }

// 3. Add a fifth test which uses a large delay time (greater than 10 seconds)

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
setTimeout(delayMsg, 15000, '#5: Delayed by 15s');
delayMsg('#4: Not delayed at all');

// 4. Use clearTimeout to prevent the fifth test from printing at all.

const timeoutId = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
const timeoutId2 = setTimeout(delayMsg, 15000, '#5: Delayed by 15s');
delayMsg('#4: Not delayed at all');
clearTimeout(timeoutId2);

// function delayMsg(msg)
// {
    // console.log(`This message will be printed after a delay: ${msg}`)
// }
// 
// 
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')


//-3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing 
//1. It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  const debouncedScroll = debounce(function() {
    // Do something
  }, 300);
   
  window.addEventListener('scroll', debouncedScroll);
  

//2. Using the following code to test and start with:
//3. Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.

function debounce(func, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

//4. Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms

function debounce(func, ms) {
    let timeoutId;
    return function() {
      const args = arguments;
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), ms);
    };
  }
  
//5. Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.

function debounce(func, delay) {
    let timeoutId;
    return function(msg) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(msg);
      }, delay);
    };
  }

  function printMe(msg) {
    console.log('printing debounced message:', msg);
  }
  
  printMe = debounce(printMe, 1000);
  
  setTimeout(() => printMe('first'), 100);
  setTimeout(() => printMe('second'), 200);
  setTimeout(() => printMe('third'), 300);
// 
//-4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// 
//1. Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

function printFibonacci() {
    let a = 0;
    let b = 1;
    setInterval(function() {
      const c = a + b;
      console.log(c);
      a = b;
      b = c;
    }, 1000);
  }

//2. Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

function printFibonacciTimeouts() {
    let a = 0;
    let b = 1;
    function printNext() {
      const c = a + b;
      console.log(c);
      a = b;
      b = c;
      setTimeout(printNext, 1000);
    }
    printNext();
  }
  
//3. Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacciTimeouts(limit) {
    let a = 0;
    let b = 1;
    let count = 0;
    function printNext() {
      if (count >= limit) return;
      const c = a + b;
      console.log(c);
      a = b;
      b = c;
      count++;
      setTimeout(printNext, 1000);
    }
    printNext();
  }
  
// 
//-5 .The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
// 
// let car = {
    // make: "Porsche",
    // model: '911',
    // year: 1964,
// 
// 
    // description() {
        // console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    // }
// };
// 
// 
// car.description(); //works
// 
// 
// setTimeout(car.description, 200); //fails
// 
//1. Fix the setTimeout call by wrapping the call to car.description() inside a function

setTimeout(() => { car.description() }, 200);

//2. Change the year for the car by creating a clone of the original and overriding it

let newCar = Object.assign({}, car);
newCar.year = 1990;

//3. Does the delayed description() call use the original values or the new values from b)? Why?

Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.

//4. Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

setTimeout(car.description.bind(car), 200);

//5. Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let anotherCar = Object.assign({}, car);
anotherCar.make = "Ferrari";
setTimeout(car.description.bind(car), 200);
 
//-6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
// function multiply(a, b) {
    // console.log( a * b );
// }
// 
// 
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// 
//1. Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters

Function.prototype.delay = function(ms) {
    const self = this;
    return function(...args) {
        setTimeout(() => self.apply(this, args), ms);
    };
}

//2. Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay = function(ms) {
    const self = this;
    return function(...args) {
        setTimeout(() => self.apply(this, args), ms);
    };
}

//3. Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(1000)(1, 2, 3, 4); // 24 출력

//-7. In JavaScript, the toString method is used to convert an object to a string representation. 
// By default, when an object is converted to a String, it returns a string that looks something like [object Object]. 
// However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
//1. Define a custom toString method for the Person object that will format and print their details

Person.prototype.toString = function() {
    return '이름: ' + this.name + ', 나이: ' + this.age + ', 성별: ' + this.gender;
}

//2. Test your method by creating 2 different people using the below constructor function and printing them

const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Mary Smith', 32, 'female');
console.log(person1.toString()); //이름: James Brown, 나이: 73, 성별: male
console.log(person2.toString()); //이름: Mary Smith, 나이: 32, 성별: female

//3. Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

//4. Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

Student.prototype.toString = function() {
    return '이름: ' + this.name + ', 나이: ' + this.age + ', 성별: ' + this.gender + ', 코호트: ' + this.cohort;
}

const student1 = new Student('John Doe', 25, 'male', 'CS101');
const student2 = new Student('Jane Doe', 23, 'female', 'CS102');
console.log(student1.toString()); //이름: John

// function Person(name, age, gender) {
    // this.name = name;
    // this.age = age;
    // this.gender = gender;
// }
// 
// 
// const person1 = new Person('James Brown', 73, 'male')
// console.log('person1: '+person1) //prints person1: [object Object]
// 
// 
//-8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
// class DigitalClock {
// 
// 
    // constructor(prefix) {
        // this.prefix = prefix;
    // }
// 
// 
    // display() {
        // let date = new Date();
        // create 3 variables in one go using array destructuring
        // let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
// 
// 
        // if (hours < 10) hours = '0' + hours;
        // if (mins < 10) mins = '0' + mins;
        // if (secs < 10) secs = '0' + secs;
// 
// 
        // console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    // }
// 
// 
    // stop() {
        // clearInterval(this.timer);
    // }
// 
// 
    // start() {
        // this.display();
        // this.timer = setInterval(() => this.display(), 1000);
    // }
// }
// 
// 
// const myClock = new DigitalClock('my clock:')
// myClock.start()
// 
//1. Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
      setInterval(() => {
        this.display();
      }, this.precision);
    }
  }
  
//2. Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.
 
class DigitalClock {
    constructor(element) {
      this.element = element;
    }
    
    start() {
      this.update();
      setInterval(() => {
        this.update();
      }, 500);
    }
  
    update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      const timeFormatted = `${parts.hour}:${minuteFormatted}`;
      const amPm = parts.isAm ? "AM" : "PM";
  
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
    }
  
    getTimeParts() {
      const now = new Date();
      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      };
    }
  }
  
  class AlarmClock extends DigitalClock {
    constructor(element, wakeupTime = "07:00") {
      super(element);
      this.wakeupTime = wakeupTime;
    }
  
    start() {
      this.update();
      setInterval(() => {
        this.update();
      }, 500);
    }
  
    update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      const timeFormatted = `${parts.hour}:${minuteFormatted}`;
      const amPm = parts.isAm ? "AM" : "PM";
  
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
  
      if (timeFormatted === this.wakeupTime) {
        console.log("Wake Up");
        clearInterval();
      }
    }
  }
  
  const clockElement = document.querySelector(".clock");
  const clockObject = new AlarmClock(clockElement, "08:00");
  clockObject.start();
   

//-9. We can delay execution of a function using setTimeout, where we need to provide the callback function to be executed after the delay.

//1. Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below

function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(`Random delay is ${delay} seconds. This is a successful delay.`);
        } else {
          reject(`Random delay is ${delay} seconds. This is a failed delay.`);
        }
      }, delay * 1000);
    });
  }
  
  randomDelay()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  
//2. If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it

function randomDelay() {
    const randomTime = Math.floor(Math.random() * 1000); // 랜덤 delay 시간(1초 이내) 생성
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomTime % 2 === 0) { // 랜덤 delay 시간이 짝수인 경우
          resolve('successful delay'); // promise resolve
        } else { // 랜덤 delay 시간이 홀수인 경우
          reject('failure delay'); // promise reject
        }
      }, randomTime);
    });
  }
  
  randomDelay().then(result => {
    console.log(result);
  }).catch(error => {
    console.error(error);
  });
  

//3. Update the testing code to catch rejected promises and print a different message

function randomDelay() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 1000);
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve();
        } else {
          reject();
        }
      }, delay);
    });
  }
  
  randomDelay()
    .then(() => console.log('There appears to have been a successful delay.'))
    .catch(() => console.log('There appears to have been a failed delay.'));
  
//4. Try to update the then and catch messages to include the random delay value

function randomDelay() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 1000);
      setTimeout(() => {
        if (delay % 2 === 0) {
          resolve(`Successful delay of ${delay}ms.`);
        } else {
          reject(`Failed delay of ${delay}ms.`);
        }
      }, delay);
    });
  }
  
  randomDelay()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  
    randomDelay()
  .then((message) => console.log(`${message} Random delay value: ${(message.match(/\d+/))[0]}ms.`))
  .catch((error) => console.error(`${error} Random delay value: ${(error.match(/\d+/))[0]}ms.`));

// 
// function randomDelay() {
    // your code
// }
// randomDelay().then(() => console.log('There appears to have been a delay.'));
// 
// 
//-10. Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. 
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
//1. Write a new version of this function using async/await

'node-fetch'에서 가져오기 가져오기;
globalThis.fetch = 가져오기;


비동기 함수 fetchURLData(url) {
노력하다 {
const 응답 = await 가져오기(url);
if (response.status === 200) {
const 데이터 = 응답 대기.json();
반환 데이터;
} 또 다른 {
throw new Error(${response.status} 상태로 요청 실패);
}
} 잡기(오류) {
console.error(오류.메시지);
}
}

//2. Test both functions with valid and invalid URLs.

To test the fetchURLData function, you need a valid URL (e.g. fetchURLData('https://jsonplaceholder.typicode.com/todos/1')) and an invalid URL (e.g. fetchURLData('https://jsonplaceholder.typicode.com) /invalid-url')) to send the request. When you send a request to a valid URL, JSON data is logged to the console. This is because data is received by sending an HTTP GET request with the fetch method [2]. On the other hand, if you send a request to an invalid URL, an error message like "Request failed with status 404" will be printed to the console. This is because the server does not return a response to that URL.

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// add this line to package.json after line 5: "type": "module",
// 
// 
// import fetch from 'node-fetch'
// globalThis.fetch = fetch
// 
// 
// function fetchURLData(url) {
    // let fetchPromise = fetch(url).then(response => {
        // if (response.status === 200) {
            // return response.json();
        // } else {
            // throw new Error(`Request failed with status ${response.status}`);
        // }
    // });
// 
// 
    // return fetchPromise;
// }
// 
// 
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    // .then(data => console.log(data))
    // .catch(error => console.error(error.message));
// 
// 
// 