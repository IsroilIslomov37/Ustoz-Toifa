import { useEffect, useRef, useState } from "react";

// One multiple-choice question: pick, check, see the worked solution, retry.
export default function Question({ q, onResult, renderAfter }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef(null);
  const focusAfter = useRef(null); // "result" | "first" — where focus goes after the next render

  const ok = checked && selected === q.correct;
  const focusStep = checked && !ok ? q.focusStep(selected) : -1;

  useEffect(() => {
    if (focusAfter.current === "result") resultRef.current?.focus();
    if (focusAfter.current === "first") document.getElementById(`${q.id}-0`)?.focus();
    focusAfter.current = null;
  }, [checked, q.id]);

  const submit = (e) => {
    e.preventDefault();
    if (!selected) return setError("Avval bitta javobni tanlang.");
    focusAfter.current = "result";
    setChecked(true);
    onResult?.(selected === q.correct);
  };

  const retry = () => {
    focusAfter.current = "first";
    setSelected(null);
    setChecked(false);
    setError("");
    onResult?.(null);
  };

  const markFor = (o) => {
    if (!checked) return "";
    if (o === q.correct) return o === selected ? "✓ Sizning javobingiz · toʻgʻri" : "✓ Toʻgʻri javob";
    if (o === selected) return "✗ Sizning javobingiz · notoʻgʻri";
    return "";
  };

  return (
    <div className="question">
      <div className="q-top">
        <span>{q.subject}</span>
        <span className="tag-sample">Oʻquv namunasi</span>
      </div>
      <form onSubmit={submit} noValidate>
        <fieldset disabled={checked}>
          <legend>{q.text}</legend>
          <div className="opts">
            {q.options.map((o, i) => {
              const mark = markFor(o);
              const cls = ["opt", checked && o === q.correct && "is-correct", checked && o === selected && o !== q.correct && "is-wrong"]
                .filter(Boolean)
                .join(" ");
              return (
                <label key={o} className={cls} htmlFor={`${q.id}-${i}`}>
                  <input
                    type="radio"
                    name={q.id}
                    id={`${q.id}-${i}`}
                    value={o}
                    checked={selected === o}
                    onChange={() => {
                      setSelected(o);
                      setError("");
                    }}
                  />
                  <span className="opt-val">{o}</span>
                  {mark && <span className="mark">{mark}</span>}
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="form-actions">
          {checked ? (
            <button type="button" className="btn btn-ghost" onClick={retry}>
              Qayta urinib koʻrish
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Javobni tekshirish
            </button>
          )}
          <p className="form-msg" role="alert">
            {error}
          </p>
        </div>
      </form>

      {checked && (
        <div className="result reveal" ref={resultRef} tabIndex={-1} aria-live="polite">
          <p className={ok ? "verdict ok" : "verdict bad"}>
            {ok
              ? `✓ Toʻgʻri. Sizning javobingiz: ${selected}. Ikkala qadam ham toʻgʻri bajarildi.`
              : `✗ Notoʻgʻri. Sizning javobingiz: ${selected}. Toʻgʻri javob: ${q.correct}.`}
          </p>
          <h4 className="sol-title">Yechim</h4>
          <ol className="solution">
            {q.steps.map((s, i) => (
              <li key={s.calc} className={i === focusStep ? "step is-focus" : "step"} style={{ "--i": i }}>
                <span className="calc">{s.calc}</span>
                <span className="note">{s.note}</span>
                {i === focusStep && <span className="hint-label">Shu qadamni tushunib oling</span>}
              </li>
            ))}
          </ol>
          {renderAfter?.(ok)}
        </div>
      )}
    </div>
  );
}
