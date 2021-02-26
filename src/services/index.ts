import initApi from './init';
import IInitApis from './init/interface';

interface IApis extends IInitApis {}

const APIS: IApis = {
  ...initApi,
};

export default APIS;
