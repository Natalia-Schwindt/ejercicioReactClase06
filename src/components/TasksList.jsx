import { MdDeleteSweep } from "react-icons/md";

export const TasksList = ({task}) => {

    const {title, done} = task;

    return (

    <div>
          <h3>{title}</h3>

          <p style={{ textDecorationLine: done ? 'line-through' : 'none'}}>{done ? 'Completado' : 'Pendiente'}</p>
          <MdDeleteSweep />
    </div>
      
  );
};

export default TasksList