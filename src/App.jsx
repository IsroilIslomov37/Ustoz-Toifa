import { useState } from "react";
import { flushSync } from "react-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Demo from "./components/Demo.jsx";
import TodayPlan from "./components/TodayPlan.jsx";
import Faq from "./components/Faq.jsx";
import { goTo } from "./scroll.js";

export default function App() {
  // null = not answered yet, true / false = demo answer result
  const [demoResult, setDemoResult] = useState(null);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const openPractice = () => {
    flushSync(() => setPracticeOpen(true)); // render it before scrolling to it
    goTo("practice-title");
  };

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Story />
        <Demo onResult={setDemoResult} onPractice={openPractice} />
        <TodayPlan
          demoResult={demoResult}
          practiceOpen={practiceOpen}
          onTogglePractice={() => (practiceOpen ? setPracticeOpen(false) : openPractice())}
        />
        <Faq />
      </main>
      <footer className="wrap footer">Ustoz Toifa · Maktab oʻqituvchilari uchun attestatsiyaga tayyorgarlik</footer>
    </>
  );
}
