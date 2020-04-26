# OpenAPI Client

Harness all the power of your backend's OpenAPI spec files by generating a client object in a few lines.

## Getting started

### 1. Install the package

```sh
npm install --save oa-client
```

### 2. Import the package

This package is isomorphic: it can be used both as an ESM or a CommonJS

```js
// ok
import { createClient } from 'oa-client';
// also ok
const { createClient } = require('oa-client');
```

### 3. Have somewhere your OpenAPI specs as a JS object

You don't need to add anything compared to normal specs, except for `.paths[path][method].type`, that defines the *caller*

```js
const specs = {
  openapi: '3.0.0',
  paths: {
    '/users/{userId}': {
      get: {
        type: 'default-get', // defines the caller
        parameters: [
          {
            in: 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
      },
    },
  },
};
```

### 4. Write your *callers*

These are generic functions that handle requests at the HTTP level.

They are not handled by this package, because they can be very different from one codebase to another; but usually you don't have to write a lot of them.

`url` is an [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL), `body` is a plain JS object.

```js
const callers = {
  'default-get': async (url) => {
    const resp = await fetch(url);
    const json = await resp.json();
    return json;
  },
  'authorized-post': async (url, body) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.token}`);
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    const json = await resp.json();
    return json;
  },
};
```

### 5. Create your client

You do this once and `client` can be used in the rest of your code afterward.

`origin` defaults to `specs.servers[0].url`. Optional if it's defined, else required.

`validationLevel` is one of `'off'` (default), `'warn'`, or `'error'`. It checks the path params, the query params, and the body against the schema present in the specs.

```js
const client = createClient(specs, callers, {
  origin: 'https://my.api.com',
  validationLevel: 'error',
});
```

### 6. Use your client

Thereafter, `oa-client` does all the work of building the full URL and validating input data for you!

In this example, this

```js
const responseData = client.get('/users/{userId}', { pathParams: { userId: 123 } })
```

is equivalent to

```js
const url = new URL('https://my.api.com/users/123');
callers['unauthentified-get'](url);
```

