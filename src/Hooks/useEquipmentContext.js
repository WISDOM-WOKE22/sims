import { useContext } from "react"
import { EquipmentContext } from "../Context/equipmentContext"

export const useEquipmentContext = () => {

    const context = useContext(EquipmentContext)

    if(!context){
        throw new Error('context must be used within the context provider')
    }

  return context
}
