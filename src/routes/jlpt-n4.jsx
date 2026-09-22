import { createFileRoute } from "@tanstack/react-router";
import KanjiApi from "../kanjiApi";
import '../App.css'

export const Route = createFileRoute("/jlpt-n4")({
  component: JlptN4,
});

function JlptN4() {
  return (
    <>
      <div>
        <KanjiApi level={4} />
      </div>
    </>
  )
}

export default JlptN4