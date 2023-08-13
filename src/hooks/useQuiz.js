import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

function useQuiz() {
  const value = useContext(QuizContext);

  if (value === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return value;
}

export { useQuiz };
