import React from 'react';
import Iframe from 'react-iframe';
import Frame from 'react-frame-component';

/*
// 1. working?????
// 2. IE blob, download file
// 3. not-ie, new win iframe
function pdf() {
  const data = '' +  
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';

  if (data === "" || data === undefined) {
    alert("Falied to open PDF.");
} else { 
    // ie, it may work
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      let byteCharacters = atob(data);
      let byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray], {
          type: 'application/pdf'
      });

      let fileName = 'testme';
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else { 
        // not ie
        let meta = 'data:application/pdf;base64,';
        let iframe = "<iframe width='100%' height='100%' src='" + meta + data + "'></iframe>"
        let x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }
  }
}

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        pdf();
      }}>
        click
      </button>
    </div>
  );
}
*/


/*
// 1. Not working
// 2. react-iframe
// 3. test on IE 15 edge windows 10, blank page
function App() {
  const meta = 'data:application/pdf;base64,';

  const data = meta +  
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    let byteCharacters = atob(data);
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray], {
        type: 'application/pdf'
    });

    return (
      <div className="App">
        <Iframe src={byteArray}
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Iframe src={data}
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      </div>
    );
  }
}
*/


/*
// 1. Working only with file
// 2. use file
const pdf = require('./sample.pdf');
function App() {
  return (
    <div className="App">
      <Iframe url={pdf}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}
*/

