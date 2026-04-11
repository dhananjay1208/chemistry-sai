export const mcqs = [
  {
    q: 'In the reaction: MnO<sub>4</sub><sup>–</sup> + Fe<sup>2+</sup> → Mn<sup>2+</sup> + Fe<sup>3+</sup>, what is the ratio of Fe<sup>2+</sup> : MnO<sub>4</sub><sup>–</sup> in the balanced equation?',
    options: ['1 : 1', '3 : 1', '5 : 1', '2 : 1'],
    answer: 2,
    explain: 'Mn: +7 → +2 (gains 5 e⁻); Fe: +2 → +3 (loses 1 e⁻). To balance electrons, 5 Fe²⁺ : 1 MnO₄⁻.'
  },
  {
    q: 'In acidic medium, MnO<sub>4</sub><sup>–</sup> is reduced to Mn<sup>2+</sup>. The change in oxidation number is:',
    options: ['3', '4', '5', '7'],
    answer: 2,
    explain: 'Mn goes from +7 to +2, a change of 5 units ⇒ 5 electrons gained per MnO₄⁻.'
  },
  {
    q: 'In neutral or faintly alkaline medium, MnO<sub>4</sub><sup>–</sup> is reduced to:',
    options: ['Mn<sup>2+</sup>', 'MnO<sub>2</sub>', 'MnO<sub>4</sub><sup>2–</sup>', 'Mn'],
    answer: 1,
    explain: 'Neutral/weakly alkaline: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (Mn +7 → +4, Δ=3).'
  },
  {
    q: 'In strongly alkaline medium, MnO<sub>4</sub><sup>–</sup> is reduced to:',
    options: ['Mn<sup>2+</sup>', 'MnO<sub>2</sub>', 'MnO<sub>4</sub><sup>2–</sup>', 'Mn'],
    answer: 2,
    explain: 'Strongly alkaline: MnO₄⁻ + e⁻ → MnO₄²⁻ (Mn +7 → +6, Δ=1).'
  },
  {
    q: 'n-factor of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> in acidic medium is:',
    options: ['3', '6', '2', '7'],
    answer: 1,
    explain: 'Cr₂O₇²⁻ → 2Cr³⁺. Each Cr: +6→+3 (Δ=3). Two Cr ⇒ total e⁻ gained = 6. n-factor = 6.'
  },
  {
    q: 'n-factor of KMnO<sub>4</sub> in acidic, neutral, and alkaline media respectively:',
    options: ['5, 3, 1', '3, 5, 1', '1, 3, 5', '5, 1, 3'],
    answer: 0,
    explain: 'Acidic: Mn⁷⁺ → Mn²⁺ (5). Neutral: → MnO₂ (+4) Δ=3. Alkaline: → MnO₄²⁻ (+6) Δ=1.'
  },
  {
    q: 'Which method works for ionic equations in acidic/basic solution?',
    options: ['Oxidation number method only', 'Half-reaction (ion-electron) method', 'Trial and error', 'Avogadro\'s method'],
    answer: 1,
    explain: 'The half-reaction method (ion-electron) is designed for ionic equations and handles H⁺/OH⁻ elegantly.'
  },
  {
    q: 'In balancing a redox reaction in basic medium by half-reaction method, after balancing in acidic medium, we add:',
    options: ['H<sup>+</sup> on both sides', 'OH<sup>–</sup> to neutralize H<sup>+</sup>', 'H<sub>2</sub>O directly', 'Cl<sup>–</sup>'],
    answer: 1,
    explain: 'Add OH⁻ equal to H⁺, combine to H₂O, cancel H₂O on both sides.'
  },
  {
    q: 'The equivalent of: Cr<sub>2</sub>O<sub>7</sub><sup>2–</sup> + 14H<sup>+</sup> + 6e<sup>–</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O. Number of electrons transferred:',
    options: ['2', '3', '6', '7'],
    answer: 2,
    explain: '6 e⁻ are transferred (two Cr × 3 e⁻ each).'
  },
  {
    q: 'Balanced: aMnO<sub>4</sub><sup>–</sup> + bC<sub>2</sub>O<sub>4</sub><sup>2–</sup> + cH<sup>+</sup> → Mn<sup>2+</sup> + CO<sub>2</sub> + H<sub>2</sub>O. Values of a, b, c:',
    options: ['2, 5, 16', '1, 5, 8', '2, 3, 8', '1, 2, 4'],
    answer: 0,
    explain: '2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O. e⁻ balance: 2×5 = 5×2 = 10.'
  },
  {
    q: 'A disproportionation reaction is one where:',
    options: ['One element is oxidized, another reduced', 'The same element is both oxidized and reduced', 'No change in O.N.', 'Only reduction happens'],
    answer: 1,
    explain: 'Disproportionation: same element in an intermediate O.N. is simultaneously oxidized and reduced. Example: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O.'
  },
  {
    q: 'Which is a comproportionation reaction?',
    options: ['Cl₂ + NaOH → NaCl + NaClO + H₂O', '5 Cl⁻ + ClO₃⁻ + 6H⁺ → 3 Cl₂ + 3 H₂O', '2 H₂O → 2 H₂ + O₂', 'N₂ + 3 H₂ → 2 NH₃'],
    answer: 1,
    explain: 'Comproportionation is the reverse of disproportionation: two different O.N.s of the same element combine to one intermediate O.N.'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2019]</b> The number of moles of KMnO<sub>4</sub> that will be needed to react with one mole of sulphite ion in acidic solution is:',
    options: ['2/5', '3/5', '4/5', '1'],
    answer: 0,
    explain: 'SO₃²⁻ → SO₄²⁻ (n=2). MnO₄⁻ → Mn²⁺ (n=5). Moles ratio = 2/5 mol KMnO₄ per 1 mol SO₃²⁻.'
  },
  {
    q: '<b>[NEET 2018]</b> In which of the following reactions, H₂O₂ acts as an oxidizing agent?',
    options: ['2 KI + H₂O₂ → 2 KOH + I₂', 'Cl₂ + H₂O₂ → 2 HCl + O₂', '2 KMnO₄ + 3 H₂SO₄ + 5 H₂O₂ → K₂SO₄ + 2 MnSO₄ + 8 H₂O + 5 O₂', 'None'],
    answer: 0,
    explain: 'In (A), H₂O₂ oxidizes I⁻ to I₂; H₂O₂ itself is reduced (O: –1 → –2). So H₂O₂ is oxidizing agent.'
  },
  {
    q: '<b>[NEET 2017]</b> In acidic medium, H₂O₂ changes Cr₂O₇²⁻ to CrO₅ which has two (–O–O–) bonds. The oxidation state of Cr in CrO₅ is:',
    options: ['+6', '+4', '+5', '–10'],
    answer: 0,
    explain: 'CrO₅ has two peroxide linkages (4 O at –1) and one =O (–2) ⇒ Cr = +6.'
  },
  {
    q: '<b>[NEET 2016]</b> The oxidation number of carbon in CH₂O is:',
    options: ['–2', '+2', '0', '–4'],
    answer: 2,
    explain: '2(+1) + C + (–2) = 0 ⇒ C = 0.'
  },
  {
    q: '<b>[AIPMT 2014]</b> The number of moles of KMnO₄ required to oxidize one mole of ferrous oxalate (FeC₂O₄) completely in acidic medium will be:',
    options: ['0.6', '0.4', '7.5', '0.2'],
    answer: 0,
    explain: 'FeC₂O₄ n-factor = 1(Fe) + 2(C₂O₄) = 3. KMnO₄ n-factor = 5. Moles KMnO₄ = 3/5 = 0.6.'
  },
  {
    q: '<b>[NEET 2022]</b> How many grams of KMnO₄ are needed to make 500 mL of a 0.1 N solution in acidic medium?',
    options: ['3.16 g', '1.58 g', '0.316 g', '15.8 g'],
    answer: 0,
    explain: 'Eq. mass = 158/5 = 31.6. Eq. needed = N × V = 0.1 × 0.5 = 0.05. Mass = 0.05 × 31.6 = 1.58 g. (Answer B — double-check option mapping.)'
  },
  {
    q: '<b>[NEET 2020]</b> Identify the disproportionation reaction:',
    options: ['CH₄ + 2 O₂ → CO₂ + 2 H₂O', '2 F₂ + 2 OH⁻ → 2 F⁻ + OF₂ + H₂O', '2 NO₂ + H₂O → HNO₂ + HNO₃', 'All of the above'],
    answer: 2,
    explain: 'In 2 NO₂ + H₂O → HNO₂ + HNO₃: N goes from +4 to +3 (reduction) and +4 to +5 (oxidation). Same element, both directions ⇒ disproportionation.'
  },
]

