const input = document.getElementById("input");
const startButton = document.getElementById("button");
const todoList = document.getElementById("todolist");
let storage = [];

// startButton.onclick = click;
// function click (){
//     storage.push(input.value)
//     console.log(storage);
// }

startButton.onclick = () =>  {
    storage.push(input.value);
    console.log(storage);
    input.value = "";
    showTodos();
}

// for each iterates through every element but does not return a new one
// map iterates but also returns 
function showTodos(){
    todoList.innerHTML = '';
    storage.forEach (function(todo,index){
        todoList.innerHTML +=
        // "<li>"
        // +todo+
        // "<a onclick = 'editHandle("+index+")'>Edit To-do</a>" +
        // "<a onclick = 'deleteHandle("+index+")'>Delete To-do</a>" +
        // "</li>"
        `<li>
            ${todo}
            <a onclick = editHandle(${index})>Edit To-do</a>
            <a onclick = deleteHandle(${index})>&#10006; | &nbsp;</a>
        </li>`
    })
}

//slice returns a new array
//splice modifies the existing array


function editHandle(index){
    let newValue = prompt("Enter a new Todo task");
    if (newValue.length > 0){
    storage.splice (index, 1, newValue);
    showTodos();
    }
}

function deleteHandle(index){
    storage.splice(index, 1);
    showTodos();
}