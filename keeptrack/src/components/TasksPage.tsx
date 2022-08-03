import React from 'react';
import { ITask } from '../models/Tasks';
import { taskAPI } from '../service/TaskAPI';
import TaskList from './TaskList';


const {useState, useEffect} = React;

function TasksPage() {
    
  const deleteTask = (task: ITask) =>{
    taskAPI.delete(task)
    //setTasks(tasks.filter(tasks => tasks.id !== id))
  }
  const saveTask = (task: ITask) => {
      taskAPI
           .put(task)
           .then((updatedTask) => {                
            let updatedTasks = tasks.map((p: ITask) => {
              return p.id === task.id ?new ITask(updatedTask) : p;
             });
             setTasks(updatedTasks);
           })
           
        }
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        var fetchTasks = async () =>{
          const tasksData = await (await taskAPI.get(currentPage)).json();
          tasksData.sort(function (a: { id: number; },b: { id: number; }){
            return a.id-b.id
          });
          if (currentPage === 1) {
                      setTasks(tasksData);
                    } else {
                      setTasks((tasks) => [...tasks,...tasksData]);
                    }
        }
        fetchTasks().catch(err => console.log(err));
      }, [currentPage]);

      

      const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
      };

  return(
    <>
    <h1>Tasks</h1>    
        <TaskList 
            tasks={tasks}
            onSave={saveTask}
            onDelete={deleteTask}
            />
              <button className="button default" onClick={handleMoreClick} text-align = " center">
                More...
              </button>
    </>
  ) 

}

export default TasksPage;