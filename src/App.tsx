import { useState } from 'react';
import { ITask } from './interfaces/ITask';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { ResumeTasks } from './components/ResumeTasks';
import { TodoList } from './components/TodoList/TodoList';
import tasksMock from './mocks/tasks';

import styles from './styles.module.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>(tasksMock);

  function createNewTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskIDToDelete: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskIDToDelete);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form onCreateTask={createNewTask} />
        <ResumeTasks tasks={tasks} />
        <TodoList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
