interface table {
    id?: number;
    component_id: number;
    server_id: number;
    turned_on: number;
    data: string;
}

interface optional {
    id?: number;
    component_id?: number;
    server_id?: number;
    turned_on?: number;
    data?: string;
}

interface data {
    dataRow: dataRow[],
}

interface dataRow {
    name: string,
    turned_on: boolean,
    data: rowDataRoles|rowDataChannels|rowDataDeleteReply,
}

interface rowDataRoles {
    roles: rowDataRolesRoles[]
}

interface rowDataRolesRoles {
    id: string,
    name: string,
}

interface rowDataChannels {
    roles: rowDataChannelsChannels[]
}

interface rowDataChannelsChannels {
    id: string,
    name: string,
}

interface rowDataDeleteReply {
    roles: rowDataDeleteReplySecond[]
}

interface rowDataDeleteReplySecond {
    second: string,
}

export default interface IComponentSettings {
    table: table,
    optional: optional,
    data: data
}
