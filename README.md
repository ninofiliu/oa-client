# oa-client

Harness all the power of your backend's OpenAPI v3 spec files by generating a client object in a few lines.

```
┌───────────────┐
│ OpenAPI specs ├───┐
└───────────────┘   │   ┌───────────┐   ╔═══════════════╗
                    ├─>─┤ oa-client ├─>─╢ Client object ║
      ┌─────────┐   │   └───────────┘   ╚═══════════════╝
      │ Callers ├───┘
      └─────────┘
```

## Features

🚀 Creates at runtime a client object in a few lines ([read more...](#getting-started))
```js
import { createClient } from 'oa-client';
const client = createClient(specs, callers, {
  origin: 'https://my.api.com',
  validationLevel: 'error',
});
```

🚀 Throws if route does not exists in the OpenAPI specs
```yaml
# OpenAPI specs
paths:
  '/foo': {}
```
```js
client.get('/bar');
// throws [oa-client:4] Path /bar not found. Make sure your OpenAPI specs have a .paths['/bar'] key.
```

🚀 Optionally throws for invalid path, query, or body
```yaml
# OpenAPI specs
paths:
  /users/{userId}:
    get:
      parameters:
        - in: path
          name: userId
          schema:
            type: integer
```
```js
client.get('/users/{userId}', { pathParams: { userId: 'john' } })
// throws [oa-client:103] Data does not pass validation: data.userId should be an integer
```

🚀 Compiles the path and query params
```js
client.post('/new-user/{job}', {
  pathParams: { job: 'director' },
  queryParams: { name: 'Gaspar Noé' },
})
// calls /new-user/director?name=Gaspar+No%C3%A9
```

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

You don't need to add anything compared to normal specs, except for `.paths[path][method]['x-type']`, that defines the *caller*

```js
const specs = {
  openapi: '3.0.0',
  info: { /* ... */ },
  paths: {
    '/users/{userId}': {
      get: {
        'x-type': 'default-get', // defines the caller
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
        responses: { /* ... */ }
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
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.token}`);
    const resp = await fetch(url, {
      method: 'POST',
      headers,
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


## Differences with openapi-client

The [openapi-client](https://github.com/mikestead/openapi-client) package is similar but accomplishes things differently.

`openapi-client` is a **code generation** package. You use it as a command line so that it consumes OpenAPI specs and outputs code that will call your server. It is not ideal because you don't own and control all of your code, and it adds complexity.

`oa-client` is simpler - it exposes `createClient`, a **factory** that take specs as input and builds the client at runtime. If your API updates, you don't have to write or generate a single line of code.

`openapi-client` handles all the HTTP calls and authentication for you. That can seem powerful, but actually the system is *very* rigid, even for small customizations, and doesn't cover all cases you'll face along the way.

In `oa-client`, you fully own your generic HTTP callers: you write them yourself, but you probably won't write more than five of them during your whole project lifetime: who needs more than get, post, authorized get, authorized post and file upload?

```
+-------------------------------+
| Written with <3 by Nino Filiu |
|  Contributions are welcomed!  |
+-------------------------------+
         \   ^__^ 
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
```
