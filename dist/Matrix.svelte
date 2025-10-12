<script>
	import { Atom } from './index.js';
	import Line from './Line.svelte';

	/**
	 * @typedef {`${'a'|'b'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|number}${string}`} StringNotStartingWithC
	 */

	/**
	 * @typedef {`c${'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|number}${string}`} StringStartingWithCButNotCO
	 */

	/**
	 * @typedef {StringNotStartingWithC | StringStartingWithCButNotCO} StringNotStartingWithCO
	 */

	/**
	 * @typedef {{ columns: number } & Record<StringNotStartingWithCO, import('svelte').Snippet | string> } Props
	 */

	/** @type {Props} */
	const { columns, ...coordinates } = $props();

	// Chunk coordinates into 2D array, with subarrays of length `columns`
	const rows = $derived(
		Object.entries(coordinates).reduce((acc, [name, snip], index) => {
			if (index % columns === 0) acc.push([]);
			acc[acc.length - 1].push({ name, snip });
			return acc;
		}, /** @type {{ name: string, snip: import('svelte').Snippet | string }[][]} */ ([]))
	);
</script>

<mrow>
	<mo fence="true" form="prefix">(</mo>
	<mtable>
		{#each rows as row (row.map((r) => r.name).join('-'))}
			<mtr>
				{#each row as { snip: coordinate, name } (name)}
					<mtd>
						{#if typeof coordinate === 'string'}
							<Atom expr={coordinate} />
						{:else}
							{@render coordinate()}
						{/if}
					</mtd>
				{/each}
			</mtr>
		{/each}
	</mtable>
	<mo fence="true" form="postfix">)</mo>
</mrow>
