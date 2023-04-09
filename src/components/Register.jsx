import React from 'react';

function Register(props) {

    const [formData, setFormData]= useState(null);
    const [message,setMessage] = useState("");

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit=async(e)=>{
        const obj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        e.preventDefault();
        // api call
        
        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method:"GET"});
        const user = await checkUser.json();
        if(user.length > 0){
            setMessage("user already exist");
        }
        else{
            const response = await fetch(`http://localhost:5000/users`, obj);

            if(response.ok){
                setMessage("User Regsitered");
            }else{
                setMessage("something went wrong");
            }
        }
        
        
    }


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