// Problem 1
function mindGame(number){
const multiply = 3;
let total_multiply = number * multiply;
const sum = 10;
let totalsum = total_multiply + sum;
const division = 2;
let totaldivision = totalsum /division;
const minus = 5;
let totalminus = totaldivision - minus;
return totalminus;
}
let result = mindGame(88)
console.log(result)
//** {< Description >} I have created a function in which I have taken 42 as input. Then multiply by 3 and add this product by 10, divide by 2 and subtract by 5 to find the total answer. **//
// Problem 2
function evenOdd(string){
let langth = string.length;
if(string.length % 2 == 0){
console.log('even')
}
else{console.log('odd')}
}
let strings = evenOdd('this is a pen.')
// Problem 3
function isLGSeven(Number){
const minus2 = 7;
let totalminus2 = Number - minus2;
const multiply2 = 2;
return multiply2;
}
let Numbers = isLGSeven(10);
console.log(Numbers)
// Problem 4
function findingBadData(arrays) {
let elementnumber = [];
for(let i = 0; i < arrays.length; i++) {
const element = arrays[i];
if(element < 0) {
elementnumber.push(element);
}
}
return elementnumber.length;
}
var numbers3=[10,-12,89,56,-83,8,90,-8]
let positivenegative = findingBadData(numbers3)
console.log(positivenegative)
// Problem 5
function gemsToDiamond(firstfriendgeam, secendfriendgeam, therdfriendgeam){
const fstfriendmlty = 21;
const secfriendmlty = 32;
const therfriendmlty = 43;
const firstfriendDiamond = firstfriendgeam * fstfriendmlty;
const secendfriendDiamond = secendfriendgeam * secfriendmlty;
const therdfriendDiamond = therdfriendgeam * therfriendmlty;
const totaldiamond = firstfriendDiamond + secendfriendDiamond + therdfriendDiamond;
const biyog = 2000;
let totalbiyog = totaldiamond - biyog;
return totalbiyog;
}
let perameter = gemsToDiamond(19,11,43);
console.log(perameter);
//** {< Description >} First, I am making three friend gems, then I multiplied the first friend by 21, the second friend by 32 times and the third friend by 43. Then I added three diamonds together. **//