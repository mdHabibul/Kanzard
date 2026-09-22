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
    <div className="bg-custom-background w-full min-h-screen text-custom-text">
      {kanji.moji && (
        <div className="px-10 py-10 text-center rounded-3xl mx-7">
          <div className="bg-custom-accent font-kanji h-fit w-fit text-9xl p-10 mx-auto mb-7">{kanji.moji}</div>
          <div className="flex justify-around items-center">
            {kanji.showKunBtn && <button onClick={handleKunButtonClick}>
              <div className="flex justify-center gap-2">
                <p>Kun Reading</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showKun && <p className="whitespace-pre-line">Kun youmi {'\n' + kanji.kunArray.join('\n')}</p>}
            {kanji.showOnBtn && <button onClick={handleOnButtonClick}>
              <div className="flex justify-center gap-2">
                <p>On Reading</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showOn && <p className="whitespace-pre-line">On youmi {'\n' + kanji.onArray.join('\n')}</p>}
            {kanji.showMeaningBtn && <button onClick={handleMeaningButtonClick}>
              <div className="flex justify-center gap-2">
                <p>Meaning</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="pt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div></button>}
            {kanji.showMeaning && <p className="whitespace-pre-line">Meaning {'\n' + kanji.meaning.join('\n')}</p>}
          </div>
          <div className="flex justify-center gap-40 mt-7">
            <button className="py-2 px-4 rounded bg-custom-secondary">Clear</button>
            <button onClick={nextKanji} className="py-2 px-4 rounded bg-custom-primary text-white">Next Kanji</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KanjiApi;