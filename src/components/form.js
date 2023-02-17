import React, { useState } from 'react'

export default function Form() {
    
    let [name,setName] = useState('')


    const fullName = `${name}`
        
    
  return (

    
    <div>
        <h1>Your Name</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        {fullName}
    </div>
  )
}
