import { PlusCircle } from 'phosphor-react';
import { CreateButton } from '../CreateButton';
import { InputText } from '../InputText';

import styles from './styles.module.css';

export function Form() {
  return (
    <form className={styles.formWrapper}>
      <InputText placeholder="Adicione uma nova tarefa" />
      <CreateButton>
        Criar <PlusCircle size={16} />
      </CreateButton>
    </form>
  );
}
