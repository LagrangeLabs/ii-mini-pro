import init from './mock';
import { IState as mockState } from './mock/interface';

export default [init];

export interface connectState {
  mock: mockState
}
