import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../LoginAndSignup/auth-context";

export function PrivateRouter({ path, ...props }) {
  const { isUserLoggedIn } = useAuth();
  console.log(isUserLoggedIn);
  return isUserLoggedIn ? (
    <>
      <Route {...props} />
    </>
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
}
