// tslint:disable-next-line:no-unused
import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { outputFileSync, readFile } from 'fs-extra';

export class OAuth {
  async getToken() {
    try {
      return readFile('./data/phtoken', 'utf-8');
      // tslint:disable-next-line:no-unused
    } catch (err) {
      const response = await axios.post(
        'https://api.producthunt.com/v1/oauth/token',
        {
          client_id: process.env.PH_API_KEY,
          client_secret: process.env.PH_API_SECRET,
          grant_type: 'client_credentials',
        }
      );
      outputFileSync('./data/phtoken', response.data.access_token);
      return response.data.access_token;
    }
  }
}

export class PHApi {
  private _http: AxiosInstance;

  constructor(token: string) {
    this._http = axios.create({
      baseURL: 'https://api.producthunt.com/v1/',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  get all() {
    return this._http.get<any>('posts/all', {
      params: {
        sort_by: 'votes_count',
        per_page: 10,
        'search[featured_day]': new Date().getDate(),
        'search[featured_month]': new Date().getMonth() + 1,
        'search[featured_year]': new Date().getFullYear(),
      },
    });
  }
}
