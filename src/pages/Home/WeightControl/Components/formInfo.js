import { useEquipmentContext } from '../../../../Hooks/useEquipmentContext'
import { useState } from 'react'
import './formInfo.css'

export default function FormInfo({ Form, name, supplier, properties, dimension, func, position }) {
    const { equipment,dispatch } = useEquipmentContext()
    const [ weight, setWeight ] = useState(Math.floor(Math.random()*1000))
    const [ Position, setPosition ] = useState(Math.floor(Math.random()*1000))

    const confirmButton = async() => {
        try{
           const data = [
                ...equipment,
                {
                    name, 
                    dimension,
                    supplier,
                    properties,
                    func,
                    position,
                    weight,
                    Position
                }
            ]
               dispatch({ type:'ADD_EQUIPMENT', payload:data})
               Form()
        } catch(error) {
            console.log(error)
        }
    }

    console.log({
        name, 
        dimension,
        supplier,
        properties,
        func,
        position
       })

  return (
    <div className='formInfo-container'>
      <div className='formInfo-wrapper'>
        <h3 onClick={() => Form()}>X</h3>
        <h2>Confirm Specifications</h2>
        <div className='info'>
            <h4>Name</h4>
            <span>{name}</span>
        </div>
        <div className='info'>
            <h4>Supplier</h4>
            <span>{supplier}</span>
        </div>
        <div className='info'>
            <h4>properties</h4>
            <span>{properties}</span>
        </div>
        <div className='info'>
            <h4>Dimension</h4>
            <span>{dimension}</span>
        </div>
        <div className='info'>
            <h4>Funtion</h4>
            <span>{func}</span>
        </div>
        <div className='info'>
            <h4>Weight</h4>
            <span>{weight}kg</span>
        </div>
        <div className='info'>
            <h4>Location on Deck</h4>
            <span>{Math.floor(Math.random()*1000)} meters {position} ship mid-point</span>
        </div>
        <div className='G-button'>
            <button onClick={() => confirmButton()} >Confirm</button>
        </div>
      </div>
    </div>
  )
}
