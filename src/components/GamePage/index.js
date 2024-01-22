import {Component} from 'react'
import RulesPopUp from '../RulesPopUp'

import {
  Bg,
  Con,
  Nav,
  NavCard2,
  NavCard1,
  NavPara,
  ResultCard,
  Score,
  ResultCon,
  ResultHead,
  SymCard,
  SymButton,
  SymImg,
  ScorePara,
  PlayArea,
  PlayAgainButton,
} from './styledComponents'

class GamePage extends Component {
  state = {
    score: 0,
    resultDisplay: false,
    selectedSymUrl: '',
    opponentData: {},
    result: '',
  }

  onSymbolClick = (id, url) => {
    const {choicesList} = this.props
    const {score} = this.state
    const opponentDetails =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    let resultText
    let updatedScore = score

    switch (id) {
      case choicesList[0].id:
        resultText = opponentDetails.id === 'SCISSORS' ? 'YOU WON' : 'YOU LOSE'
        break
      case choicesList[1].id:
        resultText = opponentDetails.id === 'PAPER' ? 'YOU WON' : 'YOU LOSE'
        break
      case choicesList[2].id:
        resultText = opponentDetails.id === 'ROCK' ? 'YOU WON' : 'YOU LOSE'
        break
      default:
        break
    }

    if (id === opponentDetails.id) {
      resultText = 'IT IS DRAW'
    }

    if (resultText === 'YOU WON') {
      updatedScore += 1
    } else if (resultText === 'YOU LOSE') {
      updatedScore -= 1
    }

    this.setState({
      resultDisplay: true,
      selectedSymUrl: url,
      result: resultText,
      opponentData: opponentDetails,
      score: updatedScore,
    })
  }

  onPlayAgain = () => {
    this.setState({resultDisplay: false})
  }

  renderDisplaySymbols = () => {
    const {choicesList} = this.props
    const testObject = {
      ROCK: 'rockButton',
      SCISSORS: 'scissorsButton',
      PAPER: 'paperButton',
    }

    return (
      <SymCard>
        {choicesList.map(eachItem => (
          <SymButton
            type="button"
            key={eachItem.id}
            onClick={() => this.onSymbolClick(eachItem.id, eachItem.imageUrl)}
            data-testid={testObject[eachItem.id]}
          >
            <SymImg src={eachItem.imageUrl} alt={eachItem.id} />
          </SymButton>
        ))}
      </SymCard>
    )
  }

  renderResult = () => {
    const {result, selectedSymUrl, opponentData} = this.state

    return (
      <>
        <ResultCon>
          <ResultCard>
            <NavPara>YOU</NavPara>
            <SymImg src={selectedSymUrl} alt="your choice" />
          </ResultCard>
          <ResultCard>
            <NavPara>OPPONENT</NavPara>
            <SymImg src={opponentData.imageUrl} alt="opponent choice" />
          </ResultCard>
        </ResultCon>
        <ResultHead>{result}</ResultHead>
        <PlayAgainButton type="button" onClick={this.onPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
    )
  }

  render() {
    const {score, resultDisplay} = this.state

    return (
      <Bg>
        <Con>
          <Nav>
            <NavCard1>
              <NavPara>ROCK PAPER SCISSORS</NavPara>
            </NavCard1>
            <NavCard2>
              <Score>Score</Score>
              <ScorePara>{score}</ScorePara>
            </NavCard2>
          </Nav>
          <PlayArea>
            {resultDisplay ? this.renderResult() : this.renderDisplaySymbols()}
          </PlayArea>
          <RulesPopUp />
        </Con>
      </Bg>
    )
  }
}

export default GamePage
