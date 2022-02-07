'use strict';

/* 
TO DO LIST
1. Create an empty array for the toDoList items
2. On submit, add to the local array and append it to the unorderedList
3. We also need a button that will remove the element from the list, and the local storage

- Every input needs to also be pushed into the array
*/

let textInput = document.getElementById('toDo');
// let form = document.querySelector('form');
let submitButton = document.getElementById('submitButton');
let clearButton = document.getElementById('clear');
let list = document.querySelector('ul');

let toDoArray = [];
const data = JSON.parse(localStorage.getItem('items'));

toDoArray = localStorage.getItem('items')
? JSON.parse(localStorage.getItem('items'))
: '';

function makeToDo (text) {
    const toDo = document.createElement('li');
    toDo.innerHTML = text;
    list.appendChild(toDo);
}


submitButton.addEventListener('click', function() {
    toDoArray.push(textInput.value);
    console.log(toDoArray);
    
    localStorage.setItem('items', JSON.stringify(toDoArray));
    makeToDo(textInput.value);
    textInput = '';
    
})

data.forEach((item) => {
    makeToDo(item);
})

clearButton.addEventListener('click', function() {
    localStorage.clear()
    // while (list.firstChild) {
    //     list.removeChild(list.firstChild)
    // }
})


