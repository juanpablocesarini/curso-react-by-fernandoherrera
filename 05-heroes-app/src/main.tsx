import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <h1>HereoApp</h1>
  <Button>SOY UN BOTÓN!!</Button>
  </StrictMode>,
)
