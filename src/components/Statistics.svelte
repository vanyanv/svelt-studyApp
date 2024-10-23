<script lang="ts">
	let { numberOfTotalTasks, numberOfCompletedTasks, numberofRemainingTasks } = $props();
</script>

<div class="stats-container">
	<div class="stat-card">
		<h3>Total Tasks</h3>
		<p>{numberOfTotalTasks}</p>
	</div>
	<div class="stat-card">
		<h3>Completed Tasks</h3>
		<p>{numberOfCompletedTasks}</p>
	</div>
	<div class="stat-card">
		<h3>Remaining Tasks</h3>
		<p>{numberofRemainingTasks}</p>
	</div>
</div>

<style>
	/* Stats Container */
	.stats-container {
		display: flex;
		gap: 20px;
		margin: 20px 0;
		justify-content: space-between;
	}

	/* Stat Card */
	.stat-card {
		background-color: #f7f9fa;
		padding: 15px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		flex: 1;
	}

	.stat-card h3 {
		font-size: 1.2rem;
		color: #2980b9;
		margin-bottom: 10px;
	}

	.stat-card p {
		font-size: 1.8rem;
		color: #2c3e50;
		font-weight: bold;
	}

	/* Responsiveness */
	@media (max-width: 768px) {
		.stats-container {
			flex-direction: column;
			gap: 10px;
		}
	}

	.stat-card:nth-child(1) {
		background-color: #e0f7fa; /* Light Blue for total tasks */
	}

	.stat-card:nth-child(2) {
		background-color: #d4edda; /* Light Green for completed tasks */
	}

	.stat-card:nth-child(3) {
		background-color: #fce8e6; /* Light Red for remaining tasks */
	}

	.stat-card {
		transition: transform 0.3s ease;
	}

	.stat-card:hover {
		transform: scale(1.05);
	}
</style>
