import addIcon from "../icons/add.svg";

type Props = {
  setNumbersOfTextArea: React.Dispatch<React.SetStateAction<number>>;
};

function AddButton({ setNumbersOfTextArea }: Props) {
  return (
    <button
      onClick={() => setNumbersOfTextArea((n) => n + 1)}
      className="absolute bottom-3.5 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
    >
      <img
        src={addIcon}
        alt="add icon"
        className="user-drag-none user-select-none"
      />
    </button>
  );
}

export default AddButton;
