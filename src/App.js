import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header, Form, Task, Popup } from './components';

function App() {
  const tasksList = useSelector(({ tasks }) => tasks.tasksList);

  return (
    <div className="wrapper">
      <Header />
      <Form />
      {tasksList.length > 0 &&
        tasksList.map((item) => <Task
          id={item.id}
          text={item.text}
          date={item.date}
          key={item.id} />)}
      <Popup />
    </div>
  );
}

export default App;
