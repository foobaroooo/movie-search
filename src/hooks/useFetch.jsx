import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
        
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(url);
                setData(response.data.results);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])

    return [loading, data];
}