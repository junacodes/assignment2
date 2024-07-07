// Q1

function add (a, b){
    return a + b;
}
const result = add(40, 30);
console.log(result);
  
// Q2
function getFirstElement(arr){
if(arr.length === 0 ){
return undefined;
}
return arr[0];
}
 const array = [10, 30, 40, 50 , 80 , 20];
 const firstElement =getFirstElement(array);
 console.log(firstElement)


//  Q3
const person = {
name : 'Alice',
age : 30,
city:'Uk'

}
function getPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}

const personInfo = getPersonInfo(person);
console.log(personInfo)


// Q4 
function upperCase(str){
    return str.toUpperCase();
}
const stringSimple = "hello world";
const upperCaseString = upperCase(stringSimple);
console.log(upperCaseString);


// Q5
function multiply(x , y){
    return (num1 * num2);
}
const num1= 2;
const num2 = 9;
const resultMul = multiply(num1, num2)
console.log(resultMul);


// Q6
let myArr = [1, 3 , 4, 35 , 50];
function myList(){
    return(myArr.slice(-2));
}
const lastElement = myList(myArr);
console.log(lastElement);

// Q7
let book= {
   title :"Alice's Adventures in Wonderland",
    author : "Lewis Carroll",
    publisher : "Macmillan",
    length : 352 ,
    year : 1865,
    getBookTitle: function(){
        console.log(`${ book.title} was written by ${ book.author}in ${ book.publisher}with ${ book.length} pages  at ${ book.year}`)

    }
};
book.getBookTitle();

    
// Q8
function reverseString(str){
    let newString = '';
    for (let i = str.length - 1; i >=0, i--;){
        newString +=str[i];
    }
    return newString;
}
const reversed = reverseString('Hello World');
console.log(reversed)


// Q9
function oddEven(num){
    return num % 2 === 0 }
const number1 = 20;
const number2 = 40;
console.log(oddEven(num1));
console.log(oddEven(num2));

// Q10
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr = [1, 3 , 5 , 7 , 9];
console.log(sum(arr));


// Q11
let carName= {
    make: "Honda", 
    model: "CR-V",
    year: 1997,
     getCarModel: function(){
         console.log(`${ carName.make} ${ carName.model} ${ carName.year}`)
 
     }
 };
 carName.getCarModel();
 

//  Q12
function concatenateStrings(str1 , str2){
    return str1 + str2;
}
const string1 = "Hello , ";
const string2 = "July !!";
const concatenatedString = concatenateStrings(string1, string2);
console.log(concatenatedString);

// Q13
function squareNumber(){
    return square* square

}
const square = 7;
const resultSquare = squareNumber(square);
console.log(resultSquare);

// Q14
function findMaxNumber(arrayMax){
    let i;
    let max = arrayMax[3];
    for(i = 1; i <arrayMax.length; i++){
        if(arrayMax[i]>max){
            max =arrayMax[i]
        }
        return max
    }
}
const arrayMax = [22 , 40 , 50, 80, 23]
// const maxNumber = findMaxNumber(arrayMax);
console.log(findMaxNumber(arrayMax));

// Q15
const person1 ={
firstName : 'John',
lastName : 'Doe',
grade : 3.4,
getFullName(){
    return this.firstName  + " " + this.lastName + " "+ this.grade
}
}

console.log(person1.getFullName());


// Q16
function greet(name){
    return `Hello, ${name}`
}

const greeting = greet('john');
console.log(greeting)



// Q17
function doubleArray(arr){
    return arr.map(num => num*2 );
    
}

const arrayNumber = [1, 3 ,5 ,7 , 9];
const doubledNumbers = doubleArray(arrayNumber);
console.log(doubledNumbers)

// Q18
let movieName = {
    title: "Titanic",
    director: "James Cameron",
    releaseYear : 1997,
    getMovieTitle(){
        console.log(`${this.title},  ${this.director}, ${this.releaseYear}`);
    }


}
console.log(movieName.getMovieTitle());

// Q19
function getLength(str){
    return str.length
}

const stringLength = "Hello, World";
const length = getLength(stringLength);
console.log(length);

// Q20
 
function subtractNumber(x , y ){
    return x - y;
}
const num = 80;
const num3 = 20;
const difference = subtractNumber(num, num3);
console.log(difference)

// Q21
function mergedArray(arr1, arr2){
    return arr1.concat(arr2);

}
let arr1 = [1, 2 ,3 , 4, 5];
let arr2 = [6, 7 , 8, 9, 10 ];
let mergeArray = mergedArray(arr1, arr2);
console.log(mergeArray)

// Q22
const  objectRecipe = {
    name :"Yomari",
    ingredients : ["rice flour", "wheat flour", "chaku(molasses)" , "roasted sesame seeds", "roasted cashew",
"coconut(grated)", "vegetable oil or ghee"
    ],
    serving : "Yomari is served with ghee (clarified butter) or yogurt",
     getIngredientsList(){
        console.log(`${this.name}, ${this.ingredients}, ${this.serving}`);
     }
}

console.log(objectRecipe.getIngredientsList());


// Q23
function endsWith(str, chr) {
return str.charAt(str.length - 1) === chr
}


const stringName = "Hello it's me john";
const character= " ! ";
let resultName = endsWith(stringName, character) ;
console.log (resultName);


// Q24

function divide(a, b){
    return a /b ;
}
const num4 = 20;
const num5 = 5;
const divideNumber = divide(num4, num5);
console.log(divideNumber); 


// Q25
function removeFirstElement(arr3){
    return arr3.shift()
}
let arrayNumber2 =  ['shift', 'splice', 'filter', 'pop'];
let shifted = removeFirstElement(arrayNumber2);
console.log(shifted);
console.log(arrayNumber2);


// Q26
const album = {
    title :" Midnights",
    artist: "Taylor Swift ",
    track : ['Maroon', 'Anti-Hero', 'Snow On The Beach', 'You Are On Your Own Kids' , ' Midnight Rain', 'Question...?' , 'Vigilante Shit'],
    

}
function getTrackCount(album){
    return album.track.length;
}

const trackCount = getTrackCount (album);
console.log(album.title);
console.log(album.artist);
console.log(album.track);