export default Atom;
type Atom = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Atom: import("svelte").Component<{
    expr: string;
}, {}, "">;
type Props = {
    expr: string;
};
