import example, { IState as exampleState } from './example';
export default [example];

export interface connectState {
  exampleState: exampleState;
}
