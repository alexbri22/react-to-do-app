import React, {useContext} from "react";
import Task from './Task';
import GroupFilter from './GroupFilter';
import ToDoContext from "../context/ToDoContext";



function ToDoList(){

    const {toDoItems, setToDoItems, activeFilter} = useContext(ToDoContext);

    // Creates a to do item with the given data
    function displayTask(task, id){
        return (
            <Task
                title={task.title}
                id={id}
                isDone={task.isDone}
                key={id}
            />);
    }

    // Removes unnecesary tasks
    const filteredTasks = toDoItems.filter((task) =>{
        if (activeFilter === "all"){
            return true;
        }
        const isValid = (activeFilter == "active" && !task.isDone) || (activeFilter === "completed" && task.isDone);
        return isValid;
    })

    return (
        <div className="to-do-list">
            <div className="list-items">
                {filteredTasks.map(displayTask)}
                <GroupFilter />
            </div>
        </div>
    )
}

export default ToDoList;