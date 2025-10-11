export default Scripts;
type Scripts = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Scripts: import("svelte").Component<{
    base?: string | undefined;
    children?: import("svelte").Snippet<[]> | undefined;
    sub?: string | import("svelte").Snippet<[]> | undefined;
    sup?: string | import("svelte").Snippet<[]> | undefined;
}, {}, "">;
type Props = {
    base?: string | undefined;
    children?: import("svelte").Snippet<[]> | undefined;
    sub?: string | import("svelte").Snippet<[]> | undefined;
    sup?: string | import("svelte").Snippet<[]> | undefined;
};
