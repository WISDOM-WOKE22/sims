import { useState } from "react"
import { useEquipmentContext } from "../../Hooks/useEquipmentContext"
import EquipmentInfo from "./Components/equipmentInfo"
import './equipmentList.css'

export default function EquipmentList() {
    const { equipment } = useEquipmentContext()
    const [data, setData ] = useState() 
    const [ fullData, setFullData ] = useState(false)
    // console.log(equipment)

    const handeleShowData = () => {
      fullData ? setFullData(false): setFullData(true)
    }

    const handleClick = (equipment) => {
      setData(equipment)
      handeleShowData()
    }

  return (
    <div className='equipment-list-container'>
      <div className='equipment-list-wrapper'>
            <h3>Equipment Table</h3>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Supplier</th>
                    <th>Weight</th>
                </thead>
                <tbody>
                  {equipment.map((equipment) => 
                    <tr key={equipment.name} 
                     onClick={() => handleClick(equipment)}
                    >
                        <td>{equipment.name}</td>
                        <td>{equipment.supplier}</td>
                        <td>{equipment.weight}</td>
                    </tr>
                  )}
                </tbody>
            </table>
      </div>
      { fullData && <EquipmentInfo equipment={equipment} handeleShowData={handeleShowData}/> }
    </div>
  )
}
