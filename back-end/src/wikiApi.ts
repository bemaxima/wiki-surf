import { get } from "./httpRequest";

const WIKI_URL = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&formatversion=2';

export function getArticle(page: string) {
  return new Promise<ParsedApiResponse<Article> | ErrorResponse>(
    resolve => {
      get<ParsedApiResponse<Article> | ErrorResponse>(`${WIKI_URL}&page=${page}`)
        .then(resolve)
        .catch(
          () => resolve({
            error: {
              code: 'Internal Server Error',
              docref: '',
              info: 'Internal Server Error'
            },
            servedby: 'localserver'
          })
        );
    }
  );
}