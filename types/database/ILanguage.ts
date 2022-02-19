interface table {
    id?: number;
    name: string,
    small_name: string;
}

interface optional {
    id?: number;
    name?: string,
    small_name?: string;
}

export default interface ILanguage {
    table: table,
    optional: optional,
}
