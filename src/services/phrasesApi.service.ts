import laodAbort from '../utils/loadAbort';
import { phrasesAxios } from '../utils/configAxios';
import { Query } from '../models/getInfoServices.model';
import { UseApiCall } from '../models/useApi.model';

export const getPhrases = <T>(query?: Query): UseApiCall<T> => {
  const controller = laodAbort();
  return {
    controller,
    call: phrasesAxios.get<T>('phrases', {
      signal: controller.signal,
      params: { ...query },
    }),
  };
};
