import { writable } from 'svelte/store';

function createTodos() {
	const { subscribe, set, update } = writable([]);
}

export const Todos = createTodos();
