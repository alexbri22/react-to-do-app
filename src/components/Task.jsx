import React, { useContext } from "react";
import crossIcon from '../images/icon-cross.svg';
import checkIcon from '../images/icon-check.svg';
import ToDoContext from "../context/ToDoContext";
function Task(props){

    const {title, id, isDone} = props;
    const {toDoItems, setToDoItems, activeFilter, setActiveFilter, isLightTheme, setTheme} = useContext(ToDoContext);

    let isFirst = props.id == 0;

    function removeTask(){
        setToDoItems(toDoItems.filter((val) => (val.title !== title)));
    }   

    function toggleTask(){

        const newTasks = [...toDoItems];

        let toggledTaskIndex = newTasks.findIndex(task => task.title === title);
        newTasks[toggledTaskIndex].isDone = !isDone;
        
        setToDoItems(newTasks);
    }

    const themeStyle = {
        backgroundColor: isLightTheme ? "white" : "hsl(235, 24%, 19%)",
        color: isLightTheme ? "black" : "white"
    }

    return (
        
        <div style={{borderRadius: isFirst ? "8px 8px 0 0" : "0"}, themeStyle} className="task">
            <div onClick={toggleTask} className={"create-to-do-circle pointer" + (isDone ? " done-circle" : "")}>
                {isDone ? <svg stroke="currentColor" fill="currentColor"  style={{backgroundImage:`url(${checkIcon})`}} className="check-icon"></svg> : null}
            </div>
            <div className="task-elements">
                <div className={"task-title pointer" + (isDone ? " done-task-title" : "") } onClick={toggleTask}>{title}</div>
                <div onClick={removeTask} className="cross-icon pointer" style={{backgroundImage: `url(${crossIcon})`}}></div>
            </div>
            
        </div>
    );
}

export default Task;