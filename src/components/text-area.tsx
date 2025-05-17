import { autoResize } from "../lib/listeners";
import CopyButton from "./copyButton";
import CloseButton from "./closeButton";
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import { useState, useRef, useEffect } from "react";
import errorIcon from "../icons/error.svg";

type Props = {
  id: string;
  textArea: string;
  setTextArea: React.Dispatch<React.SetStateAction<string>>;
  onFocus: () => void;
  numbersOfTextArea: number;
  setNumbersOfTextArea: React.Dispatch<React.SetStateAction<number>>;
};

function TextArea({
  id,
  textArea,
  setTextArea,
  numbersOfTextArea,
  setNumbersOfTextArea,
  onFocus
}: Props) {
  const [isClose, setIsClose] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stylesTextArea =
    numbersOfTextArea > 1
      ? "w-full p-4 appearance-none border border-solid border-[rgb(255,_255,_255,_0.14)] rounded-lg bg-[url(../icons/star.webp)] 	bg-[length:1rem_1rem] bg-no-repeat bg-[position:1rem_calc(100%-1.5rem)] hover:bg-[#191919] focus:bg-[rgba(255,_255,_255,_0.14)] text-white text-[16px] min-h-[220px] z-[1] resize-none overflow-hidden focus:border-none focus:outline-none"
      : "w-full p-4 appearance-none border-none rounded-lg bg-[url(../icons/star.webp)] 	bg-[length:1rem_1rem] bg-no-repeat bg-[position:1rem_calc(100%-1.5rem)] bg-[rgba(255,_255,_255,_0.14)] text-white text-[16px] min-h-[220px] z-[1] resize-none overflow-hidden focus:border-none focus:outline-none";

  useEffect(() => {
    if (textareaRef.current && containerRef.current) {
      const newHeight = autoResize(textareaRef.current);
      containerRef.current.style.height = `${newHeight}px`;
    }
  }, []);

  if (isClose && id !== "text-input-1") return null;

  return (
    <>
      <div
        ref={containerRef}
        id="textarea-zone"
        aria-label="Text input for counter"
        className="w-full relative min-h-[220px]"
      >
        <textarea
          ref={textareaRef}
          id={id}
          name="text"
          value={textArea}
          aria-describedby="stats"
          placeholder="Type or paste your text or URL here"
          className={stylesTextArea}
          onInput={(e) => {
            setTextArea(e.currentTarget.value);
            const newHeight = autoResize(e.currentTarget);
            if (containerRef.current) {
              containerRef.current.style.height = `${newHeight}px`;
            }
          }}
          onFocus={onFocus}
        ></textarea>
        {textArea === "" && <CloseButton setIsClose={setIsClose} />}
        <AddButton setNumbersOfTextArea={setNumbersOfTextArea} />
        {textArea !== "" && <DeleteButton setTextArea={setTextArea} />}
        {textArea !== "" && <CopyButton textArea={textArea} />}
      </div>
      {id === "text-input-1" && (
        <span className=" w-full inline-flex justify-center items-center gap-2 bg-[#191919] py-2 mt-4 rounded-md">
          <img
            src={errorIcon}
            alt="error icon"
            className="w-[20px] h-[20px] user-drag-none user-select-none"
          />
          <p className="text-[13px]">You have unsaved changes.</p>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-reder py-1.5 px-2.5 m-0 rounded-sm text-[13px] text-white hover:bg-[#CC4734] active:bg-[#C13D2A]"
          >
            Sign up
          </a>
          <p className="text-[13px]">or</p>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-darker py-1.5 px-2.5 m-0 rounded-sm text-[13px] text-blacker hover:bg-[rgba(255,_255,_255,_0.1)] active:bg-[rgba(255,_255,_255,_0.14)]"
          >
            Log in
          </a>
          <p className="text-[13px]">to save your results. It’s free!</p>
        </span>
      )}
    </>
  );
}

export default TextArea;
