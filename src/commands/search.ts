import { Command } from '@oclif/command';
import chalk from 'chalk';
import { distanceInWordsToNow } from 'date-fns';

import { AlgoliaSearch } from '../adaptors/algolia_search';

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
    const { args } = this.parse(Search);
    const results = await this._search.search(args.terms);
    // this.log(chalk.blue(results.data));
    for (const result of results) {
      this.log(chalk.cyanBright.bold('>>', result.name, '<<'));
      this.log(chalk.grey(result.tagline));
      this.log(
        chalk.cyan(
          distanceInWordsToNow(new Date(result.created_at), {
            addSuffix: true,
          }),
          '|',
          '👍 ',
          result.vote_count
        )
      );
      this.log(
        chalk.grey(result.product_links[0].store_name + ':') +
          ' ' +
          chalk.blueBright.underline(result.product_links[0].url)
      );
      this.log(chalk.cyanBright('------------------------'));
    }
  }
}
