import * as lib from "../lib/lib";

type Props = {
  textArea: string;
};

function Stats({ textArea }: Props) {
  return (
    <dl className="grid grid-rows-5 grid-cols-3 border border-solid border-[rgb(255,_255,_255,_0.14)] bg-black py-4 text-[14px] items-center max-h-[300px] rounded-lg">
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfWords(textArea)}
        </dt>
        <dd>Words</dd>
      </div>
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfChar(textArea)}
        </dt>
        <dd>Characters</dd>
      </div>
      <div className="text-center">
        <dt className="font-medium text-[28px]">
          {lib.getNumberSpaces(textArea)}
        </dt>
        <dd>Spaces</dd>
      </div>
      <hr className="col-span-3 border-[rgb(255,_255,_255,_0.14)]" />
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfSyllables(textArea)}
        </dt>
        <dd>Syllables</dd>
      </div>
      <div className="text-center border-r border-[rgb(255,_255,_255,_0.14)]">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfSentences(textArea)}
        </dt>
        <dd>Sentences</dd>
      </div>
      <div className="text-center">
        <dt className="font-medium text-[28px]">
          {lib.getNumberOfParagraph(textArea)}
        </dt>
        <dd>Paragraphs</dd>
      </div>
      <hr className="col-span-3 border-[rgb(255,_255,_255,_0.14)]" />
      <div className="col-span-3 inline-flex">
        <div className="text-center w-full border-r border-[rgb(255,_255,_255,_0.14)]">
          <dt className="font-medium text-[28px]">
            {lib.getNumberOfVowels(textArea)}
          </dt>
          <dd>Vowels</dd>
        </div>
        <div className="text-center w-full">
          <dt className="font-medium text-[28px]">
            {lib.getNumberOfConsonants(textArea)}
          </dt>
          <dd>Consonants</dd>
        </div>
      </div>
    </dl>
  );
}

export default Stats;
