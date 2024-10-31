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

//Si la tarea esta completada done= true esta misma tiene que estar tachada. 

//mostrar la cantidad de tareas You have "4" pending tasks, el 4 tiene que ser dinamico. 

//Dar estilos con CSS.