import { AxiosResponse } from 'axios';

export interface UseApiCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller: AbortController;
}

export type CallbackFetch<T> = (data: T) => void;
export type FetchCallback<T, P extends unknown[]> = [...P, callback?: CallbackFetch<T>] | P;
