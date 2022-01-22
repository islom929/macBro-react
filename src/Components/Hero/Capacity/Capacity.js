import { Component } from 'react'
import './Capacity.css'

class Capacity extends Component {
  constructor() {
    super()

    this.state = {
      clicked: 1
    }
  }



  render() {
    return (
      <div className="hero-memory__box">
        <button onClick={() => {this.setState({clicked: 1})}}
       className={(this.state.clicked == 1 ? 'hero-ram__btn  btn--active' : 'hero-ram__btn')}>256GB</button>
        <button onClick={() => {this.setState({clicked: 2})}}
       className={this.state.clicked == 2 ? 'hero-ram__btn btn--active' : 'hero-ram__btn'}>512GB</button>
        <button onClick={() => {this.setState({clicked: 3})}}
       className={this.state.clicked == 3 ? 'hero-ram__btn btn--active' : 'hero-ram__btn'}>1TB</button>
      </div>
    )
  }
}

export default Capacity;
