import React, { useContext } from "react";
import ToDoContext from "../context/ToDoContext";

function CreateToDo(){

    const {toDoItems,setToDoItems, activeFilter, setActiveFilter, isLightTheme, setTheme} = useContext(ToDoContext);

    
    // Clears the input area and adds the new to do element to the list
     
    function handleSubmit(event){
        if (event.key === 'Enter'){
            const taskTitle = event.target.value;
            console.log(taskTitle);
            setToDoItems([...toDoItems, {title:taskTitle, isFirst: false}]);
            document.getElementById("create-to-do").value = "";
        }
    }
    
    // Color changes
    const themeStyle = {
        backgroundColor: isLightTheme ? "white" : "hsl(235, 24%, 19%)",
        color: isLightTheme ? "black" : "white"
    }

    return (
        <div style={themeStyle} className="create-to-do" >
            <div className="create-to-do-circle"></div>
            <div className="create-to-do-input"><input style={themeStyle} onKeyPress={handleSubmit} id="create-to-do" placeholder="Create a new to do..." type="text"></input></div>
        </div>
    )
}

export default CreateToDo;