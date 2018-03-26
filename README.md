phcli
=====

ProductHunt as a CLI

[![Version](https://img.shields.io/npm/v/phcli.svg)](https://npmjs.org/package/phcli)
[![CircleCI](https://circleci.com/gh/_my/phcli/tree/master.svg?style=shield)](https://circleci.com/gh/_my/phcli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/_my/phcli?branch=master&svg=true)](https://ci.appveyor.com/project/_my/phcli/branch/master)
[![Codecov](https://codecov.io/gh/_my/phcli/branch/master/graph/badge.svg)](https://codecov.io/gh/_my/phcli)
[![Greenkeeper](https://badges.greenkeeper.io/_my/phcli.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/_my/phcli/badge.svg)](https://snyk.io/test/github/_my/phcli)
[![Downloads/week](https://img.shields.io/npm/dw/phcli.svg)](https://npmjs.org/package/phcli)
[![License](https://img.shields.io/npm/l/phcli.svg)](https://github.com/_my/phcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- usage -->
# Usage

```sh-session
$ npm install -g phcli
$ phcli COMMAND
running command...
$ phcli (-v|--version|version)
phcli/0.1.0 darwin-x64 node-v8.9.4
$ phcli --help [COMMAND]
USAGE
  $ phcli COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [phcli help [COMMAND]](#help-command)
* [phcli search TERMS](#search-terms)
* [phcli today](#today)
* [phcli update [CHANNEL]](#update-channel)
## help [COMMAND]

display help for phcli

```
USAGE
  $ phcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.1.6/src/commands/help.ts)_

## search TERMS

Search for products

```
USAGE
  $ phcli search TERMS

ARGUMENTS
  TERMS  You can probably imagine how it works. If you need to use multiple words, please enclose them in quotes.

EXAMPLES
  $ phcli search awesome
  $ phcli search "super awesome products"
```

_See code: [src/commands/search.ts](https://github.com/davguij/phcli/blob/v0.1.0/src/commands/search.ts)_

## today

Get today's most popular

```
USAGE
  $ phcli today
```

_See code: [src/commands/today.ts](https://github.com/davguij/phcli/blob/v0.1.0/src/commands/today.ts)_

## update [CHANNEL]

update the phcli CLI

```
USAGE
  $ phcli update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.0.3/src/commands/update.ts)_
<!-- commandsstop -->
