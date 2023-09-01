import { useEffect, useState } from 'react'
import './App.css'
import data from './assets/quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
// import {FaXTwitter} from "react-icons/fa"

const getRandomQuote = () =>{ 
  const quotes = data.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
}
const getColor = () =>{
  const red =Math.floor(Math.random() * 64);
  const green =Math.floor(Math.random() * 64)
  const blue =Math.floor(Math.random() * 64);
  return ('rgb('+red+', '+green+', '+blue+')')
}
function App() {
  const [quote,setQuote] = useState(getRandomQuote)
  const [color,setColor] = useState(getColor)

  const handleClick =() => {
    setQuote(getRandomQuote())
    setColor(getColor())
    
  }
  return (
    <div className="window"style={{backgroundColor:color}}>
    <div id="quote-box"  >
      <div className="quote-content"style={{color:color}}>
        <div id="text" className='actualQuote'>"{quote.quote}"</div>
        <div id="author"className='actualAuthor'>-{quote.author}</div>
      </div>

      <div className='butons'>

      <a href='twitter.com/intent/tweet'  id="tweet-quote"style={{backgroundColor:color}}>
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <button id="new-quote" onClick={handleClick} style={{backgroundColor:color}}>new quote</button>
      </div>

    </div>
    </div>
  )
}

export default App