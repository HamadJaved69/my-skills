import React from 'react';
import './App.css';

class App extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      skills: [],
      userInput: ''
    }
    //binding the onChange
    this.onGetValues = this.onGetValues.bind(this);
  }

  onGetValues(e: { target: { value: any; }; }) {
    const inputValue = e.target.value;
    const itemsArray = inputValue.split(',');
    this.setState({
      skills: itemsArray,
      userInput: e.target.value
    })
  }
  render() {
    const item = this.state.skills.map((element: any, index: number)=> {
      return <li key={index}>{element}</li>;
    });
    return (
      <div className="App text-center element">
          <h1>Enter Your Skills</h1>
          <input 
            type="text"
            onChange={this.onGetValues}
            value={this.state.userInput}
          />
          <br />
          <code>Enter Comma Separated Values e.g., html, css, angular</code>
          <div className="container">
            {this.state.userInput.length > 0 ? <ul>{item}</ul> : <code>Start Writing</code>}
          </div>
      </div>
    );
  }
}

export default App;
