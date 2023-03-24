import { useState, useEffect } from 'react'
// import './App.css'
import './Card.css'

function App() {
  const [quote, setQuote] = useState("")
  const API_URL = 'https://api.quotable.io/random'

  useEffect(() => {
    let data1 = async () => {
      let res = await fetch(API_URL)
      let data = await res.json()
      // console.log(data);
      setQuote(data);
      console.log(quote);
    }
    data1();

  }, [])

  const fecthData = async () => {
    let res = await fetch(API_URL)
    let data = await res.json()
    setQuote(data);
  }
  return (
    <div className='App'>
      <div className="quote">
        <h2>{quote.author}</h2>
        <p>{quote.content}</p>
        <button className="btn" onClick={fecthData}>New Quote</button>
      </div>
    </div>
  )
}

export default App
