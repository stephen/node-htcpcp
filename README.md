node-htcpcp
===========
Highly scalable coffee pot control server, build with node.js.

Usage
-----
node-htcpcp can scale to manage multiple coffee pots in a single node instance. Each coffee pot is represented by a ```Pot``` object. The server creates and manages these coffee pots via the ```.pot()``` method. See the example below for details.

Server
------
```
var htcpcp = require('../lib/main');
var app = htcpcp.server();

app.pot('mypot', function(potRef) {
	
})

app.listen(8000);
```

License
-------

The MIT License (MIT)

Copyright (c) 2013 Stephen Wan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
