import { useFetcher } from "react-router";
import "./Login.css";

const Login = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action='/login' method='post'>
      <label htmlFor='loginemail'>Email:</label>
      <input type='email' name='loginemail' id='loginemail' />
      <label htmlFor='loginpassword'>Password:</label>
      <input type='password' name='loginpassword' id='loginpassword' />
      <button type='submit'>Log In</button>
    </fetcher.Form>
  );
};

export default Login;
