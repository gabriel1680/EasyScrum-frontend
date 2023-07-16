import TaskCard from '.';

const TOMORROW_TIMESTAMP = new Date(Date.now() + 3600 * 1000 * 24).toISOString();

const task = {
    title: 'New Task',
    user_story: 'Some story',
    due_date: TOMORROW_TIMESTAMP,
};

export default {
    title: 'TaskCard',
    component: TaskCard,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        task,
        onClick: () => null,
    },
};
