import React from "react";

export class MyClassComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    } as any;
  }

  increaseCounter() {
    this.setState((state: any) => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <h3>Counter: {(this.state as any).counter}</h3>
        <button onClick={this.increaseCounter.bind(this)}>Counter++</button>
      </div>
    );
  }
}
