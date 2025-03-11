import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import School from './components/School'
import Company from './components/Company'

function Output() {

  return (
    <>
      <div id="output">
        <Header />
        <School />
        <Company />
      </div>
    </>
  )
}

export default Output
