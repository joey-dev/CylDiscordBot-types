import { ILanguage as CylILanguage } from '@cylbot/cyldiscordbotlanguage';


interface table {
    id?: number;
    module_id: number;
    type_id: number;
    name: keyof CylILanguage;
    order_id: number;
}

interface optional {
    id?: number;
    module_id?: number;
    type_id?: number;
    name?: keyof CylILanguage;
    order_id?: number;
}

export default interface IPlugin {
    table: table,
    optional: optional,
}
