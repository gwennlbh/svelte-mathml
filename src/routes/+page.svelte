<script lang="ts">
	import * as Math from '$lib/index.js';
</script>

<svelte:head>
	<link rel="stylesheet" href="/svelte-mathml/import.css" />
</svelte:head>

<Math.Parse expr="2*e_x+(e_y-w/2)" />

<Math.Line>
	<Math.Matrix columns={2}>
		{#snippet a1()}
			<Math.Vector x="2" y="3" />
		{/snippet}
		{#snippet a2()}
			<Math.Vector x="5" y="7" />
		{/snippet}
		{#snippet b1()}
			<Math.Vector x="11" y="13" />
		{/snippet}
		{#snippet b2()}
			<Math.Vector x="17" y="19" />
		{/snippet}
		{#snippet c1()}
			<Math.Vector x="23" y="29" />
		{/snippet}
		{#snippet c2()}
			<Math.Vector x="31" y="37" />
		{/snippet}
	</Math.Matrix>
</Math.Line>

<p>
	In <Math.Parse expr="ℝ^3" />, the identity matrix is
	<Math.Line>
		<Math.Operation operator="=" lhs="I">
			{#snippet rhs()}
				<Math.Matrix
					brackets="[]"
					columns={3}
					height="Input"
					width="Output"
					a1="1"
					a2="0"
					a3="0"
					b1="0"
					b2="1"
					b3="0"
					c1="0"
					c2="0"
					c3="1"
				/>
			{/snippet}
		</Math.Operation>
	</Math.Line>.
</p>

<style>
	:global(math) {
		font-family: 'Latin Modern Math';
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		font-size: 2rem;
		gap: 3em;
		align-items: center;
		justify-content: center;
		height: 100vh;
		margin: 0;
	}

	.annotation {
		font-size: 0.65em;
		margin-right: -0.75em;
	}
</style>
