interface table {
    id?: number;
    plugin_id: number;
    server_id: number;
    turned_on: number;
}
interface optional {
    id?: number;
    plugin_id?: number;
    server_id?: number;
    turned_on?: number;
}
export default interface IPluginSettings {
    table: table;
    optional: optional;
}
export {};
