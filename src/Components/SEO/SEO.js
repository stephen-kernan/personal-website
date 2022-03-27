import { Helmet } from "react-helmet";

export const SEO = ({ pageTitle, description }) => {
  return (
    <Helmet
      title={pageTitle}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: pageTitle,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:title",
          content: pageTitle,
        },
        {
          property: "twitter:description",
          content: description,
        },
      ]}
    />
  );
};
