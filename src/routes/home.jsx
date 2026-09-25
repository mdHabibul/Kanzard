import { createFileRoute, useNavigate } from "@tanstack/react-router";
import LevelBtn from "../levelBtn";

export const Route = createFileRoute("/home")({
    component: Home,
});

function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen text-center bg-custom-background font-english text-custom-text">
            <div className="py-15">
                <p className="mb-3 text-xs font-semibold uppercase text-custom-text-muted">Your Learning Journey</p>
                <h1 className="mb-4 text-center text-5xl font-semibold">Select your level</h1>
                <p className="mb-12 text-center text-sm text-custom-text-muted">Choose a JLPT level and start learning at your own pace.</p>
                <div className="flex justify-center gap-5 flex-wrap m-auto mt-10 w-250 text-custom-mint-light">
                    <LevelBtn level={1} subText={"Advanced"} />
                    <LevelBtn level={2} subText={"Upper Intermediate"} />
                    <LevelBtn level={3} subText={"Intermediate"} />
                    <LevelBtn level={4} subText={"Elementary"} />
                    <LevelBtn level={5} subText={"Beginner"} />
                    
                </div>
            </div>
        </div>
    )
}

export default Home