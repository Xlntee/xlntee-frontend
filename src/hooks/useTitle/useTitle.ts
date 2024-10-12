import { useEffect } from "react";

const useTitle = (title?: string): void => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};

export default useTitle;
