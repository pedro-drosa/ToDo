import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ ...props }: InputTextProps) {
  return <input className={styles.input} type="text" {...props} />;
}
