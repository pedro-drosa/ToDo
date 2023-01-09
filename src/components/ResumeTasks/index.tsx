import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function ResumeTasks() {
  const { totalTasks, totalFinishedTasks } = useContext(TaskContext);

  const CREATED_TASKS = totalTasks;
  const FINISHED_TASKS = totalFinishedTasks;
  return (
    <section className={styles.resume}>
      <strong className={styles.created}>
        Tarefas criadas<span className={styles.badge}>{CREATED_TASKS}</span>
      </strong>
      <strong className={styles.completed}>
        Concluídas
        <span
          className={styles.badge}
        >{`${FINISHED_TASKS} de ${CREATED_TASKS}`}</span>
      </strong>
    </section>
  );
}
