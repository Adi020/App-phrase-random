import { useCallback, useEffect, useRef, useState } from 'react';
import { GetInfo } from '../models/getInfoServices.model';
import { callback, FetchCallback } from '../models/useApi.model';

type CustomError = Error | null;
type IsLoad = boolean;

type UseApiResult<T, P extends unknown[]> = [
  [data: T, loading: IsLoad, error: CustomError],
  [
    fetch: (...props: FetchCallback<T, P>) => (reason?: unknown) => void,
    setDataState: (param?: T) => void
  ]
];

type UseApiOptions<T, P extends unknown[]> = {
  defaultValue?: T | object | number | boolean | string | null;
  params?: FetchCallback<T, P>;
};

export const useApi = <T, P extends unknown[]>(
  fnPromise: GetInfo<T, P>,
  options?: UseApiOptions<T, P>
): UseApiResult<T, P> => {
  const defaultValue = options?.defaultValue || null;
  const [data, setData] = useState<T>(defaultValue as T);
  const [loading, setLoading] = useState<IsLoad>(false);
  const [error, setError] = useState<CustomError>(null);

  const ctrlRef = useRef<AbortController | null>(null);
  const paramsRef = useRef(options?.params);

  const setDataState = (newData: T = defaultValue as T): void => {
    setData(newData);
  };

  const fetch = useCallback(
    (...props: FetchCallback<T, P>) => {
      const callback = props[props.length - 1] instanceof Function && (props.pop() as callback<T>);
      const { call, controller } = fnPromise(...(props as P));
      setLoading(true);

      if (ctrlRef.current) ctrlRef.current.abort();
      ctrlRef.current = controller;

      call
        .then((response) => {
          if (callback) callback(response.data);
          setData(response.data);
        })
        .catch((err) => setError(err as Error))
        .finally(() => {
          setLoading(false);
          if (ctrlRef.current === controller) ctrlRef.current = null;
        });

      return () => controller.abort();
    },
    [fnPromise]
  );

  useEffect(() => {
    if (paramsRef.current) {
      fetch(...paramsRef.current);
    }
  }, [fetch, paramsRef]);

  return [
    [data, loading, error],
    [fetch, setDataState],
  ];
};
