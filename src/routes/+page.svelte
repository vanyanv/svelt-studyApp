<script lang="ts">
	import Nested from '../components/Nested.svelte';

	let name = 'Svelt-Kit';
	let names: string[] = [];

	function addNames() {
		names.push('Vardan');
		names = names;
	}
</script>

<h1>Welcome to {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="text" />
<button on:click={addNames}>Add a Name</button>
<Nested name= {names[0]} />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
