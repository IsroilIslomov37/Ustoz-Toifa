import { demoQuestion } from "../data.js";
import { linkTo } from "../scroll.js";

export function Avatar() {
  return (
    <span className="avatar" aria-hidden="true">
      D
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1 id="hero-title" className="enter" style={{ "--d": "0ms" }}>
            Bugun nimadan boshlaysiz?
          </h1>
          <p className="lead enter" style={{ "--d": "90ms" }}>
            Ustoz Toifa attestatsiyaga tayyorlanayotgan maktab oʻqituvchilari uchun. Bitta savolni yeching,
            xatoingizni tushuning va bugun qaysi mavzuni takrorlashni aniq biling.
          </p>
          <div className="actions enter" style={{ "--d": "180ms" }}>
            <a className="btn btn-primary" href="#demo" onClick={linkTo("demo-title")}>
              Demo savolni yechish
            </a>
            <a className="btn btn-ghost" href="#hikoya">
              Qanday ishlaydi
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="bubble enter" style={{ "--d": "520ms" }}>
            <Avatar />
            <div>
              <blockquote>«Bugun qaysi mavzuni takrorlasam ekan?»</blockquote>
              <figcaption>Dilnoza, matematika oʻqituvchisi</figcaption>
            </div>
          </figure>

          <div className="qcard enter-card" aria-label="Ustoz Toifa savol kartasi namunasi">
            <div className="q-top">
              <span>{demoQuestion.subject}</span>
              <span className="tag-sample">Oʻquv namunasi</span>
            </div>
            <p className="qcard-text">{demoQuestion.text}</p>
            <ul className="mini-opts">
              {demoQuestion.options.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <a className="text-link" href="#demo" onClick={linkTo("demo-title")}>
              Shu savolni yechish →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
