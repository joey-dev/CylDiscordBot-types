interface table {
    user_id: number;
    server_id: number;
}

interface optional {
    user_id?: number;
    server_id?: number;
}

export default interface IUserServer {
    table: table,
    optional: optional,
}
