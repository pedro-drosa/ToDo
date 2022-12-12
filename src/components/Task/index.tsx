import { Trash } from 'phosphor-react';
import { CheckCircle } from '../CheckCircle';
import { ITask } from '../../interfaces/ITask';

import styles from './styles.module.css';

interface ITaskProps {
  task: ITask;
  onDeleteTask: (taskIDToDelete: string) => void;
  onFinishTask: (taskIDToFinish: string) => void;
}

export function Task({ task, onDeleteTask, onFinishTask }: ITaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleFinishTask() {
    onFinishTask(task.id);
  }

  return (
    <li className={styles.taskWrapper}>
      <button
        type="button"
        className={styles.finishTask}
        onClick={handleFinishTask}
      >
        <CheckCircle size={24} finished={task.finished} />
      </button>
      <span className={task.finished ? styles.finished : ''}>
        {task.content}
      </span>
      <button
        type="button"
        className={styles.deleteTask}
        onClick={handleDeleteTask}
      >
        <Trash size={16} />
      </button>
    </li>
  );
}
