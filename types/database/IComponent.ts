import { ILanguage as CylILanguage } from '@cylbot/cyldiscordbotlanguage';


interface table {
    id?: number;
    plugin_id: number;
    type_id: number;
    name: keyof CylILanguage;
    data: string;
    order_id: number;
}

interface optional {
    id?: number;
    plugin_id?: number;
    type_id?: number;
    name?: keyof CylILanguage;
    data?: string;
    order_id?: number;
}

interface data {
    dataRow: dataRow[],
}

interface dataRow {
    name: string,
}

export default interface IComponent {
    table: table,
    optional: optional,
    data: data
}
