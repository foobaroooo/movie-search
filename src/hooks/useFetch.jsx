import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url, params) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    
    console.log(params)
        
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(url + params);
                setData(response.data.results);
            } catch (err) {
                // console.log(err)
                setError(err)
            }
            setLoading(false);
        }
        fetchData();
    }, [url, params])

    return [loading, data, error];
}