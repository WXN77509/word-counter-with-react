function ShowProduct() {
  return (
    <section className="hidden bg-[rgba(255,_255,_255,_0.08)] text-[#E1E1E1] rounded-lg xl:flex flex-row gap-4 w-full max-w-[1208px] h-full max-h-[130px] px-4 pt-4 justify-center">
      <img
        src="icon.png"
        alt="website logo"
        className="w-10 h-10 user-drag-none user-select-none"
      />
      <p className="text-[#E1E1E1] bg-[#232323] p-4 rounded-t-lg">
        Get our metrics on any site with{" "}
        <span className="font-bold">our free Chrome extension.</span> Easily
        count words, characters, syllables, and sentences in real time as you
        type or select text.
        <span className="inline-block bg-reder w-0.5 align-baseline">
          {"\u00A0"}
        </span>
      </p>
      <dl className="grid grid-rows-3 grid-cols-3 bg-[#555555] text-white text-[14px] p-4 w-full items-center max-w-[370px] rounded-t-lg">
        <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt>27</dt>
          <dd>Words</dd>
        </div>
        <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt>157</dt>
          <dd>Characters</dd>
        </div>
        <div className="text-center">
          <dt>128</dt>
          <dd>Characters...</dd>
        </div>
        <hr className="col-span-3 border-[rgb(255,_255,_255,_0.14)]" />
        <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt>40</dt>
          <dd>Syllables</dd>
        </div>
        <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt>2</dt>
          <dd>Sentences</dd>
        </div>
        <div className="text-center">
          <dt>2</dt>
          <dd>Paragraphs</dd>
        </div>
      </dl>
      <div className="w-full max-w-[200px] flex flex-col gap-4">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-reder m-0 rounded-sm text-[16px] py-2 text-center text-white hover:bg-[#CC4734] active:bg-[#C13D2A]"
        >
          Get for Chrome
        </a>
        <p className="text-blacker text-[14px]">
          Instant reading and speaking time estimates, too!
        </p>
      </div>
    </section>
  );
}

export default ShowProduct;
