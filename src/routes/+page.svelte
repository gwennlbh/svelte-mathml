<script lang="ts">
	import * as Math from '$lib/index.js';
</script>

<svelte:head>
	<link rel="stylesheet" href="/svelte-mathml/import.css" />
</svelte:head>

<Math.Parse expr="2*e_x+(e_y-w/2)" />

<style>
	:global(math) {
		font-family: 'Latin Modern Math';
	}
</style>
