// Redox Stoichiometry & Mole Concept
// Covers: the "equivalents bridge", mole ratio from n-factors, electron counting,
// % purity from titration, and forming the reaction needed to solve a question.
// Worked solutions for Sai's academy paper (APMA 2025-26-27) are tagged "Paper set".

export const mcqs = [
  {
    q: 'In any redox reaction, at the point of complete reaction:',
    options: [
      'moles of oxidant = moles of reductant',
      'equivalents of oxidant = equivalents of reductant',
      'mass of oxidant = mass of reductant',
      'volume of oxidant = volume of reductant',
    ],
    answer: 1,
    explain: 'Electrons lost = electrons gained, so <b>equivalents of oxidant = equivalents of reductant</b>. Equivalents = moles × n-factor. This single idea solves almost every redox-stoichiometry question.',
  },
  {
    q: 'The number of equivalents in a sample is:',
    options: ['moles × molar mass', 'moles ÷ n-factor', 'moles × n-factor', 'moles × Avogadro number'],
    answer: 2,
    explain: 'Equivalents = moles × n-factor (n-factor = electrons exchanged per formula unit in a redox change).',
  },
  {
    q: 'KMnO<sub>4</sub> (n = 5 in acid) is used to oxidise FeSO<sub>4</sub> (n = 1). The mole ratio KMnO<sub>4</sub> : FeSO<sub>4</sub> is:',
    options: ['5 : 1', '1 : 5', '1 : 1', '2 : 5'],
    answer: 1,
    explain: 'mole(oxidant)/mole(reductant) = n(reductant)/n(oxidant) = 1/5. So 1 mol KMnO₄ reacts with 5 mol FeSO₄ ⇒ ratio 1 : 5.',
  },
  {
    q: 'Normality (N) and molarity (M) of a solution are related by:',
    options: ['N = M', 'N = M × n-factor', 'N = M ÷ n-factor', 'N = M²'],
    answer: 1,
    explain: 'N = M × n-factor. So N/20 KMnO₄ (n = 5) is 1/100 M, but for equivalence calculations you use Normality directly.',
  },
  {
    q: 'The number of moles of electrons gained when 1 mole of MnO<sub>4</sub><sup>−</sup> is reduced to Mn<sup>2+</sup> is:',
    options: ['1', '3', '5', '7'],
    answer: 2,
    explain: 'Mn: +7 → +2, a change of 5. So 5 moles of electrons per mole of MnO₄⁻ (this is its n-factor in acidic medium).',
  },
  {
    q: 'For a redox titration, equivalents = N × V(in litres). 90 mL of N/20 solution contains how many equivalents?',
    options: ['0.0045', '0.045', '0.45', '4.5'],
    answer: 0,
    explain: 'Equivalents = N × V = (1/20) × (90/1000) = 0.0045 equivalents.',
  },
  {
    q: 'Electrons transferred = moles × (ΔO.N. per atom) × (number of atoms changing). For 2 mol of Al going Al<sup>0</sup> → Al<sup>3+</sup>, electrons transferred =',
    options: ['3', '6', '2', '9'],
    answer: 1,
    explain: '2 mol × 3 (each Al loses 3 e⁻) × 1 atom = 6 moles of electrons.',
  },
  {
    q: 'A reductant X<sup>2+</sup> is oxidised to X<sup>5+</sup>. Its n-factor is:',
    options: ['2', '5', '3', '7'],
    answer: 2,
    explain: 'n-factor = change in oxidation number = 5 − 2 = 3.',
  },
  {
    q: 'If 0.1 mole of an oxidant has n-factor 6, the number of equivalents is:',
    options: ['0.6', '0.06', '6', '1.6'],
    answer: 0,
    explain: 'Equivalents = moles × n-factor = 0.1 × 6 = 0.6 (this is exactly K₂Cr₂O₇, n = 6).',
  },
  {
    q: 'To find % purity from a titration, the correct chain is:',
    options: [
      'volume → mass → moles → %',
      'equivalents of titrant → equivalents of analyte → moles → mass → %',
      'normality → density → %',
      'moles of titrant = % directly',
    ],
    answer: 1,
    explain: 'Find equivalents of titrant (N×V), set equal to equivalents of analyte, divide by n-factor to get moles, multiply by molar mass to get mass, then % = (mass found / sample mass) × 100.',
  },
]

