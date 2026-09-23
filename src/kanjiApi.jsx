import { useState, useEffect } from "react";

function KanjiApi({ level = 3 }) {
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
    <div className="bg-custom-background w-full min-h-screen text-custom-text font-english">
      {kanji.moji && (
        <div className="px-10 py-10 text-center rounded-3xl mx-7">
          <div className="bg-custom-accent text-custom-text font-kanji h-fit w-fit text-9xl p-10 mx-auto mb-7">{kanji.moji}</div>
          <div className="flex justify-center gap-40 my-10">
            <button onClick={setKanji} className="py-2 px-4 rounded bg-custom-secondary text-custom-text hover:bg-custom-secondary-hover active:bg-custom-secondary-active transition-colors">Clear</button>
            <button onClick={nextKanji} className="py-2 px-4 rounded bg-custom-primary text-white hover:bg-custom-primary-hover active:bg-custom-primary-active transition-colors">Next Kanji</button>
          </div>
          <div className="flex justify-around items-center">
            {kanji.showKunBtn && <button className="text-custom-text-muted hover:text-custom-primary transition-colors" onClick={handleKunButtonClick}>
              <div className="flex justify-center gap-2">
                <p>Kun Reading</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showKun && <p className="whitespace-pre-line text-custom-text"><div className="bg-custom-forest-light border-custom-border-hover border-2 p-3 rounded-2xl text-custom-input-hover">Kun youmi {'\n' + kanji.kunArray.join('\n')}</div></p>}
            {kanji.showOnBtn && <button className="text-custom-text-muted hover:text-custom-primary transition-colors" onClick={handleOnButtonClick}>
              <div className="flex justify-center gap-2">
                <p>On Reading</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showOn && <p className="whitespace-pre-line text-custom-text"><div className="bg-custom-forest-light border-custom-border-hover border-2 p-3 rounded-2xl text-custom-input-hover">On youmi {'\n' + kanji.onArray.join('\n')}</div></p>}
            {kanji.showMeaningBtn && <button className="text-custom-text-muted hover:text-custom-primary transition-colors" onClick={handleMeaningButtonClick}>
              <div className="flex justify-center gap-2">
                <p>Meaning</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showMeaning && <div className="whitespace-pre-line font-medium bg-custom-forest-light border-custom-border-hover border-2 p-3 rounded-2xl text-custom-input-hover">Meaning <p className="font-extralight font-meaningText">{kanji.meaning.join('\n')}</p></div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default KanjiApi;