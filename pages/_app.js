import Layout from "../Components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <div>Failed to Load...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component {...pageProps} artPieces={artPieces} />
      </Layout>
    </>
  );
}
