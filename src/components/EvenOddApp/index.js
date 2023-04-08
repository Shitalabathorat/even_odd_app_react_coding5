import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrementButton = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
      isEven: !prevState.isEven,
    }))
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="component">
        <h1 className="heading">Count {count}</h1>
        <p className="heading">Count is {isEven ? 'Even' : 'Odd'}</p>
        <button className="btn" type="button" onClick={this.onIncrementButton}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
