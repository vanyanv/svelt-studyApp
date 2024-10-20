<script lang="ts">
	import { onMount } from 'svelte';
	import Todo from '../components/Todo.svelte';

	type toDO = {
		toDo: string;
		completed: boolean;
		priority: 'high' | 'medium' | 'low';
	};

	let toDO = '';
	let todos: toDO[] = [];

	onMount(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			todos = JSON.parse(storedTodos);
		}
	});

	//updating local Storage
	function updateStorage() {
		console.log('storage updated');
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	//add a todo
	function addTodos() {
		todos.unshift({ toDo: toDO, completed: false, priority: 'medium' });
		updateStorage();
		todos = todos;
	}
	//remove a todo
	function removeATodo(index: number) {
		todos = todos.filter((_, i) => i !== index);
		updateStorage();
	}
	//edit a todo
	function editATodo(newTodo: string, index: number) {
		if (!todos[index]) return;
		todos[index].toDo = newTodo;
		updateStorage();
	}

	function updateCompletion(index: number) {
		if (!todos[index]) return;
		todos[index].completed = !todos[index].completed;
		updateStorage();
	}

	$: console.log(todos);
</script>

<h1>To Do List</h1>
<div class="input-container">
	<input type="text" bind:value={toDO} placeholder="Enter a new task" />
	<button on:click={addTodos}>Add</button>
</div>

<h1>Available Tasks</h1>
{#if todos.length == 0}
	<p>Loading Tasks....</p>
{/if}

{#each todos as todo, index}
	<Todo {index} {todo} {updateCompletion} {removeATodo} {editATodo} />
{/each}

<style>
	/* General Styles */
	h1 {
		font-family: 'Arial', sans-serif;
		color: #2c3e50; /* Darker navy color for better contrast */
		font-size: 2rem;
		margin-bottom: 20px;
	}

	/* Input Section */
	.input-container {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
		align-items: center;
	}

	input[type='text'] {
		flex: 1;
		padding: 12px;
		border: 1px solid #bdc3c7; /* Light grey border */
		border-radius: 4px;
		font-size: 1rem;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		transition: border-color 0.3s;
	}

	input[type='text']:focus {
		border-color: #2980b9; /* Blue for focus state */
		outline: none;
	}

	button {
		padding: 12px 24px;
		border: none;
		border-radius: 4px;
		background-color: #2980b9; /* Vibrant blue for primary buttons */
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	button:hover {
		background-color: #1c5982; /* Darker blue on hover */
		transform: translateY(-2px);
	}

	button:active {
		transform: translateY(0);
	}
</style>
