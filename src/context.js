import React, {useState, useContext, useEffect, } from "react";

import Projects from "./project-data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

   const [projects, setProjects] = useState([]);

    useEffect(()=>{
       setProjects(Projects);
    },[]);

    return (
        <AppContext.Provider value={{
            projects,
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

