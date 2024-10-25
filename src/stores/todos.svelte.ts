export function createTodos() {
	let todos: ToDo[] = $state([]);

	//dynamic stats
	const numberOfTotalTasks: number = $derived(todos.length);
	const numberOfCompletedTasks = $derived.by(() => {
		return todos.filter((todo) => todo.completed).length;
	});
	const numberofRemainingTasks = $derived.by(() => {
		return todos.filter((todo) => !todo.completed).length;
	});

	//updating local Storage
	function updateStorage() {
		console.log('storage updated');
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	//getting todos from local storage
	$effect(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			todos = JSON.parse(storedTodos);
		}
	});

	const add = (toDO: string, priority: priorities) => {
		const newToDo: ToDo = { toDo: toDO, completed: false, priority: priority };
		todos.unshift(newToDo);
		updateStorage();
	};

	const remove = (index: number) => {
		console.log('Remove');
		todos = todos.filter((_, i) => i !== index);

		updateStorage();
		console.log(remove);
	};

	const completed = (index: number) => {
		console.log('completed');
		if (!todos[index]) return;
		todos[index].completed = !todos[index].completed;
		updateStorage();
		console.log(todos[index].completed);
	};

	const edit = (index: number, newToDo: string, newPriority: priorities) => {
		console.log('EDIT');
		if (!todos[index]) return;
		// Ensure both the task and priority are updated
		todos[index].toDo = newToDo || todos[index].toDo; // Preserve old todo if no new one is passed
		todos[index].priority = newPriority || todos[index].priority;
		updateStorage();
	};

	return {
		get todos() {
			return todos;
		},
		get numberOfCompletedTasks() {
			return numberOfCompletedTasks;
		},
		get numberofRemainingTasks() {
			return numberofRemainingTasks;
		},
		get numberOfTotalTasks() {
			return numberOfTotalTasks;
		},
		add,
		remove,
		edit,
		updateStorage,
		completed
	};
}
