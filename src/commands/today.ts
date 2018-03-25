import { Command } from '@oclif/command';
import chalk from 'chalk';
import { distanceInWordsToNow } from 'date-fns';

import { OAuth, PHApi } from '../adaptors/ph_api';

export default class Today extends Command {
  static description = "Get today's most popular";

  async run() {
    try {
      const token = await new OAuth().getToken();
      const api = new PHApi(token);
      const apiCall = await api.all;
      const posts = apiCall.data.posts;
      for (const post of posts) {
        const topics = post.topics.map((topic: any) => topic.name);
        this.log(chalk.cyanBright.bold('>>', post.name, '<<'));
        this.log(chalk.grey(post.tagline));
        this.log(
          chalk.cyan(
            distanceInWordsToNow(new Date(post.created_at), {
              addSuffix: true,
            }),
            '|',
            '👍 ',
            post.votes_count
          )
        );
        this.log(chalk.italic('Topics: ') + chalk.grey(topics.join(', ')));
        this.log(chalk.grey(chalk.blueBright.underline(post.redirect_url)));
        this.log(chalk.cyanBright('------------------------'));
      }
    } catch (err) {
      this.error(err);
    }
  }
}
