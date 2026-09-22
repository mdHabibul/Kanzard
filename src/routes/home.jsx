import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
      const navigate = useNavigate();

    return (
        <>
            <p className="text-center">Select your level</p>
            <div className="flex justify-center gap-5">
                <button className="text-custom-text bg-custom-primary" onClick={() => navigate({ to: "/jlpt-n1" })}>N1</button>
                <button onClick={() => navigate({ to: "/JLPT-N2" })}>N2</button>
                <button onClick={() => navigate({ to: "/JLPT-N3" })}>N3</button>
                <button onClick={() => navigate({ to: "/JLPT-N4" })}>N4</button>
                <button onClick={() => navigate({ to: "/JLPT-N5" })}>N5</button>
            </div>
        </>
    )
}

export default Home