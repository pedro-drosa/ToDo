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
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <ResumeTasks tasks={tasks} />
        <TodoList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
