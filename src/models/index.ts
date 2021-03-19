import init from './home';
import { IState as initState } from './home/interface';

export default [init];

export interface connectState {
  home: initState
}
