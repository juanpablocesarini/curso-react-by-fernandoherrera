import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './FirstStepApp'
import { MyAwosomeApp } from './MyAwesomeApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepApp />
    <MyAwosomeApp />
  </StrictMode>,
)
