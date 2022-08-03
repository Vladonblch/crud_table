
import {ITask} from '../models/Tasks'
import React, { SyntheticEvent, useState } from 'react';


interface TaskFormProps{
    task:ITask;
    onCancel: () => void;
    onSave: (task: ITask) => void;
    onDelete:(task: ITask) => void;
}

function ProjectForm({
    task: initialTask,
    onSave,
    onCancel, 
    onDelete
  }:TaskFormProps): JSX.Element {
    const[task, setTask] = useState(initialTask);    
    const handleSubmit = (event: SyntheticEvent) =>{
        event.preventDefault();
        onSave(task);    
    }
    const handleDelete = (event: SyntheticEvent) =>{
      event.preventDefault();
      onDelete(task);
      
  }

    const handleChange = (event: any) => {
            const { type, name, value, checked } = event.target;
            // if input type is checkbox use checked
            // otherwise it's type is text, number etc. so use value
            let updatedValue = type === 'checkbox' ? checked : value;
        
            //if input type is number convert the updatedValue string to a +number
            if (type === 'number') {
              updatedValue = Number(updatedValue);
            }
            const change = {
              [name]: updatedValue,
            };
        
            let updatedTask: ITask;
            // need to do functional update b/c
            // the new project state is based on the previous project state
            // so we can keep the project properties that aren't being edited +like project.id
            // the spread operator (...) is used to
            // spread the previous project properties and the new change
            setTask((t) => {
              updatedTask = new ITask({ ...t, ...change})
              // {};
              // updatedTask = { ...t, ...change};
              return updatedTask;
            });
          };


  return (
    
    <form className="card"
    onSubmit={handleSubmit}
    >
     
      <label htmlFor="taskName">Task Name</label>
      <input 
        type="text" 
        name="taskName" 
        placeholder="enter name"
        value={task.taskName}
        onChange={handleChange} />
      <label htmlFor="difficulties"><br/>Task difficulties</label>
      <textarea 
        name="difficulties" 
        placeholder="enter difficulties"
        value={task.difficulties}
        onChange={handleChange} />
      <label htmlFor="goals"><br/>Task goals</label>
      <input 
        type="text" 
        name="goals" 
        placeholder="enter goals"
        value={task.goals}
        onChange={handleChange} />
      <label htmlFor="isActive"><br/>Active?</label>
      <input 
        type="checkbox" 
        name="isActive"
        checked={task.isActive}
        onChange={handleChange} />
      <div className="input-group">
        <button className="primary bordered medium"
        // onClick=onSave{task}
          
        >
          Save
        </button>
        <span />
        <button type="button" className="bordered medium"
         onClick={onCancel}>
          cancel
        </button>
        <button type="button" className="bordered medium"
       onClick={handleDelete}>
          delete
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;