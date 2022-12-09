import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CreateButton({ children, ...props }: CreateButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
