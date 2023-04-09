import { createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = (children) =>{
    return(
        <TodoContext.Provider value ={{}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext;