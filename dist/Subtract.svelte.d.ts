export default Subtract;
type Subtract = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Omit<Props, "operator">>): void;
};
declare const Subtract: import("svelte").Component<Omit<import("./Operation.svelte").Props, "operator">, {}, "">;
