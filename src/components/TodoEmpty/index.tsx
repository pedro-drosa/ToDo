import ClipboardIcon from '../../assets/clipboard.svg';
import styles from './styles.module.css';

export function TodoEmpty() {
  return (
    <main className={styles.todoEmptyWrapper}>
      <img src={ClipboardIcon} alt="clipboard" />
      <p>
        <strong>
          Você ainda não tem tarefas cadastradas <br></br>
        </strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </main>
  );
}
