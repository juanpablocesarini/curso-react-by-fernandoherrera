import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PokemonPage } from './03-examples/PokemonPage'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
/* import { HookApp } from './HookApp'; */
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* < HookApp/> */}
   {/* <TrafficLight/> */}
   {/* <TrafficLightWithEffect/> */}
   {/* <TrafficLightWithHook/> */}
   <PokemonPage/>
  </StrictMode>,
)
