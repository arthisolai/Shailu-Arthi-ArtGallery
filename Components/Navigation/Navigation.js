import Link from "next/link";

export default function Navigation() {
  return (

    <section className="navbar-container">
      <nav className="navbar">
        <Link href="/" className="navbar__spotlight">
          Spotlight
        </Link>
        <Link className="navbar__art-pieces" href="/art-pieces">
          Pieces
        </Link>
        <Link className="navbar__favourites" href="#">
          Favorites
        </Link>
      </nav>
    </section>
  );
}

// import Link from "next/link";
// import styles from "./Navigation.css";

// export default function Navigation() {
//   return (
//     <nav>
//       <Link href="/">Spotlight</Link>
//       <Link href="/art-pieces">Pieces</Link>
//       <Link href="/favorites">Favorites</Link>
//     </nav>
//   );
// }
