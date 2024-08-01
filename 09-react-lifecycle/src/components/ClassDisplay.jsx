import { Component } from "react";

export default class ClassDisplay extends Component {
  // componentDidMount() {
  //   console.log("Display se montó al DOM");
  // }

  componentWillUnmount() {
    console.log("Display se irá del DOM");
  }

  render() {
    return (
      <div style={{ backgroundColor: "darkslategray" }}>
        <h3>Display</h3>
      </div>
    );
  }
}
