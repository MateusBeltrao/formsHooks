import DadosContext from '../dadosContext'
import CustomerFormContext from '../formsContext'
import { CustomerProvaider } from '../customer'

const TelaContext = () => {

  

    return (
        <div className='container-context'>
            <p>Form Context</p>
            <CustomerProvaider>
                <DadosContext></DadosContext>
                <CustomerFormContext></CustomerFormContext>
            </CustomerProvaider>
        </div>
  )
}

export default TelaContext