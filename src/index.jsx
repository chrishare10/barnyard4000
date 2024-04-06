import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Leva } from 'leva'
import { useRef, useState } from 'react'


function Overlay() {
    
    
  return (
    <>
    <App />
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%',  zIndex: '10' }}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '25px'}}>
        <div style={{ fontSize: '13px', color: 'white', fontFamily: '"Cousine", monospace' }}>
          <span style={{ fontWeight: 'bold' }}>barnyard4000</span>
          <br />
          117 central blvd
          <br />
          may 24th, 2024
          <br />
          8pm-1am
          
        </div>
        <audio src="./I Could (Look Inside Mix).m4a" controls />
      </div>
    </div>
    </>
   
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
    
    <Leva />
  </>
)
