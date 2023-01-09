import { Header } from './components/Header';
import { Form } from './components/Form';
import { ResumeTasks } from './components/ResumeTasks';
import { TodoList } from './components/TodoList/TodoList';
import { TodoEmpty } from './components/TodoEmpty';

import { TaskContextProvider } from './contexts/TaskContext';

import styles from './styles.module.css';

function App() {
  return (
    <TaskContextProvider>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <ResumeTasks />
        <TodoList />
        <TodoEmpty />
      </div>
    </TaskContextProvider>
  );
}

export default App;
