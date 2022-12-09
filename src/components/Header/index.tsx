import todoLogo from '../../assets/todo.svg';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo" />
    </header>
  );
}
