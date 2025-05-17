import TextArea from "./text-area";
import Stats from "./stats";
import KeyWords from "./keywords";
import { useState } from "react";

function Main() {
  const [textAreas, setTextAreas] = useState<string[]>([""]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [numbersOfTextArea, setNumbersOfTextArea] = useState<number>(1);

  return (
    <main className="flex flex-col md:flex-row gap-8 w-full h-screen max-w-[1240px] px-4">
      <div className="w-full">
        <ul className="list-none m-0 p-0 flex flex-col gap-4">
          {Array.from({ length: numbersOfTextArea }, (_, index) => (
            <li key={index}>
              <TextArea
                id={`text-input-${index + 1}`}
                textArea={textAreas[index] || ""}
                setTextArea={(value) => {
                  const updated = [...textAreas];
                  updated[index] = value.toString();
                  setTextAreas(updated);
                }}
                numbersOfTextArea={numbersOfTextArea}
                setNumbersOfTextArea={setNumbersOfTextArea}
                onFocus={() => setFocusedIndex(index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Stats textArea={textAreas[focusedIndex] || ""} />
        <KeyWords textArea={textAreas[focusedIndex] || ""} />
      </div>
    </main>
  );
}

export default Main;
