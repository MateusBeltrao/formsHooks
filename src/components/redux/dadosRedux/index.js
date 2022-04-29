import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'


const DadosRedux = () => {
const {name, email} = useSelector(state => state.user.user)
 
  return (
    <div className='container-redux'>
       <p>{name}</p>
       <p>{email}</p>
    </div>
  )
}

export default DadosRedux