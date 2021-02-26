import { IState, IReducers, IEffects } from './interface';

const InitModel: IModel<IState, IReducers, IEffects> = {
  namespace: 'init',
  state: {
    title: '',
  },

  reducers: {
    save(state, { payload }: ISave<IState>) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *initTitle({ payload }, { put }) {
      return yield put({ type: 'save', payload });
    },
  },
};

export default InitModel;
