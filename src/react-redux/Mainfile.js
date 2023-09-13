import React from 'react'
import {Provider} from 'react-redux'
import Store from './Store'
import { Counter } from './Counter'
export const Mainfile = () => {
  return (
    <div>
        <Provider store={Store}>
            <h1>REACT- REDUX</h1>
            <Counter/>
        </Provider>

    </div>
  )
}