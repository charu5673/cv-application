import { useState } from 'react'
import './App.css'
import Section from './components/Section'

function Input() {
  return (
    <>
      <div id="input">
        <Section key={crypto.randomUUID()} title="General Information" inputs={[["Name","text",""],["Email","email",""],["Phone Number","number",""]]} ind={0}/>
        <Section key={crypto.randomUUID()} title="Educational Experience" inputs={[["School","text",""],["Course","text",""],["Year of Graduation","number",""]]} original={[["School","text",""],["Course","text",""],["Year of Graduation","number",""]]} ind={1}/>
        <Section key={crypto.randomUUID()} title="Practical Experience" inputs={[["Company Name","text",""],["Position Title","text",""],["Responsibilities","text",""],["Start Date","date",""],["End Date","date",""]]} original={[["Company Name","text",""],["Position Title","text",""],["Responsibilities","text",""],["Start Date","date",""],["End Date","date",""]]} ind={2}/>
      </div>
    </>
  )
}

export default Input
