import { Helmet } from "react-helmet";
import Logo from "assets/logo.png";

const Head = () => {
  return (
    <Helmet>
      <title>Acore</title>

      <meta
        name="description"
        content="Academy of Online Radiology Education (ACORE) offers comprehensive online radiology education brought to you by a team of experts"
      />
      <meta name="keywords" content="Academy, Radiology, Education" />

      <meta property="og:title" content="Acore" />
      <meta
        property="og:description"
        content="Academy of Online Radiology Education (ACORE) offers comprehensive online radiology education brought to you by a team of experts"
      />
      <meta property="og:image" content={Logo} />
      <meta property="og:url" content="https://acore.vercel.app" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Head;
