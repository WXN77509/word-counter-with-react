import deleteIcon from "../icons/delete.svg";

type Props = {
  setTextArea: (value: string) => void;
};

function DeleteButton({ setTextArea }: Props) {
  return (
    <button
      onClick={() => setTextArea("")}
      className="absolute top-2 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
    >
      <img
        src={deleteIcon}
        alt="close icon"
        className="user-drag-none user-select-none"
      />
    </button>
  );
}

export default DeleteButton;
