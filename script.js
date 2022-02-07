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
let list = document.querySelector('ul');

let toDoArray = [];

function makeToDo () {
    document.createElement('li').innerHTML(textInput.value);
}

submitButton.addEventListener('click', function() {
    toDoArray.push(textInput.value);
    console.log(toDoArray);


    // localStorage.setItem('items', JSON.stringify(toDoArray));

})

