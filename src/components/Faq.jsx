const ITEMS = [
  {
    q: "Demo uchun roʻyxatdan oʻtish kerakmi?",
    a: "Yoʻq. Demo savolni ham, mashq savolini ham shu sahifada darhol yechishingiz mumkin. Hech qanday maʼlumot soʻralmaydi.",
  },
  {
    q: "Qaysi fan koʻrsatilgan?",
    a: "Matematika: kasrlar va proporsiyalar mavzusi.",
  },
  {
    q: "Bu savollar rasmiy attestatsiya topshiriqlarimi?",
    a: "Yoʻq. Sahifadagi savollar oʻquv namunalari. Ular rasmiy imtihon savollaridan olinmagan va tayyorgarlik qanday oʻtishini koʻrsatish uchun tuzilgan.",
  },
  {
    q: "Dilnoza kim?",
    a: "Dilnoza sahifadagi hikoya qahramoni. Uning misolida Ustoz Toifa bilan bir oqshomlik tayyorgarlik qanday oʻtishi koʻrsatilgan.",
  },
];

export default function Faq() {
  return (
    <section className="block" id="savollar" aria-labelledby="savollar-title">
      <div className="wrap faq-grid">
        <h2 id="savollar-title">Koʻp beriladigan savollar</h2>
        <div className="faq">
          {ITEMS.map((it) => (
            <details key={it.q}>
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
