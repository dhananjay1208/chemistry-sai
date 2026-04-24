// pH Determination — content bank for Sai
// MCQs, NEET PYQs, numericals and pH-guess gameCards.

export const mcqs = [
  {
    q: 'The pH of a solution is defined as:',
    options: ['log[H<sup>+</sup>]', '–log[H<sup>+</sup>]', 'ln[H<sup>+</sup>]', '1/[H<sup>+</sup>]'],
    answer: 1,
    explain: 'pH = –log<sub>10</sub>[H<sup>+</sup>]. The negative sign makes pH positive for typical solutions.'
  },
  {
    q: 'At 25 °C, pH + pOH equals:',
    options: ['7', '14', '0', '10'],
    answer: 1,
    explain: 'Taking –log of K<sub>w</sub> = 10<sup>–14</sup>: pH + pOH = 14 at 25 °C.'
  },
  {
    q: 'The pH of 0.001 M HCl is:',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explain: 'HCl is a strong acid → [H<sup>+</sup>] = 10<sup>–3</sup> M → pH = 3.'
  },
  {
    q: 'pH of 0.01 M NaOH solution is:',
    options: ['2', '10', '12', '14'],
    answer: 2,
    explain: '[OH<sup>–</sup>] = 10<sup>–2</sup> → pOH = 2 → pH = 14 – 2 = 12.'
  },
  {
    q: 'If [H<sup>+</sup>] of a solution is 10<sup>–4</sup> M, its pH is:',
    options: ['10', '4', '–4', '14'],
    answer: 1,
    explain: 'pH = –log(10<sup>–4</sup>) = 4. Acidic (pH < 7).'
  },
  {
    q: 'pH of 10<sup>–8</sup> M HCl is approximately:',
    options: ['8', '6.98', '7', '1'],
    answer: 1,
    explain: 'Trap! At very low [HCl], water\'s own H<sup>+</sup> (10<sup>–7</sup>) matters. Total [H<sup>+</sup>] ≈ 1.05 × 10<sup>–7</sup> → pH ≈ 6.98. Not 8!'
  },
  {
    q: 'The pH of 0.01 M acetic acid (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>) is approximately:',
    options: ['2', '3.37', '4.74', '5.5'],
    answer: 1,
    explain: '[H<sup>+</sup>] = √(K<sub>a</sub>·C) = √(1.8 × 10<sup>–7</sup>) ≈ 4.24 × 10<sup>–4</sup> → pH ≈ 3.37.'
  },
  {
    q: 'A solution has pH = 5. What is [OH<sup>–</sup>]?',
    options: ['10<sup>–5</sup> M', '10<sup>–9</sup> M', '10<sup>–7</sup> M', '10<sup>–14</sup> M'],
    answer: 1,
    explain: 'pH 5 → pOH = 9 → [OH<sup>–</sup>] = 10<sup>–9</sup> M.'
  },
  {
    q: 'Which has the highest pH?',
    options: ['0.1 M HCl', '0.1 M CH<sub>3</sub>COOH', '0.1 M NH<sub>4</sub>OH', '0.1 M NaOH'],
    answer: 3,
    explain: 'NaOH is the strongest base at equal concentration → highest [OH<sup>–</sup>] → highest pH (= 13).'
  },
  {
    q: 'The pH of a solution obtained by mixing 50 mL of 0.1 M HCl with 50 mL of 0.1 M NaOH is:',
    options: ['1', '7', '13', '0'],
    answer: 1,
    explain: 'Equal moles of strong acid + strong base → complete neutralization → pure NaCl (neutral salt) → pH = 7.'
  },
  {
    q: 'If pH of a solution changes from 3 to 5, [H<sup>+</sup>] changes by a factor of:',
    options: ['10', '100', '1/100', '1/10'],
    answer: 2,
    explain: 'pH 3 → 10<sup>–3</sup> M; pH 5 → 10<sup>–5</sup> M. Ratio = 10<sup>–5</sup>/10<sup>–3</sup> = 1/100.'
  },
  {
    q: 'pH of 10<sup>–3</sup> M NaOH is:',
    options: ['3', '11', '12', '13'],
    answer: 1,
    explain: '[OH<sup>–</sup>] = 10<sup>–3</sup> → pOH = 3 → pH = 11.'
  },
  {
    q: 'When [H<sup>+</sup>] = [OH<sup>–</sup>] in a solution, the solution is:',
    options: ['Acidic', 'Basic', 'Neutral', 'Buffered'],
    answer: 2,
    explain: 'By definition, neutral means equal H<sup>+</sup> and OH<sup>–</sup>. At 25 °C this is pH = 7.'
  },
  {
    q: 'For a diprotic strong acid H<sub>2</sub>SO<sub>4</sub>, 0.01 M solution, pH ≈:',
    options: ['2', '1.7', '1', '3'],
    answer: 1,
    explain: 'Both H<sup>+</sup> dissociate fully → [H<sup>+</sup>] ≈ 2 × 0.01 = 0.02 → pH = –log(0.02) ≈ 1.7.'
  },
  {
    q: 'Which indicator changes color in the pH range 8.3–10 (basic range)?',
    options: ['Methyl orange', 'Methyl red', 'Phenolphthalein', 'Litmus'],
    answer: 2,
    explain: 'Phenolphthalein: colorless in acid, pink above ~pH 8.3. Used in SA–SB and SA–WB titrations.'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2023]</b> The pH of 0.1 M solution of a weak monoprotic acid which is 1% ionized is:',
    options: ['1', '2', '3', '11'],
    answer: 2,
    explain: '[H<sup>+</sup>] = Cα = 0.1 × 0.01 = 10<sup>–3</sup> M → pH = 3.'
  },
  {
    q: '<b>[NEET 2022]</b> The pH of the buffer solution prepared by mixing 100 mL of 0.1 M CH<sub>3</sub>COOH and 100 mL of 0.1 M CH<sub>3</sub>COONa is (pK<sub>a</sub> of acetic acid = 4.74):',
    options: ['4.74', '5.74', '4', '7'],
    answer: 0,
    explain: 'By Henderson: pH = pK<sub>a</sub> + log([salt]/[acid]) = 4.74 + log(1) = 4.74. Equal moles → ratio = 1.'
  },
  {
    q: '<b>[NEET 2020]</b> The pH of 10<sup>–8</sup> M HCl solution is:',
    options: ['8', 'Between 6 and 7', '7', '1'],
    answer: 1,
    explain: 'Very dilute strong acid: must add H<sup>+</sup> from water. Total [H<sup>+</sup>] ≈ 1.05 × 10<sup>–7</sup> → pH ≈ 6.98.'
  },
  {
    q: '<b>[NEET 2019]</b> The H<sup>+</sup> ion concentration in a solution of pH = 5.4 will be:',
    options: ['3.98 × 10<sup>–6</sup> M', '3.88 × 10<sup>–6</sup> M', '3.98 × 10<sup>6</sup> M', '3.68 × 10<sup>–6</sup> M'],
    answer: 0,
    explain: '[H<sup>+</sup>] = 10<sup>–5.4</sup> = 10<sup>–6</sup> × 10<sup>0.6</sup> ≈ 3.98 × 10<sup>–6</sup> M.'
  },
  {
    q: '<b>[NEET 2017]</b> Which of the following is most basic?',
    options: ['pH = 1', 'pH = 7', 'pH = 10', 'pH = 14'],
    answer: 3,
    explain: 'Higher pH → more basic. pH 14 ⇒ [H<sup>+</sup>] = 10<sup>–14</sup> M, strongest base on this scale.'
  },
  {
    q: '<b>[AIPMT 2015]</b> pH of 0.005 M Ca(OH)<sub>2</sub> solution is:',
    options: ['2', '12', '9.7', '12.3'],
    answer: 1,
    explain: 'Ca(OH)<sub>2</sub> gives 2 OH<sup>–</sup>: [OH<sup>–</sup>] = 2 × 0.005 = 0.01 M → pOH = 2 → pH = 12.'
  },
  {
    q: '<b>[NEET 2014]</b> The pH of a 0.1 M aqueous solution of a weak acid (HA) is 3. The value of ionisation constant of the acid would be:',
    options: ['10<sup>–5</sup>', '10<sup>–3</sup>', '10<sup>–4</sup>', '10<sup>–6</sup>'],
    answer: 0,
    explain: '[H<sup>+</sup>] = 10<sup>–3</sup> → α = 10<sup>–3</sup>/0.1 = 0.01. K<sub>a</sub> = Cα² = 0.1 × (10<sup>–2</sup>)² = 10<sup>–5</sup>.'
  },
]

