import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from 'react'
import '../App.css'

export const Route = createFileRoute("/jlpt-n3")({
  component: JlptN3,
});


function KanjiApi() {
  const [kanji, setKanji] = useState('')
  const [kunArray, setKunArray] = useState([])
  const [onArray, setOnArray] = useState([])
  const [meaning, setMeaning] = useState([])
  const [showKun, setShowKun] = useState(false)
  const [showOn, setShowOn] = useState(false)
  const [showMeaning, setShowMeaning] = useState(false)
  const [showKunBtn, setShowKunBtn] = useState(true)
  const [showOnBtn, setShowOnBtn] = useState(true)
  const [showMeaningBtn, setShowMeaningBtn] = useState(true)

  const fetchKanji = async () => {
    setShowKunBtn(true)
    setShowOnBtn(true)
    setShowMeaningBtn(true)
    try {
      const response = await fetch('https://kanjiapi.dev/v1/kanji/jlpt-3-enriched')
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.length)
      setKanji(data[randomIndex].kanji)
      setKunArray(data[randomIndex].kun_readings)
      setOnArray(data[randomIndex].on_readings)
      setMeaning(data[randomIndex].meanings)
      setShowKun(false)
      setShowOn(false)
      setShowMeaning(false)
    } catch (error) {
      console.error('Error fetching kanji:', error)
    }
  }

  useEffect(() => {
    fetchKanji();
  }, [])

  const Showkun = () => setShowKun(true)
  const Showkunbtn = () => setShowKunBtn(false)

  const handleKunButtonClick = () => {
    Showkun();
    Showkunbtn();
  };

  const Showmeaning = () => setShowMeaning(true)
  const Showmeaningbtn = () => setShowMeaningBtn(false)

  const handleMeaningButtonClick = () => {
    Showmeaning();
    Showmeaningbtn();
  };

  const Showon = () => setShowOn(true)
  const Showonbtn = () => setShowOnBtn(false)

  const handleOnButtonClick = () => {
    Showon();
    Showonbtn();
  };

  return (
    <div>
      {kanji &&
        <div className='bg-[#E04444] text-[#FFE4C4] px-10 py-10 text-center rounded-3xl mx-7'>
          <p>Fetched Kanji: {kanji}</p>
          <div className='flex justify-around items-center'>
            {showKunBtn && <button onClick={handleKunButtonClick} className=''>Kun</button>}
            {showKun && <p className="whitespace-pre-line">Kun youmi {'\n' + kunArray.join('\n')}</p>}
            {showOnBtn && <button onClick={handleOnButtonClick} className=''>On</button>}
            {showOn && <p className="whitespace-pre-line">On youmi {'\n' + onArray.join('\n')}</p>}
            {showMeaningBtn && <button onClick={handleMeaningButtonClick} className=''>Meaning</button>}
            {showMeaning && <p className="whitespace-pre-line">Meaning {'\n' + meaning.join('\n')}</p>}
          </div>
          <button onClick={() => { setKanji(''); setShowKun(false) }} className='bg-[#FFE4C4] text-[#E04444] py-2 px-4 rounded mt-4'>Clear</button>
          <button onClick={fetchKanji} className='bg-[#E04444] text-[#FFE4C4] py-2 px-4 rounded'>Next Kanji</button>
        </div>}

    </div>
  )
}

function JlptN3() {
  return (
    <>
      <div className="bg-[#FFE4C4] w-full min-h-screen text-[#E04444]">
        <KanjiApi />
      </div>
    </>
  )
}

export default JlptN3
