import { Helmet } from "react-helmet";

export const SEO = ({ pageTitle, description }) => {
  return (
    <Helmet
      title={`${pageTitle} | Stephen Kernan`}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: `${pageTitle} | Stephen Kernan`,
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
          content: `${pageTitle} | Stephen Kernan`,
        },
        {
          property: "twitter:description",
          content: description,
        },
      ]}
    />
  );
};
