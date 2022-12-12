import { useState } from 'react';
import { ITask } from './interfaces/ITask';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { ResumeTasks } from './components/ResumeTasks';
import { TodoList } from './components/TodoList/TodoList';
import { TodoEmpty } from './components/TodoEmpty';

import styles from './styles.module.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const tasksIsEmpty = tasks.length === 0;

  function createNewTask(task: ITask) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskIDToDelete: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskIDToDelete);
    setTasks(updatedTasks);
  }

  function finishTask(taskIDToFinish: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskIDToFinish) task.finished = !task.finished;
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form onCreateTask={createNewTask} />
        <ResumeTasks tasks={tasks} />
        {tasksIsEmpty ? (
          <TodoEmpty />
        ) : (
          <TodoList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onFinishTask={finishTask}
          />
        )}
      </div>
    </>
  );
}

export default App;
