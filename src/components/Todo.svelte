<script lang="ts">
	type toDO = {
		toDo: string;
		completed: boolean;
	};

	let editing: boolean = false;
	let edit: string;
	function handleEdit() {
		editing = !editing;
	}
	export let index: number;
	export let todo: toDO;
	export let updateStorage: () => void;
	export let removeATodo: (index: number) => void;
	export let editATodo: (newTodo: string, index: number) => void;
</script>

<div class="todo">
	{#if editing}
		<div class="edit-container">
			<input type="text" bind:value={edit} class="edit-input" placeholder={todo.toDo} />
			<button
				class="confirm"
				on:click={() => {
					editATodo(edit, index);
					handleEdit();
				}}>Confirm</button
			>
			<button class="cancel" on:click={handleEdit}>Cancel</button>
		</div>
	{:else}
		<input type="checkbox" bind:checked={todo.completed} on:click={updateStorage} />
		<p class:completed={todo.completed}>{todo.toDo}</p>
		<div class="todo-buttons">
			<button class="delete" on:click={() => removeATodo(index)}>Delete</button>
			<button class="edit" on:click={handleEdit}>Edit</button>
		</div>
	{/if}
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

	/* Editing Mode Styles */
	.edit-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}

	.edit-input {
		flex: 1;
		padding: 10px;
		border: 1px solid #bdc3c7;
		border-radius: 4px;
		font-size: 1rem;
		color: #34495e; /* Darker grey for text */
	}

	.confirm {
		background-color: #2ecc71; /* Bright green for confirm button */
		color: white;
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.confirm:hover {
		background-color: #27ae60; /* Darker green on hover */
		transform: translateY(-2px);
	}

	.cancel {
		background-color: #e74c3c; /* Bright red for cancel button */
		color: white;
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.cancel:hover {
		background-color: #c0392b; /* Darker red on hover */
		transform: translateY(-2px);
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
