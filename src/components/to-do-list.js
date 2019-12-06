import React, {useState} from 'react';

function ToDoList() {
   const [tasks, setTasks] = useState([]);

  const title = "Esto es una todo list";
  const additem = function(){
    setTasks( previousTask => [...previousTask, 'TODO' + previousTask.length]);
  }

  return <div>
  <div>{title}</div>
    <button onClick={additem}>Add To Do</button>
    <div>
      <ol>
        {tasks.map(task => <li key={task}>{task}</li>)}
      </ol>
    </div>
    </div>
}

export default ToDoList;