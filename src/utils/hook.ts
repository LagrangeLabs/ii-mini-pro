import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'react-redux';

interface IPre {
  [key: string]: <T, R extends any>(params: T) => Promise<R>;
}

// Dispatch生成器
export const useGenereateDispatch = (
  namespace: string,
  apis: { [key: string]: string },
) => {
  const dispatch: Dispatch = useDispatch();

  return Object.keys(apis).reduce((pre: IPre, key) => {
    pre[key] = <T, R>(params: T): Promise<R> =>
      dispatch({ type: `${namespace}/${apis[key]}`, payload: params || {} });
    return pre;
  }, {});
};

// useEffect 防抖
export const useEffectDebounce = (
  fn: Function,
  deep: any[],
  interval?: number,
) => {
  return useEffect(() => {
    const timer = setTimeout(fn, interval || 500);
    return () => clearTimeout(timer);
  }, deep);
};

// 函数防抖
export const useDebounce = (fn: Function, interval: number) => {
  let timer: any;
  const gapTime = interval || 1000;
  return function (...rest: any[]) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...rest);
    }, gapTime);
  };
};
