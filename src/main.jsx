import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Input from './Input.jsx'
import Output from './Output.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input />
    <Output />
  </StrictMode>,
)
