import React from 'react'
import DadosRedux from '../dadosRedux'
import CustomerFormRedux from '../formRedux'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from '../redux/store'

const TelaRedux = () => {

 
 
    return (
    <div className='container-redux'>
        <Provider store={store}>
            <p>TelaRedux</p>
            <DadosRedux></DadosRedux>
            <CustomerFormRedux></CustomerFormRedux>
        </Provider>
    </div>
  )
}

export default TelaRedux