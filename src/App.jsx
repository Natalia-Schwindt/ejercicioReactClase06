import './App.css'
import List from './components/List'
import { tasks } from './dataBase/data'

function App() {

  return (
      <div>
        <List tasks={tasks}/>
      </div>
  )
}

export default App

//Limpiar el proyecto 

//mostrar la cantidad de tareas You have "4" pending tasks, el 4 tiene que ser dinamico. 

//Dar estilos con CSS.