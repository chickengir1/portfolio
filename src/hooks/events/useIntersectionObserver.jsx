import { useEffect, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        setHasIntersected(true);
      }
    }, options);

    const target = document.querySelector("#next-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options, hasIntersected]);

  return isIntersecting;
};

export default useIntersectionObserver;
