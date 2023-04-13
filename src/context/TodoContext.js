import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{

    
    const [message,setMessage] = useState("");
    const [user,setUser] = useState(null);

    //states for getting tasks
    const [allTasks,setAllTasks] = useState();
    const [latestTask,setLatestTask] = useState();
    const [recentTask,setRecentTask] = useState();

    const navigate = useNavigate();

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
                localStorage.setItem("user",JSON.stringify(currentUser));
                setUser ({
                    username : currentUser.username,
                    id : currentUser.id,
                    email : currentUser.email
                })
                setTimeout(()=>{
                    navigate("/task-list");

                },100)
                

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
                localStorage.setItem("user",JSON.stringify(checkUser[0]));
                setUser ({
                    username : checkUser[0].username,
                    id : checkUser[0].id,
                    email : checkUser[0].email
                })
                setTimeout(()=>{
                    navigate("/task-list");

                }, 300)
            }
            else{
                setMessage("Email/password mismatch");
            }
        }
        else{
            setMessage("Please try again");
        }
    }

    // craete task function async helps ki next func block na ho bcz of any reason
    //promise return anything in result
    const createTask = async(formData)=>{
        const obj = {
            method :"POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`http://localhost:5000/tasks`,obj);
        if(response.ok)
        {
            setMessage("Task created successfully");
        }
        else{
            setMessage("Something went wrong");
        }

    }

    //get tasks
    const getTasks = async()=>{
        const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`,{method:"GET"});
        if(response.ok){
            const tasks = await response.json();
            setAllTasks(tasks);
            const latest = tasks[tasks.length-1];
            setLatestTask(latest);
            const recent = tasks.slice(-3);
            setRecentTask(recent);
        }
    }

    useEffect(()=>{
        if(user != null){
            getTasks();
        }
        
    },[user])
    //dependencies me jb change hoga tb useEffect fir se chlega

    //useEffect for getting name 
    useEffect(()=>{
        const localUser = localStorage.getItem("user");
        const currentUser = JSON.parse(localUser);
        setUser(currentUser);
    },[])



    return(
        <TodoContext.Provider value ={{
            message,
            setMessage,
            registerUser,
            loginUser,
            user,
            setUser,
            createTask,
            allTasks,
            latestTask,
            recentTask
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext;