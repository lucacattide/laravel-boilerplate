# Best Practices

## Styles & Coding

- HTML, CSS and Javascript follow in general the Google Style Guide conventions (https://github.com/google/styleguide);
- Custom CSS follows the BEM convention (http://getbem.com/);

Please be sure to check and follow them before attempt any modification to the sources, in order to preserve the general integrity of the project patterns.
Third-party linter plugins like ESLint, Beautify, Prettier or any other similar resource are welcome (configuration files of the mentioned ones are already present).

## Assets

### Common Guidelines

- For assets inclusion location, specifications or their variations, please refeer to __TODO__ comments inside the sources;

## Repository

### Master

-   .gitignore
    -   **/config/deploy/:** files di configurazione deploy manager (_Capistrano_);
    -   **/config/deploy.rb:** file di configurazione deploy manager (_Capistrano_);
    -   **/lib/:** registri operativi deploy manager (_Capistrano_);
    -   **/log/capistrano.log:** registro operativi deploy manager (_Capistrano_);
    -   **/node_modules:** pacchetti Full-stack Front-End (_NodeJS_);
    -   **/public/hot:** files di progetto compilati per l'hot reloading del bundler moduli (_Webpack_);
    -   **/public/storage:** files di astrazione filesystem Framework Back-End (_Laravel_);
    -   **/resources/js/:** files di progetto compilati Front-End (_JavaScript_);
    -   **/resources/sass/:** files di progetto compilati Front-End (_SASS_);
    -   **/storage/\*.key/:** files di autenticazione APIs terze parti Framework Back-End (_Laravel_);
    -   **/test:** files di progetto per il testing Framework Back-End (_Laravel_);
    -   **/vendor/:** librerie di terze parti Framework Back-End (_Laravel_);
    -   **/Capfile:** file di configurazione deploy manager (_Capistrano_);
    -   **/Gemfile:** file di configurazione _Ruby_;
    -   **/webpack.\*.js**: file di configurazione bundler moduli (_Webpack_);
    -   **\*.json:** files di configurazione vari Full-stack Front-End;
    -   **\*.yaml:** files di configurazione vari Framework Back-End;
    -   **\*.log:** registri operativi vari Full-stack Front-End;
    -   **/!.env:** file di configurazione ambiente Framework Back-End (_SilverStripe_);
    -   **/!.gitignore:** file di configurazione Repository (_GIT_);
    -   **/!.htaccess:** file di configurazione Host;
    -   **/.\_\*:** files di sistema e configurazione vari;
    -   **/.\*:** files di sistema e configurazione vari;

Es.

```
	# Generale
	/config/deploy/
    /config/deploy.rb
    /lib/
    /log/capistrano.log
    /node_modules
    /public/hot
    /public/storage
    /resources/js
    /resources/sass
    /storage/*.key
    /test
    /vendor
    /.editorconfig
    /.idea
    /.vscode
    /.vagrant
    /Capfile
    /Gemfile
    /package.json
    /webpack.*.js
    bootstrap/compiled.php
    Homestead.json
    Homestead.yaml
    npm-debug.log
    yarn-error.log
    .env.*.php
    .env.php
    .env
    .phpunit.result.cache
    .rocketeer/
    .vscode
```

## Branches

There are three branches, defined as:

- __develop__ (Development);
- __staging__ (Beta);
- __master__ (Production - _Default_);

Contributions implement the GitFlow framework (https://tinyurl.com/zt4vys8).
Please read about its specifications before commit on any branch.

## Commits

### Commits

Oficial Udacity Git commit message style guide is used. Please consult the docs (http://udacity.github.io/git-styleguide/) for details.

### Merges

- __staging__: merging from __develop__;
- __master__: merging from __staging__;

## Deployment

### Capistrano

#### CLI

-   **Beta**
    -   `cap staging deploy`
-   **Production** \* `cap production deploy`

## Host

### Essential directories ^!

-   **.ssh**
-   **releases**
-   **repo**
-   **shared**
-   **current**

### Essential files^!

-   **.ftpquota**
-   **revisions.log**

^! **Non eliminare**
