// import { tasks } from '../dataBase/data'
import TasksList from './TasksList'

const List = ({tasks}) => {

  return (
    <div>
        {
        !tasks ? <p style={{color:'red'}}>No hay tareas, vuelva mas tarde.</p> : (tasks.map(task => <TasksList key={task.id} task={task}/>))
        }
      
    </div>
  )
}

export default List
