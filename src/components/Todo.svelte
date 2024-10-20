<script lang="ts">
	type toDO = {
		toDo: string;
		completed: boolean;
	};

	export let index: number;
	export let todo: toDO;
	export let updateStorage: () => void;
	export let removeATodo: (index: number) => void;
</script>



<div class="todo">
	<input type="checkbox" bind:checked={todo.completed} on:click={updateStorage} />
	<p class:completed={todo.completed}>{todo.toDo}</p>
	<div class="todo-buttons">
		<button class="delete" on:click={() => removeATodo(index)}>Delete</button>
		<button class="edit">Edit</button>
	</div>
</div>

<style>
	/* To-Do Item Styles */
	.todo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
		border: 1px solid #bdc3c7;
		border-radius: 4px;
		margin-bottom: 10px;
		background-color: #f5f7fa; /* Light blue-tinted grey for to-dos */
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s;
	}

	.todo:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
	}

	.todo p {
		flex: 1;
		margin: 0;
		padding: 0 10px;
		font-size: 1rem;
		color: #34495e; /* Darker grey for task text */
	}

	.todo p.completed {
		text-decoration: line-through;
		color: #95a5a6; /* Softer grey for completed tasks */
	}

	/* To-Do Buttons */
	.todo-buttons {
		display: flex;
		gap: 5px;
	}

	.todo-buttons button {
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		color: white;
		font-size: 0.9rem;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.todo-buttons button:hover {
		transform: translateY(-2px);
	}

	.todo-buttons .delete {
		background-color: #e74c3c; /* Bright red for delete buttons */
	}

	.todo-buttons .delete:hover {
		background-color: #c0392b; /* Darker red on hover */
	}

	.todo-buttons .edit {
		background-color: #f39c12; /* Bright yellow for edit buttons */
		color: black;
	}

	.todo-buttons .edit:hover {
		background-color: #d68910; /* Darker yellow on hover */
	}
</style>
