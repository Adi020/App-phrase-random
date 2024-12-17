import { UseApiCall } from './useApi.model';

export type GetInfo<T, P extends unknown[]> = (...query: P) => UseApiCall<T>;

export interface Query {
  page?: string;
  limit?: number;
}

export type PhraseParams = [Query?];
