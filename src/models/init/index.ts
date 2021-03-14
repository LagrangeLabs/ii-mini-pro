import { IState, IReducers, IEffects } from './interface';

const InitModel: IModel<IState, IReducers, IEffects> = {
  namespace: 'init',
  state: {},

  reducers: {
    save(state, { payload }: ISave<IState>) {
      return { ...state, ...payload };
    },
  },

  effects: {},
};

export default InitModel;
