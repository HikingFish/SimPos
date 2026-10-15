import styles from './button.module.css';

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  fullwidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
  ...props
}) {
  const isFullWidth = fullWidth || fullwidth;

  const buttonClasses = [
    styles.button || styles.Button,
    styles[variant],
    styles[size],
    isFullWidth ? styles.fullWidth : '',
    isLoading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  );
}