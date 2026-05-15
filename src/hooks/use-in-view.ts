import { useEffect, useRef } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref;
};
