import { useQuestionStore } from "../store"
import { Game } from "./Game"

export function Menu() {
  const questions = useQuestionStore((state) => state.questions)
  const getQuestions = useQuestionStore((state) => state.getQuestions)


  //logica para almacenar la respuesta del usuario

  const handleClick = () => {
    getQuestions()
  }
    return (
        
        <>
            {
                questions.length === 0 
                ? 
                <button onClick={handleClick} 
                className='border rounded-2xl p-3 text-2xl 
                            hover:bg-sec-c cursor-pointer 
                            transition-colors'>
                    Play
                </button>
                :
                <Game/>
            }
        </>
    )
}