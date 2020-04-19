'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList  = document.querySelector('.todo-list '),
      todoCompleted = document.querySelector('.todo-completed');
      


const todoData = JSON.parse(localStorage.getItem('memory')) || []; 
         // localStorage.setItem('memory', JSON.stringify(todoData));

// let jsonToDoData = JSON.stringify(todoData);
//     localStorage.setItem('memory', jsonToDoData);


const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.value = localStorage.getItem('memory');
        li.innerHTML = '<span class="text-todo">' + item.value +  '</span>' + 
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' + 
                '<button class="todo-complete"></button>' + 
            '</div>';
        
       if(item.completed){
            todoCompleted.append(li);
        } else{
            todoList.append(li);
        }
        
        
        // item.value = localStorage.getItem('memory');
        // console.log(item);
           
        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
            localStorage.setItem('memory', JSON.stringify(todoData));
        });

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function(){
            li.remove();
            todoData.splice(li, 1);
            localStorage.setItem('memory', JSON.stringify(todoData));
            
            console.log(todoData);
        });
        
        });
       
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    if(newTodo.value !== ''){
    todoData.push(newTodo);
    
    }  
    localStorage.setItem('memory', JSON.stringify(todoData));
    // const todoData = localStorage.getItem('memory');
    // console.log(newTodo.value);
    headerInput.value = '';
    // let jsonToDoData = JSON.stringify(todoData);
    // console.log(jsonToDoData);
    // localStorage.setItem('memory', jsonToDoData);
    // todoData = JSON.parse(jsonToDoData);
   
    render();
});
// showText();
render();

  // todoData = localStorage.getItem('memory');
    // showText();
    // todoData.push(newTodo); 
