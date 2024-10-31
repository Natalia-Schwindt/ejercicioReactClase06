import { MdDeleteSweep } from "react-icons/md";

export const TasksList = ({task}) => {
    console.log(task)
    const {title, done} = task;

    return (

    <div>
            <h3>{title}</h3>
        
      {
        task.id && <div>
            <p style={{ textDecorationLine: 'line-through'}}>{done}</p>
            <MdDeleteSweep />
        </div>
      }
      
    </div>
)
}

export default TasksList