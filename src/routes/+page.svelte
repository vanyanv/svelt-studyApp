<script lang="ts">
	import { onMount } from 'svelte';

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
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	type toDO = {
		toDo: string;
		completed: boolean;
	};

	function addTodos() {
		todos.unshift({ toDo: toDO, completed: false });
		updateStorage();
		todos = todos;
	}

	function removeATodo(index: number) {
		todos = todos.filter((_, i) => i !== index);
		updateStorage();
	}

	$: console.log(todos);
</script>

<h1>To do List</h1>
<input type="text" bind:value={toDO} />
<button on:click={addTodos}>Add a Todo</button>

{#each todos as todo, index}
	<div class="todo">
		<input type="checkbox" bind:checked={todo.completed} on:click={updateStorage} />
		<p>{todo.toDo}</p>
		<button on:click={() => removeATodo(index)}>Delete</button>
	</div>
{/each}

<style>
	.todo {
		display: flex;
		align-items: center;
		overflow-wrap: break-word;
		gap: 15px;
		height: 50px;
		width: 500px;
	}

	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1.5em;
	}
</style>
