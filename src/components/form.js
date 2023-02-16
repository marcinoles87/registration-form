import React, { useState } from 'react'

export default function Form() {
    
    let [name,setName] = useState('')

const handleOnChange = (e) => {
        console.log(e.target.value)
        setName = (e) =>{
            name = e.target.value

        }
        }
    
  return (

    
    <div>
        <h1>Your Name</h1>
        <input type="text" onChange={handleOnChange}></input>
        {name}
    </div>
  )
}
