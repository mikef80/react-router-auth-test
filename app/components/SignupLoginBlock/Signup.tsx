import { useFetcher, useNavigation } from "react-router";
import "./Signup.css";

const Signup = () => {
  let fetcher = useFetcher();
  
  return (
    <fetcher.Form action='/signup' method='post'>
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' id='password' />
      <label htmlFor='confirmpassword'>Confirm Password:</label>
      <input type='password' name='confirmpassword' id='confirmpassword' />
      <button type='submit'>Sign Up</button>
    </fetcher.Form>
  );
};

export default Signup;
