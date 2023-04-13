import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import TodoContext from '../context/TodoContext';

function TaskForm(props) {

    const [formData,setFormData] = useState();

    const {message,setMessage,createTask,user} = useContext(TodoContext);

// prev store previous state like title:afs
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] :value,
            UserId :user?.id
        }))
    }

    useEffect(()=>{
        setMessage("");
    },[])

    const onCreateTask = (e)=>{
        e.preventDefault();
        createTask(formData);
    }

    return (
        <div className='p-3 w-75'>
            <h4 className='text-white'>Create Task</h4>
            <div className='card bg-white'>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className='form-label'>Title</label>
                            <input type="text" name="title" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Description</label>
                           <textarea className='form-control' rows="5" name="description" onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Due date</label>
                            <input type="datetime-local" name="dueDate" className="form-control" onChange={handleChange}/>
                        </div>
                        <p>{message}</p>
                        <button className='btn btn-primary' onClick={onCreateTask}>Create Task</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default TaskForm;