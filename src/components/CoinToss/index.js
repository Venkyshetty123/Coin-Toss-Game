// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_URL,
    headsCount: 0,
    tailCount: 0,
  }
  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let lastestHeadCount = headsCount
    let lastestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_URL
      lastestHeadCount += 1
    } else {
      tossImage = TAILS_URL
      lastestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: lastestHeadCount,
      tailsCount: lastestTailsCount,
    })
  }

  render() {
    ;<div className="app-container">
      <div className="coin-toss-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>
        <img
          src={tossResultImage}
          alt="toss result"
          className="toss-result-img"
        />
        <button type="button" className="button" onClick={this.onTossCoin}>
          Toss Coin
        </button>
        <div className="counts-container">
          <p className="count">Total: {totalCount}</p>
          <p className="count">Heads: {headsCount}</p>
          <p className="count">Tails: {tailsCount}</p>
        </div>
      </div>
    </div>
  }
}

export default CoinToss
