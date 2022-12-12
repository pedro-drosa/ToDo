import { Task } from '../Task';
import { ITask } from '../../interfaces/ITask';

import styles from './styles.module.css';

interface ITodoListProps {
  tasks: ITask[];
  onDeleteTask: (taskIDToDelete: string) => void;
  onFinishTask: (taskIDToFinish: string) => void;
}

export function TodoList({
  tasks,
  onDeleteTask,
  onFinishTask,
}: ITodoListProps) {
  return (
    <ul className={styles.todoWrapper}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onFinishTask={onFinishTask}
        />
      ))}
    </ul>
  );
}
