<script lang="ts">
	type toDO = {
		toDo: string;
		completed: boolean;
		priority: 'high' | 'medium' | 'low' | 'none';
	};

	let editing: boolean = false;
	let edit: string;
	function handleEdit() {
		editing = !editing;
	}
	export let index: number;
	export let todo: toDO;
	export let updateCompletion: (index: number) => void;
	export let removeATodo: (index: number) => void;
	export let editATodo: (newTodo: string, index: number) => void;
</script>

<div class="todo {todo.priority}">
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
		<input type="checkbox" checked={todo.completed} on:click={() => updateCompletion(index)} />
		<p class:completed={todo.completed}>{todo.toDo}</p>
		<p class="priority-label">{todo.priority}</p>
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
		border-radius: 8px;
		margin-bottom: 10px;
		background-color: #f5f7fa;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition:
			box-shadow 0.3s,
			background-color 0.3s;
	}

	.todo:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
	}

	/* Priority colors */
	.todo.high {
		border-left: 5px solid #e74c3c; /* Bright red for high priority */
	}

	.todo.medium {
		border-left: 5px solid #f39c12; /* Bright yellow for medium priority */
	}

	.todo.low {
		border-left: 5px solid #2ecc71; /* Green for low priority */
	}

	.todo.none {
		border-left: 5px solid #95a5a6; /* Grey for no priority */
	}

	/* Priority label styles */
	.priority-label {
		font-size: 0.9rem;
		font-weight: bold;
		text-transform: capitalize;
		margin-right: 10px;
	}

	.todo.high .priority-label {
		color: #e74c3c;
	}

	.todo.medium .priority-label {
		color: #f39c12;
	}

	.todo.low .priority-label {
		color: #2ecc71;
	}

	.todo.none .priority-label {
		color: #95a5a6;
	}

	.todo p {
		flex: 1;
		margin: 0;
		padding: 0 10px;
		font-size: 1rem;
		color: #34495e;
	}

	.todo p.completed {
		text-decoration: line-through;
		color: #95a5a6;
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
		border-radius: 4px;
		font-size: 1rem;
		color: #34495e;
	}

	.confirm {
		background-color: #2ecc71;
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
		background-color: #27ae60;
		transform: translateY(-2px);
	}

	.cancel {
		background-color: #e74c3c;
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
		background-color: #c0392b;
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

	.todo-buttons .delete {
		background-color: #e74c3c;
	}

	.todo-buttons .delete:hover {
		background-color: #c0392b;
	}

	.todo-buttons .edit {
		background-color: #f39c12;
		color: black;
	}

	.todo-buttons .edit:hover {
		background-color: #d68910;
	}
</style>
