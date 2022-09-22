import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // pri prvicnoto istrctuvanje na UI-to
  componentDidMount() {
    console.log("this is componment did mount");
  }

  // se povikuva sekogas koga se updejtuva nekoj stejt
  componentDidUpdate() {
    console.log("this is componment did update");
  }

  render() {
    return (
      <div>
        {this.state.counter} <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// vo klasni komponenti funkciite gi pristapuvame
// so rezerviraniot zbor this.

//
