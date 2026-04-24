// Common Ion Effect — content bank for Sai

export const mcqs = [
  {
    q: 'The common ion effect states that:',
    options: [
      'Addition of a common ion increases ionization of a weak electrolyte',
      'Addition of a common ion suppresses ionization of a weak electrolyte',
      'Two ions always react to form a precipitate',
      'All electrolytes ionize completely in water'
    ],
    answer: 1,
    explain: 'By Le Chatelier, adding a common ion shifts the ionization equilibrium backward → α decreases.'
  },
  {
    q: 'Adding NH<sub>4</sub>Cl to NH<sub>4</sub>OH solution:',
    options: ['Increases [OH<sup>–</sup>]', 'Decreases [OH<sup>–</sup>]', 'Has no effect', 'Precipitates NH<sub>3</sub>'],
    answer: 1,
    explain: 'NH<sub>4</sub><sup>+</sup> is the common ion → shifts NH<sub>4</sub>OH ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>–</sup> to the left → [OH<sup>–</sup>] drops.'
  },
  {
    q: 'In the qualitative analysis of Group-II cations, H<sub>2</sub>S is passed in the presence of dilute HCl. The role of HCl is to:',
    options: [
      'Oxidize sulphides',
      'Reduce Ksp',
      'Suppress ionization of H<sub>2</sub>S via common H<sup>+</sup> ion',
      'Dissolve group II sulphides'
    ],
    answer: 2,
    explain: 'HCl provides H<sup>+</sup> (common ion) → suppresses H<sub>2</sub>S ionization → low [S<sup>2–</sup>] → only most insoluble sulphides (Group II) precipitate.'
  },
  {
    q: 'Addition of CH<sub>3</sub>COONa to CH<sub>3</sub>COOH:',
    options: ['Increases pH', 'Decreases pH', 'No change in pH', 'Makes solution strongly basic'],
    answer: 0,
    explain: 'Acetate is the common ion → suppresses acetic acid ionization → [H<sup>+</sup>] drops → pH increases.'
  },
  {
    q: 'Solubility of AgCl in 0.1 M NaCl (compared to in pure water):',
    options: ['Increases', 'Decreases', 'Unchanged', 'First increases then decreases'],
    answer: 1,
    explain: 'Cl<sup>–</sup> is the common ion → shifts AgCl(s) ⇌ Ag<sup>+</sup> + Cl<sup>–</sup> to the left → solubility ↓.'
  },
  {
    q: 'Group III hydroxides (Al(OH)<sub>3</sub>, Fe(OH)<sub>3</sub>) are precipitated using NH<sub>4</sub>OH in the presence of NH<sub>4</sub>Cl. NH<sub>4</sub>Cl is used to:',
    options: [
      'Increase [OH<sup>–</sup>] sharply',
      'Suppress ionization of NH<sub>4</sub>OH so that Group IV hydroxides don\'t precipitate',
      'Dissolve Group III hydroxides',
      'Neutralize excess acid'
    ],
    answer: 1,
    explain: 'Common NH<sub>4</sub><sup>+</sup> ion suppresses NH<sub>4</sub>OH ionization → low [OH<sup>–</sup>] → only very low K<sub>sp</sub> hydroxides (Group III) precipitate.'
  },
  {
    q: 'Which pair will exhibit common ion effect when mixed?',
    options: ['NaCl + KNO<sub>3</sub>', 'CH<sub>3</sub>COOH + HCl', 'NH<sub>4</sub>OH + NH<sub>4</sub>Cl', 'NaOH + KOH'],
    answer: 2,
    explain: 'NH<sub>4</sub><sup>+</sup> is the common ion between a weak base and its salt — classic example.'
  },
  {
    q: 'The solubility of PbCl<sub>2</sub> (K<sub>sp</sub> = 1.6 × 10<sup>–5</sup>) in water is s mol/L. In 0.1 M NaCl, solubility becomes:',
    options: ['s', '> s', '< s', '0'],
    answer: 2,
    explain: 'Cl<sup>–</sup> common ion reduces PbCl<sub>2</sub> solubility below its value in water.'
  },
  {
    q: 'On adding NaCl to a saturated solution of AgCl:',
    options: ['AgCl dissolves further', 'AgCl precipitates out', 'No change', 'NaCl reacts with AgCl'],
    answer: 1,
    explain: 'Extra Cl<sup>–</sup> pushes [Ag<sup>+</sup>][Cl<sup>–</sup>] above K<sub>sp</sub> → AgCl precipitates.'
  },
  {
    q: 'Common ion effect is an application of:',
    options: ['Hess\'s law', 'Ostwald\'s dilution law', 'Le Chatelier\'s principle', 'Henry\'s law'],
    answer: 2,
    explain: 'Addition of common ion disturbs the equilibrium → system shifts to counteract the change (Le Chatelier).'
  },
  {
    q: 'Addition of HCl to a saturated solution of benzoic acid (C<sub>6</sub>H<sub>5</sub>COOH) would:',
    options: ['Increase solubility', 'Decrease solubility', 'Leave solubility unchanged', 'Convert it to benzaldehyde'],
    answer: 1,
    explain: 'H<sup>+</sup> is the common ion → suppresses benzoic acid ionization → more molecular form exists → solubility actually decreases (since dissolved form needs ionization).'
  },
  {
    q: 'Why is NH<sub>4</sub>Cl added before passing NH<sub>3</sub> in Group III qualitative analysis but NOT before passing H<sub>2</sub>S in Group II?',
    options: [
      'To prevent precipitation of Group IV cations as hydroxides',
      'To increase solubility of cations',
      'To acidify the solution',
      'To form complex ions'
    ],
    answer: 0,
    explain: 'NH<sub>4</sub>Cl suppresses [OH<sup>–</sup>] so that only low K<sub>sp</sub> Group-III hydroxides precipitate, leaving Mg(OH)<sub>2</sub> etc in solution for Group IV/V.'
  },
  {
    q: 'If α is degree of dissociation of a weak acid HA, adding NaA to the solution will:',
    options: ['Increase α', 'Decrease α', 'Not change α', 'Increase then decrease α'],
    answer: 1,
    explain: 'Common A<sup>–</sup> ion shifts HA ⇌ H<sup>+</sup> + A<sup>–</sup> left → α decreases.'
  },
  {
    q: 'Ksp of BaSO<sub>4</sub> = 10<sup>–10</sup>. Its solubility in 0.01 M Na<sub>2</sub>SO<sub>4</sub> is:',
    options: ['10<sup>–5</sup> M', '10<sup>–8</sup> M', '10<sup>–10</sup> M', '10<sup>–12</sup> M'],
    answer: 1,
    explain: '[SO<sub>4</sub><sup>2–</sup>] ≈ 0.01 M (from salt). s = K<sub>sp</sub>/[SO<sub>4</sub><sup>2–</sup>] = 10<sup>–10</sup>/10<sup>–2</sup> = 10<sup>–8</sup> M.'
  },
  {
    q: 'Saturated H<sub>2</sub>S solution has [H<sub>2</sub>S] ≈ 0.1 M. In 0.3 M HCl, [S<sup>2–</sup>] is (K<sub>a1</sub>·K<sub>a2</sub> ≈ 1.2 × 10<sup>–21</sup>):',
    options: ['~10<sup>–21</sup> M', '~1.3 × 10<sup>–21</sup> M', '~10<sup>–18</sup> M', '~10<sup>–14</sup> M'],
    answer: 1,
    explain: '[S<sup>2–</sup>] = K<sub>a1</sub>K<sub>a2</sub>·[H<sub>2</sub>S]/[H<sup>+</sup>]² = 1.2 × 10<sup>–21</sup> × 0.1 / (0.3)² ≈ 1.33 × 10<sup>–21</sup> M.'
  },
]

