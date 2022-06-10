//Test 2
const arr=[]



for(let i=1; i<=99;i++){
  arr.push(i)
}

const newArry=[]

function openSource() {
   for (let i = 0; i < 100; i++) {

    if (i % 21 == 0) {
      console.log("OpenSource")
    } else if (i % 3 == 0) {
      console.log("Open")
    } else if (i % 7 == 0) {
      console.log("Source")
    } else {
      console.log(i)
    }


  }
}

openSource(arr)
// Test 3

const allChildren=document.querySelectorAll('.container>div')

console.log(allChildren)

//Test 4

const input=['1','a','25','13.1']

function justNumbers(arr){
  const numbers = arr.map((item) => {
  
  if (Number.isInteger(Number(item))) {
  
  return Number(item);
  
  }}).filter((item) => item !== undefined);
  
  return numbers.reduce((acc, curr) => acc + curr, 0);
  
  
  
  }
console.log(justNumbers(input))

//Test 4


//Test 5
function getJson(){
return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data=>data.filter(item=>item.id==5))
 

}

getJson().then(data => console.log(data))

//Test 5

//Test 6

const words='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias nisi ad consectetur corrupti facilis adipisci laborum quis Softeq modi impedit! #rules bla '

const regex = (str) => {
  
  const regex = /Softeq/i;
  
  const regex2 = /#rules/i;
  
  return regex.test(str) && regex2.test(str);
  
  }
  
  console.log(regex(words));




//Test 6

//Test 7
function getAlphabet() {
let alphabet = [];
  
for (let i = 65; i <= 90; i++) {
  
    alphabet.push(String.fromCharCode(i));
  
  }
  
  return alphabet;
  
  }
  
  
  
  console.log(getAlphabet())

//Test 7

//Test 8
const secretNumber = Math.floor(Math.random() * 1000000);


function guessNumber() {
let min = 1;
let max = 1000000;

let med = Math.floor((min + max) / 2);

let counter = 0;



while (counter <= 50 || min <= max) {
let guess = verify(med);
if (guess === 0) {
console.log("You won!");

console.log('Tries: ' + counter);
return;

} else if (guess === -1) {
max = med - 1;

med = Math.floor((min + max) / 2);
} else {
console.log(med);
min = med + 1;
med = Math.floor((min + max) / 2);
}
counter++;
}
console.log("You Lose");
return;

}



function verify(guess) {
if (guess === secretNumber) {
return 0;
} else if (guess > secretNumber) {
return -1;
} else {
return 1;
}

}



guessNumber()


//Test 8