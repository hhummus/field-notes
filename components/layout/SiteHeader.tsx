import Link from "next/link";
import Container from "./Container";
import "./SiteHeader.css";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link className="site-header__brand" href="/">
            FIELD NOTES
          </Link>

          <nav className="site-header__nav" aria-label="Main navigation">
            <Link href="#notes">Index</Link>
            <Link href="#about">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}