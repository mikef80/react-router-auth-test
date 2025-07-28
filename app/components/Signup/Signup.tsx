import { useFetcher, useNavigation } from "react-router";
import "./Signup.css";

const Signup = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action='/signup' method='post'>
      <label htmlFor='signupemail'>Email:</label>
      <input type='email' name='signupemail' id='signupemail' />
      <label htmlFor='signuppassword'>Password:</label>
      <input type='password' name='signuppassword' id='signuppassword' />
      <label htmlFor='signupconfirmpassword'>Confirm Password:</label>
      <input type='password' name='signupconfirmpassword' id='signupconfirmpassword' />
      <button type='submit'>Sign Up</button>
    </fetcher.Form>
  );
};

export default Signup;
