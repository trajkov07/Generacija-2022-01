import { useEffect, useState } from "react";
import axios from "axios";

export const useQuery = (request) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    console.log("retrieving data");
    request.then((response) => setResponse(response));
  }, []);

  return { response };
};
