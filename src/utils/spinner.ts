import * as Ora from 'ora';

export const spinner: any = new Ora({
  text: 'Loading, please wait.',
  spinner: 'bouncingBar',
  color: 'yellow',
});
