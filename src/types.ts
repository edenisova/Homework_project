export type TextObject = {
  type?: string;
  language?: string;
  text?: string;
};

export type Url = {
  type?: string;
  url?: string;
};

export type SeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type ComicDate = {
  type?: string;
  date?: Date;
};

export type ComicPrice = {
  type?: string;
  price?: number;
};

export type Image = {
  path?: string;
  extension?: string;
};

export type CreatorSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type CharacterSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type CharacterList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<CharacterSummary>;
};

export type CreatorList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<CreatorSummary>;
};

export type StorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

export type StoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<StorySummary>;
};

export type EventSummary = {
  resourceURI?: string;
  name?: string;
};

export type EventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<EventSummary>;
};

export type Comics = {
  id: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: Array<TextObject>;
  resourceURI?: string;
  urls?: Array<Url>;
  series?: SeriesSummary;
  variants?: Array<SeriesSummary>;
  collections?: Array<SeriesSummary>;
  collectedIssues?: Array<SeriesSummary>;
  dates?: Array<ComicDate>;
  prices?: Array<ComicPrice>;
  thumbnail?: Image;
  images?: Array<Image>;
  creators?: CreatorList;
  characters?: CharacterList;
  stories?: StoryList;
  events?: EventList;
};

export type BookStatus = {
  id: number;
  status: string;
};

export type SeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<SeriesSummary>;
};

export type ComicSummary = {
  resourceURI?: string;
  name?: string;
};

export type ComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<ComicSummary>;
};

export type Character = {
  id: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Array<Url>;
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
};

export interface ReadComics extends Comics {
  status: string;
  isLiked: boolean;
  isDisliked: boolean;
}

export type AppState = {
  books: Array<Comics>;
  readComics: Array<ReadComics>;
  comic?: ReadComics;
  isLoading: boolean;
  filterName: string;
  filterStatus: string;
};
