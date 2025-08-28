import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFirstRender = (callback: () => void, dependencies?: any[]) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      hasMounted.current = true;
    } else {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies || []);
};

export { useFirstRender };
