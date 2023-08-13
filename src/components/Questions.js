import { useQuiz } from "../hooks/useQuiz";
import Options from "./Options";

function Questions() {
  const { index, questions } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options />
    </div>
  );
}

export default Questions;
