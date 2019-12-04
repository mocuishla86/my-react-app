import React from 'react';

function ToDoList() {

  const tasks = [];
  const title = "Esto es una todo list";

  return <div>
  <div>{title}</div>
    <button>Add To Do</button>
    <div>
      <ol>
        {tasks.map(task => <li key={task}>{task}</li>)}
      </ol>
    </div>
    </div>
}

export default ToDoList;