import React from 'react'
import SprintCard from '../SprintCard';

import './style.css';

function SprintList({ sprints }) {
    const isEmpty = sprints.length === 0;
    return (
        <div className="sprint-list">
            {isEmpty ?
                <div>A lista de sprints está vazia )=</div>
                : sprints.map(sprint => <SprintCard key={sprint.id} sprint={sprint} />)}
        </div>
    );
}

export default SprintList;
