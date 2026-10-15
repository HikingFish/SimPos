import { useState } from 'react';
import styles from './LoginForm.module.css';
import Button from '../../../components/common/Button/button';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });
    alert('Attempting login for: ${email');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>Login</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required></input>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor='password'>Password</label>
            <input className={styles.input} type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter you password' required></input>
          </div>
          <Button type='submit' variant='primary' size='md' fullwidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}