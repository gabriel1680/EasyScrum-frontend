import { useState, useEffect } from 'react';

import { api } from '../services/api';

/**
 * Busca as tasks referentes à sprint na api
 *
 * @params {{ refetch: number, sprintId: number }} arg0
 * @returns {{ isLoading: boolean, tasks: any[], error: any }}
 */
export default function useGetTasks({ refetch, sprintId }) {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [refetch]);

    async function fetchData() {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/sprints/${sprintId}/tasks`);
            setTasks(data.tasks);
        } catch (error) {
           setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, tasks, error };
}
