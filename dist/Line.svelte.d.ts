export default Line;
type Line = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Line: import("svelte").Component<{
    children: import("svelte").Snippet;
}, {}, "">;
type $$ComponentProps = {
    children: import("svelte").Snippet;
};
