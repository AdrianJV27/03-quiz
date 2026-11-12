import { useQuestionStore } from "../store"
import { useQuery } from "@tanstack/react-query";

interface Category {
    id: number;
    name: string;
}
interface APIResponse {
    trivia_categories: Category[]
}
const categoriesAPI = () => {
    return fetch('https://opentdb.com/api_category.php')
    .then( res => res.json())
    

}

export function Menu() {
  const getQuestions = useQuestionStore((state) => state.getQuestions)
  const {isPending, isError, data: categories, error} = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesAPI,
    select: (data: APIResponse) => data.trivia_categories
    
  })
  console.log({categories});
  

  const amount = [
    '10',
    '20',
    '30',
    '40',
    '50'
  ]
  const types = [
    'multiple',
    'boolean'
  ]
  const difficulty = [
    'easy',
    'medium',
    'hard'
  ]

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    //Terminar esto para pasar los datos a la api
    const category = data.get('categories') as string
    const type = data.get('types') as string
    const difficulty = data.get('difficulty') as string
    const amount = data.get('amount') as string

    getQuestions(category, type, difficulty, amount)
    
  }
    if(isError) return (
    <div><p>
        Sorry there was an unexpected error
    </p>
    <p>
        {error.message}
    </p></div>
    )
    return <div className="flex flex-col gap-5">
            {
                isPending 
                ? <p>Loading</p>
                : <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <select className="border rounded-2xl p-3" name="categories" id="">
                    {
                        categories.map( (item) => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })
                    }
                </select>
                <select className="border rounded-2xl p-3" name="types" id="">
                    {
                        types.map( (item) => {
                            const text = item === 'boolean' ? 'True/False' : 'Multiple'
                            return <option key={item} value={item}>{text}</option>
                        })
                    }
                </select>
                <select className="border rounded-2xl p-3" name="difficulty" id="">
                    {
                        difficulty.map( (item) => {
                            return <option key={item} value={item}>{item.at(0)?.toUpperCase().concat(item.slice(1)) }</option>
                        })
                    }
                </select>
                <select className="border rounded-2xl p-3" name="amount" id="">
                    {
                        amount.map( (item) => {
                            return <option key={item} value={item}>{item.at(0)?.toUpperCase().concat(item.slice(1)) }</option>
                        })
                    }
                </select>
                <button 
                    type="submit"
                    className='border rounded-2xl p-3 text-2xl 
                                hover:bg-sec-c cursor-pointer 
                                transition-colors'>
                        Play
                    </button>
            </form>}
            </div> 
}