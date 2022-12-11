import { Trash } from 'phosphor-react';
import { CheckCircle } from '../CheckCircle';
import styles from './styles.module.css';

export function Task() {
  return (
    <li className={styles.taskWrapper}>
      <button type="button" className={styles.finishTask}>
        <CheckCircle size={24} />
      </button>
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button type="button" className={styles.deleteTask}>
        <Trash size={16} />
      </button>
    </li>
  );
}
