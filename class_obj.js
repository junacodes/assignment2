// // Q1
// class Car {
//     constructor(make , model , year){
//         this.make = make;
//         this.model  =  model
//         this.year = year;
//     }
//     carDisplay(){
//         console.log(`${this.make}, ${this.model} ${this.year} `);
//     }
// }
// const car1 = new Car("Toyota", "Corolla", 2020);
// const car2 = new Car("Honda", "Civic", 2022);
// car1.carDisplay();
// car2.carDisplay();

// class ElectricCar extends Car {
//     constructor ( make , model , year , battery){
//         super(make , model, year);
//         this.battery = battery;
//     }
//     carDisplay(){
//         super.carDisplay();
//         console.log(`Battery capacity: ${this.battery}kWh`)
//     }
// }

// const electricCar1 = new ElectricCar("Hyundai",  "IONIQ 6",  2023 , 77.4  )
// console.log(electricCar1.carDisplay());



// // Q2
// class Animal {
//     sound(){
//         console.log("Animal sound")
//     }
// }
// class Dog extends Animal {
//     sound(){
//         console.log("Bark")
//     }
// }
// const soundDog = new Dog();
// soundDog.sound();

// // encapsulation 
// class Cat extends Animal{
//     #name;
//     constructor(name){
//         super();
//         this.#name = name;
//     }
//     getName(){
//         return this.#name ;
//     }
//     setName(name){
//         this.#name = name;
//     }
//     sound(){
//         console.log('Meow')
//     }
// }


// const catSound = new Cat("Maya");
// console.log(catSound.getName());
// catSound.setName("Fluffy");
// console.log(catSound.getName());
// catSound.sound();

// // Q3
// class BankAccount{
//     constructor(accountNumber, balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance;

//     }
//     deposit(amount){
//         this.amount  += amount;
//     }
//     withdraw(amount){
//         if(this.balance >= amount){
//             this.balance -=amount;
//         }else{
//             console.log('Invalid withdraw amount')
//         }
//     }
// }
// const myAccount = new BankAccount('1234567890', 1000);
// myAccount.deposit(500);
// myAccount.withdraw(200);
// console.log(myAccount.deposit());
// console.log(myAccount.withdraw());
// // Q4
// class Shape {
//     calculatorArea (){
//         return 0;
//     }
//     static description(){
//         return "this is the shape";
//     }
// }
// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     calculatorArea(){
//         return Math.PI * this.radius ** 2
//     }
//     static description(){
//         return "This is the circle"
//     }
// }
// class Rectangle extends Shape{
//     constructor(width,height){
//         super();
//         this.width = width;
//         this.height = height;

//     }
//     calculatorArea(){
//         return this.width * this.height;
//     }
// static description(){
//     return "This is a rectangle";
// }
// }
// const circle = new Circle (6);
// console.log(`Area of circle : ${circle.calculatorArea()}`);
// const rectangle = new Rectangle(12 ,35);
// console.log(`Area of rectangle : ${rectangle.calculatorArea()}`)
// console.log(Shape.description());
// console.log(Circle.description());
// console.log(Rectangle.description());


// // Q5
// class Utility {
//     static convertToUpper(str){
//         if( typeof str === 'string'){
//             return str.toUpperCase();
//         }else{
//             return ' Invalid input'
//         }
        
//     }
// static isEven(num){
//     if(typeof num ==='number'){
//         return num % 2 === 0 ;
//     }else{
//         return 'Invalid input'
//     }
// }
// }
// console.log(Utility.convertToUpper('hello world'));
// console.log(Utility.convertToUpper(1234));

// console.log(Utility.isEven(4));
// console.log(Utility.isEven(3));
// console.log(Utility.isEven(2));

// const promise = new Promise ((resolve ,reject) =>{
// const success = true;
// if(success){
//     resolve('This is successful')
// }else{
//     reject('This is failed');
// }
// })

