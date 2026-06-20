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
  {
    q: '<b>[Paper]</b> Which of the following is <b>neither</b> oxidation nor reduction?',
    options: ['Na → NaOH', 'Cl<sub>2</sub> → Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup>', 'P<sub>2</sub>O<sub>5</sub> → H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>', 'Zn + H<sub>2</sub>SO<sub>4</sub> → ZnSO<sub>4</sub> + H<sub>2</sub>'],
    answer: 2,
    explain: 'In P₂O₅ → H₄P₂O₇, P stays +5 throughout (just hydration). The others all involve a change in oxidation number.'
  },
  {
    q: '<b>[Paper]</b> Which of these represents a redox reaction?',
    options: ['NaOH + HCl → NaCl + H<sub>2</sub>O', 'BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + 2 HCl', 'CuSO<sub>4</sub> + 2 H<sub>2</sub>O → Cu(OH)<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub>', 'Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>'],
    answer: 3,
    explain: 'Only Zn + 2 HCl changes oxidation numbers: Zn 0 → +2 (oxidised) and H +1 → 0 (reduced). The others are acid–base, precipitation or hydrolysis.'
  },
  {
    q: '<b>[Paper]</b> Which reaction depicts the <b>oxidising</b> property of SO<sub>2</sub>?',
    options: ['SO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>3</sub>', '2 H<sub>2</sub>S + SO<sub>2</sub> → 3 S + 2 H<sub>2</sub>O', 'Cl<sub>2</sub> + SO<sub>2</sub> → SO<sub>2</sub>Cl<sub>2</sub>', '2 MnO<sub>4</sub><sup>−</sup> + 5 SO<sub>2</sub> + 2 H<sub>2</sub>O → 5 SO<sub>4</sub><sup>2−</sup> + 2 Mn<sup>2+</sup> + 4 H<sup>+</sup>'],
    answer: 1,
    explain: 'SO₂ is an oxidiser only when its S (+4) is reduced. In 2 H₂S + SO₂ → 3 S, S goes +4 → 0 (reduced), so SO₂ oxidises H₂S. In the others S is oxidised to +6, so SO₂ is a reducing agent there.'
  },
  {
    q: '<b>[Paper]</b> The oxide which <b>cannot</b> act as a reducing agent is:',
    options: ['SO<sub>2</sub>', 'NO<sub>2</sub>', 'CO<sub>2</sub>', 'ClO<sub>2</sub>'],
    answer: 2,
    explain: 'A reducing agent must be able to lose more electrons. In CO₂ carbon is already at +4, its maximum, so it cannot be oxidised further ⇒ cannot reduce anything. S(+4), N(+4), Cl(+4) can all go higher.'
  },
  {
    q: '<b>[Paper]</b> Which species can act as <b>both</b> an oxidising and a reducing agent?',
    options: ['H<sub>2</sub>', 'I<sub>2</sub>', 'H<sub>2</sub>O<sub>2</sub>', 'All of these'],
    answer: 3,
    explain: 'Each has an intermediate oxidation state, so it can go up or down: H (0→±1), I (0→ −1 or +5), O in H₂O₂ (−1 → 0 or −2). So all three can do both.'
  },
  {
    q: '<b>[Paper]</b> Which of the following is <b>NOT</b> an intramolecular redox reaction?',
    options: ['(NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> → N<sub>2</sub> + Cr<sub>2</sub>O<sub>3</sub> + 4 H<sub>2</sub>O', '2 KClO<sub>3</sub> → 2 KCl + 3 O<sub>2</sub>', '2 Mn<sub>2</sub>O<sub>7</sub> → 4 MnO<sub>2</sub> + 3 O<sub>2</sub>', '2 ClO<sub>2</sub> + 5 H<sub>2</sub>O<sub>2</sub> → 2 Cl<sup>−</sup> + 5 O<sub>2</sub> + 6 H<sub>2</sub>O (in OH<sup>−</sup>)'],
    answer: 3,
    explain: 'Intramolecular redox = oxidation and reduction on different atoms of the SAME compound. The last one has two different reactant compounds (ClO₂ is reduced, H₂O₂ is oxidised) ⇒ it is intermolecular, not intramolecular.'
  },
  {
    q: '<b>[Paper]</b> 10 FeC<sub>2</sub>O<sub>4</sub> + x KMnO<sub>4</sub> + 24 H<sub>2</sub>SO<sub>4</sub> → 5 Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 20 CO<sub>2</sub> + y MnSO<sub>4</sub> + 3 K<sub>2</sub>SO<sub>4</sub> + 24 H<sub>2</sub>O. The values of x and y are:',
    options: ['6, 3', '3, 6', '3, 3', '6, 6'],
    answer: 3,
    explain: 'FeC₂O₄ gives 3 e⁻ each (Fe 1 + 2 C ×1). 10 × 3 = 30 e⁻ lost. KMnO₄ takes 5 e⁻ ⇒ x = 30/5 = 6. Mn is conserved ⇒ y = 6.'
  },
  {
    q: '<b>[Paper]</b> For IO<sub>3</sub><sup>−</sup> + a I<sup>−</sup> + b H<sup>+</sup> → c H<sub>2</sub>O + d I<sub>2</sub>, the values of a, b, c, d are:',
    options: ['5, 6, 3, 3', '5, 3, 6, 3', '3, 5, 3, 6', '6, 5, 5, 3'],
    answer: 0,
    explain: 'IO₃⁻: I +5→0 gains 5 e⁻; I⁻: −1→0 loses 1 e⁻ ⇒ 5 I⁻ per IO₃⁻ (a = 5). Total I = 1 + 5 = 6 → 3 I₂ (d = 3). O: 3 → 3 H₂O (c = 3). H: 6 H⁺ (b = 6).'
  },
  {
    q: '<b>[Paper]</b> For 5 H<sub>2</sub>O<sub>2</sub> + x ClO<sub>2</sub> + 2 OH<sup>−</sup> → x Cl<sup>−</sup> + y O<sub>2</sub> + 6 H<sub>2</sub>O, the reaction is balanced when:',
    options: ['x = 5, y = 2', 'x = 2, y = 5', 'x = 4, y = 10', 'x = 5, y = 5'],
    answer: 1,
    explain: 'ClO₂: Cl +4 → −1 gains 5 e⁻; H₂O₂: gives 2 e⁻ each ⇒ 5 H₂O₂ give 10 e⁻, so x = 10/5 = 2. Balancing O then gives y = 5.'
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
    answer: 1,
    explain: 'Eq. mass = 158/5 = 31.6. Equivalents needed = N × V = 0.1 × 0.5 = 0.05. Mass = 0.05 × 31.6 = 1.58 g.'
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
  {
    q: 'Oxidation-number method: find x and y in 10 FeC<sub>2</sub>O<sub>4</sub> + x KMnO<sub>4</sub> + 24 H<sub>2</sub>SO<sub>4</sub> → 5 Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 20 CO<sub>2</sub> + y MnSO<sub>4</sub> + 3 K<sub>2</sub>SO<sub>4</sub> + 24 H<sub>2</sub>O.',
    tag: 'Paper set · O.N. method',
    steps: [
      'Spot the changes: Fe²⁺ → Fe³⁺ (up 1); each C in C₂O₄²⁻: +3 → +4 (up 1, and there are 2 C); Mn: +7 → +2 (down 5).',
      'n-factor of FeC₂O₄ = 1 (Fe) + 2 (two C) = 3 electrons lost per unit.',
      'Electrons lost by 10 FeC₂O₄ = 10 × 3 = 30.',
      'Each KMnO₄ gains 5 electrons, so x = 30 ÷ 5 = 6.',
      'Manganese is conserved across the equation, so y = x = 6.',
    ],
    answer: 'x = 6, y = 6'
  },
  {
    q: 'Balance in basic medium: Zn + NO<sub>3</sub><sup>−</sup> → Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup>, and give the coefficients of Zn, NO<sub>3</sub><sup>−</sup> and OH<sup>−</sup>.',
    tag: 'Paper set · basic medium',
    steps: [
      'Changes: Zn 0 → +2 (loses 2 e⁻); N +5 → −3 (gains 8 e⁻).',
      'Balance electrons (LCM 8): 4 Zn lose 8 e⁻ for every 1 N that gains 8 e⁻.',
      'Reduction half in base: NO₃⁻ + 7 H₂O + 8 e⁻ → NH₄⁺ + 10 OH⁻.',
      'Oxidation half: 4 Zn → 4 Zn²⁺ + 8 e⁻.',
      'Add: 4 Zn + NO₃⁻ + 7 H₂O → 4 Zn²⁺ + NH₄⁺ + 10 OH⁻.',
      'Check charge: LHS −1; RHS 4(+2) + 1 + 10(−1) = −1 ✔.',
    ],
    answer: 'Zn = 4, NO<sub>3</sub><sup>−</sup> = 1, OH<sup>−</sup> = 10'
  },
  {
    q: 'Balance (O.N. method): IO<sub>3</sub><sup>−</sup> + I<sup>−</sup> + H<sup>+</sup> → I<sub>2</sub> + H<sub>2</sub>O.',
    tag: 'Paper set · comproportionation',
    steps: [
      'IO₃⁻: I goes +5 → 0, gains 5 e⁻. I⁻: I goes −1 → 0, loses 1 e⁻.',
      'Electron balance: 1 IO₃⁻ (5 e⁻ in) needs 5 I⁻ (5 e⁻ out).',
      'Total I atoms = 1 + 5 = 6 → forms 3 I₂.',
      'Oxygen: 3 O from IO₃⁻ → 3 H₂O. Hydrogen: needs 6 H⁺.',
      'Check charge: −1 + 5(−1) + 6(+1) = 0 = neutral products ✔.',
    ],
    answer: 'IO<sub>3</sub><sup>−</sup> + 5 I<sup>−</sup> + 6 H<sup>+</sup> → 3 I<sub>2</sub> + 3 H<sub>2</sub>O'
  },
]
