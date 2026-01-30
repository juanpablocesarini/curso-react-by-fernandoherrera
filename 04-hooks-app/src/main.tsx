import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { TasksApp } from './05-useReducer/TaskApp'
//mport { FocusScreen } from './04-useRef/FocusScreen'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { HookApp } from './HookApp';
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import "./index.css";
import { MemoHook } from "./06-memos/MemoHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* < HookApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    <MemoHook />
  </StrictMode>,
);
