interface QuestionResponse {
    response_code: number;
    results: Question[];
}


export interface Question {
    type: Type;
    difficulty: Difficulty;
    correct_answer: string;
    category: string;
    question: string;
    allAnswers?: string[];
    incorrect_answers: string[]
    isCorrectAnswer?: boolean;
    userSelect?: string;
}

export type Difficulty = 'hard' | 'medium' | 'easy'
export type Type = 'multiple' | 'boolean'