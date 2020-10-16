import { normalizeArticle } from "./utils";
import { getArticle } from "./wikiApi";

export default {
  Query: {
    article: async (parent: unknown, { page }: { page: string }): Promise<NormalizedArticle | null> => {
      const response = await getArticle(page);
      if ((<ErrorResponse>response).error) {
        return null; // TODO: Define an error object and pass to the client.
      }
      else {
        return normalizeArticle((<ParsedApiResponse<Article>>response).parse);
      }
    }
  },
};