const todoText = document.querySelector('#new_todo'),
Addtodo = document.querySelector('#add-todo')

Addtodo.addEventListener('click', ()=>{

    if(todoText.value !== ''){
        console.log('true');
        const newTodo = document.createElement('li')
        newTodo.innerHTML =  todoText.value
        document.querySelector('#todo_list').appendChild(newTodo)
        todoText.value = ''

    }
})