export const numericals = [
  {
    q: 'Calculate the pH of 0.005 M H<sub>2</sub>SO<sub>4</sub>.',
    tag: 'Strong diprotic acid',
    steps: [
      'H<sub>2</sub>SO<sub>4</sub> ionises completely in both steps (effectively): each mole gives 2 H<sup>+</sup>.',
      '[H<sup>+</sup>] = 2 × 0.005 = 0.01 M',
      'pH = –log(0.01) = 2',
    ],
    answer: 'pH = 2'
  },
  {
    q: 'The pH of a solution is 4.5. Calculate [H<sup>+</sup>] and [OH<sup>–</sup>].',
    tag: 'pH → concentrations',
    steps: [
      '[H<sup>+</sup>] = 10<sup>–pH</sup> = 10<sup>–4.5</sup> = 3.16 × 10<sup>–5</sup> M',
      'pOH = 14 – 4.5 = 9.5',
      '[OH<sup>–</sup>] = 10<sup>–9.5</sup> = 3.16 × 10<sup>–10</sup> M',
    ],
    answer: '[H<sup>+</sup>] = 3.16 × 10<sup>–5</sup> M ; [OH<sup>–</sup>] = 3.16 × 10<sup>–10</sup> M'
  },
  {
    q: 'Calculate pH when 500 mL of 0.2 M HCl is mixed with 500 mL of 0.3 M NaOH.',
    tag: 'Mixing SA + SB',
    steps: [
      'mol HCl = 0.5 × 0.2 = 0.1 mol ; mol NaOH = 0.5 × 0.3 = 0.15 mol.',
      'Excess NaOH = 0.15 – 0.1 = 0.05 mol.',
      'Total volume = 1.0 L → [OH<sup>–</sup>] = 0.05 M.',
      'pOH = –log(0.05) = 1.3 → pH = 14 – 1.3 = 12.7',
    ],
    answer: 'pH = 12.7'
  },
  {
    q: 'Calculate pH of a 0.01 M solution of acetic acid (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>).',
    tag: 'Weak acid pH',
    steps: [
      '[H<sup>+</sup>] = √(K<sub>a</sub>·C) = √(1.8 × 10<sup>–5</sup> × 0.01)',
      '[H<sup>+</sup>] = √(1.8 × 10<sup>–7</sup>) = 4.24 × 10<sup>–4</sup> M',
      'pH = –log(4.24 × 10<sup>–4</sup>) = 4 – log(4.24)',
      'pH ≈ 3.37',
    ],
    answer: 'pH ≈ 3.37'
  },
  {
    q: 'Calculate the pH of a 10<sup>–8</sup> M HCl solution.',
    tag: 'Very dilute SA (classic trap)',
    steps: [
      'From HCl: [H<sup>+</sup>] = 10<sup>–8</sup> M.',
      'But water contributes too: take total [H<sup>+</sup>] = x.',
      'Charge balance: [H<sup>+</sup>] = [OH<sup>–</sup>] + [Cl<sup>–</sup>] = K<sub>w</sub>/x + 10<sup>–8</sup>.',
      'x² – 10<sup>–8</sup>x – 10<sup>–14</sup> = 0',
      'x ≈ 1.05 × 10<sup>–7</sup> M',
      'pH = –log(1.05 × 10<sup>–7</sup>) ≈ 6.98',
    ],
    answer: 'pH ≈ 6.98 (slightly acidic, NOT 8)'
  },
  {
    q: 'Calculate the pH of a solution containing 2 g of NaOH dissolved in water to make 1 L (M<sub>NaOH</sub> = 40).',
    tag: 'From mass',
    steps: [
      'moles NaOH = 2/40 = 0.05 mol.',
      '[NaOH] = 0.05 M → [OH<sup>–</sup>] = 0.05 M',
      'pOH = –log(0.05) = 1.3',
      'pH = 14 – 1.3 = 12.7',
    ],
    answer: 'pH = 12.7'
  },
  {
    q: 'pH of a solution is 3. On dilution 100 times, find the new pH (assume strong acid).',
    tag: 'Dilution effect',
    steps: [
      'Initial [H<sup>+</sup>] = 10<sup>–3</sup> M.',
      'After 100× dilution: [H<sup>+</sup>] = 10<sup>–5</sup> M.',
      'pH = 5. (Limit on dilution: pH cannot exceed 7 for an acid — water H<sup>+</sup> steps in.)',
    ],
    answer: 'New pH = 5'
  },
]