// promise 
// .then((message)=>{
//     console.log(`Success: ${message}`);

// })
// .catch((error)=>{
// console.log(`Error : ${error}`);
// })

// // Q6
const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise resolved !");
    }, 2000);

})

promise 
.then(message =>{
console.log(message);
})

// // Q7
//
// // Q7
// const date1 = (message) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve(`${message} is completed`);
//         }, 1000)
//     })
// }

//     const date2 = (message) =>{
//         return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(`${message} Date2 is completed`);
//         }, 1000)
//         })
//     }

    
//     const date3 = (message) =>{
//         return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(`${message} Date3 is completed`);
//         }, 1000)
//         })
//     }

//     date1("initial message")
// .then(date2)
// .then(date3)
// .then((finalMessage)=>{
//     console.log(finalMessage)
// })
// .catch((error) =>{
//     console.log(`${error} occurred error`)
// })

// Q8
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Something went wrong!");
//     }, 1000);
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved!");
//     }, 1500);
//   });
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 3 resolved!");
//     }, 2000);
//   });
  
  
//   promise1
//     .catch((error) => {
//       console.error("Error:", error);
//     });
  
//   // Example of Promise.all() to handle multiple promises
//   Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//       console.log("All promises resolved successfully:", results);
//     })
//     .catch((error) => {
//         console.error(`${error} promise is error`);
//       });
    

// Q9
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise 1 is resolved after 1 second");
//     }, 1000);
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved!");
//     }, 2000);
//   });
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 3 resolved!");
//     }, 3000);
//   });
  
  
// //   promise1
// //     .catch((error) => {
// //       console.error("Error:", error);
// //     });
  
//   // Example of Promise.all() to handle multiple promises
//   Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//       console.log("All promises resolved successfully:", 
//         results.forEach((result) =>{
//             console.log(result);
//         })
//       );
//     })
//     .catch((error) => {
//         console.error(`${error} promise is error`);
//       });
    

// Q10
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 1 is resolved after 2 second");
    }, 2000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise  2 is resolved after 3 second");
    }, 3000);
  });
  
  
  

  // Example of Promise.all() to handle multiple promises
  Promise.all([promise1, promise2])
    .then((results) => {
        console.log(`First promise resolved ${results} `)
        console.log(results)
    })
    .catch((error) => {
        console.error(`${error} promise is error`);
      });

      // Q11

//       function dataNumber( data, callback){
//         const dataNumber = data*2;
//         callback(dataNumber);
//       }
// dataNumber(20, (results) =>{
//     console.log(`data: ${results}`);
//     dataNumber(results + 10, (nestedResult) => {
//         console.log(`nested data : ${nestedResult}`)
//         dataNumber(nestedResult - 5, (finalResult) =>{
//             console.log(`Final data: ${finalResult}`)
//         })
//     })
// })

// Q12 
function fetchData(callback){
setTimeout(() =>{
    const data = {message: "success!"}
    const err = new Error('failed to fetch data');
    if(Math.random() < 0.5){
        callback(err, null);
    }else{
        callback(null, data)
    }


}, 1000)
}

fetchData((err, data) =>{
    if(err){
        console.error('Error:', err.message);
    }else {
        console.log('Data:', data);
    }
})

// Q13
function processData(data){
    return new  Promise((resolve, reject)=>{
        if(typeof data === 'number'){
            resolve (data);
        }else{
            reject(new Error("Invalid data "))
        }
    })
}
processData(49)
.then((result)=>{
    console.log(`success:, ${result}`)
})
.catch((error) => {
    console.error(`Error : , ${error.message}` )
})


function fetchDataPromise(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            const data = {id:1, name:"john david "};
            // callback(null, data);
            resolve(data)
        }, 1000);
    })

    
}
fetchDataPromise() 
.then((result) =>{
    console.log(`Data:, ${result}`);
})
.catch((error) =>{
    console.error(`Error:, ${error}`);
})