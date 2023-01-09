import { createContext, useState, ReactNode } from 'react';
import { ITask } from '../interfaces/ITask';

interface ITaskContextData {
  tasks: ITask[];
  tasksIsEmpty: boolean;
  totalTasks: number;
  totalFinishedTasks: number;
  createNewTask: (task: ITask) => void;
  deleteTask: (taskIdToDelete: string) => void;
  finishTask: (taskIdToFinish: string) => void;
}

export const TaskContext = createContext({} as ITaskContextData);

interface IContextProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: IContextProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const tasksIsEmpty = tasks.length === 0;
  const totalTasks = tasks.length;
  const totalFinishedTasks = getNumberOfFinishedTasks();

  function createNewTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskIdToDelete: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete);
    setTasks(updatedTasks);
  }

  function finishTask(taskIdToFinish: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskIdToFinish) task.finished = !task.finished;
      return task;
    });
    setTasks(updatedTasks);
  }

  function getNumberOfFinishedTasks(): number {
    return tasks.filter((task) => task.finished).length;
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasksIsEmpty,
        totalTasks,
        totalFinishedTasks,
        createNewTask,
        deleteTask,
        finishTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
