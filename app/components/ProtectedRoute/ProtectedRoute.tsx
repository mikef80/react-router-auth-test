import { useNavigate } from "react-router";
import { useAuth } from "~/utils/auth-context";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return navigate("/login", { replace: true });
  }

  return children;
};
