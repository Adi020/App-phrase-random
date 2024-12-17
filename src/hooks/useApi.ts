import { useCallback, useEffect, useRef, useState } from 'react';
import { GetInfo } from '../models/getInfoServices.model';
import { CallbackFetch, FetchCallback } from '../models/useApi.model';

type CustomError = Error | null;
type IsLoad = boolean;
type Data<T, O> = O | T;

type UseApiResult<T, P extends unknown[], O> = [
  [data: O, loading: IsLoad, error: CustomError],
  [
    fetch: (...props: FetchCallback<T, P>) => (reason?: unknown) => void,
    setDataState: (param?: T) => void
  ]
];

type UseApiOptions<T, P extends unknown[]> = {
  defaultValue?: T | object | number | boolean | string | null;
  params?: FetchCallback<T, P>;
};

export const useApi = <T, P extends unknown[], O = T>(
  fnPromise: GetInfo<T, P>,
  options?: UseApiOptions<T, P>
): UseApiResult<T, P, O> => {
  const defaultValue = options?.defaultValue || null;
  const [data, setData] = useState<O>(defaultValue as O);
  const [loading, setLoading] = useState<IsLoad>(false);
  const [error, setError] = useState<CustomError>(null);

  const ctrlRef = useRef<AbortController | null>(null);
  const paramsRef = useRef(options?.params);

  const setDataState = (newData: O = defaultValue as O): void => {
    setData(newData);
  };

  const fetch = useCallback(
    (...props: FetchCallback<T, P>) => {
      const callback = props.length > fnPromise.length && (props.pop() as CallbackFetch<T>);
      const { call, controller } = fnPromise(...(props as P));
      setLoading(true);

      if (ctrlRef.current) ctrlRef.current.abort();
      ctrlRef.current = controller;

      call
        .then(({ data }) => {
          if (callback) return callback(data);
          setData(data);
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
