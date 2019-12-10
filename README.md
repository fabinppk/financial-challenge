# Viajar faz bem

## Requirements

For development, you will only need Node.js installed on your environement.

## Install Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/) or [YARN](https://yarnpkg.com/pt-BR/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.15.2

    $ npm --version || yarn --version
    6.9.0

## Install

    $ git clone git@github.com:sbtur/viajar-faz-bem.git
    $ cd viajar-faz-bem
    $ npm i

## Configure app

You will need [`.env`](https://drive.google.com/drive/u/0/folders/1sSLXqe4Go_hdBws89TuZ-m5xHWwVufGT) file on root project.

## Run project on development mode:

```
$ npm i
$ npm run dev
```

## Run project on production mode:

```
$ npm i
$ npm run start
```

## Generate a build:

```
$ npm i
$ npm run build
```

## Generate a storybook:

```
$ npm i
$ npm run build-storybook
```

## Run storybook:

```
$ npm i
$ npm run storybook
```

## Before make commit:

```
$ npm run commit
```

## Run lint:

```
$ npm i
$ npm run lint
```

## Run tests:

OBS: I created only one test to see if the command works.

```
$ npm i
$ npm run test
```

## Run tests (watch mode):

```
$ npm i
$ npm run test:watch
```

## Run tests (coverage mode):

```
$ npm i
$ npm run test:coverage
```

## Run tests (Watch Mode with Coverage mode):

```
$ npm i
$ npm run test:coverageWatch
```
