import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CreateButton } from '../CreateButton';
import { InputText } from '../InputText';
import { TaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function Form() {
  const { createNewTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const task = { id: uuidv4(), content: newTask, finished: false };
    createNewTask(task);
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
