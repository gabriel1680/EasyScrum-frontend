import { toast } from 'react-toastify';

export default function useTaskUpdateForm({ onTaskUpdate }) {

    function onUpdateSuccess() {
        onTaskUpdate();
        toast.success('Tarefa atualizada com sucesso');
    }

    function onUpdateFailure(error) {
        const { status } = error;
        if ([400, 422].includes(status)) {
            return toast.error(error.data.message);
        }
        toast.error('Parece que algo deu errado ao atualizar a tarefa');
    }

    function onDeleteSuccess() {
        onTaskUpdate();
        toast.success('Tarefa removida com sucesso');
    }

    function onDeleteFailure(error) {
        const { status } = error;
        if ([400, 422].includes(status)) {
            return toast.error(error.data.message);
        }
        toast.error('Parece que algo deu errado ao remover a tarefa');
    }

    return { onUpdateSuccess, onUpdateFailure, onDeleteSuccess, onDeleteFailure };
}

