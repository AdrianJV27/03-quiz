import './App.css';
import { MainPage } from './components/MainPage';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


//Ahora mismo lo que debo conseguir es almacenar la seleccion del usuario y conseguir que 
//la app almacene la seleccion para mostrar si es correcto y si no mostrar la correcta.

//*Repasar video de midudev, entender porque hace una funcion que retorna una funcion en
//  el onClick y mejores formas de hacerlo

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <header className='w-full flex justify-center'>
        <h1 className='text-7xl'>Quiz</h1>
      </header>
      <main className='w-full flex justify-center mt-4 center text-center'>
        <MainPage/>
      </main>
    </QueryClientProvider>
  )
}

export default App
