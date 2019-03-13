#!/usr/bin/env node

let cli = require('commander')
import cholok from 'cholok'

let log = console.log;

cli
  .version('0.1.13')
  .option('-c, --cumulative', 'Cumulative output')
  // .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv)

if (!cli.args.length) cli.help()

let tibetan = cli.args[0]

let res

if (cli.cumulative) res = cholok(tibetan, true)
else res = cholok(tibetan)

log(' cholok:', tibetan, '-', res)
