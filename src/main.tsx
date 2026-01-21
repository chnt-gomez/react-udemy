import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';
import './index.css'
import { ProfessionalApp } from './useContext/ProfessionalApp';
//import { TrafficLight } from './useState/TrafficLight';
//import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect';
//import { PokemonPage } from './examples/PokemonPage';
//import { FocusScreen } from './useRef/focusScreen';
//import { TasksApp } from './useReducer/TaskApp';
//import { MemoHook } from './memos/MemoHook';
//import { MemoCounter } from './memos/MemoCounter';
//import { ScrambleWords } from './useReducer/ScrambleWords';
//import { InstagromApp } from './optimistic/InstagromApp';
//import { ClientInformation } from './use_suspense/ClientInformation';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors/>
    <Suspense fallback={<h1>Cargando...</h1>}>
      <ProfessionalApp />
    </Suspense>
    
  </StrictMode>,
);


