import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material";
import Logo from "assets/logo.png";

const Head = () => {
  const theme = useTheme();
  return (
    <Helmet>
      <title>Acore</title>

      <meta
        name="description"
        content="Academy of Online Radiology Education (ACORE) offers comprehensive online radiology education brought to you by a team of experts"
      />
      <meta name="keywords" content="Academy, Radiology, Education" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={theme.palette.primary.main} />

      <link rel="canonical" href={window.location.href} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

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
