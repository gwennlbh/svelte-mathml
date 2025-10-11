export default Operation;
export type Props = {
    operator: "+" | "-" | "/" | "*" | "=";
    lhs: import("svelte").Snippet | string;
    rhs: import("svelte").Snippet | string;
};
type Operation = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Operation: import("svelte").Component<Props, {}, "">;
