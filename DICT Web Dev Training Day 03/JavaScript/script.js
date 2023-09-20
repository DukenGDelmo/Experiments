// alert('Hello World!');

console.log('Hello World! (from console)');

// document.write('Test');


//variable declaration
/*
    multiple line comment
*/

// var variable1;
// variable1 = 30;
// let variable2 = "Hello";


// let numberValue = 123 //Number
// let stringValue = 'Hello' //String
// let booleanValue = true //boolean
// let arrayValue = [1,2,3] //array
// let objectValue = {key: 'value'} //object

// let sum = 1+1
// let difference = 10-4
// let product = 3*6
// let quotient = 10/5
// let remainder = 10 % 3

// let anotherVariable2 = 'World!'

// console.log(variable2, anotherVariable2)
// console.log(variable2 + ' ' + anotherVariable2)
// console.log(sum, difference, product, quotient, remainder)

// conditional statement
/*if(condition){
    //code block
}else if(condition2){
    //code block
}else{
    //code block
}*/
// let age=10
// if(age>=18){console.log('You are an adult')}
// else{console.log('You are a minor')}

// let counter=0
// while(counter<=3){console.log(counter); counter+=0.5}

// for(counter=0;counter<=3;counter+=0.5) console.log(counter);

/*function greetings(name){
    return `Hello, ${name}`
}

let greet=greetings('Duken')
console.log(greet)
console.log(greetings('Duken'))*/

// let fruits= ['apple', 'banana', 'cherry']
// for(i=0;i<fruits.length;i++){console.log(fruits[i])}

// let person = {
//     firstName: 'John',
//     lastName: 'Snow',
//     age: 30
// }

// console.log('Name:',person.firstName, person.lastName, '\nAge:', person.age)

// const constantvalue = 10
// console.log(constantvalue)
// try{constantvalue = 20}
// catch{console.log(constantvalue)}

// const Names = ['John', 'Peter', 'Mary']

// console.log(Array.isArray(Names))
// console.log(Names.indexOf('Peter'))

// console.log(Names)
// Names.unshift('Jesus')
// console.log(Names)
// Names.push('Gabriel')
// console.log(Names)
// Names.pop()
// console.log(Names)

// Names.forEach(element => {console.log(element)});

// let person = {firstName: 'John', lastName: 'Snow', age: 30, 
// relatives: {father: 'Juan', mother: 'Maria', sister:'Fiona'},
// cars: ['Toyota','Honda','Suzuki']
// }
// console.log(person)
// console.log(person.relatives.sister)
// console.log(person.cars[2])

// function getSum(num1, num2){
//     return num1 + num2
// }
// console.log(getSum(2,5))
// console.log(getSum('Hello','World'))

// const getResult = (num1, num2) => {
//     return num1 + num2
// }
// console.log(getResult('Hello','World'))
// console.log(getResult(5,10))

// const Contacts = [
//     {
//         id: 1,
//         fullName: 'Juan Tamad',
//         isSaved: 'Phone'
//     },
//     {
//         id: 1,
//         fullName: 'John Snow',
//         isSaved: 'Sim'
//     },
//     {
//         id: 1,
//         fullName: 'Mary Xmas',
//         isSaved: 'Phone'
//     }
// ]
// console.log(Contacts)
// for(i=0;i<=Contacts.length;i++) console.log(Contacts[i])
// Contacts.forEach(element => { console.log(element.fullName) });
// Contacts.forEach(function(contact) { console.log(contact.fullName) });
// for(let contact of Contacts) console.log(contact.fullName)\
// const ContactsFullName = Contacts.map(
//     function(contact){
//         return console.log(contact.fullName)
//     }
// )
// const ContactsPhone = Contacts.filter(
//     function(contact){
//         return contact.isSaved == 'Phone'
//     }).map(function(contact){
//         console.log(contact.fullName)
//     })
// console.log(ContactsPhone)

// const ContactsJSON = JSON.stringify(Contacts)
// console.log(ContactsJSON)

//DOM - Document Object Model

// window.alert('Hello')
// document.getElementById('demo').innerHTML = 'Hello World'
// document.querySelector('.demo').innerHTML = 'Hello World 1'
// document.querySelector('#demo').innerHTML = 'Hello World 2'

const Form = document.querySelector('#MyForm')
const msg = document.querySelector('.msg')
const btn = document.querySelector('#btnSubmit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

btn.addEventListener('onclick', function(e){
    e.preventDefault();
    if (username.value.length === 0 || password.value.length === 0){
        msg.innerHTML = 'Please enter username and password'
    }else{
        Form.submit
    }
    
})