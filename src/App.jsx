import React, { useState } from "react";
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoContext from "./context/ToDoContext";

function App(){

    // Default to do items
    const [toDoItems, setToDoItems] = useState([{
                    title:"Complete online Java Script course",
                    isDone: true,
                    isFirst: true
                },
                {
                    title:"Jog around the park 3x",
                    isFirst: false,
                    isDone: false
                },
                {
                    title:"10 minutes meditation",
                    isFirst: false,
                    isDone: false
                },
                {
                    title:"Read for 1 hour",
                    isFirst: false,
                    isDone: false
                },
                {
                    title:"Pick up groceries",
                    isFirst: false,
                    isDone: false
                },
                {
                    title:"Complete To Do App on Frontend Mentor",
                    isFirst: false,
                    isDone: false
                }]);

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