import { Reducer, Effect } from 'react-redux';

interface IScrollList {
  id: string
  value: string
}

export interface IState {
  scrollList: IScrollList[]
}

export interface IReducers {
  save: Reducer;
}

export interface IEffects {
  fetchList: Effect
}
