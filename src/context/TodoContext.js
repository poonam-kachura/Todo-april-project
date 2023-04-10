import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    
    const [message,setMessage] = useState("");
    const [user,setUser] = useState(null);

    //register user

    const registerUser =async(formData) => {
        const obj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        // prevents the default behaviour of an event
       
        // api call
        
        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method:"GET"});
        const user = await checkUser.json();
        if(user.length > 0){
            setMessage("user already exist");

        }
        else{
            const response = await fetch(`http://localhost:5000/users`, obj);
            const currentUser = await response.json();

            if(response.ok){
                setMessage("User Regsitered");
                localStorage.setItem("user",JSON.stringify(currentUser))

            }else{
                setMessage("something went wrong");
            }
        }
    }

    //login user
    const loginUser = async(formData)=> {
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



    return(
        <TodoContext.Provider value ={{
            message,
            registerUser,
            loginUser
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext;