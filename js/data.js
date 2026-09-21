/* ============================================================
   LESSON DATA — PHILIPPINE DEPED GRADE 9 ARALING PANLIPUNAN
   MELC: AP9MYK-IHe-11 (Kahulugan at Estraktura ng Pamilihan)
   Verbatim Content from Official Lesson Plan
   ============================================================ */

const lessonData = {
  title: "KAHULUGAN AT ESTRAKTURA NG PAMILIHAN",
  gradeLevel: "Ekonomiks 9 · Ikalawang Markahan",
  melcCode: "MELC AP9MYK-IHe-11",
  competency: "Nasusuri ang kahulugan at iba't ibang estraktura ng pamilihan.",
  
  kagamitan: "PowerPoint / Interactive Presentation, mga larawan/logo ng produkto at kumpanya, manila paper, marker, at meta-cards.",
  sanggunian: "Ekonomiks 9 (Modyul ng Mag-aaral sa Araling Panlipunan), K-12 Most Essential Learning Competencies (MELCs) AP9.",

  rules: [
    { icon: "🙋", text: "<b>Itaas ang kamay</b> bago magsalita o magtanong." },
    { icon: "👂", text: "<b>Makinig nang mabuti</b> — isa lamang ang magsasalita bawat sandali." },
    { icon: "🤝", text: "<b>Igalang at suportahan</b> ang bawat miyembro ng pangkat sa gawain." },
    { icon: "⏱️", text: "<b>Sundin ang oras</b> — bantayan ang timer upang matapos sa takdang oras." },
    { icon: "📵", text: "<b>Ituon ang pansin sa aralin</b> — ilagay muna sa silent mode ang cellphone kung hindi kailangan." }
  ],

  objectives: [
    {
      type: "1. Pangkabatiran (Cognitive)",
      color: "yellow",
      text: "Naipaliliwanag ang kahulugan ng pamilihan at natutukoy ang mga katangian ng iba't ibang estraktura nito."
    },
    {
      type: "2. Pandamdamin / Pagpapahalaga (Affective)",
      color: "green",
      text: "Napahahalagahan ang papel ng pamilihan at ng tamang kompetisyon sa pang-araw-araw na buhay ng mga mamimili at tagaprodyus."
    },
    {
      type: "3. Pangkasanayan (Psychomotor)",
      color: "blue",
      text: "Nasusuri at naipapangkat ang mga karaniwang produkto at kumpanya ayon sa kanilang kinabibilangang estraktura ng pamilihan sa pamamagitan ng pangkatang gawain."
    }
  ],

  review: {
    question: "\"Sino sa inyo ang nakatanda ng ating nakaraang paksa tungkol sa interaksyon ng demand at supply?\"",
    answer: "Nagkakasundo ang mamimili (demand) at nagtitinda (supply) sa pinagkasunduang <b>Presyong Ekwilibriyo (₱)</b> at <b>Dami ng Produkto</b> sa pamilihan. Kapag nagbago ang presyo o dami, nagkakaroon ng kakulangan (shortage) o kalabisan (surplus)."
  },

  sortItems: [
    { id: "s1", label: "🌾 Bigas", correct: "maraming", price: "₱52/kilo", hint: "Maraming nagtitinda ng magkakatulad na butil" },
    { id: "s2", label: "🥬 Gulay sa palengke", correct: "maraming", price: "₱25/tali", hint: "Maraming magsasaka at tindera sa talipapa" },
    { id: "s3", label: "⚡ Meralco", correct: "iisa", price: "₱ Bill", hint: "Nag-iisang tagapamahagi ng kuryente" },
    { id: "s4", label: "🚰 Maynilad", correct: "iisa", price: "₱ Bill", hint: "Nag-iisang tagapaghatid ng tubig sa kanlurang Maynila" },
    { id: "s5", label: "⛽ Petron", correct: "kakaunti", price: "₱62/L", hint: "Isa sa Big 3 kumpanya ng langis sa bansa" },
    { id: "s6", label: "⛽ Shell", correct: "kakaunti", price: "₱63/L", hint: "Isa sa iilang higanteng kumpanya ng gasolina" },
    { id: "s7", label: "📶 Globe", correct: "kakaunti", price: "₱ Load", hint: "Iilan lamang silang telecommunication provider" },
    { id: "s8", label: "📶 Smart", correct: "kakaunti", price: "₱ Load", hint: "Katuwang na higanteng telecom provider" },
    { id: "s9", label: "🍔 Jollibee", correct: "differentiated", price: "₱89 Meal", hint: "Kilalang fast food burger na may sariling lasa at patalastas" },
    { id: "s10", label: "🍔 McDonald's", correct: "differentiated", price: "₱95 Meal", hint: "May katunggali sa fast food ngunit may sariling tatak" },
    { id: "s11", label: "🧼 Tide", correct: "differentiated", price: "₱14 Sachet", hint: "Sabon panlaba na kilala sa mabangong formula at ads" },
    { id: "s12", label: "🧼 Surf", correct: "differentiated", price: "₱12 Sachet", hint: "Sabon panlaba na may matinding patalastas at ibang bango" },
    { id: "s13", label: "👮 Pulis / Sundalo", correct: "iisang mamimili", price: "₱ Sahod", hint: "Pamahalaan lamang ang iisang bumibili ng kanilang serbisyo" }
  ],

  sortCategories: [
    { id: "maraming", label: "Maraming nagtitinda (Walang kontrol sa presyo)" },
    { id: "iisa", label: "Iisang nagtitinda (May hadlang sa pagpasok)" },
    { id: "kakaunti", label: "Kakaunti (Magkakaugnay ang presyo)" },
    { id: "differentiated", label: "Differentiated (May patalastas at tatak)" },
    { id: "iisang mamimili", label: "Iisa lang ang mamimili (Gobyerno)" }
  ],

  analysisQuestions: [
    {
      q: "1. Ano ang naging batayan ng inyong pangkat sa pagpapangkat ng mga larawan?",
      choices: [
        "A) Batay sa kulay ng logo at dalas ng patalastas sa telebisyon.",
        "B) Batay sa dami ng nagtitinda at kung mayroon silang katunggali sa negosyo.",
        "C) Batay sa kung aling produkto ang pinakamurang bilhin ngayong linggo."
      ],
      bestIndex: 1,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ito ang dalawang pangunahing pamantayan sa pagsusuri ng estraktura ng pamilihan — ang bilang ng prodyuser at antas ng kumpetisyon sa merkado."
    },
    {
      q: "2. Batay sa mga larawan, ano ang karaniwang ginagawa o nagaganap sa mga lugar o negosyong ito?",
      choices: [
        "A) Nagaganap ang interaksyon ng mamimili at nagtitinda upang magkasundo sa presyo (₱) at dami.",
        "B) Nagpapaligsahan lamang ang mga kumpanya kung sino ang may pinakamalaking gusali.",
        "C) Pamamahagi lamang ng libreng tulong at ayuda nang walang bentahan."
      ],
      bestIndex: 0,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ito ang mismong kahulugan ng pamilihan — isang mekanismo kung saan nagkakasundo ang mamimili at prodyuser sa presyo at dami ng produkto."
    },
    {
      q: "3. Aling mga produkto o kumpanya ang napansin ninyong walang gaanong kapareho o kalaban sa merkado?",
      choices: [
        "A) Bigas at gulay sa palengke dahil magkakapareho ang paninda sa bawat pwesto.",
        "B) Fast food tulad ng Jollibee at McDonald's dahil pareho silang nagtitinda ng burger.",
        "C) Meralco (kuryente) at Maynilad (tubig) dahil sila ang nag-iisang tagapagkaloob sa kanilang nasasakupan."
      ],
      bestIndex: 2,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ang Meralco at Maynilad ay halimbawa ng Monopolyo — iisa lamang ang prodyuser kaya walang direktang kapalit at walang kalaban ang kanilang serbisyo."
    },
    {
      q: "4. Alin naman ang may napakaraming katunggali o pagpipilian ang mga mamimili?",
      choices: [
        "A) Gulay at bigas sa palengke, gayundin ang fast food (Jollibee, McDo) at sabon (Tide, Surf).",
        "B) Kumpanya ng kuryente at tubig dahil maraming kawad na nakakabit sa mga poste.",
        "C) Serbisyong militar ng mga sundalo at pulis na gobyerno lamang ang kumukuha."
      ],
      bestIndex: 0,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Sa Ganap na Kompetisyon at Monopolistic Competition, napakaraming nagtitinda kaya malawak ang pagpipilian at may kalayaan ang mamimili."
    },
    {
      q: "5. Paano nakatutulong ang mga negosyo at pamilihang ito sa ating pang-araw-araw na pamumuhay?",
      choices: [
        "A) Pinipilit lamang nila ang mamamayan na gumastos kahit hindi naman kailangan.",
        "B) Sinisiguro nito ang maayos na suplay ng pangunahing pangangailangan (pagkain, kuryente, tubig) sa tamang presyo (₱).",
        "C) Nagbibigay lamang sila ng trabaho ngunit walang silbi sa pangkalahatang ekonomiya."
      ],
      bestIndex: 1,
      insight: "Pinakamalapit sa tamang pagsusuri ✓: Ang pamilihan ang puso ng ekonomiya — sinisiguro nitong maipamahagi ang mga yaman upang matugunan ang walang katapusang pangangailangan ng tao."
    }
  ],

  rolePlayGroups: [
    {
      label: "Pangkat 1",
      structure: "Ganap na Kompetisyon (Perfect Competition)",
      scenario: "Sitwasyon ng tawaran at bentahan ng gulay o isda sa palengke kung saan maraming nagtitinda ng magkakatulad na produkto.",
      icon: "🥬"
    },
    {
      label: "Pangkat 2",
      structure: "Monopolyo (Monopoly)",
      scenario: "Sitwasyon ng pagbabayad ng bill sa kuryente o tubig at kawalan ng ibang mapagpipilian dahil iisa lang ang kumpanya.",
      icon: "⚡"
    },
    {
      label: "Pangkat 3",
      structure: "Oligopolyo (Oligopoly)",
      scenario: "Sitwasyon ng sabay-sabay na pagtataas ng presyo ng langis (₱/litro) ng mga pangunahing kumpanya tulad ng Petron at Shell.",
      icon: "⛽"
    },
    {
      label: "Pangkat 4",
      structure: "Monopolistic Competition",
      scenario: "Sitwasyon ng pagpili ng mamimili ng fast food o sabon batay sa napanood na patalastas, packaging, at tatak.",
      icon: "🍔"
    }
  ],

  rubric: [
    { criteria: "Nilalaman at Pagkakaunawa sa Paksa", pts: "10 puntos", desc: "Naipakita nang malinaw at wasto ang katangian ng nabunot na estraktura ng pamilihan." },
    { criteria: "Pagiging Malikhain at Pag-arte", pts: "5 puntos", desc: "Makatotohanan, buhay, at nakapupukaw ng interes ang pagsasatao sa sitwasyon." },
    { criteria: "Kooperasyon ng Pangkat", pts: "5 puntos", desc: "Lahat ng miyembro ay aktibong nakiisa at nagtulungan sa loob ng takdang oras." },
    { criteria: "KABUUANG MARKA", pts: "20 puntos", desc: "Pinakamataas na posibleng marka sa pangkatang dula-dulaan." }
  ],

  quizQuestions: [
    {
      q: "1. Ano ang tumutukoy sa isang mekanismo kung saan ang mamimili at nagtitinda ay nagkakaroon ng interaksyon upang magkasundo sa presyo at dami ng produkto?",
      choices: ["A) Alokasyon", "B) Demand", "C) Pamilihan", "D) Supply"],
      correct: 2, // C
      explanation: "Ang pamilihan ay ang mismong mekanismo ng pagkakasundo ng mamimili at nagtitinda sa presyo at dami."
    },
    {
      q: "2. Ang mga kumpanyang Meralco at Maynilad ay nag-iisang tagapagkaloob ng serbisyo ng kuryente at tubig sa kani-kanilang nasasakupan. Sa anong estraktura ng pamilihan sila nabibilang?",
      choices: ["A) Oligopolyo", "B) Monopolyo", "C) Monopsonyo", "D) Ganap na Kompetisyon"],
      correct: 1, // B
      explanation: "Monopolyo ang tawag dahil iisa lamang ang nagtitinda o nagkakaloob ng serbisyo na walang direktang kapalit."
    },
    {
      q: "3. Bakit itinuturing na \"price taker\" ang mga nagtitinda sa pamilihang may ganap na kompetisyon?",
      choices: [
        "A) Dahil kontrolado nila ang presyo sa merkado.",
        "B) Dahil idinidikta ng pamahalaan ang lahat ng presyo.",
        "C) Dahil nakabase ang presyo sa pangkalahatang interaksyon ng demand at supply sa merkado.",
        "D) Dahil maaari silang magkasundo sa presyo kasama ang ibang negosyante."
      ],
      correct: 2, // C
      explanation: "Sa ganap na kompetisyon, walang sinumang negosyante ang may kapangyarihang magdikta; ang merkado ang nagtatakda ng presyo."
    },
    {
      q: "4. Ang Petron, Shell, at Caltex ay iilan lamang sa mga kumpanyang nagtitinda ng langis sa bansa. Anong estraktura ng pamilihan ang inilalarawan nito?",
      choices: ["A) Monopolistic Competition", "B) Monopsonyo", "C) Monopolyo", "D) Oligopolyo"],
      correct: 3, // D
      explanation: "Oligopolyo ang estraktura kung saan kakaunti lamang ang malalaking kumpanyang nagtitinda ng magkakatulad o magkakaugnay na produkto."
    },
    {
      q: "5. Sa anong estraktura ng pamilihan nabibilang ang pamahalaan bilang iisang bumibili ng serbisyo ng mga sundalo at pulis?",
      choices: ["A) Monopsonyo", "B) Monopolyo", "C) Oligopolyo", "D) Ganap na Kompetisyon"],
      correct: 0, // A
      explanation: "Monopsonyo ang tawag kapag may iisa lamang na mamimili (tulad ng Pamahalaan) ngunit maraming nag-aalok ng serbisyo o produkto."
    }
  ],

  assignment: {
    prompt: "\"Bilang isang mamimili, aling estraktura ng pamilihan ang sa tingin mo ay pinakamakabubuti sa mga mamamayan? Ipaliwanag ang iyong dahilan.\"",
    format: "Isulat sa kuwaderno ang sagot sa 5 hanggang 8 pangungusap."
  }
};
