import { useState } from "react";

export const Question = ({
  question,
  answers,
  correct,
  keepCase,
  nextId,
}: {
  question: string;
  answers?: string[];
  correct: string | number | ((value: string) => boolean);
  keepCase: boolean;
  nextId: string;
}) => {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>{question}</h3>
      {Array.isArray(answers) ? (
        answers.map((answer, i) => (
          <button
            key={i}
            class="answer"
            onClick={(ev) => {
              if (i === correct) {
                window.location.href = `./${nextId}`;
              } else {
                ev.target.style.border = "1px solid red";
                ev.target.style.background = "#733";
                ev.target.style.color = "#fff";
                ev.target.disabled = true;
              }
            }}
          >
            {answer}
          </button>
        ))
      ) : (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();

            const isCorrect = (text: string) => {
              if (typeof correct === "function") {
                return correct(text);
              } else {
                let val = text.trim();
                if (!keepCase) val = val.toLowerCase();
                return val === correct.toString();
              }
            };

            if (isCorrect(text)) {
              window.location.href = `./${nextId}`;
            } else {
              const el: HTMLDivElement = document.querySelector(".guess");
              el.style.border = "1px solid red";
              el.style.background = "#fee";
            }
          }}
        >
          <input
            className="guess"
            type="text"
            value={text}
            onChange={(ev) => {
              setText(ev.target.value);
            }}
          />
          <button type="submit" className="guess-submit">
            Guess
          </button>
        </form>
      )}
    </div>
  );
};
