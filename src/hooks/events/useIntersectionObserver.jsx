import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options, callback) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (callback) {
        callback(entry);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options, callback]);

  return { targetRef, isIntersecting };
};

export default useIntersectionObserver;
