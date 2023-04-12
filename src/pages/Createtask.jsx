import React from 'react';
import TaskForm from '../components/TaskForm';

function Createtask(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 bg-primary d-flex flex-column align-items-center justify-content-center h-100'>
                  <TaskForm />  
                </div>
                <div className='col-lg-6 h-100 d-flex flex-column justify-content-center align-items-center'>
                    
                </div>
            </div>
        </div>
    );
}

export default Createtask;