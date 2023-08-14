import React from "react";
import useSWR from "swr";
import ArtPieces from "../Components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: artPieces } = useSWR(URL, fetcher);

  return (
    <div>
      <h1>Art Gallery</h1>
      {artPieces ? <ArtPieces pieces={artPieces} /> : <p>Loading...</p>}
    </div>
  );
}
