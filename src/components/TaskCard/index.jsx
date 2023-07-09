import './style.css';

/**
 * Renderiza o card de uma task
 */
function TaskCard({ task, onClick }) {
    const dueDate = new Date(task.due_date).toLocaleDateString();
    return (
        <div className='task-card' onClick={() => onClick(task)}>
            <h3>{task.title}</h3>
            <p>Data de conclusão: {dueDate}</p>
        </div>
    );
}

export default TaskCard;

