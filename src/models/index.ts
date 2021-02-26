import init from './init';
import { IState as initState } from './init/interface';

export default [init];

export interface connectState {
  init: initState
}
