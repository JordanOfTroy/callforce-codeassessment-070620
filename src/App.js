import React from 'react';
import './App.css';
import CalendarBody from './Components/CalendarBody'
import Modal from './Components/Modal'

function App() {
  return (
    <div className="App container-fluid">
      <CalendarBody/>
      <Modal/>
    </div>
  );
}

export default App;
