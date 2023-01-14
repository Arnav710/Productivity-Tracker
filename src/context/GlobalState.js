import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

import AppReducer from './AppReducer'

// Initial state
const initialState = {
    activities: []
}

// Create conxtext
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions - make call to reducer
    function deleteActivity(id){
        dispatch({
            type: 'DELETE_ACTIVITY',
            payload: id
        })
    }

    function addActivity(activity){
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: activity
        })
    }

    return (<GlobalContext.Provider value={{
        activities: state.activities, deleteActivity, addActivity
    }}>
        {children}
    </GlobalContext.Provider>)
}