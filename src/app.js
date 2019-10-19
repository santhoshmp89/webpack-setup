import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

const TextField = () => <p>Test React App dev-server</p>;

ReactDOM.render (<TextField />, document.getElementById ('root'));

console.log ('hi', process.env.NODE_ENV);

class OldSyntax {
  constructor () {
    this.name = 'Mike';
  }
}

var oldSyntax = new OldSyntax ();
console.log (oldSyntax);

class NewSyntax {
  name = 'Sam';
}
var newSyntax = new NewSyntax ();
console.log (newSyntax);

console.log (process.env.NODE_ENV);
console.log (process.env);
