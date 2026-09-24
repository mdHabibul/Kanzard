import { useNavigate } from "@tanstack/react-router";

function LevelBtn({ level, subText }) {
    const navigate = useNavigate();

    return (
        <>
            <button className="h-48 w-80 rounded-3xl hover:shadow-2xl bg-custom-primary-hover hover:cursor-pointer hover:bg-custom-primary active:bg-custom-primary-dark" onClick={() => navigate({ to: `/jlpt-n${level}` })}>
                <div className="flex justify-between px-10 pt-10 pb-5">
                    <div className="text-left">
                        <p className="text-3xl mb-2">N{level}</p>
                        <p className="font-sans font-extralight">{subText}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </div>
                <hr className="" />
                <div className="flex justify-between py-3 px-5">
                    <p>Start leaning</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
            </button>
        </>
    )
}

export default LevelBtn;