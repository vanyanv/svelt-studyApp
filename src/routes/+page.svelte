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

	type toDO = {
		toDo: string;
		completed: boolean;
	};

	function addTodos() {
		todos.unshift({ toDo: toDO, completed: false });
		todos = todos;
	}

	function removeATodo(index: number) {
		todos = todos.filter((_, i) => i !== index);
	}

	$: console.log(todos);
</script>

<input type="text" bind:value={toDO} />
<button on:click={addTodos}>Add a Todo</button>

{#each todos as todo, index}
	<div class="todo">
		<input type="checkbox" bind:checked={todo.completed} />
		<p>{todo.toDo}</p>
		<button on:click={() => removeATodo(index)}>Delete</button>
	</div>
{/each}

<style>
	.todo {
		display: flex;
		align-items: center;
		gap: 15px;
		height: 50px;
		width: 100px;
	}

	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
