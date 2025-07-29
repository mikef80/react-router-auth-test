import { useFetcher } from "react-router";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

const Logout = () => {
  const fetcher = useFetcher();
  return (
    <ProtectedRoute>
      <fetcher.Form action='/logout' method='post'>
        <button type='submit'>Log out</button>
      </fetcher.Form>
    </ProtectedRoute>
  );
};

export default Logout;
