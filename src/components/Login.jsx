import React, { useState } from 'react';

function Login(props) {

    const [formData,setFormdata] = useState(null);
    const [message,setMessage] = useState("");

    const handleInput = (e)=> {
        const {name,value} = e.target;
        setFormdata ((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(` http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,{method:"GET"});
        if(response.ok)
        {
            const checkUser = await response.json();
            if(checkUser.length > 0)
            {
                setMessage("Logged in successfully");
            }
            else{
                setMessage("Email/password mismatch");
            }
        }
        else{
            setMessage("Please try again");
        }
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