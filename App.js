import * as React from 'react';
import  Nav from './Nav'
import {Provider} from 'react-redux'
import store from './src/app/store'

export default function Root(){
  return (
    <Provider store={store}>
        <Nav />
    </Provider>
  )
}