import React from "react";
import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

function HeaderBar(props){
    
    return (
        <div className="header-bar">
            <div className="logo">Todo</div>
            <div onClick={props.toggleTheme} className="theme-icon pointer" style={{backgroundImage: `url(${props.isLightTheme ? moonIcon : sunIcon})`}}></div>
        </div>
    )
}

export default HeaderBar;