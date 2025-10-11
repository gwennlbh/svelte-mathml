<script>
	import Atom from './Atom.svelte';
	import Expression from './Expression.svelte';
	import Fraction from './Fraction.svelte';
	import Line from './Line.svelte';
	import Operation from './Operation.svelte';
	import Scripts from './Scripts.svelte';
	import Wrap from './Wrap.svelte';

	/** @type {{ expr: string, bare?: boolean }} */
	const { expr, bare = false } = $props();

	const ATOM = /^([\p{Letter}0-9]+)$/u;

	function isWrappedWith(expr, start, end) {
		return expr.startsWith(start) && expr.endsWith(end);
	}

	const wrapped = $derived.by(() => {
		if (!expr) return null;

		if (isWrappedWith(expr, '(', ')'))
			return { with: /** @type {const} */ ('()'), content: expr.slice(1, -1) };

		if (isWrappedWith(expr, '[', ']'))
			return { with: /** @type {const} */ ('[]'), content: expr.slice(1, -1) };

		if (isWrappedWith(expr, '{', '}'))
			return { with: /** @type {const} */ ('{}'), content: expr.slice(1, -1) };

		return null;
	});

	const scripts = $derived.by(() => {
		if (!expr) return null;

		if (!expr.includes('_') && !expr.includes('^')) {
			return { base: expr, subscript: '', superscript: '' };
		}

		let base = '';
		let subscript = '';
		let superscript = '';

		let parensDepth = 0;
		let braceDepth = 0;
		let bracketDepth = 0;

		let insideSubscript = false;
		let insideSuperscript = false;

		let i = -1;
		for (const char of expr) {
			i++;

			if (char === '}') braceDepth--;
			else if (char === '{') braceDepth++;
			else if (char === ']') bracketDepth--;
			else if (char === '[') bracketDepth++;
			else if (char === ')') parensDepth--;
			else if (char === '(') parensDepth++;

			if (braceDepth < 0 || bracketDepth < 0 || parensDepth < 0) {
				break; // Unmatched closing bracket, stop parsing
			}

			if (braceDepth === 0 && bracketDepth === 0 && parensDepth === 0) {
				if (char === '_') {
					insideSubscript = true;
					insideSuperscript = false;
					continue;
				} else if (char === '^') {
					insideSuperscript = true;
					insideSubscript = false;
					continue;
				}
			}

			if (insideSubscript) {
				subscript += char;
			} else if (insideSuperscript) {
				superscript += char;
			} else {
				base += char;
			}
		}

		return { base, subscript, superscript };
	});

	const operation = $derived.by(() => {
		if (!expr) return null;

		const operators = /** @type {const} */ (['+', '-', '*', '/', '=']);

		if (!operators.some((op) => expr.includes(op))) {
			return null;
		}

		let parensDepth = 0;
		let braceDepth = 0;
		let bracketDepth = 0;

		let i = -1;
		for (const char of expr) {
			i++;

			if (char === '}') braceDepth--;
			else if (char === '{') braceDepth++;
			else if (char === ']') bracketDepth--;
			else if (char === '[') bracketDepth++;
			else if (char === ')') parensDepth--;
			else if (char === '(') parensDepth++;

			if (braceDepth < 0 || bracketDepth < 0 || parensDepth < 0) {
				break; // Unmatched closing bracket, stop parsing
			}

			if (braceDepth === 0 && bracketDepth === 0 && parensDepth === 0) {
				// @ts-expect-error
				if (operators.includes(char)) {
					return {
						left: expr.slice(0, i).trim(),
						operator: /** @type {typeof operators[number]} */ (char),
						right: expr.slice(i + 1).trim()
					};
				}
			}
		}

		return null; // No top-level operator found
	});
</script>

{#if !expr}
	<!-- empty -->
{:else if !bare}
	<math>
		<Line>
			<Expression bare {expr} />
		</Line>
	</math>
{:else if ATOM.test(expr)}
	<Atom {expr} />
{:else if wrapped}
	<Wrap {...wrapped}>
		<Expression bare expr={wrapped.content} />
	</Wrap>
{:else if operation}
	{@const { left, operator, right } = operation}
	{#if operator === '/'}
		<Fraction>
			{#snippet numerator()}
				<Expression bare expr={left} />
			{/snippet}
			{#snippet denominator()}
				<Expression bare expr={right} />
			{/snippet}
		</Fraction>
	{:else}
		<Operation {operator}>
			{#snippet lhs()}
				<Expression bare expr={left} />
			{/snippet}
			{#snippet rhs()}
				<Expression bare expr={right} />
			{/snippet}
		</Operation>
	{/if}
{:else if scripts}
	{@const { base, subscript, superscript } = scripts}
	{#if superscript && subscript}
		<Scripts>
			<Expression bare expr={base} />
			{#snippet sub()}
				<Expression bare expr={subscript} />
			{/snippet}
			{#snippet sup()}
				<Expression bare expr={superscript} />
			{/snippet}
		</Scripts>
	{:else if superscript}
		<Scripts>
			<Expression bare expr={base} />
			{#snippet sup()}
				<Expression bare expr={superscript} />
			{/snippet}
		</Scripts>
	{:else if subscript}
		<Scripts>
			<Expression bare expr={base} />
			{#snippet sub()}
				<Expression bare expr={subscript} />
			{/snippet}
		</Scripts>
	{/if}
{/if}