export const pyqs = [
  {
    q: '<b>[Paper Q90]</b> 0.3 g of an oxalate salt was dissolved in 100 mL. The solution needed 90 mL of N/20 KMnO<sub>4</sub> for complete oxidation. The % of oxalate ion (C<sub>2</sub>O<sub>4</sub><sup>2−</sup>) in the salt is:',
    options: ['3.3 %', '66 %', '70 %', '40 %'],
    answer: 1,
    explain: 'Equiv KMnO₄ = (1/20)(90/1000) = 0.0045 = equiv of C₂O₄²⁻. Moles C₂O₄²⁻ = 0.0045 / 2 = 0.00225. Mass = 0.00225 × 88 = 0.198 g. % = (0.198/0.3) × 100 = <b>66 %</b>.',
  },
  {
    q: '<b>[Paper Q61]</b> An element A in a compound ABD has oxidation number −n. It is oxidised by Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> in acid medium. 1.68 × 10<sup>−3</sup> mol of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> were used for 3.36 × 10<sup>−3</sup> mol of ABD. The new oxidation number of A is:',
    options: ['3', '3 − n', 'n − 3', '+n'],
    answer: 1,
    explain: 'Equiv Cr₂O₇²⁻ = 1.68e−3 × 6 = 1.008e−2 = equiv of ABD. So 3.36e−3 × Δ = 1.008e−2 ⇒ Δ = 3. Oxidation raises O.N. by 3: new O.N. = (−n) + 3 = <b>3 − n</b>.',
  },
  {
    q: '<b>[Paper Q62]</b> For the reaction M<sup>x+</sup> + MnO<sub>4</sub><sup>−</sup> → MO<sub>3</sub><sup>−</sup> + Mn<sup>2+</sup> + O<sub>2</sub>, if one mole of MnO<sub>4</sub><sup>−</sup> oxidises 1.67 mol of M<sup>x+</sup> to MO<sub>3</sub><sup>−</sup>, the value of x is:',
    options: ['5', '3', '2', '1'],
    answer: 2,
    explain: 'MnO₄⁻ → Mn²⁺: n = 5, so equiv = 1×5 = 5. In MO₃⁻ the M is +5, so its n-factor = (5 − x). Equiv of Mˣ⁺ = 1.67 × (5 − x) = 5. Since 1.67 ≈ 5/3, (5 − x) = 3 ⇒ <b>x = 2</b>.',
  },
  {
    q: '<b>[Paper Q63]</b> The number of moles of KMnO<sub>4</sub> required to oxidise one mole of FeC<sub>2</sub>O<sub>4</sub> in acidic medium is:',
    options: ['0.6', '1.67', '0.2', '0.4'],
    answer: 0,
    explain: 'FeC₂O₄ n = 3 (Fe²⁺→Fe³⁺ gives 1, C₂O₄²⁻→2CO₂ gives 2). Equiv = 1×3 = 3. KMnO₄ n = 5 ⇒ moles = 3/5 = <b>0.6</b>.',
  },
  {
    q: '<b>[Paper Q64]</b> In a reaction, 4 moles of electrons are transferred to one mole of HNO<sub>3</sub>. The possible product obtained on reduction is:',
    options: ['0.5 mol N<sub>2</sub>', '0.5 mol N<sub>2</sub>O', '1 mol NO<sub>2</sub>', '1 mol NH<sub>3</sub>'],
    answer: 1,
    explain: 'N in HNO₃ is +5. Gaining 4 e⁻ ⇒ +5 − 4 = +1, which is the N in N₂O. One mole of N atoms makes ½ mole of N₂O ⇒ <b>0.5 mol N₂O</b>.',
  },
  {
    q: '<b>[Paper Q55]</b> In the reaction Al + Fe<sub>3</sub>O<sub>4</sub> → Al<sub>2</sub>O<sub>3</sub> + Fe, the total number of electrons transferred (for the balanced equation) is:',
    options: ['16', '24', '8', '12'],
    answer: 1,
    explain: 'Balanced: 8Al + 3Fe₃O₄ → 4Al₂O₃ + 9Fe. Each Al loses 3 e⁻; 8 Al × 3 = <b>24</b> electrons (the 9 Fe gain 24 in total too).',
  },
  {
    q: '<b>[Paper Q58]</b> When KMnO<sub>4</sub> acts as an oxidising agent and ultimately forms MnO<sub>4</sub><sup>2−</sup>, MnO<sub>2</sub>, Mn<sub>2</sub>O<sub>3</sub> and Mn<sup>2+</sup>, the number of electrons transferred in each case respectively is:',
    options: ['4, 3, 1, 5', '1, 5, 3, 7', '1, 3, 4, 5', '3, 5, 7, 1'],
    answer: 2,
    explain: 'Mn starts at +7. To MnO₄²⁻ (+6): 1 e⁻. To MnO₂ (+4): 3 e⁻. To Mn₂O₃ (+3): 4 e⁻. To Mn²⁺ (+2): 5 e⁻ ⇒ <b>1, 3, 4, 5</b>.',
  },
  {
    q: '<b>[Paper Q51]</b> Four Cl<sub>2</sub> molecules undergo loss and gain of 6 moles of electrons forming two oxidation states of Cl in an auto-redox (disproportionation) change. The +ve and −ve oxidation states of Cl are:',
    options: ['Cl<sup>5+</sup>, Cl<sup>0</sup>', 'Cl<sup>7+</sup>, Cl<sup>1−</sup>', 'Cl<sup>3+</sup>, Cl<sup>1−</sup>', 'Cl<sup>2+</sup>, Cl<sup>1−</sup>'],
    answer: 2,
    explain: '4 Cl₂ = 8 Cl atoms (all start at 0). 6 atoms gain 1 e⁻ each → Cl⁻ (6 e⁻ gained). The remaining 2 atoms lose 6 e⁻ total ⇒ +3 each. So Cl goes to <b>+3 and −1</b>.',
  },
]

