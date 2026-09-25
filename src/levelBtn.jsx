import { useNavigate } from "@tanstack/react-router";

function LevelBtn({ level, subText }) {
    const navigate = useNavigate();

    return (
        <button className="h-48 w-70 border border-custom-border-hover border-1 rounded-3xl hover:shadow-2xl bg-custom-secondary hover:cursor-pointer hover:bg-custom-secondary-hover active:bg-custom-secondary" onClick={() => navigate({ to: `/jlpt-n${level}` })}>
            <div className="flex justify-between px-10 pt-10 pb-5">
                <div className="text-left">
                    <p className="text-3xl mb-2 text-custom-text">N{level}</p>
                    <p className="font-sans font-extralight text-custom-text-muted">{subText}</p>
                </div>
                <span className="text-custom-text-muted">↗</span>
            </div>
            <hr className="border-custom-border-hover" />
            <div className="flex justify-between py-3 px-5">
                <p className="text-custom-text-muted">Start learning</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-custom-text-muted"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
        </button>
    )
}

export default LevelBtn;