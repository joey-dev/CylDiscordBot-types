interface table {
    id?: number;
    server_id: number;
    task: string;
    complete_on: string;
}

interface optional {
    id?: number;
    server_id?: number;
    task?: string;
    complete_on?: string;
}

export default interface ITask {
    table: table,
    optional: optional,
}
