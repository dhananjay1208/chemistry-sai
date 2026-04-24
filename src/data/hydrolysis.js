// Salt Hydrolysis — content bank for Sai

export const mcqs = [
  {
    q: 'An aqueous solution of NaCl is:',
    options: ['Acidic', 'Basic', 'Neutral', 'Amphoteric'],
    answer: 2,
    explain: 'NaCl is a salt of strong acid (HCl) + strong base (NaOH). Neither ion hydrolyzes → neutral (pH = 7).'
  },
  {
    q: 'Aqueous solution of sodium acetate (CH<sub>3</sub>COONa) is:',
    options: ['Acidic', 'Basic', 'Neutral', 'Strongly acidic'],
    answer: 1,
    explain: 'Salt of weak acid (CH<sub>3</sub>COOH) + strong base (NaOH). CH<sub>3</sub>COO<sup>–</sup> hydrolyzes → basic (pH > 7).'
  },
  {
    q: 'NH<sub>4</sub>Cl solution is:',
    options: ['Acidic', 'Basic', 'Neutral', 'Strongly basic'],
    answer: 0,
    explain: 'Salt of strong acid (HCl) + weak base (NH<sub>4</sub>OH). NH<sub>4</sub><sup>+</sup> hydrolyzes → acidic (pH < 7).'
  },
  {
    q: 'The nature of an aqueous solution of CH<sub>3</sub>COONH<sub>4</sub> is:',
    options: ['Strongly acidic', 'Strongly basic', 'Neutral or nearly neutral', 'Strongly oxidizing'],
    answer: 2,
    explain: 'Weak acid + weak base. K<sub>a</sub>(HOAc) ≈ K<sub>b</sub>(NH<sub>3</sub>) ≈ 1.8 × 10<sup>–5</sup> → hydrolysis cancels → pH ≈ 7.'
  },
  {
    q: 'The hydrolysis constant K<sub>h</sub> of CH<sub>3</sub>COONa is related to K<sub>a</sub> and K<sub>w</sub> as:',
    options: ['K<sub>h</sub> = K<sub>a</sub>/K<sub>w</sub>', 'K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub>', 'K<sub>h</sub> = K<sub>w</sub> × K<sub>a</sub>', 'K<sub>h</sub> = K<sub>a</sub>²'],
    answer: 1,
    explain: 'For a salt of weak acid + strong base: K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub>.'
  },
  {
    q: 'For a salt of weak base + strong acid, K<sub>h</sub> equals:',
    options: ['K<sub>w</sub>/K<sub>a</sub>', 'K<sub>w</sub>/K<sub>b</sub>', 'K<sub>w</sub>/(K<sub>a</sub>·K<sub>b</sub>)', 'K<sub>a</sub>/K<sub>b</sub>'],
    answer: 1,
    explain: 'NH<sub>4</sub><sup>+</sup>-type salts: K<sub>h</sub> = K<sub>w</sub>/K<sub>b</sub>.'
  },
  {
    q: 'The degree of hydrolysis of a salt of weak acid and strong base is:',
    options: ['√(K<sub>h</sub>/C)', '√(K<sub>w</sub>/(K<sub>a</sub>·C))', '√(K<sub>w</sub>·K<sub>a</sub>/C)', 'Both A and B'],
    answer: 3,
    explain: 'h = √(K<sub>h</sub>/C) = √(K<sub>w</sub>/(K<sub>a</sub>·C)). Both forms are equivalent.'
  },
  {
    q: 'pH of a salt of weak acid and strong base (C = 0.1 M, K<sub>a</sub> = 10<sup>–5</sup>) is given by:',
    options: ['pH = 7 + ½(pK<sub>a</sub> + log C)', 'pH = 7 – ½(pK<sub>a</sub> + log C)', 'pH = ½(pK<sub>a</sub> – log C)', 'pH = pK<sub>a</sub>'],
    answer: 0,
    explain: 'For WA–SB salt: pH = 7 + ½(pK<sub>a</sub> + log C). Here pH = 7 + ½(5 + (–1)) = 7 + 2 = 9.'
  },
  {
    q: 'pH of aqueous NH<sub>4</sub>Cl (0.1 M, K<sub>b</sub>(NH<sub>3</sub>) = 1.8 × 10<sup>–5</sup>) is approximately:',
    options: ['8', '7', '5.13', '3'],
    answer: 2,
    explain: 'pH = 7 – ½(pK<sub>b</sub> + log C) = 7 – ½(4.74 – 1) = 7 – 1.87 ≈ 5.13.'
  },
  {
    q: 'The hydrolysis of Na<sub>2</sub>CO<sub>3</sub> in water gives a solution that is:',
    options: ['Acidic', 'Basic', 'Neutral', 'Buffered at pH 7'],
    answer: 1,
    explain: 'Na<sub>2</sub>CO<sub>3</sub> is salt of strong base + weak acid (H<sub>2</sub>CO<sub>3</sub>). CO<sub>3</sub><sup>2–</sup> hydrolyzes → basic.'
  },
  {
    q: 'Which salt will undergo <strong>maximum</strong> hydrolysis?',
    options: ['NaCl', 'CH<sub>3</sub>COONa', 'NH<sub>4</sub>Cl', 'CH<sub>3</sub>COONH<sub>4</sub>'],
    answer: 3,
    explain: 'Salt of weak acid + weak base → both ions hydrolyze → highest degree of hydrolysis.'
  },
  {
    q: 'The degree of hydrolysis (h) depends on concentration (C) as:',
    options: ['h ∝ C', 'h ∝ 1/C', 'h ∝ √C', 'h ∝ 1/√C'],
    answer: 3,
    explain: 'h = √(K<sub>h</sub>/C) → h ∝ 1/√C. Dilution increases hydrolysis.'
  },
  {
    q: 'For hydrolysis of WA–WB salt, pH is:',
    options: ['7 + ½(pK<sub>a</sub> – pK<sub>b</sub>)', '7 + ½(pK<sub>a</sub> + pK<sub>b</sub>)', '½(pK<sub>a</sub> + pK<sub>b</sub>)', '7 + ½(pK<sub>b</sub> – pK<sub>a</sub>)'],
    answer: 0,
    explain: 'WA–WB salt: pH = 7 + ½(pK<sub>a</sub> – pK<sub>b</sub>). Concentration independent!'
  },
  {
    q: 'Which of the following salts does NOT undergo hydrolysis?',
    options: ['KCN', 'NH<sub>4</sub>NO<sub>3</sub>', 'KNO<sub>3</sub>', 'CH<sub>3</sub>COOK'],
    answer: 2,
    explain: 'KNO<sub>3</sub>: salt of SB (KOH) + SA (HNO<sub>3</sub>). Neither ion hydrolyzes.'
  },
  {
    q: 'Hydrolysis of FeCl<sub>3</sub> solution gives:',
    options: ['Neutral solution', 'Strongly basic solution', 'Acidic solution', 'No hydrolysis'],
    answer: 2,
    explain: 'Fe<sup>3+</sup> is a small, highly-charged cation → strong hydrolysis → [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> releases H<sup>+</sup> → acidic (pH ≈ 2–3).'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2022]</b> Which of the following salts on dissolution in water gives a solution whose pH is greater than 7?',
    options: ['NH<sub>4</sub>Cl', 'CH<sub>3</sub>COONa', 'NaCl', 'CuSO<sub>4</sub>'],
    answer: 1,
    explain: 'CH<sub>3</sub>COONa = salt of weak acid + strong base → acetate ion hydrolyzes → pH > 7.'
  },
  {
    q: '<b>[NEET 2021]</b> The aqueous solution of which of the following salts will have the lowest pH?',
    options: ['Na<sub>2</sub>CO<sub>3</sub>', 'NaHCO<sub>3</sub>', 'NH<sub>4</sub>Cl', 'KCl'],
    answer: 2,
    explain: 'NH<sub>4</sub>Cl: SA + WB → acidic (pH < 7). Na<sub>2</sub>CO<sub>3</sub>, NaHCO<sub>3</sub> are basic; KCl is neutral.'
  },
  {
    q: '<b>[NEET 2019]</b> A certain buffer solution contains equal concentration of X<sup>–</sup> and HX. If K<sub>b</sub> of X<sup>–</sup> is 10<sup>–10</sup>, the pH of the buffer is:',
    options: ['4', '7', '10', '14'],
    answer: 0,
    explain: 'pK<sub>b</sub>(X<sup>–</sup>) = 10 → pK<sub>a</sub>(HX) = 14 – 10 = 4. pH = pK<sub>a</sub> + log(1) = 4.'
  },
  {
    q: '<b>[NEET 2018]</b> Which one of the following salts would give a neutral aqueous solution?',
    options: ['NH<sub>4</sub>Cl', 'CH<sub>3</sub>COONa', 'Na<sub>2</sub>CO<sub>3</sub>', 'KNO<sub>3</sub>'],
    answer: 3,
    explain: 'KNO<sub>3</sub>: both K<sup>+</sup> (from strong base KOH) and NO<sub>3</sub><sup>–</sup> (from strong acid HNO<sub>3</sub>) don\'t hydrolyze.'
  },
  {
    q: '<b>[NEET 2017]</b> The pH of 0.1 M NH<sub>4</sub>Cl solution (K<sub>b</sub> for NH<sub>3</sub> = 1.8 × 10<sup>–5</sup>) is closest to:',
    options: ['4.63', '5.13', '7.00', '9.87'],
    answer: 1,
    explain: 'pK<sub>b</sub> = –log(1.8 × 10<sup>–5</sup>) = 4.74. pH = 7 – ½(4.74 + log 0.1) = 7 – ½(4.74 – 1) = 7 – 1.87 ≈ 5.13.'
  },
  {
    q: '<b>[AIPMT 2015]</b> Equal volumes of 0.1 M AgNO<sub>3</sub> and 0.2 M NaCN are mixed. Predict the nature of the resulting solution:',
    options: ['Neutral', 'Weakly acidic', 'Strongly basic', 'Weakly basic'],
    answer: 3,
    explain: 'Excess CN<sup>–</sup> after forming [Ag(CN)<sub>2</sub>]<sup>–</sup>. CN<sup>–</sup> is a weak-acid conjugate base → hydrolyzes → weakly basic.'
  },
  {
    q: '<b>[NEET 2014]</b> The pK<sub>a</sub> of a weak acid is 4.8 and its K<sub>a</sub> value is:',
    options: ['1.58 × 10<sup>–5</sup>', '1.58 × 10<sup>–4</sup>', '6.3 × 10<sup>–5</sup>', '1 × 10<sup>–5</sup>'],
    answer: 0,
    explain: 'K<sub>a</sub> = 10<sup>–pKa</sup> = 10<sup>–4.8</sup> ≈ 1.58 × 10<sup>–5</sup>.'
  },
  {
    q: '<b>[AIPMT 2013]</b> The aqueous solution of aluminium chloride is acidic due to:',
    options: ['Presence of HCl', 'Hydrolysis of Al<sup>3+</sup> ion', 'Aluminium being amphoteric', 'Ionization'],
    answer: 1,
    explain: '[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> releases H<sup>+</sup>: a high charge density small cation strongly polarizes coordinated water.'
  },
]

