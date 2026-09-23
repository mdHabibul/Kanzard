import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
    component: Home,
});

function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen bg-custom-background font-english">
            <div className="pt-15">
                <p className="text-center text-5xl pb-5">Select your level</p>
                <div className="flex justify-center gap-5 flex-wrap m-auto w-90 text-custom-mint-light">
                    <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark" onClick={() => navigate({ to: "/jlpt-n1" })}>N1</button>
                    <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark" onClick={() => navigate({ to: "/JLPT-N2" })}>N2</button>
                    <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark" onClick={() => navigate({ to: "/JLPT-N3" })}>N3</button>
                    <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark" onClick={() => navigate({ to: "/JLPT-N4" })}>N4</button>
                    <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark" onClick={() => navigate({ to: "/JLPT-N5" })}>N5</button>
                </div>
            </div>
        </div>
    )
}

export default Home