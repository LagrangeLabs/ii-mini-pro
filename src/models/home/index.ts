import { IState, IReducers, IEffects } from './interface';

const HomeModel: IModel<IState, IReducers, IEffects> = {
  namespace: 'home',
  state: {},

  reducers: {
    save(state, { payload }: ISave<IState>) {
      return { ...state, ...payload };
    },
  },

  effects: {},
};

export default HomeModel;
