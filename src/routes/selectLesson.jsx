import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/selectLesson")({
    validateSearch: (search) => ({
        level: Math.min(5, Math.max(1, Number(search.level) || 5)),
    }),
  component: SelectLesson,
});

function SelectLesson() {
        const navigate = useNavigate();
        const { level } = Route.useSearch();

    return (
        <div className="w-full min-h-screen px-6 py-20 bg-custom-background font-english text-custom-text">
            <p className="text-center mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-custom-text-muted">Learning center</p>
            <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Select what you want to learn</h1>
            <p className="text-center mb-12 text-sm text-custom-text-muted">Choose a subject and continue your Japanese learning journey.</p>

            <div className="flex flex-col justify-center gap-4 m-auto max-w-3xl text-custom-text">
                <button onClick={() => navigate({ to: `/jlpt-n${level}` })} className="group flex items-center justify-between py-6 px-6 rounded-2xl border border-custom-border-hover bg-custom-secondary text-left transition-all duration-200 hover:cursor-pointer hover:-translate-y-1 hover:border-custom-primary hover:bg-custom-secondary-hover active:bg-custom-mint-hover">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">Kanji</p>
                        <p className="text-sm text-custom-text-muted">Learn japanese characters</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-custom-text-muted transition-all duration-200 group-hover:translate-x-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </button>

                <button className="group flex items-center justify-between py-6 px-6 rounded-2xl border border-custom-border-hover bg-custom-secondary text-left opacity-50 hover:cursor-not-allowed">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">Vocabulary</p>
                        <p className="text-sm text-custom-text-muted">Build your word knowlwdge</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-custom-text-muted"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </button>

                <button className="group flex items-center justify-between py-6 px-6 rounded-2xl border border-custom-border-hover bg-custom-secondary text-left opacity-50 hover:cursor-not-allowed">
                    <div>
                        <p className="mb-2 text-xl font-semibold text-custom-text">Grammar</p>
                        <p className="text-sm text-custom-text-muted">Understand sentence pattern</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-xl text-custom-text-muted"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </button>

            </div>
        </div>
    )
}

export default SelectLesson