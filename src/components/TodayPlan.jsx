import { useState } from "react";
import Question from "./Question.jsx";
import { practiceQuestion } from "../data.js";

const STATUS = {
  null: "Demo savolni yeching: reja javobingizga qarab aniqlashadi.",
  true: "Demo savolni toʻgʻri yechdingiz. Mavzuni yana bitta qisqa savol bilan mustahkamlang.",
  false: "Demo savoldagi xato sonning qismini topish bilan bogʻliq. Bugun shu mavzudan boshlang.",
};

export default function TodayPlan({ demoResult, practiceOpen, onTogglePractice }) {
  const [ruleOpen, setRuleOpen] = useState(false);

  return (
    <section className="block plan" id="reja" aria-labelledby="reja-title">
      <div className="wrap plan-grid">
        <div>
          <h2 id="reja-title" tabIndex={-1}>
            Bugungi reja
          </h2>
          <p className="sub" aria-live="polite">
            {STATUS[demoResult]}
          </p>
        </div>

        <div className="plan-panel">
          <p className="plan-topic">
            Mavzu: <b>kasrlar va proporsiyalar</b>
          </p>
          <p>Bitta qoidani takrorlang, keyin uni bitta qisqa savolda sinab koʻring.</p>
          <div className="plan-actions">
            <button
              type="button"
              className="btn btn-ghost"
              aria-expanded={ruleOpen}
              aria-controls="rule"
              onClick={() => setRuleOpen(!ruleOpen)}
            >
              {ruleOpen ? "Qoidani yopish" : "Qoidani ochish"}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              aria-expanded={practiceOpen}
              aria-controls="practice"
              onClick={onTogglePractice}
            >
              {practiceOpen ? "Mashq savolini yopish" : "Yana bitta savol yechish"}
            </button>
          </div>

          {ruleOpen && (
            <div id="rule" className="rule reveal">
              <p>
                <b>Sonning qismi.</b> Sonning a/b qismini topish uchun sonni b ga boʻling, natijani a ga koʻpaytiring.
                Masalan, 24 ning 3/4 qismi: 24 ÷ 4 × 3 = 18.
              </p>
              <p>
                <b>Proporsiya.</b> Avval bitta birlikning qiymatini toping, keyin uni kerakli miqdorga koʻpaytiring.
              </p>
            </div>
          )}

          {practiceOpen && (
            <div id="practice" className="practice reveal">
              <h3 id="practice-title" tabIndex={-1}>
                Mashq savoli
              </h3>
              <Question q={practiceQuestion} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
