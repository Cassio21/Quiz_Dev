import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h1>Seja bem-vindo ao Game!</h1>
      <p>Clique no botão abaixo para começar a jogar:</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
        Jogue agora mesmo!
      </button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Welcome;
