
// //Q1  Print the numbers from 0 to 15
// for(i = 0; i<=15; i++){
//     console.log(i);
// }>

// // Q2 Print the ODD numbers from 7 to 31
// for(let num = 7; num<=31; num += 2){
//     if(num%2 !== 0){
//         console.log("This is a odd number" + num );
//     }
// }
// // Q3 Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// for(i = 50; i>=20; i--){
//     if(i%3 === 0 ){
//         console.log(i)
//     }
// }


// let n = 5;
// star = "";
// for(i= 1; i <= n; i++){
//     for (j = 1; j <=i; j++){
//         star += "*";
//     }
//     star = '\n';
    

// }
// console.log(star);

// let rows = 5 ;
// let cols= 10;
// for (let i = 1; i<=rows; i++){
//     let row = "";
//         for (let j = 1; j<=cols; j ++
//         ){
//             row +="*";
//         }
//         console.log(row);
// }
// // inverted triangle 
// let row = 5 ;
// for(let i = row; i>=1; i--){
//     let rows = ""
//     for (let j = 1; j<=i; j++){
//     rows +="*";}
//     console.log(rows);
// }

 // pyramid
// let n = 5 ;
// let row = "" ; 
// for (let i = n ; i >= 1; i++){
//     let  row = "";
     
//     for(let j = 1 ; j<= n - i; j++)
//         {
//              row += ' ';
//         }
//         for(let k = 1; k<= 2 * i - 1; k++){
//             row += "*"
//         }
    
// console.log(row)
// }



// let num =5; 
// let string = " ";
// for  (let i = 1; i<=num; i++){
// for(let j = 1; j<=num-i; j++)
//     {
// string +="";
//     }
//     for(let k = 0 ; k < 2* i - 1; k++){
//         if (i === 1 || i == num ){
//             string +=" ";
//         }
//         else if(k === 0 || k === 2 * i -2){
//                 string += " ";
//             }
//             else{
//                 string +="*";
//             }
//         }
//         console.log(string);
        
//     }




//inverted pyramid

// let n = 5;
// for (let i = 1; i<= n; i++){
//     let row = "";
//     for (let  j = 1 ; j < i; j++ ){
//         row +=" ";

//     }
//     for (let k =0; k < 2 *(n-i) + 1; k++){
//         row +="*";

//     }
// console.log(row);
    
// }
