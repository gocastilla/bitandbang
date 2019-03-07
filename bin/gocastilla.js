#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const open = require('open');
const inquirer = require('inquirer');

const card = (repeat = false) => {
  console.log(
    [
      ``,
      boxen(
        [
          `My name is ${chalk.bold.green('Alberto Gómez')} and I'm trying to be a`,
          `good UX/UI developer. Successfully?`,
          `Bah, I don't know.`,
          ``,
          `${chalk.green('-')} https://${chalk.green('albertogomez.dev')}`,
          `${chalk.green('-')} https://twitter.com/${chalk.green('gocastilla')}`,
          `${chalk.green('-')} https://github.com/${chalk.green('gocastilla')}`,
          ``,
          `npx ${chalk.green('gocastilla')}`
        ].join('\n'),
        {
          padding: 1,
          borderStyle: 'single',
          borderColor: 'green'
        }
      ),
      ``,
      `Howdy! It's still me, Alberto, but outside that stupid box.`,
      `Now let's gonna make this a bit more interactive, ok?`,
      ``
    ].join('\n')
  );
}

const options = (repeat = false) => {
  if(repeat) {
    console.log(`\n`);
  }
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message:
      repeat ?
        `Done, do you want to do something else?` :
        `What you want to do?`,
    choices: [
      {
        name: 'Visit my web page? (Please please please please please)',
        value: () => {
          open('https://albertogomez.dev/');
          options(true);
        }
      },
      {
        name: 'Send me an email? (Pretending we are in 2000s)',
        value: () => {
          open('mailto:howdy@albertogomez.dev');
          options(true);
        }
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('\nDone, see you soon.\n');
        }
      }
    ]
  }).then(answer => answer.action());
}

(() => {
  card();
  options()
})();
