import mockApi from './mock';
import IMockApiApis from './mock/interface';

interface IApis extends IMockApiApis {}

const APIS: IApis = {
  ...mockApi,
};

export default APIS;
