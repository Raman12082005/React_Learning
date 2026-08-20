import React, { createContext } from 'react'

// Creteing a Context
export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    const [theme, settheme] = useState('light')

  return (
    <div>
        <ThemeDataContext.Provider value={[theme, settheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
