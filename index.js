const { Quiz } = require('enquirer');

 const prompt = new Quiz({
  name: 'modalpartikeln',
  message: 'Wie geht es dir ___ ?',
  choices: ['eigentlich', 'denn', 'doch', 'ja', 'ruhig'],
  correctChoice: 1
});

 prompt
  .run(console.log('Let\'s start the Modalpartikel-Quiz!\nModalpertikel: aber, eben/halt, einfach, ja, ruhig, vielleicht, mal, eigentlich, denn, doch.' ))
  .then(answer => {
    if (answer.correct) {
      console.log('Richtig! - Wie geht es dir denn?\ndenn - nue bei Fragen (situatives Interesse)');
    } else {
      console.log(`Falsch! Die richtige Antwort ist ${answer.correctAnswer}.\nWie geht es dir denn?\ndenn - nue bei Fragen (situatives Interesse)`);
    }
  })
  .catch(console.error);