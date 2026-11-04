import { useQuestionStore } from "../store"
import { Game } from "./Game"
import { Menu } from "./Menu"

export function MainPage() {
  const questions = useQuestionStore((state) => state.questions)
    return (
        
        <>

            {
                questions.length === 0 
                ? 
                <Menu/>
                :
                <Game/>
            }
        </>
    )
}