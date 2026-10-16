import Login from '../features/Auth/components/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={styles.pageContainer}>
      <Login />
    </main>
  );
}
