import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/todo/TodoApp'
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css'

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
