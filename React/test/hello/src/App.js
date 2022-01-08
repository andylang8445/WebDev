import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <h3>index Props</h3>
        <div className="props">
          <span>{this.props.message}</span>
        </div>

        <h3>State</h3>
        <div className="states">
          {this.state.count}
          <button onClick={this.countUp}>Click to Change</button>
        </div>

        <h3>App props</h3>
        <div className="insideAppProps">
          <InsideApp
            count={this.state.count}
            countUp={this.countUp}
          />
        </div>
      </div>
    );
  }
}

class InsideApp extends Component{
  render(){
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.countUp}>Click!</button>
      </div>
    );
  }
}

export default App;
