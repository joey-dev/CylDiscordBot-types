import IChannel from './database/IChannel';
import IComponent from './database/IComponent';
import IComponentSettings from './database/IComponentSettings';
import IComponentType from './database/IComponentType';
import IEmote from './database/IEmote';
import ILanguage from './database/ILanguage';
import IModule from './database/IModule';
import IPlugin from './database/IPlugin';
import IPluginSettings from './database/IPluginSettings';
import IPluginType from './database/IPluginType';
import IReturnValue from './database/IReturnValue';
import IRole from './database/IRole';
import IServer from './database/IServer';
import ITask from './database/ITask';
import IUser from './database/IUser';
import IUserServer from './database/IUserServer';


export default interface IDatabase {
    channel: IChannel,
    component: IComponent,
    componentSettings: IComponentSettings,
    componentType: IComponentType,
    emote: IEmote,
    language: ILanguage,
    module: IModule,
    plugin: IPlugin,
    pluginSettings: IPluginSettings,
    pluginType: IPluginType,
    returnValue: IReturnValue,
    role: IRole,
    server: IServer,
    task: ITask,
    user: IUser,
    userServer: IUserServer,
}