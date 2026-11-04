import { useQuestionStore } from "../store"

export function QuestionSlider() {
        const currentQuestion = useQuestionStore((state) => state.currentQuestion)
        const changeCurrentQuestion = useQuestionStore((state) => state.changeCurrentQuestion)
        const isChangeQuestionPossible = useQuestionStore((state) => state.isChangeQuestionPossible)
    
    return (
        <>
            <div className='actions flex justify-around p-3'>
                <button disabled={currentQuestion === 0} onClick={() => {changeCurrentQuestion(currentQuestion - 1)}} className='border rounded-2xl p-3 text-2xl hover:bg-sec-c cursor-pointer transition-colors'>
                    ← 
                </button>
                <div className='p-3 text-2xl'>
                    Pregunta: {currentQuestion + 1}
                </div>
                <button disabled={!isChangeQuestionPossible(currentQuestion + 1)} onClick={() => {changeCurrentQuestion(currentQuestion + 1)}}className='border rounded-2xl p-3 text-2xl hover:bg-sec-c cursor-pointer transition-colors'>
                    →
                </button>
            </div>
        </>
    )
}