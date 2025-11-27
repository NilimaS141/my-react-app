import { useState } from "react";
import style from "../css/login.module.css";

function Login() {
  const [inputval, setinputval] = useState("");
  const [passval, setpassval] = useState("");
  const [error, setError] = useState("");

  const ErrorHandle = () => {
    if (!inputval || !passval) {
      setError("Username and Password is required");
    } else {
      setError("");
    }
  };

  console.log(inputval, passval);

  return (
    <div className={style.container}>
      <form className={style.form}>
        <label htmlFor="username" style={{ marginLeft: "10px" }}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="xyz"
          value={inputval}
          onChange={(event) => setinputval(event.target.value)}
          className={style.inputBox}
        />
        <label htmlFor="password" style={{ marginLeft: "10px" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="******"
          value={passval}
          onChange={(event) => setpassval(event.target.value)}
          className={style.inputBox}
        />

        <div className={style.padding10}>
          <input type="checkbox" id="remember" value="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        {error && <p className={style.error}>{error}</p>}
        <button
          className={style.button}
          onClick={(e) => {
            e.preventDefault();
            ErrorHandle();
            setinputval("");
            setpassval("");
          }}
        >
          Submit
        </button>

        <span className={style.underlineText}>Forgot Password?</span>

        <div style={{ display: "flex" }}>
          <div className={style.line} />
          <p>or</p>
          <div className={style.line} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Don't have an account? </p>
          <span className={style.underlineText}>{"  "}Sign Up</span>
        </div>
      </form>
    </div>
  );
}
export default Login;
