import { useQuiz } from "../hooks/useQuiz";

function Options() {
  const { index, questions, answer, dispatch } = useQuiz();

  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {questions[index].options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
