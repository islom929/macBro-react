import { Component } from 'react';
import './Ram.css'

class Ram extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }

  render() {
    console.log(this.state.clicked);
    return (
      <div className="hero-ram__box">
        <button onClick={() => {this.setState({clicked: 1})}}
       className={this.state.clicked == 2 ? 'hero-ram__btn' : 'hero-ram__btn  btn--active'}>8GB</button>
        <button onClick={() => {this.setState({clicked: 2})}}   className={this.state.clicked  == 2 ? 'hero-ram__btn btn--active' : 'hero-ram__btn  '}>16GB</button>
      </div>
    )
  }
}

export default Ram;
