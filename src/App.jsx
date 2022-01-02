import React, { useState } from "react";
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoContext from "./context/ToDoContext";

function App(){

    // Default to do items
    const [toDoItems, setToDoItems] = useState([{
                    title:"Insultar al mario",
                    isDone: true,
                    isFirst: true
                },
                {
                    title:"Asistir al Training Camp",
                    isFirst: false,
                    isDone: false
                },
                {
                    title:"Ponerse una pedota",
                    isFirst: false,
                    isDone: false
                },]);

    // App context elements
    const [activeFilter, setActiveFilter] = useState("all");
    const [isLightTheme, setTheme] = useState(true); 
    const value = {toDoItems,setToDoItems,activeFilter,setActiveFilter, isLightTheme, setTheme};
    
    document.body.style = "background: " +  (isLightTheme ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)");

    return (
        <div>
            <ToDoContext.Provider value={value}>
                <Header />
                <ToDoList />
            </ToDoContext.Provider>
        </div>
    )
}

export default App;