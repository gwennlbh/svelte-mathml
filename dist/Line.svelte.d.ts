export default Line;
type Line = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Line: import("svelte").Component<{
    children: import("svelte").Snippet;
    /**
     * If true, do not wrap in <math> tags
     */
    bare?: boolean | undefined;
}, {}, "">;
type Props = {
    children: import("svelte").Snippet;
    /**
     * If true, do not wrap in <math> tags
     */
    bare?: boolean | undefined;
};