export const numericals = [
  {
    q: 'How much KMnO<sub>4</sub> (in moles) is needed to oxidise 1 mole of FeC<sub>2</sub>O<sub>4</sub> in acid? Show the equivalents method.',
    tag: 'Paper set · the master method',
    steps: [
      '<b>Step 1 — what is oxidised?</b> Both Fe²⁺ and the oxalate C₂O₄²⁻ are oxidised.',
      '<b>Step 2 — n-factor of the reductant.</b> Fe²⁺→Fe³⁺ loses 1 e⁻; C₂O₄²⁻→2CO₂ loses 2 e⁻. So FeC₂O₄ has n = 1 + 2 = <b>3</b>.',
      '<b>Step 3 — equivalents of reductant.</b> 1 mol × 3 = 3 equivalents.',
      '<b>Step 4 — equivalents bridge.</b> Equiv of KMnO₄ = equiv of FeC₂O₄ = 3.',
      '<b>Step 5 — moles of oxidant.</b> KMnO₄ has n = 5 (acidic), so moles = equivalents / n = 3 / 5.',
    ],
    answer: '0.6 mol KMnO₄',
  },
  {
    q: '0.3 g of an oxalate salt needed 90 mL of N/20 KMnO<sub>4</sub> for complete oxidation. Find the % of oxalate ion (C<sub>2</sub>O<sub>4</sub><sup>2−</sup>, molar mass 88) in the salt.',
    tag: 'Paper set · % purity',
    steps: [
      '<b>Equiv of KMnO₄</b> = N × V = (1/20) × (90/1000) = 0.0045 equivalents.',
      '<b>Bridge:</b> equiv of C₂O₄²⁻ = equiv of KMnO₄ = 0.0045.',
      '<b>Moles of C₂O₄²⁻</b> = equivalents / n-factor = 0.0045 / 2 = 0.00225 mol.',
      '<b>Mass of C₂O₄²⁻</b> = 0.00225 × 88 = 0.198 g.',
      '<b>% oxalate</b> = (mass of oxalate / mass of sample) × 100 = (0.198 / 0.3) × 100.',
    ],
    answer: '66 %',
  },
  {
    q: 'Element A (oxidation number −n) in ABD is oxidised by Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> in acid. 1.68 × 10<sup>−3</sup> mol K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> reacted with 3.36 × 10<sup>−3</sup> mol ABD. Find the new oxidation number of A.',
    tag: 'Paper set · find ΔO.N.',
    steps: [
      '<b>Equiv of oxidant.</b> Cr₂O₇²⁻ has n = 6, so equiv = 1.68×10⁻³ × 6 = 1.008×10⁻² equivalents.',
      '<b>Bridge.</b> Equiv of ABD = 1.008×10⁻² as well.',
      '<b>Find ΔO.N. of A.</b> Equiv of ABD = moles × ΔO.N. ⇒ 3.36×10⁻³ × Δ = 1.008×10⁻² ⇒ Δ = 3.',
      '<b>Oxidation raises O.N.</b> by Δ = 3, so new O.N. = (−n) + 3.',
    ],
    answer: '3 − n',
  },
  {
    q: 'In M<sup>x+</sup> + MnO<sub>4</sub><sup>−</sup> → MO<sub>3</sub><sup>−</sup> + Mn<sup>2+</sup>, one mole of MnO<sub>4</sub><sup>−</sup> oxidises 1.67 mol of M<sup>x+</sup>. Find x.',
    tag: 'Paper set · back-solve n-factor',
    steps: [
      '<b>Oxidant side.</b> MnO₄⁻ → Mn²⁺ is a 5-electron change, equiv = 1 × 5 = 5.',
      '<b>Reductant side.</b> In MO₃⁻, O₃ = −6 and total charge = −1, so M = +5. Its n-factor = (5 − x).',
      '<b>Bridge.</b> Equiv of Mˣ⁺ = 1.67 × (5 − x) must equal 5.',
      'Since 1.67 ≈ 5/3: (5/3)(5 − x) = 5 ⇒ 5 − x = 3 ⇒ x = 2.',
    ],
    answer: 'x = 2',
  },
  {
    q: '4 moles of electrons are transferred to 1 mole of HNO<sub>3</sub>. Identify the reduction product and its amount.',
    tag: 'Paper set · electrons → product',
    steps: [
      '<b>Starting O.N.</b> N in HNO₃ is +5.',
      '<b>After gaining 4 e⁻</b> per N atom: +5 − 4 = +1.',
      '<b>Which species has N at +1?</b> N₂O (each N is +1).',
      '<b>Amount.</b> 1 mol of N atoms forms ½ mol of N₂O (2 N per molecule).',
    ],
    answer: '0.5 mol N₂O',
  },
  {
    q: 'Find the total number of electrons transferred in the balanced reaction Al + Fe<sub>3</sub>O<sub>4</sub> → Al<sub>2</sub>O<sub>3</sub> + Fe.',
    tag: 'Paper set · electron counting',
    steps: [
      '<b>Balance first.</b> 8Al + 3Fe₃O₄ → 4Al₂O₃ + 9Fe.',
      '<b>Oxidation.</b> Al: 0 → +3, loses 3 e⁻ each.',
      '<b>Count.</b> 8 Al × 3 e⁻ = 24 e⁻ lost.',
      '<b>Check.</b> 9 Fe gain (8/3) each (from +8/3 in Fe₃O₄ to 0): 9 × 8/3 = 24 e⁻ gained. Balances.',
    ],
    answer: '24 electrons',
  },
  {
    q: 'Four Cl<sub>2</sub> molecules disproportionate, exchanging 6 moles of electrons, to give two oxidation states of chlorine. Find those oxidation states.',
    tag: 'Paper set · disproportionation',
    steps: [
      '<b>Count atoms.</b> 4 Cl₂ = 8 Cl atoms, all starting at 0.',
      '<b>Negative side.</b> Take the usual Cl⁻ (−1). To gain 6 e⁻ we need 6 atoms going 0 → −1.',
      '<b>Positive side.</b> The remaining 8 − 6 = 2 atoms must lose 6 e⁻ in total ⇒ 3 e⁻ each ⇒ +3.',
      '<b>Result.</b> Chlorine ends up as +3 and −1.',
    ],
    answer: 'Cl is +3 (positive) and −1 (negative)',
  },
]

