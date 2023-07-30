import SprintCard from ".";

const TOMORROW_TIMESTAMP = new Date(
    Date.now() + 3600 * 1000 * 24
).toISOString();

const sprint = {
    name: "New Sprint",
    description: "Some description",
    due_date: TOMORROW_TIMESTAMP,
    tasks: [],
};

export default {
    title: "SprintCard",
    component: SprintCard,
    tags: ["autodocs"],
};

export const EmptyTasks = {
    args: {
        sprint,
        onClick: () => null,
    },
};

export const HalfDone = {
    args: {
        sprint: {
            ...sprint,
            tasks: [{ status: "done" }, { status: "in progress" }],
        },
        onClick: () => null,
    },
};

export const Done = {
    args: {
        sprint: { ...sprint, tasks: [{ status: "done" }] },
    },
    onClick: () => null,
};
