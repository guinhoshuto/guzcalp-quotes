import React, { useState } from 'react';
import Quote from './components/Quote'
import axios from 'axios'
import './App.css';

export interface resultDto{
  quoteNumber: number;
  quote: string;
}

function App() { 
  // const query = '';
  const [result, setResult] = useState<resultDto[]>([])

  async function handleOnChange(q: string){ 
    const response = await axios.get('https://api.feras.club/quotes/search/' + q)
    console.log(response.data)
    setResult(response.data)
  }
  
  // useEffect(() => {

  // }, [query])

  return (
    <div className="App">
      <h1 className="font-bold">QUOTES</h1>
      <input 
        className="border-transparent focus-visible:outline-none focus:ring-0 focus:border-transparent p-8 text-2xl w-full text-center" 
        type="text" 
        // value={query}
        onChange={e => handleOnChange(e.currentTarget.value)}
      />
      {result.map((r: resultDto) => <Quote quote={r} />)}
    </div>
  );
}

export default App;
