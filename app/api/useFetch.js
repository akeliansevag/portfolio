import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
    const isInitialMount = useRef(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setError(null);
        setLoading(true);
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
