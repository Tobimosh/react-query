

export interface Task {
  id: number;
  title: string;
}


interface AddTask {
    type: 'ADD',
    task: Task
}

interface DeleteTask {
    type: 'DELETE',
    taskId: number

}

export type Action = AddTask | DeleteTask

export const taskListReducer = (tasks: Task[], action: Action ) : Task[] => {

    switch(action.type){
        case 'ADD': 
           return [action.task, ...tasks]
        case 'DELETE':
            return tasks.filter(t => t.id !== action.taskId)
    }


}