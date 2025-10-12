<script>
	/**
	 * @typedef {object} Props
	 * @property {import('svelte').Snippet} children
	 * @property {boolean} [bare=false] If true, do not wrap in <math> tags
	 */

	/** @type {Props} */
	const { children, bare = false } = $props();
</script>

{#if bare}
	<mrow>
		{@render children()}
	</mrow>
{:else}
	<math>
		<mrow>
			{@render children()}
		</mrow>
	</math>
{/if}
