function createTodos() {
	let todos: ToDo[] = $state([]);

	const add = (toDO: string, completed: boolean, priority: priorities) => {
		const newToDo: ToDo = { toDo: toDO, completed: false, priority: priority };
		todos.unshift(newToDo);
	};

	const remove = (index: number) => {
		const removed = todos.filter((_, i) => i !== index);
		todos = removed;
	};

	const completed = (index: number) => {
		if (!todos[index]) return;
		todos[index].completed = !todos[index].completed;
	};

	const edit = (index: number, newToDo: string, newPriority: priorities) => {
		if (!todos[index]) return;
		// Ensure both the task and priority are updated
		todos[index].toDo = newToDo || todos[index].toDo; // Preserve old todo if no new one is passed
		todos[index].priority = newPriority || todos[index].priority;
	};
	return {
		get todos() {
			return todos;
		},
		add: add,
		remove: remove,
		edit: edit,
		completed: completed
	};
}

export const Todos = createTodos();
