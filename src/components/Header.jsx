import { linkTo } from "../scroll.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">
          Ustoz <span>Toifa</span>
        </a>
        <nav className="nav" aria-label="Asosiy">
          <a href="#hikoya">Qanday ishlaydi</a>
          <a href="#demo" onClick={linkTo("demo-title")}>Demo</a>
          <a href="#savollar">Savollar</a>
        </nav>
        <a className="btn btn-primary btn-sm" href="#demo" onClick={linkTo("demo-title")}>
          Demo savolni yechish
        </a>
      </div>
    </header>
  );
}
