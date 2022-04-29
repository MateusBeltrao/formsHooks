import React, { useState } from 'react'
import './styles.css';

const CustomerFormCallback = ({onSubmit}) => {

    const [name, setName] = useState('')
    const [email, setEmail] =useState('')
    
    const handleSubit =(e)=>{
        e.preventDefault()
        console.log({name, email})
        onSubmit({name, email})
    }


  return (
      <div>
        <form onSubmit={handleSubit} className='form'>
            <label htmlFor='name'>Nome</label>
            <input
                type="text" 
                name="name" 
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}>
            </input>

            <label htmlFor='email'>Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>
            </input>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default CustomerFormCallback