import React, {createContext, useState} from 'react'

const   themeContext = createContext();


const ThemeProvider = (props) => {
    const [darkMode, setDarkmode] = useState(false);
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