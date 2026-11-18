import { useEffect, useRef, useState } from "react";
import { demoQuestion } from "../data.js";
import { linkTo } from "../scroll.js";

const MATERIALS = [
  { name: "Kasrlar: konspekt", topic: true },
  { name: "Geometriya testlari", topic: false },
  { name: "Proporsiya masalalari", topic: true },
  { name: "Foizlar: video dars", topic: false },
  { name: "Tenglamalar toʻplami", topic: false },
  { name: "Dars rejasi namunasi", topic: false },
];

const STATUS = ["Barcha materiallar", "Tanlangan mavzu: kasrlar va proporsiyalar", "Bugungi savol"];

const SCENES = [
  {
    title: "Materiallar koʻp, vaqt oz",
    text: "Darsdan keyin Dilnozaning oldida konspektlar, test toʻplamlari va video darslar turibdi. Hammasi foydali, lekin qaysi biridan boshlash aniq emas.",
  },
  {
    title: "Bitta mavzu tanlanadi",
    text: "Dilnoza hammasini birdan takrorlamaydi. U bugun bitta mavzuni tanlaydi: kasrlar va proporsiyalar. Qolgan materiallar keyinga qoladi.",
  },
  {
    title: "Mavzu bitta savolga aylanadi",
    text: "Uzun roʻyxat oʻrniga bitta aniq savol. Javobdan keyin nimani tushunish kerakligi koʻrinadi. Bu savolni Siz ham yechib koʻrishingiz mumkin.",
    cta: true,
  },
];

// Product panel; `step` decides what it shows: 0 scattered materials, 1 one topic, 2 one question.
function StoryPanel({ step }) {
  return (
    <div className="spanel" data-step={step}>
      <div className="spanel-top">
        <span className="spanel-brand">Ustoz Toifa</span>
        <span className="spanel-status">{STATUS[step]}</span>
      </div>
      <div className="spanel-stage">
        <ul className="materials" aria-hidden={step === 2}>
          {MATERIALS.map((m, i) => (
            <li key={m.name} className={m.topic ? "mat is-topic" : "mat"} style={{ "--i": i }}>
              {m.name}
            </li>
          ))}
        </ul>
        <div className="spanel-q" aria-hidden={step !== 2}>
          <div className="q-top">
            <span>{demoQuestion.subject}</span>
            <span className="tag-sample">Oʻquv namunasi</span>
          </div>
          <p className="spanel-qtext">{demoQuestion.text}</p>
          <ul className="mini-opts">
            {demoQuestion.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    // The scene crossing the middle of the screen drives the sticky panel.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="block story" id="hikoya" aria-labelledby="hikoya-title">
      <div className="wrap">
        <h2 id="hikoya-title">Bir oqshomlik tayyorgarlik</h2>
        <p className="sub">
          Dilnoza matematika oʻqituvchisi. Uning bir oqshomi misolida Ustoz Toifa qanday ishlashini koʻring.
        </p>
        <div className="story-grid">
          <div className="scenes">
            {SCENES.map((s, i) => (
              <article
                key={s.title}
                className={i === active ? "scene is-active" : "scene"}
                data-i={i}
                ref={(el) => (refs.current[i] = el)}
              >
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.cta && (
                  <a className="btn btn-primary" href="#demo" onClick={linkTo("demo-title")}>
                    Demo savolni yechish
                  </a>
                )}
                <div className="scene-panel">
                  <StoryPanel step={i} />
                </div>
              </article>
            ))}
          </div>
          <aside className="story-aside" aria-label="Ustoz Toifa paneli">
            <StoryPanel step={active} />
          </aside>
        </div>
      </div>
    </section>
  );
}
