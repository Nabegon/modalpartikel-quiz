const questions = require('./questions');
const { Quiz } = require('enquirer');


class SetQuiz {
constructor(){
  this.total = 0;
}

  introduce () {
    console.log('Let\'s start the Modalpartikel-Quiz!\nModalpertikel: aber, eben/halt, einfach, ja, ruhig, vielleicht, mal, eigentlich, denn, doch.')
  }

  async set (number) {
    const answer = await new Quiz(questions.questions[number]).run()
    if (answer.correct) {
      this.total += 1;
      if (answer.correctAnswer === 'denn'){
        console.log('Richtig!\nWie geht es dir denn?\ndenn - nur bei Fragen(situative Interesse)')
      }else if(answer.correctAnswer === 'ruhig'){
        console.log('Richtig!\nDu kannst ruhig so viel Jägermeister trinken, wie du willst.\nruhig - kein Problem')
      }else{
        console.log('Richtig!\nWollen wir Döner essen? Nein, ich habe kein hunger. Dann gehe ich eben/halt nach Hause.\neben/halt - Allgemeingültigkeit, Resignation')
      }
    } else {
      if (answer.correctAnswer === 'denn'){
        console.log(`Falsch! Die richtige Antwort ist ${answer.correctAnswer}.\nWie geht es dir denn?\ndenn - nue bei Fragen (situatives Interesse)`)
      }else if(answer.correctAnswer === 'ruhig'){
        console.log(`Falsch! Die richtige Antwort ist ${answer.correctAnswer}.\nDu kannst ruhig so viel Jägermeister trinken, wie du willst.\nruhig - kein Problem`)
      }else{
        console.log(`Falsch! Die richtige Antwort ist ${answer.correctAnswer}.\nWollen wir Döner essen? Nein, ich habe kein hunger. Dann gehe ich eben/halt nach Hause.\neben/halt - Allgemeingültigkeit, Resignatio`)
      }
    }
  }

  close(sumOfPoints){
    console.log(`Your points are ${sumOfPoints}. Fertig :)`)
  }
}

async function main() {
  const quiz = new SetQuiz()
  quiz.introduce()
  for (let step = 0; step < 3; step++) {
    await quiz.set(step)
  }
  quiz.close(quiz.total)
}

main();