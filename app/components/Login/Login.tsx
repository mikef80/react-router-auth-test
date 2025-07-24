import { useFetcher } from "react-router";
import "./Login.css";

const Login = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action='/login' method='post'>
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' id='password' />
      <button type='submit'>Log In</button>
    </fetcher.Form>
  );
};

export default Login;
