<script lang="ts">
	type prioritieOptions = 'high' | 'medium' | 'low' | 'none';

	const priorities = ['high', 'medium', 'low'];

	export let priorityForUser: prioritieOptions;
</script>

<select bind:value={priorityForUser}>
	<option value="none">choose a priority</option>
	{#each priorities as priority}
		<option value={priority}>{priority}</option>
	{/each}
</select>

<style>
	select {
		flex: 1;
		padding: 12px;
		border: 1px solid #bdc3c7;
		border-radius: 6px;
		background-color: #fff;
		font-size: 1rem;
		transition: border-color 0.3s ease-in-out;
	}

	select:focus {
		border-color: #2980b9;
		outline: none;
	}
</style>
