/*let name = "roshini";
let age = 22;
console.log(name,age);
console.log(typeof name)
console.log(typeof age)*/
/*let age = 22;
console.log(age<=22);
let isAdult = true;
console.log(typeof isAdult);
  */
/* let age = true;
age = Number(age);
console.log(age);
console.log(typeof age);
console.log(age); */
/*let x = '0';
console.log(typeof x);
x = Boolean(x);
console.log(x);
console.log(typeof x);
let a = '12';
let b = '6';
let sum = +a + +b;
console.log(sum);  */
/* let a = "rose";
let b = "Rose";
let result = a > b;
console.log(result); */
/* console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0); */
/* let isAdult = true;
let age = 19;
if (age < 18);
  {
    isAdult = true;
  }
if('0'){
  console.log('hi');
} */
/* let person;
let age = 10;
if (age > 18){
  person = 'adult';
}
else if (age < 12){
  person = 'teenage';
}
else {
  person = 'child';
}
console.log(person); */
/* let year = 2024;
if (year % 4 == 0){
  if (year % 100 == 0){
    if (year % 400 == 0){
      console.log('leap year');
    }
    else {
      console.log('not a leap year');
    }

  }
  else {
    console.log('leap year');
  }
}
else {
  console.log('not a leap year')
} */
/* let a = 133;
if (a % 2 == 0){
  console.log('even');
}
else {
  console.log('odd');
} */
/* let year = 2030;
if (year % 4 == 0){
  if (year % 100 == 0){
    if (year % 400 == 0){
        console.log('leap year');
    }
    else {
      console.log('not a leap year');
    }
  }
  else{
    console.log('leap year');

  }

}
  else {
    console.log('not a leap year');
  }
 */
/* let a = 61426562;
if (a % 2 == 0){
  console.log('even');
}
else {
  console.log('odd')
} */
/* let x = 120;
let y = 39;
if (x > y){
  console.log('greater');
}
else {
  console.log('less than');
} */
/* let n = 1000;
let fact = 1;
for (let i = 1; i<=n; i++){
  fact = fact * i;
  
}console.log(fact);
 */
/* let year = 2010;
if (year % 4 == 0){
  if (year % 100 == 0){
    if (year % 400 == 0){
      console.log('leap year');
    }
    else {
      console.log('not a leap year');
    }
  }
  else {
    console.log('leap year');
  }
}
else {
  console.log('not a leap year');
} */
/* let b = 3043534227;
if (b % 2 == 0){
  console.log('even');
}
else {
  console.log('odd');
} */
/* let n = 5;
let fact = 1;
for (i = 1; i <= 5; i++){
  
  fact = fact * i;
  
}console.log(fact); */
/* let year = 2000;
if (year % 4 == 0){
  if (year % 100 == 0){
    if (year % 400 == 0){
      console.log('leap year');
    }
    else {
      console.log('not a leap year');
    }
  }
  else {
    console.log('leap year');
  }
}
else {
  console.log('not a leap year');
} */
/* let a = 10;
let b = 20;
let c = a + b;
console.log(c); */
/* let r = 20;
if (r % 2 == 0){
  console.log('even');
}
else {
  console.log('odd');
} */
/* let n = 5;
let fact = 1;
for (i = 1; i <= 5; i++){
  fact = fact * i;
}console.log(fact); */
function toggleMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }

}
function welcome() {
    alert("Welcome to New Delhi Shopping!");
}

function searchProduct() {
    let product = document.getElementById("search").value;

    
}
function showWholesale() {
    document.getElementById("wholesaleProducts").style.display = "block";
}
function showWholesale() {

    let products = document.getElementById("wholesaleProducts");

    if(products.style.display === "none"){
        products.style.display = "block";
    }
    else{
        products.style.display = "none";
    }

}
function showWholesale() {
    window.location.href = "wholesale.html";
}
function showRetail(){
  window.location.href = "retail.html";
}