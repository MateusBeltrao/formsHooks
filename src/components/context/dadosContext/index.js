import React, {useContext} from 'react'
import { CustomerContext } from '../customer'
import './styles.css'

const DadosContext = () => {

  const {name, email} = useContext(CustomerContext)
  
  return (
    <div className='container-context'>
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default DadosContext