export const pyqs = [
  {
    q: '<b>[NEET 2022]</b> When NH<sub>4</sub>Cl is added to NH<sub>4</sub>OH solution, the dissociation of ammonium hydroxide is reduced. It is due to:',
    options: ['Common ion effect', 'Hydrolysis', 'Oxidation', 'Reduction'],
    answer: 0,
    explain: 'NH<sub>4</sub><sup>+</sup> from NH<sub>4</sub>Cl is the common ion with NH<sub>4</sub>OH → shifts equilibrium backward (Le Chatelier).'
  },
  {
    q: '<b>[NEET 2021]</b> Dilute HCl is added before passing H<sub>2</sub>S in Group II cation analysis to:',
    options: [
      'Increase ionization of H<sub>2</sub>S',
      'Suppress ionization of H<sub>2</sub>S and lower [S<sup>2–</sup>]',
      'Convert all cations to chlorides',
      'Dissolve the precipitate'
    ],
    answer: 1,
    explain: 'Common H<sup>+</sup> suppresses H<sub>2</sub>S ionization → low [S<sup>2–</sup>] → only Group II (lowest K<sub>sp</sub>) sulphides precipitate.'
  },
  {
    q: '<b>[NEET 2019]</b> The solubility of AgCl (K<sub>sp</sub> = 1.6 × 10<sup>–10</sup>) in 0.1 M NaCl is:',
    options: ['1.6 × 10<sup>–9</sup> M', '1.6 × 10<sup>–10</sup> M', '1.26 × 10<sup>–5</sup> M', '1.6 × 10<sup>–11</sup> M'],
    answer: 0,
    explain: 's = K<sub>sp</sub>/[Cl<sup>–</sup>] = 1.6 × 10<sup>–10</sup>/0.1 = 1.6 × 10<sup>–9</sup> M. (Common ion reduces s.)'
  },
  {
    q: '<b>[AIPMT 2015]</b> The ionization of an organic acid (pK<sub>a</sub> = 4.74) in presence of 0.01 M of its sodium salt and 0.01 M acid gives pH:',
    options: ['4.74', '5', '3.74', '7'],
    answer: 0,
    explain: 'Common ion effect → buffer. pH = pK<sub>a</sub> + log(1) = 4.74. Classic use of common-ion-created buffer.'
  },
  {
    q: '<b>[NEET 2018]</b> The solubility of a sparingly soluble salt is suppressed by:',
    options: ['Dilution with water', 'Increasing temperature', 'Addition of a common ion', 'Addition of a non-common ion'],
    answer: 2,
    explain: 'Common ion effect — shifts dissolution equilibrium backward → lower solubility.'
  },
  {
    q: '<b>[NEET 2016]</b> The solubility product of Mg(OH)<sub>2</sub> is 1 × 10<sup>–11</sup>. 0.01 M Mg(OH)<sub>2</sub> will precipitate when pH is:',
    options: ['8', '9', '10', '12'],
    answer: 1,
    explain: '[Mg<sup>2+</sup>][OH<sup>–</sup>]² = K<sub>sp</sub>. [OH<sup>–</sup>]² = 10<sup>–11</sup>/0.01 = 10<sup>–9</sup> → [OH<sup>–</sup>] = 10<sup>–4.5</sup> → pOH = 4.5 → pH ≈ 9.5. Precipitation starts just above pH 9.'
  },
  {
    q: '<b>[NEET 2014]</b> pH of 0.1 M ammonia in 0.1 M NH<sub>4</sub>Cl (K<sub>b</sub> = 1.8 × 10<sup>–5</sup>) is:',
    options: ['9.26', '4.74', '5.26', '11'],
    answer: 0,
    explain: 'Basic buffer. pOH = pK<sub>b</sub> + log(salt/base) = 4.74 + log(1) = 4.74 → pH = 9.26.'
  },
  {
    q: '<b>[AIPMT 2013]</b> Solubility of BaSO<sub>4</sub> in pure water is 2.42 × 10<sup>–3</sup> g/L (M = 233). Its K<sub>sp</sub> is:',
    options: ['1.08 × 10<sup>–10</sup>', '1.08 × 10<sup>–14</sup>', '1.04 × 10<sup>–10</sup>', '1.02 × 10<sup>–7</sup>'],
    answer: 0,
    explain: 'Molar s = 2.42 × 10<sup>–3</sup>/233 ≈ 1.04 × 10<sup>–5</sup>. K<sub>sp</sub> = s² = (1.04 × 10<sup>–5</sup>)² ≈ 1.08 × 10<sup>–10</sup>.'
  },
]

