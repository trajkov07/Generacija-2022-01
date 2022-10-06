import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/");
      navigate(-2);
    }, 1000);
  });

  // return <Navigate to="/" />;
  return <h1>Not Found</h1>;
};
