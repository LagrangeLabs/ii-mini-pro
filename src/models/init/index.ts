import { IState, IInitModel } from './interface';

const InitModel: IInitModel = {
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
