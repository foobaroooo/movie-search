import { useState } from 'react';

export default function Search({ onQuery }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        
        onQuery(query);
    }

    return (
        <div style={{textAlign:'left'}}>
            <form>
                <input type="text" id="query" name="query" value={query} onChange={handleChange} />
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}