import React from "react";
import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Failed to Load...</div>;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
