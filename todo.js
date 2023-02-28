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
}