// use embed
function App() {
  let meta = 'data:application/pdf;base64,';

  let data = 'JVBERi0xLjMKJe+/ve+/ve+/ve+/vQoKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovT3V0bGluZXMgMiAwIFIKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagoKMiAwIG9iago8PAovVHlwZSAvT3V0bGluZXMKL0NvdW50IDAKPj4KZW5kb2JqCgozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMgovS2lkcyBbIDQgMCBSIDYgMCBSIF0gCj4+CmVuZG9iagoKNCAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDMgMCBSCi9SZXNvdXJjZXMgPDwKL0ZvbnQgPDwKL0YxIDkgMCBSIAo+PgovUHJvY1NldCA4IDAgUgo+PgovTWVkaWFCb3ggWzAgMCA2MTIuMDAwMCA3OTIuMDAwMF0KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iagoKNSAwIG9iago8PCAvTGVuZ3RoIDEwNzQgPj4Kc3RyZWFtCjIgSgpCVAowIDAgMCByZwovRjEgMDAyNyBUZgo1Ny4zNzUwIDcyMi4yODAwIFRkCiggQSBTaW1wbGUgUERGIEZpbGUgKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDY4OC42MDgwIFRkCiggVGhpcyBpcyBhIHNtYWxsIGRlbW9uc3RyYXRpb24gLnBkZiBmaWxlIC0gKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDY2NC43MDQwIFRkCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDY1Mi43NTIwIFRkCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDYyOC44NDgwIFRkCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDYxNi44OTYwIFRkCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoKRVQKQlQKL0YxIDAwMTAgVGYKNjkuMjUwMCA2MDQuOTQ0MCBUZAooIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDU5Mi45OTIwIFRkCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDU2OS4wODgwIFRkCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUagpFVApCVAovRjEgMDAxMCBUZgo2OS4yNTAwIDU1Ny4xMzYwIFRkCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gRXZlbiBtb3JlLiBDb250aW51ZWQgb24gcGFnZSAyIC4uLikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKNiAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDMgMCBSCi9SZXNvdXJjZXMgPDwKL0ZvbnQgPDwKL0YxIDkgMCBSIAo+PgovUHJvY1NldCA4IDAgUgo+PgovTWVkaWFCb3ggWzAgMCA2MTIuMDAwMCA3OTIuMDAwMF0KL0NvbnRlbnRzIDcgMCBSCj4+CmVuZG9iagoKNyAwIG9iago8PCAvTGVuZ3RoIDY3NiA+PgpzdHJlYW0KMiBKCkJUCjAgMCAwIHJnCi9GMSAwMDI3IFRmCjU3LjM3NTAgNzIyLjI4MDAgVGQKKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqCkVUCkJUCi9GMSAwMDEwIFRmCjY5LjI1MDAgNjg4LjYwODAgVGQKKCAuLi5jb250aW51ZWQgZnJvbSBwYWdlIDEuIFlldCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoKRVQKQlQKL0YxIDAwMTAgVGYKNjkuMjUwMCA2NzYuNjU2MCBUZAooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoKRVQKQlQKL0YxIDAwMTAgVGYKNjkuMjUwMCA2NjQuNzA0MCBUZAooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqCkVUCkJUCi9GMSAwMDEwIFRmCjY5LjI1MDAgNjUyLjc1MjAgVGQKKCBwYWludCBkcnkuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoKRVQKQlQKL0YxIDAwMTAgVGYKNjkuMjUwMCA2NDAuODAwMCBUZAooIEJvcmluZy4gIE1vcmUsIGEgbGl0dGxlIG1vcmUgdGV4dC4gVGhlIGVuZCwgYW5kIGp1c3QgYXMgd2VsbC4gKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCgo4IDAgb2JqClsvUERGIC9UZXh0XQplbmRvYmoKCjkgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9OYW1lIC9GMQovQmFzZUZvbnQgL0hlbHZldGljYQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmoKCjEwIDAgb2JqCjw8Ci9DcmVhdG9yIChSYXZlIFwoaHR0cDovL3d3dy5uZXZyb25hLmNvbS9yYXZlXCkpCi9Qcm9kdWNlciAoTmV2cm9uYSBEZXNpZ25zKQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQo+PgplbmRvYmoKCnhyZWYKMCAxMQowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAxOSAwMDAwMCBuCjAwMDAwMDAwOTMgMDAwMDAgbgowMDAwMDAwMTQ3IDAwMDAwIG4KMDAwMDAwMDIyMiAwMDAwMCBuCjAwMDAwMDAzOTAgMDAwMDAgbgowMDAwMDAxNTIyIDAwMDAwIG4KMDAwMDAwMTY5MCAwMDAwMCBuCjAwMDAwMDI0MjMgMDAwMDAgbgowMDAwMDAyNDU2IDAwMDAwIG4KMDAwMDAwMjU3NCAwMDAwMCBuCgp0cmFpbGVyCjw8Ci9TaXplIDExCi9Sb290IDEgMCBSCi9JbmZvIDEwIDAgUgo+PgoKc3RhcnR4cmVmCjI3MTQKJSVFT0YK';

/*
 * Copyright (c) 2010 Nick Galbreath
 * See full license on http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 */

  var base64 = {};
  base64.PADCHAR = '=';
  base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  base64.makeDOMException = function() {
      // sadly in FF,Safari,Chrome you can't make a DOMException
      var e, tmp;

      try {
          return new DOMException(DOMException.INVALID_CHARACTER_ERR);
      } catch (tmp) {
          // not available, just passback a duck-typed equiv
          // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error
          // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error/prototype
          var ex = new Error("DOM Exception 5");

          // ex.number and ex.description is IE-specific.
          ex.code = ex.number = 5;
          ex.name = ex.description = "INVALID_CHARACTER_ERR";

          // Safari/Chrome output format
          ex.toString = function() { return 'Error: ' + ex.name + ': ' + ex.message; };
          return ex;
      }
  }

  base64.getbyte64 = function(s,i) {
      // This is oddly fast, except on Chrome/V8.
      //  Minimal or no improvement in performance by using a
      //   object with properties mapping chars to value (eg. 'A': 0)
      var idx = base64.ALPHA.indexOf(s.charAt(i));
      if (idx === -1) {
          throw base64.makeDOMException();
      }
      return idx;
  }

  base64.decode = function(s) {
      // convert to string
      s = '' + s;
      var getbyte64 = base64.getbyte64;
      var pads, i, b10;
      var imax = s.length
      if (imax === 0) {
          return s;
      }

      if (imax % 4 !== 0) {
          throw base64.makeDOMException();
      }

      pads = 0
      if (s.charAt(imax - 1) === base64.PADCHAR) {
          pads = 1;
          if (s.charAt(imax - 2) === base64.PADCHAR) {
              pads = 2;
          }
          // either way, we want to ignore this last block
          imax -= 4;
      }

      var x = [];
      for (i = 0; i < imax; i += 4) {
          b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) |
              (getbyte64(s,i+2) << 6) | getbyte64(s,i+3);
          x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
      }

      switch (pads) {
      case 1:
          b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) | (getbyte64(s,i+2) << 6);
          x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
          break;
      case 2:
          b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12);
          x.push(String.fromCharCode(b10 >> 16));
          break;
      }
      return x.join('');
  }

  base64.getbyte = function(s,i) {
      var x = s.charCodeAt(i);
      if (x > 255) {
          throw base64.makeDOMException();
      }
      return x;
  }

  base64.encode = function(s) {
      if (arguments.length !== 1) {
          throw new SyntaxError("Not enough arguments");
      }
      var padchar = base64.PADCHAR;
      var alpha   = base64.ALPHA;
      var getbyte = base64.getbyte;

      var i, b10;
      var x = [];

      // convert to string
      s = '' + s;

      var imax = s.length - s.length % 3;

      if (s.length === 0) {
          return s;
      }
      for (i = 0; i < imax; i += 3) {
          b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8) | getbyte(s,i+2);
          x.push(alpha.charAt(b10 >> 18));
          x.push(alpha.charAt((b10 >> 12) & 0x3F));
          x.push(alpha.charAt((b10 >> 6) & 0x3f));
          x.push(alpha.charAt(b10 & 0x3f));
      }
      switch (s.length - imax) {
      case 1:
          b10 = getbyte(s,i) << 16;
          x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
                padchar + padchar);
          break;
      case 2:
          b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8);
          x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
                alpha.charAt((b10 >> 6) & 0x3f) + padchar);
          break;
      }
      return x.join('');
  }

  // ie
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //let buffer=Uint8Array.from(atob(data), c => c.charCodeAt(0));
    let buffer = base64.decode(data);
    let blob=new Blob([buffer], { type: "application/pdf" });
    let url=URL.createObjectURL(blob);

    return (
      <div className="App">
        <embed url={url}
          width="450"
          height="450"
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <embed src={meta + data}
          width="450"
          height="450"
        />
      </div>
    );
  }
}


export default App;
