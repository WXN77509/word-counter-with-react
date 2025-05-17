import { copyToClipBoard } from "../lib/listeners";
import copyIcon from "../icons/copy.svg";

type Props = {
  textArea: string;
};

function CopyButton({ textArea }: Props) {
  return (
    <button
      onClick={async () => {
        await copyToClipBoard(textArea);
      }}
      className="absolute top-12 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
    >
      <img
        src={copyIcon}
        alt="copy icon"
        className="user-drag-none user-select-none"
      />
    </button>
  );
}

export default CopyButton;
