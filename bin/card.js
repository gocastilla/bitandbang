#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
  borderColor: '#FD6DC0'
}
// Text + chalk definitions
let data = {
  'name': chalk.white.bold('Álvaro Quirós'),
  'handle': chalk.yellow('@alodev'),
  'work': chalk.white('Frontend Lead @ Coderty \nIn love with '),
  'runnerty': chalk.yellow('https://runnerty.dev'),
  'twitter': chalk.yellow('https://twitter.com/alodev'),
  'github': chalk.yellow('https://github.com/alo'),
  'linkedin': chalk.yellow('https://linkedin.com/in/alodev'),
  'web': chalk.yellow('https://alo.dev'),
  'npx': chalk.white('npx alodev'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} (${data.handle})`;
const working = `${data.work} ${data.runnerty}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline +
  working + newline + newline +
  twittering + newline +
  githubing + newline +
  linkedining + newline +
  webing + newline + newline +
  carding

console.log(chalk.yellow(boxen(output, options)))
