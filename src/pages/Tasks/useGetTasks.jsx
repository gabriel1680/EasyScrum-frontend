import { useState, useEffect } from 'react';

import { api } from '../../services/api';

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
