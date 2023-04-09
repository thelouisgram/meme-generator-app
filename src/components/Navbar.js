import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className='right'>
      <img alt='logo' src='./images/troll-face.png' className='troll-face' />
      <h1>Meme Generator</h1>
      </div>

      <div className='left'>
        <h4>React Course - Project 3</h4>
      </div>
    </nav>
  )
}
