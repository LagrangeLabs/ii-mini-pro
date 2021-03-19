import { useGenereateDispatch } from '@/utils/hook';

const HomeConfigDispatch = {};

const useDispatchInit = () => {
  return useGenereateDispatch('home', HomeConfigDispatch);
};

export default useDispatchInit;
