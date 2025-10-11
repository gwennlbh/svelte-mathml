export default Vector;
type Vector = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Record<string, Snippet<[]>>>): void;
};
declare const Vector: import("svelte").Component<Record<string, import("svelte").Snippet<[]>>, {}, "">;
