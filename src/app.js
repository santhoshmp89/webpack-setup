import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

const TextField = () => <p>Test React App dev-server sdsdds</p>;

ReactDOM.render(<TextField />, document.getElementById('root'));
console.log('hsdsi', process.env);
console.log('hsdsi', process.env.NODE_ENV);

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

fetch(process.env.API_URL)
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });

var oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = 'Sam';
}
var newSyntax = new NewSyntax();
console.log(newSyntax);
