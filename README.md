# Financial Challenge

## Prints

<center>
    <img src="https://raw.githubusercontent.com/fabinppk/financial-challenge/master/prints/finalcial-desktop-light.png" width="100%" />
</center>

<center>
    <img src="https://raw.githubusercontent.com/fabinppk/financial-challenge/master/prints/finalcial-desktop-dark.png" width="100%" />
</center>

<table style="width:100%">
  <tr>
    <th><img src="https://raw.githubusercontent.com/fabinppk/financial-challenge/master/prints/finalcial-mobile-light.png" width="80%" /></th>
    <td><img src="https://raw.githubusercontent.com/fabinppk/financial-challenge/master/prints/finalcial-mobile-dark.png" width="80%" /></td>
  </tr>
</table>

## Demo - https://financial-challenge.herokuapp.com/

(Se tiver problema ao abrir, tente recarregar a página mais de uma vez)

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

## Generate a build:

```
$ npm i
$ npm run build
```

## Run project on production mode:

```
$ npm i
$ npm run build && npm run start
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
