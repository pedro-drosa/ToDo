import styles from './styles.module.css';

export function ResumeTasks() {
  return (
    <section className={styles.resume}>
      <strong className={styles.created}>
        Tarefas criadas<span className={styles.badge}>5</span>
      </strong>
      <strong className={styles.completed}>
        Concluídas<span className={styles.badge}>2 de 5</span>
      </strong>
    </section>
  );
}
