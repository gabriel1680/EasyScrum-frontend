import { toast } from 'react-toastify';

export default function useCreateTaskForm({ onTaskCreate }) {

    function onCreateTaskSuccess() {
        onTaskCreate();
        toast.success('Tarefa criada com sucesso!');
    }

    function onCreateTaskError(error) {
        if (![400, 422].includes(error.status)) {
            toast.error('Parece que houve um erro ao cadastrar a tarefa');
        } else {
            toast.error(error.data.message);
        }
        console.error(error);
    }

    return { onCreateTaskError, onCreateTaskSuccess };
}

