<script>
	import Atom from './Atom.svelte';
	import Line from './Line.svelte';

	/** @type {Record<string, import('svelte').Snippet | string>} */
	const { ...coordinates } = $props();
</script>

<math display="block" class="tml-display" style="display:block math;">
	<mrow>
		<mo fence="true" form="prefix">(</mo>
		<mtable>
			{#each Object.values(coordinates) as coordinate}
				<mtr>
					<mtd style="padding-left:0em;padding-right:0em;">
						<Line bare>
							{#if typeof coordinate === 'string'}
								<Atom expr={coordinate} />
							{:else}
								{@render coordinate()}
							{/if}
						</Line>
					</mtd>
				</mtr>
			{/each}
		</mtable>
		<mo fence="true" form="postfix">)</mo>
	</mrow>
</math>
