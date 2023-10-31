//Upppgift 1

let todoInput = document.querySelector("#todo");
let addTodoBtn = document.querySelector("#add-todo");
let todoList = document.querySelector("#todo-list");
let completedTodoList = document.querySelector("#completed-todos");

//Alternativ 2- gLobal Array
// let todos = [];

// let deleteTodo = (event) => {
//    console.log(event);
// };
let deleteTodo = (e) => {
    e.target.parentElement.remove();
};


console.log(todoInput, addTodoBtn, todoList);

let addTodo = () => {
    //Alternativ 1
    let currentTodos = document.querySelectorAll("#todo-list li");
    // console.log(currentTodos.length);

    if(currentTodos.length >= 5){
        alert("Too many todos! Get that shi done first you lazy a**");
    }

    //ALternativ 2
    // if (todos.length === 5) {
    //    alert("Too many todos! Get that shi done first you lazy a**");
    //} 
    else {
    //Todo
    let value = todoInput.value;
    let li = document.createElement("li");
    li.innerText = value;
    todoInput.value = "";

    //Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", deleteTodo);
    li.append(deleteBtn);
    todoList.append(li);
    
    //Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    li.append(completeBtn);

    completeBtn.addEventListener("click", (e) =>  {
        console.log(li);
        completedTodoList.append(li);
    });

    //ALternativ 2
    //todos.push(value);
    }
};

addTodoBtn.addEventListener("click", addTodo);



// Uppgift 2

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let addBtn = document.querySelector("#add");
let answer = document.querySelector("#answer");

let subtractBtn = document.querySelector("#subtract");
let multiplyBtn = document.querySelector("#multiply");

console.log(num1, num2, addBtn, answer);
//Alternativ 1
let getAnswer = (operator) => {
    let sum;
    if (operator === "+") {
        sum = +num1.value + +num2.value;
    } else if (operator === "-") {
        sum = +num1.value - +num2.value;
    } else {
        sum = +num1.value * num2.value;
    } 
    answer.innerText = sum.toFixed();
};

//Alternativ 2
// Mindre kod med eval() metoden, MEN EJ SÄKERT. va försiktig. 
// let getAnswer = (operator) => {
//    let sum = eval(+num1.value + operator + +num2.value);
//    answer.innerText = sum.toFixed();
// };

// Alternativ 3
// let add = () => {
//    let sum = +num1.value + +num2.value; //"+"framför en sträng gör det till en siffra.
//    answer.innerText = sum;
// };

// let subtract = () => {
//    let sum = +num1.value - +num2.value;
//    answer.innerText = sum.toFixed();
// };

// let multiply = () => {
//    let sum = +num1.value * +num2.value;
//    answer.innerText = sum.toFixed();
// };

addBtn.addEventListener("click", () => getAnswer("+"));
subtractBtn.addEventListener("click", () => getAnswer("-"));
multiplyBtn.addEventListener("click", () => getAnswer("*"));



// Uppgift 3

let numberValue = document.querySelector("#numberValue");

numberValue.addEventListener("change", () => {
  let value = +numberValue.value;
  let h1Number = document.querySelector("#valueGrade");
  h1Number.innerText = numberValue.value;

  if (value > 10 || value < 0) {
    h1Number.innerText = "Bad value! Please enter a value between 0-10";
    h1Number.style.color = "red";
  } else if (value < 4) {
    h1Number.style.color = "red";
  } else if (value <= 7) {
    h1Number.style.color = "orange";
  } else if (value <= 10) {
    h1Number.style.color = "darkgreen";
  }
});