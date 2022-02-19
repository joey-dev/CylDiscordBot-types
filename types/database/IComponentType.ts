interface table {
    id?: number;
    name: string;
}

interface optional {
    id?: number;
    name?: string;
}

export default interface IComponentType {
    table: table,
    optional: optional,
}
