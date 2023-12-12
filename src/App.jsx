import './App.css'

import React from 'react'
import { useState } from 'react'

function App() {

  const [clr, changeClr] = useState("#272727");



  return (
    <>
      <div className='outer' style={{background:clr}}>
      <h1>BG Changer</h1>
      <div className="nav-box">
          <ul>
            <button className='red' onClick={() => changeClr('red')}>Red</button>
            <button className='blue' onClick={() => changeClr('blue')}>Blue</button>
            <button className='yellow' onClick={() => changeClr('yellow')}>Yellow</button>
            <button className='green' onClick={() => changeClr('green')}>Green</button>
            <button className='brown' onClick={() => changeClr('brown')}>Brown</button>
            <button className='pink' onClick={() => changeClr('pink')}>Pink</button>
          </ul>
      </div>
      </div>
    </>
  )
}

export default App
