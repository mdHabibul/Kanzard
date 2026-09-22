import { createFileRoute } from "@tanstack/react-router";
import KanjiApi from "../kanjiApi";
import '../App.css'

export const Route = createFileRoute("/jlpt-n1")({
  component: JlptN1,
});

function JlptN1() {
  return (
    <>
      <div>
        <KanjiApi level={1} />
      </div>
    </>
  )
}

export default JlptN1