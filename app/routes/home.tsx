import Signup from "~/components/Signup/Signup";
import Login from "~/components/Login/Login";
import type { Route } from "./+types/home";
import Logout from "~/components/Logout/Logout";
import { useAuth } from "~/utils/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router 7 Auth Test" },
    { name: "description", content: "Welcome to React Router 7 - Auth Test!" },
  ];
}

export default function Home() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  

  /* useEffect(() => {
    if (!loading && user) {
      navigate("/protectedroute");
    }
    console.log("Login user:", user);
  }, [user, loading]); */

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user && <Signup />}
      {!user && <Login />}
      {user && <Logout />}
    </>
  );
}
