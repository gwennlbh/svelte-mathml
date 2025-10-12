export default Matrix;
type Matrix = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & Record<StringNotStartingWithCO, string | Snippet<[]>>>): void;
};
declare const Matrix: import("svelte").Component<{
    /**
     * Number of columns in the matrix
     */
    columns: number;
    /**
     * Type of brackets to use; defaults to ()
     */
    brackets?: "()" | "[]" | "{}" | undefined;
    /**
     * Annotate along the height of the matrix with 90° text
     */
    height?: string | undefined;
    /**
     * Annotate along the width of the matrix with text
     */
    width?: string | undefined;
} & Record<`${number}${string}` | `a${string}` | `b${string}` | `d${string}` | `e${string}` | `f${string}` | `g${string}` | `h${string}` | `i${string}` | `j${string}` | `k${string}` | `l${string}` | `m${string}` | `n${string}` | `o${string}` | `p${string}` | `q${string}` | `r${string}` | `s${string}` | `t${string}` | `u${string}` | `v${string}` | `w${string}` | `x${string}` | `y${string}` | `z${string}` | `c${number}${string}` | `ca${string}` | `cb${string}` | `cd${string}` | `ce${string}` | `cf${string}` | `cg${string}` | `ch${string}` | `ci${string}` | `cj${string}` | `ck${string}` | `cl${string}` | `cm${string}` | `cn${string}` | `cp${string}` | `cq${string}` | `cr${string}` | `cs${string}` | `ct${string}` | `cu${string}` | `cv${string}` | `cw${string}` | `cx${string}` | `cy${string}` | `cz${string}` | `cc${string}`, string | import("svelte").Snippet<[]>>, {}, "">;
import Matrix from './Matrix.svelte';
type Props = {
    /**
     * Number of columns in the matrix
     */
    columns: number;
    /**
     * Type of brackets to use; defaults to ()
     */
    brackets?: "()" | "[]" | "{}" | undefined;
    /**
     * Annotate along the height of the matrix with 90° text
     */
    height?: string | undefined;
    /**
     * Annotate along the width of the matrix with text
     */
    width?: string | undefined;
};
type StringNotStartingWithCO = (`${number}${string}` | `a${string}` | `b${string}` | `d${string}` | `e${string}` | `f${string}` | `g${string}` | `h${string}` | `i${string}` | `j${string}` | `k${string}` | `l${string}` | `m${string}` | `n${string}` | `o${string}` | `p${string}` | `q${string}` | `r${string}` | `s${string}` | `t${string}` | `u${string}` | `v${string}` | `w${string}` | `x${string}` | `y${string}` | `z${string}`) | (`c${number}${string}` | `ca${string}` | `cb${string}` | `cd${string}` | `ce${string}` | `cf${string}` | `cg${string}` | `ch${string}` | `ci${string}` | `cj${string}` | `ck${string}` | `cl${string}` | `cm${string}` | `cn${string}` | `cp${string}` | `cq${string}` | `cr${string}` | `cs${string}` | `ct${string}` | `cu${string}` | `cv${string}` | `cw${string}` | `cx${string}` | `cy${string}` | `cz${string}` | `cc${string}`);
