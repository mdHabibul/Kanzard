function SelectLesson() {
    return (
        <div className="w-full min-h-screen py-10 bg-custom-background  font-english">
            <p className="text-center font-sans">Learning center</p>
            <h1 className="text-center text-5xl mb-3 text-shadow-custom-forest-hover">Select what you want to learn</h1>
            <p className="text-center mb-10 font-sans">Choose a subject and continue your Japanese learning journey.</p>
            <div className="flex flex-col justify-center gap-5 m-auto mx-67 text-custom-mint-light">
                <button className="py-5 px-10 rounded-3xl text-left bg-custom-primary hover:cursor-pointer hover:mx-[-5px] hover:bg-custom-primary-light active:bg-custom-primary-dark">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-extrabold text-3xl">Kanji</p>
                            <p className="font-extralight font-sans">Learn japanese characters</p>
                        </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </button>
                <button className="py-5 px-10 rounded-3xl text-left bg-custom-primary hover:cursor-not-allowed">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-extrabold text-3xl">Vocabulary</p>
                            <p className="font-extralight font-sans">Build your word knowlwdge</p>
                        </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </button>
                <button className="py-5 px-10 rounded-3xl text-left bg-custom-primary hover:cursor-not-allowed">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-extrabold text-3xl">Grammar</p>
                            <p className="font-extralight font-sans">Understand sentence pattern</p>
                        </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </button>
                {/* <button className="py-10 rounded-3xl bg-custom-primary hover:cursor-not-allowed">Vocabulary</button>
                <button className="py-10 rounded-3xl bg-custom-primary hover:cursor-not-allowed">Grammar</button> */}
            </div>
        </div>
    )
}

export default SelectLesson