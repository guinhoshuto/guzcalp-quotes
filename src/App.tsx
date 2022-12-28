import React, { useState, useEffect} from 'react';
import Quote from './components/Quote'
import axios from 'axios'
import './App.css';
import useDebounce from './hooks/useDebounce';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

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
      <div className="border-solid border-8 border-black m-8 flex items-center px-8 w-3/4 md:w-1/2 lg:2-1/3 mx-auto" >
        <MagnifyingGlassIcon  width="40" height="40"/>
        <input 
          className="focus-visible:outline-none focus:ring-0 focus:border-transparent font-bold w-full p-8 text-xl bg-bege text-center text-marronzinho carret-marronzinho focus:shadow-sm " 
          // className="font-bold ring-0 bg-bege border-solid border-4 focus:ring-0 focus:border-solid focus:border-4"
          type="text" 
          autoFocus
          onChange={e => handleOnChange(e.currentTarget.value)}
        />
      </div>
      {loading && <img src='/pamonha.gif' alt='pera ai'/>}
      {result.map((r: resultDto, index: number) => <div key={index}><Quote quote={r} /></div>)}
    </div>
  );
}

export default App;
