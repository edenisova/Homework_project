import axios, { AxiosResponse } from "axios";

const publicApiKey = '24b4757a0cabb626ac218e57d21b1043';
const hash = 'a81a1aac1b14fc64f848e2fd61db9b20';
const marvelUrl = 'http://gateway.marvel.com';

export const getBooksFromLibrary = async () => {
  const response = await axios.get(
    `${marvelUrl}/v1/public/comics?ts=1&apikey=${publicApiKey}&hash=${hash}&limit=100&offset=100&`
  );
  return response;
};

export const getComicsbyId = async (comicsId: number) => {
  const response = await axios.get(
    `${marvelUrl}/v1/public/comics/${comicsId}?ts=1&apikey=${publicApiKey}&hash=${hash}`
  );
  return response;
};

export const getCharactersOfComic = async (comicsId?: number) => {
  const response = await axios.get(
    `${marvelUrl}/v1/public/comics/${comicsId}/characters?ts=1&apikey=${publicApiKey}&hash=${hash}`
  );
  return response;
};
