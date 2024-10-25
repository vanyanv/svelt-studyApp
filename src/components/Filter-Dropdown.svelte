<script lang="ts">
	let filter = $state('all');
	const options = ['All', 'Completed'];
	const priorities = ['high', 'medium', 'low', 'none', 'all'];
</script>

<div class="filter-container">
	<div class="filter-group">
		<label for="filter">Task Status</label>
		<select bind:value={filter} class="filter-dropdown">
			{#each options as option}
				<option value={option.toLowerCase()}>{option}</option>
			{/each}
		</select>
	</div>
	<div class="filter-group">
		<label for="priority">Priority</label>
		<select bind:value={filter} class="filter-dropdown">
			{#each priorities as option}
				<option value={option.toLowerCase()}>{option}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	/* Container Styles */
	.filter-container {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;
		background-color: #f8f9fa;
		padding: 15px;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	/* Group styles */
	.filter-group {
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: flex-start;
	}

	/* Label Styles */
	label {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 4px;
	}

	/* Dropdown Styles */
	.filter-dropdown {
		padding: 8px 12px;
		border-radius: 6px;
		border: 1px solid #ccc;
		background-color: #fff;
		font-size: 0.9rem;
		color: #333;
		transition:
			border-color 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
		cursor: pointer;
	}

	.filter-dropdown:hover {
		border-color: #2980b9;
	}

	.filter-dropdown:focus {
		outline: none;
		border-color: #2980b9;
		box-shadow: 0 0 5px rgba(41, 128, 185, 0.3);
	}
</style>
