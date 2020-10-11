

/*
Const
can't change

let
cant change result
(but both can't be used title again)

string
const what = "Nico"

boolean
const where = true/false

Number
const how = 666;

Float
const when = floating numeber(2)
(ex 55.1231 -> 55.12)

Array
use []
const why = ["","","",...]
if you need a list, it use!


Object
use {}
 const who = [{name : ~, age : ~, ...}]
*/

/*homework
const calculator = {
  plus : function(a, b){
   return a + b;
 },
  minus : function(a, b){
   return a - b;
 },
  multiplation : function(a, b){
    return a * b;
  },
  division : function(a, b){
    return a / b;
  },
  power : function(a, b){
    return a ** b;
  }
}

const plus = calculator.plus(2,2)
const minus = calculator.minus(2,2)
const multiplation = calculator.multiplation(2,2)
const division = calculator.division(2,2)
const power = calculator.power(2,2)

console.log(`${plus}, ${minus}, ${multiplation}, ${division}, ${power}`)
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick () {
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();


