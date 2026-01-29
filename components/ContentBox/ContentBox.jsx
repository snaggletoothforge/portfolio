import styles from './ContentBox.module.scss';

export default function ContentBox({ children }) {
  return (
    <div className={styles.box}>
      {children}
    </div>
  );
}