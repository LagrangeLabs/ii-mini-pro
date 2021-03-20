import services from '@/services/index';
import { IState, IReducers, IEffects } from './interface';

const MockModel: IModel<IState, IReducers, IEffects> = {
  namespace: 'mock',
  state: {
    scrollList: [
      {
        id: '',
        value: '1',
      },
      {
        id: '',
        value: '2',
      },
      {
        id: '',
        value: '3',
      },
      {
        id: '',
        value: '4',
      },
      {
        id: '',
        value: '5',
      },
      {
        id: '',
        value: '6',
      },
    ],
  },

  reducers: {
    save(state, { payload }: ISave<IState>) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      const { data = {} } = yield call(services.fetchList, payload);
      const { records = [] } = data;

      yield put({ type: 'save', payload: { scrollList: records } });
      return data;
    },
  },
};

export default MockModel;
