export interface Author {
  id: string;
  phrase: string;
}

export interface Phrase {
  id: string;
  phrase: string;
  author: Author;
}

export interface PhrasesResponse {
  phrases: Phrase[];
  pages: number;
  currentPage: string;
  status: string;
  message: string;
}
