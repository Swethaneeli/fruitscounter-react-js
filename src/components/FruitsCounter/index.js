// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {eatMango: 0, eatBanana: 0}

  onClickEatMango = () => {
    this.setState(prevState => ({eatMango: prevState.eatMango + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({eatBanana: prevState.eatBanana + 1}))
  }

  render() {
    const {eatMango, eatBanana} = this.state
    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate <span className="counter">{eatMango}</span> mangoes
            <span className="counter"> {eatBanana} </span> bananas
          </h1>
          <div className="img-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />

              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
