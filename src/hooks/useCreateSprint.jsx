import { useState } from 'react';
import { api } from '../services/api';

/**
 * Hook para criação de uma sprint
 *
 * @returns {{ isLoading: boolean, createSprint: (sprint: import('../@types/easy-scrum').Sprint) => Promise<{ message: string, status: number, isError: boolean }>}}
 */
export default function useCreateSprint() {
    const [isLoading, setIsLoading] = useState(false);

    async function createSprint(sprint) {
        let result;
        try {
            setIsLoading(true);
            const { data, status } = await api.post(
                '/sprints',
                createSprintFormData(sprint.name, sprint.description, sprint.dueDate)
            );
            result = { message: data, status, isError: false };
        } catch (error) {
            const message = error?.response?.data?.message || error?.message;
            result = { message, status: error?.request?.status, isError: true };
        } finally {
            setIsLoading(false);
        }
        return result;
    }

    return { isLoading, createSprint };
}

function createSprintFormData(name, description, dueDate) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('due_date', dueDate);
    return formData;
}
