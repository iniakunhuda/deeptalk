import { writable } from "svelte/store";

import talk from '../data/talk.json';
const dataQuestion = talk.questions;

function setQuestion() {
    const { subscribe, update } = writable(dataQuestion);

    return {
        subscribe,
        remove: (value) =>
            update((list) => {
                const newList = [...list];
                const index = newList.indexOf(value);
                if (index !== -1) {
                    newList.splice(index, 1);
                }
                return newList;
            }),
    };
}

export const questions = setQuestion();