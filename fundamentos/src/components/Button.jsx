import styles from './Button.module.css';

/*export function MyButton() {
    return (
        <button className={styles.button}>Soy un botón</button>
    );
}*/


export function MyButton({ name, onClick }) {
  return (
    <button 
      className={styles.button}
      onClick={onClick}
    >
      {name || 'Soy un botón'}
    </button>
  );
}

