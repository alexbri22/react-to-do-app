import { createContext, React } from "react";

const ToDoContext = createContext({
        toDoItems: [],
        setToDoItems: () => {},
        activeFilter: "",
        setActiveFilter: () => {},
        isLightTheme: true,
        setTheme: () => {}
});

export default ToDoContext;