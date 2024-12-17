import laodAbort from '../utils/loadAbort';
import { PhrasesResponse } from '../models/phrases.model';
import { phrasesAxios } from '../utils/configAxios';
import { GetInfo, PhraseParams } from '../models/getInfoServices.model';

export const getPhrases: GetInfo<PhrasesResponse, PhraseParams> = (query?) => {
  const controller = laodAbort();
  return {
    controller,
    call: phrasesAxios.get<PhrasesResponse>('phrases', {
      signal: controller.signal,
      params: { ...query },
    }),
  };
};
