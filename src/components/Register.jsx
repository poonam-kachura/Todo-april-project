import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import  TodoContext from "../context/TodoContext";

function Register(props) {

    const {message,registerUser,setMessage} = useContext(TodoContext);

    const [formData, setFormData]= useState(null);
    

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }
// no need  of async (e)
    const onSubmit=(e)=>{
        e.preventDefault();
        registerUser(formData);
        
        
        
    }

    useEffect(()=>{
        setMessage("")
    },[])


    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type="text" name='username' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="text" name='email' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange}/>
            </div>
            <p>{message}</p>
            <button className='btn btn-primary' onClick={onSubmit}>Register</button>
        </form>
    );
}

export default Register;