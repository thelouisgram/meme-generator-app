import React, { useState } from 'react'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomMeme: 'https://i.imgflip.com/1e7ql7.jpg'
  })

  const [allMemes, setAllMemes] = useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes?username=thelouisgram%3E&password=thelouisgram")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomMeme = allMemes;
    let newMeme = randomMeme[Math.floor(Math.random() * randomMeme.length)];
    const url = newMeme.url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomMeme: url
    }))
  }

  function handleText(event) {
    const { name, value } = event.target
    setMeme(prevText => {
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  return (
    <div className='meme--section'>
      <div className='form'>
        <input type='text' name='topText' onChange={handleText} value={meme.topText} placeholder='Top text' />
        <input type='text' name='bottomText' onChange={handleText} value={meme.bottomText} placeholder='Bottom text' />
      </div>
      <button onClick={getMemeImage}> Get a new meme image <img src="https://img.icons8.com/emoji/48/null/framed-picture.png" alt='pic' className='frame' /> </button>
      <div className='meme--div'>
        <h1 className='meme--text top' >
          {meme.topText}</h1>
        <img src={meme.randomMeme} alt='meme' className='meme--img' />
        <h1 className='meme--text bottom' >
          {meme.bottomText}</h1>
      </div>
    </div>
  )
}
