import './App.css';
import { Menu } from './components/Menu';

//Ahora mismo lo que debo conseguir es almacenar la seleccion del usuario y conseguir que 
//la app almacene la seleccion para mostrar si es correcto y si no mostrar la correcta.

//*Repasar video de midudev, entender porque hace una funcion que retorna una funcion en
//  el onClick y mejores formas de hacerlo

function App() {

  return (
    <>
    <header className='w-full flex justify-center'>
      <h1 className='text-7xl'>Quiz</h1>
    </header>
    <main className='w-full flex justify-center mt-4 center text-center'>
      <Menu/>
    </main>
    </>
  )
}

export default App
