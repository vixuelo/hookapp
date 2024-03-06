import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,
  } from "react-router-dom";
import { Memorize } from './memos/Memorize'
import { MemoHook } from './memos/MemoHook'
import { CallBackHook } from './memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
/* import { HookApps } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHooks } from './useState/CounterWithCustomHooks'
import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHooks } from './useEffect/FormWithCustomHooks'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Layout } from './useLayoutEffect/Layout' */

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
    <MainApp/>
</BrowserRouter>
    )
