// js data types
let firstName = 'Abdur Rahman "Shordar"'
console.log(typeof firstName);

let secondName = 'Mahfuz'
console.log(secondName)
let finalName = `${firstName + secondName}`
console.log(finalName);

let age = 50;
let age2 = 20;
let full = (age + age2 + finalName);
console.log(full)
console.log(typeof full);
console.log(age + age2 + firstName + finalName);

// let over = prompt('Enter your Name')
// let userInput = prompt ('Enter Your Name');
// let number = parseInt(userInput);

// javascript function
function myFunction(fullName, age, dateOfbirth = 1999) {
  console.log('Hello' + fullName + ' i am ' + age + ' My Date Of Birth ' + dateOfbirth);
}
myFunction('mahfuz', 30, 1995);
myFunction('Tamim', 35, true);

function isClicked() {
  console.log('Clicked');
}
document.getElementById('btn').addEventListener('click', isClicked);

function clicked() {
  console.log('Yes Clicked');
}
document.getElementById('click').addEventListener('click', clicked);

let add = (x, y) => x + y;
console.log(add(10, 20));

const mobileModel = {
  Brand: 'Redmi',
  Model: 'note 11 pro',
  prossecor: 'mediatek helo g96',
  camera: ['108MP, 8MP, 8MP, 2MP']
}
console.log(mobileModel);

const Details = {
  Name: 'Abdur Rahman',
  Roll: '243397',
  Year: '18',
  Collage: 'Bheramara Govt Collage',
  Ssc_Result: '4.78',
}
console.log(Details);
console.log(Details.Ssc_Result);
const language = ['Html', 'Css', 'javaScript', 'php', true, 400]
language[3] = 'Python'
console.log(language)
console.log(language.join('$'))
const x = [1, 3, 5, 7]
const y = [2, 4, 6, 8]
const z = x.concat(y)
console.log(z)


function clicked() {
  document.getElementById('click').innerHTML = 'Clicked'
}
function cows() {
  document.getElementById('cow').innerHTML = 'clicked done'
}
function clicked(){
  document.getElementById('click').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> liked'
}