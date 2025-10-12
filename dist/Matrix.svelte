<script>
	import Atom from './Atom.svelte';
	import Matrix from './Matrix.svelte';
	import Line from './Line.svelte';

	/**
	 * @typedef {`${'a'|'b'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|number}${string}`} StringNotStartingWithC
	 * @typedef {`c${'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|number}${string}`} StringStartingWithCButNotCO
	 * @typedef {StringNotStartingWithC | StringStartingWithCButNotCO} StringNotStartingWithCO
	 * @typedef {Record<StringNotStartingWithCO, import('svelte').Snippet | string>} Cells
	 */

	/**
	 * @typedef {object} Props
	 * @property {number} columns Number of columns in the matrix
	 * @property {'()' | '[]' | '{}'} [brackets] Type of brackets to use; defaults to ()
	 * @property {string} [height] Annotate along the height of the matrix with 90° text
	 * @property {string} [width] Annotate along the width of the matrix with text
	 */

	/** @type {Props & Cells} */
	const { columns, brackets = '()', height, width, ...coordinates } = $props();

	// Chunk coordinates into 2D array, with subarrays of length `columns`
	const rows = $derived(
		Object.entries(coordinates).reduce((acc, [name, snip], index) => {
			if (index % columns === 0) acc.push([]);
			acc[acc.length - 1].push({ name, snip });
			return acc;
		}, /** @type {{ name: string, snip: import('svelte').Snippet | string }[][]} */ ([]))
	);
</script>

{#if height}
	<mmultiscripts>
		<ms style="rotate: -90deg; font-size: 0.65em; margin-right: -0.75em;">{height}</ms>
		<mprescripts />
		<Matrix {columns} {brackets} {width} {...coordinates} />
	</mmultiscripts>
{:else if width}
	<mover>
		<Matrix {columns} {brackets} {...coordinates} />
		<ms>{width}</ms>
	</mover>
{:else}
	<mrow>
		<mo fence="true" form="prefix">{brackets[0]}</mo>
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
		<mo fence="true" form="postfix">{brackets[1]}</mo>
	</mrow>
{/if}
