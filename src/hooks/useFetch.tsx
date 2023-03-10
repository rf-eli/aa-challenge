import { useEffect, useReducer } from "react";

interface Response<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

type Action<T> =
  | { type: "SET_DATA"; payload: T }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: Error };

function useFetch<T>(url: string): Response<T> {
  const fetchReducer = (state: Response<T>, action: Action<T>): Response<T> => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, { loading: false });

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    fetch(url)
      .then((data) => data.json())
      .then((result) => console.log(result))
      .catch((error) => dispatch({ type: "SET_ERROR", payload: error }))
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, [url]);

  return state;
}

export default useFetch;
