import { useMemo } from "react"
import { useQuestionStore } from "../store"
import { QuestionSlider } from "./QuestionSlider"
import { punctuationQuestions } from "../helpers/punctuationQuestions"
import { textParser } from "../helpers/parser"



export function Game() {
    const questions = useQuestionStore((state) => state.questions)
    const currentQuestion = useQuestionStore((state) => state.currentQuestion)
    const selectAnswer = useQuestionStore((state) => state.selectAnswer)
    const reset = useQuestionStore((state) => state.reset)

    const question = useMemo( () => {    
        return questions[currentQuestion]
    }, [currentQuestion, questions])

    //Podria hacer un useMemo pero no se si es mejor dejarlo asi
    const {correct, incorrect, unanswered} = punctuationQuestions(questions)

    const checkAnswer = (item: string) => {
        if(question.userSelect === item && question.userSelect === question.correct_answer
            || question.userSelect != undefined && item === question.correct_answer){
                return 'green'}
        else if(question.userSelect === item){
            return 'red'
        }else{ return '' }
    }
    const handleClick = (item: string) =>  (
            () => { 
                if(question.userSelect) return
                selectAnswer(item ,currentQuestion)
            })

    return (
        <div className="flex flex-col gap-3.5">
            <div className='questions-number w-full text-xl p-3'>
                <p>Pregunta {currentQuestion + 1} de {questions.length}</p>
                <div className="w-full bg-amber-100 rounded-full h-2 mt-3">
                    <div className="bg-amber-600 h-2 rounded-full w-3 transition-all" style={{width: `${(currentQuestion+1)*100/questions.length}%`}}></div>
                </div>
            </div>
            <div className='card min-h-96 border p-10 rounded-4xl shadow-2xl bg-sky-950'>
                <div className='question text-3xl p-3'>
                    <h3>{textParser(question.question)}</h3>
                </div>
                <div className='answer p-3'>
                    <ul className='flex flex-col gap-1.5 text-2xl'>
                        {
                        question.allAnswers?.map((item) => {                        
                            return (
                            <li 
                            onClick={handleClick(item)} 
                            key={item} 
                            style={{backgroundColor: checkAnswer(item)}} 
                            className='rounded-4xl transition-colors border-2 p-4 hover:bg-sec-c cursor-pointer'>
                            {textParser(item)}
                            </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
            <QuestionSlider/>
            <div>
                <p>Correct: {correct}</p>
                <p>Incorrect: {incorrect}</p>
                <p>Unanswered: {unanswered}</p>
            </div>
            <div>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}