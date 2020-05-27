import React, { Component } from 'react'
import QuizQuestion { Component } from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
      super(props)
      this.state = { quiz_position: 1 }
  }
  render() {
      return (
          <div><QuizQuestion>{quizData.quiz_questions[0].instruction_text}</QuizQuestion></div>
      )
  }
}

export default Quiz