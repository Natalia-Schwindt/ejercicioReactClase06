// import { tasks } from '../dataBase/data'
import TasksList from './TasksList'

const List = ({tasks}) => {

  const pendingTasks = tasks.filter(task => !task.done).length;

  return (
    <div>
        {tasks.length === 0 ? (
        <p style={{color:'red'}}>No hay tareas, vuelva mas tarde.</p>
        ) : (
          <>
          <p>Tienes {pendingTasks} tareas pendientes</p>
          {tasks.map(task => (
            <TasksList key={task.id} task={task}/>
      ))}
      </>
  )}
    </div>
  );
};

export default List
