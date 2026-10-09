import Container from "./Container";
import Link from "next/link";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
     

        <div className="site-footer__main">
          <p className="site-footer__statement">
            Designed & built
            <br />
            in Norway.
          </p>

          <nav
            className="site-footer__links"
            aria-label="Footer navigation"
          >
            <Link href="mailto:helenalokkeberg@gmail.com">Email</Link>
            <Link href="https://github.com/hhummus
              ">GitHub</Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>Field Notes</p>
          <p>Portfolio / 2026</p>
        </div>
      </Container>
    </footer>
  );
}