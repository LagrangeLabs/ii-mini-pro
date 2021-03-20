import { useGenereateDispatch } from '@/utils/hook';

const MockConfigDispatch = {
  fetchList: 'fetchList',
};

const useDispatchMock = () => {
  return useGenereateDispatch('mock', MockConfigDispatch);
};

export default useDispatchMock;
