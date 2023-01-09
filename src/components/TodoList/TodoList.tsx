import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { Task } from '../Task';

import styles from './styles.module.css';

export function TodoList() {
  const { tasks, tasksIsEmpty } = useContext(TaskContext);
  return !tasksIsEmpty ? (
    <ul className={styles.todoWrapper}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  ) : null;
}
