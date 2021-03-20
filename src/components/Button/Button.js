import styles from "./Button.module.scss";

function Button({ sendPost }) {
  return (
    <>
      <button className={styles.button} onClick={sendPost}>
        Send Post
      </button>
    </>
  );
}

export default Button;
