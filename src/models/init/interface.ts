import { Reducer, Effect } from 'react-redux';

export interface IState {
  title: string
}

export interface IReducers {
  save: Reducer;
}

export interface IEffects {
  initTitle: Effect /** 相关effect */;
}

export interface IInitModel {
  namespace: 'init';
  state: IState;
  reducers: IReducers;
  effects: IEffects;
}
