import { useState, useEffect } from 'react';

import { api } from '../../services/api';

/**
 * Busca as sprints na api
 *
 * @params { number } refetch
 * @returns {{ isLoading: boolean, sprints: any[], error: any }}
 */
export default function useGetSprints(refetch) {
    const [sprints, setSprints] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [refetch]);

    async function fetchData() {
        try {
            setIsLoading(true);
            const { data } = await api.get('/sprints');
            setSprints(data.sprints);
        } catch (error) {
           setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, sprints, error };
}
