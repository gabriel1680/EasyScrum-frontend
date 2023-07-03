import { DoneRounded } from "@mui/icons-material";

import './style.css';

function SprintCard({ sprint }) {
    const doneTasksAmout = getTasksCountWithStatus('finalizado');
    const donePercentage = sprint.tasks.length > 0 ? (doneTasksAmout / sprint.tasks.length * 100) : 0;

    return (
        <div className='sprint-card'>
            <div className='sprint-name'>{ sprint.name }</div>
            <div className='sprint-progress-bar'>
                <div className='progress' style={{ width: `${donePercentage}%` }}></div>
            </div>
            <div className='progress-labels'>
                <div className='label'>Progress</div>
                <div>{donePercentage}%</div>
            </div>
            <div className='due-date'>
                <div>Due in: {getDaysOffsetFromNow(sprint.due_date)} days</div>
            </div>
            <div className='done-container'>
                <div className='done'>
                    <DoneRounded fontSize='inherit' color='success' />
                </div>
                <div>{doneTasksAmout} / {sprint.tasks.length}</div>
            </div>
        </div>
    );

    function getTasksCountWithStatus(status) {
        return sprint.tasks.reduce((total, task) => total += task.status === status ? 1 : 0, 0);
    }
}

/**
 * Calcula quantos dias faltam da data atual até a data passada por parâmetro
 *
 * @param {Date | string} date
 * @returns {number}
 */
function getDaysOffsetFromNow(date) {
    const MS_TO_DAYS_CONVERT_RATE = 1000 * 3600 * 24;
    const now = new Date(); 
    const offsetInMS = new Date(date).getTime() - now.getTime();
    return Math.ceil(offsetInMS / MS_TO_DAYS_CONVERT_RATE);
}

export default SprintCard;
