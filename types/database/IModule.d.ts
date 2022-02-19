import { ILanguage as CylILanguage } from '@cylbot/cyldiscordbotlanguage';
interface table {
    id?: number;
    name: keyof CylILanguage;
    order_id: number;
}
interface optional {
    id?: number;
    name?: keyof CylILanguage;
    order_id?: number;
}
export default interface IModule {
    table: table;
    optional: optional;
}
export {};
