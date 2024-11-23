import { useEffect, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      console.log("isIntersecting:", entry.isIntersecting);
    }, options);

    const target = document.querySelector("#next-section");
    if (target) observer.observe(target); // 타겟 요소가 존재할 때만 감지 시작

    return () => {
      if (target) observer.unobserve(target); // 타겟 요소 감지 중단
    };
  }, [options]);

  return isIntersecting;
};

export default useIntersectionObserver;
