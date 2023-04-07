import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component{
    state={count : 0,
           isOdd: true}
    onIncrementButton=()=>{
        this.setState( prevState=> ({ count : prevState.count + Math.ceil(Math.random() * 100),
            isOdd: !prevState.isOdd }))
    }
    render(){
        const {count, isOdd} =this.state
        return{
            <div className="component">
                <h1 className="heading">Count {count}</h1>
                <h1 className="heading">Count is {isOdd? 'Odd': 'Even'}</h1>
                <button className="btn" type="button" onClick={this.onIncrementButton}>
                Increment</button>
                <p>*Increase by random number from 0 to 100</p>
            </div>
        }}
}
export default EvenOddApp