interface table {
    id?: number;
    server_id: number;
    name: string;
    channel_id: string;
}
interface optional {
    id?: number;
    server_id?: number;
    name?: string;
    channel_id?: string;
}
export default interface IChannel {
    table: table;
    optional: optional;
}
export {};
