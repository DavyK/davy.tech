import Ub from '../../static/images/PLL/Ub.png'
import Ua from '../../static/images/PLL/Ua.png'
import Z from '../../static/images/PLL/Z.png'
import H from '../../static/images/PLL/H.png'
import Aa from '../../static/images/PLL/Aa.png'
import Ab from '../../static/images/PLL/Ab.png'
import E from '../../static/images/PLL/E.png'
import Ra from '../../static/images/PLL/Ra.png'
import Rb from '../../static/images/PLL/Rb.png'
import Ja from '../../static/images/PLL/Ja.png'
import Jb from '../../static/images/PLL/Jb.png'
import T from '../../static/images/PLL/T.png'
import F from '../../static/images/PLL/F.png'
import V from '../../static/images/PLL/V.png'
import Y from '../../static/images/PLL/Y.png'
import Na from '../../static/images/PLL/Na.png'
import Nb from '../../static/images/PLL/Nb.png'
import Ga from '../../static/images/PLL/Ga.png'
import Gb from '../../static/images/PLL/Gb.png'
import Gc from '../../static/images/PLL/Gc.png'
import Gd from '../../static/images/PLL/Gd.png'

export default {
  Ub: { name: "Ub", img: Ub, algo: "R2 U (R U R' U') R' U' (R' U R')" },
  Ua: { name: "Ua", img: Ua, algo: "(R U' R U) R U (R U' R' U') R2" },
  Z:  { name: "Z", img: Z,  algo: "(M2' U M2' U) (M' U2) (M2' U2 M') [U2]" },
  H:  { name: "H", img: H,  algo: "(M2' U M2') U2 (M2' U M2')" },
  Aa: { name: "Aa", img: Aa, algo: "x (R' U R') D2 (R U' R') D2 R2 x'" },
  Ab: { name: "Ab", img: Ab, algo: "x R2' D2 (R U R') D2 (R U' R) x'" },
  E:  { name: "E", img: E,  algo: "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x" },
  Ra: { name: "Ra", img: Ra, algo: "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R') [U']" },
  Rb: { name: "Rb", img: Rb, algo: "(R' U2 R U2') R' F (R U R' U') R' F' R2 [U']" },
  Ja: { name: "Ja", img: Ja, algo: "(R' U L' U2) (R U' R' U2 R) L [U']" },
  Jb: { name: "Jb", img: Jb, algo: "(R U R' F') (R U R' U') R' F R2 U' R' [U']" },
  T:  { name: "T", img: T,  algo: "(R U R' U') (R' F R2 U') R' U' (R U R' F')" },
  F:  { name: "F", img: F,  algo: "(R' U' F')(R U R' U')(R' F R2 U')(R' U' R U)(R' U R)" },
  V:  { name: "V", img: V,  algo: "(R' U R' U') y (R' F' R2 U') (R' U R' F) R F" },
  Y:  { name: "Y", img: Y,  algo: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')" },
  Na: { name: "Na", img: Na, algo: "(R U R' U)(R U R' F')(R U R' U')(R'F R2 U') R' U2 (R U'R')" },
  Nb: { name: "Nb", img: Nb, algo: "(R' U R U') (R' F' U' F) (R U R' F) R' F' (R U' R)" },
  Ga: { name: "Ga", img: Ga, algo: "R2 U (R' U R' U') (R U' R2) D U' (R' U R D') [U]" },
  Gb: { name: "Gb", img: Gb, algo: "(F' U' F) (R2 u R' U) (R U' R u') R2'" },
  Gc: { name: "Gc", img: Gc, algo: "R2 U' (R U' R U) (R' U R2 D') (U R U' R') D [U']" },
  Gd: { name: "Gd", img: Gd, algo: "D' (R U R' U') D (R2 U' R U') (R' U R' U) R2 [U]" },
};
