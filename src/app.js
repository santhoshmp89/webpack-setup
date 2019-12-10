import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

<<<<<<< HEAD
const TextField = () => <p>Test React App dev-server sdfdsf</p>;

ReactDOM.render(<TextField />, document.getElementById("root"));

console.log("hi", process.env.NODE_ENV);

class OldSyntax {
  constructor() {
    this.name = "Mike";
  }
}

=======
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

>>>>>>> 5cdf851926fff80b24fe9b3a5dd89920eefe26fa
var oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = "Sam";
}
var newSyntax = new NewSyntax();
console.log(newSyntax);
<<<<<<< HEAD

console.log(process.env.NODE_ENV);
console.log(process.env);
=======
>>>>>>> 5cdf851926fff80b24fe9b3a5dd89920eefe26fa
