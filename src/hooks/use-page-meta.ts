import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description?: string;
}

export const usePageMeta = ({ title, description }: PageMetaOptions) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | BRTSML` : "BRTSML";

    let metaDescription: HTMLMetaElement | null = null;
    if (description) {
      metaDescription = document.querySelector('meta[name="description"]');
      const previousDescription = metaDescription?.getAttribute("content") ?? "";
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
      return () => {
        document.title = previousTitle;
        metaDescription?.setAttribute("content", previousDescription);
      };
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
};
