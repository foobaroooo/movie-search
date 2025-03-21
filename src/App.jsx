import { useState } from 'react'
import './App.css'
import SearchResults from './components/SearchResults';
import Search from './components/Search';

function App() {
  const apiKey = '875ca30a293634116be3f3785e659320';
  const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query='

  const [query, setQuery] = useState('')

  const handleQuery = (newQuery) => {
    //console.log(url + query)
    setQuery(newQuery)
  }

  return (
    <main>
      <h1 style={{textAlign:'left'}}>Movie Search Page</h1>
      <Search onQuery={handleQuery} />
      <SearchResults url={apiUrl + query} />
    </main>
  )
}

export default App
