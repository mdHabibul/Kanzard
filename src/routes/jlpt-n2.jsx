import { createFileRoute } from "@tanstack/react-router";
import KanjiApi from "../kanjiApi";
import '../App.css'

export const Route = createFileRoute("/jlpt-n2")({
  component: JlptN2,
});

function JlptN2() {
  return (
    <>
      <div>
        <KanjiApi level={2} />
      </div>
    </>
  )
}

export default JlptN2