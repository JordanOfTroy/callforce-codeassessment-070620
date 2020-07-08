import React from 'react'
import '../styles/modal.css'

const Modal = () => {

    const handleChange = () => {
        console.log('you are handling the change well')
    }

    const closeModal = () => {
        console.log('you are closing the modal')
        document.getElementById('modalOverlay').style.display = 'none'
    }

    const handleClick = () => {
        console.log('you are handling the click well')
        closeModal()
    }


    return (
        <div className='modalOverlay centerMyStuff' id='modalOverlay'> 
            <div className='modalBody'>
               <div className='row p-2'>
                    <div className='col-12 d-flex justify-content-end'>
                        <i class="fal fa-times-hexagon"
                            onClick={closeModal}
                        ></i>
                    </div>
               </div>
               <div className='row'>
                    <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                        <div className='modalInputGroup p-2 mb-2'>
                            <p className='pb-1'>Please select Title</p>
                            <select className='modalInput'>
                                <option value='Doctor'>Doctor</option>
                                <option value='Assistant'>Assistant</option>
                                <option value='Hygienist'>Hygienist</option>
                            </select>
                        </div>
                        <div className='modalInputGroup p-2 mb-2 startTimeGroup'>
                            <p className='pb-1'>Please select Start Time</p>
                            <input className='modalInput'
                                type='datetime-local'
                                id='startInput'
                                name='startInput'
                                onChange={handleChange}
                                />
                        </div>
                        <div className='modalInputGroup p-2 mb-2 endTimeGroup'>
                            <p className='pb-1'>Please select End Time</p>
                            <input className='modalInput'
                                type='datetime-local'
                                id='endInput'
                                name='endInput'
                                onChange={handleChange}
                                />
                        </div>
                    </div>
               </div>
               <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-info mr-3 mt-2'
                            type='submit'
                            onClick={handleClick}
                        >Submit</button>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Modal