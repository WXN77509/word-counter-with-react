import TextArea from "./text-area";
import Stats from "./stats";
import KeyWords from "./keywords";
import { useState } from "react";

function Main() {
  const [textArea, setTextArea] = useState<string>("");

  return (
    <main className="flex flex-col md:flex-row gap-8 w-full h-screen max-w-[1240px] px-4">
      <TextArea textArea={textArea} setTextArea={setTextArea} />
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Stats textArea={textArea} />
        <KeyWords textArea={textArea} />
      </div>
    </main>
  );
}

export default Main;
