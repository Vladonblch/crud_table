import { ITask } from "../models/Tasks";

const baseUrl = 'http://localhost:4002';
const url = `${baseUrl}/tables`;


function parseJSON(response: Response) {
  return response.json();
}

const taskAPI = {
  get(page = 1, limit = 3) {
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=id`)
        
    },


    put(task: ITask) {
      return fetch(`${url}/${task.id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(parseJSON)
              
    },
    delete(task: ITask) {
      return fetch(`${url}/${task.id}`, {
        method: 'DELETE',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(parseJSON)
              
    }
// const removeTask = (id:number |undefined) =>{
  //       setDeleteTask(deleteTask.filter(tasks => tasks.id !== id))
  // }
  }      
  
export { taskAPI };