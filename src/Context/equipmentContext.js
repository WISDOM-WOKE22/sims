import { createContext, useReducer } from "react";

export const EquipmentContext = createContext([]);

export const equipmentReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EQUIPMENT':
            return{ ...state, equipment: action.payload };
        default: 
            return state;
    }
}

export const EquipmentContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( equipmentReducer , {
        equipment: []
    });
    console.log('equipmentContex:', state)

    return(
        <EquipmentContext.Provider value={{ ...state, dispatch }}>
            { children }
        </EquipmentContext.Provider>
    )

}


