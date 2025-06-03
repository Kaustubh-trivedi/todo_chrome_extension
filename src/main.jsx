import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TodoApp from './Todoapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
