# Financial Challenge

## Code design choices

#### Next js

The choice comes because of the ease that Next provides when creating React applications with server-side rendering. In addition to providing performance, SSR enables application pages developed in React to be indexed by search engines.

#### Atomic Design

Today there are many ways to organize components within the application, but the use of Atomic Design particularly pleases me greatly by creating a relationship of "smaller" components at a lower level (atoms) and larger components at a higher level (organisms). But in the end, folder structure, whatever it may be, must define an organization pattern within the project.

#### Storybook

Who ever needed to import a Button component and forgot what kind of state that button can take. Ex: button--large, button--small, button-danger, button-success. The Storybook makes it easy to see a component in all its possible states, and this facilitates future maintenance/refactoring.

#### Dark-theme

It's been one of the features most loved by users and big companies like google, slack, facebook, clubhouse, instagram and whatsapp has been paying a lot of attention to it. I particularly always use it when the interface is available and so I decided to apply it to the challenge.

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
