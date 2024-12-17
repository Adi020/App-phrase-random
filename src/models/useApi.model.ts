import { AxiosResponse } from 'axios';

export interface UseApiCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller: AbortController;
}

export type callback<T> = (data: T) => void;
export type FetchCallback<T, P extends unknown[]> =
  | [callback?: callback<T>]
  | [...P, callback?: callback<T>]
  | P;
