import closeIcon from "../icons/close.svg";

type Props = {
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function CloseButton({ setIsClose }: Props) {
  return (
    <button
      onClick={() => setIsClose(true)}
      className="absolute top-2 right-2 bg-transparent rounded-sm p-2 text-center border-none cursor-pointer z-[2] hover:bg-[rgba(255,_255,_255,_0.14)]"
    >
      <img
        src={closeIcon}
        alt="close icon"
        className="user-drag-none user-select-none"
      />
    </button>
  );
}

export default CloseButton;
