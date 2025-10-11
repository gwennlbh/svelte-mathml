export default Add;
type Add = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Omit<Props, "operator">>): void;
};
declare const Add: import("svelte").Component<Omit<import("./Operation.svelte").Props, "operator">, {}, "">;
