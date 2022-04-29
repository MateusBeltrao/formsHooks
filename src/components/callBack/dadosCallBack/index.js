import React from 'react'
import './styles.css'
const DadosCallBack = ({name, email}) => {
  return (
    <div className='container-callback'>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default DadosCallBack