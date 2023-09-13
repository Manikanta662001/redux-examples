import React from 'react'
import Cakes from './Cakes';
import Counter from './Counter';
import {Provider} from 'react-redux'
import store from './store';

export const All = () => {
  return (
    <div>
      <Provider store={store}> 
      <h1>REDUX-TOOLKIT</h1>
        <Counter/>
        <Cakes/>
      </Provider>

    </div>
  )
}