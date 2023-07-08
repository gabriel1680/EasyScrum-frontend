import './style.css';

function TaskCard({ task }) {
    const dueDate = new Date(task.due_date).toLocaleDateString();
    return (
        <div className='task-card'>
            <h3>{task.title}</h3>
            <p>Data de conclusão: {dueDate}</p>
        </div>
    );
}

export default TaskCard;

