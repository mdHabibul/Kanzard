function SelectLesson() {
    return (
        <div className="w-full min-h-screen py-40 bg-custom-background  font-english">
            <h1 className="text-center text-5xl mb-5 text-shadow-custom-forest-hover">Select what you want to learn</h1>
            <div className="flex flex-col justify-center gap-5 m-auto w-100 text-custom-mint-light">
                <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-pointer hover:bg-custom-primary-light active:bg-custom-primary-dark">Kanji</button>
                <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-not-allowed">Vocabulary</button>
                <button className="px-10 py-4 rounded-3xl bg-custom-primary hover:cursor-not-allowed">Grammar</button>
            </div>
        </div>
    )
}

export default SelectLesson