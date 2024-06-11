import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(['Task_1', 'Task_2', 'Task_3', 'Task_4', 'Task_5'])
  const [content, setContent] = useState(['Content_1', 'Content_2', 'Content_3'])

  return (
    <div className="App">
      {task.map((title, index) => (
        <li >{title}  {index}</li>
      ))} 
    </div>
  );
}

export default App;
