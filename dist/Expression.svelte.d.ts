export default Expression;
type Expression = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Expression: import("svelte").Component<{
    expr: string;
    bare?: boolean;
}, {}, "">;
import Expression from './Expression.svelte';
type $$ComponentProps = {
    expr: string;
    bare?: boolean;
};
