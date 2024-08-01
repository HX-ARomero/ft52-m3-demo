import { Component } from "react";
import ClassDisplay from "./ClassDisplay";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidUpdate() {
    console.log("Class Counter se actualizó");
  }

  sumarUno = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>Contador: {this.state.contador}</h3>
        <button onClick={this.sumarUno}>Suma 1</button>
        {this.state.contador > 2 && this.state.contador < 5 ? (
          <ClassDisplay />
        ) : null}
      </div>
    );
  }
}
