import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import './styles.css';

const CustomerFormRedux = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({
            name: name,
            email: email
           
        }))
        console.log({name, email})
    }

  return (
    <div>
        <form className='form' onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor='name'>Nome</label>
            <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}>
            </input>

            <label htmlFor='email'></label>
            <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>    
            </input>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default CustomerFormRedux