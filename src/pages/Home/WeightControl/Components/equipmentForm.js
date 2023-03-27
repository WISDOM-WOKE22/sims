import './equipmentform.css'
import { useState } from 'react'
import FormInfo from './formInfo'

export default function EquipmentForm() {
  
  const [ name, setName ] = useState('')
  const [ nameError, setNameError ] = useState('')
  const [ supplier, setSupplier ] = useState('')
  const [ supplierError, setSupplierError ] = useState('')
  const [ properties, setProperties ] = useState('')
  const [ propertiesError, setPropertiesError ] = useState('')
  const [ dimension, setDimension ] = useState('')
  const [ dimensionError, setDimensionError ] = useState('')
  const [ func, setFunc ] = useState('')
  const [ funcError, setFuncError ] = useState('')
  const [ showFormInfo, setShowFormInfo ] = useState(false)
  const [ position, setPosition ] = useState('')

  
  const removeForm = () => {
    showFormInfo ? setShowFormInfo(false): setShowFormInfo(true)
  }
  function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handeleSubmit = (e) => {
    e.preventDefault()
    setNameError('')
    setSupplierError('')
    setPropertiesError('')
    setDimensionError('')
    setFuncError('')
    if(!name){
      setNameError('provide equipment name')
    }
    if(!supplier){
      setSupplierError('provide equipment supplier name')
    }
    if(!properties){
      setPropertiesError('provide equipment properties')
    } 
    if(!dimension){
      setDimensionError('please provide equipment dimension')
    } 
    if(!func){
      setFuncError('please state equipment function')
    }
     if(name && supplier && properties && dimension && func) {
      setPosition(choice(['away from', 'from']));
       removeForm()
     } 
  }

  return (
    <>
    <div className='equipment-main-container'>
    <div className='equipmet-form-container'>
      <h3>Equipment Infomation</h3>
      <form 
      onSubmit={(e) => handeleSubmit(e) }
      className='form-container'>
        <label>
            <span>Name</span>
            <input
             type='text'
             placeholder='Enter Equipment Name'
             onChange={(e) => setName(e.target.value)}
             value={name}/> 
             {nameError && <div className='error'>{nameError}</div>}
        </label>
        <label>
            <span>Supplier</span>
            <input
             type='text'
             placeholder='Enter Supplier Name'
             onChange={(e) => setSupplier(e.target.value)}
             value={supplier}/> 
             {supplierError && <div className='error'>{supplierError}</div>}
        </label>
        <label>
            <span>Properties</span>
            <input
             type='text'
             placeholder='Enter Equipment Properties'
             onChange={(e) => setProperties(e.target.value)}
             value={properties}/> 
            {propertiesError && <div className='error'>{propertiesError}</div>}
              
        </label>
        <label>
            <span>Dimension</span>
            <input
             type='text'
             placeholder='Enter Equipment dimension'
             onChange={(e) => setDimension(e.target.value)}
             value={dimension}/> 
             {dimensionError && <div className='error'>{dimensionError}</div>}
        </label>
        <label>
            <span>Function</span>
            <input
             type='text'
             placeholder='Enter Equipment dimension'
             onChange={(e) => setFunc(e.target.value)}
             value={func}/> 
             {funcError && <div className='error'>{funcError}</div>}
        </label>
        <div className='form-button'>
          <button>Submit Form</button>
        </div>
      </form>
    </div>
    </div>
    {showFormInfo && <FormInfo Form={removeForm} name={name} supplier={supplier} properties={properties} dimension={dimension} func={func} position={position}/>}
    </>
  )
}
