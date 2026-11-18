// Training examples only, not official exam tasks.
export const demoQuestion = {
  id: "demo",
  subject: "Matematika · Kasrlar",
  text: "24 sonining 3/4 qismi nechaga teng?",
  options: ["6", "12", "18", "20"],
  correct: "18",
  steps: [
    { calc: "24 ÷ 4 = 6", note: "Maxraj 4: sonni 4 ta teng boʻlakka boʻlamiz." },
    { calc: "6 × 3 = 18", note: "Surat 3: shunday boʻlaklardan 3 tasini olamiz." },
  ],
  // 6 means the second step was skipped; other wrong answers miss the division.
  focusStep: (answer) => (answer === "6" ? 1 : 0),
};

export const practiceQuestion = {
  id: "practice",
  subject: "Matematika · Proporsiyalar",
  text: "3 ta daftar 4 500 soʻm tursa, 5 ta daftar necha soʻm turadi?",
  options: ["6 000 soʻm", "7 000 soʻm", "7 500 soʻm", "9 000 soʻm"],
  correct: "7 500 soʻm",
  steps: [
    { calc: "4 500 ÷ 3 = 1 500", note: "Avval bitta daftarning narxini topamiz." },
    { calc: "1 500 × 5 = 7 500", note: "Keyin uni kerakli daftarlar soniga koʻpaytiramiz." },
  ],
  // 6 000 = one more notebook added, so the multiplication step was missed.
  focusStep: (answer) => (answer === "6 000 soʻm" ? 1 : 0),
};
