import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function Login(props) {

    const {message,loginUser} = useContext(TodoContext);

    const [formData,setFormdata] = useState(null);
    

    const handleInput = (e)=> {
        const {name,value} = e.target;
        setFormdata ((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        loginUser(formData);
    }

    return (
        <form>
            <div className="mb-3">
                <label className='form-control'>Email</label>
                <input type="text" name="email" className="form-control" onChange={handleInput} />
            </div>
            <div className="mb-3">
                <label className='form-control'>Password</label>
                <input type="password" name="password" className="form-control" onChange={handleInput} />
            </div>
            <p>{message}</p>
            <button className='btn btn-secondary' onClick ={onSubmit}>Login</button>
        </form>
    );
}

export default Login;