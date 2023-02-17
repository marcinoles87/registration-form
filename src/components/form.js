import React, { useState } from 'react'
import './form.css'

export default function Form() {
    
    let [name,setName] = useState('')
    let [lastName,setLastName] = useState('')


    const fullName = `${name} ${lastName}` 
        
    
  return (

    
    <div>
        <h1>Your Name Form</h1>
        <p>Name</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <p>Last Name</p>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
        {fullName}
    </div>
  )
}
