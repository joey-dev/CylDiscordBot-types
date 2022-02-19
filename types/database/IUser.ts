interface table {
    id?: number;
    username: string;
    token: string;
    user_id: string;
    token_expires_in: string;
    refresh_token: string;
}

interface optional {
    id?: number;
    username?: string;
    token?: string;
    user_id?: string;
    token_expires_in?: string;
    refresh_token?: string;
}

export default interface IUser {
    table: table,
    optional: optional,
}
