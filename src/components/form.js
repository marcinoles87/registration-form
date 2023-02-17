import React, { useState } from 'react'
import './form.css'

export default function Form() {
    
    let [name,setName] = useState('')
    let [lastName,setLastName] = useState('')


    const fullName = `${name} ${lastName}` 
        
    
  return (

    
    <div>
        <h1>Your Name Form</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
        {fullName}
    </div>
  )
}