export const numericals = [
  {
    q: 'Find the degree of dissociation of 0.1 M acetic acid (K<sub>a</sub> = 1.8 × 10<sup>–5</sup>) (a) in pure water and (b) in 0.1 M CH<sub>3</sub>COONa.',
    tag: 'α with / without common ion',
    steps: [
      '(a) In pure water: α = √(K<sub>a</sub>/C) = √(1.8 × 10<sup>–5</sup>/0.1) = √(1.8 × 10<sup>–4</sup>) ≈ 0.0134 (1.34%).',
      '(b) With salt: [A<sup>–</sup>] ≈ 0.1 M (from salt). K<sub>a</sub> = [H<sup>+</sup>][A<sup>–</sup>]/[HA] ⇒ [H<sup>+</sup>] = K<sub>a</sub>·[HA]/[A<sup>–</sup>] = 1.8 × 10<sup>–5</sup>.',
      'α = [H<sup>+</sup>]/C = 1.8 × 10<sup>–5</sup>/0.1 = 1.8 × 10<sup>–4</sup> (0.018%).',
      'Conclusion: adding salt reduces α ~75×.',
    ],
    answer: 'α falls from 1.34% → 0.018%'
  },
  {
    q: 'Calculate solubility of AgCl (K<sub>sp</sub> = 1.8 × 10<sup>–10</sup>) (a) in water, (b) in 0.01 M NaCl.',
    tag: 'Solubility suppression',
    steps: [
      '(a) s = √K<sub>sp</sub> = √(1.8 × 10<sup>–10</sup>) ≈ 1.34 × 10<sup>–5</sup> M.',
      '(b) [Cl<sup>–</sup>] ≈ 0.01 M; s × 0.01 = K<sub>sp</sub>.',
      's = 1.8 × 10<sup>–10</sup>/0.01 = 1.8 × 10<sup>–8</sup> M',
      'Drops ~745× due to common Cl<sup>–</sup>.',
    ],
    answer: 's: 1.34 × 10<sup>–5</sup> M → 1.8 × 10<sup>–8</sup> M'
  },
  {
    q: 'Will PbCl<sub>2</sub> precipitate if 100 mL of 0.01 M Pb(NO<sub>3</sub>)<sub>2</sub> is mixed with 100 mL of 0.1 M NaCl? (K<sub>sp</sub>(PbCl<sub>2</sub>) = 1.6 × 10<sup>–5</sup>)',
    tag: 'Q vs Ksp test',
    steps: [
      'After mixing (double dilution): [Pb<sup>2+</sup>] = 0.005 M, [Cl<sup>–</sup>] = 0.05 M.',
      'Q = [Pb<sup>2+</sup>][Cl<sup>–</sup>]² = 0.005 × (0.05)²',
      'Q = 0.005 × 2.5 × 10<sup>–3</sup> = 1.25 × 10<sup>–5</sup>',
      'Compare: Q (1.25 × 10<sup>–5</sup>) < K<sub>sp</sub> (1.6 × 10<sup>–5</sup>).',
    ],
    answer: 'No precipitation (Q < K<sub>sp</sub>)'
  },
  {
    q: 'What [NH<sub>4</sub>Cl] must be added to 0.1 M NH<sub>4</sub>OH (K<sub>b</sub> = 1.8 × 10<sup>–5</sup>) to keep [OH<sup>–</sup>] = 10<sup>–5</sup> M?',
    tag: 'Controlling [OH⁻]',
    steps: [
      'K<sub>b</sub> = [NH<sub>4</sub><sup>+</sup>][OH<sup>–</sup>]/[NH<sub>4</sub>OH]',
      '1.8 × 10<sup>–5</sup> = [NH<sub>4</sub><sup>+</sup>] × 10<sup>–5</sup>/0.1',
      '[NH<sub>4</sub><sup>+</sup>] = 1.8 × 10<sup>–5</sup> × 0.1/10<sup>–5</sup> = 0.18 M',
    ],
    answer: '[NH<sub>4</sub>Cl] = 0.18 M'
  },
  {
    q: 'Calculate [S<sup>2–</sup>] in a saturated H<sub>2</sub>S solution (0.1 M) containing 0.3 M HCl. (K<sub>a1</sub>K<sub>a2</sub> = 1.2 × 10<sup>–21</sup>)',
    tag: 'Controlling [S²⁻] in Group II',
    steps: [
      'For H<sub>2</sub>S ⇌ 2H<sup>+</sup> + S<sup>2–</sup>: [H<sup>+</sup>]²[S<sup>2–</sup>]/[H<sub>2</sub>S] = K<sub>a1</sub>K<sub>a2</sub>',
      '[H<sup>+</sup>] ≈ 0.3 M (from HCl).',
      '[S<sup>2–</sup>] = K<sub>a1</sub>K<sub>a2</sub>·[H<sub>2</sub>S]/[H<sup>+</sup>]²',
      '[S<sup>2–</sup>] = 1.2 × 10<sup>–21</sup> × 0.1/(0.3)² = 1.2 × 10<sup>–22</sup>/0.09',
      '[S<sup>2–</sup>] ≈ 1.33 × 10<sup>–21</sup> M',
    ],
    answer: '[S<sup>2–</sup>] ≈ 1.33 × 10<sup>–21</sup> M (low enough to precipitate only Group II)'
  },
]
