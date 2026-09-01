import { Navigate } from "react-router-dom";

function Protected({ isLogged, children }) {

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return children;
}

export default Protected;