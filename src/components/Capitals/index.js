import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  changeDisplayText = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  displayAnswer = () => {
    const {activeId} = this.state
    const filteredAnswer = countryAndCapitalsList.find(
      eachItem => activeId === eachItem.id,
    )
    return filteredAnswer
  }

  render() {
    const {activeId} = this.state
    const filteredAnswer = this.displayAnswer()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="drop-down"
              value={activeId}
              onChange={this.changeDisplayText}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="answer">{filteredAnswer.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
