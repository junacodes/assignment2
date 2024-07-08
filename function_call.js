// .Question of callback function
// 1.	Write a JavaScript function add that takes two numbers as arguments and returns their sum. Provide an example of calling this function with two numbers.
// 2.	Write a JavaScript function getFirstElement that takes an array as an argument and returns the first element of the array. Provide an example with an array of your choice.
// 3.	Define a JavaScript object person with properties name, age, and city. Write a function getPersonInfo that takes this object and returns a string with the person's details in the format "Name: [name], Age: [age], City: [city]".
// 4.	Write a JavaScript function toUpperCase that takes a string as an argument and returns the string in all uppercase letters. Provide an example with a sample string.
// 5.	Write a JavaScript function multiply that takes two numbers as arguments and returns their product. Provide an example of calling this function with two numbers.
// 6.	Write a JavaScript function getLastElement that takes an array as an argument and returns the last element of the array. Provide an example with an array of your choice.
// 7.	Define a JavaScript object book with properties title, author, and year. Write a function getBookTitle that takes this object and returns the title of the book.
// 8.	Write a JavaScript function reverseString that takes a string as an argument and returns the string reversed. Provide an example with a sample string.
// 9.	Write a JavaScript function isEven that takes a number as an argument and returns true if the number is even and false if it is odd. Provide an example with a sample number.
// 10.	Write a JavaScript function sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Provide an example with an array of numbers.
// 11.	Define a JavaScript object car with properties make, model, and year. Write a function getCarModel that takes this object and returns the model of the car.
// 12.	Write a JavaScript function concatenateStrings that takes two strings as arguments and returns a new string that is the concatenation of the two input strings. Provide an example with two sample strings.
// 13.	Write a JavaScript function square that takes a number as an argument and returns its square. Provide an example of calling this function with a sample number.
// 14.	Write a JavaScript function findMax that takes an array of numbers as an argument and returns the largest number in the array. Provide an example with an array of numbers.
// 15.	Define a JavaScript object student with properties firstName, lastName, and grade. Write a function getFullName that takes this object and returns the full name of the student in the format "firstName lastName".
// 16.	Write a JavaScript function greet that takes a name as an argument and returns a greeting string in the format "Hello, [name]!". Provide an example of calling this function with a sample name.
// 17.	Write a JavaScript function doubleArray that takes an array of numbers as an argument and returns a new array with each number doubled. Provide an example with an array of numbers.
// 18.	Define a JavaScript object movie with properties title, director, and releaseYear. Write a function getMovieTitle that takes this object and returns the title of the movie.
// 19.	Write a JavaScript function getLength that takes a string as an argument and returns the length of the string. Provide an example with a sample string.
// 20.	Write a JavaScript function subtract that takes two numbers as arguments and returns their difference. Provide an example of calling this function with two numbers.
// 21.	Write a JavaScript function mergeArrays that takes two arrays as arguments and returns a new array containing all elements from both arrays. Provide an example with two arrays.
// 22.	Define a JavaScript object recipe with properties name, ingredients (an array), and servings. Write a function getIngredientList that takes this object and returns the ingredients array.
// 23.	Write a JavaScript function endsWith that takes a string and a character as arguments and returns true if the string ends with the given character, otherwise false. Provide an example with a sample string and character.
// 24.	Write a JavaScript function divide that takes two numbers as arguments and returns their quotient. Provide an example of calling this function with two numbers.
// 25.	Write a JavaScript function removeFirstElement that takes an array as an argument and returns a new array with the first element removed. Provide an example with an array.
// 26.	Define a JavaScript object album with properties title, artist, and tracks (an array of track names). Write a function getTrackCount that takes this object and returns the number of tracks.
// 27.	Write a JavaScript function startsWith that takes a string and a character as arguments and returns true if the string starts with the given character, otherwise false. Provide an example with a sample string and character.
// 28.	Write a JavaScript function isPositive that takes a number as an argument and returns true if the number is positive and false if it is negative or zero. Provide an example with a sample number.
// 29.	Write a JavaScript function countElements that takes an array as an argument and returns the number of elements in the array. Provide an example with an array.
// 30.	Define a JavaScript object game with properties name, genre, and platforms (an array of strings). Write a function getPlatformList that takes this object and returns the platforms array

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
const character= "n";
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

// Q27
function starWith(str, chr) {
    return str.charAt(str.length - 1) === chr
    }   
    const strName = "Hello it's me john";
    const char= " H ";
    let strResult = starWith(stringName, character) ;
    console.log (strResult);

// Q28
function isPositive(num6){
    return num6 > 0;
}

const positiveNumber = 9;
const positiveResult = isPositive(positiveNumber);
console.log(positiveResult);

// Q29

function  countElement(arr4){
    return arr.length;
}
const myArray = [1 ,3 , 5, 7, 9 , 11, 13 , 15 , 17 ,19];
const elementCount = countElement(myArray);
console.log(elementCount);
console.log(myArray) 

// Q30
const game= {
    name : 'PUBG',
    genre : 'Battle royal',
    platforms : ['Steam ' , 'Kakao', 'Xbox', 'PlayStation', 'stadia']
}

function getPlatformsList(gameObj){
    return gameObj.platforms;

}
const platformsList = getPlatformsList(game);
console.log(game.name);
console.log(game.genre);
console.log(game.platforms);