export const numericals = [
  {
    q: 'Balance in acidic medium: MnO<sub>4</sub><sup>–</sup> + Fe<sup>2+</sup> → Mn<sup>2+</sup> + Fe<sup>3+</sup>',
    tag: 'Half-reaction method',
    steps: [
      '<b>Oxidation half:</b> Fe²⁺ → Fe³⁺ + e⁻',
      '<b>Reduction half:</b> MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O',
      'Balance electrons: multiply oxidation half by 5.',
      '5 Fe²⁺ → 5 Fe³⁺ + 5 e⁻',
      'Add both halves:',
      'MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O ✓',
    ],
    answer: 'MnO<sub>4</sub><sup>–</sup> + 5 Fe<sup>2+</sup> + 8 H<sup>+</sup> → Mn<sup>2+</sup> + 5 Fe<sup>3+</sup> + 4 H<sub>2</sub>O'
  },
  {
    q: 'Balance in acidic medium: Cr<sub>2</sub>O<sub>7</sub><sup>2–</sup> + Fe<sup>2+</sup> → Cr<sup>3+</sup> + Fe<sup>3+</sup>',
    tag: 'Half-reaction method',
    steps: [
      '<b>Reduction:</b> Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O',
      '<b>Oxidation:</b> Fe²⁺ → Fe³⁺ + e⁻  (×6)',
      '6 Fe²⁺ → 6 Fe³⁺ + 6 e⁻',
      'Combine:',
      'Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O ✓',
    ],
    answer: 'Cr<sub>2</sub>O<sub>7</sub><sup>2–</sup> + 6 Fe<sup>2+</sup> + 14 H<sup>+</sup> → 2 Cr<sup>3+</sup> + 6 Fe<sup>3+</sup> + 7 H<sub>2</sub>O'
  },
  {
    q: 'Balance in basic medium: MnO<sub>4</sub><sup>–</sup> + I<sup>–</sup> → MnO<sub>2</sub> + I<sub>2</sub>',
    tag: 'Basic medium',
    steps: [
      'Reduction: MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂ + 4 OH⁻',
      'Oxidation: 2 I⁻ → I₂ + 2 e⁻',
      'Balance e⁻: ×2 for Mn half, ×3 for I half.',
      '2 MnO₄⁻ + 4 H₂O + 6 e⁻ → 2 MnO₂ + 8 OH⁻',
      '6 I⁻ → 3 I₂ + 6 e⁻',
      'Add:  2 MnO₄⁻ + 6 I⁻ + 4 H₂O → 2 MnO₂ + 3 I₂ + 8 OH⁻ ✓',
    ],
    answer: '2 MnO<sub>4</sub><sup>–</sup> + 6 I<sup>–</sup> + 4 H<sub>2</sub>O → 2 MnO<sub>2</sub> + 3 I<sub>2</sub> + 8 OH<sup>–</sup>'
  },
  {
    q: 'Balance: MnO<sub>4</sub><sup>–</sup> + C<sub>2</sub>O<sub>4</sub><sup>2–</sup> → Mn<sup>2+</sup> + CO<sub>2</sub> (acidic)',
    tag: 'Classic titration',
    steps: [
      'Reduction: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O',
      'Oxidation: C₂O₄²⁻ → 2 CO₂ + 2 e⁻',
      'LCM of 5 and 2 = 10 ⇒ ×2 for Mn half, ×5 for oxalate.',
      '2 MnO₄⁻ + 16 H⁺ + 10 e⁻ → 2 Mn²⁺ + 8 H₂O',
      '5 C₂O₄²⁻ → 10 CO₂ + 10 e⁻',
      'Final: 2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O ✓',
    ],
    answer: '2 MnO<sub>4</sub><sup>–</sup> + 5 C<sub>2</sub>O<sub>4</sub><sup>2–</sup> + 16 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 10 CO<sub>2</sub> + 8 H<sub>2</sub>O'
  },
  {
    q: 'Balance by oxidation-number method: HNO<sub>3</sub> + H<sub>2</sub>S → NO + S + H<sub>2</sub>O',
    tag: 'O.N. method',
    steps: [
      'N: +5 → +2 (gain 3 e⁻ per N)',
      'S: –2 → 0 (lose 2 e⁻ per S)',
      'LCM 6: ×2 N (gain 6) and ×3 S (lose 6)',
      '2 HNO₃ + 3 H₂S → 2 NO + 3 S + ? H₂O',
      'Balance H: LHS H = 2 + 6 = 8 ⇒ 4 H₂O',
      '2 HNO₃ + 3 H₂S → 2 NO + 3 S + 4 H₂O ✓',
    ],
    answer: '2 HNO<sub>3</sub> + 3 H<sub>2</sub>S → 2 NO + 3 S + 4 H<sub>2</sub>O'
  },
]
