import React, {createContext, useState} from 'react'

const   themeContext = createContext();


const ThemeProvider = (props) => {
    const [darkMode, setDarkmode] = useState(true);
    const toggleDarkMode = () => {
        setDarkmode(!darkMode);
    };
    return(
        <themeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </themeContext.Provider>
    )
}
export {themeContext, ThemeProvider};