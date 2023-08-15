import Layout from "../Components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState({});
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <div>Failed to Load...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("artPiecesInfo in App:", artPiecesInfo);

  function handleToggleFavourite(slug) {
    if (!slug) {
      console.error("Slug is undefined!");
      return;
    }
    setArtPiecesInfo((prevInfo) => ({
      ...prevInfo,
      [slug]: {
        isFavorite: !prevInfo[slug]?.isFavorite,
      },
    }));
    console.log("Updated artPiecesInfo:", artPiecesInfo);
  }

  console.log("onToggleFavorite in App:", handleToggleFavourite);

  return (
    <>
      <Layout>
        <GlobalStyle />

        <Component
          {...pageProps}
          artPieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavourite}
        />
      </Layout>
    </>
  );
}
