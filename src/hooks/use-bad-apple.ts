import { useEffect } from "react";

const STORAGE_KEY = "badAppleLoaded";

export function useBadAppleEasterEgg() {
  useEffect(() => {
    const isFirstLoad = !sessionStorage.getItem(STORAGE_KEY);
    const delay = isFirstLoad ? 5000 : 0;

    const timer = setTimeout(() => {
      import("bad-apple-console")
        .then((mod) => {
          if (mod.startPlayback) {
            mod.startPlayback();
          }
          if (isFirstLoad) {
            sessionStorage.setItem(STORAGE_KEY, "true");
          }
        })
        .catch(() => {
          // Silent fail - keep the easter egg completely hidden
        });
    }, delay);

    return () => clearTimeout(timer);
  }, []);
}
