import { useContext } from 'react';

//*Context
import { QuizContext } from '../context/quiz';

import './GameOver.css';
import WellDone from '../img/welldone.svg';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação {quizState.score}</p>
      <p>
        Voce acertou {quizState.score} de {quizState.questions.length}
        {''} perguntas.
      </p>
      <img src={WellDone} alt="Fim de jogo" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
