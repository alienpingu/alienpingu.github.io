import { useEffect, useRef } from "react";

const CSS_URL = "https://townsquare.cauenapier.com/widget.css";
const MODULE_URL = "https://townsquare.cauenapier.com/townsquare.mjs";

const SCENE = {
  benches: 3,
  benchXs: [0.2, 0.72, 0.46],
  trees: 2,
  treeXs: [0.8, 0.58],
  lamps: 1,
  lampXs: [0.12],
  birds: 2,
};

const THEME_CSS = `
#townsquare-root[data-townsquare-theme="host"] {
  --scene: #e4e2dd;
  --page: #efede9;
  --surface: #fdf8f4;
  --ink: #2a2926;
  --you: #c8641f;
  --tree-trunk: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
  --tree-canopy: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
  --other: #26241f;
  --ground: rgba(42, 41, 38, 0.16);
  --scene-edge: color-mix(in oklab, var(--scene) 88%, var(--page) 12%);
  --you-deep: var(--you);
  --text: var(--ink);
  --muted: var(--ink);
}
#townsquare-root[data-townsquare-theme="dark"] {
  --scene: #242521;
  --page: #181917;
  --surface: #24231f;
  --ink: #f2eee6;
  --you: #df8a43;
  --tree-trunk: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
  --tree-canopy: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
  --other: #ddd7cc;
  --ground: rgba(242, 238, 230, 0.18);
  --scene-edge: color-mix(in oklab, var(--scene) 88%, var(--page) 12%);
  --you-deep: var(--you);
  --text: var(--ink);
  --muted: var(--ink);
}
@media (prefers-color-scheme: dark) {
  #townsquare-root[data-townsquare-theme="auto"] {
    --scene: #242521;
    --page: #181917;
    --surface: #24231f;
    --ink: #f2eee6;
    --you: #df8a43;
    --tree-trunk: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
    --tree-canopy: color-mix(in oklab, var(--text) 58%, var(--muted) 42%);
    --other: #ddd7cc;
    --ground: rgba(242, 238, 230, 0.18);
    --scene-edge: color-mix(in oklab, var(--scene) 88%, var(--page) 12%);
    --you-deep: var(--you);
    --text: var(--ink);
    --muted: var(--ink);
  }
}
#townsquare-root .townsquare__stage {
  background: linear-gradient(
    180deg,
    var(--scene) 0%,
    var(--scene) 72%,
    var(--scene-edge) 72%,
    var(--page) 72.4%,
    var(--page) 100%
  );
}
#townsquare-root .townsquare__ground {
  background: var(--ground);
}
`;

const TownSquare = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_URL;
    document.head.appendChild(link);

    let cancelled = false;

    import(MODULE_URL).then(({ mountTownSquare }) => {
      if (!cancelled && rootRef.current) {
        mountTownSquare(rootRef.current, {
          serverOrigin: "https://townsquare.cauenapier.com",
          siteKey: "site_eXlloc78oU3Z6laJ",
          scene: SCENE,
          theme: "host",
        });
      }
    });

    return () => {
      cancelled = true;
      link.remove();
    };
  }, []);

  return (
    <section className="container mx-auto px-6 py-24 relative">
      <style>{THEME_CSS}</style>
      <div ref={rootRef} id="townsquare-root" />
    </section>
  );
};

export default TownSquare;
