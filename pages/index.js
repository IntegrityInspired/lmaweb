import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "../Components/Layout";

const Page = (props) => {
  console.log("index.js");
  console.log(props);
  return (
    <>
      <h1>Hello, LMA!</h1>
      <Layout mainNav={props.mainNav}>
        <SliceZone {...props} resolver={resolver} />
      </Layout>
    </>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "page",
  queryType: "repeat",
  apiParams: {
    uid: "home",
  },
});

export default Page;
