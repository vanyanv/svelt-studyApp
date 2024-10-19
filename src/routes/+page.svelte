<script lang="ts">
	import Nested from '../components/Nested.svelte';

	let toDO = '';
	let names: string[] = [];

	function addTodos() {
		names.unshift(toDO);
		names = names;
	}

	function removeATodo(index: number) {
		names = names.filter((_, i) => i !== index);
	}
</script>

<!-- <h1>Welcome to {name}</h1> -->
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="text" bind:value={toDO} />
<button on:click={addTodos}>Add a Todo</button>

<!-- <Nested {names} /> -->
<!-- {#if names.length > 0}
	<p>{names[0]}</p>
{/if} -->

{#each names as name, index}
	<div class="todo">
		<p>{name}</p>
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
