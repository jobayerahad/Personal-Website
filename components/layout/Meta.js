import Head from "next/head";

const Meta = ({ title, description, ogUrl }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={ogUrl} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="og:site_name" content="Jobayer Ahad" />
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Head>
);

Meta.defaultProps = {
  title: "Jobayer Ahad",
  description: "I'm Jobayer, a visual UX/UI Designer and Web Developer",
  ogUrl: "https://jobayerahad.com",
};

export default Meta;
