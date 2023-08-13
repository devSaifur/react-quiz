import { useQuiz } from "../hooks/useQuiz";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = ":O";
  if (percentage >= 80 && percentage < 100) emoji = ":D";
  if (percentage >= 50 && percentage < 80) emoji = ":)";
  if (percentage >= 0 && percentage < 50) emoji = ":(";
  if (percentage === 0) emoji = ":|";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">HighScore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
