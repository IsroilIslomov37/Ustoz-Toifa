import Question from "./Question.jsx";
import { Avatar } from "./Hero.jsx";
import { demoQuestion } from "../data.js";
import { goTo } from "../scroll.js";

export default function Demo({ onResult, onPractice }) {
  return (
    <section className="block demo" id="demo" aria-labelledby="demo-title">
      <div className="wrap demo-grid">
        <div className="demo-intro">
          <h2 id="demo-title" tabIndex={-1}>
            Endi navbat Sizda
          </h2>
          <p className="sub">
            Dilnoza shu savoldan boshladi. Javobni tanlang va tekshiring: yechim va keyingi qadam javobingizga qarab
            ochiladi. Roʻyxatdan oʻtish shart emas.
          </p>
        </div>
        <div className="panel">
          <Question
            q={demoQuestion}
            onResult={onResult}
            renderAfter={(ok) => (
              <div className="dilnoza">
                <Avatar />
                <div className="dilnoza-body">
                  <p>
                    <b>Dilnoza:</b>{" "}
                    {ok
                      ? "«Ikkala qadam ham tushunarli. Bugun mavzuni yana bitta savol bilan mustahkamlayman.»"
                      : "«Demak, bugun shu qadamni takrorlashim kerak. Kasrlardan boshlayman.»"}
                  </p>
                  {ok ? (
                    <button type="button" className="btn btn-primary" onClick={onPractice}>
                      Mavzuni mustahkamlash
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" onClick={() => goTo("reja-title")}>
                      Bugungi rejani koʻrish
                    </button>
                  )}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
