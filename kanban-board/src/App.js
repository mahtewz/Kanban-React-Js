import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });

  const handleAddTask = () => {
    const taskName = prompt('Digite o nome da tarefa:');
    if (taskName) {
      setTasks({
        ...tasks,
        todo: [...tasks.todo, taskName]
      });
    }
  };

  const handleMoveTask = (sourceList, targetList, taskIndex) => {
    const taskToMove = tasks[sourceList][taskIndex];
    const updatedSourceList = tasks[sourceList].filter((_, index) => index !== taskIndex);
    setTasks({
      ...tasks,
      [sourceList]: updatedSourceList,
      [targetList]: [...tasks[targetList], taskToMove]
    });
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="board">
        <div className="column">
          <h2>To Do</h2>
          <ul>
            {tasks.todo.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleMoveTask('todo', 'inProgress', index)}>Move para Em Progresso</button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
        <div className="column">
          <h2>Em Progresso</h2>
          <ul>
            {tasks.inProgress.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleMoveTask('inProgress', 'done', index)}>Concluir Tarefa</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Concluído</h2>
          <ul>
            {tasks.done.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
