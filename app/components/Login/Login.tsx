import { useFetcher, useNavigate } from "react-router";
import "./Login.css";
import { useState } from "react";
import { supabase } from "~/utils/supabase.client";

const Login = () => {
  const fetcher = useFetcher();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    console.log(fetcher);
    

    // navigate("/protectedroute");
  };

  return (
    <fetcher.Form onSubmit={handleSubmit}>
      <label htmlFor='loginemail'>Email:</label>
      <input
        type='email'
        name='loginemail'
        id='loginemail'
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor='loginpassword'>Password:</label>
      <input
        type='password'
        name='loginpassword'
        id='loginpassword'
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type='submit' disabled={!email || !password}>
        Log In
      </button>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </fetcher.Form>
  );
};

export default Login;
