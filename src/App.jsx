import './App.css'
import Accordion from './components/Accordion'
import Count from './components/Count'
import List from './components/List'
import { tasks } from './dataBase/data'
import  Title from './components/Title'


function App() {

  return (
      <div>
        <List tasks={tasks}/>
        <Title />
        <Count />
        <Accordion/>
      </div>
  )
}

export default App

//Limpiar el proyecto 

//Dar estilos con CSS.