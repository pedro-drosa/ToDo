import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { Trash } from 'phosphor-react';
import { CheckCircle } from '../CheckCircle';
import { ITask } from '../../interfaces/ITask';

import styles from './styles.module.css';

interface ITaskProps {
  task: ITask;
}

export function Task({ task }: ITaskProps) {
  const { deleteTask, finishTask } = useContext(TaskContext);
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleFinishTask() {
    finishTask(task.id);
  }

  return (
    <li className={styles.taskWrapper}>
      <button type="button" onClick={handleFinishTask}>
        <CheckCircle
          key={new Date().toISOString()}
          size={24}
          finished={task.finished}
        />
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
