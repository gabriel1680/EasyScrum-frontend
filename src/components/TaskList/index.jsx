import TaskCard from '../TaskCard';
import './style.css';

function TaskList({ tasks }) {
    return (
        <div className='task-list'>
            {
                tasks.length > 0 ?
                tasks.map(task => <TaskCard task={task} />) :
                <p>Nenhuma tarefa cadastrada nessa categoria</p>
            }
        </div>
    );
}

export default TaskList;

