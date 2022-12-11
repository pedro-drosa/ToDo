import { Header } from './components/Header';
import { Form } from './components/Form';
import { ResumeTasks } from './components/ResumeTasks';
import { TodoList } from './components/TodoList/TodoList';

import styles from './styles.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <ResumeTasks />
        <TodoList />
      </div>
    </>
  );
}

export default App;
