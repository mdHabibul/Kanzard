import { createFileRoute } from "@tanstack/react-router";
import KanjiApi from "../kanjiApi";
import '../App.css'

export const Route = createFileRoute("/jlpt-n5")({
  component: JlptN5,
});

function JlptN5() {
  return (
    <>
      <div className="bg-[#FFE5C5] w-full min-h-screen text-[#E05555]">
        <KanjiApi level={5} />
      </div>
    </>
  )
}

export default JlptN5