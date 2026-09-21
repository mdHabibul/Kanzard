import { useEffect, useState } from 'react'
import './App.css'

function KanjiApi() {
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
    showMeaningBtn: true
  });
  // const [kanji, setKanji] = useState('')
  // const [kunArray, setKunArray] = useState([])
  // const [onArray, setOnArray] = useState([])
  // const [meaning, setMeaning] = useState([])
  // const [showKun, setShowKun] = useState(false)
  // const [showOn, setShowOn] = useState(false)
  // const [showMeaning, setShowMeaning] = useState(false)
  // const [showKunBtn, setShowKunBtn] = useState(true)
  // const [showOnBtn, setShowOnBtn] = useState(true)
  // const [showMeaningBtn, setShowMeaningBtn] = useState(true)

  const fetchKanji = async () => {
    setKanji({ ...kanji, showKunBtn: true })
    setKanji({ ...kanji, showKunBtn: true })
    setKanji({ ...kanji, showMeaningBtn: true })
    // setShowKunBtn(true)
    // setShowOnBtn(true)
    // setShowMeaningBtn(true)
    try {
      const response = await fetch('https://kanjiapi.dev/v1/kanji/jlpt-3-enriched')
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.length)
      setKanji({
        ...kanji,
        moji: data[randomIndex].kanji,
        kunArray: data[randomIndex].kun_readings,
        onArray: data[randomIndex].on_readings,
        meaning: data[randomIndex].meanings,
        showKun: false,
        showOn: false,
        showMeaning: false
      });
      
      // console.log(data)
      // setKanji(data[randomIndex].kanji)
      // setKunArray(data[randomIndex].kun_readings)
      // setOnArray(data[randomIndex].on_readings)
      // setMeaning(data[randomIndex].meanings)
      // setShowKun(false)
      // setShowOn(false)
      // setShowMeaning(false)
    } catch (error) {
      console.error('Error fetching kanji:', error)
    }
  }

  useEffect(() => {
    fetchKanji();
  }, [])

  const Showkun = () => setKanji({ ...kanji, showKun: true })
  const Showkunbtn = () => setKanji({ ...kanji, showKunBtn: false })

  // const Showkun = () => setShowKun(true)
  // const Showkunbtn = () => setShowKunBtn(false)

  const handleKunButtonClick = () => {
    Showkun();
    Showkunbtn();
  };

  const Showmeaning = () => setKanji({ ...kanji, showMeaning: true })
  const Showmeaningbtn = () => setKanji({ ...kanji, showMeaningBtn: false })

  // const Showmeaning = () => setShowMeaning(true)
  // const Showmeaningbtn = () => setShowMeaningBtn(false)

  const handleMeaningButtonClick = () => {
    Showmeaning();
    Showmeaningbtn();
  };

  const Showon = () => setKanji({ ...kanji, showOn: true })
  const Showonbtn = () => setKanji({ ...kanji, showOnBtn: false })

  // const Showon = () => setShowOn(true)
  // const Showonbtn = () => setShowOnBtn(false)

  const handleOnButtonClick = () => {
    Showon();
    Showonbtn();
  };

  return (
    <div>
      {kanji.moji &&
        <div className='bg-[#E04444] text-[#FFE4C4] px-10 py-10 text-center rounded-3xl mx-7'>
          <p>Fetched Kanji: {kanji.moji}</p>
          <div className='flex justify-around items-center'>
            {kanji.showKunBtn && <button onClick={handleKunButtonClick} className=''>Kun</button>}
            {kanji.showKun && <p className="whitespace-pre-line">Kun youmi {'\n' + kanji.kunArray.join('\n')}</p>}
            {kanji.showOnBtn && <button onClick={handleOnButtonClick} className=''>On</button>}
            {kanji.showOn && <p className="whitespace-pre-line">On youmi {'\n' + kanji.onArray.join('\n')}</p>}
            {kanji.showMeaningBtn && <button onClick={handleMeaningButtonClick} className=''>Meaning</button>}
            {kanji.showMeaning && <p className="whitespace-pre-line">Meaning {'\n' + kanji.meaning.join('\n')}</p>}
          </div>
          <button onClick={() => { setKanji(''); setShowKun(false) }} className='bg-[#FFE4C4] text-[#E04444] py-2 px-4 rounded mt-4'>Clear</button>
          <button onClick={fetchKanji} className='bg-[#E04444] text-[#FFE4C4] py-2 px-4 rounded'>Next Kanji</button>
        </div>}
    </div>
  )
}

function App() {
  return (
    <>
      <div className="bg-[#FFE4C4] w-full min-h-screen text-[#E04444]">
        <KanjiApi />
      </div>
    </>
  )
}

export default App
