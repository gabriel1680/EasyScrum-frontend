import SprintList from '.';

const TOMORROW_TIMESTAMP = new Date(Date.now() + 3600 * 1000 * 24).toISOString();

const sprint = {
    name: 'New Sprint',
    description: 'Some description',
    due_date: TOMORROW_TIMESTAMP,
    tasks: [],
};

const sprints = [sprint, sprint, sprint, sprint];

export default {
    title: 'SprintList',
    component: SprintList,
    tags: ['autodocs'],
};

export const Empty = {
    args: {
        sprints: [],
        onCardClick: () => null,
    },
};

export const Default = {
    args: {
        sprints,
        onCardClick: () => null,
    },
};
