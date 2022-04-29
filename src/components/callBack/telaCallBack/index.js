import React, {useState} from 'react'
import DadosCallBack from '../dadosCallBack'
import CustomerFormCallback from '../formsCallBack'

const TelaCallback = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubit = ({name, email}) => {
        setName(name)
        setEmail(email)
    }
    return (
        <div className='container-callback'>
            <p>Form CallBack</p>
            <DadosCallBack name={name} email={email}></DadosCallBack>
            <CustomerFormCallback onSubmit={handleSubit}></CustomerFormCallback>
        </div>
  )
}

export default TelaCallback