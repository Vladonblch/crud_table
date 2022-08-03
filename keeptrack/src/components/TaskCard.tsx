import { ITask } from '../models/Tasks';
import './TaskStyles.css';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
  }

interface ITaskProps {
  task: ITask;
  onEdit: (task: ITask) => void;
}

function TaskCard({ task, onEdit }: ITaskProps) {
  const handleEditClick = (taskBeingEdited: ITask) => {
        onEdit(taskBeingEdited);
      };
  return (  
    <div className="card">
      <img className='round' src={task.imageUrl} alt={task.taskName}  />
      
        <p className='name'>{task.taskName}</p>
        <p>difficulties: {formatDescription(task.difficulties)}</p>
        <p>goals : {task.goals}</p>
        <button className=" bordered"
          onClick={() => {
                      handleEditClick(task);
                      
                    }}>
          <span className="icon-edit "></span>
            Edit
        </button>
      
    </div>
        //   <div className='frame'>                                
        //     <p > {task.id}</p>
        //     <p > {task.taskName}</p>             
        //     <p >{task.goals} </p> 
        //     <p >{task.difficulties} </p> 
        //     <p >{task.resources} </p> 
        //   </div>
  )
}

export default TaskCard;