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
                <button onClick={() => navigate({ to: "/" })}>N1</button>
                <button onClick={() => navigate({ to: "/" })}>N2</button>
                <button onClick={() => navigate({ to: "/jlpt-n3" })}>N3</button>
                <button onClick={() => navigate({ to: "/" })}>N4</button>
                <button onClick={() => navigate({ to: "/" })}>N5</button>
            </div>
        </>
    )
}

export default Home