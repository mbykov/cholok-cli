#!/usr/bin/env node
'use strict';

var _cholok = require('cholok');

var _cholok2 = _interopRequireDefault(_cholok);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = require('commander');


var log = console.log;

cli.version('0.1.0').option('-c, --cumulative', 'Cumulative output')
// .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
.parse(process.argv);

if (!cli.args.length) cli.help();

var tibetan = cli.args[0];

var res = void 0;

if (cli.cumulative) res = (0, _cholok2.default)(tibetan, true);else res = (0, _cholok2.default)(tibetan);

log(' cholok:', tibetan, '-', res);
//# sourceMappingURL=index.js.map