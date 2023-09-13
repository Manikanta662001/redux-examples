import './App.css';
import Withoutjsx from './Withoutjsx';
import { Mainfile } from './react-redux/Mainfile';
import { All } from './redux-toolkit/All';


import {useDispatch,useSelector} from 'react-redux'

import { takeGetUserFetchAction } from './redux-saga/ActionCreators';

function App() {

  const dispatch = useDispatch()
  const retreiveddata = useSelector((state)=>state.myReducer)
  console.log(retreiveddata,"retreiveddata")



  return (
    <div className="App">

      
      <Mainfile/>
       <All/>
      <Withoutjsx/>

      <h1>USERS</h1>
      <h2>REDUX SAGA</h2>
      <button onClick={()=>dispatch(takeGetUserFetchAction())}>Get Users </button>
      <hr/>
      <div>
        {
          retreiveddata?.users && retreiveddata.users.map((user)=>{
            return <div key={user.id}>{user.name}</div>
          })
        }
        {
          retreiveddata?.error && <p>{retreiveddata.error.message}</p>
        }
      </div>
      
    </div>
  );
}

export default App;
