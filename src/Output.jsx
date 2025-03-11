import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import School from './components/School'

function Output() {

  return (
    <>
      <div id="output">
        <Header />
        <School />
      </div>
    </>
  )
}

export default Output
