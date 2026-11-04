import type { Question } from "../types"

export const punctuationQuestions = (questions: Question[]) => {

    const punctuation = {
        correct: 0,
        incorrect: 0,
        unanswered: 0
    }

    questions.map( (item) => {
        if(item.userSelect === item.correct_answer){
            punctuation.correct++
        }else if(item.userSelect === undefined){
            punctuation.unanswered++
        }else{
            punctuation.incorrect++
        }
    })

    return punctuation

}