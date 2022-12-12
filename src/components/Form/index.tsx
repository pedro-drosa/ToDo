import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ITask } from '../../interfaces/ITask';
import { CreateButton } from '../CreateButton';
import { InputText } from '../InputText';

import styles from './styles.module.css';

interface IFormProps {
  onCreateTask: (task: ITask) => void;
}

export function Form({ onCreateTask }: IFormProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const task = { id: uuidv4(), content: newTask, finished: false };
    onCreateTask(task);
    setNewTask('');
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleCreateTask}>
      <InputText
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
      />
      <CreateButton type="submit">
        Criar <PlusCircle size={16} />
      </CreateButton>
    </form>
  );
}
