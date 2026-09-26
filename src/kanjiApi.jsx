import { useState, useEffect } from "react";

function KanjiApi({ level }) {
  const [data, setData] = useState([]);
  const [kanji, setKanji] = useState({
    moji: null,
    kunArray: [],
    onArray: [],
    meaning: [],
    showKun: false,
    showOn: false,
    showMeaning: false,
    showKunBtn: true,
    showOnBtn: true,
    showMeaningBtn: true,
  });

  const pickRandomKanji = (items) => {
    if (!items || items.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const applyKanji = (entry) => {
    if (!entry) return;

    setKanji((prev) => ({
      ...prev,
      moji: entry.kanji ?? null,
      kunArray: entry.kun_readings ?? [],
      onArray: entry.on_readings ?? [],
      meaning: entry.meanings ?? [],
      showKun: false,
      showOn: false,
      showMeaning: false,
      showKunBtn: true,
      showOnBtn: true,
      showMeaningBtn: true,
    }));

  };
  console.log(kanji)

  const fetchKanji = async () => {
    try {
      const response = await fetch(`https://kanjiapi.dev/v1/kanji/jlpt-${level}-enriched`);

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const nextData = await response.json();
      setData(nextData);
      const nextEntry = pickRandomKanji(nextData);
      applyKanji(nextEntry);
    } catch (error) {
      console.error("Error fetching kanji:", error);
    }
  };

  function nextKanji() {
    const nextEntry = pickRandomKanji(data);
    applyKanji(nextEntry);
  }

  useEffect(() => {
    fetchKanji();
  }, [level]);

  const Showkun = () => setKanji((prev) => ({ ...prev, showKun: true }));
  const Showkunbtn = () => setKanji((prev) => ({ ...prev, showKunBtn: false }));

  const handleKunButtonClick = () => {
    Showkun();
    Showkunbtn();
  };

  const Showmeaning = () => setKanji((prev) => ({ ...prev, showMeaning: true }));
  const Showmeaningbtn = () => setKanji((prev) => ({ ...prev, showMeaningBtn: false }));

  const handleMeaningButtonClick = () => {
    Showmeaning();
    Showmeaningbtn();
  };

  const Showon = () => setKanji((prev) => ({ ...prev, showOn: true }));
  const Showonbtn = () => setKanji((prev) => ({ ...prev, showOnBtn: false }));

  const handleOnButtonClick = () => {
    Showon();
    Showonbtn();
  };

  return (
    <div className="min-h-screen w-full bg-custom-background text-custom-text font-english">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-custom-text-muted">Kanji Practice</p>
            <h1 className="text-3xl font-semibold">Daily Kanji</h1>
          </div>
          <div className="rounded-full border border-custom-border-hover bg-custom-secondary px-4 py-2">
            <span className="text-xs font-semibold uppercase text-custom-text-muted">JLPT N{level}</span>
          </div>
        </div>
        {kanji.moji && (
          <div className="overflow-hidden rounded-3xl border border-custom-border-hover bg-custom-secondary shadow-2xl">
            <div className="flex flex-col items-center px-6 pb-12 pt-12">
              <p className="mb-8 text-xs font-medium uppercase text-custom-text-muted">Recognize the character</p>
              <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-custom-border-hover bg-custom-background shadow-inner">
                <span className="font-kanji text-[11rem] font-normal leading-none text-custom-text">{kanji.moji}</span>
              </div>
              <p className="mt-8 text-sm text-custom-text-muted">Take your time. Study at your own pace.</p>
            </div>
            <div className="border-t border-custom-border-hover px-6 py-6">
              <div className="flex justify-center gap-3">
                <button onClick={setKanji} className="rounded-xl border border-custom-border-hover bg-custom-background px-8 py-3 text-sm font-medium text-custom-text-muted hover:border-custom-primary hover:text-custom-text">Clear</button>
                <button onClick={nextKanji} className="rounded-xl bg-custom-primary px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 active:scale-[0.98]">
                  Next Kanji
                  <span className="ml-3">→</span>
                </button>
              </div>
            </div>
            <div className="border-t border-custom-border-hover">
              <div className="flex">
                <div className="w-1/3 border-r border-custom-border-hover p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-custom-text-muted">KUN READING</span>
                    <span className="text-sm font-japanese text-custom-text-muted">訓読み</span>
                  </div>
                  {kanji.showKun ? (
                    <div className="min-h-24">
                      <p className="mb-3 text-xs text-custom-text-muted">Japanese reading</p>

                      <div className="whitespace-pre-line space-y-2 text-lg font-medium text-custom-text">
                        {kanji.kunArray.length > 0 ? kanji.kunArray.join("\n") : "No information available"}
                      </div>
                    </div>
                  ) : (
                    <button onClick={handleKunButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                      <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                      <span className="text-custom-text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                      </span>
                    </button>
                  )}
                </div>
                <div className="w-1/3 border-r border-custom-border-hover p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-custom-text-muted">ON READING</span>
                    <span className="text-sm font-japanese text-custom-text-muted">音読み</span>
                  </div>
                  {kanji.showOn ? (
                    <div className="min-h-24">
                      <p className="mb-3 text-xs text-custom-text-muted">Chinese-derived reading</p>
                      <div className="whitespace-pre-line space-y-2 text-lg font-medium text-custom-text">
                        {kanji.onArray.length > 0 ? kanji.onArray.join("\n") : "No information available"}
                      </div>
                    </div>
                  ) : (
                    <button onClick={handleOnButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                      <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                      <span className="text-custom-text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                      </span>
                    </button>
                  )}
                </div>
                <div className="w-1/3 p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-custom-text-muted">MEANING</span>
                    <span className="text-sm font-japanese text-custom-text-muted">意味</span>
                  </div>
                  {kanji.showMeaning ? (
                    <div className="min-h-24">
                      <p className="mb-3 text-xs text-custom-text-muted">English meaning</p>
                      <div className="whitespace-pre-line space-y-2 text-lg font-medium text-custom-text">
                        {kanji.meaning.length > 0 ? kanji.meaning.join("\n") : "No information available"}
                      </div>
                    </div>
                  ) : (
                    <button onClick={handleMeaningButtonClick} className="flex w-full items-center justify-between rounded-xl border border-custom-border-hover bg-custom-background px-4 py-4 text-left hover:border-custom-primary">
                      <span className="text-sm font-medium text-custom-text-muted">Reveal</span>
                      <span className="text-custom-text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default KanjiApi;