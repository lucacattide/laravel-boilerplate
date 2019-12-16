# Best Practices

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

-   **develop** (Sviluppo);
-   **staging** (Beta);
-   **master** (Produzione - _Default_);

## Commits

-   **< Etichetta/Titolo >**

    -   -**< Descrizione >**;

-   **Etichetta**: label identificativa oggetto dell'implementazione (se prevista);
-   **Titolo**: breve nomenclatura distintiva dell'oggetto dell'implementazione
-   **Descrizione**: breve nota illustrativa dell'implementazione effettuata;

Es.

```
	Updates template

	- Aggiornate icone;
```

## Merges

-   **staging**: merging da **develop**;
-   **master**: merging da **staging**;

## Deployment

### Capistrano

#### CLI

-   **Beta**
    -   `cap staging deploy`
-   **Produzione** \* `cap production deploy`

## Host

### Directories essenziali ^!

-   **.ssh**
-   **releases**
-   **repo**
-   **shared**
-   **current**

### Files essenziali^!

-   **.ftpquota**
-   **revisions.log**

^! **Non eliminare**
