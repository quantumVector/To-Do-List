import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header, AddTaskForm, Task, Popup } from './components';

function App() {
  const tasksList = useSelector(({ tasks }) => tasks.tasksList);

  return (
    <div className="wrapper">
      <Header />
      <AddTaskForm />
      {tasksList.length > 0 &&
        tasksList.map((item) => <Task id={item.id} text={item.text} key={item.id} />)}
      <Popup />
    </div>
  );
}

export default App;
