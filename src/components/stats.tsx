import * as lib from "../lib/lib";

type Props = {
  textArea: string;
};

function Stats({ textArea }: Props) {
  const styles =
    textArea === ""
      ? "bg-black border border-solid border-[rgb(255,_255,_255,_0.14)]"
      : "bg-[rgba(255,_255,_255,_0.14)] text-[#E1E1E1]";

  return (
    <dl
      className={
        "grid grid-rows-5 grid-cols-3 py-4 text-[14px] items-center max-h-[300px] rounded-lg " +
        styles
      }
    >
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfWords(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Words</dd>
      </div>
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfChar(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Characters</dd>
      </div>
      <div className="text-center">
        <dt className="font-medium text-[28px]">
          {lib.getNumberSpaces(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Spaces</dd>
      </div>
      <hr className="col-span-3 border-[rgb(255,_255,_255,_0.14)]" />
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfSyllables(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Syllables</dd>
      </div>
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfSentences(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Sentences</dd>
      </div>
      <div className="text-center">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfParagraph(textArea)}
        </dt>
        <dd className="text-[#B7B7B7]">Paragraphs</dd>
      </div>
      <hr className="col-span-3 border-[rgb(255,_255,_255,_0.14)]" />
      <div className="col-span-3 inline-flex">
        <div className="text-center w-full border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt className="font-medium text-[28px]">
            {lib.getNumberOfVowels(textArea)}
          </dt>
          <dd className="text-[#B7B7B7]">Vowels</dd>
        </div>
        <div className="text-center w-full">
          <dt className="font-medium text-[28px]">
            {lib.getNumberOfConsonants(textArea)}
          </dt>
          <dd className="text-[#B7B7B7]">Consonants</dd>
        </div>
      </div>
    </dl>
  );
}

export default Stats;
