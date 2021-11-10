import React from 'react';
import './App.css';
import { Header, AddTaskForm, Task, Popup } from './components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AddTaskForm />
      <Task />
      <Task />
      <Task />
      <Popup />
    </div>
  );
}

export default App;
