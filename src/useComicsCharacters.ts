import { useQuery } from 'react-query';

import {getCharactersOfComic} from './requests';

export const useComicsCharacters = (comicsId?: number) => {
    const {
      isLoading: isFirstHardLoading,
      data,
      isFetching,
    } = useQuery([comicsId], () => getCharactersOfComic(comicsId), {
      staleTime: 20000,
      retry: false,
      refetchOnWindowFocus: false,
    });
  
    return { data, isLoading: isFirstHardLoading || isFetching };
  };