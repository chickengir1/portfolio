import { useState, useEffect } from "react";

const useResize = () => {
  const [shouldObserve, setShouldObserve] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShouldObserve(false);
      } else {
        setShouldObserve(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return shouldObserve;
};

export default useResize;
