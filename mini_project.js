// Q1 promise
function fetchDate(){
    return new Promise((resolve =>{
        setTimeout(() => {
            const data = [
               { id: 1, name: 'john', age: 30,},
                {id: 1, name: 'Alice', age: 25,},
                {id: 1, name: 'charles', age: 20,}
               
            ]
            resolve(data);
        }, 2000);
    }))

}
fetchDate().then((data) =>{
    console.log(data);
})


// Q2 closure
function createCounter(){
    let count = 0;
    return{
        increment(){
            count++;
        },
        getCount(){
            return count
        }

    }

}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

// Q3 callback
function processData(number, callback){
   return number.map(callback);
   
}

const number = [1 , 2 ,3,  4 , 5 ]
const processed = processData(numbers, num => num*2)
console.log(processed)


// Q4 async
async function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            const data = {id: 1, name: "Juna shrestha"}
            resolve(data)
        }, 1000);
    })
}


// Q5

async function getData(){
    try {
        const data = await fetchData();
        console.log(data);
    }  
catch(error){
console.error(error)
}}

getData();

// Q6
function dataNumbers(numbers){
    return numbers.map(fun)
}

const numbers= 