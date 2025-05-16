function Nav() {
  return (
    <nav className="w-full max-w-[1240px] flex flex-row justify-between mt-5 px-4 items-center">
      <img
        src="icon.png"
        alt="website logo"
        className="w-8 h-8 user-drag-none user-select-none"
      />
      <ul className="list-none inline-flex gap-4 items-center">
        <li className=" text-blacker text-[13px]">
          Save your work. It's free!
        </li>
        <li className="inline-flex gap-2">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-darker py-1.5 px-2.5 m-0 rounded-sm text-[13px] text-blacker hover:bg-[rgba(255,_255,_255,_0.1)] active:bg-[rgba(255,_255,_255,_0.14)]"
          >
            Log in
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-reder py-1.5 px-2.5 m-0 rounded-sm text-[13px] text-white hover:bg-[#CC4734] active:bg-[#C13D2A]"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