export const numericals = [
  {
    q: 'Calculate K<sub>h</sub> for CH<sub>3</sub>COONa (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>) at 25 °C.',
    tag: 'Kh calculation',
    steps: [
      'K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub>',
      'K<sub>h</sub> = 10<sup>–14</sup>/(1.8 × 10<sup>–5</sup>)',
      'K<sub>h</sub> = 5.56 × 10<sup>–10</sup>',
    ],
    answer: 'K<sub>h</sub> ≈ 5.56 × 10<sup>–10</sup>'
  },
  {
    q: 'Calculate degree of hydrolysis and pH of 0.01 M sodium acetate (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>).',
    tag: 'WA–SB salt',
    steps: [
      'K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub> = 10<sup>–14</sup>/1.8 × 10<sup>–5</sup> = 5.56 × 10<sup>–10</sup>.',
      'h = √(K<sub>h</sub>/C) = √(5.56 × 10<sup>–10</sup>/0.01) = √(5.56 × 10<sup>–8</sup>) ≈ 2.36 × 10<sup>–4</sup>.',
      '[OH<sup>–</sup>] = Ch = 0.01 × 2.36 × 10<sup>–4</sup> ≈ 2.36 × 10<sup>–6</sup> M.',
      'pOH = –log(2.36 × 10<sup>–6</sup>) ≈ 5.63',
      'pH = 14 – 5.63 = 8.37',
    ],
    answer: 'h ≈ 2.36 × 10<sup>–4</sup>; pH ≈ 8.37'
  },
  {
    q: 'Calculate the pH of 0.1 M NH<sub>4</sub>Cl (K<sub>b</sub>(NH<sub>3</sub>) = 1.8 × 10<sup>–5</sup>).',
    tag: 'SA–WB salt',
    steps: [
      'pK<sub>b</sub> = 4.74. pH = 7 – ½(pK<sub>b</sub> + log C).',
      'pH = 7 – ½(4.74 + log 0.1)',
      'pH = 7 – ½(4.74 – 1) = 7 – ½(3.74)',
      'pH = 7 – 1.87 = 5.13',
    ],
    answer: 'pH ≈ 5.13'
  },
  {
    q: 'Calculate pH of an aqueous solution of ammonium acetate (K<sub>a</sub> = K<sub>b</sub> = 1.8 × 10<sup>–5</sup>).',
    tag: 'WA–WB salt',
    steps: [
      'pH = 7 + ½(pK<sub>a</sub> – pK<sub>b</sub>)',
      'pK<sub>a</sub> = pK<sub>b</sub> = 4.74.',
      'pH = 7 + ½(0) = 7',
      'Concentration-independent — good NEET fact!',
    ],
    answer: 'pH = 7 (neutral, concentration-independent)'
  },
  {
    q: 'Calculate the hydrolysis constant and pH of 0.01 M KCN (K<sub>a</sub>(HCN) = 6.2 × 10<sup>–10</sup>).',
    tag: 'High Kh salt',
    steps: [
      'K<sub>h</sub> = K<sub>w</sub>/K<sub>a</sub> = 10<sup>–14</sup>/6.2 × 10<sup>–10</sup> = 1.61 × 10<sup>–5</sup>.',
      'h = √(K<sub>h</sub>/C) = √(1.61 × 10<sup>–5</sup>/0.01) = √(1.61 × 10<sup>–3</sup>) ≈ 0.040 (~4%).',
      '[OH<sup>–</sup>] = Ch = 0.01 × 0.040 = 4.0 × 10<sup>–4</sup> M.',
      'pOH = –log(4.0 × 10<sup>–4</sup>) ≈ 3.4.',
      'pH = 14 – 3.4 = 10.6',
    ],
    answer: 'K<sub>h</sub> = 1.6 × 10<sup>–5</sup>; h ≈ 4%; pH ≈ 10.6'
  },
  {
    q: 'If pH of a 0.01 M solution of a salt of weak acid and strong base is 9, calculate K<sub>a</sub> of the weak acid.',
    tag: 'Reverse: pH → Ka',
    steps: [
      'pH = 7 + ½(pK<sub>a</sub> + log C)',
      '9 = 7 + ½(pK<sub>a</sub> + log 0.01) = 7 + ½(pK<sub>a</sub> – 2)',
      '2 = ½(pK<sub>a</sub> – 2) → pK<sub>a</sub> = 6 → K<sub>a</sub> = 10<sup>–6</sup>',
    ],
    answer: 'K<sub>a</sub> = 10<sup>–6</sup>'
  },
]
