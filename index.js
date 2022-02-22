#!/usr/bin/env node

const { Quiz } = require('enquirer')
const questions = require('./questions')
const correctAnswerMessages = require('./correct_answer_messages')
const wrongAnswerMessages = require('./wrong_answer_messages')
class SetQuiz {
  constructor () {
    this.total = 0
  }

  introduce () {
    console.log('Let\'s start the Modalpartikel-Quiz!\nModalpertikeln: aber, halt, einfach, ja, ruhig, vielleicht, mal, eigentlich, denn, doch.')
  }

  async set (number) {
    const answer = await new Quiz(questions.questions[number]).run()
    if (answer.correct) {
      this.total += 1
      console.log(correctAnswerMessages.modalpartikeln[answer.correctAnswer])
    } else {
      console.log(wrongAnswerMessages.modalpartikeln[answer.correctAnswer])
    }
  }

  close (sumOfPoints) {
    console.log(`\nDu hast ${sumOfPoints} Fragen richtig beantwortet! :)`)
  }
}

async function main () {
  const quiz = new SetQuiz()
  quiz.introduce()
  for (let step = 0; step < 10; step += 1) {
    await quiz.set(step)
  }
  quiz.close(quiz.total)
}
main()
