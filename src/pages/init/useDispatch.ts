import { useGenereateDispatch } from '@/utils/hook';

const InitconfigDispatch = {
  initTitle: 'initTitle',
};

const useDispatchInit = () => {
  return useGenereateDispatch('init', InitconfigDispatch);
};

export default useDispatchInit;
