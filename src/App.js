import React from 'react';
import './App.css';
import { Header, AddTaskForm, Task } from './components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AddTaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default App;
