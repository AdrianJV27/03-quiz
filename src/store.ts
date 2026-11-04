import { create } from "zustand";
import type { Question } from "./types";

interface State {
    currentQuestion: number
    questions: Question[];
    getQuestions: () => void;
    changeCurrentQuestion: (page: number) => void;
    isChangeQuestionPossible: (page: number) => boolean;
    selectAnswer: (answer: string, index: number) => void
}

export const useQuestionStore = create<State>()( (set, get) => ({
    currentQuestion: 0,
    questions: [],
    getQuestions: () => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(res => res.json())
        .then(data => {
            const newQuestions = data.results.map( (item: Question) => {
                
                return({
                ...item,
                allAnswers: [
                    ...item.incorrect_answers,
                    item.correct_answer,
                ]
            })})

            set(() => ({questions: newQuestions}))
        })
    },
    changeCurrentQuestion: (page: number) => {
        if(!get().isChangeQuestionPossible(page)) return
        set(() => ({currentQuestion : page}))
        
    },
    isChangeQuestionPossible: (page: number) => {
        const questions = get().questions        
        return page >= 0 && page < questions.length
    },
    selectAnswer: (answer: string, index: number) => {
                    
        set( () => {
            const newQuestions = get().questions.map( (q, i) => {
                return i === index ? {...q, userSelect: answer} : q
            })            
            return {questions: newQuestions}
        }) 
    }

}))