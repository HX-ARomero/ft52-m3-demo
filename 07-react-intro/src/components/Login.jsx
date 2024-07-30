import styles from "./Login.module.css";
import { CustomButton } from "./Register";
//* { formulary, }

export default function Login() {
  return (
    <>
      <h2>Login...</h2>
      <form className={styles.formulary} >
        <label className={styles.formText}>User: </label>
        <input type="text" />
        <br />
        <label className={styles.formText}>Password: </label>
        <input type="text" />
        <br />
        <CustomButton>Login</CustomButton>
        <hr />
      </form>
    </>
  );
}
