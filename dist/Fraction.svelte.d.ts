export default Fraction;
type Fraction = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Fraction: import("svelte").Component<{
    numerator: import("svelte").Snippet | string;
    denominator: import("svelte").Snippet | string;
}, {}, "">;
type Props = {
    numerator: import("svelte").Snippet | string;
    denominator: import("svelte").Snippet | string;
};
