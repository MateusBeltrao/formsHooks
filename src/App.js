import TelaCallback from './components/callBack/telaCallBack';
import TelaContext from './components/context/telaContext';
import TelaRedux from './components/redux/telaRedux';
import './App.css';

const App = () => {

  return (
    
    <div className='app'>
      <TelaContext></TelaContext>
      <TelaRedux> </TelaRedux>
      <TelaCallback></TelaCallback>
    </div>
    
  )
}

export default App