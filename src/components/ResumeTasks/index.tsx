import styles from './styles.module.css';
import { ITask } from '../../interfaces/ITask';

interface IResumeTasksProps {
  tasks: ITask[];
}

function filterFinishedTasks(tasks: ITask[]): number {
  return tasks.filter((task) => task.finished).length;
}

export function ResumeTasks({ tasks }: IResumeTasksProps) {
  const CREATED_TASKS = tasks.length;
  const FINISHED_TASKS = filterFinishedTasks(tasks);
  return (
    <section className={styles.resume}>
      <strong className={styles.created}>
        Tarefas criadas<span className={styles.badge}>{tasks.length}</span>
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
