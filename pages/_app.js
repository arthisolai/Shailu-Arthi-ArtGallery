import Layout from "../Components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <div>Failed to Load...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const toggleFavorite = (slug) => {
    setArtPiecesInfo((prevInfo) => ({
      ...prevInfo,
      // [slug]: {
      //   ...prevInfo[slug],
      //   isFavorite: !prevInfo[slug]?.isFavorite,
      // },
    }));
  };

  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          {...pageProps}
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          toggleFavorite={toggleFavorite}
        />
      </Layout>
    </>
  );
}