// pH Guess Game — describe a solution, guess the pH to the nearest integer.
export const gameCards = [
  { formula: '0.1 M HCl',                    hint: 'strong acid',              answer: 1 },
  { formula: '0.01 M HCl',                   hint: 'strong acid, dilute',      answer: 2 },
  { formula: '0.1 M NaOH',                   hint: 'strong base',              answer: 13 },
  { formula: '0.01 M NaOH',                  hint: 'strong base, dilute',      answer: 12 },
  { formula: '0.1 M KOH',                    hint: 'strong base',              answer: 13 },
  { formula: '0.005 M Ca(OH)₂',              hint: 'strong base, 2 OH⁻',       answer: 12 },
  { formula: '0.005 M H₂SO₄',                hint: 'strong diprotic acid',     answer: 2 },
  { formula: '0.1 M CH₃COOH (Ka = 1.8e-5)',  hint: 'weak acid',                answer: 3 },
  { formula: 'Pure H₂O at 25 °C',            hint: 'neutral',                  answer: 7 },
  { formula: '10⁻⁸ M HCl',                   hint: 'very dilute SA (trap)',    answer: 7 },
  { formula: 'Gastric juice',                hint: 'stomach acid',             answer: 2 },
  { formula: 'Pure lemon juice',             hint: 'citric acid',              answer: 2 },
  { formula: 'Blood plasma',                 hint: 'buffered body fluid',      answer: 7 },
  { formula: 'Household ammonia',            hint: 'weak base cleaner',        answer: 11 },
  { formula: 'Baking soda (NaHCO₃) in water',hint: 'mildly basic salt',        answer: 9 },
]
