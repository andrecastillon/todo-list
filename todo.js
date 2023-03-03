// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  // get ol by ID
  // loop thru arraysOfTodos
  // create a list element
  // create text node make it = to the title of that obj
  // append text node into list item
  // append the list item into our ol

  const ol = document.getElementById("todo-list");
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    const li = document.createElement("li");
    const title = document.createTextNode(todo.title);
    li.appendChild(title);
    ol.appendChild(li);
  }
};

// const filterTodosOldSchool = () => {
//   let filtered = [];
//   for (let index = 0; index < arrayOfTodos.length; index++) {
//     const todo = arrayOfTodos[index];
//     let userId = 2;
//     if (todo.userId === userId) {
//       filtered.push(todo);
//     }
//   }
//   console.log("filtered:", filtered);
// };
// const filterTodos = () => {
//   let filteredByUserId = arrayOfTodos.filter((todo) => {
//     let userId = 2;
//     // return todo
//     if (todo.userId === userId && todo.completed) {
//       return todo;
//     }
//   });
//   console.log("filteredByUserId:", filteredByUserId);
// };

let filterStorage = []

const filterTodos = () => {
  reset();
  const userNumber = document.getElementById("userNumber").value;
  let filterArray = arrayOfTodos.filter(
    (filteredTodo) => filteredTodo.userId == userNumber
  );
  const ol = document.getElementById("todo-list")
  for (let index = 0; index < filterArray.length; index++) {
    const element = filterArray[index];
    const li = document.createElement("li");
    const title = document.createTextNode(element.title);
    li.appendChild(title);
    ol.appendChild(li);
    filterStorage.push(element)
  }
};

const reset = () => {
  const ol = document.getElementById("todo-list")
  ol.innerHTML = ""
}

const Complete = () => {
  reset();
  const ol = document.getElementById("todo-list")
  for (let index = 0; index < filterStorage.length; index++) { 
    const element = filterStorage[index];
    if (element.completed == true){
      const li = document.createElement("li");
      const title = document.createTextNode(element.title);
      li.appendChild(title);
     ol.appendChild(li);
    }
}}

const Incomplete = () => {
  reset();
  const ol = document.getElementById("todo-list")
  for (let index = 0; index < filterStorage.length; index++) { 
    const element = filterStorage[index];
    if (element.completed == false){
      const li = document.createElement("li");
      const title = document.createTextNode(element.title);
      li.appendChild(title);
     ol.appendChild(li);
    }
}}