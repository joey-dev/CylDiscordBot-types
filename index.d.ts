import IDatabase from './types/IDatabase';
export interface IReturnValue<TableInterface> {
    results: TableInterface[];
}
export interface IWhereItem {
    key: string;
    value: string | number;
}
export interface ITypes {
    database: IDatabase;
}
