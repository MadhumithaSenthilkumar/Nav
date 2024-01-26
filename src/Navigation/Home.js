import React from 'react'
import Service from './Service'
import Reducer from '../Reducer'
import Callbacks from '../Callback'

export default function Home() {
  return (
    <div>
        <Service/>
        <Service/>
        <Reducer/>
        <Callbacks/>
    </div>
  )
}
