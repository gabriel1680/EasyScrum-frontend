import { useState, useEffect } from 'react';

import { api } from '../../services/api';

export default function useGetSprint(sprintId) {
    const [sprint, setSprint] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/sprints/${sprintId}`);
            setSprint(data);
        } catch (error) {
           setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, sprint, error };
}
