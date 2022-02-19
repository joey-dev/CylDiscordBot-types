interface table {
    id?: number;
    language_id: number;
    server_id: string;
    name: string;
    command_prefix: string;
}

interface optional {
    id?: number;
    language_id?: number;
    server_id?: string;
    name?: string;
    command_prefix?: string;
}

export default interface IServer {
    table: table,
    optional: optional,
}
