import React, {useState, useEffect} from 'react';
import './App.css';
import moment from 'moment'
import CalendarBody from './Components/CalendarBody'
import Modal from './Components/Modal'

function App() {

const [stateObj, setStateObj] = useState({
    titles: ['Doctor', 'Assistant', 'Hygienist'],
    officeHours: {open: moment().set({'hour': 8, 'minute': 0}), close: moment().set({'hour': 17, 'minute': 0})}
})

// useEffect(() => {
//   const {officeHours} = stateObj
//   console.log(officeHours.open)
//   console.log(moment(officeHours.open).get('hour'))

// })

  return (
    <div className="App container-fluid">
      <CalendarBody
        titles = {stateObj.titles}
        officeHours = {stateObj.officeHours}
        setStateObj = {setStateObj}
      />
      <Modal
        titles = {stateObj.titles}
      />
    </div>
  );
}

export default App;
