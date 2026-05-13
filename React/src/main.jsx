import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Prent } from './Task3/Parent'
// import { Home } from './Task2/Components/Home'

// import { Task2 } from './Task2/Task2'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Task2/> */}
   {/* <Home/> */}
   <Prent/>
  </StrictMode>,
)
