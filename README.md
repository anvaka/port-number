# port-number

Returns a port number for your dev server based on file path. Useful when you
need to start multiple dev servers, but don't want them to have truly random
ports. Instead generates a consistent port number, which depends on current file
path.

# usage

``` js
// let's assume you are using express:
var app = new require('express')();

// To get a port number for this dev server:
var port = require('port-number')();

// now you can listen on this port. It is guaranteed to be the same as long
// as you launch your app from the same folder:
app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
```

# install

With [npm](https://npmjs.org) do:

```
npm install port-number
```

# license

MIT
