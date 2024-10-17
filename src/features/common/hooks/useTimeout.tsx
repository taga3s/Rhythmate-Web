import { useEffect } from "react";

// @see - https://ja.react.dev/reference/react/useEffect#removing-unnecessary-function-dependencies
const useTimeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    const id = setTimeout(() => callback(), delay || 0);
    return () => clearTimeout(id);
  }, [callback, delay]);
};

export { useTimeout };
