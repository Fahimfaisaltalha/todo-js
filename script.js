let todos = []

const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-btn')
const listItem = document.getElementById('todo-list')

const renderTodos = () => {
    listItem.innerHTML = '' 
    todos.forEach((todo, index) => {
        const li = document.createElement('li')


        li.className = "list-group-item d-flex justify-content-between align-items-center"
        li.innerHTML = `
  <span>${index} - ${todo}</span> 
  <button onclick="removeTodo(${index})" class="btn btn-danger btn-sm">Delete</button>`

        listItem.appendChild(li)
    })
}

addButton.addEventListener('click', () => {
    todos.push(todoInput.value)
    todoInput.value = '' 
    renderTodos()
})

function removeTodo(index){
    todos.splice(index, 1)
    renderTodos()
}