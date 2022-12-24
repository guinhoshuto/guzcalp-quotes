import React, { useState, useEffect} from 'react';
import Quote from './components/Quote'
import axios from 'axios'
import './App.css';
import useDebounce from './hooks/useDebounce';

export interface resultDto{
  quoteNumber: number;
  quote: string;
}

function App() { 
  // const query = '';
  const [result, setResult] = useState<resultDto[]>([])
  const [query, setQuery] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const debouncedSearch = useDebounce(query, 500)

  function handleOnChange(q: string){ 
    setQuery(q)
  }

  async function getQuotes(q: string | null){ 
    const response = await axios.get('https://api.feras.club/quotes/search/' + q)
    console.log(response.data)
    setResult(response.data)
  }

  useEffect(() => {
    setLoading(true)
    setResult([])
    getQuotes(debouncedSearch)
    setLoading(false)
  }, [debouncedSearch])

  return (
    <div className="App bg-bege text-quase-preto h-screen">
      <h1 className="font-bold p-4 text-left">!quote</h1>
      <input 
        className="focus-visible:outline-none focus:ring-0 focus:border-transparent font-bold p-8 text-2xl bg-bege w-1/2 text-center text-marronzinho carret-marronzinho" 
        type="text" 
        autoFocus
        onChange={e => handleOnChange(e.currentTarget.value)}
      />
      {loading && <img src='/pamonha.gif' alt='pera ai'/>}
      {result.map((r: resultDto) => <Quote quote={r} />)}
    </div>
  );
}

export default App;
