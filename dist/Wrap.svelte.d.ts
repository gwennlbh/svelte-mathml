export default Wrap;
type Wrap = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Wrap: import("svelte").Component<{
    children: import("svelte").Snippet;
    with: "()" | "[]" | "{}";
}, {}, "">;
type Props = {
    children: import("svelte").Snippet;
    with: "()" | "[]" | "{}";
};
