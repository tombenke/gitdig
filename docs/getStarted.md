# Get Started

## Installation

### Prerequisites:

`gitdig` needs [Node.js](http://nodejs.org/) and [NPM](https://npmjs.org/) installed on the machine, before start installing and using it.

### Installation steps

The `gitdig` tool can be installed as any other node module, but you have to install to the global node_modules folder, so use the `-g` switch to `npm`.

To install `gitdig`, execute the following command:

    $ npm install -g gitdig

To check, whether gitdig is installed successfully, run the following command:

    $ gitdig -V


## Usage of the `gitdig` utility

### Get Help
    
Check if gitdig is properly installed:

```bash
    $ gitdig -h

      Usage: gitdig [options] [command]

      Commands:

        collect [options]      Collect data about repositories, through a selected user account, and make a local snapshot file.
        ls [options]           List the repositories
        check [options]        Check the repositories

      Options:

        -h, --help     output usage information
        -V, --version  output the version number
```

Get help for individual commands, such as, `collect`, `ls` or `check`:

```bash
    $ gitdig ls -h

      Usage: ls [options]

      Options:

        -h, --help                           output usage information
        -l, --long                           Long format, including some details
        -c, --config [config file name]      The name of the config file to use
        -u, --git-user [user name]           The git account
        -s, --snapshot [snapshot file name]  Define the file name for the local snapshot repo summaries
        -o, --offline                        Use the local snapshot (offline mode)
```

### Get a list of the repositories you have access

The following command retrieves the summaries of all the repositories you have access,
then stores it into a snapshot file, and finally lists the names of the repositories found.

Replace the tombenke username with your git account name.

```bash
    $ gitdig ls -u tombenke -s repos.json
    password: **********
    get package.json from tombenke/1wire-relay-hw...
    get package.json from tombenke/cogito...
    get package.json from tombenke/contacts...
    get package.json from tombenke/couchme...
    get package.json from tombenke/csvconv...
    get package.json from tombenke/darduino...
    ...
    tombenke/1wire-relay-hw 
    tombenke/cogito 
    tombenke/contacts 
    tombenke/couchme 
    tombenke/csvconv 
    tombenke/darduino 
    ...
```

The command has created a snapshot file with `repos.json`.
Check the content:

```bash
    $ head repos.json 
    [
        {
            "name": "1wire-relay-hw",
            "owner": "tombenke",
            "private": false,
            "description": "1-wire port extender hardware module with relays",
            "homepage": null,
            "html_url": "https://github.com/tombenke/1wire-relay-hw",
            "git_url": "git://github.com/tombenke/1wire-relay-hw.git",
            "tags": [],
```

Now you have a snapshot, so you can get a list again, without connecting to the GitHub,
if you use the -o (offline) switch. You also can use the -l (long) switch to see more details:

```bash
    $ gitdig ls -u tombenke -s repos.json -o -l

    tombenke/1wire-relay-hw - (public)
    1-wire port extender hardware module with relays
    []

    tombenke/cogito - (public)
    CouchDB based GTD -like web application
    []

    tombenke/contacts - (public)
    A sample web application project, using CouchDb, Node.js and ExtJS
    []

    tombenke/couchme - (public)
    Readings about how to develop web applications with CouchDB and CouchApp for beginners (Hungarian)
    []

    tombenke/csvconv - (public)
    CSV converter utility
    []

    tombenke/darduino - (public)
    Dockerized Arduino IDE
    []

    tombenke/deagle - (public)
    The CadSoft EAGLE is dockerized and runs directly from the container
    []

    tombenke/dmos - (public)
    Dockerized Mongoose-OS tools
    []

    tombenke/fl2esd - (public)
    Command line utility which converts FluentD format log entries to elasticdump friendly format
    ["cli","util","tool","utility","elasticdump","elasticsearch","fluentd"]
```


Or you can make a check on the repos, either on-line or off-line:

```bash
    $ gitdig check -u tombenke -s repos.json -o

    tombenke/1wire-relay-hw
      warning  No package.json info found!

    tombenke/cogito
      warning  No package.json info found!

    tombenke/contacts
      warning  No package.json info found!

    tombenke/couchme
      warning  No package.json info found!

    tombenke/csvconv
      warning  No package.json info found!

    tombenke/darduino
      warning  No package.json info found!

    ...

    254 problems (128 errors, 126 warnings)
```

In order to learn more about how to use the tool,
read the [documentation](documentation.html) pages.
