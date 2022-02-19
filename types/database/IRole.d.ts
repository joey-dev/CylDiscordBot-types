interface table {
    id?: number;
    server_id: number;
    name: string;
    role_id: string;
}
interface optional {
    id?: number;
    server_id?: number;
    name?: string;
    role_id?: string;
}
export default interface IRole {
    table: table;
    optional: optional;
}
export {};
