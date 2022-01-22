import { Component } from 'react'
import './Color.css'

class Color extends Component {
  constructor() {
    super()

    this.state = {
      clicked: 1
    }
  }

  render() {
    return (
      <div className="hero-color__box">
        <button onClick={() => {this.setState({clicked: 1})}}
       className={(this.state.clicked == 1 ? 'hero-color__btn btn--active' : 'hero-color__btn')}><span className="hero-color__gold"></span>GOLD</button>
        <button onClick={() => {this.setState({clicked: 2})}}
       className={(this.state.clicked == 2 ? 'hero-color__btn btn--active' : 'hero-color__btn')}><span className="hero-color__silver"></span>SILVER</button>
        <button onClick={() => {this.setState({clicked: 3})}}
       className={(this.state.clicked == 3 ? 'hero-color__btn btn--active' : 'hero-color__btn')}><span className="hero-color__gray"></span>SPACE GRAY</button>
      </div>
    )
  }
}

export default Color;
