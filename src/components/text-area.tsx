import closeIcon from "../icons/close.svg";
import addIcon from "../icons/add.svg";
import { autoResize } from "../lib/listeners";
import { useRef, useEffect } from "react";
import { copyToClipBoard } from "../lib/listeners";

type Props = {
  textArea: string;
  setTextArea: React.Dispatch<React.SetStateAction<string>>;
};

function TextArea({ textArea, setTextArea }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current && containerRef.current) {
      const newHeight = autoResize(textareaRef.current);
      containerRef.current.style.height = `${newHeight}px`;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="textarea-zone"
      aria-label="Text input for counter"
      className="w-full relative min-h-[220px]"
    >
      <textarea
        ref={textareaRef}
        id="text-input-1"
        name="text"
        value={textArea}
        aria-describedby="stats"
        placeholder="Type or paste your text or URL here"
        className="w-full p-4 appearance-none border-none rounded-lg bg-[url(../icons/star.webp)] 	bg-[length:1rem_1rem] bg-no-repeat bg-[position:1rem_calc(100%-1.5rem)] bg-[rgba(255,_255,_255,_0.14)] text-white text-[16px] min-h-[220px] z-[1] resize-none overflow-hidden focus:outline-none"
        onInput={(e) => {
          setTextArea(e.currentTarget.value);
          const newHeight = autoResize(e.currentTarget);
          if (containerRef.current) {
            containerRef.current.style.height = `${newHeight}px`;
          }
        }}
      ></textarea>
      <button
        onClick={() => setTextArea("")}
        className="absolute top-2 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
      >
        <img
          src={closeIcon}
          alt="close icon"
          className="user-drag-none user-select-none"
        />
      </button>
      <button
        onClick={async () => {
          await copyToClipBoard(textArea);
        }}
        className="absolute bottom-3.5 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
      >
        <img
          src={addIcon}
          alt="add icon"
          className="user-drag-none user-select-none"
        />
      </button>
    </div>
  );
}

export default TextArea;
