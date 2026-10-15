import Login from '../features/components/auth/LoginForm';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={styles.pageContainer}>
      <Login />
    </main>
  );
}
