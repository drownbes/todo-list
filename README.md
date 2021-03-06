## todo-list

A simple todo list app written in React.

### Quick start

First, fork the repository. Then...

```bash
$ git clone git@github.com:[your-username]/todo-list.git
$ cd todo-list
$ npm install
# Run the development server.
$ npm start
```

Then go to http://localhost:8080/

### Development

#### React components

React components should live in `src/modules`

The basic directory structure is

```
/src
  /modules
    /App
      component.js
      index.js
```

##### Files

**index.js**

Defines the API for the component. It exports
everything which other modules need to access.

```js
export { Component as App } from './component';
```

**component.js**

Contains the React component.

Rules:
- Default to stateless components.
- Isolate business logic in pure functional utils.
- The export is a React component so should be in PascalCase i.e. `Component`.

```js
import React from 'react';

/**
 * The top level App component.
 * @returns {Object}
 */
export const Component = props => (
  ...
);

Component.displayName = 'App';
```

### Contributing

Make a fork of this repository. No PRs into this repository, please :).

Open one or more PRs into the master branch of your fork.

A PR will not be approved if any of the following commands fail
  - `npm run lint`
  - `npm run build`
