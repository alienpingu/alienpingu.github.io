import { useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
            entry.target.classList.remove("opacity-0"); // Rimuove la classe quando visibile
          }
        });
      },
      {
        threshold: 0.5, // L'elemento deve essere almeno per metà visibile
        rootMargin: "0px 0px -50px 0px", // Ritarda l'attivazione fino a quando l'elemento è più visibile
      }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      el.classList.add("opacity-0"); // Stato iniziale invisibile
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};
