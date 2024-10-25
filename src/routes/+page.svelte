<script lang="ts">
	import { createTodos } from '../stores/todos.svelte';
	import Todo from '../components/Todo.svelte';
	import Statistics from '../components/Statistics.svelte';
	import PrioritiesDropdown from '../components/Priorities-Dropdown.svelte';

	let newToDo = $state('');
	let priorityForUser: priorities = $state('none');

	let storedTodos = createTodos();

	// console.log(storedTodos);
	// let todos: ToDo[] = $state([]);

	// $effect(() => {
	// 	const storedTodos = localStorage.getItem('todos');
	// 	if (storedTodos) {
	// 		todos = JSON.parse(storedTodos);
	// 	}
	// });

	// //updating local Storage
	// function updateStorage() {
	// 	console.log('storage updated');
	// 	localStorage.setItem('todos', JSON.stringify(todos));
	// }

	// //add a todo
	// function addTodos() {
	// 	console.log(priorityForUser);
	// 	todos.unshift({ toDo: newToDo, completed: false, priority: priorityForUser });
	// 	updateStorage();
	// 	todos = todos;
	// }

	// //remove a todo
	// function removeATodo(index: number) {
	// 	todos = todos.filter((_, i) => i !== index);
	// 	updateStorage();
	// }
	// //edit a todo
	// function editATodo(newTodo: string, index: number, newPriority: priorities) {
	// 	if (!todos[index]) return;
	// 	// Ensure both the task and priority are updated
	// 	todos[index].toDo = newTodo || todos[index].toDo; // Preserve old todo if no new one is passed
	// 	todos[index].priority = newPriority || todos[index].priority;
	// 	updateStorage();
	// }

	// function updateCompletion(index: number) {
	// 	if (!todos[index]) return;
	// 	todos[index].completed = !todos[index].completed;
	// 	updateStorage();
	// }
</script>

<h1>To Do List</h1>
<div class="input-container">
	<input type="text" bind:value={newToDo} placeholder="Enter a new task" />
	<button onclick={() => storedTodos.add(newToDo, priorityForUser)}>Add</button>
	<label for="priority">Select a Priority</label>
	<PrioritiesDropdown bind:priorityForUser />
</div>

<!-- // statistics and data -->
<Statistics />

<h2>Tasks</h2>
{#if storedTodos.todos.length === 0}
	<p>Loading Tasks....</p>
{/if}
{#each storedTodos.todos as todo, index}
	<Todo
		{index}
		{todo}
		remove={storedTodos.remove}
		edit={storedTodos.edit}
		completed={storedTodos.completed}
	/>
{/each}

<style>
	/* General Styles */
	h1 {
		font-family: 'Arial', sans-serif;
		color: #2c3e50;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	/* Input Section */
	.input-container {
		display: flex;
		gap: 15px;
		margin-bottom: 25px;
		align-items: center;
		background-color: #f7f9fa; /* Light background to separate input area */
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	input[type='text'] {
		flex: 3;
		padding: 12px 15px;
		border: 1px solid #bdc3c7;
		border-radius: 6px;
		font-size: 1rem;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
		transition: border-color 0.3s ease-in-out;
	}

	input[type='text']:focus {
		border-color: #2980b9;
		outline: none;
	}

	button {
		padding: 12px 24px;
		border: none;
		border-radius: 6px;
		background-color: #2980b9;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition:
			background-color 0.3s ease-in-out,
			transform 0.2s ease-in-out;
	}

	button:hover {
		background-color: #1c5982;
		transform: translateY(-2px);
	}

	button:active {
		transform: translateY(0);
	}

	/* Label styling */
	label {
		font-size: 0.9rem;
		color: #7f8c8d;
	}

	/* General form spacing and responsiveness */
	@media (max-width: 768px) {
		.input-container {
			flex-direction: column;
			gap: 10px;
		}

		button {
			width: 100%;
			padding: 12px 0;
		}
	}
</style>
