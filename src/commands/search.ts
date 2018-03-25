import { Command } from '@oclif/command';
import { distanceInWordsToNow } from 'date-fns';

import { AlgoliaSearch } from '../adaptors/algolia_search';
import { colors } from '../utils/colors';
import { spinner } from '../utils/spinner';
export default class Search extends Command {
  static description = 'Search for products';

  static examples = [
    `$ phcli search awesome`,
    `$ phcli search "super awesome products"`,
  ];

  static args = [
    {
      name: 'terms',
      description: `You can probably imagine how it works. If you need to use multiple words, please enclose them in quotes.`,
      required: true,
    },
  ];

  private _search = new AlgoliaSearch();

  async run() {
    spinner.start();
    const { args } = this.parse(Search);
    const results = await this._search.search(args.terms);
    spinner.stop();
    for (const result of results) {
      this.log(colors.first.bold('>>', result.name, '<<'));
      this.log(colors.second(result.tagline));
      this.log(
        colors.third(
          distanceInWordsToNow(new Date(result.created_at), {
            addSuffix: true,
          }),
          '|',
          '👍 ',
          result.vote_count
        )
      );
      this.log(
        colors.second(result.product_links[0].store_name + ':') +
          ' ' +
          colors.fourth.underline(result.product_links[0].url)
      );
      this.log(colors.fifth('------------------------'));
    }
  }
}
