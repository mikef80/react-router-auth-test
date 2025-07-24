import Signup from "~/components/Signup/Signup";
import Login from "~/components/Login/Login";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router 7 Auth Test" },
    { name: "description", content: "Welcome to React Router 7 - Auth Test!" },
  ];
}

export default function Home() {
  return (
    <>
      <Signup />
      <Login />
    </>
  );
}
