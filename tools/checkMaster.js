/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */

const chalk = require('chalk');
const process = require('child_process');

const { exec } = process;
const cmd = 'git fetch origin master && git rev-list --left-right --count origin/master...@ | cut -f1';

exec(cmd, (err, stdout) => {
  if (err) {
    throw new Error(err);
  }
  if (stdout.replace('\n', '') === '0') {
    console.log(chalk.green('[git] 当前分支已包含远端master分支最新代码'));
  } else {
    console.warn(chalk.red('========================git merge提示 ==========================='));
    console.log(
      chalk.red(
        '[git !important] master代码有更新，当前分支版本落后，请先拉取远端最新master代码，合并到当前分支后，再重新提交！！！',
      ),
    );
    console.warn(chalk.red('========================git merge提示 ==========================='));
    throw new Error('');
  }
});
