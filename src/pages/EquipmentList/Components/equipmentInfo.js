import React from 'react'

export default function EquipmentInfo({ equipment, handeleShowData }) {
    // console.log(equipment[0])

    const { name, supplier, properties, func, weight, dimension, position, Position } = equipment[0]

  return (
    <div className='formInfo-container'>
    <div className='formInfo-wrapper'>
      <h3 onClick={() => handeleShowData()}>X</h3>
      <h2>Equipment Infomation</h2>
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
          <span>{Position} meters {position} ship mid-point</span>
      </div>
      {/* <div className='G-button'>
          <button onClick={() => confirmButton()} >Confirm</button>
      </div> */}
    </div>
  </div>
  )
}
