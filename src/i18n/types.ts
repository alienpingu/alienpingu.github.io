import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof import("./resources/it").it.common;
      home: typeof import("./resources/it").it.home;
      services: typeof import("./resources/it").it.services;
      serviceDetail: typeof import("./resources/it").it.serviceDetail;
      projects: typeof import("./resources/it").it.projects;
      about: typeof import("./resources/it").it.about;
      contact: typeof import("./resources/it").it.contact;
      notFound: typeof import("./resources/it").it.notFound;
      privacy: typeof import("./resources/it").it.privacy;
    };
  }
}
