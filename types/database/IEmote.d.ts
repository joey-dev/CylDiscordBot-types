interface table {
    id?: number;
    server_id: number;
    name: string;
    emote_id: string;
}
interface optional {
    id?: number;
    server_id?: number;
    name?: string;
    emote_id?: string;
}
export default interface IEmote {
    table: table;
    optional: optional;
}
export {};
