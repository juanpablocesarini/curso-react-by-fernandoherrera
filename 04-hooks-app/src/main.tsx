import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import { HookApp } from './HookApp'; */
import './index.css'
import { TrafficLight } from './01-useState/TrafficLight'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* < HookApp/> */}
   <TrafficLight/>
  </StrictMode>,
)
