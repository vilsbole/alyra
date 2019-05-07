import React from 'react';
import './App.css';


class Counter extends React.Component {
  state = {
    count: 0,
  }

  handleClick() {
    this.setState(function(prevState) {
      return {
        count: prevState.count + 1
      }
    })
    this.props.updateTotal(1)
  }

  render() {
    const uuid = this.props.uuid
    const children = this.props.children
    console.log('Counter render() called', uuid)
    return (
      <div>
        <span style={{ marginRight: '0.5em' }}>{uuid}</span>
        <button onClick={() => this.handleClick() } >
          {children}
        </button>
        <span style={{ marginLeft: '0.5em' }}>{this.state.count}</span>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
    this.greeting = 'Hello'
    console.log(this.greeting)
  }

  componentDidMount() {
    console.log('Mounted')
  }

  updateTotal(add) {
    this.setState(prevState => ({ total: prevState.total + add }))
  }

  counterList(fruits) {
    const elems = fruits.map((fruit, index) => (
      <Counter
        key={`counter-${index}`}
        uuid={index}
        updateTotal={(arg) => this.updateTotal(arg) }
        >
        fruit
      </Counter>
    ))

    return (<>{elems}</>)
  }

  render() {
    const fruits = [
      'Apple',
      'Oranges',
      'Bananas'
    ]

    return (
      <div className="App">
        <h3>{this.state.total}</h3>
        {this.counterList(fruits)}
      </div>
    );
  }
}

export default App;
