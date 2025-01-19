import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Function to set the --vh property
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();

window.addEventListener('resize', setVh);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
