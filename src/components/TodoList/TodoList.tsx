import { Task } from '../Task';

import styles from './styles.module.css';

export function TodoList() {
  return (
    <ul className={styles.todoWrapper}>
      <Task />
      <Task />
      <Task />
    </ul>
  );
}