// Rapid-fire game: each card asks for a single number (electrons, n-factor, or moles).
export const gameCards = [
  { q: 'Electrons gained: MnO<sub>4</sub><sup>−</sup> → Mn<sup>2+</sup> (acidic)', answer: 5, hint: '+7 → +2' },
  { q: 'Electrons gained per Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> → 2 Cr<sup>3+</sup>', answer: 6, hint: 'each Cr +6→+3 is 3, ×2 Cr' },
  { q: 'n-factor of FeC<sub>2</sub>O<sub>4</sub> with KMnO<sub>4</sub> (acidic)', answer: 3, hint: 'Fe gives 1, oxalate gives 2' },
  { q: 'n-factor of C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2 CO<sub>2</sub>', answer: 2, hint: 'each C +3→+4, ×2' },
  { q: 'Electrons gained: MnO<sub>4</sub><sup>−</sup> → MnO<sub>2</sub> (neutral)', answer: 3, hint: '+7 → +4' },
  { q: 'Electrons gained: MnO<sub>4</sub><sup>−</sup> → MnO<sub>4</sub><sup>2−</sup> (alkaline)', answer: 1, hint: '+7 → +6' },
  { q: 'n-factor of FeS<sub>2</sub> → Fe<sup>3+</sup> + 2 SO<sub>2</sub>', answer: 11, hint: 'Fe gives 1, each S(−1)→+4 is 5, ×2' },
  { q: 'Moles of KMnO<sub>4</sub> (acidic) to oxidise 1 mol Fe<sup>2+</sup>', answer: 0.2, hint: '1 equiv / 5' },
  { q: 'n-factor of N in N<sub>2</sub> → NH<sub>3</sub>', answer: 3, hint: '0 → −3' },
  { q: 'Electrons gained per HNO<sub>3</sub> → N<sub>2</sub>O', answer: 4, hint: '+5 → +1' },
]
