import {React, useContext} from "react";
import HeaderBar from './HeaderBar';
import CreateToDo from "./CreateToDo";
import DesktopLightBackground from '../images/bg-desktop-light.jpg';
import DesktopDarkBackground from '../images/bg-desktop-dark.jpg';
import MobileLightBackground from '../images/bg-mobile-light.jpg';
import MobileDarkBackground from '../images/bg-mobile-dark.jpg';
import ToDoContext from "../context/ToDoContext";
function Header(){

    const{toDoItems,setToDoItems,activeFilter,setActiveFilter,isLightTheme, setTheme} = useContext(ToDoContext);

    function toggleTheme(){
        setTheme(!isLightTheme);
    }


    const backgroundStyle = {
        backgroundImage: `url(${isLightTheme ? DesktopLightBackground : DesktopDarkBackground})`,
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover"
    }
    
    return (
        <div style={backgroundStyle} className="header">
            <HeaderBar isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
            <CreateToDo />
        </div>
    )
}

export default Header;