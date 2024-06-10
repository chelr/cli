cli
=================

payment integration made easy


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ chelr COMMAND
running command...
$ chelr (--version)
cli/0.0.0 darwin-arm64 node-v20.3.1
$ chelr --help [COMMAND]
USAGE
  $ chelr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`chelr hello PERSON`](#chelr-hello-person)
* [`chelr hello world`](#chelr-hello-world)
* [`chelr help [COMMAND]`](#chelr-help-command)
* [`chelr plugins`](#chelr-plugins)
* [`chelr plugins add PLUGIN`](#chelr-plugins-add-plugin)
* [`chelr plugins:inspect PLUGIN...`](#chelr-pluginsinspect-plugin)
* [`chelr plugins install PLUGIN`](#chelr-plugins-install-plugin)
* [`chelr plugins link PATH`](#chelr-plugins-link-path)
* [`chelr plugins remove [PLUGIN]`](#chelr-plugins-remove-plugin)
* [`chelr plugins reset`](#chelr-plugins-reset)
* [`chelr plugins uninstall [PLUGIN]`](#chelr-plugins-uninstall-plugin)
* [`chelr plugins unlink [PLUGIN]`](#chelr-plugins-unlink-plugin)
* [`chelr plugins update`](#chelr-plugins-update)

## `chelr hello PERSON`

Say hello

```
USAGE
  $ chelr hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ chelr hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/chelr/cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `chelr hello world`

Say hello world

```
USAGE
  $ chelr hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ chelr hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/chelr/cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `chelr help [COMMAND]`

Display help for chelr.

```
USAGE
  $ chelr help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for chelr.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.1/src/commands/help.ts)_

## `chelr plugins`

List installed plugins.

```
USAGE
  $ chelr plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ chelr plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/index.ts)_

## `chelr plugins add PLUGIN`

Installs a plugin into chelr.

```
USAGE
  $ chelr plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into chelr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CHELR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CHELR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ chelr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ chelr plugins add myplugin

  Install a plugin from a github url.

    $ chelr plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ chelr plugins add someuser/someplugin
```

## `chelr plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ chelr plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ chelr plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/inspect.ts)_

## `chelr plugins install PLUGIN`

Installs a plugin into chelr.

```
USAGE
  $ chelr plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into chelr.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CHELR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CHELR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ chelr plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ chelr plugins install myplugin

  Install a plugin from a github url.

    $ chelr plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ chelr plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/install.ts)_

## `chelr plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ chelr plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ chelr plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/link.ts)_

## `chelr plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ chelr plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chelr plugins unlink
  $ chelr plugins remove

EXAMPLES
  $ chelr plugins remove myplugin
```

## `chelr plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ chelr plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/reset.ts)_

## `chelr plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ chelr plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chelr plugins unlink
  $ chelr plugins remove

EXAMPLES
  $ chelr plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/uninstall.ts)_

## `chelr plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ chelr plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chelr plugins unlink
  $ chelr plugins remove

EXAMPLES
  $ chelr plugins unlink myplugin
```

## `chelr plugins update`

Update installed plugins.

```
USAGE
  $ chelr plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.4/src/commands/plugins/update.ts)_
<!-- commandsstop -->
