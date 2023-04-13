import React from 'react';
import { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TodoContext from '../context/TodoContext';

function Createtask(props) {

    const {latestTask,recentTask} = useContext(TodoContext);

    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 bg-primary d-flex flex-column align-items-center justify-content-center h-100'>
                  <TaskForm />  
                </div>
                <div className='col-lg-6 h-100 d-flex flex-column justify-content-center align-items-center'>
                <div className="card">
                    <div className="card-header d-flex">
                        <h5>New Task</h5>
                        <button className='btn btn-info ms-auto'>Edit</button>
                    </div>
                    <div className="card-body">
                        <h6>{latestTask?.title}</h6>
                        <p>{latestTask?.description}</p>
                    </div>
                    <div className="card-footer d-flex">
                        <p>Created On: 13/04/23</p>
                        <p className='ms-auto'> Due On : {latestTask?.dueDate} </p>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
}

export default Createtask;