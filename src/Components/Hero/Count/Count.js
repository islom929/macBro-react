import React, { Component } from 'react'
import './Count.css'

class Count extends Component{
  constructor() {
    super()

    this.state = {
      count: 1,
      price: 999
    }
  }


  render() {

    return (
      <div>
        <div className="hero-count__box">
          <button disabled={this.state.count == 1? 'true': ''} onClick={() => {this.setState({count: this.state.count - 1})}} className="hero-count__btn-minus"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13H5v-2h14v2z" /></svg></button>
          <span className="hero-count__result">{this.state.count}</span>
          <button onClick={() => {this.setState({count: this.state.count + 1})}} className="hero-count__btn-plus"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></button>
        </div>
        <div className="hero-price__box">
          $<span className="hero-price__result">{this.state.price}</span>
        </div>
      </div>
    )
  }
}

export default Count;
