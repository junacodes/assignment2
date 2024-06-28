// // Q1 Q2 Q3 variable
// // var x= 20;
// // x = 10 ;
// // var x = 30;
// //  x = 20;
// // console.log(x);


// // let a = 10;
// // a= 30;
// // a = 50;
// // console.log(x) //let can re-assign many time and not-redeclare

// // const y = 60;
// // console.log(y) //const can't do re-declare and not re-assign
 
// //Q4 Q5 Q6 typecasting
// let stringNumber = "128"
// let integerNumber= parseInt(stringNumber);
// console.log(integerNumber);



// console.log("5" - 3); // it is converting in string to number and when the string is "5"convert to number its become 5 that's why 5-3 equal 2 


// // 6 
// let strValue = "true";
// let boolValue = Boolean(strValue);
// console.log(typeof boolValue);

// // Q10, Q11, Q12
// let i = 10; 
// if(i > 0 ){
//     console.log(" positive number")
// }else if (i < 0 ){
//     console.log("this a negative");
// }else{
//     console.log("zero")
// }

// let v = 10;
// if (v >= 6 ) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// let a = (1 + Number("2"));
// console.log( typeof a);

// 12 ternary operator evaluates a given condition, also known as a boolean expression, and returns a results to depend on wether 
let num = 12
result  = num > 0? "positive": "not positive";
console.log(result);

// Q13  
const dayOFTheWeek = 1;
switch(dayOFTheWeek){
    case 1 :
          console.log("Today is Monday");
        break;
        case 2 : 
           console.log("Today is Tuesday");
        break;
        case 3 : 
           console.log("Today is Wednesday");
        break;
        case 4:
            console.log("Today is Thursday ");
            break;
        case 5: 
            console.log("Today is Friday");
            break;
        case 6: 
          console.log("Today is Saturday");
        break;
        case 7:
            console.log("Today is Sunday");
        default:
            console.log("Invalid Day");
        }
    
        // Q14
        const data = "12";
        
        switch(data){
            case "1" : case "2": case "3": case "4":
            console.log("small number");
            break;
            case "10": case "12": case "13": case "14": 
            console.log("larger number");
            break;
            default:
            console.log("strange number")
        }
        