<script lang="ts">
	export let names;

	let m = { x: 0, y: 0 };

	function handleMove(event: { clientX: number; clientY: number }) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

{#each names as name}
	<h1>
		Im a another component
		{name}
	</h1>
{/each}

<div on:pointermove={handleMove}>
	The points is at {m.x} and {m.y}
</div>

<style>
	div {
		width: 500px;
		height: 500px;
	}
</style>
