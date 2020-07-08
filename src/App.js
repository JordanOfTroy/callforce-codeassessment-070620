import React, {useState} from 'react';
import './App.css';
import CalendarBody from './Components/CalendarBody'
import Modal from './Components/Modal'

function App() {

const [stateObj, setStateObj] = useState({
    titles: ['Doctor', 'Assistant', 'Hygienist']
})

  return (
    <div className="App container-fluid">
      <CalendarBody
        titles = {stateObj.titles}
      />
      <Modal
        titles = {stateObj.titles}
      />
    </div>
  );
}

export default App;
