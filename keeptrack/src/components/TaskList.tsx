import { ITask } from '../models/Tasks';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import React, { useState } from 'react';

interface ITaskListProps {
  tasks: ITask[];
  onSave:(task: ITask) => void;
  onDelete:(task: ITask) => void;
}

function TaskList({ tasks, onSave, onDelete }: ITaskListProps) {

  // const removeTask = (id:number |undefined) =>{
  //       setDeleteTask(deleteTask.filter(tasks => tasks.id !== id))
  // }
    const [deleteTask, setDeleteTask] = useState<ITask[]>([]);
    const [taskBeingEdited, setTaskBeingEdited] = useState({});
    const handleEdit = (task: ITask) => {
        setTaskBeingEdited(task);
           };
    const cancelEditing = () =>{
        setTaskBeingEdited({});
    };
    
  return (
    <div className='flex-row-container' >
    
      {tasks.map((taskItem ) => (                  
      <div className='flex-row-item'>             
        
        {taskItem  === taskBeingEdited ?(
           <TaskForm
                task={taskItem}
                onSave={onSave}
                onCancel={cancelEditing}
                onDelete={onDelete}/>     
        ):(
            <TaskCard task ={taskItem} onEdit={handleEdit}/>
        )
        }
        {/* <TaskCard 
            task={taskItem}
            onEdit={handleEdit}
            ></TaskCard> 
        <TaskForm/>    */}
      </div>            
      
      ))}
    </div>
    
  )
}

export default TaskList;