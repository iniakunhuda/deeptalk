import { writable } from "svelte/store";
const historyQuestion = [];

function setHistory() {
    const { subscribe, update } = writable(historyQuestion);

    return {
        subscribe,
        insert: (value) =>
            update((list) => {
                const newList = [...list];
                return [...newList, value];
            }),
    };
}

export const histories = setHistory();