import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {
  const apiKey = '875ca30a293634116be3f3785e659320';// import.meta.env.VITE_REACT_APP_API_KEY
  const url = 'https://api.themoviedb.org/3/search/movie?'

  const [query, setQuery] = useState('')

  const handleQuery = (newQuery) => {
    setQuery(newQuery)
  }

  const params = new URLSearchParams({ api_key: apiKey, query: query })

  return (
    <main>
      <h1 style={{textAlign:'left'}}>Movie Search Page</h1>
      <Search onQuery={handleQuery} />
      <SearchResults url={url} params={params} />
    </main>
  )
}

export default App
