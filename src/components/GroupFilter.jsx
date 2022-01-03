import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

function GroupFilter(){

    const {toDoItems, setToDoItems, activeFilter, setActiveFilter, isLightTheme, setTheme} = useContext(ToDoContext);
    const itemCount = toDoItems.filter(task => !task.isDone).length;

    // Handles item deletion
    function removeCompleted(){
        setToDoItems(toDoItems.filter(task => !task.isDone));
    }



    return (
        <div>
        <div style={{backgroundColor: isLightTheme ? "white" : "hsl(235, 24%, 19%)"}} className="filter-container">
            <div className="filter-left-items">{itemCount} items left</div>
            <div onClick={removeCompleted} className="filter-right-items pointer">Clear completed</div>
        </div>
        <div style={{backgroundColor: isLightTheme ? "white" : "hsl(235, 24%, 19%)"}}  className="filter-groups">
                <div onClick={()=> setActiveFilter("all")} className={"pointer filter all" + (activeFilter === "all" ? " active-filter" : "")}>All</div>
                <div onClick={()=> setActiveFilter("active")} className={"pointer filter active" + (activeFilter === "active" ? " active-filter" : "")}>Active</div>
                <div onClick={()=> setActiveFilter("completed")} className={"pointer filter completed" + (activeFilter === "completed" ? " active-filter" : "")}>Completed</div>
        </div>
        </div>
        
    );
}

export default GroupFilter;