require('dotenv').config();
import axios from 'axios';

export class AlgoliaSearch {
  private _searchApi = axios.create({
    headers: {
      'X-Algolia-API-Key': process.env.ALGOLIA_API_KEY,
      'X-Algolia-Application-Id': process.env.ALGOLIA_APP_ID,
    },
  });

  public async search(terms: string) {
    const response = await this._searchApi.get<{ hits: any[] }>(
      `https://0h4smabbsg-dsn.algolia.net/1/indexes/Post_production?query=${terms}`
    );
    return response.data.hits;
  }
}
