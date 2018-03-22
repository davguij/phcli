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
phcli/1.0.0 darwin-x64 node-v8.9.4
$ phcli --help [COMMAND]
USAGE
  $ phcli COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [phcli hello [FILE]](#hello-file)
* [phcli help [COMMAND]](#help-command)
## hello [FILE]

describe the command here

```
USAGE
  $ phcli hello [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLE
  $ phcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/davguij/phcli/blob/v1.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
