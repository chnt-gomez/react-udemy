import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLight } from './useState/TrafficLight';
import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect';
import { PokemonPage } from './examples/PokemonPage';
import { FocusScreen } from './useRef/focusScreen';
import { TasksApp } from './useReducer/TaskApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksApp />
  </StrictMode>,
);


