# svelte-mathml

## Installation

```
bun add svelte-mathml # or pnpm, npm, yarn, etc
```

## Usage

```svelte
<script>
  import * as Math from 'svelte-mathml';
</script>

<!-- Compose trees -->
<Math.Line>
  <Math.Operation operator="*">
    {#snippet lhs()}
      <Math.Wrap with="()">
        <!-- Alias of <Math.Operation operator="+" /> -->
        <Math.Add>
          {#snippet lhs()}
            <Math.Scripts>
              <!-- Atom = <mn> for numbers and <mi> for the rest -->
              <Math.Atom expr="2" />
              {#snippet sup()}
                <Math.Atom expr="4" />
              {/snippet}
              {#snippet sub()}
                <!-- When the expression is a Math.Atom, you can use strings instead -->
                <Math.Scripts base="a" sub="b" />
              {/snippet}
            </Math.Script>
          {/snippet}
          {#snippet rhs()}
            <Math.Atom expr="3" />
          {/snippet}
        </Math.Add>
      </Math.Wrap>
    {/snippet}
    {#snippet rhs()}
      <Math.Fraction numerator="2" denominator="4" />
    {/snippet}
  </Math.Operation>
</Math.Line>

<!-- Or parse (simple) expressions -->
<Math.Parse expr="(2_(a_b)^4+3)*2/4" />
```

## Example

See [source code](/src/routes/+page.svelte) and [result](https://gwennlbh.github.io/svelte-mathml)
