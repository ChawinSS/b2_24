const quizDataFromFile = [
  {
    "question": "exchange of ideas",
    "correct": "der Meinungsaustausch",
    "choices": [
      "der Mythos",
      "der Meinungsaustausch",
      "die Lärche",
      "auskurieren"
    ]
  },
  {
    "question": "auditory,&nbsp;aurally",
    "correct": "auditiv",
    "choices": [
      "gutgelaunt",
      "auditiv",
      "der Internetzugang",
      "der Kassenbon"
    ]
  },
  {
    "question": "communicative&nbsp;",
    "correct": "kommunikativ",
    "choices": [
      "die Pflanzenart",
      "verpesten",
      "kommunikativ",
      "die Genesung"
    ]
  },
  {
    "question": "motoric",
    "correct": "motorisch",
    "choices": [
      "die Hauptsache",
      "die Naturkatastrophe",
      "motorisch",
      "der Dachboden"
    ]
  },
  {
    "question": "eye-minded",
    "correct": "visuell",
    "choices": [
      "verschlimmern",
      "visuell",
      "Schaden anrichten",
      "entsorgen"
    ]
  },
  {
    "question": "to keep in mind",
    "correct": "im Gedächtnis behalten",
    "choices": [
      "ganz von vorne",
      "einen Kredit aufnehmen/abbezahlen",
      "die Bohne&nbsp;",
      "im Gedächtnis behalten"
    ]
  },
  {
    "question": "have in mind",
    "correct": "vor Augen haben",
    "choices": [
      "vor Augen haben",
      "eine Rechnung anweisen",
      "der Druckbuchstabe",
      "die Einzahlung"
    ]
  },
  {
    "question": "additional qualification",
    "correct": "die Zusatzqualifikation",
    "choices": [
      "der Naturpark",
      "das Hochwasser",
      "die/das App",
      "die Zusatzqualifikation"
    ]
  },
  {
    "question": "social&nbsp;",
    "correct": "gesellschaftlich",
    "choices": [
      "die Urkunde",
      "gesellschaftlich",
      "geprägt sein",
      "das Selbstwertgefühl"
    ]
  },
  {
    "question": "optimal",
    "correct": "optimal",
    "choices": [
      "die Anschaffung",
      "hingegen",
      "optimal",
      "beharren auf"
    ]
  },
  {
    "question": "to broaden one's mind",
    "correct": "seinen Horizont erweitern",
    "choices": [
      "seinen Horizont erweitern",
      "der Abstellraum",
      "unabänderlich",
      "ungehemmt"
    ]
  },
  {
    "question": "retail sale",
    "correct": "der Einzelhandel",
    "choices": [
      "potenziell",
      "klappern&nbsp;",
      "ins Geld gehen",
      "der Einzelhandel"
    ]
  },
  {
    "question": "side job,&nbsp;moonlighting",
    "correct": "der Nebenjob",
    "choices": [
      "langfristig",
      "der Nebenjob",
      "von vornherein",
      "der Zimmerservice"
    ]
  },
  {
    "question": "rush hour",
    "correct": "die Stoßzeit",
    "choices": [
      "sich krankmelden",
      "pflanzlich",
      "die Stoßzeit",
      "endlos"
    ]
  },
  {
    "question": "paper deliverer,&nbsp;newspaper carrier",
    "correct": "der Zeitungsausträger",
    "choices": [
      "der Bergsee",
      "die Idylle",
      "ein Bußgeld verhängen",
      "der Zeitungsausträger"
    ]
  },
  {
    "question": "to help out",
    "correct": "aushelfen",
    "choices": [
      "das Antibiotikum",
      "aushelfen",
      "der Orkan&nbsp;",
      "nach Einschätzung"
    ]
  },
  {
    "question": "stay abroad",
    "correct": "der Auslandsaufenthalt",
    "choices": [
      "garen",
      "die Tanne",
      "der Auslandsaufenthalt",
      "das Rudern&nbsp;"
    ]
  },
  {
    "question": "apprentice",
    "correct": "der Auszubildende",
    "choices": [
      "der Auszubildende",
      "der Meinungsaustausch",
      "mutig wie ein Löwe",
      "schamlos"
    ]
  },
  {
    "question": "Bachelor",
    "correct": "der Bachelor",
    "choices": [
      "die Mensa",
      "die Tanne",
      "die Urkunde",
      "der Bachelor"
    ]
  },
  {
    "question": "business administration",
    "correct": "die Betriebswirtschaftslehre",
    "choices": [
      "die Betriebswirtschaftslehre",
      "der Radiologe",
      "das Halstuch",
      "das Heidekraut"
    ]
  },
  {
    "question": "dual study",
    "correct": "das duale Studium",
    "choices": [
      "das duale Studium",
      "der Greis",
      "motorisch",
      "das Attest"
    ]
  },
  {
    "question": "university education",
    "correct": "das Hochschulstudium",
    "choices": [
      "das Hochschulstudium",
      "gutgelaunt",
      "das Postwesen",
      "zweitrangig"
    ]
  },
  {
    "question": "concluding",
    "correct": "abschließend",
    "choices": [
      "grundsätzlich",
      "umstoßen",
      "kontaktfreudig",
      "abschließend"
    ]
  },
  {
    "question": "orientation",
    "correct": "die Orientierung",
    "choices": [
      "das Gästehaus",
      "hergeben",
      "die Orientierung",
      "anpassungsfähig"
    ]
  },
  {
    "question": "private life",
    "correct": "das Privatleben",
    "choices": [
      "anvertrauen",
      "das Privatleben",
      "naiv",
      "Bettruhe verordnen"
    ]
  },
  {
    "question": "wage agreement",
    "correct": "der Tarifvertrag",
    "choices": [
      "der Tarifvertrag",
      "Soll und Haben",
      "die Milchsäure",
      "abwarten"
    ]
  },
  {
    "question": "advantageous",
    "correct": "vorteilhaft",
    "choices": [
      "der Steuerbescheid",
      "vorteilhaft",
      "verpesten",
      "das Gästehaus"
    ]
  },
  {
    "question": "to balance,&nbsp;reconcile",
    "correct": "unter einen Hut bringen",
    "choices": [
      "erleichtert sein",
      "Vorrang haben",
      "unter einen Hut bringen",
      "mit dem linken Fuß aufstehen"
    ]
  },
  {
    "question": "business,&nbsp;matter,&nbsp;affair",
    "correct": "die Angelegenheit",
    "choices": [
      "das Fett",
      "die Angelegenheit",
      "angewiesen sein",
      "die Partnervermittlung"
    ]
  },
  {
    "question": "employment",
    "correct": "die Erwerbstätigkeit",
    "choices": [
      "die Flusslandschaft&nbsp;",
      "die Erwerbstätigkeit",
      "die Salami",
      "die Ferienwohnung"
    ]
  },
  {
    "question": "management of the company&nbsp;",
    "correct": "die Geschäftsführung",
    "choices": [
      "einschlägig",
      "vormachen",
      "die Geschäftsführung",
      "die Marktlücke"
    ]
  },
  {
    "question": "compatibility",
    "correct": "die Vereinbarkeit",
    "choices": [
      "die Lungenentzündung",
      "anrechnen&nbsp;",
      "die Vereinbarkeit",
      "keinesfalls"
    ]
  },
  {
    "question": "to communicate",
    "correct": "kommunizieren",
    "choices": [
      "schmeicheln",
      "generell",
      "der Tsunami&nbsp;",
      "kommunizieren"
    ]
  },
  {
    "question": "to monitor,&nbsp;supervise&nbsp;",
    "correct": "überwachen",
    "choices": [
      "überwachen",
      "ein Auge zudrücken",
      "illegal",
      "naschen"
    ]
  },
  {
    "question": "lifetime",
    "correct": "auf Lebenszeit",
    "choices": [
      "auf Lebenszeit",
      "komfortabel",
      "schmuddelig",
      "die Metropole&nbsp;"
    ]
  },
  {
    "question": "make a contract with someone",
    "correct": "einen Vertrag schließen mit jemandem",
    "choices": [
      "die Konsumgesellschaft",
      "haftbar",
      "skurril",
      "einen Vertrag schließen mit jemandem"
    ]
  },
  {
    "question": "self-esteem",
    "correct": "das Selbstwertgefühl",
    "choices": [
      "der Umzugskarton",
      "der Befund&nbsp;",
      "das Selbstwertgefühl",
      "die Hefe"
    ]
  },
  {
    "question": "become pressed for time",
    "correct": "in Zeitnot geraten",
    "choices": [
      "in Zeitnot geraten",
      "der Tsunami&nbsp;",
      "schwindeln",
      "die Gebirgskette&nbsp;"
    ]
  },
  {
    "question": "set priorities",
    "correct": "Prioritäten setzen",
    "choices": [
      "Prioritäten setzen",
      "die Einzahlung",
      "aufrechterhalten",
      "verheimlichen"
    ]
  },
  {
    "question": "to have priority",
    "correct": "Vorrang haben",
    "choices": [
      "der Nadelbaum",
      "nörgeln",
      "Vorrang haben",
      "der Gouda"
    ]
  },
  {
    "question": "lead to success",
    "correct": "zum Erfolg führen",
    "choices": [
      "sich krankmelden",
      "zum Erfolg führen",
      "geprägt sein",
      "Nase voll haben von"
    ]
  },
  {
    "question": "to neglect",
    "correct": "vernachlässigen",
    "choices": [
      "der Frühstücksraum",
      "der Laubbaum",
      "vernachlässigen",
      "das Durstempfinden"
    ]
  },
  {
    "question": "logical",
    "correct": "logisch",
    "choices": [
      "ein Eheversprechen abgeben",
      "der Förster",
      "die Badereise&nbsp;",
      "logisch"
    ]
  },
  {
    "question": "virtual",
    "correct": "virtuell",
    "choices": [
      "das Hackfleisch&nbsp;",
      "sanieren",
      "virtuell",
      "die Hagebutte&nbsp;"
    ]
  },
  {
    "question": "to be useful",
    "correct": "von Nutzen sein",
    "choices": [
      "von Nutzen sein",
      "kreischen",
      "spucken",
      "die Halbtagsstelle&nbsp;"
    ]
  },
  {
    "question": "blog",
    "correct": "der/das Blog",
    "choices": [
      "formvollendet",
      "der/das Blog",
      "hessischen",
      "der Heiratskandidat"
    ]
  },
  {
    "question": "blog entry",
    "correct": "der Blogeintrag",
    "choices": [
      "der Abschluß",
      "der Blogeintrag",
      "wegfallen",
      "in Betracht ziehen"
    ]
  },
  {
    "question": "the internet portal",
    "correct": "das Internetportal",
    "choices": [
      "jemandem einen Freundschaftsdienst erweisen",
      "vor Augen haben",
      "der Speisesaal",
      "das Internetportal"
    ]
  },
  {
    "question": "News and Views",
    "correct": "der Meinungsbeitrag",
    "choices": [
      "subtropisch",
      "die Palme",
      "der Meinungsbeitrag",
      "die Konvention"
    ]
  },
  {
    "question": "to blog",
    "correct": "bloggen",
    "choices": [
      "bloggen",
      "im Gedächtnis behalten",
      "die Glatze",
      "erkennbar"
    ]
  },
  {
    "question": "conceal",
    "correct": "verheimlichen",
    "choices": [
      "verheimlichen",
      "die Spezialität",
      "pflanzlich",
      "die Erdoberfläche"
    ]
  },
  {
    "question": "meaningless&nbsp;",
    "correct": "bedeutungslos",
    "choices": [
      "bedeutungslos",
      "gelockt",
      "die Trauung&nbsp;",
      "die Kontaktanzeige"
    ]
  },
  {
    "question": "from around the world",
    "correct": "aus aller Welt",
    "choices": [
      "pendeln",
      "herkömmlich",
      "aus aller Welt",
      "visuell"
    ]
  },
  {
    "question": "companion in life",
    "correct": "der Lebensgefährte",
    "choices": [
      "der Kassenbon",
      "zuflüstern",
      "der Blogeintrag",
      "der Lebensgefährte"
    ]
  },
  {
    "question": "dream lover",
    "correct": "der Traummann",
    "choices": [
      "nüchtern",
      "der Traummann",
      "tropisch",
      "die Fahrzeit"
    ]
  },
  {
    "question": "cheat",
    "correct": "schwindeln",
    "choices": [
      "pendeln",
      "logischerweise",
      "schwindeln",
      "die Laufzeit&nbsp;"
    ]
  },
  {
    "question": "promising",
    "correct": "erfolgversprechend",
    "choices": [
      "die Müllabfuhr&nbsp;",
      "schrill",
      "erfolgversprechend",
      "diensthabend"
    ]
  },
  {
    "question": "to scruple,&nbsp;have concerns",
    "correct": "Bedenken haben",
    "choices": [
      "beseitigen",
      "Bedenken haben",
      "progressiv",
      "die Premiere"
    ]
  },
  {
    "question": "realize",
    "correct": "sich im Klaren darüber sein",
    "choices": [
      "Netzwerke knüpfen",
      "unmodern",
      "sich im Klaren darüber sein",
      "verschlimmern"
    ]
  },
  {
    "question": "reading",
    "correct": "die Lesung",
    "choices": [
      "der Krempel",
      "der Mietwagen",
      "die Minderheit",
      "die Lesung"
    ]
  },
  {
    "question": "opening night, first appearance",
    "correct": "die Premiere",
    "choices": [
      "die Premiere",
      "äußerer, äußere, äußeres",
      "die Kohlenhydrate",
      "der &nbsp;Extremsport"
    ]
  },
  {
    "question": "adult evening classes",
    "correct": "die Volkshochschule",
    "choices": [
      "in Rechnung stellen",
      "die Volkshochschule",
      "eine allergische Reaktion auslösen",
      "das Risiko&nbsp;"
    ]
  },
  {
    "question": "series of lectures",
    "correct": "die Vortragsreihe",
    "choices": [
      "die Pauschale",
      "der Prozentsatz&nbsp;",
      "jemanden/sich anstecken",
      "die Vortragsreihe"
    ]
  },
  {
    "question": "sell out",
    "correct": "ausverkauft sein",
    "choices": [
      "ausverkauft sein",
      "eine Bearbeitungsgebühr entrichten",
      "vorherig",
      "der Gemüseauflauf"
    ]
  },
  {
    "question": "distance, gap",
    "correct": "der Abstand",
    "choices": [
      "die Hauptsache",
      "die Betriebswirtschaftslehre",
      "die Weltausstellung",
      "der Abstand"
    ]
  },
  {
    "question": "institution",
    "correct": "die Institution",
    "choices": [
      "weltberühmt",
      "die Hinsicht",
      "der Trödelmarkt",
      "die Institution"
    ]
  },
  {
    "question": "Nazi era",
    "correct": "die Nazizeit",
    "choices": [
      "das Eishockeyspiel&nbsp;",
      "die Nazizeit",
      "die Ladenkette",
      "der Rodel&nbsp;"
    ]
  },
  {
    "question": "to classify",
    "correct": "einstufen",
    "choices": [
      "der Frischvermählte",
      "einstufen",
      "die Überflutung",
      "die Gutgläubigkeit"
    ]
  },
  {
    "question": "contemporary",
    "correct": "zeitgenössisch",
    "choices": [
      "der Handgriff",
      "inszenieren",
      "zeitgenössisch",
      "schmatzen"
    ]
  },
  {
    "question": "further than hoped",
    "correct": "alle Erwartungen übertroffen",
    "choices": [
      "die Wendung",
      "die Windkraft",
      "alle Erwartungen übertroffen",
      "sich verkünsteln"
    ]
  },
  {
    "question": "in this regard",
    "correct": "in dieser Hinsicht",
    "choices": [
      "in dieser Hinsicht",
      "der Wirbelsturm&nbsp;",
      "das Antibiotikum",
      "mit dem linken Fuß aufstehen"
    ]
  },
  {
    "question": "my concern is ...",
    "correct": "mein Anliegen ist es,&nbsp;",
    "choices": [
      "die Premiere",
      "festverzinslich",
      "mein Anliegen ist es,&nbsp;",
      "die Haftstrafe"
    ]
  },
  {
    "question": "sociability",
    "correct": "die Geselligkeit",
    "choices": [
      "die Geselligkeit",
      "der Ruhestand",
      "eine Frist einhalten/gewähren/verlängern",
      "die Leitung"
    ]
  },
  {
    "question": "performance limit,&nbsp;marginal productivity",
    "correct": "die Leistungsgrenze",
    "choices": [
      "die Windkraft",
      "die Machtaufteilung",
      "vorherig",
      "die Leistungsgrenze"
    ]
  },
  {
    "question": "independent",
    "correct": "unabhängig",
    "choices": [
      "mäßig",
      "unabhängig",
      "der Kündigungsschutz",
      "der Umsatz"
    ]
  },
  {
    "question": "contest competitions",
    "correct": "Wettkämpfe bestreiten",
    "choices": [
      "die Hauptsache",
      "die Minibar",
      "bemängeln",
      "Wettkämpfe bestreiten"
    ]
  },
  {
    "question": "rule of the game",
    "correct": "die Spielregel",
    "choices": [
      "geprägt sein",
      "die Spielregel",
      "die Akupunktur",
      "die Statur"
    ]
  },
  {
    "question": "toss,&nbsp;throw",
    "correct": "der Wurf",
    "choices": [
      "die Ablenkung",
      "hoteleigen",
      "der Wurf",
      "der Verkehrslärm"
    ]
  },
  {
    "question": "to prove",
    "correct": "unter Beweis stellen",
    "choices": [
      "unter Beweis stellen",
      "tatkräftig",
      "feig, feige",
      "der Kundenberater"
    ]
  },
  {
    "question": "payoff,&nbsp; settlement of an account",
    "correct": "die Abrechnung",
    "choices": [
      "die Abrechnung",
      "ein Stein vom Herzen fallen",
      "sich&nbsp;etwas&nbsp;gönnen &nbsp;",
      "das Seebeben&nbsp;"
    ]
  },
  {
    "question": "app- for mobile devices, short for \"application\"",
    "correct": "die/das App",
    "choices": [
      "die/das App",
      "die Erwartungen übertreffen",
      "die Runde&nbsp;",
      "am falschen Platz sparen"
    ]
  },
  {
    "question": "use",
    "correct": "die Benutzung",
    "choices": [
      "kommunizieren",
      "großflächig",
      "die Benutzung",
      "das&nbsp;Kalbskotelett"
    ]
  },
  {
    "question": "all-inclusive price,&nbsp;flat rate",
    "correct": "die Pauschale",
    "choices": [
      "die Verlobung",
      "künstlich beatmen",
      "die Pauschale",
      "der Brauch"
    ]
  },
  {
    "question": "to register",
    "correct": "registrieren",
    "choices": [
      "der Tennisturnier",
      "finanzschwach",
      "registrieren",
      "die Institution"
    ]
  },
  {
    "question": "in question, regarding,&nbsp;respective",
    "correct": "betreffend",
    "choices": [
      "die Aue",
      "informativ",
      "die Bestellung",
      "betreffend"
    ]
  },
  {
    "question": "commercial",
    "correct": "kommerziell",
    "choices": [
      "aufführen",
      "eine allergische Reaktion auslösen",
      "kommerziell",
      "um Futter betteln&nbsp;"
    ]
  },
  {
    "question": "the difference is ...",
    "correct": "der Unterschied besteht in ...",
    "choices": [
      "einen Antrag&nbsp;bewilligen/einreichen/stellen",
      "der Unterschied besteht in ...",
      "im Weg stehen",
      "Person mittleren Alters"
    ]
  },
  {
    "question": "It is obvious that",
    "correct": "es liegt nahe, dass",
    "choices": [
      "das Deckblatt",
      "das Jugendgerichtsgesetz",
      "zumutbar",
      "es liegt nahe, dass"
    ]
  },
  {
    "question": "to take something into consideration",
    "correct": "in Betracht ziehen",
    "choices": [
      "stationär aufnehmen",
      "in Betracht ziehen",
      "die Akupunktur",
      "um Futter betteln&nbsp;"
    ]
  },
  {
    "question": "distraction",
    "correct": "die Ablenkung",
    "choices": [
      "der Steuerbescheid",
      "alle Erwartungen übertroffen",
      "die Haftstrafe",
      "die Ablenkung"
    ]
  },
  {
    "question": "hands-free speaking system",
    "correct": "die Freisprechanlage",
    "choices": [
      "der Lebensstandard",
      "die Freisprechanlage",
      "die Einzahlungsquittung",
      "sich nahestehen"
    ]
  },
  {
    "question": "neckerchief,&nbsp;scarf",
    "correct": "das Halstuch",
    "choices": [
      "das Halstuch",
      "die Überschwemmung",
      "die Hülsenfrucht",
      "die Modeboutique"
    ]
  },
  {
    "question": "earphone",
    "correct": "der Kopfhörer",
    "choices": [
      "der Greis",
      "zugutekommen",
      "der Zwang",
      "der Kopfhörer"
    ]
  },
  {
    "question": "local traffic",
    "correct": "der Nahverkehr",
    "choices": [
      "die Telearbeit",
      "der Nahverkehr",
      "auf die Sprünge helfen",
      "Kosten berechnen"
    ]
  },
  {
    "question": "draft",
    "correct": "die Zugluft",
    "choices": [
      "die Zugluft",
      "der Meridian",
      "eine Verlobung aufheben",
      "die Todesanzeige"
    ]
  },
  {
    "question": "to be aware",
    "correct": "sich bewusst sein",
    "choices": [
      "sich bewusst sein",
      "die Abtragung",
      "gernhaben",
      "die Währungspolitik"
    ]
  },
  {
    "question": "to allow oneself something",
    "correct": "sich&nbsp;etwas&nbsp;gönnen &nbsp;",
    "choices": [
      "die Rückmeldung&nbsp;",
      "sich&nbsp;etwas&nbsp;gönnen &nbsp;",
      "erfolgversprechend",
      "die Beschwerden"
    ]
  },
  {
    "question": "prevent",
    "correct": "vorbeugen",
    "choices": [
      "vorbeugen",
      "die Instandhaltung",
      "ein Auge zudrücken",
      "das Thunfischsteak"
    ]
  },
  {
    "question": "proven",
    "correct": "bewährt",
    "choices": [
      "bewährt",
      "die Flutwelle&nbsp;",
      "äußerer, äußere, äußeres",
      "umso mehr"
    ]
  },
  {
    "question": "save in the wrong place",
    "correct": "am falschen Platz sparen",
    "choices": [
      "am falschen Platz sparen",
      "der Sprachnachweis",
      "unter einen Hut bringen",
      "diensthabend"
    ]
  },
  {
    "question": "be worth gold",
    "correct": "Gold wert sein",
    "choices": [
      "der Rekord&nbsp;",
      "Gold wert sein",
      "unter einen Hut bringen",
      "der Küstenschutz"
    ]
  },
  {
    "question": "assignment abroad",
    "correct": "der Auslandseinsatz",
    "choices": [
      "prognostizieren",
      "zufällig",
      "der Auslandseinsatz",
      "die Anwendung"
    ]
  },
  {
    "question": "business trip",
    "correct": "die Dienstreise",
    "choices": [
      "die Eiche&nbsp;",
      "gasförmig",
      "die Lebenskosten",
      "die Dienstreise"
    ]
  },
  {
    "question": "length of the trip,&nbsp;ride time",
    "correct": "die Fahrzeit",
    "choices": [
      "die Sechziger",
      "der Pluspunkt",
      "ein ziehender/pochender/stechender Schmerz",
      "die Fahrzeit"
    ]
  },
  {
    "question": "be dependant on",
    "correct": "angewiesen sein",
    "choices": [
      "angewiesen sein",
      "die Ausschau&nbsp;",
      "zu kurz kommen",
      "die Wendung"
    ]
  },
  {
    "question": "limited",
    "correct": "eingeschränkt",
    "choices": [
      "eingeschränkt",
      "der Ramsch",
      "fällen",
      "das Hauptproblem"
    ]
  },
  {
    "question": "active",
    "correct": "rege",
    "choices": [
      "das Gulasch",
      "rege",
      "abtauchen",
      "das Geld liegt auf der Straße"
    ]
  },
  {
    "question": "to shoulder something,&nbsp;undertake",
    "correct": "auf sich nehmen",
    "choices": [
      "die Weltausstellung",
      "auf sich nehmen",
      "der Ackerbau",
      "abschließend"
    ]
  },
  {
    "question": "lead long-distance relationship",
    "correct": "eine Fernbeziehung führen",
    "choices": [
      "beharren auf",
      "der Einzelhandel",
      "enthält Spuren von ...",
      "eine Fernbeziehung führen"
    ]
  },
  {
    "question": "semester abroad",
    "correct": "das Auslandssemester",
    "choices": [
      "das Auslandssemester",
      "die Einzahlungsquittung",
      "die Salami",
      "die Rechtsprechung"
    ]
  }
];