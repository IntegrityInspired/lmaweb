import "../styles/globals.css";
import { Client } from "../prismic-configuration";

function MyApp({ Component, pageProps, props }) {
  console.log("props");
  console.log(props);
  return <Component {...pageProps} mainNav={props.mainNav} />;
}

MyApp.getInitialProps = async (ctx) => {
  const client = Client();
  const mainNav = (await client.getSingle("menu")) || {};
  //const footer = (await client.getSingle("footer")) || {};

  return {
    props: {
      mainNav: mainNav,
    },
  };
};

export default MyApp;
