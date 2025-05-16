import { useState } from "react";
import { getKeywords } from "../lib/lib";
import ArrowLeft from "../icons/arrow-left.svg";
import ArrowRight from "../icons/arrow-right.svg";

type Props = {
  textArea: string;
};

function KeyWords({ textArea }: Props) {
  const keyWords = getKeywords(textArea);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(keyWords.length / perPage);

  const moreSectionStyles =
    keyWords.length === 0
      ? ""
      : "bg-[rgba(255,_255,_255,_0.14)] text-[#E1E1E1]";

  const moreH2Styles =
    keyWords.length === 0
      ? ""
      : "border-b border-b-[rgb(255,_255,_255,_0.14)] border-solid pb-4";

  const start = (page - 1) * perPage;
  const end = start + perPage;

  return (
    <section
      className={
        moreSectionStyles +
        " border border-solid border-[rgb(255,_255,_255,_0.14)] rounded-lg pt-2 px-4 flex flex-col min-h-[304px]"
      }
    >
      <h2 className={moreH2Styles + " text-[18px] font-bold m-0 pt-2"}>
        Top keywords
      </h2>
      <div className="flex h-full justify-center items-center">
        {keyWords.length === 0 ? (
          <p className="w-full max-w-[280px] text-[14px] font-medium text-center">
            Type or paste your text or URL to see the most used keywords.
          </p>
        ) : (
          <ul className="list-none m-0 p-0 h-full w-full flex items-center flex-col">
            {keyWords.slice(start, end).map(([word, count, percent], index) => (
              <li
                key={index}
                className="py-2 border-b border-b-[rgb(255,_255,_255,_0.14)] border-solid flex justify-between w-full"
              >
                <span>{word}</span>
                <div className="inline-flex gap-4">
                  <span>{count}</span>
                  <span className="text-[#B7B7B7]">{percent}%</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {keyWords.length > 5 && (
        <div className="inline-flex gap-4 w-full justify-center items-center text-[#B7B7B7] h-16">
          <button
            className={`p-2 rounded-sm ${
              page === 1 ? "" : "hover:bg-[rgba(255,_255,_255,_0.14)]"
            }`}
            onClick={() => setPage((prev: number) => Math.max(1, prev - 1))}
            disabled={page === 1}
          >
            <img
              src={ArrowLeft}
              alt="Arrow - Left picture"
              className="w-4 h-4 user-drag-none user-select-none"
            />
          </button>
          <span>{`1 / ${Math.ceil(keyWords.length / 5)}`}</span>
          <button
            className={`p-2 rounded-sm ${
              page < totalPages ? "hover:bg-[rgba(255,_255,_255,_0.14)]" : ""
            }`}
            onClick={() =>
              setPage((prev: number) => Math.min(totalPages, prev + 1))
            }
            disabled={page === totalPages}
          >
            <img
              src={ArrowRight}
              alt="Arrow - Right picture"
              className="w-4 h-4 user-drag-none user-select-none"
            />
          </button>
        </div>
      )}
    </section>
  );
}

export default KeyWords;
