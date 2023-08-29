import { useContext } from 'react';
import './Option.css';

//*context
import { QuizContext } from '../context/quiz';

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      } ${quizState.answerSelected && option !== answer ? 'wrong' : ''} ${
        hide ? 'hide' : ''
      }`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
