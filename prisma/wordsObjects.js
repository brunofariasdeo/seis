const wordsObjects = [
  {
    word: "aabora",
    eligible: false,
  },
  {
    word: "ababil",
    eligible: false,
  },
  {
    word: "ababuá",
    eligible: false,
  },
  {
    word: "Abaçai",
    eligible: false,
  },
  {
    word: "abacaí",
    eligible: false,
  },
  {
    word: "abaçaí",
    eligible: false,
  },
  {
    word: "ábacos",
    eligible: false,
  },
  {
    word: "abacto",
    eligible: false,
  },
  {
    word: "abacur",
    eligible: false,
  },
  {
    word: "abadão",
    eligible: false,
  },
  {
    word: "abadar",
    eligible: false,
  },
  {
    word: "abadim",
    eligible: false,
  },
  {
    word: "abadir",
    eligible: false,
  },
  {
    word: "abadom",
    eligible: false,
  },
  {
    word: "abaeté",
    eligible: false,
  },
  {
    word: "abaetê",
    eligible: false,
  },
  {
    word: "abafar",
    eligible: true,
  },
  {
    word: "abafos",
    eligible: false,
  },
  {
    word: "abagos",
    eligible: false,
  },
  {
    word: "abagum",
    eligible: false,
  },
  {
    word: "Abaíra",
    eligible: false,
  },
  {
    word: "abaité",
    eligible: false,
  },
  {
    word: "abaixa",
    eligible: false,
  },
  {
    word: "abaixo",
    eligible: true,
  },
  {
    word: "abajás",
    eligible: false,
  },
  {
    word: "abajur",
    eligible: true,
  },
  {
    word: "abalar",
    eligible: true,
  },
  {
    word: "abalaú",
    eligible: false,
  },
  {
    word: "abalos",
    eligible: false,
  },
  {
    word: "abanão",
    eligible: false,
  },
  {
    word: "abanar",
    eligible: true,
  },
  {
    word: "abanés",
    eligible: false,
  },
  {
    word: "abaneu",
    eligible: false,
  },
  {
    word: "abanos",
    eligible: false,
  },
  {
    word: "abarém",
    eligible: false,
  },
  {
    word: "abarés",
    eligible: false,
  },
  {
    word: "abases",
    eligible: false,
  },
  {
    word: "abasgo",
    eligible: false,
  },
  {
    word: "abasia",
    eligible: false,
  },
  {
    word: "abassi",
    eligible: false,
  },
  {
    word: "abatão",
    eligible: false,
  },
  {
    word: "Abatiá",
    eligible: false,
  },
  {
    word: "abatis",
    eligible: false,
  },
  {
    word: "abávio",
    eligible: false,
  },
  {
    word: "abcári",
    eligible: false,
  },
  {
    word: "abdala",
    eligible: false,
  },
  {
    word: "abdalá",
    eligible: false,
  },
  {
    word: "abdali",
    eligible: false,
  },
  {
    word: "Abdeel",
    eligible: false,
  },
  {
    word: "abdero",
    eligible: false,
  },
  {
    word: "Abdias",
    eligible: false,
  },
  {
    word: "Abdiel",
    eligible: false,
  },
  {
    word: "abdita",
    eligible: false,
  },
  {
    word: "ábdito",
    eligible: false,
  },
  {
    word: "abdome",
    eligible: true,
  },
  {
    word: "abdude",
    eligible: false,
  },
  {
    word: "abduto",
    eligible: false,
  },
  {
    word: "abecar",
    eligible: false,
  },
  {
    word: "abecer",
    eligible: false,
  },
  {
    word: "abedal",
    eligible: false,
  },
  {
    word: "abegão",
    eligible: false,
  },
  {
    word: "abegoa",
    eligible: false,
  },
  {
    word: "abelha",
    eligible: true,
  },
  {
    word: "abelim",
    eligible: false,
  },
  {
    word: "abenuz",
    eligible: false,
  },
  {
    word: "abeono",
    eligible: false,
  },
  {
    word: "aberas",
    eligible: false,
  },
  {
    word: "aberém",
    eligible: false,
  },
  {
    word: "aberta",
    eligible: true,
  },
  {
    word: "aberto",
    eligible: true,
  },
  {
    word: "abeses",
    eligible: false,
  },
  {
    word: "abesir",
    eligible: false,
  },
  {
    word: "abespa",
    eligible: false,
  },
  {
    word: "abessi",
    eligible: false,
  },
  {
    word: "abetos",
    eligible: false,
  },
  {
    word: "abexim",
    eligible: false,
  },
  {
    word: "abiano",
    eligible: false,
  },
  {
    word: "abieto",
    eligible: false,
  },
  {
    word: "abígeo",
    eligible: false,
  },
  {
    word: "abiiba",
    eligible: false,
  },
  {
    word: "Abijão",
    eligible: false,
  },
  {
    word: "Abílio",
    eligible: false,
  },
  {
    word: "abiori",
    eligible: false,
  },
  {
    word: "abioto",
    eligible: false,
  },
  {
    word: "abipão",
    eligible: false,
  },
  {
    word: "abisca",
    eligible: false,
  },
  {
    word: "abismo",
    eligible: true,
  },
  {
    word: "abitão",
    eligible: false,
  },
  {
    word: "abiúdo",
    eligible: false,
  },
  {
    word: "abjeto",
    eligible: false,
  },
  {
    word: "ablabe",
    eligible: false,
  },
  {
    word: "ablaca",
    eligible: false,
  },
  {
    word: "ableno",
    eligible: false,
  },
  {
    word: "abluir",
    eligible: false,
  },
  {
    word: "abneto",
    eligible: false,
  },
  {
    word: "abnuir",
    eligible: false,
  },
  {
    word: "abobra",
    eligible: false,
  },
  {
    word: "abocar",
    eligible: false,
  },
  {
    word: "aboçar",
    eligible: false,
  },
  {
    word: "aboços",
    eligible: false,
  },
  {
    word: "abogão",
    eligible: false,
  },
  {
    word: "abolir",
    eligible: true,
  },
  {
    word: "abonar",
    eligible: true,
  },
  {
    word: "abonos",
    eligible: true,
  },
  {
    word: "aboral",
    eligible: false,
  },
  {
    word: "aborso",
    eligible: false,
  },
  {
    word: "aborto",
    eligible: true,
  },
  {
    word: "abouna",
    eligible: false,
  },
  {
    word: "abraão",
    eligible: false,
  },
  {
    word: "abraça",
    eligible: false,
  },
  {
    word: "abraço",
    eligible: true,
  },
  {
    word: "abraxa",
    eligible: false,
  },
  {
    word: "abrazô",
    eligible: false,
  },
  {
    word: "ábrego",
    eligible: false,
  },
  {
    word: "abrião",
    eligible: false,
  },
  {
    word: "abricó",
    eligible: false,
  },
  {
    word: "abricô",
    eligible: false,
  },
  {
    word: "abrigo",
    eligible: true,
  },
  {
    word: "abrina",
    eligible: false,
  },
  {
    word: "abrita",
    eligible: false,
  },
  {
    word: "abroba",
    eligible: false,
  },
  {
    word: "abrojo",
    eligible: false,
  },
  {
    word: "abroma",
    eligible: false,
  },
  {
    word: "Abrona",
    eligible: false,
  },
  {
    word: "abside",
    eligible: false,
  },
  {
    word: "ábsono",
    eligible: false,
  },
  {
    word: "abster",
    eligible: false,
  },
  {
    word: "abubir",
    eligible: false,
  },
  {
    word: "abuçar",
    eligible: false,
  },
  {
    word: "abugão",
    eligible: false,
  },
  {
    word: "abulia",
    eligible: false,
  },
  {
    word: "abusão",
    eligible: false,
  },
  {
    word: "abusar",
    eligible: true,
  },
  {
    word: "abusos",
    eligible: false,
  },
  {
    word: "abutre",
    eligible: true,
  },
  {
    word: "abutua",
    eligible: false,
  },
  {
    word: "abvolt",
    eligible: false,
  },
  {
    word: "acabar",
    eligible: true,
  },
  {
    word: "açacal",
    eligible: false,
  },
  {
    word: "acácia",
    eligible: false,
  },
  {
    word: "acácio",
    eligible: false,
  },
  {
    word: "açacuí",
    eligible: false,
  },
  {
    word: "acadar",
    eligible: false,
  },
  {
    word: "acádio",
    eligible: false,
  },
  {
    word: "açafra",
    eligible: false,
  },
  {
    word: "acaico",
    eligible: false,
  },
  {
    word: "acajus",
    eligible: false,
  },
  {
    word: "acalal",
    eligible: false,
  },
  {
    word: "acamar",
    eligible: false,
  },
  {
    word: "açamar",
    eligible: false,
  },
  {
    word: "acanga",
    eligible: false,
  },
  {
    word: "acange",
    eligible: false,
  },
  {
    word: "acangi",
    eligible: false,
  },
  {
    word: "acanji",
    eligible: false,
  },
  {
    word: "acanor",
    eligible: false,
  },
  {
    word: "acante",
    eligible: false,
  },
  {
    word: "acanto",
    eligible: false,
  },
  {
    word: "acaovã",
    eligible: false,
  },
  {
    word: "açapar",
    eligible: false,
  },
  {
    word: "acapno",
    eligible: false,
  },
  {
    word: "acapua",
    eligible: false,
  },
  {
    word: "acapus",
    eligible: false,
  },
  {
    word: "acaraí",
    eligible: false,
  },
  {
    word: "acarar",
    eligible: false,
  },
  {
    word: "acarás",
    eligible: false,
  },
  {
    word: "Acaraú",
    eligible: false,
  },
  {
    word: "acaraú",
    eligible: false,
  },
  {
    word: "acardo",
    eligible: false,
  },
  {
    word: "acarel",
    eligible: false,
  },
  {
    word: "acaris",
    eligible: false,
  },
  {
    word: "acarmo",
    eligible: false,
  },
  {
    word: "acarno",
    eligible: false,
  },
  {
    word: "ácaros",
    eligible: true,
  },
  {
    word: "acarpo",
    eligible: false,
  },
  {
    word: "acaste",
    eligible: false,
  },
  {
    word: "acasto",
    eligible: false,
  },
  {
    word: "acatar",
    eligible: false,
  },
  {
    word: "acatos",
    eligible: false,
  },
  {
    word: "acauai",
    eligible: false,
  },
  {
    word: "acaule",
    eligible: false,
  },
  {
    word: "acazir",
    eligible: false,
  },
  {
    word: "acebar",
    eligible: false,
  },
  {
    word: "aceche",
    eligible: false,
  },
  {
    word: "acédia",
    eligible: false,
  },
  {
    word: "Aceguá",
    eligible: false,
  },
  {
    word: "aceifa",
    eligible: false,
  },
  {
    word: "aceite",
    eligible: false,
  },
  {
    word: "aceito",
    eligible: false,
  },
  {
    word: "acejar",
    eligible: false,
  },
  {
    word: "acelca",
    eligible: false,
  },
  {
    word: "acelia",
    eligible: false,
  },
  {
    word: "acemia",
    eligible: false,
  },
  {
    word: "acenar",
    eligible: true,
  },
  {
    word: "acende",
    eligible: false,
  },
  {
    word: "acenha",
    eligible: false,
  },
  {
    word: "acenos",
    eligible: false,
  },
  {
    word: "acento",
    eligible: true,
  },
  {
    word: "aceral",
    eligible: false,
  },
  {
    word: "acerar",
    eligible: false,
  },
  {
    word: "aceria",
    eligible: false,
  },
  {
    word: "acerra",
    eligible: false,
  },
  {
    word: "acerta",
    eligible: false,
  },
  {
    word: "aceste",
    eligible: false,
  },
  {
    word: "acetar",
    eligible: false,
  },
  {
    word: "acetia",
    eligible: false,
  },
  {
    word: "achado",
    eligible: true,
  },
  {
    word: "Achila",
    eligible: false,
  },
  {
    word: "achiri",
    eligible: false,
  },
  {
    word: "achoar",
    eligible: false,
  },
  {
    word: "aciano",
    eligible: false,
  },
  {
    word: "acidar",
    eligible: false,
  },
  {
    word: "acidez",
    eligible: true,
  },
  {
    word: "acidia",
    eligible: false,
  },
  {
    word: "acídia",
    eligible: false,
  },
  {
    word: "acidol",
    eligible: false,
  },
  {
    word: "acilar",
    eligible: false,
  },
  {
    word: "Acília",
    eligible: false,
  },
  {
    word: "acilia",
    eligible: false,
  },
  {
    word: "acimar",
    eligible: false,
  },
  {
    word: "acínge",
    eligible: false,
  },
  {
    word: "aciocá",
    eligible: false,
  },
  {
    word: "Aciole",
    eligible: false,
  },
  {
    word: "Acióli",
    eligible: false,
  },
  {
    word: "aciosa",
    eligible: false,
  },
  {
    word: "acirsa",
    eligible: false,
  },
  {
    word: "acisia",
    eligible: false,
  },
  {
    word: "acismo",
    eligible: false,
  },
  {
    word: "áclado",
    eligible: false,
  },
  {
    word: "áclase",
    eligible: false,
  },
  {
    word: "acleia",
    eligible: false,
  },
  {
    word: "áclide",
    eligible: false,
  },
  {
    word: "aclido",
    eligible: false,
  },
  {
    word: "aclive",
    eligible: false,
  },
  {
    word: "aclope",
    eligible: false,
  },
  {
    word: "aclopo",
    eligible: false,
  },
  {
    word: "acmeia",
    eligible: false,
  },
  {
    word: "acmela",
    eligible: false,
  },
  {
    word: "acmena",
    eligible: false,
  },
  {
    word: "acmite",
    eligible: false,
  },
  {
    word: "acmito",
    eligible: false,
  },
  {
    word: "acneia",
    eligible: false,
  },
  {
    word: "acnemo",
    eligible: false,
  },
  {
    word: "acnide",
    eligible: false,
  },
  {
    word: "acnite",
    eligible: false,
  },
  {
    word: "acnodo",
    eligible: false,
  },
  {
    word: "acnoso",
    eligible: false,
  },
  {
    word: "açobar",
    eligible: false,
  },
  {
    word: "açodar",
    eligible: false,
  },
  {
    word: "acoela",
    eligible: false,
  },
  {
    word: "açôfar",
    eligible: false,
  },
  {
    word: "açofra",
    eligible: false,
  },
  {
    word: "açogbá",
    eligible: false,
  },
  {
    word: "acoína",
    eligible: false,
  },
  {
    word: "açoita",
    eligible: false,
  },
  {
    word: "acolaú",
    eligible: false,
  },
  {
    word: "acolia",
    eligible: false,
  },
  {
    word: "acomia",
    eligible: false,
  },
  {
    word: "aconto",
    eligible: false,
  },
  {
    word: "ácopro",
    eligible: false,
  },
  {
    word: "açorar",
    eligible: false,
  },
  {
    word: "acorda",
    eligible: false,
  },
  {
    word: "açorda",
    eligible: false,
  },
  {
    word: "acorde",
    eligible: false,
  },
  {
    word: "Acordo",
    eligible: false,
  },
  {
    word: "acordo",
    eligible: true,
  },
  {
    word: "açores",
    eligible: false,
  },
  {
    word: "acormo",
    eligible: false,
  },
  {
    word: "ácoros",
    eligible: false,
  },
  {
    word: "acosmo",
    eligible: false,
  },
  {
    word: "açouta",
    eligible: false,
  },
  {
    word: "acouti",
    eligible: false,
  },
  {
    word: "acovar",
    eligible: false,
  },
  {
    word: "acpalô",
    eligible: false,
  },
  {
    word: "ácraga",
    eligible: false,
  },
  {
    word: "acrama",
    eligible: false,
  },
  {
    word: "ácrata",
    eligible: false,
  },
  {
    word: "acrato",
    eligible: false,
  },
  {
    word: "acreia",
    eligible: false,
  },
  {
    word: "acreto",
    eligible: false,
  },
  {
    word: "ácrico",
    eligible: false,
  },
  {
    word: "ácrida",
    eligible: false,
  },
  {
    word: "ácrito",
    eligible: false,
  },
  {
    word: "ácrode",
    eligible: false,
  },
  {
    word: "ácrodo",
    eligible: false,
  },
  {
    word: "acromo",
    eligible: false,
  },
  {
    word: "ácrono",
    eligible: false,
  },
  {
    word: "acrose",
    eligible: false,
  },
  {
    word: "acteão",
    eligible: false,
  },
  {
    word: "acteia",
    eligible: false,
  },
  {
    word: "actino",
    eligible: false,
  },
  {
    word: "actite",
    eligible: false,
  },
  {
    word: "ACTRAV",
    eligible: false,
  },
  {
    word: "Açúcar",
    eligible: false,
  },
  {
    word: "açúcar",
    eligible: true,
  },
  {
    word: "acuchi",
    eligible: false,
  },
  {
    word: "açucre",
    eligible: false,
  },
  {
    word: "açudar",
    eligible: false,
  },
  {
    word: "acudir",
    eligible: true,
  },
  {
    word: "açudre",
    eligible: false,
  },
  {
    word: "açular",
    eligible: false,
  },
  {
    word: "acumão",
    eligible: false,
  },
  {
    word: "acumãs",
    eligible: false,
  },
  {
    word: "acúmen",
    eligible: false,
  },
  {
    word: "acurar",
    eligible: false,
  },
  {
    word: "Acúrio",
    eligible: false,
  },
  {
    word: "Açuruá",
    eligible: false,
  },
  {
    word: "acuruí",
    eligible: false,
  },
  {
    word: "acusar",
    eligible: true,
  },
  {
    word: "acusia",
    eligible: false,
  },
  {
    word: "acusto",
    eligible: false,
  },
  {
    word: "acutal",
    eligible: false,
  },
  {
    word: "acutez",
    eligible: false,
  },
  {
    word: "acutis",
    eligible: false,
  },
  {
    word: "acuuba",
    eligible: false,
  },
  {
    word: "adábia",
    eligible: false,
  },
  {
    word: "adágio",
    eligible: false,
  },
  {
    word: "adague",
    eligible: false,
  },
  {
    word: "adaião",
    eligible: false,
  },
  {
    word: "Adaías",
    eligible: false,
  },
  {
    word: "Adalai",
    eligible: false,
  },
  {
    word: "adalbo",
    eligible: false,
  },
  {
    word: "Adália",
    eligible: false,
  },
  {
    word: "Adalto",
    eligible: false,
  },
  {
    word: "adamar",
    eligible: false,
  },
  {
    word: "ádamas",
    eligible: false,
  },
  {
    word: "adâmeo",
    eligible: false,
  },
  {
    word: "adâmia",
    eligible: false,
  },
  {
    word: "Adamir",
    eligible: false,
  },
  {
    word: "adandu",
    eligible: false,
  },
  {
    word: "adanos",
    eligible: false,
  },
  {
    word: "ádapis",
    eligible: false,
  },
  {
    word: "adarbe",
    eligible: false,
  },
  {
    word: "adarce",
    eligible: false,
  },
  {
    word: "adarme",
    eligible: false,
  },
  {
    word: "adatis",
    eligible: false,
  },
  {
    word: "Adauto",
    eligible: false,
  },
  {
    word: "Adeano",
    eligible: false,
  },
  {
    word: "adecto",
    eligible: false,
  },
  {
    word: "adegar",
    eligible: false,
  },
  {
    word: "adeína",
    eligible: false,
  },
  {
    word: "adeiro",
    eligible: false,
  },
  {
    word: "adeito",
    eligible: false,
  },
  {
    word: "adejar",
    eligible: false,
  },
  {
    word: "adejos",
    eligible: false,
  },
  {
    word: "adelfo",
    eligible: false,
  },
  {
    word: "adelha",
    eligible: false,
  },
  {
    word: "Adélio",
    eligible: false,
  },
  {
    word: "Adelmo",
    eligible: false,
  },
  {
    word: "ademão",
    eligible: false,
  },
  {
    word: "Ademar",
    eligible: false,
  },
  {
    word: "Ademir",
    eligible: false,
  },
  {
    word: "adendo",
    eligible: true,
  },
  {
    word: "adenia",
    eligible: false,
  },
  {
    word: "adênio",
    eligible: false,
  },
  {
    word: "Adenir",
    eligible: false,
  },
  {
    word: "adepto",
    eligible: true,
  },
  {
    word: "aderar",
    eligible: false,
  },
  {
    word: "aderir",
    eligible: true,
  },
  {
    word: "aderno",
    eligible: false,
  },
  {
    word: "adesão",
    eligible: true,
  },
  {
    word: "adesol",
    eligible: false,
  },
  {
    word: "Adeval",
    eligible: false,
  },
  {
    word: "adevão",
    eligible: false,
  },
  {
    word: "adibal",
    eligible: false,
  },
  {
    word: "adição",
    eligible: true,
  },
  {
    word: "adicto",
    eligible: false,
  },
  {
    word: "adilar",
    eligible: false,
  },
  {
    word: "Adílio",
    eligible: false,
  },
  {
    word: "adinho",
    eligible: false,
  },
  {
    word: "adipol",
    eligible: false,
  },
  {
    word: "adisco",
    eligible: false,
  },
  {
    word: "adísio",
    eligible: false,
  },
  {
    word: "adítia",
    eligible: false,
  },
  {
    word: "aditor",
    eligible: false,
  },
  {
    word: "adival",
    eligible: false,
  },
  {
    word: "adjeto",
    eligible: false,
  },
  {
    word: "Admeto",
    eligible: false,
  },
  {
    word: "adnato",
    eligible: false,
  },
  {
    word: "adnexo",
    eligible: false,
  },
  {
    word: "adnome",
    eligible: false,
  },
  {
    word: "adoção",
    eligible: true,
  },
  {
    word: "Adolar",
    eligible: false,
  },
  {
    word: "Adolfo",
    eligible: false,
  },
  {
    word: "adólio",
    eligible: false,
  },
  {
    word: "adonai",
    eligible: false,
  },
  {
    word: "adonar",
    eligible: false,
  },
  {
    word: "adôneo",
    eligible: false,
  },
  {
    word: "adônio",
    eligible: false,
  },
  {
    word: "adônis",
    eligible: false,
  },
  {
    word: "adoral",
    eligible: false,
  },
  {
    word: "Adorão",
    eligible: false,
  },
  {
    word: "adorar",
    eligible: false,
  },
  {
    word: "adório",
    eligible: false,
  },
  {
    word: "adorno",
    eligible: true,
  },
  {
    word: "adotar",
    eligible: true,
  },
  {
    word: "adrede",
    eligible: false,
  },
  {
    word: "Adrião",
    eligible: false,
  },
  {
    word: "Adriel",
    eligible: false,
  },
  {
    word: "adrina",
    eligible: false,
  },
  {
    word: "adubar",
    eligible: false,
  },
  {
    word: "adúbio",
    eligible: false,
  },
  {
    word: "adução",
    eligible: false,
  },
  {
    word: "aducir",
    eligible: false,
  },
  {
    word: "aduela",
    eligible: false,
  },
  {
    word: "adufar",
    eligible: false,
  },
  {
    word: "ADUFRJ",
    eligible: false,
  },
  {
    word: "adulão",
    eligible: false,
  },
  {
    word: "adular",
    eligible: false,
  },
  {
    word: "Adulfo",
    eligible: false,
  },
  {
    word: "Adúlio",
    eligible: false,
  },
  {
    word: "adulto",
    eligible: true,
  },
  {
    word: "adumar",
    eligible: false,
  },
  {
    word: "Adumim",
    eligible: false,
  },
  {
    word: "adunar",
    eligible: false,
  },
  {
    word: "Adurão",
    eligible: false,
  },
  {
    word: "adurir",
    eligible: false,
  },
  {
    word: "adurol",
    eligible: false,
  },
  {
    word: "adusto",
    eligible: false,
  },
  {
    word: "adutor",
    eligible: false,
  },
  {
    word: "ádvena",
    eligible: false,
  },
  {
    word: "advier",
    eligible: false,
  },
  {
    word: "adzuki",
    eligible: false,
  },
  {
    word: "Aedona",
    eligible: false,
  },
  {
    word: "aerado",
    eligible: false,
  },
  {
    word: "aéreos",
    eligible: true,
  },
  {
    word: "aerita",
    eligible: false,
  },
  {
    word: "Aeropa",
    eligible: false,
  },
  {
    word: "aético",
    eligible: false,
  },
  {
    word: "aetoma",
    eligible: false,
  },
  {
    word: "afacia",
    eligible: false,
  },
  {
    word: "afagar",
    eligible: false,
  },
  {
    word: "afamar",
    eligible: false,
  },
  {
    word: "afania",
    eligible: false,
  },
  {
    word: "afarar",
    eligible: false,
  },
  {
    word: "afasia",
    eligible: false,
  },
  {
    word: "afável",
    eligible: true,
  },
  {
    word: "afazer",
    eligible: false,
  },
  {
    word: "afeção",
    eligible: false,
  },
  {
    word: "afegão",
    eligible: false,
  },
  {
    word: "afegar",
    eligible: false,
  },
  {
    word: "afeiar",
    eligible: false,
  },
  {
    word: "afélio",
    eligible: false,
  },
  {
    word: "afemia",
    eligible: false,
  },
  {
    word: "Afeque",
    eligible: false,
  },
  {
    word: "aferar",
    eligible: false,
  },
  {
    word: "afesia",
    eligible: false,
  },
  {
    word: "afetal",
    eligible: false,
  },
  {
    word: "afetar",
    eligible: true,
  },
  {
    word: "afgani",
    eligible: false,
  },
  {
    word: "afídeo",
    eligible: false,
  },
  {
    word: "afídio",
    eligible: false,
  },
  {
    word: "afifar",
    eligible: false,
  },
  {
    word: "afilos",
    eligible: false,
  },
  {
    word: "afinal",
    eligible: true,
  },
  {
    word: "afinar",
    eligible: true,
  },
  {
    word: "afixal",
    eligible: false,
  },
  {
    word: "afixar",
    eligible: false,
  },
  {
    word: "afixos",
    eligible: false,
  },
  {
    word: "aflato",
    eligible: false,
  },
  {
    word: "afleia",
    eligible: false,
  },
  {
    word: "aflita",
    eligible: true,
  },
  {
    word: "aflito",
    eligible: true,
  },
  {
    word: "afocal",
    eligible: false,
  },
  {
    word: "afodal",
    eligible: false,
  },
  {
    word: "afódio",
    eligible: false,
  },
  {
    word: "afofiê",
    eligible: false,
  },
  {
    word: "afogar",
    eligible: true,
  },
  {
    word: "afogos",
    eligible: false,
  },
  {
    word: "afolar",
    eligible: false,
  },
  {
    word: "afonjá",
    eligible: false,
  },
  {
    word: "afonso",
    eligible: false,
  },
  {
    word: "aforar",
    eligible: false,
  },
  {
    word: "aforia",
    eligible: false,
  },
  {
    word: "aforme",
    eligible: false,
  },
  {
    word: "África",
    eligible: false,
  },
  {
    word: "áfrica",
    eligible: false,
  },
  {
    word: "áfrico",
    eligible: false,
  },
  {
    word: "afrite",
    eligible: false,
  },
  {
    word: "afrito",
    eligible: false,
  },
  {
    word: "afrode",
    eligible: false,
  },
  {
    word: "afrodo",
    eligible: false,
  },
  {
    word: "Afsana",
    eligible: false,
  },
  {
    word: "aftito",
    eligible: false,
  },
  {
    word: "áftono",
    eligible: false,
  },
  {
    word: "aftose",
    eligible: false,
  },
  {
    word: "aftoso",
    eligible: false,
  },
  {
    word: "afumar",
    eligible: false,
  },
  {
    word: "afusal",
    eligible: false,
  },
  {
    word: "afusão",
    eligible: false,
  },
  {
    word: "afusel",
    eligible: false,
  },
  {
    word: "agábio",
    eligible: false,
  },
  {
    word: "agácar",
    eligible: false,
  },
  {
    word: "agácia",
    eligible: false,
  },
  {
    word: "agágio",
    eligible: false,
  },
  {
    word: "Agague",
    eligible: false,
  },
  {
    word: "agaíte",
    eligible: false,
  },
  {
    word: "agaíto",
    eligible: false,
  },
  {
    word: "agália",
    eligible: false,
  },
  {
    word: "agalma",
    eligible: false,
  },
  {
    word: "agamia",
    eligible: false,
  },
  {
    word: "aganai",
    eligible: false,
  },
  {
    word: "aganão",
    eligible: false,
  },
  {
    word: "aganar",
    eligible: false,
  },
  {
    word: "aganju",
    eligible: false,
  },
  {
    word: "Agápio",
    eligible: false,
  },
  {
    word: "Agápis",
    eligible: false,
  },
  {
    word: "agáreo",
    eligible: false,
  },
  {
    word: "agária",
    eligible: false,
  },
  {
    word: "agarol",
    eligible: false,
  },
  {
    word: "agarra",
    eligible: false,
  },
  {
    word: "agarum",
    eligible: false,
  },
  {
    word: "agatai",
    eligible: false,
  },
  {
    word: "Agatão",
    eligible: false,
  },
  {
    word: "agáteo",
    eligible: false,
  },
  {
    word: "agátia",
    eligible: false,
  },
  {
    word: "ágatis",
    eligible: false,
  },
  {
    word: "agavio",
    eligible: false,
  },
  {
    word: "agazar",
    eligible: false,
  },
  {
    word: "agedra",
    eligible: false,
  },
  {
    word: "Agelau",
    eligible: false,
  },
  {
    word: "ageleu",
    eligible: false,
  },
  {
    word: "agênio",
    eligible: false,
  },
  {
    word: "agenor",
    eligible: false,
  },
  {
    word: "agente",
    eligible: true,
  },
  {
    word: "ageuso",
    eligible: false,
  },
  {
    word: "Agildo",
    eligible: false,
  },
  {
    word: "Agílio",
    eligible: false,
  },
  {
    word: "agínea",
    eligible: false,
  },
  {
    word: "aginia",
    eligible: false,
  },
  {
    word: "agirmo",
    eligible: false,
  },
  {
    word: "agirta",
    eligible: false,
  },
  {
    word: "agitar",
    eligible: true,
  },
  {
    word: "aglaia",
    eligible: false,
  },
  {
    word: "agleno",
    eligible: false,
  },
  {
    word: "áglifo",
    eligible: false,
  },
  {
    word: "agmens",
    eligible: false,
  },
  {
    word: "agnado",
    eligible: false,
  },
  {
    word: "agnato",
    eligible: false,
  },
  {
    word: "ágnato",
    eligible: false,
  },
  {
    word: "agnelo",
    eligible: false,
  },
  {
    word: "Agnese",
    eligible: false,
  },
  {
    word: "agnino",
    eligible: false,
  },
  {
    word: "agnoia",
    eligible: false,
  },
  {
    word: "Agnolo",
    eligible: false,
  },
  {
    word: "agnome",
    eligible: false,
  },
  {
    word: "agoguê",
    eligible: false,
  },
  {
    word: "agonal",
    eligible: false,
  },
  {
    word: "agonfo",
    eligible: false,
  },
  {
    word: "agonia",
    eligible: true,
  },
  {
    word: "agorim",
    eligible: false,
  },
  {
    word: "Agosto",
    eligible: false,
  },
  {
    word: "agosto",
    eligible: true,
  },
  {
    word: "agotar",
    eligible: false,
  },
  {
    word: "agraço",
    eligible: false,
  },
  {
    word: "ágrafo",
    eligible: false,
  },
  {
    word: "agravo",
    eligible: false,
  },
  {
    word: "agrear",
    eligible: false,
  },
  {
    word: "agrial",
    eligible: false,
  },
  {
    word: "agrião",
    eligible: false,
  },
  {
    word: "ágrico",
    eligible: false,
  },
  {
    word: "ágrion",
    eligible: false,
  },
  {
    word: "agripa",
    eligible: false,
  },
  {
    word: "agroso",
    eligible: false,
  },
  {
    word: "ágrote",
    eligible: false,
  },
  {
    word: "agrume",
    eligible: false,
  },
  {
    word: "agrura",
    eligible: false,
  },
  {
    word: "aguaçu",
    eligible: false,
  },
  {
    word: "aguada",
    eligible: false,
  },
  {
    word: "aguado",
    eligible: true,
  },
  {
    word: "aguaim",
    eligible: false,
  },
  {
    word: "aguaís",
    eligible: false,
  },
  {
    word: "aguapá",
    eligible: false,
  },
  {
    word: "aguapé",
    eligible: false,
  },
  {
    word: "aguará",
    eligible: false,
  },
  {
    word: "aguatá",
    eligible: false,
  },
  {
    word: "aguçar",
    eligible: true,
  },
  {
    word: "agudar",
    eligible: false,
  },
  {
    word: "agudas",
    eligible: false,
  },
  {
    word: "agudez",
    eligible: false,
  },
  {
    word: "agúdia",
    eligible: false,
  },
  {
    word: "agudos",
    eligible: false,
  },
  {
    word: "Águeda",
    eligible: false,
  },
  {
    word: "agueré",
    eligible: false,
  },
  {
    word: "aguerê",
    eligible: false,
  },
  {
    word: "Aguiar",
    eligible: false,
  },
  {
    word: "águias",
    eligible: true,
  },
  {
    word: "aguila",
    eligible: false,
  },
  {
    word: "águila",
    eligible: false,
  },
  {
    word: "agulha",
    eligible: true,
  },
  {
    word: "aiapuá",
    eligible: false,
  },
  {
    word: "aicaná",
    eligible: false,
  },
  {
    word: "aicanã",
    eligible: false,
  },
  {
    word: "aicuna",
    eligible: false,
  },
  {
    word: "aiênia",
    eligible: false,
  },
  {
    word: "aigoto",
    eligible: false,
  },
  {
    word: "aijuba",
    eligible: false,
  },
  {
    word: "aijuna",
    eligible: false,
  },
  {
    word: "aikido",
    eligible: false,
  },
  {
    word: "ailila",
    eligible: false,
  },
  {
    word: "Aílson",
    eligible: false,
  },
  {
    word: "Aílton",
    eligible: false,
  },
  {
    word: "Ailude",
    eligible: false,
  },
  {
    word: "ailuro",
    eligible: false,
  },
  {
    word: "Aimaás",
    eligible: false,
  },
  {
    word: "aimara",
    eligible: false,
  },
  {
    word: "aimará",
    eligible: false,
  },
  {
    word: "aimoré",
    eligible: false,
  },
  {
    word: "aimuru",
    eligible: false,
  },
  {
    word: "ainhum",
    eligible: false,
  },
  {
    word: "aipiri",
    eligible: false,
  },
  {
    word: "airela",
    eligible: false,
  },
  {
    word: "airini",
    eligible: false,
  },
  {
    word: "airiri",
    eligible: false,
  },
  {
    word: "airoba",
    eligible: false,
  },
  {
    word: "airoga",
    eligible: false,
  },
  {
    word: "airoso",
    eligible: false,
  },
  {
    word: "Aírton",
    eligible: false,
  },
  {
    word: "Airumã",
    eligible: false,
  },
  {
    word: "airute",
    eligible: false,
  },
  {
    word: "aislar",
    eligible: false,
  },
  {
    word: "aitona",
    eligible: false,
  },
  {
    word: "aiuaba",
    eligible: false,
  },
  {
    word: "aiuara",
    eligible: false,
  },
  {
    word: "aiunar",
    eligible: false,
  },
  {
    word: "aivaca",
    eligible: false,
  },
  {
    word: "aivado",
    eligible: false,
  },
  {
    word: "aiveca",
    eligible: false,
  },
  {
    word: "aizóon",
    eligible: false,
  },
  {
    word: "Ajalom",
    eligible: false,
  },
  {
    word: "ajaraí",
    eligible: false,
  },
  {
    word: "ajedra",
    eligible: false,
  },
  {
    word: "ajenil",
    eligible: false,
  },
  {
    word: "ajimez",
    eligible: false,
  },
  {
    word: "ajoiar",
    eligible: false,
  },
  {
    word: "ajôvea",
    eligible: false,
  },
  {
    word: "ajuaga",
    eligible: false,
  },
  {
    word: "ajudar",
    eligible: true,
  },
  {
    word: "ajugea",
    eligible: false,
  },
  {
    word: "ajular",
    eligible: false,
  },
  {
    word: "ajunta",
    eligible: false,
  },
  {
    word: "ajuruí",
    eligible: false,
  },
  {
    word: "alabar",
    eligible: false,
  },
  {
    word: "alação",
    eligible: false,
  },
  {
    word: "alacil",
    eligible: false,
  },
  {
    word: "alacir",
    eligible: false,
  },
  {
    word: "alaçor",
    eligible: false,
  },
  {
    word: "alacrá",
    eligible: false,
  },
  {
    word: "alacre",
    eligible: false,
  },
  {
    word: "álacre",
    eligible: false,
  },
  {
    word: "Aladim",
    eligible: false,
  },
  {
    word: "alados",
    eligible: true,
  },
  {
    word: "alaela",
    eligible: false,
  },
  {
    word: "alafia",
    eligible: false,
  },
  {
    word: "alagar",
    eligible: true,
  },
  {
    word: "alagem",
    eligible: false,
  },
  {
    word: "Alaíde",
    eligible: false,
  },
  {
    word: "Alaine",
    eligible: false,
  },
  {
    word: "alália",
    eligible: false,
  },
  {
    word: "alamal",
    eligible: false,
  },
  {
    word: "alamão",
    eligible: false,
  },
  {
    word: "alamar",
    eligible: false,
  },
  {
    word: "alamba",
    eligible: false,
  },
  {
    word: "alamia",
    eligible: false,
  },
  {
    word: "alamim",
    eligible: false,
  },
  {
    word: "alamoa",
    eligible: false,
  },
  {
    word: "álamos",
    eligible: false,
  },
  {
    word: "alance",
    eligible: false,
  },
  {
    word: "alânia",
    eligible: false,
  },
  {
    word: "Alanis",
    eligible: false,
  },
  {
    word: "alanto",
    eligible: false,
  },
  {
    word: "alapar",
    eligible: false,
  },
  {
    word: "alapte",
    eligible: false,
  },
  {
    word: "alapto",
    eligible: false,
  },
  {
    word: "alarar",
    eligible: false,
  },
  {
    word: "alarde",
    eligible: true,
  },
  {
    word: "alariz",
    eligible: false,
  },
  {
    word: "alarme",
    eligible: true,
  },
  {
    word: "alaruá",
    eligible: false,
  },
  {
    word: "alarve",
    eligible: false,
  },
  {
    word: "Alasca",
    eligible: false,
  },
  {
    word: "alasca",
    eligible: false,
  },
  {
    word: "alásia",
    eligible: false,
  },
  {
    word: "alauda",
    eligible: false,
  },
  {
    word: "alaúde",
    eligible: false,
  },
  {
    word: "alavão",
    eligible: false,
  },
  {
    word: "alavês",
    eligible: false,
  },
  {
    word: "alazão",
    eligible: false,
  },
  {
    word: "alazar",
    eligible: false,
  },
  {
    word: "albalã",
    eligible: false,
  },
  {
    word: "albano",
    eligible: false,
  },
  {
    word: "albará",
    eligible: false,
  },
  {
    word: "albarã",
    eligible: false,
  },
  {
    word: "albato",
    eligible: false,
  },
  {
    word: "albedo",
    eligible: false,
  },
  {
    word: "albeno",
    eligible: false,
  },
  {
    word: "Albert",
    eligible: false,
  },
  {
    word: "albião",
    eligible: false,
  },
  {
    word: "álbico",
    eligible: false,
  },
  {
    word: "álbido",
    eligible: false,
  },
  {
    word: "Albine",
    eligible: false,
  },
  {
    word: "albino",
    eligible: false,
  },
  {
    word: "Albion",
    eligible: false,
  },
  {
    word: "albite",
    eligible: false,
  },
  {
    word: "albito",
    eligible: false,
  },
  {
    word: "albizo",
    eligible: false,
  },
  {
    word: "alboio",
    eligible: false,
  },
  {
    word: "albuco",
    eligible: false,
  },
  {
    word: "albugo",
    eligible: false,
  },
  {
    word: "álbulo",
    eligible: false,
  },
  {
    word: "albume",
    eligible: false,
  },
  {
    word: "alcabó",
    eligible: false,
  },
  {
    word: "alcaçu",
    eligible: false,
  },
  {
    word: "alcade",
    eligible: false,
  },
  {
    word: "Alcalá",
    eligible: false,
  },
  {
    word: "alcala",
    eligible: false,
  },
  {
    word: "álcali",
    eligible: false,
  },
  {
    word: "alcano",
    eligible: false,
  },
  {
    word: "alcaxa",
    eligible: false,
  },
  {
    word: "alcear",
    eligible: false,
  },
  {
    word: "alcedo",
    eligible: false,
  },
  {
    word: "Alceni",
    eligible: false,
  },
  {
    word: "alceno",
    eligible: false,
  },
  {
    word: "alcião",
    eligible: false,
  },
  {
    word: "álcida",
    eligible: false,
  },
  {
    word: "alcide",
    eligible: false,
  },
  {
    word: "Alcido",
    eligible: false,
  },
  {
    word: "Álcimo",
    eligible: false,
  },
  {
    word: "alcino",
    eligible: false,
  },
  {
    word: "álcion",
    eligible: false,
  },
  {
    word: "Alcipe",
    eligible: false,
  },
  {
    word: "alcoba",
    eligible: false,
  },
  {
    word: "álcool",
    eligible: true,
  },
  {
    word: "alcope",
    eligible: false,
  },
  {
    word: "alcopo",
    eligible: false,
  },
  {
    word: "alcova",
    eligible: false,
  },
  {
    word: "alcuza",
    eligible: false,
  },
  {
    word: "Aldair",
    eligible: false,
  },
  {
    word: "aldama",
    eligible: false,
  },
  {
    word: "aldeão",
    eligible: true,
  },
  {
    word: "aldear",
    eligible: false,
  },
  {
    word: "aldeia",
    eligible: true,
  },
  {
    word: "Aldeli",
    eligible: false,
  },
  {
    word: "Aldete",
    eligible: false,
  },
  {
    word: "Aldine",
    eligible: false,
  },
  {
    word: "aldino",
    eligible: false,
  },
  {
    word: "Aldora",
    eligible: false,
  },
  {
    word: "aldose",
    eligible: false,
  },
  {
    word: "Alécio",
    eligible: false,
  },
  {
    word: "alecto",
    eligible: false,
  },
  {
    word: "aledar",
    eligible: false,
  },
  {
    word: "alegra",
    eligible: false,
  },
  {
    word: "alegre",
    eligible: true,
  },
  {
    word: "aleguá",
    eligible: false,
  },
  {
    word: "aleive",
    eligible: false,
  },
  {
    word: "Aleixo",
    eligible: false,
  },
  {
    word: "Alemão",
    eligible: false,
  },
  {
    word: "alemão",
    eligible: false,
  },
  {
    word: "alemãs",
    eligible: false,
  },
  {
    word: "alencó",
    eligible: false,
  },
  {
    word: "Alenis",
    eligible: false,
  },
  {
    word: "alento",
    eligible: false,
  },
  {
    word: "aleose",
    eligible: false,
  },
  {
    word: "alerce",
    eligible: false,
  },
  {
    word: "aletre",
    eligible: false,
  },
  {
    word: "aleúte",
    eligible: false,
  },
  {
    word: "alevim",
    eligible: false,
  },
  {
    word: "alexia",
    eligible: false,
  },
  {
    word: "Aléxis",
    eligible: false,
  },
  {
    word: "alfaça",
    eligible: false,
  },
  {
    word: "alface",
    eligible: true,
  },
  {
    word: "alfaco",
    eligible: false,
  },
  {
    word: "alfafa",
    eligible: false,
  },
  {
    word: "alfama",
    eligible: false,
  },
  {
    word: "alfava",
    eligible: false,
  },
  {
    word: "alfeça",
    eligible: false,
  },
  {
    word: "alfece",
    eligible: false,
  },
  {
    word: "alfeia",
    eligible: false,
  },
  {
    word: "alfeni",
    eligible: false,
  },
  {
    word: "Alfons",
    eligible: false,
  },
  {
    word: "alfora",
    eligible: false,
  },
  {
    word: "alfose",
    eligible: false,
  },
  {
    word: "alfova",
    eligible: false,
  },
  {
    word: "alfuje",
    eligible: false,
  },
  {
    word: "alfuru",
    eligible: false,
  },
  {
    word: "algaço",
    eligible: false,
  },
  {
    word: "algaza",
    eligible: false,
  },
  {
    word: "algazu",
    eligible: false,
  },
  {
    word: "algedi",
    eligible: false,
  },
  {
    word: "algedo",
    eligible: false,
  },
  {
    word: "algela",
    eligible: false,
  },
  {
    word: "algibe",
    eligible: false,
  },
  {
    word: "algico",
    eligible: false,
  },
  {
    word: "álgico",
    eligible: false,
  },
  {
    word: "álgido",
    eligible: false,
  },
  {
    word: "algina",
    eligible: false,
  },
  {
    word: "algira",
    eligible: false,
  },
  {
    word: "algoio",
    eligible: false,
  },
  {
    word: "algose",
    eligible: false,
  },
  {
    word: "algoso",
    eligible: false,
  },
  {
    word: "algual",
    eligible: false,
  },
  {
    word: "alguém",
    eligible: true,
  },
  {
    word: "alhada",
    eligible: false,
  },
  {
    word: "alhage",
    eligible: false,
  },
  {
    word: "alhear",
    eligible: false,
  },
  {
    word: "alheio",
    eligible: true,
  },
  {
    word: "alhela",
    eligible: false,
  },
  {
    word: "Alheli",
    eligible: false,
  },
  {
    word: "Alhena",
    eligible: false,
  },
  {
    word: "alhete",
    eligible: false,
  },
  {
    word: "alheto",
    eligible: false,
  },
  {
    word: "alhore",
    eligible: false,
  },
  {
    word: "aliado",
    eligible: true,
  },
  {
    word: "aliate",
    eligible: false,
  },
  {
    word: "aliaxé",
    eligible: false,
  },
  {
    word: "alíbil",
    eligible: false,
  },
  {
    word: "alical",
    eligible: false,
  },
  {
    word: "Alício",
    eligible: false,
  },
  {
    word: "alicuí",
    eligible: false,
  },
  {
    word: "alidor",
    eligible: false,
  },
  {
    word: "alifur",
    eligible: false,
  },
  {
    word: "aliina",
    eligible: false,
  },
  {
    word: "alijar",
    eligible: false,
  },
  {
    word: "alílio",
    eligible: false,
  },
  {
    word: "alimal",
    eligible: false,
  },
  {
    word: "alínea",
    eligible: false,
  },
  {
    word: "aliose",
    eligible: false,
  },
  {
    word: "Alípio",
    eligible: false,
  },
  {
    word: "alipto",
    eligible: false,
  },
  {
    word: "Alírio",
    eligible: false,
  },
  {
    word: "alisão",
    eligible: false,
  },
  {
    word: "alisar",
    eligible: true,
  },
  {
    word: "alíseo",
    eligible: false,
  },
  {
    word: "aliseu",
    eligible: false,
  },
  {
    word: "alísio",
    eligible: false,
  },
  {
    word: "alisso",
    eligible: false,
  },
  {
    word: "alívio",
    eligible: true,
  },
  {
    word: "alizar",
    eligible: false,
  },
  {
    word: "aljava",
    eligible: false,
  },
  {
    word: "aljube",
    eligible: false,
  },
  {
    word: "almaço",
    eligible: false,
  },
  {
    word: "Almada",
    eligible: false,
  },
  {
    word: "almada",
    eligible: false,
  },
  {
    word: "almafa",
    eligible: false,
  },
  {
    word: "almala",
    eligible: false,
  },
  {
    word: "almami",
    eligible: false,
  },
  {
    word: "almece",
    eligible: false,
  },
  {
    word: "Almeda",
    eligible: false,
  },
  {
    word: "almeia",
    eligible: false,
  },
  {
    word: "Almeno",
    eligible: false,
  },
  {
    word: "Almeta",
    eligible: false,
  },
  {
    word: "almeza",
    eligible: false,
  },
  {
    word: "almice",
    eligible: false,
  },
  {
    word: "almiço",
    eligible: false,
  },
  {
    word: "Almino",
    eligible: false,
  },
  {
    word: "almino",
    eligible: false,
  },
  {
    word: "Almiro",
    eligible: false,
  },
  {
    word: "almoço",
    eligible: true,
  },
  {
    word: "alnedo",
    eligible: false,
  },
  {
    word: "alnico",
    eligible: false,
  },
  {
    word: "alnite",
    eligible: false,
  },
  {
    word: "alocar",
    eligible: true,
  },
  {
    word: "alódio",
    eligible: false,
  },
  {
    word: "alogia",
    eligible: false,
  },
  {
    word: "alógio",
    eligible: false,
  },
  {
    word: "aloico",
    eligible: false,
  },
  {
    word: "aloide",
    eligible: false,
  },
  {
    word: "aloína",
    eligible: false,
  },
  {
    word: "aloíte",
    eligible: false,
  },
  {
    word: "aloíto",
    eligible: false,
  },
  {
    word: "alojar",
    eligible: true,
  },
  {
    word: "alômia",
    eligible: false,
  },
  {
    word: "alonso",
    eligible: false,
  },
  {
    word: "alópia",
    eligible: false,
  },
  {
    word: "alopta",
    eligible: false,
  },
  {
    word: "Alosio",
    eligible: false,
  },
  {
    word: "alpaco",
    eligible: false,
  },
  {
    word: "alpaga",
    eligible: false,
  },
  {
    word: "alpece",
    eligible: false,
  },
  {
    word: "alpedo",
    eligible: false,
  },
  {
    word: "álpico",
    eligible: false,
  },
  {
    word: "alpina",
    eligible: false,
  },
  {
    word: "alpino",
    eligible: false,
  },
  {
    word: "alpron",
    eligible: false,
  },
  {
    word: "alrete",
    eligible: false,
  },
  {
    word: "alrune",
    eligible: false,
  },
  {
    word: "alrute",
    eligible: false,
  },
  {
    word: "alsafã",
    eligible: false,
  },
  {
    word: "álseis",
    eligible: false,
  },
  {
    word: "álsine",
    eligible: false,
  },
  {
    word: "alsino",
    eligible: false,
  },
  {
    word: "alsona",
    eligible: false,
  },
  {
    word: "Altair",
    eligible: false,
  },
  {
    word: "altear",
    eligible: false,
  },
  {
    word: "alteia",
    eligible: false,
  },
  {
    word: "alteza",
    eligible: true,
  },
  {
    word: "altica",
    eligible: false,
  },
  {
    word: "áltico",
    eligible: false,
  },
  {
    word: "altino",
    eligible: false,
  },
  {
    word: "altisa",
    eligible: false,
  },
  {
    word: "altosa",
    eligible: false,
  },
  {
    word: "altriz",
    eligible: false,
  },
  {
    word: "altura",
    eligible: true,
  },
  {
    word: "aluato",
    eligible: false,
  },
  {
    word: "aluchi",
    eligible: false,
  },
  {
    word: "aludel",
    eligible: false,
  },
  {
    word: "aludir",
    eligible: false,
  },
  {
    word: "Aludra",
    eligible: false,
  },
  {
    word: "alugar",
    eligible: true,
  },
  {
    word: "alumar",
    eligible: false,
  },
  {
    word: "alumel",
    eligible: false,
  },
  {
    word: "alunar",
    eligible: false,
  },
  {
    word: "alunas",
    eligible: true,
  },
  {
    word: "alundo",
    eligible: false,
  },
  {
    word: "alungó",
    eligible: false,
  },
  {
    word: "alunol",
    eligible: false,
  },
  {
    word: "alunos",
    eligible: true,
  },
  {
    word: "alurne",
    eligible: false,
  },
  {
    word: "alurno",
    eligible: false,
  },
  {
    word: "alusão",
    eligible: true,
  },
  {
    word: "aluvai",
    eligible: false,
  },
  {
    word: "alúvio",
    eligible: false,
  },
  {
    word: "alvacá",
    eligible: false,
  },
  {
    word: "alvacó",
    eligible: false,
  },
  {
    word: "Alvani",
    eligible: false,
  },
  {
    word: "alvará",
    eligible: true,
  },
  {
    word: "Álvaro",
    eligible: false,
  },
  {
    word: "álvaro",
    eligible: false,
  },
  {
    word: "alvear",
    eligible: false,
  },
  {
    word: "alveci",
    eligible: false,
  },
  {
    word: "alvela",
    eligible: false,
  },
  {
    word: "alvena",
    eligible: false,
  },
  {
    word: "alvião",
    eligible: false,
  },
  {
    word: "alvino",
    eligible: false,
  },
  {
    word: "alvite",
    eligible: false,
  },
  {
    word: "Alvito",
    eligible: false,
  },
  {
    word: "alvura",
    eligible: false,
  },
  {
    word: "Alziro",
    eligible: false,
  },
  {
    word: "alzube",
    eligible: false,
  },
  {
    word: "amábil",
    eligible: true,
  },
  {
    word: "amação",
    eligible: false,
  },
  {
    word: "amadas",
    eligible: true,
  },
  {
    word: "Amadeo",
    eligible: false,
  },
  {
    word: "amadeu",
    eligible: false,
  },
  {
    word: "amadio",
    eligible: false,
  },
  {
    word: "amadis",
    eligible: false,
  },
  {
    word: "amagar",
    eligible: false,
  },
  {
    word: "amagat",
    eligible: false,
  },
  {
    word: "âmagos",
    eligible: true,
  },
  {
    word: "Amalie",
    eligible: false,
  },
  {
    word: "Amálio",
    eligible: false,
  },
  {
    word: "amanão",
    eligible: false,
  },
  {
    word: "amanás",
    eligible: false,
  },
  {
    word: "amança",
    eligible: false,
  },
  {
    word: "amaniá",
    eligible: false,
  },
  {
    word: "amânia",
    eligible: false,
  },
  {
    word: "amânoa",
    eligible: false,
  },
  {
    word: "amansa",
    eligible: false,
  },
  {
    word: "amante",
    eligible: true,
  },
  {
    word: "amapás",
    eligible: false,
  },
  {
    word: "amaral",
    eligible: false,
  },
  {
    word: "amarga",
    eligible: true,
  },
  {
    word: "amargo",
    eligible: true,
  },
  {
    word: "Amária",
    eligible: false,
  },
  {
    word: "amaril",
    eligible: false,
  },
  {
    word: "amario",
    eligible: false,
  },
  {
    word: "amaros",
    eligible: false,
  },
  {
    word: "amarra",
    eligible: false,
  },
  {
    word: "Amasai",
    eligible: false,
  },
  {
    word: "amásio",
    eligible: false,
  },
  {
    word: "amásis",
    eligible: false,
  },
  {
    word: "amassa",
    eligible: false,
  },
  {
    word: "amasto",
    eligible: false,
  },
  {
    word: "amáteo",
    eligible: false,
  },
  {
    word: "amateu",
    eligible: false,
  },
  {
    word: "amatol",
    eligible: false,
  },
  {
    word: "Amauri",
    eligible: false,
  },
  {
    word: "amauro",
    eligible: false,
  },
  {
    word: "Amaury",
    eligible: false,
  },
  {
    word: "amauta",
    eligible: false,
  },
  {
    word: "amável",
    eligible: false,
  },
  {
    word: "amavio",
    eligible: false,
  },
  {
    word: "ambabo",
    eligible: false,
  },
  {
    word: "ambaca",
    eligible: false,
  },
  {
    word: "ambajo",
    eligible: false,
  },
  {
    word: "ambali",
    eligible: false,
  },
  {
    word: "ambaló",
    eligible: false,
  },
  {
    word: "ambaró",
    eligible: false,
  },
  {
    word: "ambera",
    eligible: false,
  },
  {
    word: "ambeti",
    eligible: false,
  },
  {
    word: "ambiar",
    eligible: false,
  },
  {
    word: "âmbito",
    eligible: false,
  },
  {
    word: "amboia",
    eligible: false,
  },
  {
    word: "amboim",
    eligible: false,
  },
  {
    word: "ambolé",
    eligible: false,
  },
  {
    word: "amboló",
    eligible: false,
  },
  {
    word: "ambone",
    eligible: false,
  },
  {
    word: "amborá",
    eligible: false,
  },
  {
    word: "amboré",
    eligible: false,
  },
  {
    word: "ambrão",
    eligible: false,
  },
  {
    word: "ambrar",
    eligible: false,
  },
  {
    word: "Ambros",
    eligible: false,
  },
  {
    word: "ambude",
    eligible: false,
  },
  {
    word: "ambuém",
    eligible: false,
  },
  {
    word: "âmbula",
    eligible: false,
  },
  {
    word: "ambulo",
    eligible: false,
  },
  {
    word: "amebeu",
    eligible: false,
  },
  {
    word: "ameiar",
    eligible: false,
  },
  {
    word: "ameija",
    eligible: false,
  },
  {
    word: "ameiva",
    eligible: false,
  },
  {
    word: "ameixa",
    eligible: true,
  },
  {
    word: "amelia",
    eligible: false,
  },
  {
    word: "amélia",
    eligible: true,
  },
  {
    word: "Amélie",
    eligible: false,
  },
  {
    word: "amélio",
    eligible: false,
  },
  {
    word: "amelpo",
    eligible: false,
  },
  {
    word: "amenia",
    eligible: false,
  },
  {
    word: "amerim",
    eligible: false,
  },
  {
    word: "Amiano",
    eligible: false,
  },
  {
    word: "amiara",
    eligible: false,
  },
  {
    word: "amical",
    eligible: false,
  },
  {
    word: "amicto",
    eligible: false,
  },
  {
    word: "amidão",
    eligible: false,
  },
  {
    word: "amidar",
    eligible: false,
  },
  {
    word: "amidol",
    eligible: false,
  },
  {
    word: "amidos",
    eligible: false,
  },
  {
    word: "amidro",
    eligible: false,
  },
  {
    word: "amigão",
    eligible: false,
  },
  {
    word: "amigar",
    eligible: false,
  },
  {
    word: "amigas",
    eligible: true,
  },
  {
    word: "amigos",
    eligible: true,
  },
  {
    word: "amimar",
    eligible: true,
  },
  {
    word: "amimia",
    eligible: false,
  },
  {
    word: "aminar",
    eligible: false,
  },
  {
    word: "amioca",
    eligible: false,
  },
  {
    word: "amioso",
    eligible: false,
  },
  {
    word: "amirão",
    eligible: false,
  },
  {
    word: "amirol",
    eligible: false,
  },
  {
    word: "Amirom",
    eligible: false,
  },
  {
    word: "Amitai",
    eligible: false,
  },
  {
    word: "amitro",
    eligible: false,
  },
  {
    word: "amiúro",
    eligible: false,
  },
  {
    word: "amocaí",
    eligible: false,
  },
  {
    word: "amodal",
    eligible: false,
  },
  {
    word: "amoiar",
    eligible: false,
  },
  {
    word: "amojos",
    eligible: false,
  },
  {
    word: "amolar",
    eligible: false,
  },
  {
    word: "amonal",
    eligible: false,
  },
  {
    word: "amonar",
    eligible: false,
  },
  {
    word: "amônio",
    eligible: true,
  },
  {
    word: "amoras",
    eligible: true,
  },
  {
    word: "amores",
    eligible: true,
  },
  {
    word: "amorés",
    eligible: false,
  },
  {
    word: "amorim",
    eligible: false,
  },
  {
    word: "amorio",
    eligible: false,
  },
  {
    word: "amotar",
    eligible: false,
  },
  {
    word: "amovir",
    eligible: false,
  },
  {
    word: "Âmpelo",
    eligible: false,
  },
  {
    word: "Ampére",
    eligible: false,
  },
  {
    word: "ampere",
    eligible: false,
  },
  {
    word: "ampère",
    eligible: false,
  },
  {
    word: "amplos",
    eligible: false,
  },
  {
    word: "ampola",
    eligible: true,
  },
  {
    word: "ampula",
    eligible: false,
  },
  {
    word: "amuimó",
    eligible: false,
  },
  {
    word: "Amúlio",
    eligible: false,
  },
  {
    word: "amurar",
    eligible: false,
  },
  {
    word: "amurca",
    eligible: false,
  },
  {
    word: "amusia",
    eligible: false,
  },
  {
    word: "Anabel",
    eligible: false,
  },
  {
    word: "anaçar",
    eligible: false,
  },
  {
    word: "anacãs",
    eligible: false,
  },
  {
    word: "anacta",
    eligible: false,
  },
  {
    word: "anadal",
    eligible: false,
  },
  {
    word: "anadar",
    eligible: false,
  },
  {
    word: "anadel",
    eligible: false,
  },
  {
    word: "Anadia",
    eligible: false,
  },
  {
    word: "Anadil",
    eligible: false,
  },
  {
    word: "anafar",
    eligible: false,
  },
  {
    word: "anafas",
    eligible: false,
  },
  {
    word: "anafes",
    eligible: false,
  },
  {
    word: "anagal",
    eligible: false,
  },
  {
    word: "Anaías",
    eligible: false,
  },
  {
    word: "Anaide",
    eligible: false,
  },
  {
    word: "anajás",
    eligible: false,
  },
  {
    word: "Anália",
    eligible: false,
  },
  {
    word: "analto",
    eligible: false,
  },
  {
    word: "anambé",
    eligible: false,
  },
  {
    word: "anamês",
    eligible: false,
  },
  {
    word: "Anamim",
    eligible: false,
  },
  {
    word: "ananaí",
    eligible: false,
  },
  {
    word: "ananás",
    eligible: false,
  },
  {
    word: "Ananda",
    eligible: false,
  },
  {
    word: "ananim",
    eligible: false,
  },
  {
    word: "ananto",
    eligible: false,
  },
  {
    word: "Anápio",
    eligible: false,
  },
  {
    word: "anapta",
    eligible: false,
  },
  {
    word: "anaqué",
    eligible: false,
  },
  {
    word: "anarco",
    eligible: false,
  },
  {
    word: "anarte",
    eligible: false,
  },
  {
    word: "anarto",
    eligible: false,
  },
  {
    word: "anasal",
    eligible: false,
  },
  {
    word: "anasol",
    eligible: false,
  },
  {
    word: "anaspo",
    eligible: false,
  },
  {
    word: "anatar",
    eligible: false,
  },
  {
    word: "Anatel",
    eligible: false,
  },
  {
    word: "Anauel",
    eligible: false,
  },
  {
    word: "anãzar",
    eligible: false,
  },
  {
    word: "ancado",
    eligible: false,
  },
  {
    word: "Ancara",
    eligible: false,
  },
  {
    word: "anchão",
    eligible: false,
  },
  {
    word: "anchar",
    eligible: false,
  },
  {
    word: "anchor",
    eligible: false,
  },
  {
    word: "anchos",
    eligible: false,
  },
  {
    word: "ancião",
    eligible: true,
  },
  {
    word: "ancona",
    eligible: false,
  },
  {
    word: "âncora",
    eligible: true,
  },
  {
    word: "ancoxa",
    eligible: false,
  },
  {
    word: "ancubi",
    eligible: false,
  },
  {
    word: "ancudo",
    eligible: false,
  },
  {
    word: "ancula",
    eligible: false,
  },
  {
    word: "ancusa",
    eligible: false,
  },
  {
    word: "andaca",
    eligible: false,
  },
  {
    word: "andaço",
    eligible: false,
  },
  {
    word: "andaia",
    eligible: false,
  },
  {
    word: "andaiá",
    eligible: false,
  },
  {
    word: "andana",
    eligible: false,
  },
  {
    word: "andapé",
    eligible: false,
  },
  {
    word: "ândica",
    eligible: false,
  },
  {
    word: "andino",
    eligible: false,
  },
  {
    word: "andins",
    eligible: false,
  },
  {
    word: "andira",
    eligible: false,
  },
  {
    word: "andirá",
    eligible: false,
  },
  {
    word: "ândito",
    eligible: false,
  },
  {
    word: "andoar",
    eligible: false,
  },
  {
    word: "andolo",
    eligible: false,
  },
  {
    word: "andone",
    eligible: false,
  },
  {
    word: "andoni",
    eligible: false,
  },
  {
    word: "Andréa",
    eligible: false,
  },
  {
    word: "Andrée",
    eligible: false,
  },
  {
    word: "Andrei",
    eligible: false,
  },
  {
    word: "Andria",
    eligible: false,
  },
  {
    word: "andrio",
    eligible: false,
  },
  {
    word: "Andson",
    eligible: false,
  },
  {
    word: "Andulo",
    eligible: false,
  },
  {
    word: "aneira",
    eligible: false,
  },
  {
    word: "aneiro",
    eligible: false,
  },
  {
    word: "aneixo",
    eligible: false,
  },
  {
    word: "anelão",
    eligible: false,
  },
  {
    word: "anelar",
    eligible: true,
  },
  {
    word: "anelho",
    eligible: false,
  },
  {
    word: "anelos",
    eligible: false,
  },
  {
    word: "anenai",
    eligible: false,
  },
  {
    word: "anepia",
    eligible: false,
  },
  {
    word: "anesia",
    eligible: false,
  },
  {
    word: "Anésio",
    eligible: false,
  },
  {
    word: "anetol",
    eligible: false,
  },
  {
    word: "anexar",
    eligible: false,
  },
  {
    word: "anexim",
    eligible: false,
  },
  {
    word: "anexos",
    eligible: true,
  },
  {
    word: "Anézia",
    eligible: false,
  },
  {
    word: "anfião",
    eligible: false,
  },
  {
    word: "anfibo",
    eligible: false,
  },
  {
    word: "anfido",
    eligible: false,
  },
  {
    word: "ânfido",
    eligible: false,
  },
  {
    word: "Anfito",
    eligible: false,
  },
  {
    word: "ânfora",
    eligible: false,
  },
  {
    word: "angaço",
    eligible: false,
  },
  {
    word: "angala",
    eligible: false,
  },
  {
    word: "Angara",
    eligible: false,
  },
  {
    word: "Angele",
    eligible: false,
  },
  {
    word: "Ângelo",
    eligible: false,
  },
  {
    word: "angema",
    eligible: false,
  },
  {
    word: "Ângica",
    eligible: false,
  },
  {
    word: "angico",
    eligible: false,
  },
  {
    word: "angina",
    eligible: false,
  },
  {
    word: "angira",
    eligible: false,
  },
  {
    word: "angite",
    eligible: false,
  },
  {
    word: "angito",
    eligible: false,
  },
  {
    word: "angoja",
    eligible: false,
  },
  {
    word: "Angola",
    eligible: false,
  },
  {
    word: "angola",
    eligible: false,
  },
  {
    word: "angoma",
    eligible: false,
  },
  {
    word: "angona",
    eligible: false,
  },
  {
    word: "angoni",
    eligible: false,
  },
  {
    word: "angorá",
    eligible: false,
  },
  {
    word: "angrim",
    eligible: false,
  },
  {
    word: "anguia",
    eligible: false,
  },
  {
    word: "ângulo",
    eligible: true,
  },
  {
    word: "anguri",
    eligible: false,
  },
  {
    word: "anguru",
    eligible: false,
  },
  {
    word: "anguzô",
    eligible: false,
  },
  {
    word: "Anhaia",
    eligible: false,
  },
  {
    word: "anhapa",
    eligible: false,
  },
  {
    word: "anhara",
    eligible: false,
  },
  {
    word: "anhima",
    eligible: false,
  },
  {
    word: "anhote",
    eligible: false,
  },
  {
    word: "anhoto",
    eligible: false,
  },
  {
    word: "anhuma",
    eligible: false,
  },
  {
    word: "Aniano",
    eligible: false,
  },
  {
    word: "aniaro",
    eligible: false,
  },
  {
    word: "aniavá",
    eligible: false,
  },
  {
    word: "Aníbal",
    eligible: false,
  },
  {
    word: "Anícia",
    eligible: false,
  },
  {
    word: "anidos",
    eligible: false,
  },
  {
    word: "anidro",
    eligible: false,
  },
  {
    word: "aniera",
    eligible: false,
  },
  {
    word: "anilar",
    eligible: false,
  },
  {
    word: "animal",
    eligible: true,
  },
  {
    word: "animar",
    eligible: true,
  },
  {
    word: "aninga",
    eligible: false,
  },
  {
    word: "aniqui",
    eligible: false,
  },
  {
    word: "aniria",
    eligible: false,
  },
  {
    word: "anisal",
    eligible: false,
  },
  {
    word: "anisar",
    eligible: false,
  },
  {
    word: "anises",
    eligible: false,
  },
  {
    word: "Anísio",
    eligible: false,
  },
  {
    word: "Anísis",
    eligible: false,
  },
  {
    word: "anismo",
    eligible: false,
  },
  {
    word: "anisol",
    eligible: false,
  },
  {
    word: "anista",
    eligible: false,
  },
  {
    word: "anisto",
    eligible: false,
  },
  {
    word: "anitol",
    eligible: false,
  },
  {
    word: "anixia",
    eligible: false,
  },
  {
    word: "anjira",
    eligible: false,
  },
  {
    word: "anjola",
    eligible: false,
  },
  {
    word: "anjuão",
    eligible: false,
  },
  {
    word: "anjuba",
    eligible: false,
  },
  {
    word: "Anjuta",
    eligible: false,
  },
  {
    word: "anlaga",
    eligible: false,
  },
  {
    word: "anóbio",
    eligible: false,
  },
  {
    word: "anodal",
    eligible: false,
  },
  {
    word: "anodão",
    eligible: false,
  },
  {
    word: "anodia",
    eligible: false,
  },
  {
    word: "anojal",
    eligible: false,
  },
  {
    word: "anojar",
    eligible: false,
  },
  {
    word: "anólis",
    eligible: false,
  },
  {
    word: "anômea",
    eligible: false,
  },
  {
    word: "anomia",
    eligible: false,
  },
  {
    word: "anonzé",
    eligible: false,
  },
  {
    word: "anonzu",
    eligible: false,
  },
  {
    word: "anoope",
    eligible: false,
  },
  {
    word: "anopia",
    eligible: false,
  },
  {
    word: "anoque",
    eligible: false,
  },
  {
    word: "anorco",
    eligible: false,
  },
  {
    word: "anosia",
    eligible: false,
  },
  {
    word: "anosol",
    eligible: false,
  },
  {
    word: "anotia",
    eligible: false,
  },
  {
    word: "anóxia",
    eligible: false,
  },
  {
    word: "ansiar",
    eligible: false,
  },
  {
    word: "antalo",
    eligible: false,
  },
  {
    word: "anteco",
    eligible: false,
  },
  {
    word: "antena",
    eligible: true,
  },
  {
    word: "antená",
    eligible: false,
  },
  {
    word: "antera",
    eligible: false,
  },
  {
    word: "Antero",
    eligible: false,
  },
  {
    word: "ântero",
    eligible: false,
  },
  {
    word: "antese",
    eligible: false,
  },
  {
    word: "antiar",
    eligible: false,
  },
  {
    word: "ântico",
    eligible: false,
  },
  {
    word: "antigo",
    eligible: false,
  },
  {
    word: "ântino",
    eligible: false,
  },
  {
    word: "antipo",
    eligible: false,
  },
  {
    word: "antona",
    eligible: false,
  },
  {
    word: "antoro",
    eligible: false,
  },
  {
    word: "antral",
    eligible: false,
  },
  {
    word: "antrax",
    eligible: false,
  },
  {
    word: "antraz",
    eligible: false,
  },
  {
    word: "antrol",
    eligible: false,
  },
  {
    word: "anturo",
    eligible: false,
  },
  {
    word: "antusa",
    eligible: false,
  },
  {
    word: "anuaçu",
    eligible: false,
  },
  {
    word: "anuais",
    eligible: true,
  },
  {
    word: "anúbia",
    eligible: false,
  },
  {
    word: "Anúbis",
    eligible: false,
  },
  {
    word: "anuíba",
    eligible: false,
  },
  {
    word: "anuído",
    eligible: false,
  },
  {
    word: "anular",
    eligible: true,
  },
  {
    word: "anulus",
    eligible: false,
  },
  {
    word: "anunzé",
    eligible: false,
  },
  {
    word: "anuria",
    eligible: false,
  },
  {
    word: "anvali",
    eligible: false,
  },
  {
    word: "anvaló",
    eligible: false,
  },
  {
    word: "anvers",
    eligible: false,
  },
  {
    word: "anvula",
    eligible: false,
  },
  {
    word: "anzico",
    eligible: false,
  },
  {
    word: "anzina",
    eligible: false,
  },
  {
    word: "anzóis",
    eligible: true,
  },
  {
    word: "Aolibá",
    eligible: false,
  },
  {
    word: "aônida",
    eligible: false,
  },
  {
    word: "apache",
    eligible: false,
  },
  {
    word: "apagão",
    eligible: true,
  },
  {
    word: "apagar",
    eligible: true,
  },
  {
    word: "apagma",
    eligible: false,
  },
  {
    word: "apagou",
    eligible: false,
  },
  {
    word: "apajar",
    eligible: false,
  },
  {
    word: "apalaí",
    eligible: false,
  },
  {
    word: "apalpo",
    eligible: false,
  },
  {
    word: "apameu",
    eligible: false,
  },
  {
    word: "apanha",
    eligible: false,
  },
  {
    word: "apapás",
    eligible: false,
  },
  {
    word: "aparaí",
    eligible: false,
  },
  {
    word: "aparás",
    eligible: false,
  },
  {
    word: "aparta",
    eligible: false,
  },
  {
    word: "apatia",
    eligible: true,
  },
  {
    word: "apecum",
    eligible: false,
  },
  {
    word: "apedar",
    eligible: false,
  },
  {
    word: "apegar",
    eligible: true,
  },
  {
    word: "apeíba",
    eligible: false,
  },
  {
    word: "apejar",
    eligible: false,
  },
  {
    word: "apelar",
    eligible: true,
  },
  {
    word: "apenar",
    eligible: false,
  },
  {
    word: "apensa",
    eligible: false,
  },
  {
    word: "aperar",
    eligible: false,
  },
  {
    word: "aperta",
    eligible: false,
  },
  {
    word: "apesar",
    eligible: true,
  },
  {
    word: "apetir",
    eligible: false,
  },
  {
    word: "ápetro",
    eligible: false,
  },
  {
    word: "apiacá",
    eligible: false,
  },
  {
    word: "apiale",
    eligible: false,
  },
  {
    word: "apiari",
    eligible: false,
  },
  {
    word: "apical",
    eligible: false,
  },
  {
    word: "apício",
    eligible: false,
  },
  {
    word: "apicra",
    eligible: false,
  },
  {
    word: "Apicum",
    eligible: false,
  },
  {
    word: "apídeo",
    eligible: false,
  },
  {
    word: "apíico",
    eligible: false,
  },
  {
    word: "apioba",
    eligible: false,
  },
  {
    word: "apiona",
    eligible: false,
  },
  {
    word: "apiose",
    eligible: false,
  },
  {
    word: "apisto",
    eligible: false,
  },
  {
    word: "apitau",
    eligible: false,
  },
  {
    word: "Apiúna",
    eligible: false,
  },
  {
    word: "áplido",
    eligible: false,
  },
  {
    word: "aplito",
    eligible: false,
  },
  {
    word: "apneia",
    eligible: true,
  },
  {
    word: "apodia",
    eligible: false,
  },
  {
    word: "Apoema",
    eligible: false,
  },
  {
    word: "apogão",
    eligible: false,
  },
  {
    word: "apogeu",
    eligible: true,
  },
  {
    word: "apoiar",
    eligible: true,
  },
  {
    word: "apojos",
    eligible: false,
  },
  {
    word: "apolar",
    eligible: true,
  },
  {
    word: "aponal",
    eligible: false,
  },
  {
    word: "aponia",
    eligible: false,
  },
  {
    word: "aporia",
    eligible: false,
  },
  {
    word: "apória",
    eligible: false,
  },
  {
    word: "aposia",
    eligible: false,
  },
  {
    word: "aposto",
    eligible: true,
  },
  {
    word: "apport",
    eligible: false,
  },
  {
    word: "apraiú",
    eligible: false,
  },
  {
    word: "apraju",
    eligible: false,
  },
  {
    word: "aprauá",
    eligible: false,
  },
  {
    word: "apreço",
    eligible: false,
  },
  {
    word: "aprico",
    eligible: false,
  },
  {
    word: "apsará",
    eligible: false,
  },
  {
    word: "apside",
    eligible: false,
  },
  {
    word: "áptero",
    eligible: false,
  },
  {
    word: "áptico",
    eligible: false,
  },
  {
    word: "apuame",
    eligible: false,
  },
  {
    word: "apuano",
    eligible: false,
  },
  {
    word: "Apuleu",
    eligible: false,
  },
  {
    word: "Apúlia",
    eligible: false,
  },
  {
    word: "apúlio",
    eligible: false,
  },
  {
    word: "apulso",
    eligible: false,
  },
  {
    word: "apúnia",
    eligible: false,
  },
  {
    word: "apunto",
    eligible: false,
  },
  {
    word: "apurar",
    eligible: true,
  },
  {
    word: "aputiá",
    eligible: false,
  },
  {
    word: "Aqmola",
    eligible: false,
  },
  {
    word: "aquele",
    eligible: true,
  },
  {
    word: "àquele",
    eligible: false,
  },
  {
    word: "Aquias",
    eligible: false,
  },
  {
    word: "àquilo",
    eligible: false,
  },
  {
    word: "áquilo",
    eligible: false,
  },
  {
    word: "Aquino",
    eligible: false,
  },
  {
    word: "Aquior",
    eligible: false,
  },
  {
    word: "aquiro",
    eligible: false,
  },
  {
    word: "aquite",
    eligible: false,
  },
  {
    word: "aquivo",
    eligible: false,
  },
  {
    word: "aquoso",
    eligible: true,
  },
  {
    word: "árabes",
    eligible: true,
  },
  {
    word: "arábia",
    eligible: false,
  },
  {
    word: "arábio",
    eligible: false,
  },
  {
    word: "árabis",
    eligible: false,
  },
  {
    word: "Aracaê",
    eligible: false,
  },
  {
    word: "Araçaí",
    eligible: false,
  },
  {
    word: "araçaí",
    eligible: false,
  },
  {
    word: "Araças",
    eligible: false,
  },
  {
    word: "araçás",
    eligible: false,
  },
  {
    word: "aráceo",
    eligible: false,
  },
  {
    word: "arache",
    eligible: false,
  },
  {
    word: "aracno",
    eligible: false,
  },
  {
    word: "aracuã",
    eligible: false,
  },
  {
    word: "aracuí",
    eligible: false,
  },
  {
    word: "aracus",
    eligible: false,
  },
  {
    word: "aradar",
    eligible: false,
  },
  {
    word: "aragão",
    eligible: false,
  },
  {
    word: "aragem",
    eligible: false,
  },
  {
    word: "araiás",
    eligible: false,
  },
  {
    word: "Araíba",
    eligible: false,
  },
  {
    word: "araicá",
    eligible: false,
  },
  {
    word: "araicu",
    eligible: false,
  },
  {
    word: "araini",
    eligible: false,
  },
  {
    word: "Araldo",
    eligible: false,
  },
  {
    word: "aralha",
    eligible: false,
  },
  {
    word: "arambá",
    eligible: false,
  },
  {
    word: "aramês",
    eligible: false,
  },
  {
    word: "arameu",
    eligible: false,
  },
  {
    word: "Aramis",
    eligible: false,
  },
  {
    word: "Arandu",
    eligible: false,
  },
  {
    word: "Aranha",
    eligible: false,
  },
  {
    word: "aranha",
    eligible: true,
  },
  {
    word: "arapaó",
    eligible: false,
  },
  {
    word: "arapaú",
    eligible: false,
  },
  {
    word: "Arapeí",
    eligible: false,
  },
  {
    word: "arapuá",
    eligible: false,
  },
  {
    word: "arapuã",
    eligible: false,
  },
  {
    word: "arapuê",
    eligible: false,
  },
  {
    word: "Araquá",
    eligible: false,
  },
  {
    word: "araquã",
    eligible: false,
  },
  {
    word: "áraque",
    eligible: false,
  },
  {
    word: "araraí",
    eligible: false,
  },
  {
    word: "araras",
    eligible: true,
  },
  {
    word: "ararau",
    eligible: false,
  },
  {
    word: "araruá",
    eligible: false,
  },
  {
    word: "Arátor",
    eligible: false,
  },
  {
    word: "aratus",
    eligible: false,
  },
  {
    word: "arauco",
    eligible: false,
  },
  {
    word: "Araújo",
    eligible: false,
  },
  {
    word: "Araúna",
    eligible: false,
  },
  {
    word: "arauto",
    eligible: false,
  },
  {
    word: "arável",
    eligible: false,
  },
  {
    word: "araxué",
    eligible: false,
  },
  {
    word: "arbelo",
    eligible: false,
  },
  {
    word: "arbena",
    eligible: false,
  },
  {
    word: "arbita",
    eligible: false,
  },
  {
    word: "arbóis",
    eligible: false,
  },
  {
    word: "árbuto",
    eligible: false,
  },
  {
    word: "arcada",
    eligible: false,
  },
  {
    word: "árcade",
    eligible: false,
  },
  {
    word: "arcane",
    eligible: false,
  },
  {
    word: "arcano",
    eligible: true,
  },
  {
    word: "arcela",
    eligible: false,
  },
  {
    word: "arcera",
    eligible: false,
  },
  {
    word: "arcete",
    eligible: false,
  },
  {
    word: "Archer",
    eligible: false,
  },
  {
    word: "arcose",
    eligible: false,
  },
  {
    word: "arcoso",
    eligible: false,
  },
  {
    word: "arctar",
    eligible: false,
  },
  {
    word: "árctoa",
    eligible: false,
  },
  {
    word: "arcual",
    eligible: false,
  },
  {
    word: "arcuar",
    eligible: false,
  },
  {
    word: "árcula",
    eligible: false,
  },
  {
    word: "arcumã",
    eligible: false,
  },
  {
    word: "árdego",
    eligible: false,
  },
  {
    word: "ardieu",
    eligible: false,
  },
  {
    word: "Ardila",
    eligible: false,
  },
  {
    word: "ardina",
    eligible: false,
  },
  {
    word: "ardose",
    eligible: false,
  },
  {
    word: "ardoso",
    eligible: false,
  },
  {
    word: "ardume",
    eligible: false,
  },
  {
    word: "ardura",
    eligible: false,
  },
  {
    word: "areacó",
    eligible: false,
  },
  {
    word: "areaço",
    eligible: false,
  },
  {
    word: "arealu",
    eligible: false,
  },
  {
    word: "areata",
    eligible: false,
  },
  {
    word: "arecal",
    eligible: false,
  },
  {
    word: "arecas",
    eligible: false,
  },
  {
    word: "Arécio",
    eligible: false,
  },
  {
    word: "Areial",
    eligible: false,
  },
  {
    word: "areião",
    eligible: false,
  },
  {
    word: "areias",
    eligible: true,
  },
  {
    word: "areira",
    eligible: false,
  },
  {
    word: "arejar",
    eligible: true,
  },
  {
    word: "arelha",
    eligible: false,
  },
  {
    word: "Arella",
    eligible: false,
  },
  {
    word: "arenar",
    eligible: false,
  },
  {
    word: "arencu",
    eligible: false,
  },
  {
    word: "arenos",
    eligible: false,
  },
  {
    word: "aréola",
    eligible: false,
  },
  {
    word: "areoso",
    eligible: false,
  },
  {
    word: "Arésio",
    eligible: false,
  },
  {
    word: "aresto",
    eligible: false,
  },
  {
    word: "Aretas",
    eligible: false,
  },
  {
    word: "argaço",
    eligible: false,
  },
  {
    word: "argali",
    eligible: false,
  },
  {
    word: "argalo",
    eligible: false,
  },
  {
    word: "argano",
    eligible: false,
  },
  {
    word: "árgema",
    eligible: false,
  },
  {
    word: "Argens",
    eligible: false,
  },
  {
    word: "argilo",
    eligible: false,
  },
  {
    word: "argina",
    eligible: false,
  },
  {
    word: "argipã",
    eligible: false,
  },
  {
    word: "árgiro",
    eligible: false,
  },
  {
    word: "argite",
    eligible: false,
  },
  {
    word: "argivo",
    eligible: false,
  },
  {
    word: "Argobe",
    eligible: false,
  },
  {
    word: "argoma",
    eligible: false,
  },
  {
    word: "arguês",
    eligible: false,
  },
  {
    word: "arguir",
    eligible: false,
  },
  {
    word: "arguiz",
    eligible: false,
  },
  {
    word: "árgulo",
    eligible: false,
  },
  {
    word: "arguto",
    eligible: false,
  },
  {
    word: "argyll",
    eligible: false,
  },
  {
    word: "ariacó",
    eligible: false,
  },
  {
    word: "ariaçu",
    eligible: false,
  },
  {
    word: "Ariane",
    eligible: false,
  },
  {
    word: "ariano",
    eligible: false,
  },
  {
    word: "ariauá",
    eligible: false,
  },
  {
    word: "ariaxé",
    eligible: false,
  },
  {
    word: "aricar",
    eligible: false,
  },
  {
    word: "Arícia",
    eligible: false,
  },
  {
    word: "Arício",
    eligible: false,
  },
  {
    word: "aricuí",
    eligible: false,
  },
  {
    word: "aridez",
    eligible: true,
  },
  {
    word: "Ariene",
    eligible: false,
  },
  {
    word: "arieta",
    eligible: false,
  },
  {
    word: "aríete",
    eligible: true,
  },
  {
    word: "arigós",
    eligible: false,
  },
  {
    word: "ariini",
    eligible: false,
  },
  {
    word: "Arildo",
    eligible: false,
  },
  {
    word: "arilho",
    eligible: false,
  },
  {
    word: "arimbá",
    eligible: false,
  },
  {
    word: "arincu",
    eligible: false,
  },
  {
    word: "aringa",
    eligible: false,
  },
  {
    word: "arinho",
    eligible: false,
  },
  {
    word: "Arinos",
    eligible: false,
  },
  {
    word: "arinto",
    eligible: false,
  },
  {
    word: "ariocó",
    eligible: false,
  },
  {
    word: "aríolo",
    eligible: false,
  },
  {
    word: "arioso",
    eligible: false,
  },
  {
    word: "aripuá",
    eligible: false,
  },
  {
    word: "arique",
    eligible: false,
  },
  {
    word: "Arisla",
    eligible: false,
  },
  {
    word: "Arissa",
    eligible: false,
  },
  {
    word: "aristo",
    eligible: false,
  },
  {
    word: "aristu",
    eligible: false,
  },
  {
    word: "aritis",
    eligible: false,
  },
  {
    word: "aritox",
    eligible: false,
  },
  {
    word: "arjoar",
    eligible: false,
  },
  {
    word: "arjona",
    eligible: false,
  },
  {
    word: "Arlene",
    eligible: false,
  },
  {
    word: "Arlete",
    eligible: false,
  },
  {
    word: "Arline",
    eligible: false,
  },
  {
    word: "arlota",
    eligible: false,
  },
  {
    word: "armada",
    eligible: false,
  },
  {
    word: "armado",
    eligible: true,
  },
  {
    word: "armelo",
    eligible: false,
  },
  {
    word: "ármico",
    eligible: false,
  },
  {
    word: "Armida",
    eligible: false,
  },
  {
    word: "armila",
    eligible: false,
  },
  {
    word: "armino",
    eligible: false,
  },
  {
    word: "armole",
    eligible: false,
  },
  {
    word: "Armoni",
    eligible: false,
  },
  {
    word: "armoso",
    eligible: false,
  },
  {
    word: "arnabe",
    eligible: false,
  },
  {
    word: "arnabo",
    eligible: false,
  },
  {
    word: "arnado",
    eligible: false,
  },
  {
    word: "arnais",
    eligible: false,
  },
  {
    word: "arnate",
    eligible: false,
  },
  {
    word: "arnecã",
    eligible: false,
  },
  {
    word: "arnedo",
    eligible: false,
  },
  {
    word: "arnelo",
    eligible: false,
  },
  {
    word: "arnica",
    eligible: false,
  },
  {
    word: "Arnira",
    eligible: false,
  },
  {
    word: "arnito",
    eligible: false,
  },
  {
    word: "arnodo",
    eligible: false,
  },
  {
    word: "arnoso",
    eligible: false,
  },
  {
    word: "arnote",
    eligible: false,
  },
  {
    word: "arnoto",
    eligible: false,
  },
  {
    word: "Arolde",
    eligible: false,
  },
  {
    word: "Aroldo",
    eligible: false,
  },
  {
    word: "aromal",
    eligible: false,
  },
  {
    word: "aromar",
    eligible: false,
  },
  {
    word: "aromia",
    eligible: false,
  },
  {
    word: "arônea",
    eligible: false,
  },
  {
    word: "Arósio",
    eligible: false,
  },
  {
    word: "Arouca",
    eligible: false,
  },
  {
    word: "Arpade",
    eligible: false,
  },
  {
    word: "arpear",
    eligible: false,
  },
  {
    word: "arpino",
    eligible: false,
  },
  {
    word: "arpoão",
    eligible: false,
  },
  {
    word: "arpoar",
    eligible: true,
  },
  {
    word: "arpuar",
    eligible: false,
  },
  {
    word: "arquel",
    eligible: false,
  },
  {
    word: "arqueu",
    eligible: false,
  },
  {
    word: "arquio",
    eligible: false,
  },
  {
    word: "Arraes",
    eligible: false,
  },
  {
    word: "arraia",
    eligible: true,
  },
  {
    word: "arrair",
    eligible: false,
  },
  {
    word: "arrais",
    eligible: true,
  },
  {
    word: "arrear",
    eligible: false,
  },
  {
    word: "arreaz",
    eligible: false,
  },
  {
    word: "arreçã",
    eligible: false,
  },
  {
    word: "arrego",
    eligible: true,
  },
  {
    word: "arreio",
    eligible: false,
  },
  {
    word: "arreno",
    eligible: false,
  },
  {
    word: "arriar",
    eligible: true,
  },
  {
    word: "arriaz",
    eligible: false,
  },
  {
    word: "arriba",
    eligible: false,
  },
  {
    word: "arriel",
    eligible: false,
  },
  {
    word: "arrife",
    eligible: false,
  },
  {
    word: "arrimo",
    eligible: true,
  },
  {
    word: "arrino",
    eligible: false,
  },
  {
    word: "arriol",
    eligible: false,
  },
  {
    word: "arroba",
    eligible: true,
  },
  {
    word: "arrobi",
    eligible: false,
  },
  {
    word: "arroio",
    eligible: false,
  },
  {
    word: "arroto",
    eligible: true,
  },
  {
    word: "arruar",
    eligible: false,
  },
  {
    word: "arrubé",
    eligible: false,
  },
  {
    word: "arruda",
    eligible: true,
  },
  {
    word: "arrumã",
    eligible: false,
  },
  {
    word: "Arsene",
    eligible: false,
  },
  {
    word: "arsina",
    eligible: false,
  },
  {
    word: "artena",
    eligible: false,
  },
  {
    word: "artesa",
    eligible: false,
  },
  {
    word: "Arthur",
    eligible: false,
  },
  {
    word: "arthus",
    eligible: false,
  },
  {
    word: "artice",
    eligible: false,
  },
  {
    word: "ártico",
    eligible: true,
  },
  {
    word: "artigo",
    eligible: true,
  },
  {
    word: "artola",
    eligible: false,
  },
  {
    word: "Arturo",
    eligible: false,
  },
  {
    word: "aruaco",
    eligible: false,
  },
  {
    word: "Aruana",
    eligible: false,
  },
  {
    word: "Aruanã",
    eligible: false,
  },
  {
    word: "aruaná",
    eligible: false,
  },
  {
    word: "aruanó",
    eligible: false,
  },
  {
    word: "aruaru",
    eligible: false,
  },
  {
    word: "aruega",
    eligible: false,
  },
  {
    word: "arumãs",
    eligible: false,
  },
  {
    word: "arunco",
    eligible: false,
  },
  {
    word: "arundo",
    eligible: false,
  },
  {
    word: "arurão",
    eligible: false,
  },
  {
    word: "Arvade",
    eligible: false,
  },
  {
    word: "arvado",
    eligible: false,
  },
  {
    word: "arvela",
    eligible: false,
  },
  {
    word: "arvião",
    eligible: false,
  },
  {
    word: "arvoar",
    eligible: false,
  },
  {
    word: "árvore",
    eligible: true,
  },
  {
    word: "arzila",
    eligible: false,
  },
  {
    word: "arzola",
    eligible: false,
  },
  {
    word: "Asadel",
    eligible: false,
  },
  {
    word: "asafia",
    eligible: false,
  },
  {
    word: "Asaías",
    eligible: false,
  },
  {
    word: "Asbeia",
    eligible: false,
  },
  {
    word: "Ascári",
    eligible: false,
  },
  {
    word: "ascari",
    eligible: false,
  },
  {
    word: "áscele",
    eligible: false,
  },
  {
    word: "áscelo",
    eligible: false,
  },
  {
    word: "ascese",
    eligible: false,
  },
  {
    word: "asceta",
    eligible: false,
  },
  {
    word: "ásciro",
    eligible: false,
  },
  {
    word: "ascite",
    eligible: false,
  },
  {
    word: "ascose",
    eligible: false,
  },
  {
    word: "ascoso",
    eligible: false,
  },
  {
    word: "ascreu",
    eligible: false,
  },
  {
    word: "ascuar",
    eligible: false,
  },
  {
    word: "ascuma",
    eligible: false,
  },
  {
    word: "ascuna",
    eligible: false,
  },
  {
    word: "Asdode",
    eligible: false,
  },
  {
    word: "Asdote",
    eligible: false,
  },
  {
    word: "Asélia",
    eligible: false,
  },
  {
    word: "asiano",
    eligible: false,
  },
  {
    word: "asiata",
    eligible: false,
  },
  {
    word: "asilar",
    eligible: false,
  },
  {
    word: "Asileu",
    eligible: false,
  },
  {
    word: "asilos",
    eligible: true,
  },
  {
    word: "asinal",
    eligible: false,
  },
  {
    word: "asinha",
    eligible: false,
  },
  {
    word: "Asmara",
    eligible: false,
  },
  {
    word: "asnada",
    eligible: false,
  },
  {
    word: "asnear",
    eligible: false,
  },
  {
    word: "asnice",
    eligible: false,
  },
  {
    word: "asofia",
    eligible: false,
  },
  {
    word: "aspaço",
    eligible: false,
  },
  {
    word: "aspear",
    eligible: false,
  },
  {
    word: "áspera",
    eligible: false,
  },
  {
    word: "áspero",
    eligible: true,
  },
  {
    word: "aspeto",
    eligible: false,
  },
  {
    word: "áspide",
    eligible: false,
  },
  {
    word: "ásporo",
    eligible: false,
  },
  {
    word: "aspudo",
    eligible: false,
  },
  {
    word: "assada",
    eligible: false,
  },
  {
    word: "assado",
    eligible: true,
  },
  {
    word: "assami",
    eligible: false,
  },
  {
    word: "ássana",
    eligible: false,
  },
  {
    word: "Assaré",
    eligible: false,
  },
  {
    word: "assave",
    eligible: false,
  },
  {
    word: "assear",
    eligible: false,
  },
  {
    word: "assexo",
    eligible: false,
  },
  {
    word: "assina",
    eligible: false,
  },
  {
    word: "assoar",
    eligible: true,
  },
  {
    word: "assomo",
    eligible: false,
  },
  {
    word: "ássono",
    eligible: false,
  },
  {
    word: "ástaco",
    eligible: false,
  },
  {
    word: "Astana",
    eligible: false,
  },
  {
    word: "ástase",
    eligible: false,
  },
  {
    word: "ástate",
    eligible: false,
  },
  {
    word: "ástato",
    eligible: false,
  },
  {
    word: "asteca",
    eligible: true,
  },
  {
    word: "astela",
    eligible: false,
  },
  {
    word: "astema",
    eligible: false,
  },
  {
    word: "ástico",
    eligible: false,
  },
  {
    word: "astilo",
    eligible: false,
  },
  {
    word: "ástomo",
    eligible: false,
  },
  {
    word: "astral",
    eligible: true,
  },
  {
    word: "ástreo",
    eligible: false,
  },
  {
    word: "Astreu",
    eligible: false,
  },
  {
    word: "astros",
    eligible: false,
  },
  {
    word: "ásture",
    eligible: false,
  },
  {
    word: "asturo",
    eligible: false,
  },
  {
    word: "ásturo",
    eligible: false,
  },
  {
    word: "astuto",
    eligible: false,
  },
  {
    word: "asurol",
    eligible: false,
  },
  {
    word: "Asvero",
    eligible: false,
  },
  {
    word: "atabal",
    eligible: false,
  },
  {
    word: "atação",
    eligible: false,
  },
  {
    word: "atacar",
    eligible: true,
  },
  {
    word: "atadas",
    eligible: true,
  },
  {
    word: "atafal",
    eligible: false,
  },
  {
    word: "Ataías",
    eligible: false,
  },
  {
    word: "Ataíde",
    eligible: false,
  },
  {
    word: "Ataléa",
    eligible: false,
  },
  {
    word: "atálea",
    eligible: false,
  },
  {
    word: "Atalia",
    eligible: false,
  },
  {
    word: "Atália",
    eligible: false,
  },
  {
    word: "atamar",
    eligible: false,
  },
  {
    word: "atanda",
    eligible: false,
  },
  {
    word: "atanor",
    eligible: false,
  },
  {
    word: "ataque",
    eligible: true,
  },
  {
    word: "ataraú",
    eligible: false,
  },
  {
    word: "ataúde",
    eligible: false,
  },
  {
    word: "atávia",
    eligible: false,
  },
  {
    word: "atavio",
    eligible: false,
  },
  {
    word: "ataxia",
    eligible: false,
  },
  {
    word: "ateliê",
    eligible: false,
  },
  {
    word: "ateneu",
    eligible: false,
  },
  {
    word: "atério",
    eligible: false,
  },
  {
    word: "atérix",
    eligible: false,
  },
  {
    word: "aterro",
    eligible: true,
  },
  {
    word: "atesia",
    eligible: false,
  },
  {
    word: "atiati",
    eligible: false,
  },
  {
    word: "atiçar",
    eligible: true,
  },
  {
    word: "atíeis",
    eligible: false,
  },
  {
    word: "Atílio",
    eligible: false,
  },
  {
    word: "atílio",
    eligible: false,
  },
  {
    word: "atimia",
    eligible: false,
  },
  {
    word: "Atimno",
    eligible: false,
  },
  {
    word: "atinar",
    eligible: false,
  },
  {
    word: "atinga",
    eligible: false,
  },
  {
    word: "atínia",
    eligible: false,
  },
  {
    word: "atinos",
    eligible: false,
  },
  {
    word: "atipia",
    eligible: false,
  },
  {
    word: "atiria",
    eligible: false,
  },
  {
    word: "atitar",
    eligible: false,
  },
  {
    word: "ativar",
    eligible: true,
  },
  {
    word: "ativos",
    eligible: true,
  },
  {
    word: "atleta",
    eligible: true,
  },
  {
    word: "átmico",
    eligible: false,
  },
  {
    word: "atobás",
    eligible: false,
  },
  {
    word: "atocia",
    eligible: false,
  },
  {
    word: "atócio",
    eligible: false,
  },
  {
    word: "atolar",
    eligible: true,
  },
  {
    word: "átomos",
    eligible: true,
  },
  {
    word: "atopia",
    eligible: true,
  },
  {
    word: "atores",
    eligible: true,
  },
  {
    word: "Atossa",
    eligible: false,
  },
  {
    word: "Atotes",
    eligible: false,
  },
  {
    word: "atouco",
    eligible: false,
  },
  {
    word: "atoxil",
    eligible: false,
  },
  {
    word: "atrano",
    eligible: false,
  },
  {
    word: "átreme",
    eligible: false,
  },
  {
    word: "atrial",
    eligible: false,
  },
  {
    word: "átrico",
    eligible: false,
  },
  {
    word: "atrido",
    eligible: false,
  },
  {
    word: "atroce",
    eligible: false,
  },
  {
    word: "átroco",
    eligible: false,
  },
  {
    word: "átrofo",
    eligible: false,
  },
  {
    word: "atrola",
    eligible: false,
  },
  {
    word: "átropo",
    eligible: false,
  },
  {
    word: "atuaré",
    eligible: false,
  },
  {
    word: "atúdua",
    eligible: false,
  },
  {
    word: "atumba",
    eligible: false,
  },
  {
    word: "atundo",
    eligible: false,
  },
  {
    word: "atuoso",
    eligible: false,
  },
  {
    word: "atupir",
    eligible: false,
  },
  {
    word: "aturiá",
    eligible: false,
  },
  {
    word: "atutia",
    eligible: false,
  },
  {
    word: "aucuba",
    eligible: false,
  },
  {
    word: "audião",
    eligible: false,
  },
  {
    word: "áudion",
    eligible: false,
  },
  {
    word: "Augias",
    eligible: false,
  },
  {
    word: "augila",
    eligible: false,
  },
  {
    word: "augite",
    eligible: false,
  },
  {
    word: "áugure",
    eligible: false,
  },
  {
    word: "auiqui",
    eligible: false,
  },
  {
    word: "aujais",
    eligible: false,
  },
  {
    word: "áulace",
    eligible: false,
  },
  {
    word: "áulaco",
    eligible: false,
  },
  {
    word: "aulete",
    eligible: false,
  },
  {
    word: "áulico",
    eligible: false,
  },
  {
    word: "aulido",
    eligible: false,
  },
  {
    word: "aulopo",
    eligible: false,
  },
  {
    word: "aurada",
    eligible: false,
  },
  {
    word: "aurana",
    eligible: false,
  },
  {
    word: "aurato",
    eligible: false,
  },
  {
    word: "áureas",
    eligible: true,
  },
  {
    word: "aurela",
    eligible: false,
  },
  {
    word: "aureto",
    eligible: false,
  },
  {
    word: "aureus",
    eligible: false,
  },
  {
    word: "áurico",
    eligible: false,
  },
  {
    word: "aurigo",
    eligible: false,
  },
  {
    word: "aurila",
    eligible: false,
  },
  {
    word: "aurino",
    eligible: false,
  },
  {
    word: "aurito",
    eligible: false,
  },
  {
    word: "auropó",
    eligible: false,
  },
  {
    word: "aurora",
    eligible: true,
  },
  {
    word: "auroso",
    eligible: false,
  },
  {
    word: "austar",
    eligible: false,
  },
  {
    word: "austro",
    eligible: false,
  },
  {
    word: "auteco",
    eligible: false,
  },
  {
    word: "autode",
    eligible: false,
  },
  {
    word: "autora",
    eligible: false,
  },
  {
    word: "autuar",
    eligible: true,
  },
  {
    word: "auxese",
    eligible: false,
  },
  {
    word: "auxina",
    eligible: false,
  },
  {
    word: "auxita",
    eligible: false,
  },
  {
    word: "Auzate",
    eligible: false,
  },
  {
    word: "Avaití",
    eligible: false,
  },
  {
    word: "avamba",
    eligible: false,
  },
  {
    word: "avandi",
    eligible: false,
  },
  {
    word: "avania",
    eligible: false,
  },
  {
    word: "avante",
    eligible: true,
  },
  {
    word: "Avanza",
    eligible: false,
  },
  {
    word: "avatar",
    eligible: true,
  },
  {
    word: "aveado",
    eligible: false,
  },
  {
    word: "avecla",
    eligible: false,
  },
  {
    word: "aveias",
    eligible: false,
  },
  {
    word: "Aveiro",
    eligible: false,
  },
  {
    word: "avejão",
    eligible: false,
  },
  {
    word: "avelal",
    eligible: false,
  },
  {
    word: "avelãs",
    eligible: true,
  },
  {
    word: "avelós",
    eligible: false,
  },
  {
    word: "avenal",
    eligible: false,
  },
  {
    word: "avenca",
    eligible: false,
  },
  {
    word: "avense",
    eligible: false,
  },
  {
    word: "averno",
    eligible: false,
  },
  {
    word: "averso",
    eligible: true,
  },
  {
    word: "Avestá",
    eligible: false,
  },
  {
    word: "avesta",
    eligible: false,
  },
  {
    word: "avexar",
    eligible: false,
  },
  {
    word: "avezar",
    eligible: false,
  },
  {
    word: "aviaca",
    eligible: false,
  },
  {
    word: "Aviano",
    eligible: false,
  },
  {
    word: "avidez",
    eligible: false,
  },
  {
    word: "avilar",
    eligible: false,
  },
  {
    word: "avilês",
    eligible: false,
  },
  {
    word: "avindo",
    eligible: false,
  },
  {
    word: "aviões",
    eligible: false,
  },
  {
    word: "avisar",
    eligible: true,
  },
  {
    word: "avisos",
    eligible: true,
  },
  {
    word: "avivar",
    eligible: false,
  },
  {
    word: "avocar",
    eligible: false,
  },
  {
    word: "avoira",
    eligible: false,
  },
  {
    word: "avonde",
    eligible: false,
  },
  {
    word: "avondo",
    eligible: false,
  },
  {
    word: "avosar",
    eligible: false,
  },
  {
    word: "avulso",
    eligible: true,
  },
  {
    word: "avusca",
    eligible: false,
  },
  {
    word: "axaguá",
    eligible: false,
  },
  {
    word: "Axaiel",
    eligible: false,
  },
  {
    word: "axânti",
    eligible: false,
  },
  {
    word: "axanto",
    eligible: false,
  },
  {
    word: "axelho",
    eligible: false,
  },
  {
    word: "axilar",
    eligible: false,
  },
  {
    word: "aximez",
    eligible: false,
  },
  {
    word: "axioma",
    eligible: false,
  },
  {
    word: "axógum",
    eligible: false,
  },
  {
    word: "axoide",
    eligible: false,
  },
  {
    word: "axonal",
    eligible: false,
  },
  {
    word: "axonge",
    eligible: false,
  },
  {
    word: "axônio",
    eligible: false,
  },
  {
    word: "axuaju",
    eligible: false,
  },
  {
    word: "Ayrton",
    eligible: false,
  },
  {
    word: "azaina",
    eligible: false,
  },
  {
    word: "azálea",
    eligible: false,
  },
  {
    word: "azálio",
    eligible: false,
  },
  {
    word: "azamar",
    eligible: false,
  },
  {
    word: "azando",
    eligible: false,
  },
  {
    word: "azaola",
    eligible: false,
  },
  {
    word: "azaqui",
    eligible: false,
  },
  {
    word: "azarão",
    eligible: true,
  },
  {
    word: "azarar",
    eligible: true,
  },
  {
    word: "Azarel",
    eligible: false,
  },
  {
    word: "azaria",
    eligible: false,
  },
  {
    word: "azazel",
    eligible: false,
  },
  {
    word: "azebre",
    eligible: false,
  },
  {
    word: "azeche",
    eligible: false,
  },
  {
    word: "azedão",
    eligible: false,
  },
  {
    word: "azedar",
    eligible: true,
  },
  {
    word: "azedas",
    eligible: false,
  },
  {
    word: "azedém",
    eligible: false,
  },
  {
    word: "azedia",
    eligible: false,
  },
  {
    word: "azedos",
    eligible: true,
  },
  {
    word: "azedum",
    eligible: false,
  },
  {
    word: "azegue",
    eligible: false,
  },
  {
    word: "azeite",
    eligible: true,
  },
  {
    word: "azélia",
    eligible: false,
  },
  {
    word: "azemel",
    eligible: false,
  },
  {
    word: "azenha",
    eligible: false,
  },
  {
    word: "azerbe",
    eligible: false,
  },
  {
    word: "azerve",
    eligible: false,
  },
  {
    word: "azevão",
    eligible: false,
  },
  {
    word: "azêvar",
    eligible: false,
  },
  {
    word: "azevém",
    eligible: false,
  },
  {
    word: "azevia",
    eligible: false,
  },
  {
    word: "azevim",
    eligible: false,
  },
  {
    word: "azevre",
    eligible: false,
  },
  {
    word: "aziago",
    eligible: false,
  },
  {
    word: "azíbar",
    eligible: false,
  },
  {
    word: "aziche",
    eligible: false,
  },
  {
    word: "azimba",
    eligible: false,
  },
  {
    word: "azimia",
    eligible: false,
  },
  {
    word: "aziúme",
    eligible: false,
  },
  {
    word: "Aznote",
    eligible: false,
  },
  {
    word: "azodol",
    eligible: false,
  },
  {
    word: "azonal",
    eligible: false,
  },
  {
    word: "azoque",
    eligible: false,
  },
  {
    word: "azosma",
    eligible: false,
  },
  {
    word: "azotar",
    eligible: false,
  },
  {
    word: "azotol",
    eligible: false,
  },
  {
    word: "Azriel",
    eligible: false,
  },
  {
    word: "azteca",
    eligible: false,
  },
  {
    word: "azuago",
    eligible: false,
  },
  {
    word: "azuela",
    eligible: false,
  },
  {
    word: "azulão",
    eligible: false,
  },
  {
    word: "Azuléa",
    eligible: false,
  },
  {
    word: "azuqui",
    eligible: false,
  },
  {
    word: "azurar",
    eligible: false,
  },
  {
    word: "baamês",
    eligible: false,
  },
  {
    word: "baanda",
    eligible: false,
  },
  {
    word: "baango",
    eligible: false,
  },
  {
    word: "baarás",
    eligible: false,
  },
  {
    word: "baazas",
    eligible: false,
  },
  {
    word: "bababi",
    eligible: false,
  },
  {
    word: "babaca",
    eligible: true,
  },
  {
    word: "babaço",
    eligible: false,
  },
  {
    word: "babaçu",
    eligible: false,
  },
  {
    word: "babadé",
    eligible: false,
  },
  {
    word: "babado",
    eligible: false,
  },
  {
    word: "babaré",
    eligible: false,
  },
  {
    word: "babaua",
    eligible: false,
  },
  {
    word: "babear",
    eligible: false,
  },
  {
    word: "babece",
    eligible: false,
  },
  {
    word: "babeco",
    eligible: false,
  },
  {
    word: "babete",
    eligible: false,
  },
  {
    word: "baboca",
    eligible: false,
  },
  {
    word: "babões",
    eligible: false,
  },
  {
    word: "babona",
    eligible: false,
  },
  {
    word: "baboré",
    eligible: false,
  },
  {
    word: "babosa",
    eligible: false,
  },
  {
    word: "baboso",
    eligible: false,
  },
  {
    word: "babuco",
    eligible: false,
  },
  {
    word: "babuge",
    eligible: false,
  },
  {
    word: "babuma",
    eligible: false,
  },
  {
    word: "bacaaí",
    eligible: false,
  },
  {
    word: "bacaba",
    eligible: false,
  },
  {
    word: "bacabá",
    eligible: false,
  },
  {
    word: "bacaca",
    eligible: false,
  },
  {
    word: "bacacu",
    eligible: false,
  },
  {
    word: "bacada",
    eligible: false,
  },
  {
    word: "bacalé",
    eligible: false,
  },
  {
    word: "bacama",
    eligible: false,
  },
  {
    word: "bacano",
    eligible: false,
  },
  {
    word: "bacará",
    eligible: false,
  },
  {
    word: "bacare",
    eligible: false,
  },
  {
    word: "bacaro",
    eligible: false,
  },
  {
    word: "bácaro",
    eligible: false,
  },
  {
    word: "bacato",
    eligible: false,
  },
  {
    word: "Bacaxá",
    eligible: false,
  },
  {
    word: "bacazi",
    eligible: false,
  },
  {
    word: "baceta",
    eligible: false,
  },
  {
    word: "bachão",
    eligible: false,
  },
  {
    word: "bachar",
    eligible: false,
  },
  {
    word: "bacial",
    eligible: false,
  },
  {
    word: "baciar",
    eligible: false,
  },
  {
    word: "bacias",
    eligible: false,
  },
  {
    word: "bacilo",
    eligible: false,
  },
  {
    word: "backup",
    eligible: false,
  },
  {
    word: "bacoco",
    eligible: false,
  },
  {
    word: "bacola",
    eligible: false,
  },
  {
    word: "bacopa",
    eligible: false,
  },
  {
    word: "bacopá",
    eligible: false,
  },
  {
    word: "bacorá",
    eligible: false,
  },
  {
    word: "bacori",
    eligible: false,
  },
  {
    word: "bácoro",
    eligible: false,
  },
  {
    word: "bacota",
    eligible: false,
  },
  {
    word: "bactro",
    eligible: false,
  },
  {
    word: "bacuaí",
    eligible: false,
  },
  {
    word: "bacuba",
    eligible: false,
  },
  {
    word: "bacucu",
    eligible: false,
  },
  {
    word: "bacuçu",
    eligible: false,
  },
  {
    word: "bacuda",
    eligible: false,
  },
  {
    word: "bacuém",
    eligible: false,
  },
  {
    word: "baculo",
    eligible: false,
  },
  {
    word: "báculo",
    eligible: false,
  },
  {
    word: "bacuol",
    eligible: false,
  },
  {
    word: "bacupã",
    eligible: false,
  },
  {
    word: "bacura",
    eligible: false,
  },
  {
    word: "bacuri",
    eligible: false,
  },
  {
    word: "Bacute",
    eligible: false,
  },
  {
    word: "bacuto",
    eligible: false,
  },
  {
    word: "bacuva",
    eligible: false,
  },
  {
    word: "badaga",
    eligible: false,
  },
  {
    word: "badaje",
    eligible: false,
  },
  {
    word: "badajo",
    eligible: false,
  },
  {
    word: "badalo",
    eligible: false,
  },
  {
    word: "badame",
    eligible: false,
  },
  {
    word: "badamo",
    eligible: false,
  },
  {
    word: "badamu",
    eligible: false,
  },
  {
    word: "Badaró",
    eligible: false,
  },
  {
    word: "badejo",
    eligible: false,
  },
  {
    word: "badele",
    eligible: false,
  },
  {
    word: "badelo",
    eligible: false,
  },
  {
    word: "badião",
    eligible: false,
  },
  {
    word: "badiar",
    eligible: false,
  },
  {
    word: "badico",
    eligible: false,
  },
  {
    word: "badigó",
    eligible: false,
  },
  {
    word: "badine",
    eligible: false,
  },
  {
    word: "badoém",
    eligible: false,
  },
  {
    word: "badofe",
    eligible: false,
  },
  {
    word: "badola",
    eligible: false,
  },
  {
    word: "badona",
    eligible: false,
  },
  {
    word: "baduca",
    eligible: false,
  },
  {
    word: "badusa",
    eligible: false,
  },
  {
    word: "baetal",
    eligible: false,
  },
  {
    word: "baetão",
    eligible: false,
  },
  {
    word: "baetas",
    eligible: false,
  },
  {
    word: "baeuna",
    eligible: false,
  },
  {
    word: "bafafá",
    eligible: false,
  },
  {
    word: "bafari",
    eligible: false,
  },
  {
    word: "bafetá",
    eligible: false,
  },
  {
    word: "bafuge",
    eligible: false,
  },
  {
    word: "bafume",
    eligible: false,
  },
  {
    word: "bagaço",
    eligible: false,
  },
  {
    word: "bagada",
    eligible: false,
  },
  {
    word: "bagadá",
    eligible: false,
  },
  {
    word: "bagadu",
    eligible: false,
  },
  {
    word: "bagala",
    eligible: false,
  },
  {
    word: "bagana",
    eligible: false,
  },
  {
    word: "bagata",
    eligible: false,
  },
  {
    word: "bagaxa",
    eligible: false,
  },
  {
    word: "bagear",
    eligible: false,
  },
  {
    word: "bageri",
    eligible: false,
  },
  {
    word: "bagiro",
    eligible: false,
  },
  {
    word: "bagoal",
    eligible: false,
  },
  {
    word: "bagoar",
    eligible: false,
  },
  {
    word: "bagobo",
    eligible: false,
  },
  {
    word: "bagres",
    eligible: false,
  },
  {
    word: "bagrês",
    eligible: false,
  },
  {
    word: "bagual",
    eligible: false,
  },
  {
    word: "bagudo",
    eligible: false,
  },
  {
    word: "baguiá",
    eligible: false,
  },
  {
    word: "baguim",
    eligible: false,
  },
  {
    word: "baguió",
    eligible: false,
  },
  {
    word: "bagume",
    eligible: false,
  },
  {
    word: "baguri",
    eligible: false,
  },
  {
    word: "baiaco",
    eligible: false,
  },
  {
    word: "baiacu",
    eligible: false,
  },
  {
    word: "baiagu",
    eligible: false,
  },
  {
    word: "baiaiá",
    eligible: false,
  },
  {
    word: "baianá",
    eligible: false,
  },
  {
    word: "baiâni",
    eligible: false,
  },
  {
    word: "baiano",
    eligible: false,
  },
  {
    word: "Baical",
    eligible: false,
  },
  {
    word: "baicar",
    eligible: false,
  },
  {
    word: "baidar",
    eligible: false,
  },
  {
    word: "baieié",
    eligible: false,
  },
  {
    word: "baiete",
    eligible: false,
  },
  {
    word: "bailão",
    eligible: false,
  },
  {
    word: "bailar",
    eligible: false,
  },
  {
    word: "bailéu",
    eligible: false,
  },
  {
    word: "bailio",
    eligible: false,
  },
  {
    word: "bainha",
    eligible: false,
  },
  {
    word: "baiona",
    eligible: false,
  },
  {
    word: "baiote",
    eligible: false,
  },
  {
    word: "Bairaê",
    eligible: false,
  },
  {
    word: "bairão",
    eligible: false,
  },
  {
    word: "bairro",
    eligible: false,
  },
  {
    word: "baiuca",
    eligible: false,
  },
  {
    word: "baixão",
    eligible: false,
  },
  {
    word: "baixar",
    eligible: false,
  },
  {
    word: "baixas",
    eligible: false,
  },
  {
    word: "baixel",
    eligible: false,
  },
  {
    word: "baixio",
    eligible: false,
  },
  {
    word: "Baixos",
    eligible: false,
  },
  {
    word: "baixos",
    eligible: false,
  },
  {
    word: "bajacu",
    eligible: false,
  },
  {
    word: "bajano",
    eligible: false,
  },
  {
    word: "bajear",
    eligible: false,
  },
  {
    word: "bajeca",
    eligible: false,
  },
  {
    word: "bajerê",
    eligible: false,
  },
  {
    word: "bajeto",
    eligible: false,
  },
  {
    word: "bajiru",
    eligible: false,
  },
  {
    word: "Bajite",
    eligible: false,
  },
  {
    word: "bajoco",
    eligible: false,
  },
  {
    word: "bajude",
    eligible: false,
  },
  {
    word: "bájulo",
    eligible: false,
  },
  {
    word: "bajuri",
    eligible: false,
  },
  {
    word: "Balaão",
    eligible: false,
  },
  {
    word: "balaca",
    eligible: false,
  },
  {
    word: "balaço",
    eligible: false,
  },
  {
    word: "Baladã",
    eligible: false,
  },
  {
    word: "balada",
    eligible: false,
  },
  {
    word: "balafó",
    eligible: false,
  },
  {
    word: "balaio",
    eligible: false,
  },
  {
    word: "balala",
    eligible: false,
  },
  {
    word: "balame",
    eligible: false,
  },
  {
    word: "bálano",
    eligible: false,
  },
  {
    word: "bálaro",
    eligible: false,
  },
  {
    word: "balata",
    eligible: false,
  },
  {
    word: "balato",
    eligible: false,
  },
  {
    word: "balaxe",
    eligible: false,
  },
  {
    word: "balboa",
    eligible: false,
  },
  {
    word: "balcão",
    eligible: false,
  },
  {
    word: "balção",
    eligible: false,
  },
  {
    word: "Bálcãs",
    eligible: false,
  },
  {
    word: "balças",
    eligible: false,
  },
  {
    word: "baldão",
    eligible: false,
  },
  {
    word: "baldar",
    eligible: false,
  },
  {
    word: "Bálder",
    eligible: false,
  },
  {
    word: "Baldim",
    eligible: false,
  },
  {
    word: "baldio",
    eligible: false,
  },
  {
    word: "baldos",
    eligible: false,
  },
  {
    word: "baleal",
    eligible: false,
  },
  {
    word: "balear",
    eligible: false,
  },
  {
    word: "baleia",
    eligible: false,
  },
  {
    word: "balela",
    eligible: false,
  },
  {
    word: "balema",
    eligible: false,
  },
  {
    word: "balhão",
    eligible: false,
  },
  {
    word: "balhar",
    eligible: false,
  },
  {
    word: "balhau",
    eligible: false,
  },
  {
    word: "balila",
    eligible: false,
  },
  {
    word: "balili",
    eligible: false,
  },
  {
    word: "baliza",
    eligible: false,
  },
  {
    word: "balmaz",
    eligible: false,
  },
  {
    word: "baloar",
    eligible: false,
  },
  {
    word: "baloba",
    eligible: false,
  },
  {
    word: "Balões",
    eligible: false,
  },
  {
    word: "balões",
    eligible: false,
  },
  {
    word: "balofo",
    eligible: false,
  },
  {
    word: "balona",
    eligible: false,
  },
  {
    word: "balsão",
    eligible: false,
  },
  {
    word: "balsar",
    eligible: false,
  },
  {
    word: "baltar",
    eligible: false,
  },
  {
    word: "bálteo",
    eligible: false,
  },
  {
    word: "Baltes",
    eligible: false,
  },
  {
    word: "baluba",
    eligible: false,
  },
  {
    word: "baludo",
    eligible: false,
  },
  {
    word: "baluga",
    eligible: false,
  },
  {
    word: "balule",
    eligible: false,
  },
  {
    word: "baluma",
    eligible: false,
  },
  {
    word: "Bamaco",
    eligible: false,
  },
  {
    word: "bambaê",
    eligible: false,
  },
  {
    word: "bambão",
    eligible: false,
  },
  {
    word: "bambar",
    eligible: false,
  },
  {
    word: "bambas",
    eligible: false,
  },
  {
    word: "bambiá",
    eligible: false,
  },
  {
    word: "Bambuí",
    eligible: false,
  },
  {
    word: "bambum",
    eligible: false,
  },
  {
    word: "bambur",
    eligible: false,
  },
  {
    word: "bambus",
    eligible: false,
  },
  {
    word: "Bamote",
    eligible: false,
  },
  {
    word: "banaca",
    eligible: false,
  },
  {
    word: "banana",
    eligible: false,
  },
  {
    word: "banano",
    eligible: false,
  },
  {
    word: "banare",
    eligible: false,
  },
  {
    word: "banaro",
    eligible: false,
  },
  {
    word: "banato",
    eligible: false,
  },
  {
    word: "banauá",
    eligible: false,
  },
  {
    word: "bancal",
    eligible: false,
  },
  {
    word: "bancão",
    eligible: false,
  },
  {
    word: "bancar",
    eligible: false,
  },
  {
    word: "bâncio",
    eligible: false,
  },
  {
    word: "Bancoc",
    eligible: false,
  },
  {
    word: "bancos",
    eligible: false,
  },
  {
    word: "bancul",
    eligible: false,
  },
  {
    word: "bandão",
    eligible: false,
  },
  {
    word: "bandar",
    eligible: false,
  },
  {
    word: "bandas",
    eligible: false,
  },
  {
    word: "bandel",
    eligible: false,
  },
  {
    word: "bandim",
    eligible: false,
  },
  {
    word: "bandir",
    eligible: false,
  },
  {
    word: "bandos",
    eligible: false,
  },
  {
    word: "bandrá",
    eligible: false,
  },
  {
    word: "Banerj",
    eligible: false,
  },
  {
    word: "Banese",
    eligible: false,
  },
  {
    word: "bangão",
    eligible: false,
  },
  {
    word: "bangba",
    eligible: false,
  },
  {
    word: "bângia",
    eligible: false,
  },
  {
    word: "banguá",
    eligible: false,
  },
  {
    word: "bangue",
    eligible: false,
  },
  {
    word: "bangué",
    eligible: false,
  },
  {
    word: "banguê",
    eligible: false,
  },
  {
    word: "Bangui",
    eligible: false,
  },
  {
    word: "banhar",
    eligible: false,
  },
  {
    word: "banhos",
    eligible: false,
  },
  {
    word: "banhum",
    eligible: false,
  },
  {
    word: "baniba",
    eligible: false,
  },
  {
    word: "banibá",
    eligible: false,
  },
  {
    word: "banini",
    eligible: false,
  },
  {
    word: "baníua",
    eligible: false,
  },
  {
    word: "baniva",
    eligible: false,
  },
  {
    word: "Banjul",
    eligible: false,
  },
  {
    word: "bantal",
    eligible: false,
  },
  {
    word: "bantim",
    eligible: false,
  },
  {
    word: "Banzaê",
    eligible: false,
  },
  {
    word: "banzão",
    eligible: false,
  },
  {
    word: "banzar",
    eligible: false,
  },
  {
    word: "banzos",
    eligible: false,
  },
  {
    word: "bapeba",
    eligible: false,
  },
  {
    word: "bapeva",
    eligible: false,
  },
  {
    word: "baquio",
    eligible: false,
  },
  {
    word: "báquio",
    eligible: false,
  },
  {
    word: "baraba",
    eligible: false,
  },
  {
    word: "barabô",
    eligible: false,
  },
  {
    word: "barabu",
    eligible: false,
  },
  {
    word: "baraço",
    eligible: false,
  },
  {
    word: "barada",
    eligible: false,
  },
  {
    word: "baraia",
    eligible: false,
  },
  {
    word: "barajá",
    eligible: false,
  },
  {
    word: "barajo",
    eligible: false,
  },
  {
    word: "barama",
    eligible: false,
  },
  {
    word: "barapo",
    eligible: false,
  },
  {
    word: "barará",
    eligible: false,
  },
  {
    word: "barare",
    eligible: false,
  },
  {
    word: "barata",
    eligible: false,
  },
  {
    word: "barato",
    eligible: false,
  },
  {
    word: "baraxu",
    eligible: false,
  },
  {
    word: "barbal",
    eligible: false,
  },
  {
    word: "barbar",
    eligible: false,
  },
  {
    word: "barbas",
    eligible: false,
  },
  {
    word: "barbim",
    eligible: false,
  },
  {
    word: "barbos",
    eligible: false,
  },
  {
    word: "bárbus",
    eligible: false,
  },
  {
    word: "barcas",
    eligible: false,
  },
  {
    word: "barceu",
    eligible: false,
  },
  {
    word: "barcos",
    eligible: false,
  },
  {
    word: "bardal",
    eligible: false,
  },
  {
    word: "bardão",
    eligible: false,
  },
  {
    word: "bardar",
    eligible: false,
  },
  {
    word: "bárdea",
    eligible: false,
  },
  {
    word: "bardeu",
    eligible: false,
  },
  {
    word: "bardia",
    eligible: false,
  },
  {
    word: "bardos",
    eligible: false,
  },
  {
    word: "barege",
    eligible: false,
  },
  {
    word: "bareia",
    eligible: false,
  },
  {
    word: "Barein",
    eligible: false,
  },
  {
    word: "barela",
    eligible: false,
  },
  {
    word: "baremo",
    eligible: false,
  },
  {
    word: "bareta",
    eligible: false,
  },
  {
    word: "barexa",
    eligible: false,
  },
  {
    word: "barfol",
    eligible: false,
  },
  {
    word: "barges",
    eligible: false,
  },
  {
    word: "barião",
    eligible: false,
  },
  {
    word: "bariba",
    eligible: false,
  },
  {
    word: "bárico",
    eligible: false,
  },
  {
    word: "bariga",
    eligible: false,
  },
  {
    word: "barine",
    eligible: false,
  },
  {
    word: "bárion",
    eligible: false,
  },
  {
    word: "baripa",
    eligible: false,
  },
  {
    word: "bariri",
    eligible: false,
  },
  {
    word: "barita",
    eligible: false,
  },
  {
    word: "barite",
    eligible: false,
  },
  {
    word: "barito",
    eligible: false,
  },
  {
    word: "bárium",
    eligible: false,
  },
  {
    word: "bárnea",
    eligible: false,
  },
  {
    word: "baroas",
    eligible: false,
  },
  {
    word: "baroce",
    eligible: false,
  },
  {
    word: "baroco",
    eligible: false,
  },
  {
    word: "barolo",
    eligible: false,
  },
  {
    word: "baroma",
    eligible: false,
  },
  {
    word: "barona",
    eligible: false,
  },
  {
    word: "barpur",
    eligible: false,
  },
  {
    word: "barquê",
    eligible: false,
  },
  {
    word: "barral",
    eligible: false,
  },
  {
    word: "barrão",
    eligible: false,
  },
  {
    word: "barrar",
    eligible: false,
  },
  {
    word: "barras",
    eligible: false,
  },
  {
    word: "barrer",
    eligible: false,
  },
  {
    word: "barril",
    eligible: false,
  },
  {
    word: "barrir",
    eligible: false,
  },
  {
    word: "Barris",
    eligible: false,
  },
  {
    word: "barris",
    eligible: false,
  },
  {
    word: "barros",
    eligible: false,
  },
  {
    word: "barsim",
    eligible: false,
  },
  {
    word: "barujo",
    eligible: false,
  },
  {
    word: "baruru",
    eligible: false,
  },
  {
    word: "baruto",
    eligible: false,
  },
  {
    word: "barzói",
    eligible: false,
  },
  {
    word: "basana",
    eligible: false,
  },
  {
    word: "básana",
    eligible: false,
  },
  {
    word: "basané",
    eligible: false,
  },
  {
    word: "bascos",
    eligible: false,
  },
  {
    word: "basear",
    eligible: false,
  },
  {
    word: "basela",
    eligible: false,
  },
  {
    word: "Basemá",
    eligible: false,
  },
  {
    word: "basial",
    eligible: false,
  },
  {
    word: "básico",
    eligible: false,
  },
  {
    word: "baside",
    eligible: false,
  },
  {
    word: "báside",
    eligible: false,
  },
  {
    word: "basila",
    eligible: false,
  },
  {
    word: "Basino",
    eligible: false,
  },
  {
    word: "básion",
    eligible: false,
  },
  {
    word: "basise",
    eligible: false,
  },
  {
    word: "basite",
    eligible: false,
  },
  {
    word: "basofo",
    eligible: false,
  },
  {
    word: "Bassas",
    eligible: false,
  },
  {
    word: "bássia",
    eligible: false,
  },
  {
    word: "bastão",
    eligible: false,
  },
  {
    word: "bastar",
    eligible: false,
  },
  {
    word: "bastio",
    eligible: false,
  },
  {
    word: "bastir",
    eligible: false,
  },
  {
    word: "bastos",
    eligible: false,
  },
  {
    word: "basuto",
    eligible: false,
  },
  {
    word: "bataca",
    eligible: false,
  },
  {
    word: "batage",
    eligible: false,
  },
  {
    word: "bataló",
    eligible: false,
  },
  {
    word: "bataná",
    eligible: false,
  },
  {
    word: "batano",
    eligible: false,
  },
  {
    word: "batará",
    eligible: false,
  },
  {
    word: "bátaro",
    eligible: false,
  },
  {
    word: "batata",
    eligible: false,
  },
  {
    word: "batatá",
    eligible: false,
  },
  {
    word: "batate",
    eligible: false,
  },
  {
    word: "batauá",
    eligible: false,
  },
  {
    word: "batavo",
    eligible: false,
  },
  {
    word: "batcar",
    eligible: false,
  },
  {
    word: "batear",
    eligible: false,
  },
  {
    word: "bateca",
    eligible: false,
  },
  {
    word: "bátega",
    eligible: false,
  },
  {
    word: "batelo",
    eligible: false,
  },
  {
    word: "batetê",
    eligible: false,
  },
  {
    word: "batial",
    eligible: false,
  },
  {
    word: "bátide",
    eligible: false,
  },
  {
    word: "batido",
    eligible: false,
  },
  {
    word: "Batilo",
    eligible: false,
  },
  {
    word: "batimo",
    eligible: false,
  },
  {
    word: "batina",
    eligible: false,
  },
  {
    word: "batisa",
    eligible: false,
  },
  {
    word: "batité",
    eligible: false,
  },
  {
    word: "bátmis",
    eligible: false,
  },
  {
    word: "batola",
    eligible: false,
  },
  {
    word: "batoré",
    eligible: false,
  },
  {
    word: "bátsua",
    eligible: false,
  },
  {
    word: "batuda",
    eligible: false,
  },
  {
    word: "Batuel",
    eligible: false,
  },
  {
    word: "batuta",
    eligible: false,
  },
  {
    word: "bauaçu",
    eligible: false,
  },
  {
    word: "bauala",
    eligible: false,
  },
  {
    word: "bauana",
    eligible: false,
  },
  {
    word: "bauari",
    eligible: false,
  },
  {
    word: "baubau",
    eligible: false,
  },
  {
    word: "baudur",
    eligible: false,
  },
  {
    word: "bauera",
    eligible: false,
  },
  {
    word: "baúnas",
    eligible: false,
  },
  {
    word: "baurim",
    eligible: false,
  },
  {
    word: "bávaro",
    eligible: false,
  },
  {
    word: "Baveno",
    eligible: false,
  },
  {
    word: "bavete",
    eligible: false,
  },
  {
    word: "bavina",
    eligible: false,
  },
  {
    word: "baxado",
    eligible: false,
  },
  {
    word: "baxana",
    eligible: false,
  },
  {
    word: "baxete",
    eligible: false,
  },
  {
    word: "baxixá",
    eligible: false,
  },
  {
    word: "baxixe",
    eligible: false,
  },
  {
    word: "Bayeux",
    eligible: false,
  },
  {
    word: "bazana",
    eligible: false,
  },
  {
    word: "bazoar",
    eligible: false,
  },
  {
    word: "bazofo",
    eligible: false,
  },
  {
    word: "bazuca",
    eligible: false,
  },
  {
    word: "bdelar",
    eligible: false,
  },
  {
    word: "bdélio",
    eligible: false,
  },
  {
    word: "Beagle",
    eligible: false,
  },
  {
    word: "beânia",
    eligible: false,
  },
  {
    word: "beatão",
    eligible: false,
  },
  {
    word: "beatle",
    eligible: false,
  },
  {
    word: "bebaço",
    eligible: false,
  },
  {
    word: "bêbado",
    eligible: false,
  },
  {
    word: "bébbia",
    eligible: false,
  },
  {
    word: "bêbedo",
    eligible: false,
  },
  {
    word: "bebena",
    eligible: false,
  },
  {
    word: "bêbera",
    eligible: false,
  },
  {
    word: "beberu",
    eligible: false,
  },
  {
    word: "Bebeto",
    eligible: false,
  },
  {
    word: "bebica",
    eligible: false,
  },
  {
    word: "bebida",
    eligible: false,
  },
  {
    word: "bebiru",
    eligible: false,
  },
  {
    word: "bebudo",
    eligible: false,
  },
  {
    word: "becape",
    eligible: false,
  },
  {
    word: "bécher",
    eligible: false,
  },
  {
    word: "bécula",
    eligible: false,
  },
  {
    word: "becuna",
    eligible: false,
  },
  {
    word: "Bedade",
    eligible: false,
  },
  {
    word: "bedame",
    eligible: false,
  },
  {
    word: "bedear",
    eligible: false,
  },
  {
    word: "bedião",
    eligible: false,
  },
  {
    word: "Bedias",
    eligible: false,
  },
  {
    word: "bedros",
    eligible: false,
  },
  {
    word: "beduim",
    eligible: false,
  },
  {
    word: "bédulo",
    eligible: false,
  },
  {
    word: "bedúsi",
    eligible: false,
  },
  {
    word: "beenel",
    eligible: false,
  },
  {
    word: "beeper",
    eligible: false,
  },
  {
    word: "befami",
    eligible: false,
  },
  {
    word: "begias",
    eligible: false,
  },
  {
    word: "begume",
    eligible: false,
  },
  {
    word: "beiçar",
    eligible: false,
  },
  {
    word: "beiços",
    eligible: false,
  },
  {
    word: "beifes",
    eligible: false,
  },
  {
    word: "beijão",
    eligible: false,
  },
  {
    word: "beijar",
    eligible: false,
  },
  {
    word: "beijos",
    eligible: false,
  },
  {
    word: "beijus",
    eligible: false,
  },
  {
    word: "beilhó",
    eligible: false,
  },
  {
    word: "beinhã",
    eligible: false,
  },
  {
    word: "beiral",
    eligible: false,
  },
  {
    word: "beirão",
    eligible: false,
  },
  {
    word: "beirar",
    eligible: false,
  },
  {
    word: "beiras",
    eligible: false,
  },
  {
    word: "beiroa",
    eligible: false,
  },
  {
    word: "bejabã",
    eligible: false,
  },
  {
    word: "bejala",
    eligible: false,
  },
  {
    word: "bejoga",
    eligible: false,
  },
  {
    word: "bejuco",
    eligible: false,
  },
  {
    word: "bejula",
    eligible: false,
  },
  {
    word: "beladi",
    eligible: false,
  },
  {
    word: "belala",
    eligible: false,
  },
  {
    word: "belano",
    eligible: false,
  },
  {
    word: "belbas",
    eligible: false,
  },
  {
    word: "beldão",
    eligible: false,
  },
  {
    word: "beldar",
    eligible: false,
  },
  {
    word: "beldre",
    eligible: false,
  },
  {
    word: "beldro",
    eligible: false,
  },
  {
    word: "beledi",
    eligible: false,
  },
  {
    word: "belelê",
    eligible: false,
  },
  {
    word: "beleno",
    eligible: false,
  },
  {
    word: "beleta",
    eligible: false,
  },
  {
    word: "beleua",
    eligible: false,
  },
  {
    word: "beleza",
    eligible: false,
  },
  {
    word: "belgas",
    eligible: false,
  },
  {
    word: "Bélgio",
    eligible: false,
  },
  {
    word: "Belial",
    eligible: false,
  },
  {
    word: "bélico",
    eligible: false,
  },
  {
    word: "belida",
    eligible: false,
  },
  {
    word: "bélida",
    eligible: false,
  },
  {
    word: "Belido",
    eligible: false,
  },
  {
    word: "belila",
    eligible: false,
  },
  {
    word: "belino",
    eligible: false,
  },
  {
    word: "Belisa",
    eligible: false,
  },
  {
    word: "Belito",
    eligible: false,
  },
  {
    word: "bélium",
    eligible: false,
  },
  {
    word: "Belize",
    eligible: false,
  },
  {
    word: "belmaz",
    eligible: false,
  },
  {
    word: "Belmir",
    eligible: false,
  },
  {
    word: "belone",
    eligible: false,
  },
  {
    word: "belopo",
    eligible: false,
  },
  {
    word: "belota",
    eligible: false,
  },
  {
    word: "beluca",
    eligible: false,
  },
  {
    word: "beluga",
    eligible: false,
  },
  {
    word: "beluta",
    eligible: false,
  },
  {
    word: "belver",
    eligible: false,
  },
  {
    word: "bembel",
    eligible: false,
  },
  {
    word: "bêmber",
    eligible: false,
  },
  {
    word: "bembil",
    eligible: false,
  },
  {
    word: "bêmbix",
    eligible: false,
  },
  {
    word: "benado",
    eligible: false,
  },
  {
    word: "Benaia",
    eligible: false,
  },
  {
    word: "benção",
    eligible: false,
  },
  {
    word: "bênção",
    eligible: false,
  },
  {
    word: "benefe",
    eligible: false,
  },
  {
    word: "benete",
    eligible: false,
  },
  {
    word: "Benfam",
    eligible: false,
  },
  {
    word: "bengue",
    eligible: false,
  },
  {
    word: "benguê",
    eligible: false,
  },
  {
    word: "bênico",
    eligible: false,
  },
  {
    word: "benino",
    eligible: false,
  },
  {
    word: "Beninu",
    eligible: false,
  },
  {
    word: "Benito",
    eligible: false,
  },
  {
    word: "benjoí",
    eligible: false,
  },
  {
    word: "Benote",
    eligible: false,
  },
  {
    word: "bental",
    eligible: false,
  },
  {
    word: "bentas",
    eligible: false,
  },
  {
    word: "bentém",
    eligible: false,
  },
  {
    word: "Bentes",
    eligible: false,
  },
  {
    word: "Bentim",
    eligible: false,
  },
  {
    word: "bentos",
    eligible: false,
  },
  {
    word: "benzer",
    eligible: false,
  },
  {
    word: "benzol",
    eligible: false,
  },
  {
    word: "beócio",
    eligible: false,
  },
  {
    word: "béquea",
    eligible: false,
  },
  {
    word: "Bequer",
    eligible: false,
  },
  {
    word: "béquer",
    eligible: false,
  },
  {
    word: "beques",
    eligible: false,
  },
  {
    word: "beraca",
    eligible: false,
  },
  {
    word: "berana",
    eligible: false,
  },
  {
    word: "berate",
    eligible: false,
  },
  {
    word: "berbão",
    eligible: false,
  },
  {
    word: "berber",
    eligible: false,
  },
  {
    word: "berbim",
    eligible: false,
  },
  {
    word: "berçar",
    eligible: false,
  },
  {
    word: "berços",
    eligible: false,
  },
  {
    word: "bereba",
    eligible: false,
  },
  {
    word: "berebé",
    eligible: false,
  },
  {
    word: "berebi",
    eligible: false,
  },
  {
    word: "Berede",
    eligible: false,
  },
  {
    word: "Bereia",
    eligible: false,
  },
  {
    word: "bereré",
    eligible: false,
  },
  {
    word: "bererê",
    eligible: false,
  },
  {
    word: "bereta",
    eligible: false,
  },
  {
    word: "bereva",
    eligible: false,
  },
  {
    word: "bergão",
    eligible: false,
  },
  {
    word: "bérgia",
    eligible: false,
  },
  {
    word: "Berias",
    eligible: false,
  },
  {
    word: "beriba",
    eligible: false,
  },
  {
    word: "beribá",
    eligible: false,
  },
  {
    word: "beride",
    eligible: false,
  },
  {
    word: "berido",
    eligible: false,
  },
  {
    word: "berija",
    eligible: false,
  },
  {
    word: "berilo",
    eligible: false,
  },
  {
    word: "beriva",
    eligible: false,
  },
  {
    word: "berivá",
    eligible: false,
  },
  {
    word: "Berlim",
    eligible: false,
  },
  {
    word: "berlim",
    eligible: false,
  },
  {
    word: "bernaz",
    eligible: false,
  },
  {
    word: "bernês",
    eligible: false,
  },
  {
    word: "bérnio",
    eligible: false,
  },
  {
    word: "beroba",
    eligible: false,
  },
  {
    word: "beroso",
    eligible: false,
  },
  {
    word: "Berota",
    eligible: false,
  },
  {
    word: "berrão",
    eligible: false,
  },
  {
    word: "berrar",
    eligible: false,
  },
  {
    word: "bérria",
    eligible: false,
  },
  {
    word: "berroa",
    eligible: false,
  },
  {
    word: "bérula",
    eligible: false,
  },
  {
    word: "Beruri",
    eligible: false,
  },
  {
    word: "Besete",
    eligible: false,
  },
  {
    word: "bespão",
    eligible: false,
  },
  {
    word: "Bessém",
    eligible: false,
  },
  {
    word: "bestar",
    eligible: false,
  },
  {
    word: "bestas",
    eligible: false,
  },
  {
    word: "béstia",
    eligible: false,
  },
  {
    word: "besugo",
    eligible: false,
  },
  {
    word: "betaru",
    eligible: false,
  },
  {
    word: "beteco",
    eligible: false,
  },
  {
    word: "bétele",
    eligible: false,
  },
  {
    word: "bétere",
    eligible: false,
  },
  {
    word: "bético",
    eligible: false,
  },
  {
    word: "betila",
    eligible: false,
  },
  {
    word: "bétilo",
    eligible: false,
  },
  {
    word: "Betina",
    eligible: false,
  },
  {
    word: "betoia",
    eligible: false,
  },
  {
    word: "betral",
    eligible: false,
  },
  {
    word: "bétris",
    eligible: false,
  },
  {
    word: "bétulo",
    eligible: false,
  },
  {
    word: "betume",
    eligible: false,
  },
  {
    word: "betune",
    eligible: false,
  },
  {
    word: "beúria",
    eligible: false,
  },
  {
    word: "bêvera",
    eligible: false,
  },
  {
    word: "bexiga",
    eligible: false,
  },
  {
    word: "bexuco",
    eligible: false,
  },
  {
    word: "bexugo",
    eligible: false,
  },
  {
    word: "bezana",
    eligible: false,
  },
  {
    word: "bezoar",
    eligible: false,
  },
  {
    word: "bezogo",
    eligible: false,
  },
  {
    word: "biafar",
    eligible: false,
  },
  {
    word: "Biagio",
    eligible: false,
  },
  {
    word: "bianco",
    eligible: false,
  },
  {
    word: "bianda",
    eligible: false,
  },
  {
    word: "biango",
    eligible: false,
  },
  {
    word: "Bianor",
    eligible: false,
  },
  {
    word: "Biante",
    eligible: false,
  },
  {
    word: "biarão",
    eligible: false,
  },
  {
    word: "biarco",
    eligible: false,
  },
  {
    word: "biáreo",
    eligible: false,
  },
  {
    word: "biasta",
    eligible: false,
  },
  {
    word: "biatlo",
    eligible: false,
  },
  {
    word: "biator",
    eligible: false,
  },
  {
    word: "bibaga",
    eligible: false,
  },
  {
    word: "bíbalo",
    eligible: false,
  },
  {
    word: "bíbara",
    eligible: false,
  },
  {
    word: "bibelô",
    eligible: false,
  },
  {
    word: "bíbera",
    eligible: false,
  },
  {
    word: "bibiru",
    eligible: false,
  },
  {
    word: "bíblia",
    eligible: false,
  },
  {
    word: "biblio",
    eligible: false,
  },
  {
    word: "bíblis",
    eligible: false,
  },
  {
    word: "Biblos",
    eligible: false,
  },
  {
    word: "biboca",
    eligible: false,
  },
  {
    word: "bíbris",
    eligible: false,
  },
  {
    word: "bíbulo",
    eligible: false,
  },
  {
    word: "Bicaco",
    eligible: false,
  },
  {
    word: "bicaço",
    eligible: false,
  },
  {
    word: "bicais",
    eligible: false,
  },
  {
    word: "bicama",
    eligible: false,
  },
  {
    word: "bicame",
    eligible: false,
  },
  {
    word: "bicane",
    eligible: false,
  },
  {
    word: "bicaró",
    eligible: false,
  },
  {
    word: "bicato",
    eligible: false,
  },
  {
    word: "bíceps",
    eligible: false,
  },
  {
    word: "bichão",
    eligible: false,
  },
  {
    word: "bichar",
    eligible: false,
  },
  {
    word: "bichas",
    eligible: false,
  },
  {
    word: "bichir",
    eligible: false,
  },
  {
    word: "bichos",
    eligible: false,
  },
  {
    word: "bicoco",
    eligible: false,
  },
  {
    word: "bicoma",
    eligible: false,
  },
  {
    word: "bicone",
    eligible: false,
  },
  {
    word: "bicoso",
    eligible: false,
  },
  {
    word: "bicuda",
    eligible: false,
  },
  {
    word: "bicudo",
    eligible: false,
  },
  {
    word: "bicula",
    eligible: false,
  },
  {
    word: "bicuni",
    eligible: false,
  },
  {
    word: "bidens",
    eligible: false,
  },
  {
    word: "bidero",
    eligible: false,
  },
  {
    word: "bideto",
    eligible: false,
  },
  {
    word: "bidião",
    eligible: false,
  },
  {
    word: "bidino",
    eligible: false,
  },
  {
    word: "bienal",
    eligible: false,
  },
  {
    word: "biênio",
    eligible: false,
  },
  {
    word: "biface",
    eligible: false,
  },
  {
    word: "bifana",
    eligible: false,
  },
  {
    word: "bífaro",
    eligible: false,
  },
  {
    word: "bífero",
    eligible: false,
  },
  {
    word: "bífida",
    eligible: false,
  },
  {
    word: "bífido",
    eligible: false,
  },
  {
    word: "bifilo",
    eligible: false,
  },
  {
    word: "biflor",
    eligible: false,
  },
  {
    word: "bífore",
    eligible: false,
  },
  {
    word: "bíforo",
    eligible: false,
  },
  {
    word: "bígamo",
    eligible: false,
  },
  {
    word: "bigate",
    eligible: false,
  },
  {
    word: "bigato",
    eligible: false,
  },
  {
    word: "bígene",
    eligible: false,
  },
  {
    word: "bigode",
    eligible: false,
  },
  {
    word: "bigodi",
    eligible: false,
  },
  {
    word: "bigola",
    eligible: false,
  },
  {
    word: "bigote",
    eligible: false,
  },
  {
    word: "biguar",
    eligible: false,
  },
  {
    word: "biguás",
    eligible: false,
  },
  {
    word: "bigudi",
    eligible: false,
  },
  {
    word: "bigume",
    eligible: false,
  },
  {
    word: "bijaco",
    eligible: false,
  },
  {
    word: "bijaga",
    eligible: false,
  },
  {
    word: "bijagó",
    eligible: false,
  },
  {
    word: "bijuca",
    eligible: false,
  },
  {
    word: "bíjugo",
    eligible: false,
  },
  {
    word: "bilare",
    eligible: false,
  },
  {
    word: "bilato",
    eligible: false,
  },
  {
    word: "bilene",
    eligible: false,
  },
  {
    word: "bileua",
    eligible: false,
  },
  {
    word: "Bilgai",
    eligible: false,
  },
  {
    word: "bilhão",
    eligible: false,
  },
  {
    word: "bilhar",
    eligible: false,
  },
  {
    word: "bilião",
    eligible: false,
  },
  {
    word: "biliar",
    eligible: false,
  },
  {
    word: "bilice",
    eligible: false,
  },
  {
    word: "bílico",
    eligible: false,
  },
  {
    word: "bilimi",
    eligible: false,
  },
  {
    word: "bilino",
    eligible: false,
  },
  {
    word: "biliro",
    eligible: false,
  },
  {
    word: "biloba",
    eligible: false,
  },
  {
    word: "biloca",
    eligible: false,
  },
  {
    word: "bilola",
    eligible: false,
  },
  {
    word: "biloto",
    eligible: false,
  },
  {
    word: "bilrar",
    eligible: false,
  },
  {
    word: "bilros",
    eligible: false,
  },
  {
    word: "biltre",
    eligible: false,
  },
  {
    word: "bímane",
    eligible: false,
  },
  {
    word: "bímano",
    eligible: false,
  },
  {
    word: "bímare",
    eligible: false,
  },
  {
    word: "bimbal",
    eligible: false,
  },
  {
    word: "bimbar",
    eligible: false,
  },
  {
    word: "bimbas",
    eligible: false,
  },
  {
    word: "bímbio",
    eligible: false,
  },
  {
    word: "binato",
    eligible: false,
  },
  {
    word: "bingar",
    eligible: false,
  },
  {
    word: "bingos",
    eligible: false,
  },
  {
    word: "binite",
    eligible: false,
  },
  {
    word: "binome",
    eligible: false,
  },
  {
    word: "binubo",
    eligible: false,
  },
  {
    word: "bínubo",
    eligible: false,
  },
  {
    word: "Biobío",
    eligible: false,
  },
  {
    word: "biombo",
    eligible: false,
  },
  {
    word: "biongo",
    eligible: false,
  },
  {
    word: "bionte",
    eligible: false,
  },
  {
    word: "biopse",
    eligible: false,
  },
  {
    word: "bíparo",
    eligible: false,
  },
  {
    word: "bípede",
    eligible: false,
  },
  {
    word: "bipene",
    eligible: false,
  },
  {
    word: "bíplex",
    eligible: false,
  },
  {
    word: "bipolo",
    eligible: false,
  },
  {
    word: "bípolo",
    eligible: false,
  },
  {
    word: "biraia",
    eligible: false,
  },
  {
    word: "biraró",
    eligible: false,
  },
  {
    word: "biriba",
    eligible: false,
  },
  {
    word: "biribá",
    eligible: false,
  },
  {
    word: "birica",
    eligible: false,
  },
  {
    word: "birico",
    eligible: false,
  },
  {
    word: "biriçó",
    eligible: false,
  },
  {
    word: "birifo",
    eligible: false,
  },
  {
    word: "biriva",
    eligible: false,
  },
  {
    word: "biroba",
    eligible: false,
  },
  {
    word: "birola",
    eligible: false,
  },
  {
    word: "biroró",
    eligible: false,
  },
  {
    word: "birote",
    eligible: false,
  },
  {
    word: "birrar",
    eligible: false,
  },
  {
    word: "birros",
    eligible: false,
  },
  {
    word: "biruba",
    eligible: false,
  },
  {
    word: "bisaco",
    eligible: false,
  },
  {
    word: "bisago",
    eligible: false,
  },
  {
    word: "bisana",
    eligible: false,
  },
  {
    word: "bísaro",
    eligible: false,
  },
  {
    word: "bisavó",
    eligible: false,
  },
  {
    word: "bisavô",
    eligible: false,
  },
  {
    word: "biscar",
    eligible: false,
  },
  {
    word: "biscuí",
    eligible: false,
  },
  {
    word: "bisina",
    eligible: false,
  },
  {
    word: "bismal",
    eligible: false,
  },
  {
    word: "bisnau",
    eligible: false,
  },
  {
    word: "bisões",
    eligible: false,
  },
  {
    word: "bisotê",
    eligible: false,
  },
  {
    word: "bispal",
    eligible: false,
  },
  {
    word: "bispar",
    eligible: false,
  },
  {
    word: "bispos",
    eligible: false,
  },
  {
    word: "Bissal",
    eligible: false,
  },
  {
    word: "Bissau",
    eligible: false,
  },
  {
    word: "bissel",
    eligible: false,
  },
  {
    word: "bistre",
    eligible: false,
  },
  {
    word: "bistrô",
    eligible: false,
  },
  {
    word: "bitaco",
    eligible: false,
  },
  {
    word: "bitafe",
    eligible: false,
  },
  {
    word: "bitatá",
    eligible: false,
  },
  {
    word: "bitate",
    eligible: false,
  },
  {
    word: "biteca",
    eligible: false,
  },
  {
    word: "bitelo",
    eligible: false,
  },
  {
    word: "Bítias",
    eligible: false,
  },
  {
    word: "bitino",
    eligible: false,
  },
  {
    word: "bitiol",
    eligible: false,
  },
  {
    word: "bitrar",
    eligible: false,
  },
  {
    word: "Bitrom",
    eligible: false,
  },
  {
    word: "bitter",
    eligible: false,
  },
  {
    word: "bituca",
    eligible: false,
  },
  {
    word: "bitume",
    eligible: false,
  },
  {
    word: "bituro",
    eligible: false,
  },
  {
    word: "bituva",
    eligible: false,
  },
  {
    word: "biungo",
    eligible: false,
  },
  {
    word: "bívira",
    eligible: false,
  },
  {
    word: "bivolt",
    eligible: false,
  },
  {
    word: "bívora",
    eligible: false,
  },
  {
    word: "bixina",
    eligible: false,
  },
  {
    word: "bixoxo",
    eligible: false,
  },
  {
    word: "bizero",
    eligible: false,
  },
  {
    word: "blablá",
    eligible: false,
  },
  {
    word: "blague",
    eligible: false,
  },
  {
    word: "blanco",
    eligible: false,
  },
  {
    word: "Blando",
    eligible: false,
  },
  {
    word: "Blanes",
    eligible: false,
  },
  {
    word: "Blasco",
    eligible: false,
  },
  {
    word: "blasto",
    eligible: false,
  },
  {
    word: "blazer",
    eligible: false,
  },
  {
    word: "blefar",
    eligible: false,
  },
  {
    word: "blenda",
    eligible: false,
  },
  {
    word: "blênio",
    eligible: false,
  },
  {
    word: "blocar",
    eligible: false,
  },
  {
    word: "blocos",
    eligible: false,
  },
  {
    word: "blogar",
    eligible: false,
  },
  {
    word: "blogue",
    eligible: false,
  },
  {
    word: "blusão",
    eligible: false,
  },
  {
    word: "boalvo",
    eligible: false,
  },
  {
    word: "boamba",
    eligible: false,
  },
  {
    word: "boança",
    eligible: false,
  },
  {
    word: "boária",
    eligible: false,
  },
  {
    word: "boatar",
    eligible: false,
  },
  {
    word: "boatos",
    eligible: false,
  },
  {
    word: "bobata",
    eligible: false,
  },
  {
    word: "Bobbio",
    eligible: false,
  },
  {
    word: "bobear",
    eligible: false,
  },
  {
    word: "bobeia",
    eligible: false,
  },
  {
    word: "bobice",
    eligible: false,
  },
  {
    word: "bobona",
    eligible: false,
  },
  {
    word: "bobóti",
    eligible: false,
  },
  {
    word: "boburé",
    eligible: false,
  },
  {
    word: "bocaça",
    eligible: false,
  },
  {
    word: "bocado",
    eligible: false,
  },
  {
    word: "Bocage",
    eligible: false,
  },
  {
    word: "bocaiú",
    eligible: false,
  },
  {
    word: "bocana",
    eligible: false,
  },
  {
    word: "bocaxi",
    eligible: false,
  },
  {
    word: "boceta",
    eligible: false,
  },
  {
    word: "bocete",
    eligible: false,
  },
  {
    word: "boceto",
    eligible: false,
  },
  {
    word: "bochar",
    eligible: false,
  },
  {
    word: "bocoió",
    eligible: false,
  },
  {
    word: "bocona",
    eligible: false,
  },
  {
    word: "bocota",
    eligible: false,
  },
  {
    word: "bocuba",
    eligible: false,
  },
  {
    word: "bocudo",
    eligible: false,
  },
  {
    word: "boçudo",
    eligible: false,
  },
  {
    word: "bocuva",
    eligible: false,
  },
  {
    word: "bodana",
    eligible: false,
  },
  {
    word: "bodeco",
    eligible: false,
  },
  {
    word: "bodefe",
    eligible: false,
  },
  {
    word: "bodego",
    eligible: false,
  },
  {
    word: "bodete",
    eligible: false,
  },
  {
    word: "bodião",
    eligible: false,
  },
  {
    word: "bodigo",
    eligible: false,
  },
  {
    word: "bodioa",
    eligible: false,
  },
  {
    word: "bodivo",
    eligible: false,
  },
  {
    word: "Bodocó",
    eligible: false,
  },
  {
    word: "bodona",
    eligible: false,
  },
  {
    word: "bodoni",
    eligible: false,
  },
  {
    word: "bodoso",
    eligible: false,
  },
  {
    word: "bodrié",
    eligible: false,
  },
  {
    word: "Boécio",
    eligible: false,
  },
  {
    word: "boeing",
    eligible: false,
  },
  {
    word: "boeiro",
    eligible: false,
  },
  {
    word: "boemia",
    eligible: false,
  },
  {
    word: "boêmia",
    eligible: false,
  },
  {
    word: "boêmio",
    eligible: false,
  },
  {
    word: "boenca",
    eligible: false,
  },
  {
    word: "boense",
    eligible: false,
  },
  {
    word: "bofetá",
    eligible: false,
  },
  {
    word: "bófeta",
    eligible: false,
  },
  {
    word: "boforo",
    eligible: false,
  },
  {
    word: "bogari",
    eligible: false,
  },
  {
    word: "bogaxo",
    eligible: false,
  },
  {
    word: "Bogotá",
    eligible: false,
  },
  {
    word: "bóhrio",
    eligible: false,
  },
  {
    word: "boiaca",
    eligible: false,
  },
  {
    word: "boiaçu",
    eligible: false,
  },
  {
    word: "boiada",
    eligible: false,
  },
  {
    word: "boiama",
    eligible: false,
  },
  {
    word: "boiato",
    eligible: false,
  },
  {
    word: "boicaá",
    eligible: false,
  },
  {
    word: "boiçar",
    eligible: false,
  },
  {
    word: "boídeo",
    eligible: false,
  },
  {
    word: "boieco",
    eligible: false,
  },
  {
    word: "boinas",
    eligible: false,
  },
  {
    word: "boinha",
    eligible: false,
  },
  {
    word: "boiobi",
    eligible: false,
  },
  {
    word: "boioçu",
    eligible: false,
  },
  {
    word: "boiola",
    eligible: false,
  },
  {
    word: "boiona",
    eligible: false,
  },
  {
    word: "boiote",
    eligible: false,
  },
  {
    word: "boirar",
    eligible: false,
  },
  {
    word: "boirel",
    eligible: false,
  },
  {
    word: "boísmo",
    eligible: false,
  },
  {
    word: "boitas",
    eligible: false,
  },
  {
    word: "boiubi",
    eligible: false,
  },
  {
    word: "boiubu",
    eligible: false,
  },
  {
    word: "boiuçu",
    eligible: false,
  },
  {
    word: "boiuno",
    eligible: false,
  },
  {
    word: "boízes",
    eligible: false,
  },
  {
    word: "bojaga",
    eligible: false,
  },
  {
    word: "bojeço",
    eligible: false,
  },
  {
    word: "bojego",
    eligible: false,
  },
  {
    word: "bojito",
    eligible: false,
  },
  {
    word: "bojobi",
    eligible: false,
  },
  {
    word: "bojudo",
    eligible: false,
  },
  {
    word: "bokmål",
    eligible: false,
  },
  {
    word: "bolaço",
    eligible: false,
  },
  {
    word: "bolada",
    eligible: false,
  },
  {
    word: "bolano",
    eligible: false,
  },
  {
    word: "bolapé",
    eligible: false,
  },
  {
    word: "bolaro",
    eligible: false,
  },
  {
    word: "bolata",
    eligible: false,
  },
  {
    word: "bolbar",
    eligible: false,
  },
  {
    word: "bolcão",
    eligible: false,
  },
  {
    word: "bolcar",
    eligible: false,
  },
  {
    word: "bolçar",
    eligible: false,
  },
  {
    word: "boldol",
    eligible: false,
  },
  {
    word: "boldos",
    eligible: false,
  },
  {
    word: "bolear",
    eligible: false,
  },
  {
    word: "boleco",
    eligible: false,
  },
  {
    word: "bolego",
    eligible: false,
  },
  {
    word: "boleia",
    eligible: false,
  },
  {
    word: "Bolena",
    eligible: false,
  },
  {
    word: "boleno",
    eligible: false,
  },
  {
    word: "bolero",
    eligible: false,
  },
  {
    word: "boleto",
    eligible: false,
  },
  {
    word: "bolhão",
    eligible: false,
  },
  {
    word: "bolhar",
    eligible: false,
  },
  {
    word: "bolico",
    eligible: false,
  },
  {
    word: "boliço",
    eligible: false,
  },
  {
    word: "bólide",
    eligible: false,
  },
  {
    word: "bólido",
    eligible: false,
  },
  {
    word: "bolina",
    eligible: false,
  },
  {
    word: "bolita",
    eligible: false,
  },
  {
    word: "bolota",
    eligible: false,
  },
  {
    word: "bolsão",
    eligible: false,
  },
  {
    word: "bolsar",
    eligible: false,
  },
  {
    word: "bolsas",
    eligible: false,
  },
  {
    word: "bolsos",
    eligible: false,
  },
  {
    word: "bombal",
    eligible: false,
  },
  {
    word: "bombão",
    eligible: false,
  },
  {
    word: "bombar",
    eligible: false,
  },
  {
    word: "bombas",
    eligible: false,
  },
  {
    word: "bômbax",
    eligible: false,
  },
  {
    word: "bombim",
    eligible: false,
  },
  {
    word: "bômbix",
    eligible: false,
  },
  {
    word: "bombom",
    eligible: false,
  },
  {
    word: "bomoro",
    eligible: false,
  },
  {
    word: "bonaia",
    eligible: false,
  },
  {
    word: "Bonami",
    eligible: false,
  },
  {
    word: "bonari",
    eligible: false,
  },
  {
    word: "Bonato",
    eligible: false,
  },
  {
    word: "bonçar",
    eligible: false,
  },
  {
    word: "bonchi",
    eligible: false,
  },
  {
    word: "bondal",
    eligible: false,
  },
  {
    word: "bondar",
    eligible: false,
  },
  {
    word: "bondes",
    eligible: false,
  },
  {
    word: "boneca",
    eligible: false,
  },
  {
    word: "boneco",
    eligible: false,
  },
  {
    word: "boneja",
    eligible: false,
  },
  {
    word: "bonete",
    eligible: false,
  },
  {
    word: "Bonfim",
    eligible: false,
  },
  {
    word: "bongar",
    eligible: false,
  },
  {
    word: "bongui",
    eligible: false,
  },
  {
    word: "bonhar",
    eligible: false,
  },
  {
    word: "bonico",
    eligible: false,
  },
  {
    word: "bonina",
    eligible: false,
  },
  {
    word: "bonita",
    eligible: false,
  },
  {
    word: "bonito",
    eligible: false,
  },
  {
    word: "bonobo",
    eligible: false,
  },
  {
    word: "bonsai",
    eligible: false,
  },
  {
    word: "bontei",
    eligible: false,
  },
  {
    word: "bonzão",
    eligible: false,
  },
  {
    word: "boquim",
    eligible: false,
  },
  {
    word: "borace",
    eligible: false,
  },
  {
    word: "borado",
    eligible: false,
  },
  {
    word: "borago",
    eligible: false,
  },
  {
    word: "borano",
    eligible: false,
  },
  {
    word: "borato",
    eligible: false,
  },
  {
    word: "borcar",
    eligible: false,
  },
  {
    word: "borcme",
    eligible: false,
  },
  {
    word: "borcos",
    eligible: false,
  },
  {
    word: "bordão",
    eligible: false,
  },
  {
    word: "bordar",
    eligible: false,
  },
  {
    word: "bordas",
    eligible: false,
  },
  {
    word: "bordel",
    eligible: false,
  },
  {
    word: "bordos",
    eligible: false,
  },
  {
    word: "boreal",
    eligible: false,
  },
  {
    word: "bóreas",
    eligible: false,
  },
  {
    word: "Borebi",
    eligible: false,
  },
  {
    word: "boreto",
    eligible: false,
  },
  {
    word: "Borges",
    eligible: false,
  },
  {
    word: "borges",
    eligible: false,
  },
  {
    word: "Bórgia",
    eligible: false,
  },
  {
    word: "bórica",
    eligible: false,
  },
  {
    word: "bórico",
    eligible: false,
  },
  {
    word: "bornal",
    eligible: false,
  },
  {
    word: "Bornéu",
    eligible: false,
  },
  {
    word: "bornéu",
    eligible: false,
  },
  {
    word: "bororo",
    eligible: false,
  },
  {
    word: "bororó",
    eligible: false,
  },
  {
    word: "borrão",
    eligible: false,
  },
  {
    word: "borrar",
    eligible: false,
  },
  {
    word: "borraz",
    eligible: false,
  },
  {
    word: "bosear",
    eligible: false,
  },
  {
    word: "Bosete",
    eligible: false,
  },
  {
    word: "bósnio",
    eligible: false,
  },
  {
    word: "bosque",
    eligible: false,
  },
  {
    word: "bossar",
    eligible: false,
  },
  {
    word: "bostal",
    eligible: false,
  },
  {
    word: "bostão",
    eligible: false,
  },
  {
    word: "bostar",
    eligible: false,
  },
  {
    word: "bostas",
    eligible: false,
  },
  {
    word: "Boston",
    eligible: false,
  },
  {
    word: "boston",
    eligible: false,
  },
  {
    word: "botaló",
    eligible: false,
  },
  {
    word: "botana",
    eligible: false,
  },
  {
    word: "botefa",
    eligible: false,
  },
  {
    word: "boteto",
    eligible: false,
  },
  {
    word: "botica",
    eligible: false,
  },
  {
    word: "botiço",
    eligible: false,
  },
  {
    word: "botieu",
    eligible: false,
  },
  {
    word: "botija",
    eligible: false,
  },
  {
    word: "botina",
    eligible: false,
  },
  {
    word: "botino",
    eligible: false,
  },
  {
    word: "botoar",
    eligible: false,
  },
  {
    word: "botões",
    eligible: false,
  },
  {
    word: "botori",
    eligible: false,
  },
  {
    word: "botrio",
    eligible: false,
  },
  {
    word: "boubas",
    eligible: false,
  },
  {
    word: "bouçar",
    eligible: false,
  },
  {
    word: "boucim",
    eligible: false,
  },
  {
    word: "boueia",
    eligible: false,
  },
  {
    word: "bougie",
    eligible: false,
  },
  {
    word: "Boulos",
    eligible: false,
  },
  {
    word: "bourar",
    eligible: false,
  },
  {
    word: "Bouvet",
    eligible: false,
  },
  {
    word: "bovino",
    eligible: false,
  },
  {
    word: "boxear",
    eligible: false,
  },
  {
    word: "boxego",
    eligible: false,
  },
  {
    word: "Bozano",
    eligible: false,
  },
  {
    word: "brabar",
    eligible: false,
  },
  {
    word: "brabas",
    eligible: false,
  },
  {
    word: "braçal",
    eligible: false,
  },
  {
    word: "bracel",
    eligible: false,
  },
  {
    word: "braces",
    eligible: false,
  },
  {
    word: "braceu",
    eligible: false,
  },
  {
    word: "bracio",
    eligible: false,
  },
  {
    word: "brácon",
    eligible: false,
  },
  {
    word: "braços",
    eligible: false,
  },
  {
    word: "bracuí",
    eligible: false,
  },
  {
    word: "bradal",
    eligible: false,
  },
  {
    word: "bradar",
    eligible: false,
  },
  {
    word: "brádea",
    eligible: false,
  },
  {
    word: "bradel",
    eligible: false,
  },
  {
    word: "brados",
    eligible: false,
  },
  {
    word: "bragal",
    eligible: false,
  },
  {
    word: "bragas",
    eligible: false,
  },
  {
    word: "braile",
    eligible: false,
  },
  {
    word: "bramar",
    eligible: false,
  },
  {
    word: "bramir",
    eligible: false,
  },
  {
    word: "branca",
    eligible: false,
  },
  {
    word: "branco",
    eligible: false,
  },
  {
    word: "branha",
    eligible: false,
  },
  {
    word: "branil",
    eligible: false,
  },
  {
    word: "branjo",
    eligible: false,
  },
  {
    word: "branto",
    eligible: false,
  },
  {
    word: "branza",
    eligible: false,
  },
  {
    word: "braqui",
    eligible: false,
  },
  {
    word: "brasão",
    eligible: false,
  },
  {
    word: "brasar",
    eligible: false,
  },
  {
    word: "brasas",
    eligible: false,
  },
  {
    word: "brasca",
    eligible: false,
  },
  {
    word: "Brasil",
    eligible: false,
  },
  {
    word: "brasil",
    eligible: false,
  },
  {
    word: "brasio",
    eligible: false,
  },
  {
    word: "brasis",
    eligible: false,
  },
  {
    word: "braula",
    eligible: false,
  },
  {
    word: "braúna",
    eligible: false,
  },
  {
    word: "braval",
    eligible: false,
  },
  {
    word: "bravar",
    eligible: false,
  },
  {
    word: "bravas",
    eligible: false,
  },
  {
    word: "bravio",
    eligible: false,
  },
  {
    word: "bravor",
    eligible: false,
  },
  {
    word: "bravos",
    eligible: false,
  },
  {
    word: "bravum",
    eligible: false,
  },
  {
    word: "braxia",
    eligible: false,
  },
  {
    word: "brecar",
    eligible: false,
  },
  {
    word: "brechó",
    eligible: false,
  },
  {
    word: "bredos",
    eligible: false,
  },
  {
    word: "bregal",
    eligible: false,
  },
  {
    word: "bregma",
    eligible: false,
  },
  {
    word: "breína",
    eligible: false,
  },
  {
    word: "brejal",
    eligible: false,
  },
  {
    word: "brejão",
    eligible: false,
  },
  {
    word: "brejos",
    eligible: false,
  },
  {
    word: "brelhe",
    eligible: false,
  },
  {
    word: "brelho",
    eligible: false,
  },
  {
    word: "brelim",
    eligible: false,
  },
  {
    word: "bremas",
    eligible: false,
  },
  {
    word: "Brenda",
    eligible: false,
  },
  {
    word: "brendo",
    eligible: false,
  },
  {
    word: "brenha",
    eligible: false,
  },
  {
    word: "brento",
    eligible: false,
  },
  {
    word: "bresca",
    eligible: false,
  },
  {
    word: "bretão",
    eligible: false,
  },
  {
    word: "breúno",
    eligible: false,
  },
  {
    word: "briada",
    eligible: false,
  },
  {
    word: "briale",
    eligible: false,
  },
  {
    word: "briati",
    eligible: false,
  },
  {
    word: "bricão",
    eligible: false,
  },
  {
    word: "bricas",
    eligible: false,
  },
  {
    word: "briche",
    eligible: false,
  },
  {
    word: "Brício",
    eligible: false,
  },
  {
    word: "bridão",
    eligible: false,
  },
  {
    word: "bridar",
    eligible: false,
  },
  {
    word: "bridge",
    eligible: false,
  },
  {
    word: "brieia",
    eligible: false,
  },
  {
    word: "brigal",
    eligible: false,
  },
  {
    word: "brigão",
    eligible: false,
  },
  {
    word: "brigar",
    eligible: false,
  },
  {
    word: "brigue",
    eligible: false,
  },
  {
    word: "brijão",
    eligible: false,
  },
  {
    word: "brilho",
    eligible: false,
  },
  {
    word: "brinca",
    eligible: false,
  },
  {
    word: "brinco",
    eligible: false,
  },
  {
    word: "brinço",
    eligible: false,
  },
  {
    word: "Brinde",
    eligible: false,
  },
  {
    word: "brinde",
    eligible: false,
  },
  {
    word: "brinje",
    eligible: false,
  },
  {
    word: "brioso",
    eligible: false,
  },
  {
    word: "brique",
    eligible: false,
  },
  {
    word: "brisar",
    eligible: false,
  },
  {
    word: "brisca",
    eligible: false,
  },
  {
    word: "Briseu",
    eligible: false,
  },
  {
    word: "brísio",
    eligible: false,
  },
  {
    word: "brisso",
    eligible: false,
  },
  {
    word: "britar",
    eligible: false,
  },
  {
    word: "brites",
    eligible: false,
  },
  {
    word: "brítio",
    eligible: false,
  },
  {
    word: "brívia",
    eligible: false,
  },
  {
    word: "broaça",
    eligible: false,
  },
  {
    word: "brocal",
    eligible: false,
  },
  {
    word: "brocão",
    eligible: false,
  },
  {
    word: "brocar",
    eligible: false,
  },
  {
    word: "brocas",
    eligible: false,
  },
  {
    word: "brocha",
    eligible: false,
  },
  {
    word: "brocos",
    eligible: false,
  },
  {
    word: "bródio",
    eligible: false,
  },
  {
    word: "broega",
    eligible: false,
  },
  {
    word: "brofal",
    eligible: false,
  },
  {
    word: "brogue",
    eligible: false,
  },
  {
    word: "brolar",
    eligible: false,
  },
  {
    word: "brolhe",
    eligible: false,
  },
  {
    word: "bromal",
    eligible: false,
  },
  {
    word: "bromar",
    eligible: false,
  },
  {
    word: "brômio",
    eligible: false,
  },
  {
    word: "bromol",
    eligible: false,
  },
  {
    word: "bronco",
    eligible: false,
  },
  {
    word: "brongo",
    eligible: false,
  },
  {
    word: "bronha",
    eligible: false,
  },
  {
    word: "bronte",
    eligible: false,
  },
  {
    word: "bronze",
    eligible: false,
  },
  {
    word: "bronzo",
    eligible: false,
  },
  {
    word: "brosco",
    eligible: false,
  },
  {
    word: "brotar",
    eligible: false,
  },
  {
    word: "bróteo",
    eligible: false,
  },
  {
    word: "brotos",
    eligible: false,
  },
  {
    word: "broxar",
    eligible: false,
  },
  {
    word: "brózio",
    eligible: false,
  },
  {
    word: "bruaca",
    eligible: false,
  },
  {
    word: "brucos",
    eligible: false,
  },
  {
    word: "bruços",
    eligible: false,
  },
  {
    word: "bruega",
    eligible: false,
  },
  {
    word: "Bruges",
    eligible: false,
  },
  {
    word: "brugus",
    eligible: false,
  },
  {
    word: "bruíço",
    eligible: false,
  },
  {
    word: "brulho",
    eligible: false,
  },
  {
    word: "brumal",
    eligible: false,
  },
  {
    word: "brumar",
    eligible: false,
  },
  {
    word: "brunal",
    eligible: false,
  },
  {
    word: "Brunei",
    eligible: false,
  },
  {
    word: "Bruner",
    eligible: false,
  },
  {
    word: "brunho",
    eligible: false,
  },
  {
    word: "brunir",
    eligible: false,
  },
  {
    word: "brusco",
    eligible: false,
  },
  {
    word: "brussa",
    eligible: false,
  },
  {
    word: "brutal",
    eligible: false,
  },
  {
    word: "brutas",
    eligible: false,
  },
  {
    word: "brutaz",
    eligible: false,
  },
  {
    word: "brutos",
    eligible: false,
  },
  {
    word: "Brutus",
    eligible: false,
  },
  {
    word: "bruxar",
    eligible: false,
  },
  {
    word: "bruxas",
    eligible: false,
  },
  {
    word: "bruxos",
    eligible: false,
  },
  {
    word: "buamba",
    eligible: false,
  },
  {
    word: "buanja",
    eligible: false,
  },
  {
    word: "búbalo",
    eligible: false,
  },
  {
    word: "bubela",
    eligible: false,
  },
  {
    word: "bubida",
    eligible: false,
  },
  {
    word: "bubula",
    eligible: false,
  },
  {
    word: "buburé",
    eligible: false,
  },
  {
    word: "Buçaco",
    eligible: false,
  },
  {
    word: "buçaco",
    eligible: false,
  },
  {
    word: "bucara",
    eligible: false,
  },
  {
    word: "bucare",
    eligible: false,
  },
  {
    word: "bucaré",
    eligible: false,
  },
  {
    word: "búcero",
    eligible: false,
  },
  {
    word: "buceto",
    eligible: false,
  },
  {
    word: "buchas",
    eligible: false,
  },
  {
    word: "buchim",
    eligible: false,
  },
  {
    word: "buchos",
    eligible: false,
  },
  {
    word: "bucida",
    eligible: false,
  },
  {
    word: "bucino",
    eligible: false,
  },
  {
    word: "bucobu",
    eligible: false,
  },
  {
    word: "búcula",
    eligible: false,
  },
  {
    word: "bucutá",
    eligible: false,
  },
  {
    word: "bucuva",
    eligible: false,
  },
  {
    word: "Budail",
    eligible: false,
  },
  {
    word: "budana",
    eligible: false,
  },
  {
    word: "budião",
    eligible: false,
  },
  {
    word: "búdico",
    eligible: false,
  },
  {
    word: "budino",
    eligible: false,
  },
  {
    word: "budite",
    eligible: false,
  },
  {
    word: "budoar",
    eligible: false,
  },
  {
    word: "buduna",
    eligible: false,
  },
  {
    word: "bueiro",
    eligible: false,
  },
  {
    word: "buélia",
    eligible: false,
  },
  {
    word: "buenas",
    eligible: false,
  },
  {
    word: "buende",
    eligible: false,
  },
  {
    word: "buenos",
    eligible: false,
  },
  {
    word: "buerre",
    eligible: false,
  },
  {
    word: "buezão",
    eligible: false,
  },
  {
    word: "búfalo",
    eligible: false,
  },
  {
    word: "bufete",
    eligible: false,
  },
  {
    word: "bufina",
    eligible: false,
  },
  {
    word: "bufona",
    eligible: false,
  },
  {
    word: "bufoso",
    eligible: false,
  },
  {
    word: "bugdió",
    eligible: false,
  },
  {
    word: "bugego",
    eligible: false,
  },
  {
    word: "bugiar",
    eligible: false,
  },
  {
    word: "bugina",
    eligible: false,
  },
  {
    word: "bugios",
    eligible: false,
  },
  {
    word: "bugres",
    eligible: false,
  },
  {
    word: "búgula",
    eligible: false,
  },
  {
    word: "buinho",
    eligible: false,
  },
  {
    word: "Buíque",
    eligible: false,
  },
  {
    word: "buítre",
    eligible: false,
  },
  {
    word: "buiuçu",
    eligible: false,
  },
  {
    word: "bujago",
    eligible: false,
  },
  {
    word: "bujamé",
    eligible: false,
  },
  {
    word: "Bujari",
    eligible: false,
  },
  {
    word: "Bujaru",
    eligible: false,
  },
  {
    word: "bulala",
    eligible: false,
  },
  {
    word: "bulama",
    eligible: false,
  },
  {
    word: "bulauê",
    eligible: false,
  },
  {
    word: "bulaxo",
    eligible: false,
  },
  {
    word: "bulbar",
    eligible: false,
  },
  {
    word: "bulbul",
    eligible: false,
  },
  {
    word: "bulcão",
    eligible: false,
  },
  {
    word: "buldra",
    eligible: false,
  },
  {
    word: "bulese",
    eligible: false,
  },
  {
    word: "bulhão",
    eligible: false,
  },
  {
    word: "bulhar",
    eligible: false,
  },
  {
    word: "buliço",
    eligible: false,
  },
  {
    word: "bulino",
    eligible: false,
  },
  {
    word: "bulite",
    eligible: false,
  },
  {
    word: "bulolo",
    eligible: false,
  },
  {
    word: "bulose",
    eligible: false,
  },
  {
    word: "bululu",
    eligible: false,
  },
  {
    word: "bumbar",
    eligible: false,
  },
  {
    word: "bumbos",
    eligible: false,
  },
  {
    word: "bumbum",
    eligible: false,
  },
  {
    word: "buncho",
    eligible: false,
  },
  {
    word: "bundão",
    eligible: false,
  },
  {
    word: "bundar",
    eligible: false,
  },
  {
    word: "bundas",
    eligible: false,
  },
  {
    word: "bundra",
    eligible: false,
  },
  {
    word: "buneva",
    eligible: false,
  },
  {
    word: "bungar",
    eligible: false,
  },
  {
    word: "bunhar",
    eligible: false,
  },
  {
    word: "bunhos",
    eligible: false,
  },
  {
    word: "bunica",
    eligible: false,
  },
  {
    word: "bunode",
    eligible: false,
  },
  {
    word: "Búpalo",
    eligible: false,
  },
  {
    word: "buquês",
    eligible: false,
  },
  {
    word: "buraba",
    eligible: false,
  },
  {
    word: "buraca",
    eligible: false,
  },
  {
    word: "buraco",
    eligible: false,
  },
  {
    word: "buramo",
    eligible: false,
  },
  {
    word: "burara",
    eligible: false,
  },
  {
    word: "burato",
    eligible: false,
  },
  {
    word: "burbom",
    eligible: false,
  },
  {
    word: "bureau",
    eligible: false,
  },
  {
    word: "bureta",
    eligible: false,
  },
  {
    word: "bureva",
    eligible: false,
  },
  {
    word: "burgar",
    eligible: false,
  },
  {
    word: "burgau",
    eligible: false,
  },
  {
    word: "burgos",
    eligible: false,
  },
  {
    word: "Buricá",
    eligible: false,
  },
  {
    word: "buriel",
    eligible: false,
  },
  {
    word: "burino",
    eligible: false,
  },
  {
    word: "buriti",
    eligible: false,
  },
  {
    word: "burlão",
    eligible: false,
  },
  {
    word: "burlar",
    eligible: false,
  },
  {
    word: "burnir",
    eligible: false,
  },
  {
    word: "burrão",
    eligible: false,
  },
  {
    word: "burrar",
    eligible: false,
  },
  {
    word: "burras",
    eligible: false,
  },
  {
    word: "burrié",
    eligible: false,
  },
  {
    word: "burros",
    eligible: false,
  },
  {
    word: "burucu",
    eligible: false,
  },
  {
    word: "burude",
    eligible: false,
  },
  {
    word: "bururé",
    eligible: false,
  },
  {
    word: "bururu",
    eligible: false,
  },
  {
    word: "buruso",
    eligible: false,
  },
  {
    word: "buruta",
    eligible: false,
  },
  {
    word: "busano",
    eligible: false,
  },
  {
    word: "buscar",
    eligible: false,
  },
  {
    word: "bussil",
    eligible: false,
  },
  {
    word: "bustiê",
    eligible: false,
  },
  {
    word: "bustos",
    eligible: false,
  },
  {
    word: "butaca",
    eligible: false,
  },
  {
    word: "butani",
    eligible: false,
  },
  {
    word: "butâni",
    eligible: false,
  },
  {
    word: "butano",
    eligible: false,
  },
  {
    word: "buteão",
    eligible: false,
  },
  {
    word: "buteia",
    eligible: false,
  },
  {
    word: "butelo",
    eligible: false,
  },
  {
    word: "buteno",
    eligible: false,
  },
  {
    word: "butiás",
    eligible: false,
  },
  {
    word: "butico",
    eligible: false,
  },
  {
    word: "butiga",
    eligible: false,
  },
  {
    word: "butilo",
    eligible: false,
  },
  {
    word: "butino",
    eligible: false,
  },
  {
    word: "butiro",
    eligible: false,
  },
  {
    word: "bútomo",
    eligible: false,
  },
  {
    word: "butori",
    eligible: false,
  },
  {
    word: "butuas",
    eligible: false,
  },
  {
    word: "buxale",
    eligible: false,
  },
  {
    word: "buxete",
    eligible: false,
  },
  {
    word: "buxina",
    eligible: false,
  },
  {
    word: "buzeno",
    eligible: false,
  },
  {
    word: "búzera",
    eligible: false,
  },
  {
    word: "buziar",
    eligible: false,
  },
  {
    word: "buzita",
    eligible: false,
  },
  {
    word: "buzugo",
    eligible: false,
  },
  {
    word: "caacuí",
    eligible: false,
  },
  {
    word: "caaetê",
    eligible: false,
  },
  {
    word: "caanda",
    eligible: false,
  },
  {
    word: "caaobi",
    eligible: false,
  },
  {
    word: "caapiá",
    eligible: false,
  },
  {
    word: "caapoã",
    eligible: false,
  },
  {
    word: "caapor",
    eligible: false,
  },
  {
    word: "Caapuà",
    eligible: false,
  },
  {
    word: "caapuã",
    eligible: false,
  },
  {
    word: "Caasli",
    eligible: false,
  },
  {
    word: "caaxió",
    eligible: false,
  },
  {
    word: "cababa",
    eligible: false,
  },
  {
    word: "cabaça",
    eligible: false,
  },
  {
    word: "cabaço",
    eligible: false,
  },
  {
    word: "cabaçu",
    eligible: false,
  },
  {
    word: "cabada",
    eligible: false,
  },
  {
    word: "cabaia",
    eligible: false,
  },
  {
    word: "cabaiú",
    eligible: false,
  },
  {
    word: "cabane",
    eligible: false,
  },
  {
    word: "cabano",
    eligible: false,
  },
  {
    word: "cabaré",
    eligible: false,
  },
  {
    word: "cabari",
    eligible: false,
  },
  {
    word: "cabatã",
    eligible: false,
  },
  {
    word: "cabear",
    eligible: false,
  },
  {
    word: "Cabeça",
    eligible: false,
  },
  {
    word: "cabeça",
    eligible: false,
  },
  {
    word: "cabecê",
    eligible: false,
  },
  {
    word: "cabelo",
    eligible: false,
  },
  {
    word: "cabeua",
    eligible: false,
  },
  {
    word: "Cabeus",
    eligible: false,
  },
  {
    word: "cabiai",
    eligible: false,
  },
  {
    word: "cabide",
    eligible: false,
  },
  {
    word: "cabila",
    eligible: false,
  },
  {
    word: "cabine",
    eligible: false,
  },
  {
    word: "cabira",
    eligible: false,
  },
  {
    word: "cabíri",
    eligible: false,
  },
  {
    word: "cabitu",
    eligible: false,
  },
  {
    word: "cabixi",
    eligible: false,
  },
  {
    word: "cablar",
    eligible: false,
  },
  {
    word: "cabobo",
    eligible: false,
  },
  {
    word: "cabocó",
    eligible: false,
  },
  {
    word: "cabodá",
    eligible: false,
  },
  {
    word: "cabódi",
    eligible: false,
  },
  {
    word: "caboje",
    eligible: false,
  },
  {
    word: "cabole",
    eligible: false,
  },
  {
    word: "caboré",
    eligible: false,
  },
  {
    word: "Cabral",
    eligible: false,
  },
  {
    word: "cabrão",
    eligible: false,
  },
  {
    word: "cabrar",
    eligible: false,
  },
  {
    word: "cabras",
    eligible: false,
  },
  {
    word: "cábrea",
    eligible: false,
  },
  {
    word: "cabril",
    eligible: false,
  },
  {
    word: "cabrim",
    eligible: false,
  },
  {
    word: "cabruá",
    eligible: false,
  },
  {
    word: "cabrué",
    eligible: false,
  },
  {
    word: "cabrum",
    eligible: false,
  },
  {
    word: "cabuçu",
    eligible: false,
  },
  {
    word: "cabuia",
    eligible: false,
  },
  {
    word: "cabuim",
    eligible: false,
  },
  {
    word: "cábula",
    eligible: false,
  },
  {
    word: "caburé",
    eligible: false,
  },
  {
    word: "caburi",
    eligible: false,
  },
  {
    word: "caburo",
    eligible: false,
  },
  {
    word: "cabuta",
    eligible: false,
  },
  {
    word: "cacada",
    eligible: false,
  },
  {
    word: "caçada",
    eligible: false,
  },
  {
    word: "caçado",
    eligible: false,
  },
  {
    word: "cacaio",
    eligible: false,
  },
  {
    word: "cacajo",
    eligible: false,
  },
  {
    word: "cáçamo",
    eligible: false,
  },
  {
    word: "cacana",
    eligible: false,
  },
  {
    word: "caçapo",
    eligible: false,
  },
  {
    word: "cacara",
    eligible: false,
  },
  {
    word: "cacará",
    eligible: false,
  },
  {
    word: "cacata",
    eligible: false,
  },
  {
    word: "cacatu",
    eligible: false,
  },
  {
    word: "cacaué",
    eligible: false,
  },
  {
    word: "cacauê",
    eligible: false,
  },
  {
    word: "cacauí",
    eligible: false,
  },
  {
    word: "cacaus",
    eligible: false,
  },
  {
    word: "cacear",
    eligible: false,
  },
  {
    word: "cacebi",
    eligible: false,
  },
  {
    word: "cacera",
    eligible: false,
  },
  {
    word: "cachão",
    eligible: false,
  },
  {
    word: "cachar",
    eligible: false,
  },
  {
    word: "cachás",
    eligible: false,
  },
  {
    word: "cachés",
    eligible: false,
  },
  {
    word: "cachia",
    eligible: false,
  },
  {
    word: "cachil",
    eligible: false,
  },
  {
    word: "cachim",
    eligible: false,
  },
  {
    word: "cachos",
    eligible: false,
  },
  {
    word: "cachul",
    eligible: false,
  },
  {
    word: "cácimo",
    eligible: false,
  },
  {
    word: "cacite",
    eligible: false,
  },
  {
    word: "Cacoal",
    eligible: false,
  },
  {
    word: "caçoar",
    eligible: false,
  },
  {
    word: "cacoco",
    eligible: false,
  },
  {
    word: "cações",
    eligible: false,
  },
  {
    word: "cacola",
    eligible: false,
  },
  {
    word: "cacome",
    eligible: false,
  },
  {
    word: "cacopa",
    eligible: false,
  },
  {
    word: "cacoso",
    eligible: false,
  },
  {
    word: "cacóxi",
    eligible: false,
  },
  {
    word: "cactal",
    eligible: false,
  },
  {
    word: "cactos",
    eligible: false,
  },
  {
    word: "cactus",
    eligible: false,
  },
  {
    word: "cacual",
    eligible: false,
  },
  {
    word: "cacubi",
    eligible: false,
  },
  {
    word: "cacuco",
    eligible: false,
  },
  {
    word: "cacuia",
    eligible: false,
  },
  {
    word: "caçula",
    eligible: false,
  },
  {
    word: "Caculé",
    eligible: false,
  },
  {
    word: "caculo",
    eligible: false,
  },
  {
    word: "cacumá",
    eligible: false,
  },
  {
    word: "cacume",
    eligible: false,
  },
  {
    word: "cacumo",
    eligible: false,
  },
  {
    word: "cacuri",
    eligible: false,
  },
  {
    word: "cacutu",
    eligible: false,
  },
  {
    word: "cadaba",
    eligible: false,
  },
  {
    word: "cadamo",
    eligible: false,
  },
  {
    word: "cadava",
    eligible: false,
  },
  {
    word: "cadaxo",
    eligible: false,
  },
  {
    word: "caddie",
    eligible: false,
  },
  {
    word: "cadeia",
    eligible: false,
  },
  {
    word: "cadela",
    eligible: false,
  },
  {
    word: "cadena",
    eligible: false,
  },
  {
    word: "cadete",
    eligible: false,
  },
  {
    word: "cadexo",
    eligible: false,
  },
  {
    word: "cadime",
    eligible: false,
  },
  {
    word: "cadimo",
    eligible: false,
  },
  {
    word: "cadino",
    eligible: false,
  },
  {
    word: "cadivo",
    eligible: false,
  },
  {
    word: "cadixe",
    eligible: false,
  },
  {
    word: "cadixo",
    eligible: false,
  },
  {
    word: "cadmeu",
    eligible: false,
  },
  {
    word: "cádmio",
    eligible: false,
  },
  {
    word: "cadolo",
    eligible: false,
  },
  {
    word: "cadoxe",
    eligible: false,
  },
  {
    word: "cadoxo",
    eligible: false,
  },
  {
    word: "Cádson",
    eligible: false,
  },
  {
    word: "caduco",
    eligible: false,
  },
  {
    word: "cadulo",
    eligible: false,
  },
  {
    word: "caduso",
    eligible: false,
  },
  {
    word: "caeiro",
    eligible: false,
  },
  {
    word: "caetés",
    eligible: false,
  },
  {
    word: "cafeal",
    eligible: false,
  },
  {
    word: "cafeco",
    eligible: false,
  },
  {
    word: "cafele",
    eligible: false,
  },
  {
    word: "cafeol",
    eligible: false,
  },
  {
    word: "cafífi",
    eligible: false,
  },
  {
    word: "cáfila",
    eligible: false,
  },
  {
    word: "cafima",
    eligible: false,
  },
  {
    word: "cafofo",
    eligible: false,
  },
  {
    word: "cafona",
    eligible: false,
  },
  {
    word: "cafoto",
    eligible: false,
  },
  {
    word: "cafral",
    eligible: false,
  },
  {
    word: "cafres",
    eligible: false,
  },
  {
    word: "caftan",
    eligible: false,
  },
  {
    word: "Caftor",
    eligible: false,
  },
  {
    word: "cafuão",
    eligible: false,
  },
  {
    word: "cafubá",
    eligible: false,
  },
  {
    word: "cafuca",
    eligible: false,
  },
  {
    word: "cafuçu",
    eligible: false,
  },
  {
    word: "cafulo",
    eligible: false,
  },
  {
    word: "cafuné",
    eligible: false,
  },
  {
    word: "cafute",
    eligible: false,
  },
  {
    word: "cafuzo",
    eligible: false,
  },
  {
    word: "cagaço",
    eligible: false,
  },
  {
    word: "cágado",
    eligible: false,
  },
  {
    word: "cagauá",
    eligible: false,
  },
  {
    word: "cagões",
    eligible: false,
  },
  {
    word: "cagona",
    eligible: false,
  },
  {
    word: "cagoro",
    eligible: false,
  },
  {
    word: "cagote",
    eligible: false,
  },
  {
    word: "cagufa",
    eligible: false,
  },
  {
    word: "caiabi",
    eligible: false,
  },
  {
    word: "Caiabu",
    eligible: false,
  },
  {
    word: "caiacó",
    eligible: false,
  },
  {
    word: "caiaço",
    eligible: false,
  },
  {
    word: "caiacu",
    eligible: false,
  },
  {
    word: "caiado",
    eligible: false,
  },
  {
    word: "caiala",
    eligible: false,
  },
  {
    word: "caiana",
    eligible: false,
  },
  {
    word: "caiané",
    eligible: false,
  },
  {
    word: "caiapa",
    eligible: false,
  },
  {
    word: "caiapó",
    eligible: false,
  },
  {
    word: "caiaté",
    eligible: false,
  },
  {
    word: "caiaué",
    eligible: false,
  },
  {
    word: "cãibra",
    eligible: false,
  },
  {
    word: "caibro",
    eligible: false,
  },
  {
    word: "caicai",
    eligible: false,
  },
  {
    word: "caicau",
    eligible: false,
  },
  {
    word: "caídas",
    eligible: false,
  },
  {
    word: "caiena",
    eligible: false,
  },
  {
    word: "caieté",
    eligible: false,
  },
  {
    word: "caifás",
    eligible: false,
  },
  {
    word: "caiguá",
    eligible: false,
  },
  {
    word: "caimal",
    eligible: false,
  },
  {
    word: "Caimão",
    eligible: false,
  },
  {
    word: "caimão",
    eligible: false,
  },
  {
    word: "caimbá",
    eligible: false,
  },
  {
    word: "caimbé",
    eligible: false,
  },
  {
    word: "cainca",
    eligible: false,
  },
  {
    word: "caindo",
    eligible: false,
  },
  {
    word: "caingá",
    eligible: false,
  },
  {
    word: "cainho",
    eligible: false,
  },
  {
    word: "caiota",
    eligible: false,
  },
  {
    word: "caiová",
    eligible: false,
  },
  {
    word: "caipão",
    eligible: false,
  },
  {
    word: "Caique",
    eligible: false,
  },
  {
    word: "caíque",
    eligible: false,
  },
  {
    word: "cairel",
    eligible: false,
  },
  {
    word: "cairuá",
    eligible: false,
  },
  {
    word: "cáiser",
    eligible: false,
  },
  {
    word: "caitia",
    eligible: false,
  },
  {
    word: "Caiubi",
    eligible: false,
  },
  {
    word: "caiugá",
    eligible: false,
  },
  {
    word: "caiuia",
    eligible: false,
  },
  {
    word: "caixão",
    eligible: false,
  },
  {
    word: "caixas",
    eligible: false,
  },
  {
    word: "cajabi",
    eligible: false,
  },
  {
    word: "cajaça",
    eligible: false,
  },
  {
    word: "cajado",
    eligible: false,
  },
  {
    word: "cajaja",
    eligible: false,
  },
  {
    word: "cajano",
    eligible: false,
  },
  {
    word: "Cajari",
    eligible: false,
  },
  {
    word: "cajata",
    eligible: false,
  },
  {
    word: "cajati",
    eligible: false,
  },
  {
    word: "cajibá",
    eligible: false,
  },
  {
    word: "cajila",
    eligible: false,
  },
  {
    word: "cajitó",
    eligible: false,
  },
  {
    word: "Cajobi",
    eligible: false,
  },
  {
    word: "cajual",
    eligible: false,
  },
  {
    word: "cajubi",
    eligible: false,
  },
  {
    word: "cajuil",
    eligible: false,
  },
  {
    word: "cajuim",
    eligible: false,
  },
  {
    word: "cajuló",
    eligible: false,
  },
  {
    word: "cajuri",
    eligible: false,
  },
  {
    word: "cajuru",
    eligible: false,
  },
  {
    word: "cajuti",
    eligible: false,
  },
  {
    word: "calaba",
    eligible: false,
  },
  {
    word: "calaça",
    eligible: false,
  },
  {
    word: "calado",
    eligible: false,
  },
  {
    word: "calaim",
    eligible: false,
  },
  {
    word: "calala",
    eligible: false,
  },
  {
    word: "calalu",
    eligible: false,
  },
  {
    word: "cálamo",
    eligible: false,
  },
  {
    word: "calano",
    eligible: false,
  },
  {
    word: "calata",
    eligible: false,
  },
  {
    word: "calaus",
    eligible: false,
  },
  {
    word: "calaza",
    eligible: false,
  },
  {
    word: "calção",
    eligible: false,
  },
  {
    word: "calcar",
    eligible: false,
  },
  {
    word: "calçar",
    eligible: false,
  },
  {
    word: "calças",
    eligible: false,
  },
  {
    word: "calcês",
    eligible: false,
  },
  {
    word: "cálcio",
    eligible: false,
  },
  {
    word: "Calcol",
    eligible: false,
  },
  {
    word: "calcos",
    eligible: false,
  },
  {
    word: "calços",
    eligible: false,
  },
  {
    word: "caldeu",
    eligible: false,
  },
  {
    word: "caldos",
    eligible: false,
  },
  {
    word: "calear",
    eligible: false,
  },
  {
    word: "Calebe",
    eligible: false,
  },
  {
    word: "caleço",
    eligible: false,
  },
  {
    word: "calema",
    eligible: false,
  },
  {
    word: "calene",
    eligible: false,
  },
  {
    word: "caleno",
    eligible: false,
  },
  {
    word: "calepo",
    eligible: false,
  },
  {
    word: "calera",
    eligible: false,
  },
  {
    word: "calete",
    eligible: false,
  },
  {
    word: "caleto",
    eligible: false,
  },
  {
    word: "calhão",
    eligible: false,
  },
  {
    word: "calhar",
    eligible: false,
  },
  {
    word: "calhas",
    eligible: false,
  },
  {
    word: "calhau",
    eligible: false,
  },
  {
    word: "calhéu",
    eligible: false,
  },
  {
    word: "cálice",
    eligible: false,
  },
  {
    word: "calicó",
    eligible: false,
  },
  {
    word: "calicô",
    eligible: false,
  },
  {
    word: "caliço",
    eligible: false,
  },
  {
    word: "cálido",
    eligible: false,
  },
  {
    word: "Caliel",
    eligible: false,
  },
  {
    word: "califa",
    eligible: false,
  },
  {
    word: "cáliga",
    eligible: false,
  },
  {
    word: "caligo",
    eligible: false,
  },
  {
    word: "calilu",
    eligible: false,
  },
  {
    word: "calime",
    eligible: false,
  },
  {
    word: "calino",
    eligible: false,
  },
  {
    word: "Calipo",
    eligible: false,
  },
  {
    word: "calite",
    eligible: false,
  },
  {
    word: "calmão",
    eligible: false,
  },
  {
    word: "calmar",
    eligible: false,
  },
  {
    word: "Calmon",
    eligible: false,
  },
  {
    word: "calmos",
    eligible: false,
  },
  {
    word: "caloji",
    eligible: false,
  },
  {
    word: "calolo",
    eligible: false,
  },
  {
    word: "calona",
    eligible: false,
  },
  {
    word: "calose",
    eligible: false,
  },
  {
    word: "caloso",
    eligible: false,
  },
  {
    word: "calote",
    eligible: false,
  },
  {
    word: "calova",
    eligible: false,
  },
  {
    word: "caluba",
    eligible: false,
  },
  {
    word: "caluda",
    eligible: false,
  },
  {
    word: "caluga",
    eligible: false,
  },
  {
    word: "caluio",
    eligible: false,
  },
  {
    word: "caluje",
    eligible: false,
  },
  {
    word: "calulo",
    eligible: false,
  },
  {
    word: "calulu",
    eligible: false,
  },
  {
    word: "caluno",
    eligible: false,
  },
  {
    word: "caluro",
    eligible: false,
  },
  {
    word: "calvar",
    eligible: false,
  },
  {
    word: "calvas",
    eligible: false,
  },
  {
    word: "calvez",
    eligible: false,
  },
  {
    word: "Calvin",
    eligible: false,
  },
  {
    word: "calvos",
    eligible: false,
  },
  {
    word: "camacã",
    eligible: false,
  },
  {
    word: "camacu",
    eligible: false,
  },
  {
    word: "camada",
    eligible: false,
  },
  {
    word: "Camael",
    eligible: false,
  },
  {
    word: "camaia",
    eligible: false,
  },
  {
    word: "camaji",
    eligible: false,
  },
  {
    word: "Camamu",
    eligible: false,
  },
  {
    word: "camamu",
    eligible: false,
  },
  {
    word: "camaná",
    eligible: false,
  },
  {
    word: "camapé",
    eligible: false,
  },
  {
    word: "camapu",
    eligible: false,
  },
  {
    word: "camará",
    eligible: false,
  },
  {
    word: "câmara",
    eligible: false,
  },
  {
    word: "camaru",
    eligible: false,
  },
  {
    word: "Camata",
    eligible: false,
  },
  {
    word: "cambaí",
    eligible: false,
  },
  {
    word: "cambal",
    eligible: false,
  },
  {
    word: "cambão",
    eligible: false,
  },
  {
    word: "cambar",
    eligible: false,
  },
  {
    word: "cambau",
    eligible: false,
  },
  {
    word: "cambaz",
    eligible: false,
  },
  {
    word: "camber",
    eligible: false,
  },
  {
    word: "câmbio",
    eligible: false,
  },
  {
    word: "cambir",
    eligible: false,
  },
  {
    word: "cambói",
    eligible: false,
  },
  {
    word: "cambra",
    eligible: false,
  },
  {
    word: "Cambri",
    eligible: false,
  },
  {
    word: "cambro",
    eligible: false,
  },
  {
    word: "Cambuí",
    eligible: false,
  },
  {
    word: "cambuí",
    eligible: false,
  },
  {
    word: "camear",
    eligible: false,
  },
  {
    word: "camelo",
    eligible: false,
  },
  {
    word: "camelô",
    eligible: false,
  },
  {
    word: "camena",
    eligible: false,
  },
  {
    word: "câmera",
    eligible: false,
  },
  {
    word: "Cametá",
    eligible: false,
  },
  {
    word: "cametá",
    eligible: false,
  },
  {
    word: "camexe",
    eligible: false,
  },
  {
    word: "camila",
    eligible: false,
  },
  {
    word: "Camile",
    eligible: false,
  },
  {
    word: "Camilo",
    eligible: false,
  },
  {
    word: "Camiro",
    eligible: false,
  },
  {
    word: "camisa",
    eligible: false,
  },
  {
    word: "camita",
    eligible: false,
  },
  {
    word: "camoca",
    eligible: false,
  },
  {
    word: "camoês",
    eligible: false,
  },
  {
    word: "camone",
    eligible: false,
  },
  {
    word: "camote",
    eligible: false,
  },
  {
    word: "campal",
    eligible: false,
  },
  {
    word: "campão",
    eligible: false,
  },
  {
    word: "campar",
    eligible: false,
  },
  {
    word: "campir",
    eligible: false,
  },
  {
    word: "campos",
    eligible: false,
  },
  {
    word: "campus",
    eligible: false,
  },
  {
    word: "camucá",
    eligible: false,
  },
  {
    word: "camucé",
    eligible: false,
  },
  {
    word: "camuci",
    eligible: false,
  },
  {
    word: "camucu",
    eligible: false,
  },
  {
    word: "camuga",
    eligible: false,
  },
  {
    word: "camuno",
    eligible: false,
  },
  {
    word: "camuri",
    eligible: false,
  },
  {
    word: "camuru",
    eligible: false,
  },
  {
    word: "camuto",
    eligible: false,
  },
  {
    word: "canaca",
    eligible: false,
  },
  {
    word: "canaçu",
    eligible: false,
  },
  {
    word: "Canadá",
    eligible: false,
  },
  {
    word: "canadá",
    eligible: false,
  },
  {
    word: "canado",
    eligible: false,
  },
  {
    word: "Canale",
    eligible: false,
  },
  {
    word: "canana",
    eligible: false,
  },
  {
    word: "canané",
    eligible: false,
  },
  {
    word: "canapé",
    eligible: false,
  },
  {
    word: "canapê",
    eligible: false,
  },
  {
    word: "Canapi",
    eligible: false,
  },
  {
    word: "canapu",
    eligible: false,
  },
  {
    word: "canará",
    eligible: false,
  },
  {
    word: "canari",
    eligible: false,
  },
  {
    word: "canato",
    eligible: false,
  },
  {
    word: "canavã",
    eligible: false,
  },
  {
    word: "cânave",
    eligible: false,
  },
  {
    word: "cancão",
    eligible: false,
  },
  {
    word: "canção",
    eligible: false,
  },
  {
    word: "cancãs",
    eligible: false,
  },
  {
    word: "câncer",
    eligible: false,
  },
  {
    word: "cancha",
    eligible: false,
  },
  {
    word: "Canché",
    eligible: false,
  },
  {
    word: "canchi",
    eligible: false,
  },
  {
    word: "cancho",
    eligible: false,
  },
  {
    word: "Câncio",
    eligible: false,
  },
  {
    word: "cancro",
    eligible: false,
  },
  {
    word: "Cancún",
    eligible: false,
  },
  {
    word: "candar",
    eligible: false,
  },
  {
    word: "candeá",
    eligible: false,
  },
  {
    word: "candel",
    eligible: false,
  },
  {
    word: "candém",
    eligible: false,
  },
  {
    word: "candeu",
    eligible: false,
  },
  {
    word: "candil",
    eligible: false,
  },
  {
    word: "candim",
    eligible: false,
  },
  {
    word: "Candói",
    eligible: false,
  },
  {
    word: "candor",
    eligible: false,
  },
  {
    word: "candro",
    eligible: false,
  },
  {
    word: "candua",
    eligible: false,
  },
  {
    word: "canduá",
    eligible: false,
  },
  {
    word: "candum",
    eligible: false,
  },
  {
    word: "canear",
    eligible: false,
  },
  {
    word: "caneca",
    eligible: false,
  },
  {
    word: "caneco",
    eligible: false,
  },
  {
    word: "Canedo",
    eligible: false,
  },
  {
    word: "canejo",
    eligible: false,
  },
  {
    word: "canela",
    eligible: false,
  },
  {
    word: "canema",
    eligible: false,
  },
  {
    word: "canena",
    eligible: false,
  },
  {
    word: "caneta",
    eligible: false,
  },
  {
    word: "canfol",
    eligible: false,
  },
  {
    word: "cangão",
    eligible: false,
  },
  {
    word: "cangar",
    eligible: false,
  },
  {
    word: "cangas",
    eligible: false,
  },
  {
    word: "cangoá",
    eligible: false,
  },
  {
    word: "canguá",
    eligible: false,
  },
  {
    word: "canhão",
    eligible: false,
  },
  {
    word: "canhas",
    eligible: false,
  },
  {
    word: "canhim",
    eligible: false,
  },
  {
    word: "canhol",
    eligible: false,
  },
  {
    word: "canica",
    eligible: false,
  },
  {
    word: "caniço",
    eligible: false,
  },
  {
    word: "canido",
    eligible: false,
  },
  {
    word: "canife",
    eligible: false,
  },
  {
    word: "canijo",
    eligible: false,
  },
  {
    word: "canimo",
    eligible: false,
  },
  {
    word: "canina",
    eligible: false,
  },
  {
    word: "canino",
    eligible: false,
  },
  {
    word: "cânion",
    eligible: false,
  },
  {
    word: "canipa",
    eligible: false,
  },
  {
    word: "canito",
    eligible: false,
  },
  {
    word: "canjuí",
    eligible: false,
  },
  {
    word: "Cannes",
    eligible: false,
  },
  {
    word: "canoão",
    eligible: false,
  },
  {
    word: "canoas",
    eligible: false,
  },
  {
    word: "canoco",
    eligible: false,
  },
  {
    word: "canoés",
    eligible: false,
  },
  {
    word: "canola",
    eligible: false,
  },
  {
    word: "cânone",
    eligible: false,
  },
  {
    word: "canopi",
    eligible: false,
  },
  {
    word: "canopo",
    eligible: false,
  },
  {
    word: "canoro",
    eligible: false,
  },
  {
    word: "cansão",
    eligible: false,
  },
  {
    word: "cansar",
    eligible: false,
  },
  {
    word: "cansim",
    eligible: false,
  },
  {
    word: "cantal",
    eligible: false,
  },
  {
    word: "cantão",
    eligible: false,
  },
  {
    word: "cantar",
    eligible: false,
  },
  {
    word: "cantil",
    eligible: false,
  },
  {
    word: "cantor",
    eligible: false,
  },
  {
    word: "cantos",
    eligible: false,
  },
  {
    word: "cantua",
    eligible: false,
  },
  {
    word: "canuda",
    eligible: false,
  },
  {
    word: "canudo",
    eligible: false,
  },
  {
    word: "cânula",
    eligible: false,
  },
  {
    word: "canúri",
    eligible: false,
  },
  {
    word: "Canute",
    eligible: false,
  },
  {
    word: "canuto",
    eligible: false,
  },
  {
    word: "canuxi",
    eligible: false,
  },
  {
    word: "canxim",
    eligible: false,
  },
  {
    word: "canzil",
    eligible: false,
  },
  {
    word: "canzol",
    eligible: false,
  },
  {
    word: "canzuá",
    eligible: false,
  },
  {
    word: "caobas",
    eligible: false,
  },
  {
    word: "caolho",
    eligible: false,
  },
  {
    word: "caolim",
    eligible: false,
  },
  {
    word: "caombe",
    eligible: false,
  },
  {
    word: "caombo",
    eligible: false,
  },
  {
    word: "caonha",
    eligible: false,
  },
  {
    word: "caônio",
    eligible: false,
  },
  {
    word: "caopiá",
    eligible: false,
  },
  {
    word: "capaça",
    eligible: false,
  },
  {
    word: "capage",
    eligible: false,
  },
  {
    word: "capaia",
    eligible: false,
  },
  {
    word: "capaná",
    eligible: false,
  },
  {
    word: "capari",
    eligible: false,
  },
  {
    word: "caparu",
    eligible: false,
  },
  {
    word: "capata",
    eligible: false,
  },
  {
    word: "capaua",
    eligible: false,
  },
  {
    word: "capaxó",
    eligible: false,
  },
  {
    word: "capear",
    eligible: false,
  },
  {
    word: "capeba",
    eligible: false,
  },
  {
    word: "capego",
    eligible: false,
  },
  {
    word: "capela",
    eligible: false,
  },
  {
    word: "capelo",
    eligible: false,
  },
  {
    word: "capera",
    eligible: false,
  },
  {
    word: "capeta",
    eligible: false,
  },
  {
    word: "capete",
    eligible: false,
  },
  {
    word: "capeua",
    eligible: false,
  },
  {
    word: "capiar",
    eligible: false,
  },
  {
    word: "capiau",
    eligible: false,
  },
  {
    word: "cápide",
    eligible: false,
  },
  {
    word: "capiji",
    eligible: false,
  },
  {
    word: "capilé",
    eligible: false,
  },
  {
    word: "capina",
    eligible: false,
  },
  {
    word: "capinã",
    eligible: false,
  },
  {
    word: "capins",
    eligible: false,
  },
  {
    word: "capioa",
    eligible: false,
  },
  {
    word: "capité",
    eligible: false,
  },
  {
    word: "Capitu",
    eligible: false,
  },
  {
    word: "capnia",
    eligible: false,
  },
  {
    word: "capoca",
    eligible: false,
  },
  {
    word: "capolo",
    eligible: false,
  },
  {
    word: "capopa",
    eligible: false,
  },
  {
    word: "caporo",
    eligible: false,
  },
  {
    word: "capote",
    eligible: false,
  },
  {
    word: "capoxo",
    eligible: false,
  },
  {
    word: "capras",
    eligible: false,
  },
  {
    word: "cápreo",
    eligible: false,
  },
  {
    word: "caprim",
    eligible: false,
  },
  {
    word: "caprum",
    eligible: false,
  },
  {
    word: "captar",
    eligible: false,
  },
  {
    word: "captia",
    eligible: false,
  },
  {
    word: "captol",
    eligible: false,
  },
  {
    word: "captor",
    eligible: false,
  },
  {
    word: "capuão",
    eligible: false,
  },
  {
    word: "capuco",
    eligible: false,
  },
  {
    word: "caputi",
    eligible: false,
  },
  {
    word: "Caputo",
    eligible: false,
  },
  {
    word: "capuxu",
    eligible: false,
  },
  {
    word: "cáquis",
    eligible: false,
  },
  {
    word: "caraba",
    eligible: false,
  },
  {
    word: "carabé",
    eligible: false,
  },
  {
    word: "cárabo",
    eligible: false,
  },
  {
    word: "carabu",
    eligible: false,
  },
  {
    word: "caraca",
    eligible: false,
  },
  {
    word: "caracá",
    eligible: false,
  },
  {
    word: "caraco",
    eligible: false,
  },
  {
    word: "caraço",
    eligible: false,
  },
  {
    word: "caracu",
    eligible: false,
  },
  {
    word: "carafá",
    eligible: false,
  },
  {
    word: "carafo",
    eligible: false,
  },
  {
    word: "caragã",
    eligible: false,
  },
  {
    word: "carago",
    eligible: false,
  },
  {
    word: "caraiá",
    eligible: false,
  },
  {
    word: "carajá",
    eligible: false,
  },
  {
    word: "carajé",
    eligible: false,
  },
  {
    word: "caraju",
    eligible: false,
  },
  {
    word: "carale",
    eligible: false,
  },
  {
    word: "caramo",
    eligible: false,
  },
  {
    word: "carana",
    eligible: false,
  },
  {
    word: "caraná",
    eligible: false,
  },
  {
    word: "carano",
    eligible: false,
  },
  {
    word: "Carapã",
    eligible: false,
  },
  {
    word: "carapa",
    eligible: false,
  },
  {
    word: "carapé",
    eligible: false,
  },
  {
    word: "carapó",
    eligible: false,
  },
  {
    word: "carará",
    eligible: false,
  },
  {
    word: "cararé",
    eligible: false,
  },
  {
    word: "carari",
    eligible: false,
  },
  {
    word: "cararu",
    eligible: false,
  },
  {
    word: "carate",
    eligible: false,
  },
  {
    word: "caraté",
    eligible: false,
  },
  {
    word: "caratê",
    eligible: false,
  },
  {
    word: "carato",
    eligible: false,
  },
  {
    word: "carava",
    eligible: false,
  },
  {
    word: "cáravo",
    eligible: false,
  },
  {
    word: "caraxe",
    eligible: false,
  },
  {
    word: "caraza",
    eligible: false,
  },
  {
    word: "carbar",
    eligible: false,
  },
  {
    word: "carbol",
    eligible: false,
  },
  {
    word: "carcão",
    eligible: false,
  },
  {
    word: "carcás",
    eligible: false,
  },
  {
    word: "carcel",
    eligible: false,
  },
  {
    word: "carcha",
    eligible: false,
  },
  {
    word: "cardal",
    eligible: false,
  },
  {
    word: "cardão",
    eligible: false,
  },
  {
    word: "cardar",
    eligible: false,
  },
  {
    word: "cárdeo",
    eligible: false,
  },
  {
    word: "cárdia",
    eligible: false,
  },
  {
    word: "cardim",
    eligible: false,
  },
  {
    word: "cardir",
    eligible: false,
  },
  {
    word: "cardoa",
    eligible: false,
  },
  {
    word: "cardol",
    eligible: false,
  },
  {
    word: "cardos",
    eligible: false,
  },
  {
    word: "carear",
    eligible: false,
  },
  {
    word: "careca",
    eligible: false,
  },
  {
    word: "careia",
    eligible: false,
  },
  {
    word: "careta",
    eligible: false,
  },
  {
    word: "careto",
    eligible: false,
  },
  {
    word: "careza",
    eligible: false,
  },
  {
    word: "cargar",
    eligible: false,
  },
  {
    word: "cargas",
    eligible: false,
  },
  {
    word: "cargos",
    eligible: false,
  },
  {
    word: "cariaí",
    eligible: false,
  },
  {
    word: "cariar",
    eligible: false,
  },
  {
    word: "caribe",
    eligible: false,
  },
  {
    word: "caribé",
    eligible: false,
  },
  {
    word: "caribu",
    eligible: false,
  },
  {
    word: "cariço",
    eligible: false,
  },
  {
    word: "cariçó",
    eligible: false,
  },
  {
    word: "carigo",
    eligible: false,
  },
  {
    word: "carijó",
    eligible: false,
  },
  {
    word: "carilo",
    eligible: false,
  },
  {
    word: "carimã",
    eligible: false,
  },
  {
    word: "carimé",
    eligible: false,
  },
  {
    word: "carimi",
    eligible: false,
  },
  {
    word: "cariná",
    eligible: false,
  },
  {
    word: "Carine",
    eligible: false,
  },
  {
    word: "carino",
    eligible: false,
  },
  {
    word: "Carira",
    eligible: false,
  },
  {
    word: "Cariré",
    eligible: false,
  },
  {
    word: "cariri",
    eligible: false,
  },
  {
    word: "Cárita",
    eligible: false,
  },
  {
    word: "carito",
    eligible: false,
  },
  {
    word: "Cariús",
    eligible: false,
  },
  {
    word: "Carlão",
    eligible: false,
  },
  {
    word: "carlim",
    eligible: false,
  },
  {
    word: "carlos",
    eligible: false,
  },
  {
    word: "Carmem",
    eligible: false,
  },
  {
    word: "Cármen",
    eligible: false,
  },
  {
    word: "carmim",
    eligible: false,
  },
  {
    word: "carnal",
    eligible: false,
  },
  {
    word: "carnar",
    eligible: false,
  },
  {
    word: "carnaz",
    eligible: false,
  },
  {
    word: "cárneo",
    eligible: false,
  },
  {
    word: "carnes",
    eligible: false,
  },
  {
    word: "carneu",
    eligible: false,
  },
  {
    word: "caroal",
    eligible: false,
  },
  {
    word: "caroás",
    eligible: false,
  },
  {
    word: "Caroba",
    eligible: false,
  },
  {
    word: "caroba",
    eligible: false,
  },
  {
    word: "caroço",
    eligible: false,
  },
  {
    word: "carôço",
    eligible: false,
  },
  {
    word: "Carole",
    eligible: false,
  },
  {
    word: "carolo",
    eligible: false,
  },
  {
    word: "carone",
    eligible: false,
  },
  {
    word: "carova",
    eligible: false,
  },
  {
    word: "carpal",
    eligible: false,
  },
  {
    word: "carpar",
    eligible: false,
  },
  {
    word: "cárpeo",
    eligible: false,
  },
  {
    word: "carpim",
    eligible: false,
  },
  {
    word: "carpir",
    eligible: false,
  },
  {
    word: "carpos",
    eligible: false,
  },
  {
    word: "carque",
    eligible: false,
  },
  {
    word: "carral",
    eligible: false,
  },
  {
    word: "carrão",
    eligible: false,
  },
  {
    word: "carrar",
    eligible: false,
  },
  {
    word: "Carrel",
    eligible: false,
  },
  {
    word: "carril",
    eligible: false,
  },
  {
    word: "Carrol",
    eligible: false,
  },
  {
    word: "carros",
    eligible: false,
  },
  {
    word: "carste",
    eligible: false,
  },
  {
    word: "cartal",
    eligible: false,
  },
  {
    word: "Cartão",
    eligible: false,
  },
  {
    word: "cartão",
    eligible: false,
  },
  {
    word: "cartar",
    eligible: false,
  },
  {
    word: "Cartas",
    eligible: false,
  },
  {
    word: "cartas",
    eligible: false,
  },
  {
    word: "cartaz",
    eligible: false,
  },
  {
    word: "cartel",
    eligible: false,
  },
  {
    word: "cárter",
    eligible: false,
  },
  {
    word: "cartum",
    eligible: false,
  },
  {
    word: "caruba",
    eligible: false,
  },
  {
    word: "caruca",
    eligible: false,
  },
  {
    word: "Carula",
    eligible: false,
  },
  {
    word: "carulo",
    eligible: false,
  },
  {
    word: "caruma",
    eligible: false,
  },
  {
    word: "caruré",
    eligible: false,
  },
  {
    word: "caruro",
    eligible: false,
  },
  {
    word: "caruru",
    eligible: false,
  },
  {
    word: "Caruso",
    eligible: false,
  },
  {
    word: "caruto",
    eligible: false,
  },
  {
    word: "carvão",
    eligible: false,
  },
  {
    word: "carviz",
    eligible: false,
  },
  {
    word: "carvoa",
    eligible: false,
  },
  {
    word: "carvol",
    eligible: false,
  },
  {
    word: "casaca",
    eligible: false,
  },
  {
    word: "casaco",
    eligible: false,
  },
  {
    word: "Casado",
    eligible: false,
  },
  {
    word: "casado",
    eligible: false,
  },
  {
    word: "casana",
    eligible: false,
  },
  {
    word: "casapo",
    eligible: false,
  },
  {
    word: "casata",
    eligible: false,
  },
  {
    word: "cascal",
    eligible: false,
  },
  {
    word: "cascar",
    eligible: false,
  },
  {
    word: "cascas",
    eligible: false,
  },
  {
    word: "cascol",
    eligible: false,
  },
  {
    word: "cascos",
    eligible: false,
  },
  {
    word: "casear",
    eligible: false,
  },
  {
    word: "caseco",
    eligible: false,
  },
  {
    word: "casela",
    eligible: false,
  },
  {
    word: "caseró",
    eligible: false,
  },
  {
    word: "caseta",
    eligible: false,
  },
  {
    word: "casino",
    eligible: false,
  },
  {
    word: "casita",
    eligible: false,
  },
  {
    word: "casola",
    eligible: false,
  },
  {
    word: "casoto",
    eligible: false,
  },
  {
    word: "Caspar",
    eligible: false,
  },
  {
    word: "caspas",
    eligible: false,
  },
  {
    word: "Cásper",
    eligible: false,
  },
  {
    word: "Cáspio",
    eligible: false,
  },
  {
    word: "Cassal",
    eligible: false,
  },
  {
    word: "cassar",
    eligible: false,
  },
  {
    word: "cassia",
    eligible: false,
  },
  {
    word: "cássia",
    eligible: false,
  },
  {
    word: "cassim",
    eligible: false,
  },
  {
    word: "Cássio",
    eligible: false,
  },
  {
    word: "cassis",
    eligible: false,
  },
  {
    word: "cássis",
    eligible: false,
  },
  {
    word: "cassoa",
    eligible: false,
  },
  {
    word: "castão",
    eligible: false,
  },
  {
    word: "castas",
    eligible: false,
  },
  {
    word: "Castel",
    eligible: false,
  },
  {
    word: "castor",
    eligible: false,
  },
  {
    word: "castro",
    eligible: false,
  },
  {
    word: "castur",
    eligible: false,
  },
  {
    word: "casual",
    eligible: false,
  },
  {
    word: "casuar",
    eligible: false,
  },
  {
    word: "casuco",
    eligible: false,
  },
  {
    word: "casulo",
    eligible: false,
  },
  {
    word: "cataba",
    eligible: false,
  },
  {
    word: "catabi",
    eligible: false,
  },
  {
    word: "catacá",
    eligible: false,
  },
  {
    word: "catafe",
    eligible: false,
  },
  {
    word: "cataia",
    eligible: false,
  },
  {
    word: "catajé",
    eligible: false,
  },
  {
    word: "catala",
    eligible: false,
  },
  {
    word: "cataló",
    eligible: false,
  },
  {
    word: "catapa",
    eligible: false,
  },
  {
    word: "catapu",
    eligible: false,
  },
  {
    word: "catari",
    eligible: false,
  },
  {
    word: "cátaro",
    eligible: false,
  },
  {
    word: "Catate",
    eligible: false,
  },
  {
    word: "catato",
    eligible: false,
  },
  {
    word: "cataxu",
    eligible: false,
  },
  {
    word: "catear",
    eligible: false,
  },
  {
    word: "catena",
    eligible: false,
  },
  {
    word: "Catête",
    eligible: false,
  },
  {
    word: "catete",
    eligible: false,
  },
  {
    word: "catetê",
    eligible: false,
  },
  {
    word: "cateto",
    eligible: false,
  },
  {
    word: "catexe",
    eligible: false,
  },
  {
    word: "catião",
    eligible: false,
  },
  {
    word: "catiba",
    eligible: false,
  },
  {
    word: "caticó",
    eligible: false,
  },
  {
    word: "catina",
    eligible: false,
  },
  {
    word: "catioa",
    eligible: false,
  },
  {
    word: "catiom",
    eligible: false,
  },
  {
    word: "cátion",
    eligible: false,
  },
  {
    word: "catipé",
    eligible: false,
  },
  {
    word: "catira",
    eligible: false,
  },
  {
    word: "catita",
    eligible: false,
  },
  {
    word: "catitu",
    eligible: false,
  },
  {
    word: "catixa",
    eligible: false,
  },
  {
    word: "catoco",
    eligible: false,
  },
  {
    word: "catodo",
    eligible: false,
  },
  {
    word: "cátodo",
    eligible: false,
  },
  {
    word: "catojé",
    eligible: false,
  },
  {
    word: "Catolé",
    eligible: false,
  },
  {
    word: "catolé",
    eligible: false,
  },
  {
    word: "Catone",
    eligible: false,
  },
  {
    word: "catopé",
    eligible: false,
  },
  {
    word: "catopê",
    eligible: false,
  },
  {
    word: "catori",
    eligible: false,
  },
  {
    word: "catota",
    eligible: false,
  },
  {
    word: "catoto",
    eligible: false,
  },
  {
    word: "catrau",
    eligible: false,
  },
  {
    word: "catual",
    eligible: false,
  },
  {
    word: "Catuji",
    eligible: false,
  },
  {
    word: "catulé",
    eligible: false,
  },
  {
    word: "catulo",
    eligible: false,
  },
  {
    word: "catuma",
    eligible: false,
  },
  {
    word: "catupé",
    eligible: false,
  },
  {
    word: "catupê",
    eligible: false,
  },
  {
    word: "caturo",
    eligible: false,
  },
  {
    word: "Catuti",
    eligible: false,
  },
  {
    word: "catuto",
    eligible: false,
  },
  {
    word: "cauaba",
    eligible: false,
  },
  {
    word: "cauaçu",
    eligible: false,
  },
  {
    word: "cauaiá",
    eligible: false,
  },
  {
    word: "cauana",
    eligible: false,
  },
  {
    word: "cauanã",
    eligible: false,
  },
  {
    word: "cauará",
    eligible: false,
  },
  {
    word: "cauaré",
    eligible: false,
  },
  {
    word: "cauari",
    eligible: false,
  },
  {
    word: "cauauã",
    eligible: false,
  },
  {
    word: "cauaué",
    eligible: false,
  },
  {
    word: "cauaxi",
    eligible: false,
  },
  {
    word: "caubói",
    eligible: false,
  },
  {
    word: "caução",
    eligible: false,
  },
  {
    word: "caucho",
    eligible: false,
  },
  {
    word: "cauchu",
    eligible: false,
  },
  {
    word: "caudal",
    eligible: false,
  },
  {
    word: "caudas",
    eligible: false,
  },
  {
    word: "caudel",
    eligible: false,
  },
  {
    word: "cauera",
    eligible: false,
  },
  {
    word: "cauila",
    eligible: false,
  },
  {
    word: "cauipe",
    eligible: false,
  },
  {
    word: "cauira",
    eligible: false,
  },
  {
    word: "cauixi",
    eligible: false,
  },
  {
    word: "caulim",
    eligible: false,
  },
  {
    word: "caúnas",
    eligible: false,
  },
  {
    word: "caunho",
    eligible: false,
  },
  {
    word: "caureí",
    eligible: false,
  },
  {
    word: "cauril",
    eligible: false,
  },
  {
    word: "caurim",
    eligible: false,
  },
  {
    word: "causal",
    eligible: false,
  },
  {
    word: "causar",
    eligible: false,
  },
  {
    word: "causas",
    eligible: false,
  },
  {
    word: "causos",
    eligible: false,
  },
  {
    word: "cavaco",
    eligible: false,
  },
  {
    word: "Cávado",
    eligible: false,
  },
  {
    word: "cavala",
    eligible: false,
  },
  {
    word: "cavalo",
    eligible: false,
  },
  {
    word: "cavani",
    eligible: false,
  },
  {
    word: "Cavati",
    eligible: false,
  },
  {
    word: "cavaué",
    eligible: false,
  },
  {
    word: "cavear",
    eligible: false,
  },
  {
    word: "caveto",
    eligible: false,
  },
  {
    word: "caviar",
    eligible: false,
  },
  {
    word: "cavodá",
    eligible: false,
  },
  {
    word: "caxeta",
    eligible: false,
  },
  {
    word: "caxexe",
    eligible: false,
  },
  {
    word: "caxias",
    eligible: false,
  },
  {
    word: "caxibo",
    eligible: false,
  },
  {
    word: "caxibu",
    eligible: false,
  },
  {
    word: "caxico",
    eligible: false,
  },
  {
    word: "caxiné",
    eligible: false,
  },
  {
    word: "caxinê",
    eligible: false,
  },
  {
    word: "caxiri",
    eligible: false,
  },
  {
    word: "caxito",
    eligible: false,
  },
  {
    word: "caxixe",
    eligible: false,
  },
  {
    word: "caxixi",
    eligible: false,
  },
  {
    word: "caxuás",
    eligible: false,
  },
  {
    word: "caxupa",
    eligible: false,
  },
  {
    word: "Cayman",
    eligible: false,
  },
  {
    word: "cazuré",
    eligible: false,
  },
  {
    word: "Cazuza",
    eligible: false,
  },
  {
    word: "CCCIII",
    eligible: false,
  },
  {
    word: "CCCLII",
    eligible: false,
  },
  {
    word: "CCCLIV",
    eligible: false,
  },
  {
    word: "CCCLIX",
    eligible: false,
  },
  {
    word: "CCCLVI",
    eligible: false,
  },
  {
    word: "CCCLXI",
    eligible: false,
  },
  {
    word: "CCCLXV",
    eligible: false,
  },
  {
    word: "CCCLXX",
    eligible: false,
  },
  {
    word: "CCCVII",
    eligible: false,
  },
  {
    word: "CCCXCI",
    eligible: false,
  },
  {
    word: "CCCXCV",
    eligible: false,
  },
  {
    word: "CCCXII",
    eligible: false,
  },
  {
    word: "CCCXIV",
    eligible: false,
  },
  {
    word: "CCCXIX",
    eligible: false,
  },
  {
    word: "CCCXLI",
    eligible: false,
  },
  {
    word: "CCCXLV",
    eligible: false,
  },
  {
    word: "CCCXVI",
    eligible: false,
  },
  {
    word: "CCCXXI",
    eligible: false,
  },
  {
    word: "CCCXXV",
    eligible: false,
  },
  {
    word: "CCCXXX",
    eligible: false,
  },
  {
    word: "CCLIII",
    eligible: false,
  },
  {
    word: "CCLVII",
    eligible: false,
  },
  {
    word: "CCLXII",
    eligible: false,
  },
  {
    word: "CCLXIV",
    eligible: false,
  },
  {
    word: "CCLXIX",
    eligible: false,
  },
  {
    word: "CCLXVI",
    eligible: false,
  },
  {
    word: "CCLXXI",
    eligible: false,
  },
  {
    word: "CCLXXV",
    eligible: false,
  },
  {
    word: "CCLXXX",
    eligible: false,
  },
  {
    word: "CCVIII",
    eligible: false,
  },
  {
    word: "CCXCII",
    eligible: false,
  },
  {
    word: "CCXCIV",
    eligible: false,
  },
  {
    word: "CCXCIX",
    eligible: false,
  },
  {
    word: "CCXCVI",
    eligible: false,
  },
  {
    word: "CCXIII",
    eligible: false,
  },
  {
    word: "CCXLII",
    eligible: false,
  },
  {
    word: "CCXLIV",
    eligible: false,
  },
  {
    word: "CCXLIX",
    eligible: false,
  },
  {
    word: "CCXLVI",
    eligible: false,
  },
  {
    word: "CCXVII",
    eligible: false,
  },
  {
    word: "CCXXII",
    eligible: false,
  },
  {
    word: "CCXXIV",
    eligible: false,
  },
  {
    word: "CCXXIX",
    eligible: false,
  },
  {
    word: "CCXXVI",
    eligible: false,
  },
  {
    word: "CCXXXI",
    eligible: false,
  },
  {
    word: "CCXXXV",
    eligible: false,
  },
  {
    word: "CDLIII",
    eligible: false,
  },
  {
    word: "CDLVII",
    eligible: false,
  },
  {
    word: "CDLXII",
    eligible: false,
  },
  {
    word: "CDLXIV",
    eligible: false,
  },
  {
    word: "CDLXIX",
    eligible: false,
  },
  {
    word: "CDLXVI",
    eligible: false,
  },
  {
    word: "CDLXXI",
    eligible: false,
  },
  {
    word: "CDLXXV",
    eligible: false,
  },
  {
    word: "CDLXXX",
    eligible: false,
  },
  {
    word: "CDVIII",
    eligible: false,
  },
  {
    word: "CDXCII",
    eligible: false,
  },
  {
    word: "CDXCIV",
    eligible: false,
  },
  {
    word: "CDXCIX",
    eligible: false,
  },
  {
    word: "CDXCVI",
    eligible: false,
  },
  {
    word: "CDXIII",
    eligible: false,
  },
  {
    word: "CDXLII",
    eligible: false,
  },
  {
    word: "CDXLIV",
    eligible: false,
  },
  {
    word: "CDXLIX",
    eligible: false,
  },
  {
    word: "CDXLVI",
    eligible: false,
  },
  {
    word: "CDXVII",
    eligible: false,
  },
  {
    word: "CDXXII",
    eligible: false,
  },
  {
    word: "CDXXIV",
    eligible: false,
  },
  {
    word: "CDXXIX",
    eligible: false,
  },
  {
    word: "CDXXVI",
    eligible: false,
  },
  {
    word: "CDXXXI",
    eligible: false,
  },
  {
    word: "CDXXXV",
    eligible: false,
  },
  {
    word: "CEAJud",
    eligible: false,
  },
  {
    word: "cearás",
    eligible: false,
  },
  {
    word: "cébida",
    eligible: false,
  },
  {
    word: "cebino",
    eligible: false,
  },
  {
    word: "cebite",
    eligible: false,
  },
  {
    word: "cebola",
    eligible: false,
  },
  {
    word: "cebolo",
    eligible: false,
  },
  {
    word: "cébrio",
    eligible: false,
  },
  {
    word: "cecear",
    eligible: false,
  },
  {
    word: "cécega",
    eligible: false,
  },
  {
    word: "cécias",
    eligible: false,
  },
  {
    word: "cecice",
    eligible: false,
  },
  {
    word: "cécida",
    eligible: false,
  },
  {
    word: "Cecile",
    eligible: false,
  },
  {
    word: "cecite",
    eligible: false,
  },
  {
    word: "cécubo",
    eligible: false,
  },
  {
    word: "Céculo",
    eligible: false,
  },
  {
    word: "cediço",
    eligible: false,
  },
  {
    word: "Cedine",
    eligible: false,
  },
  {
    word: "Cedral",
    eligible: false,
  },
  {
    word: "cedrão",
    eligible: false,
  },
  {
    word: "cédrão",
    eligible: false,
  },
  {
    word: "cédria",
    eligible: false,
  },
  {
    word: "cedroí",
    eligible: false,
  },
  {
    word: "cedrol",
    eligible: false,
  },
  {
    word: "Cedrom",
    eligible: false,
  },
  {
    word: "cedros",
    eligible: false,
  },
  {
    word: "cédula",
    eligible: false,
  },
  {
    word: "ceeiro",
    eligible: false,
  },
  {
    word: "CEERGS",
    eligible: false,
  },
  {
    word: "cefalo",
    eligible: false,
  },
  {
    word: "céfalo",
    eligible: false,
  },
  {
    word: "cefele",
    eligible: false,
  },
  {
    word: "cefene",
    eligible: false,
  },
  {
    word: "Cefira",
    eligible: false,
  },
  {
    word: "cegude",
    eligible: false,
  },
  {
    word: "cegudo",
    eligible: false,
  },
  {
    word: "ceiçal",
    eligible: false,
  },
  {
    word: "ceifão",
    eligible: false,
  },
  {
    word: "ceifar",
    eligible: false,
  },
  {
    word: "Ceilão",
    eligible: false,
  },
  {
    word: "ceilão",
    eligible: false,
  },
  {
    word: "ceiote",
    eligible: false,
  },
  {
    word: "ceitão",
    eligible: false,
  },
  {
    word: "ceitil",
    eligible: false,
  },
  {
    word: "ceivar",
    eligible: false,
  },
  {
    word: "celada",
    eligible: false,
  },
  {
    word: "celase",
    eligible: false,
  },
  {
    word: "célase",
    eligible: false,
  },
  {
    word: "célcio",
    eligible: false,
  },
  {
    word: "Celene",
    eligible: false,
  },
  {
    word: "celeno",
    eligible: false,
  },
  {
    word: "célere",
    eligible: false,
  },
  {
    word: "celeto",
    eligible: false,
  },
  {
    word: "célibe",
    eligible: false,
  },
  {
    word: "célico",
    eligible: false,
  },
  {
    word: "celina",
    eligible: false,
  },
  {
    word: "Celine",
    eligible: false,
  },
  {
    word: "Celino",
    eligible: false,
  },
  {
    word: "celite",
    eligible: false,
  },
  {
    word: "celoma",
    eligible: false,
  },
  {
    word: "celope",
    eligible: false,
  },
  {
    word: "celose",
    eligible: false,
  },
  {
    word: "célsia",
    eligible: false,
  },
  {
    word: "Célson",
    eligible: false,
  },
  {
    word: "céltio",
    eligible: false,
  },
  {
    word: "céltis",
    eligible: false,
  },
  {
    word: "Célula",
    eligible: false,
  },
  {
    word: "célula",
    eligible: false,
  },
  {
    word: "celuro",
    eligible: false,
  },
  {
    word: "celvar",
    eligible: false,
  },
  {
    word: "cembro",
    eligible: false,
  },
  {
    word: "cemono",
    eligible: false,
  },
  {
    word: "cempse",
    eligible: false,
  },
  {
    word: "cempso",
    eligible: false,
  },
  {
    word: "cencro",
    eligible: false,
  },
  {
    word: "cendal",
    eligible: false,
  },
  {
    word: "cendas",
    eligible: false,
  },
  {
    word: "cenema",
    eligible: false,
  },
  {
    word: "cenhir",
    eligible: false,
  },
  {
    word: "cênico",
    eligible: false,
  },
  {
    word: "cenito",
    eligible: false,
  },
  {
    word: "cenose",
    eligible: false,
  },
  {
    word: "cenoso",
    eligible: false,
  },
  {
    word: "cenote",
    eligible: false,
  },
  {
    word: "censor",
    eligible: false,
  },
  {
    word: "centão",
    eligible: false,
  },
  {
    word: "center",
    eligible: false,
  },
  {
    word: "centil",
    eligible: false,
  },
  {
    word: "Centro",
    eligible: false,
  },
  {
    word: "centro",
    eligible: false,
  },
  {
    word: "cenudo",
    eligible: false,
  },
  {
    word: "cenuro",
    eligible: false,
  },
  {
    word: "ceotar",
    eligible: false,
  },
  {
    word: "cepipa",
    eligible: false,
  },
  {
    word: "cépola",
    eligible: false,
  },
  {
    word: "Ceppir",
    eligible: false,
  },
  {
    word: "cépsio",
    eligible: false,
  },
  {
    word: "cepudo",
    eligible: false,
  },
  {
    word: "cequim",
    eligible: false,
  },
  {
    word: "cerame",
    eligible: false,
  },
  {
    word: "céramo",
    eligible: false,
  },
  {
    word: "cérapo",
    eligible: false,
  },
  {
    word: "céraso",
    eligible: false,
  },
  {
    word: "cerato",
    eligible: false,
  },
  {
    word: "cercal",
    eligible: false,
  },
  {
    word: "cercar",
    eligible: false,
  },
  {
    word: "cérceo",
    eligible: false,
  },
  {
    word: "cércio",
    eligible: false,
  },
  {
    word: "cercos",
    eligible: false,
  },
  {
    word: "cerdão",
    eligible: false,
  },
  {
    word: "cereal",
    eligible: false,
  },
  {
    word: "cereba",
    eligible: false,
  },
  {
    word: "cereja",
    eligible: false,
  },
  {
    word: "cerejo",
    eligible: false,
  },
  {
    word: "cererê",
    eligible: false,
  },
  {
    word: "cereso",
    eligible: false,
  },
  {
    word: "cereus",
    eligible: false,
  },
  {
    word: "cergir",
    eligible: false,
  },
  {
    word: "ceriba",
    eligible: false,
  },
  {
    word: "cérico",
    eligible: false,
  },
  {
    word: "céride",
    eligible: false,
  },
  {
    word: "cerile",
    eligible: false,
  },
  {
    word: "cerilo",
    eligible: false,
  },
  {
    word: "cerino",
    eligible: false,
  },
  {
    word: "cérion",
    eligible: false,
  },
  {
    word: "cerita",
    eligible: false,
  },
  {
    word: "cérite",
    eligible: false,
  },
  {
    word: "ceriva",
    eligible: false,
  },
  {
    word: "cernão",
    eligible: false,
  },
  {
    word: "cernar",
    eligible: false,
  },
  {
    word: "cérneo",
    eligible: false,
  },
  {
    word: "cernir",
    eligible: false,
  },
  {
    word: "cerome",
    eligible: false,
  },
  {
    word: "cerona",
    eligible: false,
  },
  {
    word: "Ceroni",
    eligible: false,
  },
  {
    word: "ceroso",
    eligible: false,
  },
  {
    word: "ceroto",
    eligible: false,
  },
  {
    word: "cerral",
    eligible: false,
  },
  {
    word: "cerrar",
    eligible: false,
  },
  {
    word: "cerros",
    eligible: false,
  },
  {
    word: "certar",
    eligible: false,
  },
  {
    word: "cértia",
    eligible: false,
  },
  {
    word: "certos",
    eligible: false,
  },
  {
    word: "ceruco",
    eligible: false,
  },
  {
    word: "cerude",
    eligible: false,
  },
  {
    word: "cérulo",
    eligible: false,
  },
  {
    word: "cerume",
    eligible: false,
  },
  {
    word: "cerura",
    eligible: false,
  },
  {
    word: "cerusa",
    eligible: false,
  },
  {
    word: "cerval",
    eligible: false,
  },
  {
    word: "cérvia",
    eligible: false,
  },
  {
    word: "cérvix",
    eligible: false,
  },
  {
    word: "cerviz",
    eligible: false,
  },
  {
    word: "cervos",
    eligible: false,
  },
  {
    word: "cervum",
    eligible: false,
  },
  {
    word: "cerzir",
    eligible: false,
  },
  {
    word: "cesare",
    eligible: false,
  },
  {
    word: "cesaro",
    eligible: false,
  },
  {
    word: "cesina",
    eligible: false,
  },
  {
    word: "Cesira",
    eligible: false,
  },
  {
    word: "cessão",
    eligible: false,
  },
  {
    word: "cessar",
    eligible: false,
  },
  {
    word: "cestão",
    eligible: false,
  },
  {
    word: "cestas",
    eligible: false,
  },
  {
    word: "cestos",
    eligible: false,
  },
  {
    word: "cestro",
    eligible: false,
  },
  {
    word: "cetano",
    eligible: false,
  },
  {
    word: "cetene",
    eligible: false,
  },
  {
    word: "ceteno",
    eligible: false,
  },
  {
    word: "cetete",
    eligible: false,
  },
  {
    word: "cético",
    eligible: false,
  },
  {
    word: "cetilo",
    eligible: false,
  },
  {
    word: "cetina",
    eligible: false,
  },
  {
    word: "cetins",
    eligible: false,
  },
  {
    word: "cetona",
    eligible: false,
  },
  {
    word: "cetose",
    eligible: false,
  },
  {
    word: "cevada",
    eligible: false,
  },
  {
    word: "cevina",
    eligible: false,
  },
  {
    word: "cévola",
    eligible: false,
  },
  {
    word: "chabéu",
    eligible: false,
  },
  {
    word: "chacal",
    eligible: false,
  },
  {
    word: "chaçar",
    eligible: false,
  },
  {
    word: "Chachá",
    eligible: false,
  },
  {
    word: "chacha",
    eligible: false,
  },
  {
    word: "chacim",
    eligible: false,
  },
  {
    word: "chacma",
    eligible: false,
  },
  {
    word: "chacra",
    eligible: false,
  },
  {
    word: "chacta",
    eligible: false,
  },
  {
    word: "chagar",
    eligible: false,
  },
  {
    word: "chagas",
    eligible: false,
  },
  {
    word: "chagaz",
    eligible: false,
  },
  {
    word: "Chagos",
    eligible: false,
  },
  {
    word: "chaima",
    eligible: false,
  },
  {
    word: "chaina",
    eligible: false,
  },
  {
    word: "chaise",
    eligible: false,
  },
  {
    word: "chalão",
    eligible: false,
  },
  {
    word: "chalar",
    eligible: false,
  },
  {
    word: "chalés",
    eligible: false,
  },
  {
    word: "chaliá",
    eligible: false,
  },
  {
    word: "chalma",
    eligible: false,
  },
  {
    word: "chamar",
    eligible: false,
  },
  {
    word: "chamas",
    eligible: false,
  },
  {
    word: "chambo",
    eligible: false,
  },
  {
    word: "champe",
    eligible: false,
  },
  {
    word: "champó",
    eligible: false,
  },
  {
    word: "champô",
    eligible: false,
  },
  {
    word: "chanar",
    eligible: false,
  },
  {
    word: "chanás",
    eligible: false,
  },
  {
    word: "chanca",
    eligible: false,
  },
  {
    word: "chance",
    eligible: false,
  },
  {
    word: "chanco",
    eligible: false,
  },
  {
    word: "chanço",
    eligible: false,
  },
  {
    word: "chande",
    eligible: false,
  },
  {
    word: "chanfo",
    eligible: false,
  },
  {
    word: "chanha",
    eligible: false,
  },
  {
    word: "chapão",
    eligible: false,
  },
  {
    word: "chapar",
    eligible: false,
  },
  {
    word: "chapas",
    eligible: false,
  },
  {
    word: "chapéu",
    eligible: false,
  },
  {
    word: "chapim",
    eligible: false,
  },
  {
    word: "chapuz",
    eligible: false,
  },
  {
    word: "charão",
    eligible: false,
  },
  {
    word: "charco",
    eligible: false,
  },
  {
    word: "charda",
    eligible: false,
  },
  {
    word: "chardó",
    eligible: false,
  },
  {
    word: "charéu",
    eligible: false,
  },
  {
    word: "charge",
    eligible: false,
  },
  {
    word: "chariô",
    eligible: false,
  },
  {
    word: "Charis",
    eligible: false,
  },
  {
    word: "charló",
    eligible: false,
  },
  {
    word: "charme",
    eligible: false,
  },
  {
    word: "charpa",
    eligible: false,
  },
  {
    word: "charro",
    eligible: false,
  },
  {
    word: "charta",
    eligible: false,
  },
  {
    word: "chasca",
    eligible: false,
  },
  {
    word: "chasco",
    eligible: false,
  },
  {
    word: "chaspa",
    eligible: false,
  },
  {
    word: "chassi",
    eligible: false,
  },
  {
    word: "chatão",
    eligible: false,
  },
  {
    word: "chatas",
    eligible: false,
  },
  {
    word: "chatim",
    eligible: false,
  },
  {
    word: "chatos",
    eligible: false,
  },
  {
    word: "chauia",
    eligible: false,
  },
  {
    word: "Chaval",
    eligible: false,
  },
  {
    word: "chavão",
    eligible: false,
  },
  {
    word: "chavem",
    eligible: false,
  },
  {
    word: "chaves",
    eligible: false,
  },
  {
    word: "chazal",
    eligible: false,
  },
  {
    word: "checar",
    eligible: false,
  },
  {
    word: "cheche",
    eligible: false,
  },
  {
    word: "cheché",
    eligible: false,
  },
  {
    word: "checos",
    eligible: false,
  },
  {
    word: "chedre",
    eligible: false,
  },
  {
    word: "chefão",
    eligible: false,
  },
  {
    word: "chefes",
    eligible: false,
  },
  {
    word: "chefia",
    eligible: false,
  },
  {
    word: "chegar",
    eligible: false,
  },
  {
    word: "cheias",
    eligible: false,
  },
  {
    word: "cheide",
    eligible: false,
  },
  {
    word: "cheila",
    eligible: false,
  },
  {
    word: "cheina",
    eligible: false,
  },
  {
    word: "cheios",
    eligible: false,
  },
  {
    word: "cheira",
    eligible: false,
  },
  {
    word: "cheiro",
    eligible: false,
  },
  {
    word: "chelém",
    eligible: false,
  },
  {
    word: "chelim",
    eligible: false,
  },
  {
    word: "chelpa",
    eligible: false,
  },
  {
    word: "chelro",
    eligible: false,
  },
  {
    word: "chempo",
    eligible: false,
  },
  {
    word: "chendo",
    eligible: false,
  },
  {
    word: "cheque",
    eligible: false,
  },
  {
    word: "cherna",
    eligible: false,
  },
  {
    word: "cherne",
    eligible: false,
  },
  {
    word: "cherno",
    eligible: false,
  },
  {
    word: "cherte",
    eligible: false,
  },
  {
    word: "cherva",
    eligible: false,
  },
  {
    word: "cheúra",
    eligible: false,
  },
  {
    word: "chevró",
    eligible: false,
  },
  {
    word: "cheyne",
    eligible: false,
  },
  {
    word: "chibar",
    eligible: false,
  },
  {
    word: "chibeu",
    eligible: false,
  },
  {
    word: "chicão",
    eligible: false,
  },
  {
    word: "chiçar",
    eligible: false,
  },
  {
    word: "chicas",
    eligible: false,
  },
  {
    word: "chiche",
    eligible: false,
  },
  {
    word: "chichi",
    eligible: false,
  },
  {
    word: "chicio",
    eligible: false,
  },
  {
    word: "chiclã",
    eligible: false,
  },
  {
    word: "chicle",
    eligible: false,
  },
  {
    word: "chicos",
    eligible: false,
  },
  {
    word: "chicua",
    eligible: false,
  },
  {
    word: "chidão",
    eligible: false,
  },
  {
    word: "chifom",
    eligible: false,
  },
  {
    word: "chifre",
    eligible: false,
  },
  {
    word: "chiita",
    eligible: false,
  },
  {
    word: "chilas",
    eligible: false,
  },
  {
    word: "chilbé",
    eligible: false,
  },
  {
    word: "chilca",
    eligible: false,
  },
  {
    word: "chimba",
    eligible: false,
  },
  {
    word: "chimbé",
    eligible: false,
  },
  {
    word: "chimiê",
    eligible: false,
  },
  {
    word: "chinar",
    eligible: false,
  },
  {
    word: "chinas",
    eligible: false,
  },
  {
    word: "chinês",
    eligible: false,
  },
  {
    word: "chingo",
    eligible: false,
  },
  {
    word: "chinha",
    eligible: false,
  },
  {
    word: "chinos",
    eligible: false,
  },
  {
    word: "chinra",
    eligible: false,
  },
  {
    word: "chinte",
    eligible: false,
  },
  {
    word: "chintz",
    eligible: false,
  },
  {
    word: "chioba",
    eligible: false,
  },
  {
    word: "chiola",
    eligible: false,
  },
  {
    word: "chiote",
    eligible: false,
  },
  {
    word: "Chipre",
    eligible: false,
  },
  {
    word: "chique",
    eligible: false,
  },
  {
    word: "chiquê",
    eligible: false,
  },
  {
    word: "chirca",
    eligible: false,
  },
  {
    word: "chisme",
    eligible: false,
  },
  {
    word: "chiste",
    eligible: false,
  },
  {
    word: "chitão",
    eligible: false,
  },
  {
    word: "chitas",
    eligible: false,
  },
  {
    word: "chitau",
    eligible: false,
  },
  {
    word: "chitim",
    eligible: false,
  },
  {
    word: "chitom",
    eligible: false,
  },
  {
    word: "chizia",
    eligible: false,
  },
  {
    word: "chobia",
    eligible: false,
  },
  {
    word: "chocão",
    eligible: false,
  },
  {
    word: "chocar",
    eligible: false,
  },
  {
    word: "chocas",
    eligible: false,
  },
  {
    word: "chochó",
    eligible: false,
  },
  {
    word: "chocos",
    eligible: false,
  },
  {
    word: "chócue",
    eligible: false,
  },
  {
    word: "chofar",
    eligible: false,
  },
  {
    word: "chofer",
    eligible: false,
  },
  {
    word: "chofre",
    eligible: false,
  },
  {
    word: "choira",
    eligible: false,
  },
  {
    word: "Choiti",
    eligible: false,
  },
  {
    word: "chonão",
    eligible: false,
  },
  {
    word: "chonar",
    eligible: false,
  },
  {
    word: "chonos",
    eligible: false,
  },
  {
    word: "chonta",
    eligible: false,
  },
  {
    word: "chopes",
    eligible: false,
  },
  {
    word: "chopim",
    eligible: false,
  },
  {
    word: "choque",
    eligible: false,
  },
  {
    word: "chorão",
    eligible: false,
  },
  {
    word: "chorar",
    eligible: false,
  },
  {
    word: "chorco",
    eligible: false,
  },
  {
    word: "chorfa",
    eligible: false,
  },
  {
    word: "chorlo",
    eligible: false,
  },
  {
    word: "chorne",
    eligible: false,
  },
  {
    word: "choros",
    eligible: false,
  },
  {
    word: "chorró",
    eligible: false,
  },
  {
    word: "chotão",
    eligible: false,
  },
  {
    word: "chotar",
    eligible: false,
  },
  {
    word: "chotos",
    eligible: false,
  },
  {
    word: "chouca",
    eligible: false,
  },
  {
    word: "choupo",
    eligible: false,
  },
  {
    word: "choura",
    eligible: false,
  },
  {
    word: "chouri",
    eligible: false,
  },
  {
    word: "chover",
    eligible: false,
  },
  {
    word: "chuabo",
    eligible: false,
  },
  {
    word: "chuala",
    eligible: false,
  },
  {
    word: "chucar",
    eligible: false,
  },
  {
    word: "chuçar",
    eligible: false,
  },
  {
    word: "chucha",
    eligible: false,
  },
  {
    word: "chuchu",
    eligible: false,
  },
  {
    word: "chuços",
    eligible: false,
  },
  {
    word: "chufar",
    eligible: false,
  },
  {
    word: "chulca",
    eligible: false,
  },
  {
    word: "chulpo",
    eligible: false,
  },
  {
    word: "chumbo",
    eligible: false,
  },
  {
    word: "chunga",
    eligible: false,
  },
  {
    word: "chupão",
    eligible: false,
  },
  {
    word: "chupar",
    eligible: false,
  },
  {
    word: "chupas",
    eligible: false,
  },
  {
    word: "chupim",
    eligible: false,
  },
  {
    word: "churma",
    eligible: false,
  },
  {
    word: "churro",
    eligible: false,
  },
  {
    word: "churta",
    eligible: false,
  },
  {
    word: "chutar",
    eligible: false,
  },
  {
    word: "Chutro",
    eligible: false,
  },
  {
    word: "chuvão",
    eligible: false,
  },
  {
    word: "chuvas",
    eligible: false,
  },
  {
    word: "chuvim",
    eligible: false,
  },
  {
    word: "chuzes",
    eligible: false,
  },
  {
    word: "ciadox",
    eligible: false,
  },
  {
    word: "ciâneo",
    eligible: false,
  },
  {
    word: "cianol",
    eligible: false,
  },
  {
    word: "ciátea",
    eligible: false,
  },
  {
    word: "ciátio",
    eligible: false,
  },
  {
    word: "cíbalo",
    eligible: false,
  },
  {
    word: "cibana",
    eligible: false,
  },
  {
    word: "cibato",
    eligible: false,
  },
  {
    word: "cibeia",
    eligible: false,
  },
  {
    word: "Cibele",
    eligible: false,
  },
  {
    word: "cibico",
    eligible: false,
  },
  {
    word: "cicada",
    eligible: false,
  },
  {
    word: "cicate",
    eligible: false,
  },
  {
    word: "Cícero",
    eligible: false,
  },
  {
    word: "cícero",
    eligible: false,
  },
  {
    word: "ciciar",
    eligible: false,
  },
  {
    word: "cicica",
    eligible: false,
  },
  {
    word: "cicoca",
    eligible: false,
  },
  {
    word: "cicuta",
    eligible: false,
  },
  {
    word: "cidadã",
    eligible: false,
  },
  {
    word: "Cidade",
    eligible: false,
  },
  {
    word: "cidade",
    eligible: false,
  },
  {
    word: "cidagã",
    eligible: false,
  },
  {
    word: "cidipe",
    eligible: false,
  },
  {
    word: "cidoro",
    eligible: false,
  },
  {
    word: "cidose",
    eligible: false,
  },
  {
    word: "cidral",
    eligible: false,
  },
  {
    word: "cidrão",
    eligible: false,
  },
  {
    word: "ciecié",
    eligible: false,
  },
  {
    word: "cieiro",
    eligible: false,
  },
  {
    word: "ciente",
    eligible: false,
  },
  {
    word: "cifato",
    eligible: false,
  },
  {
    word: "cifela",
    eligible: false,
  },
  {
    word: "cifose",
    eligible: false,
  },
  {
    word: "cifrão",
    eligible: false,
  },
  {
    word: "cifrar",
    eligible: false,
  },
  {
    word: "cigana",
    eligible: false,
  },
  {
    word: "cigano",
    eligible: false,
  },
  {
    word: "cigude",
    eligible: false,
  },
  {
    word: "cijula",
    eligible: false,
  },
  {
    word: "cilada",
    eligible: false,
  },
  {
    word: "cílaro",
    eligible: false,
  },
  {
    word: "Cilene",
    eligible: false,
  },
  {
    word: "cileno",
    eligible: false,
  },
  {
    word: "cilhão",
    eligible: false,
  },
  {
    word: "cilhar",
    eligible: false,
  },
  {
    word: "cilhas",
    eligible: false,
  },
  {
    word: "ciliar",
    eligible: false,
  },
  {
    word: "cílice",
    eligible: false,
  },
  {
    word: "cilito",
    eligible: false,
  },
  {
    word: "cilose",
    eligible: false,
  },
  {
    word: "cimado",
    eligible: false,
  },
  {
    word: "cimboa",
    eligible: false,
  },
  {
    word: "cimeno",
    eligible: false,
  },
  {
    word: "cimita",
    eligible: false,
  },
  {
    word: "cimoso",
    eligible: false,
  },
  {
    word: "Cinara",
    eligible: false,
  },
  {
    word: "cincão",
    eligible: false,
  },
  {
    word: "cincar",
    eligible: false,
  },
  {
    word: "Cincia",
    eligible: false,
  },
  {
    word: "cinclo",
    eligible: false,
  },
  {
    word: "cindir",
    eligible: false,
  },
  {
    word: "cinece",
    eligible: false,
  },
  {
    word: "cinedo",
    eligible: false,
  },
  {
    word: "cineia",
    eligible: false,
  },
  {
    word: "cinema",
    eligible: false,
  },
  {
    word: "cingel",
    eligible: false,
  },
  {
    word: "cingir",
    eligible: false,
  },
  {
    word: "cínico",
    eligible: false,
  },
  {
    word: "cínipe",
    eligible: false,
  },
  {
    word: "cinira",
    eligible: false,
  },
  {
    word: "cintar",
    eligible: false,
  },
  {
    word: "cintel",
    eligible: false,
  },
  {
    word: "Cíntia",
    eligible: false,
  },
  {
    word: "cintos",
    eligible: false,
  },
  {
    word: "Cintra",
    eligible: false,
  },
  {
    word: "cinzar",
    eligible: false,
  },
  {
    word: "cinzas",
    eligible: false,
  },
  {
    word: "cinzel",
    eligible: false,
  },
  {
    word: "cínzeo",
    eligible: false,
  },
  {
    word: "cioado",
    eligible: false,
  },
  {
    word: "ciobas",
    eligible: false,
  },
  {
    word: "ciocho",
    eligible: false,
  },
  {
    word: "cipaio",
    eligible: false,
  },
  {
    word: "cipela",
    eligible: false,
  },
  {
    word: "cipero",
    eligible: false,
  },
  {
    word: "Cipião",
    eligible: false,
  },
  {
    word: "cipoal",
    eligible: false,
  },
  {
    word: "cipoar",
    eligible: false,
  },
  {
    word: "cíprio",
    eligible: false,
  },
  {
    word: "Cirano",
    eligible: false,
  },
  {
    word: "cirata",
    eligible: false,
  },
  {
    word: "circeu",
    eligible: false,
  },
  {
    word: "círcio",
    eligible: false,
  },
  {
    word: "circum",
    eligible: false,
  },
  {
    word: "Cirene",
    eligible: false,
  },
  {
    word: "Cireno",
    eligible: false,
  },
  {
    word: "cirial",
    eligible: false,
  },
  {
    word: "Cirilo",
    eligible: false,
  },
  {
    word: "Cirino",
    eligible: false,
  },
  {
    word: "ciscar",
    eligible: false,
  },
  {
    word: "ciscos",
    eligible: false,
  },
  {
    word: "cismar",
    eligible: false,
  },
  {
    word: "cisnes",
    eligible: false,
  },
  {
    word: "cispar",
    eligible: false,
  },
  {
    word: "cissão",
    eligible: false,
  },
  {
    word: "cistre",
    eligible: false,
  },
  {
    word: "cistro",
    eligible: false,
  },
  {
    word: "cisura",
    eligible: false,
  },
  {
    word: "citado",
    eligible: false,
  },
  {
    word: "citalo",
    eligible: false,
  },
  {
    word: "cítara",
    eligible: false,
  },
  {
    word: "citase",
    eligible: false,
  },
  {
    word: "citero",
    eligible: false,
  },
  {
    word: "cítico",
    eligible: false,
  },
  {
    word: "citilo",
    eligible: false,
  },
  {
    word: "citima",
    eligible: false,
  },
  {
    word: "citina",
    eligible: false,
  },
  {
    word: "citode",
    eligible: false,
  },
  {
    word: "cítola",
    eligible: false,
  },
  {
    word: "citole",
    eligible: false,
  },
  {
    word: "citoma",
    eligible: false,
  },
  {
    word: "citose",
    eligible: false,
  },
  {
    word: "citote",
    eligible: false,
  },
  {
    word: "citral",
    eligible: false,
  },
  {
    word: "cítreo",
    eligible: false,
  },
  {
    word: "ciumar",
    eligible: false,
  },
  {
    word: "civeto",
    eligible: false,
  },
  {
    word: "cívico",
    eligible: false,
  },
  {
    word: "clache",
    eligible: false,
  },
  {
    word: "claclá",
    eligible: false,
  },
  {
    word: "cládio",
    eligible: false,
  },
  {
    word: "claimo",
    eligible: false,
  },
  {
    word: "Claire",
    eligible: false,
  },
  {
    word: "Claito",
    eligible: false,
  },
  {
    word: "clamar",
    eligible: false,
  },
  {
    word: "clâmis",
    eligible: false,
  },
  {
    word: "clamor",
    eligible: false,
  },
  {
    word: "clampe",
    eligible: false,
  },
  {
    word: "clandô",
    eligible: false,
  },
  {
    word: "claque",
    eligible: false,
  },
  {
    word: "clarão",
    eligible: false,
  },
  {
    word: "claras",
    eligible: false,
  },
  {
    word: "Clária",
    eligible: false,
  },
  {
    word: "claria",
    eligible: false,
  },
  {
    word: "clarim",
    eligible: false,
  },
  {
    word: "claror",
    eligible: false,
  },
  {
    word: "claros",
    eligible: false,
  },
  {
    word: "clasia",
    eligible: false,
  },
  {
    word: "clasma",
    eligible: false,
  },
  {
    word: "classe",
    eligible: false,
  },
  {
    word: "clasto",
    eligible: false,
  },
  {
    word: "clatro",
    eligible: false,
  },
  {
    word: "Claude",
    eligible: false,
  },
  {
    word: "clauso",
    eligible: false,
  },
  {
    word: "clavar",
    eligible: false,
  },
  {
    word: "Cleane",
    eligible: false,
  },
  {
    word: "Cléber",
    eligible: false,
  },
  {
    word: "Clécio",
    eligible: false,
  },
  {
    word: "Cledja",
    eligible: false,
  },
  {
    word: "clefta",
    eligible: false,
  },
  {
    word: "Cleide",
    eligible: false,
  },
  {
    word: "cleido",
    eligible: false,
  },
  {
    word: "Cleise",
    eligible: false,
  },
  {
    word: "clélia",
    eligible: false,
  },
  {
    word: "Clélio",
    eligible: false,
  },
  {
    word: "clêmis",
    eligible: false,
  },
  {
    word: "clênio",
    eligible: false,
  },
  {
    word: "cleome",
    eligible: false,
  },
  {
    word: "cleono",
    eligible: false,
  },
  {
    word: "Clésia",
    eligible: false,
  },
  {
    word: "Clésio",
    eligible: false,
  },
  {
    word: "cletra",
    eligible: false,
  },
  {
    word: "Cleuza",
    eligible: false,
  },
  {
    word: "clévea",
    eligible: false,
  },
  {
    word: "Cléver",
    eligible: false,
  },
  {
    word: "Clévia",
    eligible: false,
  },
  {
    word: "clicar",
    eligible: false,
  },
  {
    word: "cliché",
    eligible: false,
  },
  {
    word: "clichê",
    eligible: false,
  },
  {
    word: "Clície",
    eligible: false,
  },
  {
    word: "climão",
    eligible: false,
  },
  {
    word: "clímax",
    eligible: false,
  },
  {
    word: "Clínio",
    eligible: false,
  },
  {
    word: "cliona",
    eligible: false,
  },
  {
    word: "clipar",
    eligible: false,
  },
  {
    word: "clique",
    eligible: false,
  },
  {
    word: "clisar",
    eligible: false,
  },
  {
    word: "clisco",
    eligible: false,
  },
  {
    word: "clismo",
    eligible: false,
  },
  {
    word: "clitra",
    eligible: false,
  },
  {
    word: "clivar",
    eligible: false,
  },
  {
    word: "cloaca",
    eligible: false,
  },
  {
    word: "clocar",
    eligible: false,
  },
  {
    word: "Clódio",
    eligible: false,
  },
  {
    word: "clonal",
    eligible: false,
  },
  {
    word: "clonar",
    eligible: false,
  },
  {
    word: "Clopas",
    eligible: false,
  },
  {
    word: "cloque",
    eligible: false,
  },
  {
    word: "cloral",
    eligible: false,
  },
  {
    word: "clorar",
    eligible: false,
  },
  {
    word: "clório",
    eligible: false,
  },
  {
    word: "clóris",
    eligible: false,
  },
  {
    word: "Clóvis",
    eligible: false,
  },
  {
    word: "clundo",
    eligible: false,
  },
  {
    word: "clúnio",
    eligible: false,
  },
  {
    word: "clúpeo",
    eligible: false,
  },
  {
    word: "clúsia",
    eligible: false,
  },
  {
    word: "CLVIII",
    eligible: false,
  },
  {
    word: "CLXIII",
    eligible: false,
  },
  {
    word: "CLXVII",
    eligible: false,
  },
  {
    word: "CLXXII",
    eligible: false,
  },
  {
    word: "CLXXIV",
    eligible: false,
  },
  {
    word: "CLXXIX",
    eligible: false,
  },
  {
    word: "CLXXVI",
    eligible: false,
  },
  {
    word: "CLXXXI",
    eligible: false,
  },
  {
    word: "CLXXXV",
    eligible: false,
  },
  {
    word: "CMLIII",
    eligible: false,
  },
  {
    word: "CMLVII",
    eligible: false,
  },
  {
    word: "CMLXII",
    eligible: false,
  },
  {
    word: "CMLXIV",
    eligible: false,
  },
  {
    word: "CMLXIX",
    eligible: false,
  },
  {
    word: "CMLXVI",
    eligible: false,
  },
  {
    word: "CMLXXI",
    eligible: false,
  },
  {
    word: "CMLXXV",
    eligible: false,
  },
  {
    word: "CMLXXX",
    eligible: false,
  },
  {
    word: "CMVIII",
    eligible: false,
  },
  {
    word: "CMXCII",
    eligible: false,
  },
  {
    word: "CMXCIV",
    eligible: false,
  },
  {
    word: "CMXCIX",
    eligible: false,
  },
  {
    word: "CMXCVI",
    eligible: false,
  },
  {
    word: "CMXIII",
    eligible: false,
  },
  {
    word: "CMXLII",
    eligible: false,
  },
  {
    word: "CMXLIV",
    eligible: false,
  },
  {
    word: "CMXLIX",
    eligible: false,
  },
  {
    word: "CMXLVI",
    eligible: false,
  },
  {
    word: "CMXVII",
    eligible: false,
  },
  {
    word: "CMXXII",
    eligible: false,
  },
  {
    word: "CMXXIV",
    eligible: false,
  },
  {
    word: "CMXXIX",
    eligible: false,
  },
  {
    word: "CMXXVI",
    eligible: false,
  },
  {
    word: "CMXXXI",
    eligible: false,
  },
  {
    word: "CMXXXV",
    eligible: false,
  },
  {
    word: "coação",
    eligible: false,
  },
  {
    word: "coacto",
    eligible: false,
  },
  {
    word: "coagel",
    eligible: false,
  },
  {
    word: "coalha",
    eligible: false,
  },
  {
    word: "coalho",
    eligible: false,
  },
  {
    word: "coanhe",
    eligible: false,
  },
  {
    word: "coápia",
    eligible: false,
  },
  {
    word: "coaris",
    eligible: false,
  },
  {
    word: "coatás",
    eligible: false,
  },
  {
    word: "coator",
    eligible: false,
  },
  {
    word: "coatra",
    eligible: false,
  },
  {
    word: "coaxar",
    eligible: false,
  },
  {
    word: "cobaio",
    eligible: false,
  },
  {
    word: "cobalo",
    eligible: false,
  },
  {
    word: "cobela",
    eligible: false,
  },
  {
    word: "cobéua",
    eligible: false,
  },
  {
    word: "cobião",
    eligible: false,
  },
  {
    word: "cobiós",
    eligible: false,
  },
  {
    word: "cóbiri",
    eligible: false,
  },
  {
    word: "cobrão",
    eligible: false,
  },
  {
    word: "cobrar",
    eligible: false,
  },
  {
    word: "cobras",
    eligible: false,
  },
  {
    word: "cobres",
    eligible: false,
  },
  {
    word: "cobril",
    eligible: false,
  },
  {
    word: "cobrir",
    eligible: false,
  },
  {
    word: "cocada",
    eligible: false,
  },
  {
    word: "cocais",
    eligible: false,
  },
  {
    word: "cocção",
    eligible: false,
  },
  {
    word: "cóccix",
    eligible: false,
  },
  {
    word: "cócega",
    eligible: false,
  },
  {
    word: "cochar",
    eligible: false,
  },
  {
    word: "cochir",
    eligible: false,
  },
  {
    word: "cóclea",
    eligible: false,
  },
  {
    word: "cocolo",
    eligible: false,
  },
  {
    word: "cócora",
    eligible: false,
  },
  {
    word: "cocoré",
    eligible: false,
  },
  {
    word: "cocote",
    eligible: false,
  },
  {
    word: "cocozu",
    eligible: false,
  },
  {
    word: "coctas",
    eligible: false,
  },
  {
    word: "cóculo",
    eligible: false,
  },
  {
    word: "códago",
    eligible: false,
  },
  {
    word: "códano",
    eligible: false,
  },
  {
    word: "codeão",
    eligible: false,
  },
  {
    word: "codear",
    eligible: false,
  },
  {
    word: "côdeas",
    eligible: false,
  },
  {
    word: "códega",
    eligible: false,
  },
  {
    word: "codema",
    eligible: false,
  },
  {
    word: "codeta",
    eligible: false,
  },
  {
    word: "códice",
    eligible: false,
  },
  {
    word: "codieu",
    eligible: false,
  },
  {
    word: "código",
    eligible: false,
  },
  {
    word: "coelha",
    eligible: false,
  },
  {
    word: "coelho",
    eligible: false,
  },
  {
    word: "coelva",
    eligible: false,
  },
  {
    word: "coendu",
    eligible: false,
  },
  {
    word: "coenha",
    eligible: false,
  },
  {
    word: "coense",
    eligible: false,
  },
  {
    word: "coerão",
    eligible: false,
  },
  {
    word: "coerir",
    eligible: false,
  },
  {
    word: "coesão",
    eligible: false,
  },
  {
    word: "coesor",
    eligible: false,
  },
  {
    word: "coesso",
    eligible: false,
  },
  {
    word: "cofiar",
    eligible: false,
  },
  {
    word: "COFINS",
    eligible: false,
  },
  {
    word: "Cofins",
    eligible: false,
  },
  {
    word: "cofose",
    eligible: false,
  },
  {
    word: "cofres",
    eligible: false,
  },
  {
    word: "cogiar",
    eligible: false,
  },
  {
    word: "cogote",
    eligible: false,
  },
  {
    word: "coibir",
    eligible: false,
  },
  {
    word: "coição",
    eligible: false,
  },
  {
    word: "coices",
    eligible: false,
  },
  {
    word: "coicil",
    eligible: false,
  },
  {
    word: "coicoa",
    eligible: false,
  },
  {
    word: "coifar",
    eligible: false,
  },
  {
    word: "coifas",
    eligible: false,
  },
  {
    word: "coilão",
    eligible: false,
  },
  {
    word: "coimar",
    eligible: false,
  },
  {
    word: "coinar",
    eligible: false,
  },
  {
    word: "coinos",
    eligible: false,
  },
  {
    word: "coiote",
    eligible: false,
  },
  {
    word: "coiram",
    eligible: false,
  },
  {
    word: "coirão",
    eligible: false,
  },
  {
    word: "coiros",
    eligible: false,
  },
  {
    word: "coisar",
    eligible: false,
  },
  {
    word: "coisas",
    eligible: false,
  },
  {
    word: "coisos",
    eligible: false,
  },
  {
    word: "coitar",
    eligible: false,
  },
  {
    word: "coivão",
    eligible: false,
  },
  {
    word: "colabá",
    eligible: false,
  },
  {
    word: "colaço",
    eligible: false,
  },
  {
    word: "colato",
    eligible: false,
  },
  {
    word: "colcha",
    eligible: false,
  },
  {
    word: "colcoz",
    eligible: false,
  },
  {
    word: "coldre",
    eligible: false,
  },
  {
    word: "colear",
    eligible: false,
  },
  {
    word: "colega",
    eligible: false,
  },
  {
    word: "coleja",
    eligible: false,
  },
  {
    word: "colema",
    eligible: false,
  },
  {
    word: "Colene",
    eligible: false,
  },
  {
    word: "colepo",
    eligible: false,
  },
  {
    word: "cólera",
    eligible: false,
  },
  {
    word: "colete",
    eligible: false,
  },
  {
    word: "coleto",
    eligible: false,
  },
  {
    word: "coleva",
    eligible: false,
  },
  {
    word: "colexa",
    eligible: false,
  },
  {
    word: "colgar",
    eligible: false,
  },
  {
    word: "colhal",
    eligible: false,
  },
  {
    word: "colhão",
    eligible: false,
  },
  {
    word: "colher",
    eligible: false,
  },
  {
    word: "cólico",
    eligible: false,
  },
  {
    word: "colite",
    eligible: false,
  },
  {
    word: "Collor",
    eligible: false,
  },
  {
    word: "colmar",
    eligible: false,
  },
  {
    word: "colmos",
    eligible: false,
  },
  {
    word: "cololó",
    eligible: false,
  },
  {
    word: "coloma",
    eligible: false,
  },
  {
    word: "colomi",
    eligible: false,
  },
  {
    word: "colono",
    eligible: false,
  },
  {
    word: "coltar",
    eligible: false,
  },
  {
    word: "colugo",
    eligible: false,
  },
  {
    word: "cólulo",
    eligible: false,
  },
  {
    word: "columi",
    eligible: false,
  },
  {
    word: "coluna",
    eligible: false,
  },
  {
    word: "coluro",
    eligible: false,
  },
  {
    word: "comado",
    eligible: false,
  },
  {
    word: "comani",
    eligible: false,
  },
  {
    word: "comano",
    eligible: false,
  },
  {
    word: "cômaro",
    eligible: false,
  },
  {
    word: "comaru",
    eligible: false,
  },
  {
    word: "comazo",
    eligible: false,
  },
  {
    word: "combió",
    eligible: false,
  },
  {
    word: "combói",
    eligible: false,
  },
  {
    word: "combra",
    eligible: false,
  },
  {
    word: "combro",
    eligible: false,
  },
  {
    word: "combua",
    eligible: false,
  },
  {
    word: "começa",
    eligible: false,
  },
  {
    word: "cômedo",
    eligible: false,
  },
  {
    word: "cometa",
    eligible: false,
  },
  {
    word: "cômico",
    eligible: false,
  },
  {
    word: "comida",
    eligible: false,
  },
  {
    word: "comido",
    eligible: false,
  },
  {
    word: "comigo",
    eligible: false,
  },
  {
    word: "comité",
    eligible: false,
  },
  {
    word: "comitê",
    eligible: false,
  },
  {
    word: "cômodo",
    eligible: false,
  },
  {
    word: "cômoro",
    eligible: false,
  },
  {
    word: "comoso",
    eligible: false,
  },
  {
    word: "cômpar",
    eligible: false,
  },
  {
    word: "complô",
    eligible: false,
  },
  {
    word: "compor",
    eligible: false,
  },
  {
    word: "compra",
    eligible: false,
  },
  {
    word: "compto",
    eligible: false,
  },
  {
    word: "comuna",
    eligible: false,
  },
  {
    word: "comuno",
    eligible: false,
  },
  {
    word: "comuns",
    eligible: false,
  },
  {
    word: "conabi",
    eligible: false,
  },
  {
    word: "conaça",
    eligible: false,
  },
  {
    word: "conami",
    eligible: false,
  },
  {
    word: "conana",
    eligible: false,
  },
  {
    word: "conaro",
    eligible: false,
  },
  {
    word: "conato",
    eligible: false,
  },
  {
    word: "concão",
    eligible: false,
  },
  {
    word: "conçar",
    eligible: false,
  },
  {
    word: "concha",
    eligible: false,
  },
  {
    word: "concho",
    eligible: false,
  },
  {
    word: "concom",
    eligible: false,
  },
  {
    word: "condal",
    eligible: false,
  },
  {
    word: "condão",
    eligible: false,
  },
  {
    word: "condés",
    eligible: false,
  },
  {
    word: "condês",
    eligible: false,
  },
  {
    word: "condir",
    eligible: false,
  },
  {
    word: "condom",
    eligible: false,
  },
  {
    word: "condor",
    eligible: false,
  },
  {
    word: "condri",
    eligible: false,
  },
  {
    word: "condro",
    eligible: false,
  },
  {
    word: "cônego",
    eligible: false,
  },
  {
    word: "conexo",
    eligible: false,
  },
  {
    word: "confim",
    eligible: false,
  },
  {
    word: "côngio",
    eligible: false,
  },
  {
    word: "congos",
    eligible: false,
  },
  {
    word: "congro",
    eligible: false,
  },
  {
    word: "conguê",
    eligible: false,
  },
  {
    word: "congui",
    eligible: false,
  },
  {
    word: "Conias",
    eligible: false,
  },
  {
    word: "cônico",
    eligible: false,
  },
  {
    word: "cônida",
    eligible: false,
  },
  {
    word: "conina",
    eligible: false,
  },
  {
    word: "conita",
    eligible: false,
  },
  {
    word: "Conjur",
    eligible: false,
  },
  {
    word: "conope",
    eligible: false,
  },
  {
    word: "consta",
    eligible: false,
  },
  {
    word: "cônsul",
    eligible: false,
  },
  {
    word: "contar",
    eligible: false,
  },
  {
    word: "contas",
    eligible: false,
  },
  {
    word: "conter",
    eligible: false,
  },
  {
    word: "contia",
    eligible: false,
  },
  {
    word: "Contra",
    eligible: false,
  },
  {
    word: "contra",
    eligible: false,
  },
  {
    word: "contro",
    eligible: false,
  },
  {
    word: "conuro",
    eligible: false,
  },
  {
    word: "convés",
    eligible: false,
  },
  {
    word: "conviê",
    eligible: false,
  },
  {
    word: "convir",
    eligible: false,
  },
  {
    word: "coobar",
    eligible: false,
  },
  {
    word: "coombs",
    eligible: false,
  },
  {
    word: "coorte",
    eligible: false,
  },
  {
    word: "copado",
    eligible: false,
  },
  {
    word: "copaia",
    eligible: false,
  },
  {
    word: "copaié",
    eligible: false,
  },
  {
    word: "copais",
    eligible: false,
  },
  {
    word: "copano",
    eligible: false,
  },
  {
    word: "copete",
    eligible: false,
  },
  {
    word: "copião",
    eligible: false,
  },
  {
    word: "copiar",
    eligible: false,
  },
  {
    word: "copico",
    eligible: false,
  },
  {
    word: "copito",
    eligible: false,
  },
  {
    word: "copose",
    eligible: false,
  },
  {
    word: "copoxó",
    eligible: false,
  },
  {
    word: "coptas",
    eligible: false,
  },
  {
    word: "cóptis",
    eligible: false,
  },
  {
    word: "copuda",
    eligible: false,
  },
  {
    word: "copudo",
    eligible: false,
  },
  {
    word: "cópula",
    eligible: false,
  },
  {
    word: "córace",
    eligible: false,
  },
  {
    word: "corado",
    eligible: false,
  },
  {
    word: "corais",
    eligible: false,
  },
  {
    word: "coralo",
    eligible: false,
  },
  {
    word: "corano",
    eligible: false,
  },
  {
    word: "Corasã",
    eligible: false,
  },
  {
    word: "coraxo",
    eligible: false,
  },
  {
    word: "corbol",
    eligible: false,
  },
  {
    word: "corcar",
    eligible: false,
  },
  {
    word: "corcel",
    eligible: false,
  },
  {
    word: "corcho",
    eligible: false,
  },
  {
    word: "cordal",
    eligible: false,
  },
  {
    word: "cordão",
    eligible: false,
  },
  {
    word: "cordas",
    eligible: false,
  },
  {
    word: "córdax",
    eligible: false,
  },
  {
    word: "cordel",
    eligible: false,
  },
  {
    word: "córdia",
    eligible: false,
  },
  {
    word: "cordol",
    eligible: false,
  },
  {
    word: "cordon",
    eligible: false,
  },
  {
    word: "corear",
    eligible: false,
  },
  {
    word: "Coreaú",
    eligible: false,
  },
  {
    word: "corego",
    eligible: false,
  },
  {
    word: "coreia",
    eligible: false,
  },
  {
    word: "corema",
    eligible: false,
  },
  {
    word: "corera",
    eligible: false,
  },
  {
    word: "coreto",
    eligible: false,
  },
  {
    word: "coretu",
    eligible: false,
  },
  {
    word: "corgul",
    eligible: false,
  },
  {
    word: "corial",
    eligible: false,
  },
  {
    word: "Coribe",
    eligible: false,
  },
  {
    word: "corica",
    eligible: false,
  },
  {
    word: "córico",
    eligible: false,
  },
  {
    word: "córifa",
    eligible: false,
  },
  {
    word: "corigo",
    eligible: false,
  },
  {
    word: "córilo",
    eligible: false,
  },
  {
    word: "corimá",
    eligible: false,
  },
  {
    word: "corimã",
    eligible: false,
  },
  {
    word: "corina",
    eligible: false,
  },
  {
    word: "corine",
    eligible: false,
  },
  {
    word: "córion",
    eligible: false,
  },
  {
    word: "córise",
    eligible: false,
  },
  {
    word: "corixe",
    eligible: false,
  },
  {
    word: "corixo",
    eligible: false,
  },
  {
    word: "corixó",
    eligible: false,
  },
  {
    word: "corizo",
    eligible: false,
  },
  {
    word: "cornal",
    eligible: false,
  },
  {
    word: "cornar",
    eligible: false,
  },
  {
    word: "córnea",
    eligible: false,
  },
  {
    word: "córneo",
    eligible: false,
  },
  {
    word: "córner",
    eligible: false,
  },
  {
    word: "cornes",
    eligible: false,
  },
  {
    word: "cornil",
    eligible: false,
  },
  {
    word: "cornos",
    eligible: false,
  },
  {
    word: "coroar",
    eligible: false,
  },
  {
    word: "coroas",
    eligible: false,
  },
  {
    word: "coroás",
    eligible: false,
  },
  {
    word: "corobó",
    eligible: false,
  },
  {
    word: "coroca",
    eligible: false,
  },
  {
    word: "coroço",
    eligible: false,
  },
  {
    word: "coroia",
    eligible: false,
  },
  {
    word: "corola",
    eligible: false,
  },
  {
    word: "corona",
    eligible: false,
  },
  {
    word: "coropó",
    eligible: false,
  },
  {
    word: "cororo",
    eligible: false,
  },
  {
    word: "cororô",
    eligible: false,
  },
  {
    word: "corote",
    eligible: false,
  },
  {
    word: "corozo",
    eligible: false,
  },
  {
    word: "corpão",
    eligible: false,
  },
  {
    word: "corpié",
    eligible: false,
  },
  {
    word: "corpos",
    eligible: false,
  },
  {
    word: "corpus",
    eligible: false,
  },
  {
    word: "Corral",
    eligible: false,
  },
  {
    word: "corrão",
    eligible: false,
  },
  {
    word: "Correa",
    eligible: false,
  },
  {
    word: "Corrêa",
    eligible: false,
  },
  {
    word: "córrea",
    eligible: false,
  },
  {
    word: "correr",
    eligible: false,
  },
  {
    word: "corres",
    eligible: false,
  },
  {
    word: "corréu",
    eligible: false,
  },
  {
    word: "Corsan",
    eligible: false,
  },
  {
    word: "corsão",
    eligible: false,
  },
  {
    word: "córsia",
    eligible: false,
  },
  {
    word: "cortar",
    eligible: false,
  },
  {
    word: "cortês",
    eligible: false,
  },
  {
    word: "córtex",
    eligible: false,
  },
  {
    word: "Cortez",
    eligible: false,
  },
  {
    word: "cortil",
    eligible: false,
  },
  {
    word: "cortim",
    eligible: false,
  },
  {
    word: "coruba",
    eligible: false,
  },
  {
    word: "coruja",
    eligible: false,
  },
  {
    word: "coruna",
    eligible: false,
  },
  {
    word: "Corupá",
    eligible: false,
  },
  {
    word: "coruto",
    eligible: false,
  },
  {
    word: "corvéu",
    eligible: false,
  },
  {
    word: "corvos",
    eligible: false,
  },
  {
    word: "corxim",
    eligible: false,
  },
  {
    word: "cosano",
    eligible: false,
  },
  {
    word: "coscós",
    eligible: false,
  },
  {
    word: "Cósico",
    eligible: false,
  },
  {
    word: "cosido",
    eligible: false,
  },
  {
    word: "cosina",
    eligible: false,
  },
  {
    word: "cósmeo",
    eligible: false,
  },
  {
    word: "cosmes",
    eligible: false,
  },
  {
    word: "cósmia",
    eligible: false,
  },
  {
    word: "cospes",
    eligible: false,
  },
  {
    word: "cosque",
    eligible: false,
  },
  {
    word: "cóssio",
    eligible: false,
  },
  {
    word: "costal",
    eligible: false,
  },
  {
    word: "costão",
    eligible: false,
  },
  {
    word: "Costas",
    eligible: false,
  },
  {
    word: "costas",
    eligible: false,
  },
  {
    word: "cóstia",
    eligible: false,
  },
  {
    word: "costil",
    eligible: false,
  },
  {
    word: "costos",
    eligible: false,
  },
  {
    word: "cótara",
    eligible: false,
  },
  {
    word: "cotecá",
    eligible: false,
  },
  {
    word: "cotete",
    eligible: false,
  },
  {
    word: "coteto",
    eligible: false,
  },
  {
    word: "cotiar",
    eligible: false,
  },
  {
    word: "cotica",
    eligible: false,
  },
  {
    word: "cótida",
    eligible: false,
  },
  {
    word: "cótigo",
    eligible: false,
  },
  {
    word: "cótilo",
    eligible: false,
  },
  {
    word: "cotino",
    eligible: false,
  },
  {
    word: "cótios",
    eligible: false,
  },
  {
    word: "cotoco",
    eligible: false,
  },
  {
    word: "cotoxé",
    eligible: false,
  },
  {
    word: "cotoxó",
    eligible: false,
  },
  {
    word: "cotrão",
    eligible: false,
  },
  {
    word: "cotrim",
    eligible: false,
  },
  {
    word: "cotuba",
    eligible: false,
  },
  {
    word: "cótula",
    eligible: false,
  },
  {
    word: "coucão",
    eligible: false,
  },
  {
    word: "coução",
    eligible: false,
  },
  {
    word: "couçar",
    eligible: false,
  },
  {
    word: "couché",
    eligible: false,
  },
  {
    word: "coucho",
    eligible: false,
  },
  {
    word: "coucil",
    eligible: false,
  },
  {
    word: "coudel",
    eligible: false,
  },
  {
    word: "coudra",
    eligible: false,
  },
  {
    word: "courão",
    eligible: false,
  },
  {
    word: "courol",
    eligible: false,
  },
  {
    word: "couros",
    eligible: false,
  },
  {
    word: "cousas",
    eligible: false,
  },
  {
    word: "cousso",
    eligible: false,
  },
  {
    word: "coutar",
    eligible: false,
  },
  {
    word: "coutio",
    eligible: false,
  },
  {
    word: "coutos",
    eligible: false,
  },
  {
    word: "couval",
    eligible: false,
  },
  {
    word: "couvão",
    eligible: false,
  },
  {
    word: "couvar",
    eligible: false,
  },
  {
    word: "couves",
    eligible: false,
  },
  {
    word: "covado",
    eligible: false,
  },
  {
    word: "côvado",
    eligible: false,
  },
  {
    word: "covato",
    eligible: false,
  },
  {
    word: "covear",
    eligible: false,
  },
  {
    word: "covela",
    eligible: false,
  },
  {
    word: "coveta",
    eligible: false,
  },
  {
    word: "covite",
    eligible: false,
  },
  {
    word: "covito",
    eligible: false,
  },
  {
    word: "covoão",
    eligible: false,
  },
  {
    word: "covoca",
    eligible: false,
  },
  {
    word: "covocó",
    eligible: false,
  },
  {
    word: "coxear",
    eligible: false,
  },
  {
    word: "coxelo",
    eligible: false,
  },
  {
    word: "coxete",
    eligible: false,
  },
  {
    word: "coxipó",
    eligible: false,
  },
  {
    word: "coxite",
    eligible: false,
  },
  {
    word: "coxote",
    eligible: false,
  },
  {
    word: "Cozeba",
    eligible: false,
  },
  {
    word: "cozela",
    eligible: false,
  },
  {
    word: "cozida",
    eligible: false,
  },
  {
    word: "cozido",
    eligible: false,
  },
  {
    word: "crábeo",
    eligible: false,
  },
  {
    word: "crabro",
    eligible: false,
  },
  {
    word: "cracas",
    eligible: false,
  },
  {
    word: "crachá",
    eligible: false,
  },
  {
    word: "cracrá",
    eligible: false,
  },
  {
    word: "craião",
    eligible: false,
  },
  {
    word: "craiom",
    eligible: false,
  },
  {
    word: "crajuá",
    eligible: false,
  },
  {
    word: "crambe",
    eligible: false,
  },
  {
    word: "crambo",
    eligible: false,
  },
  {
    word: "crampa",
    eligible: false,
  },
  {
    word: "Cranau",
    eligible: false,
  },
  {
    word: "crânio",
    eligible: false,
  },
  {
    word: "crapté",
    eligible: false,
  },
  {
    word: "craque",
    eligible: false,
  },
  {
    word: "crasia",
    eligible: false,
  },
  {
    word: "crasso",
    eligible: false,
  },
  {
    word: "crasto",
    eligible: false,
  },
  {
    word: "cratão",
    eligible: false,
  },
  {
    word: "Crates",
    eligible: false,
  },
  {
    word: "cráton",
    eligible: false,
  },
  {
    word: "crauçá",
    eligible: false,
  },
  {
    word: "craúna",
    eligible: false,
  },
  {
    word: "crauro",
    eligible: false,
  },
  {
    word: "crautá",
    eligible: false,
  },
  {
    word: "craval",
    eligible: false,
  },
  {
    word: "cravar",
    eligible: false,
  },
  {
    word: "cravos",
    eligible: false,
  },
  {
    word: "creaca",
    eligible: false,
  },
  {
    word: "creato",
    eligible: false,
  },
  {
    word: "crebro",
    eligible: false,
  },
  {
    word: "creche",
    eligible: false,
  },
  {
    word: "credor",
    eligible: false,
  },
  {
    word: "credze",
    eligible: false,
  },
  {
    word: "creiom",
    eligible: false,
  },
  {
    word: "crejuá",
    eligible: false,
  },
  {
    word: "crelar",
    eligible: false,
  },
  {
    word: "CREMAL",
    eligible: false,
  },
  {
    word: "cremar",
    eligible: false,
  },
  {
    word: "CREMEB",
    eligible: false,
  },
  {
    word: "CREMEC",
    eligible: false,
  },
  {
    word: "cremes",
    eligible: false,
  },
  {
    word: "cremor",
    eligible: false,
  },
  {
    word: "crenar",
    eligible: false,
  },
  {
    word: "crença",
    eligible: false,
  },
  {
    word: "crênea",
    eligible: false,
  },
  {
    word: "crenjê",
    eligible: false,
  },
  {
    word: "crente",
    eligible: false,
  },
  {
    word: "crepes",
    eligible: false,
  },
  {
    word: "crepim",
    eligible: false,
  },
  {
    word: "crepom",
    eligible: false,
  },
  {
    word: "cresil",
    eligible: false,
  },
  {
    word: "cresol",
    eligible: false,
  },
  {
    word: "crespa",
    eligible: false,
  },
  {
    word: "crespo",
    eligible: false,
  },
  {
    word: "cressa",
    eligible: false,
  },
  {
    word: "cretão",
    eligible: false,
  },
  {
    word: "Creteu",
    eligible: false,
  },
  {
    word: "Creusa",
    eligible: false,
  },
  {
    word: "crevim",
    eligible: false,
  },
  {
    word: "criado",
    eligible: false,
  },
  {
    word: "cricas",
    eligible: false,
  },
  {
    word: "cricri",
    eligible: false,
  },
  {
    word: "crifia",
    eligible: false,
  },
  {
    word: "crífio",
    eligible: false,
  },
  {
    word: "crijoá",
    eligible: false,
  },
  {
    word: "crimes",
    eligible: false,
  },
  {
    word: "crinal",
    eligible: false,
  },
  {
    word: "crinas",
    eligible: false,
  },
  {
    word: "crines",
    eligible: false,
  },
  {
    word: "Crinis",
    eligible: false,
  },
  {
    word: "crínum",
    eligible: false,
  },
  {
    word: "criose",
    eligible: false,
  },
  {
    word: "cripto",
    eligible: false,
  },
  {
    word: "crisar",
    eligible: false,
  },
  {
    word: "críseo",
    eligible: false,
  },
  {
    word: "crísia",
    eligible: false,
  },
  {
    word: "crísis",
    eligible: false,
  },
  {
    word: "crisol",
    eligible: false,
  },
  {
    word: "crisso",
    eligible: false,
  },
  {
    word: "Cristã",
    eligible: false,
  },
  {
    word: "crista",
    eligible: false,
  },
  {
    word: "cristã",
    eligible: false,
  },
  {
    word: "crísti",
    eligible: false,
  },
  {
    word: "cristo",
    eligible: false,
  },
  {
    word: "critmo",
    eligible: false,
  },
  {
    word: "criuri",
    eligible: false,
  },
  {
    word: "crivar",
    eligible: false,
  },
  {
    word: "crível",
    eligible: false,
  },
  {
    word: "crivos",
    eligible: false,
  },
  {
    word: "Crixás",
    eligible: false,
  },
  {
    word: "Croatá",
    eligible: false,
  },
  {
    word: "croata",
    eligible: false,
  },
  {
    word: "croatá",
    eligible: false,
  },
  {
    word: "crocal",
    eligible: false,
  },
  {
    word: "cróceo",
    eligible: false,
  },
  {
    word: "croché",
    eligible: false,
  },
  {
    word: "crochê",
    eligible: false,
  },
  {
    word: "crócus",
    eligible: false,
  },
  {
    word: "cromar",
    eligible: false,
  },
  {
    word: "cromel",
    eligible: false,
  },
  {
    word: "cromia",
    eligible: false,
  },
  {
    word: "crómio",
    eligible: false,
  },
  {
    word: "crômio",
    eligible: false,
  },
  {
    word: "cromos",
    eligible: false,
  },
  {
    word: "cronha",
    eligible: false,
  },
  {
    word: "croque",
    eligible: false,
  },
  {
    word: "croqué",
    eligible: false,
  },
  {
    word: "croqui",
    eligible: false,
  },
  {
    word: "crosca",
    eligible: false,
  },
  {
    word: "crossa",
    eligible: false,
  },
  {
    word: "crosta",
    eligible: false,
  },
  {
    word: "crosto",
    eligible: false,
  },
  {
    word: "crotão",
    eligible: false,
  },
  {
    word: "cróton",
    eligible: false,
  },
  {
    word: "cruapé",
    eligible: false,
  },
  {
    word: "crucho",
    eligible: false,
  },
  {
    word: "crúcis",
    eligible: false,
  },
  {
    word: "crudez",
    eligible: false,
  },
  {
    word: "crúdia",
    eligible: false,
  },
  {
    word: "cruéis",
    eligible: false,
  },
  {
    word: "cruera",
    eligible: false,
  },
  {
    word: "crueza",
    eligible: false,
  },
  {
    word: "cruili",
    eligible: false,
  },
  {
    word: "crúmen",
    eligible: false,
  },
  {
    word: "crunha",
    eligible: false,
  },
  {
    word: "crupal",
    eligible: false,
  },
  {
    word: "crupes",
    eligible: false,
  },
  {
    word: "crupiê",
    eligible: false,
  },
  {
    word: "crural",
    eligible: false,
  },
  {
    word: "cruris",
    eligible: false,
  },
  {
    word: "Crusoé",
    eligible: false,
  },
  {
    word: "crusta",
    eligible: false,
  },
  {
    word: "cruzar",
    eligible: false,
  },
  {
    word: "crúzea",
    eligible: false,
  },
  {
    word: "cruzes",
    eligible: false,
  },
  {
    word: "crúzio",
    eligible: false,
  },
  {
    word: "ctênio",
    eligible: false,
  },
  {
    word: "ctônio",
    eligible: false,
  },
  {
    word: "cuacos",
    eligible: false,
  },
  {
    word: "cuácua",
    eligible: false,
  },
  {
    word: "cualvo",
    eligible: false,
  },
  {
    word: "cuambi",
    eligible: false,
  },
  {
    word: "cuambo",
    eligible: false,
  },
  {
    word: "cuambu",
    eligible: false,
  },
  {
    word: "cuanda",
    eligible: false,
  },
  {
    word: "cuandu",
    eligible: false,
  },
  {
    word: "cuanga",
    eligible: false,
  },
  {
    word: "cuanza",
    eligible: false,
  },
  {
    word: "cuapra",
    eligible: false,
  },
  {
    word: "cuaris",
    eligible: false,
  },
  {
    word: "cuaros",
    eligible: false,
  },
  {
    word: "cuatás",
    eligible: false,
  },
  {
    word: "cubale",
    eligible: false,
  },
  {
    word: "cubalo",
    eligible: false,
  },
  {
    word: "cubano",
    eligible: false,
  },
  {
    word: "cubata",
    eligible: false,
  },
  {
    word: "Cubati",
    eligible: false,
  },
  {
    word: "cubeba",
    eligible: false,
  },
  {
    word: "cubelo",
    eligible: false,
  },
  {
    word: "cubéns",
    eligible: false,
  },
  {
    word: "cubeto",
    eligible: false,
  },
  {
    word: "cúbico",
    eligible: false,
  },
  {
    word: "cubilô",
    eligible: false,
  },
  {
    word: "cúbito",
    eligible: false,
  },
  {
    word: "cuçari",
    eligible: false,
  },
  {
    word: "cuchal",
    eligible: false,
  },
  {
    word: "cuchês",
    eligible: false,
  },
  {
    word: "cucuia",
    eligible: false,
  },
  {
    word: "cucujo",
    eligible: false,
  },
  {
    word: "cucume",
    eligible: false,
  },
  {
    word: "cucura",
    eligible: false,
  },
  {
    word: "cucuri",
    eligible: false,
  },
  {
    word: "cucuru",
    eligible: false,
  },
  {
    word: "cucuta",
    eligible: false,
  },
  {
    word: "cucuzo",
    eligible: false,
  },
  {
    word: "cudano",
    eligible: false,
  },
  {
    word: "cuecas",
    eligible: false,
  },
  {
    word: "cueiro",
    eligible: false,
  },
  {
    word: "cuelva",
    eligible: false,
  },
  {
    word: "Cuemba",
    eligible: false,
  },
  {
    word: "cuenca",
    eligible: false,
  },
  {
    word: "cuenhe",
    eligible: false,
  },
  {
    word: "cuenje",
    eligible: false,
  },
  {
    word: "cufaia",
    eligible: false,
  },
  {
    word: "cufala",
    eligible: false,
  },
  {
    word: "cufeia",
    eligible: false,
  },
  {
    word: "cúfico",
    eligible: false,
  },
  {
    word: "cugiar",
    eligible: false,
  },
  {
    word: "cuguar",
    eligible: false,
  },
  {
    word: "Cuiabá",
    eligible: false,
  },
  {
    word: "cuiabá",
    eligible: false,
  },
  {
    word: "cuiaca",
    eligible: false,
  },
  {
    word: "cuiada",
    eligible: false,
  },
  {
    word: "cuiame",
    eligible: false,
  },
  {
    word: "cuiana",
    eligible: false,
  },
  {
    word: "cuiara",
    eligible: false,
  },
  {
    word: "cuícas",
    eligible: false,
  },
  {
    word: "cuidar",
    eligible: false,
  },
  {
    word: "cuieté",
    eligible: false,
  },
  {
    word: "cuietê",
    eligible: false,
  },
  {
    word: "cuilar",
    eligible: false,
  },
  {
    word: "cuíque",
    eligible: false,
  },
  {
    word: "cuíssi",
    eligible: false,
  },
  {
    word: "cuités",
    eligible: false,
  },
  {
    word: "cuiuba",
    eligible: false,
  },
  {
    word: "cuiura",
    eligible: false,
  },
  {
    word: "cujara",
    eligible: false,
  },
  {
    word: "cujelo",
    eligible: false,
  },
  {
    word: "cujeté",
    eligible: false,
  },
  {
    word: "cujiar",
    eligible: false,
  },
  {
    word: "cujuba",
    eligible: false,
  },
  {
    word: "cujubi",
    eligible: false,
  },
  {
    word: "cujudo",
    eligible: false,
  },
  {
    word: "culaça",
    eligible: false,
  },
  {
    word: "culaga",
    eligible: false,
  },
  {
    word: "culape",
    eligible: false,
  },
  {
    word: "culcar",
    eligible: false,
  },
  {
    word: "culdeu",
    eligible: false,
  },
  {
    word: "culepe",
    eligible: false,
  },
  {
    word: "culhão",
    eligible: false,
  },
  {
    word: "cúlice",
    eligible: false,
  },
  {
    word: "culimã",
    eligible: false,
  },
  {
    word: "culino",
    eligible: false,
  },
  {
    word: "culita",
    eligible: false,
  },
  {
    word: "cullen",
    eligible: false,
  },
  {
    word: "cúlmen",
    eligible: false,
  },
  {
    word: "culori",
    eligible: false,
  },
  {
    word: "culote",
    eligible: false,
  },
  {
    word: "culpar",
    eligible: false,
  },
  {
    word: "culpas",
    eligible: false,
  },
  {
    word: "cultor",
    eligible: false,
  },
  {
    word: "cultos",
    eligible: false,
  },
  {
    word: "cultro",
    eligible: false,
  },
  {
    word: "culumi",
    eligible: false,
  },
  {
    word: "cumacá",
    eligible: false,
  },
  {
    word: "cumaco",
    eligible: false,
  },
  {
    word: "cumala",
    eligible: false,
  },
  {
    word: "cumaná",
    eligible: false,
  },
  {
    word: "cumanã",
    eligible: false,
  },
  {
    word: "cumani",
    eligible: false,
  },
  {
    word: "cumano",
    eligible: false,
  },
  {
    word: "cumara",
    eligible: false,
  },
  {
    word: "cumaré",
    eligible: false,
  },
  {
    word: "cumari",
    eligible: false,
  },
  {
    word: "Cumaru",
    eligible: false,
  },
  {
    word: "cumaru",
    eligible: false,
  },
  {
    word: "cumaté",
    eligible: false,
  },
  {
    word: "cumati",
    eligible: false,
  },
  {
    word: "cumbar",
    eligible: false,
  },
  {
    word: "cúmbia",
    eligible: false,
  },
  {
    word: "cumbio",
    eligible: false,
  },
  {
    word: "cumela",
    eligible: false,
  },
  {
    word: "cumeno",
    eligible: false,
  },
  {
    word: "cúmera",
    eligible: false,
  },
  {
    word: "cúmida",
    eligible: false,
  },
  {
    word: "cumilo",
    eligible: false,
  },
  {
    word: "cumino",
    eligible: false,
  },
  {
    word: "cumixá",
    eligible: false,
  },
  {
    word: "cúmulo",
    eligible: false,
  },
  {
    word: "cumurá",
    eligible: false,
  },
  {
    word: "cunabi",
    eligible: false,
  },
  {
    word: "cunama",
    eligible: false,
  },
  {
    word: "cunanã",
    eligible: false,
  },
  {
    word: "cunapu",
    eligible: false,
  },
  {
    word: "cundim",
    eligible: false,
  },
  {
    word: "cuneal",
    eligible: false,
  },
  {
    word: "Cunene",
    eligible: false,
  },
  {
    word: "cunete",
    eligible: false,
  },
  {
    word: "cungue",
    eligible: false,
  },
  {
    word: "cunhal",
    eligible: false,
  },
  {
    word: "cunhar",
    eligible: false,
  },
  {
    word: "cunhas",
    eligible: false,
  },
  {
    word: "cunhos",
    eligible: false,
  },
  {
    word: "cunibo",
    eligible: false,
  },
  {
    word: "cunico",
    eligible: false,
  },
  {
    word: "cunife",
    eligible: false,
  },
  {
    word: "cunila",
    eligible: false,
  },
  {
    word: "cunina",
    eligible: false,
  },
  {
    word: "cunona",
    eligible: false,
  },
  {
    word: "cunque",
    eligible: false,
  },
  {
    word: "cununo",
    eligible: false,
  },
  {
    word: "cunuri",
    eligible: false,
  },
  {
    word: "cuozar",
    eligible: false,
  },
  {
    word: "cupana",
    eligible: false,
  },
  {
    word: "cupela",
    eligible: false,
  },
  {
    word: "Cupelo",
    eligible: false,
  },
  {
    word: "cupido",
    eligible: false,
  },
  {
    word: "cúpido",
    eligible: false,
  },
  {
    word: "Cupira",
    eligible: false,
  },
  {
    word: "cuprém",
    eligible: false,
  },
  {
    word: "cúpreo",
    eligible: false,
  },
  {
    word: "cuprol",
    eligible: false,
  },
  {
    word: "cupuaí",
    eligible: false,
  },
  {
    word: "cupuaú",
    eligible: false,
  },
  {
    word: "cupuim",
    eligible: false,
  },
  {
    word: "cúpula",
    eligible: false,
  },
  {
    word: "cuquil",
    eligible: false,
  },
  {
    word: "curaba",
    eligible: false,
  },
  {
    word: "curabi",
    eligible: false,
  },
  {
    word: "Curaçá",
    eligible: false,
  },
  {
    word: "curaca",
    eligible: false,
  },
  {
    word: "curaci",
    eligible: false,
  },
  {
    word: "curada",
    eligible: false,
  },
  {
    word: "curadá",
    eligible: false,
  },
  {
    word: "curado",
    eligible: false,
  },
  {
    word: "curame",
    eligible: false,
  },
  {
    word: "curapá",
    eligible: false,
  },
  {
    word: "curapé",
    eligible: false,
  },
  {
    word: "curare",
    eligible: false,
  },
  {
    word: "curatá",
    eligible: false,
  },
  {
    word: "curato",
    eligible: false,
  },
  {
    word: "curauá",
    eligible: false,
  },
  {
    word: "Cúrcio",
    eligible: false,
  },
  {
    word: "curema",
    eligible: false,
  },
  {
    word: "curera",
    eligible: false,
  },
  {
    word: "cureré",
    eligible: false,
  },
  {
    word: "curetu",
    eligible: false,
  },
  {
    word: "curial",
    eligible: false,
  },
  {
    word: "curião",
    eligible: false,
  },
  {
    word: "curiar",
    eligible: false,
  },
  {
    word: "curica",
    eligible: false,
  },
  {
    word: "curilo",
    eligible: false,
  },
  {
    word: "curimá",
    eligible: false,
  },
  {
    word: "curimã",
    eligible: false,
  },
  {
    word: "curina",
    eligible: false,
  },
  {
    word: "curiós",
    eligible: false,
  },
  {
    word: "curita",
    eligible: false,
  },
  {
    word: "curixá",
    eligible: false,
  },
  {
    word: "curixo",
    eligible: false,
  },
  {
    word: "curote",
    eligible: false,
  },
  {
    word: "curral",
    eligible: false,
  },
  {
    word: "currar",
    eligible: false,
  },
  {
    word: "cúrrio",
    eligible: false,
  },
  {
    word: "curros",
    eligible: false,
  },
  {
    word: "cursar",
    eligible: false,
  },
  {
    word: "cúrsio",
    eligible: false,
  },
  {
    word: "cursor",
    eligible: false,
  },
  {
    word: "curtas",
    eligible: false,
  },
  {
    word: "cúrtia",
    eligible: false,
  },
  {
    word: "curtim",
    eligible: false,
  },
  {
    word: "curtir",
    eligible: false,
  },
  {
    word: "curtos",
    eligible: false,
  },
  {
    word: "curuaé",
    eligible: false,
  },
  {
    word: "curuaí",
    eligible: false,
  },
  {
    word: "curuás",
    eligible: false,
  },
  {
    word: "curuba",
    eligible: false,
  },
  {
    word: "curubá",
    eligible: false,
  },
  {
    word: "curubé",
    eligible: false,
  },
  {
    word: "Curuçá",
    eligible: false,
  },
  {
    word: "curuca",
    eligible: false,
  },
  {
    word: "curucu",
    eligible: false,
  },
  {
    word: "curugu",
    eligible: false,
  },
  {
    word: "curujo",
    eligible: false,
  },
  {
    word: "curule",
    eligible: false,
  },
  {
    word: "curumá",
    eligible: false,
  },
  {
    word: "curumã",
    eligible: false,
  },
  {
    word: "curumi",
    eligible: false,
  },
  {
    word: "curupá",
    eligible: false,
  },
  {
    word: "curupé",
    eligible: false,
  },
  {
    word: "curupu",
    eligible: false,
  },
  {
    word: "curura",
    eligible: false,
  },
  {
    word: "cururá",
    eligible: false,
  },
  {
    word: "cururi",
    eligible: false,
  },
  {
    word: "cururu",
    eligible: false,
  },
  {
    word: "curutá",
    eligible: false,
  },
  {
    word: "curutu",
    eligible: false,
  },
  {
    word: "curuzu",
    eligible: false,
  },
  {
    word: "curval",
    eligible: false,
  },
  {
    word: "curvar",
    eligible: false,
  },
  {
    word: "curvas",
    eligible: false,
  },
  {
    word: "curvéu",
    eligible: false,
  },
  {
    word: "curvos",
    eligible: false,
  },
  {
    word: "cuscuz",
    eligible: false,
  },
  {
    word: "cusino",
    eligible: false,
  },
  {
    word: "cusita",
    eligible: false,
  },
  {
    word: "cuspes",
    eligible: false,
  },
  {
    word: "cuspir",
    eligible: false,
  },
  {
    word: "cuspos",
    eligible: false,
  },
  {
    word: "custar",
    eligible: false,
  },
  {
    word: "custos",
    eligible: false,
  },
  {
    word: "cutaxó",
    eligible: false,
  },
  {
    word: "cutelo",
    eligible: false,
  },
  {
    word: "cutias",
    eligible: false,
  },
  {
    word: "cutina",
    eligible: false,
  },
  {
    word: "cutite",
    eligible: false,
  },
  {
    word: "cutiti",
    eligible: false,
  },
  {
    word: "cutiús",
    eligible: false,
  },
  {
    word: "cutose",
    eligible: false,
  },
  {
    word: "cutuba",
    eligible: false,
  },
  {
    word: "cutuiá",
    eligible: false,
  },
  {
    word: "cutulá",
    eligible: false,
  },
  {
    word: "cuvatã",
    eligible: false,
  },
  {
    word: "cuvete",
    eligible: false,
  },
  {
    word: "cuvico",
    eligible: false,
  },
  {
    word: "cuvier",
    eligible: false,
  },
  {
    word: "cuxará",
    eligible: false,
  },
  {
    word: "cuxeri",
    eligible: false,
  },
  {
    word: "cuxibe",
    eligible: false,
  },
  {
    word: "cuxibi",
    eligible: false,
  },
  {
    word: "cuxita",
    eligible: false,
  },
  {
    word: "cuxiús",
    eligible: false,
  },
  {
    word: "cuzada",
    eligible: false,
  },
  {
    word: "CXCIII",
    eligible: false,
  },
  {
    word: "CXCVII",
    eligible: false,
  },
  {
    word: "CXLIII",
    eligible: false,
  },
  {
    word: "CXLVII",
    eligible: false,
  },
  {
    word: "CXVIII",
    eligible: false,
  },
  {
    word: "CXXIII",
    eligible: false,
  },
  {
    word: "CXXVII",
    eligible: false,
  },
  {
    word: "CXXXII",
    eligible: false,
  },
  {
    word: "CXXXIV",
    eligible: false,
  },
  {
    word: "CXXXIX",
    eligible: false,
  },
  {
    word: "CXXXVI",
    eligible: false,
  },
  {
    word: "D'Água",
    eligible: false,
  },
  {
    word: "d'agua",
    eligible: false,
  },
  {
    word: "d'Água",
    eligible: false,
  },
  {
    word: "d'água",
    eligible: false,
  },
  {
    word: "d'além",
    eligible: false,
  },
  {
    word: "D'Alho",
    eligible: false,
  },
  {
    word: "d'Alho",
    eligible: false,
  },
  {
    word: "d'alho",
    eligible: false,
  },
  {
    word: "d'Alma",
    eligible: false,
  },
  {
    word: "d'alma",
    eligible: false,
  },
  {
    word: "d'alva",
    eligible: false,
  },
  {
    word: "d'anca",
    eligible: false,
  },
  {
    word: "d'anjo",
    eligible: false,
  },
  {
    word: "d'Anta",
    eligible: false,
  },
  {
    word: "d'anta",
    eligible: false,
  },
  {
    word: "D'Arco",
    eligible: false,
  },
  {
    word: "d'Arco",
    eligible: false,
  },
  {
    word: "d'arco",
    eligible: false,
  },
  {
    word: "D'Arte",
    eligible: false,
  },
  {
    word: "d'Arte",
    eligible: false,
  },
  {
    word: "d'arte",
    eligible: false,
  },
  {
    word: "d'égua",
    eligible: false,
  },
  {
    word: "d'olho",
    eligible: false,
  },
  {
    word: "d'Ouro",
    eligible: false,
  },
  {
    word: "d'ouro",
    eligible: false,
  },
  {
    word: "d'ovos",
    eligible: false,
  },
  {
    word: "dabada",
    eligible: false,
  },
  {
    word: "dabelo",
    eligible: false,
  },
  {
    word: "dabema",
    eligible: false,
  },
  {
    word: "dáblio",
    eligible: false,
  },
  {
    word: "dabliú",
    eligible: false,
  },
  {
    word: "dábliu",
    eligible: false,
  },
  {
    word: "daboia",
    eligible: false,
  },
  {
    word: "dabula",
    eligible: false,
  },
  {
    word: "dabuto",
    eligible: false,
  },
  {
    word: "dacelo",
    eligible: false,
  },
  {
    word: "dachém",
    eligible: false,
  },
  {
    word: "dácico",
    eligible: false,
  },
  {
    word: "dacilo",
    eligible: false,
  },
  {
    word: "dacite",
    eligible: false,
  },
  {
    word: "dacito",
    eligible: false,
  },
  {
    word: "dacolá",
    eligible: false,
  },
  {
    word: "dacoma",
    eligible: false,
  },
  {
    word: "dacota",
    eligible: false,
  },
  {
    word: "dácrio",
    eligible: false,
  },
  {
    word: "dácron",
    eligible: false,
  },
  {
    word: "dadane",
    eligible: false,
  },
  {
    word: "dádiva",
    eligible: false,
  },
  {
    word: "dáfnia",
    eligible: false,
  },
  {
    word: "Dagmar",
    eligible: false,
  },
  {
    word: "Daiana",
    eligible: false,
  },
  {
    word: "Daiane",
    eligible: false,
  },
  {
    word: "daimes",
    eligible: false,
  },
  {
    word: "dáimio",
    eligible: false,
  },
  {
    word: "dalasi",
    eligible: false,
  },
  {
    word: "dalgum",
    eligible: false,
  },
  {
    word: "Dalila",
    eligible: false,
  },
  {
    word: "dalina",
    eligible: false,
  },
  {
    word: "Dalita",
    eligible: false,
  },
  {
    word: "Dallas",
    eligible: false,
  },
  {
    word: "Dalmir",
    eligible: false,
  },
  {
    word: "Dálton",
    eligible: false,
  },
  {
    word: "Dámaso",
    eligible: false,
  },
  {
    word: "Damião",
    eligible: false,
  },
  {
    word: "damião",
    eligible: false,
  },
  {
    word: "damice",
    eligible: false,
  },
  {
    word: "dânaca",
    eligible: false,
  },
  {
    word: "danada",
    eligible: false,
  },
  {
    word: "dançar",
    eligible: false,
  },
  {
    word: "dandão",
    eligible: false,
  },
  {
    word: "danejo",
    eligible: false,
  },
  {
    word: "Daniel",
    eligible: false,
  },
  {
    word: "Danilo",
    eligible: false,
  },
  {
    word: "danoso",
    eligible: false,
  },
  {
    word: "Danton",
    eligible: false,
  },
  {
    word: "Danúsa",
    eligible: false,
  },
  {
    word: "Danuta",
    eligible: false,
  },
  {
    word: "daquém",
    eligible: false,
  },
  {
    word: "Dárcio",
    eligible: false,
  },
  {
    word: "Darcom",
    eligible: false,
  },
  {
    word: "dardar",
    eligible: false,
  },
  {
    word: "dardos",
    eligible: false,
  },
  {
    word: "daroês",
    eligible: false,
  },
  {
    word: "dartro",
    eligible: false,
  },
  {
    word: "Darvin",
    eligible: false,
  },
  {
    word: "Darwin",
    eligible: false,
  },
  {
    word: "datado",
    eligible: false,
  },
  {
    word: "dátilo",
    eligible: false,
  },
  {
    word: "dativo",
    eligible: false,
  },
  {
    word: "datura",
    eligible: false,
  },
  {
    word: "Dávila",
    eligible: false,
  },
  {
    word: "Davino",
    eligible: false,
  },
  {
    word: "DCCCII",
    eligible: false,
  },
  {
    word: "DCCCIV",
    eligible: false,
  },
  {
    word: "DCCCIX",
    eligible: false,
  },
  {
    word: "DCCCLI",
    eligible: false,
  },
  {
    word: "DCCCLV",
    eligible: false,
  },
  {
    word: "DCCCLX",
    eligible: false,
  },
  {
    word: "DCCCVI",
    eligible: false,
  },
  {
    word: "DCCCXC",
    eligible: false,
  },
  {
    word: "DCCCXI",
    eligible: false,
  },
  {
    word: "DCCCXL",
    eligible: false,
  },
  {
    word: "DCCCXV",
    eligible: false,
  },
  {
    word: "DCCCXX",
    eligible: false,
  },
  {
    word: "DCCIII",
    eligible: false,
  },
  {
    word: "DCCLII",
    eligible: false,
  },
  {
    word: "DCCLIV",
    eligible: false,
  },
  {
    word: "DCCLIX",
    eligible: false,
  },
  {
    word: "DCCLVI",
    eligible: false,
  },
  {
    word: "DCCLXI",
    eligible: false,
  },
  {
    word: "DCCLXV",
    eligible: false,
  },
  {
    word: "DCCLXX",
    eligible: false,
  },
  {
    word: "DCCVII",
    eligible: false,
  },
  {
    word: "DCCXCI",
    eligible: false,
  },
  {
    word: "DCCXCV",
    eligible: false,
  },
  {
    word: "DCCXII",
    eligible: false,
  },
  {
    word: "DCCXIV",
    eligible: false,
  },
  {
    word: "DCCXIX",
    eligible: false,
  },
  {
    word: "DCCXLI",
    eligible: false,
  },
  {
    word: "DCCXLV",
    eligible: false,
  },
  {
    word: "DCCXVI",
    eligible: false,
  },
  {
    word: "DCCXXI",
    eligible: false,
  },
  {
    word: "DCCXXV",
    eligible: false,
  },
  {
    word: "DCCXXX",
    eligible: false,
  },
  {
    word: "DCLIII",
    eligible: false,
  },
  {
    word: "DCLVII",
    eligible: false,
  },
  {
    word: "DCLXII",
    eligible: false,
  },
  {
    word: "DCLXIV",
    eligible: false,
  },
  {
    word: "DCLXIX",
    eligible: false,
  },
  {
    word: "DCLXVI",
    eligible: false,
  },
  {
    word: "DCLXXI",
    eligible: false,
  },
  {
    word: "DCLXXV",
    eligible: false,
  },
  {
    word: "DCLXXX",
    eligible: false,
  },
  {
    word: "DCVIII",
    eligible: false,
  },
  {
    word: "DCXCII",
    eligible: false,
  },
  {
    word: "DCXCIV",
    eligible: false,
  },
  {
    word: "DCXCIX",
    eligible: false,
  },
  {
    word: "DCXCVI",
    eligible: false,
  },
  {
    word: "DCXIII",
    eligible: false,
  },
  {
    word: "DCXLII",
    eligible: false,
  },
  {
    word: "DCXLIV",
    eligible: false,
  },
  {
    word: "DCXLIX",
    eligible: false,
  },
  {
    word: "DCXLVI",
    eligible: false,
  },
  {
    word: "DCXVII",
    eligible: false,
  },
  {
    word: "DCXXII",
    eligible: false,
  },
  {
    word: "DCXXIV",
    eligible: false,
  },
  {
    word: "DCXXIX",
    eligible: false,
  },
  {
    word: "DCXXVI",
    eligible: false,
  },
  {
    word: "DCXXXI",
    eligible: false,
  },
  {
    word: "DCXXXV",
    eligible: false,
  },
  {
    word: "dealer",
    eligible: false,
  },
  {
    word: "deanol",
    eligible: false,
  },
  {
    word: "debaga",
    eligible: false,
  },
  {
    word: "debate",
    eligible: false,
  },
  {
    word: "débito",
    eligible: false,
  },
  {
    word: "Débora",
    eligible: false,
  },
  {
    word: "década",
    eligible: false,
  },
  {
    word: "decair",
    eligible: false,
  },
  {
    word: "decani",
    eligible: false,
  },
  {
    word: "decano",
    eligible: false,
  },
  {
    word: "Decaro",
    eligible: false,
  },
  {
    word: "decila",
    eligible: false,
  },
  {
    word: "décimo",
    eligible: false,
  },
  {
    word: "decoar",
    eligible: false,
  },
  {
    word: "dédalo",
    eligible: false,
  },
  {
    word: "dédica",
    eligible: false,
  },
  {
    word: "defesa",
    eligible: false,
  },
  {
    word: "defeso",
    eligible: false,
  },
  {
    word: "defeto",
    eligible: false,
  },
  {
    word: "défice",
    eligible: false,
  },
  {
    word: "degrau",
    eligible: false,
  },
  {
    word: "deísmo",
    eligible: false,
  },
  {
    word: "deísta",
    eligible: false,
  },
  {
    word: "deitar",
    eligible: false,
  },
  {
    word: "deixar",
    eligible: false,
  },
  {
    word: "deixes",
    eligible: false,
  },
  {
    word: "dêixis",
    eligible: false,
  },
  {
    word: "Delano",
    eligible: false,
  },
  {
    word: "delfim",
    eligible: false,
  },
  {
    word: "Delfos",
    eligible: false,
  },
  {
    word: "delico",
    eligible: false,
  },
  {
    word: "délico",
    eligible: false,
  },
  {
    word: "Delila",
    eligible: false,
  },
  {
    word: "delito",
    eligible: false,
  },
  {
    word: "Delmar",
    eligible: false,
  },
  {
    word: "Délson",
    eligible: false,
  },
  {
    word: "deluso",
    eligible: false,
  },
  {
    word: "demais",
    eligible: false,
  },
  {
    word: "demear",
    eligible: false,
  },
  {
    word: "dêmico",
    eligible: false,
  },
  {
    word: "démodé",
    eligible: false,
  },
  {
    word: "demulo",
    eligible: false,
  },
  {
    word: "Denair",
    eligible: false,
  },
  {
    word: "dendém",
    eligible: false,
  },
  {
    word: "dendro",
    eligible: false,
  },
  {
    word: "dengue",
    eligible: false,
  },
  {
    word: "Denise",
    eligible: false,
  },
  {
    word: "densar",
    eligible: false,
  },
  {
    word: "dental",
    eligible: false,
  },
  {
    word: "dentão",
    eligible: false,
  },
  {
    word: "dentar",
    eligible: false,
  },
  {
    word: "dentel",
    eligible: false,
  },
  {
    word: "Dentes",
    eligible: false,
  },
  {
    word: "dentes",
    eligible: false,
  },
  {
    word: "dêntex",
    eligible: false,
  },
  {
    word: "dentre",
    eligible: false,
  },
  {
    word: "dentro",
    eligible: false,
  },
  {
    word: "deonto",
    eligible: false,
  },
  {
    word: "depois",
    eligible: false,
  },
  {
    word: "dérbio",
    eligible: false,
  },
  {
    word: "Dércio",
    eligible: false,
  },
  {
    word: "dérmeo",
    eligible: false,
  },
  {
    word: "deroga",
    eligible: false,
  },
  {
    word: "dérris",
    eligible: false,
  },
  {
    word: "dervis",
    eligible: false,
  },
  {
    word: "desana",
    eligible: false,
  },
  {
    word: "descer",
    eligible: false,
  },
  {
    word: "desdém",
    eligible: false,
  },
  {
    word: "desder",
    eligible: false,
  },
  {
    word: "desejo",
    eligible: false,
  },
  {
    word: "desfia",
    eligible: false,
  },
  {
    word: "design",
    eligible: false,
  },
  {
    word: "desoxi",
    eligible: false,
  },
  {
    word: "despir",
    eligible: false,
  },
  {
    word: "dessaí",
    eligible: false,
  },
  {
    word: "dessar",
    eligible: false,
  },
  {
    word: "destro",
    eligible: false,
  },
  {
    word: "desvão",
    eligible: false,
  },
  {
    word: "desvio",
    eligible: false,
  },
  {
    word: "detido",
    eligible: false,
  },
  {
    word: "Detran",
    eligible: false,
  },
  {
    word: "detrás",
    eligible: false,
  },
  {
    word: "deunce",
    eligible: false,
  },
  {
    word: "deuses",
    eligible: false,
  },
  {
    word: "deutão",
    eligible: false,
  },
  {
    word: "dêuton",
    eligible: false,
  },
  {
    word: "devesa",
    eligible: false,
  },
  {
    word: "devoto",
    eligible: false,
  },
  {
    word: "dextil",
    eligible: false,
  },
  {
    word: "dezeno",
    eligible: false,
  },
  {
    word: "DHESCA",
    eligible: false,
  },
  {
    word: "diabão",
    eligible: false,
  },
  {
    word: "diáboa",
    eligible: false,
  },
  {
    word: "diabos",
    eligible: false,
  },
  {
    word: "diabre",
    eligible: false,
  },
  {
    word: "diabro",
    eligible: false,
  },
  {
    word: "diacho",
    eligible: false,
  },
  {
    word: "diagal",
    eligible: false,
  },
  {
    word: "dialho",
    eligible: false,
  },
  {
    word: "Diália",
    eligible: false,
  },
  {
    word: "diamão",
    eligible: false,
  },
  {
    word: "diambe",
    eligible: false,
  },
  {
    word: "dianas",
    eligible: false,
  },
  {
    word: "dianho",
    eligible: false,
  },
  {
    word: "dianjá",
    eligible: false,
  },
  {
    word: "diante",
    eligible: false,
  },
  {
    word: "dianto",
    eligible: false,
  },
  {
    word: "diapir",
    eligible: false,
  },
  {
    word: "diapse",
    eligible: false,
  },
  {
    word: "diarco",
    eligible: false,
  },
  {
    word: "diário",
    eligible: false,
  },
  {
    word: "diasco",
    eligible: false,
  },
  {
    word: "diatlo",
    eligible: false,
  },
  {
    word: "diatom",
    eligible: false,
  },
  {
    word: "diaulo",
    eligible: false,
  },
  {
    word: "diazol",
    eligible: false,
  },
  {
    word: "dibala",
    eligible: false,
  },
  {
    word: "dibase",
    eligible: false,
  },
  {
    word: "díbase",
    eligible: false,
  },
  {
    word: "dibela",
    eligible: false,
  },
  {
    word: "dibixi",
    eligible: false,
  },
  {
    word: "dibulo",
    eligible: false,
  },
  {
    word: "dibute",
    eligible: false,
  },
  {
    word: "dicaba",
    eligible: false,
  },
  {
    word: "dicana",
    eligible: false,
  },
  {
    word: "dicáxi",
    eligible: false,
  },
  {
    word: "dicção",
    eligible: false,
  },
  {
    word: "dicelo",
    eligible: false,
  },
  {
    word: "dícelo",
    eligible: false,
  },
  {
    word: "dícero",
    eligible: false,
  },
  {
    word: "dichas",
    eligible: false,
  },
  {
    word: "dicifo",
    eligible: false,
  },
  {
    word: "díclis",
    eligible: false,
  },
  {
    word: "dicoco",
    eligible: false,
  },
  {
    word: "dicode",
    eligible: false,
  },
  {
    word: "dicole",
    eligible: false,
  },
  {
    word: "dicoma",
    eligible: false,
  },
  {
    word: "dicori",
    eligible: false,
  },
  {
    word: "dícroa",
    eligible: false,
  },
  {
    word: "dicteu",
    eligible: false,
  },
  {
    word: "dicuri",
    eligible: false,
  },
  {
    word: "didata",
    eligible: false,
  },
  {
    word: "dídimo",
    eligible: false,
  },
  {
    word: "diecia",
    eligible: false,
  },
  {
    word: "diécio",
    eligible: false,
  },
  {
    word: "diedro",
    eligible: false,
  },
  {
    word: "DIEESE",
    eligible: false,
  },
  {
    word: "Dieese",
    eligible: false,
  },
  {
    word: "diélia",
    eligible: false,
  },
  {
    word: "diembe",
    eligible: false,
  },
  {
    word: "diembo",
    eligible: false,
  },
  {
    word: "diénia",
    eligible: false,
  },
  {
    word: "diense",
    eligible: false,
  },
  {
    word: "diepês",
    eligible: false,
  },
  {
    word: "diesar",
    eligible: false,
  },
  {
    word: "diesel",
    eligible: false,
  },
  {
    word: "diésis",
    eligible: false,
  },
  {
    word: "díesis",
    eligible: false,
  },
  {
    word: "diéter",
    eligible: false,
  },
  {
    word: "difalo",
    eligible: false,
  },
  {
    word: "difemo",
    eligible: false,
  },
  {
    word: "difilo",
    eligible: false,
  },
  {
    word: "difole",
    eligible: false,
  },
  {
    word: "difuba",
    eligible: false,
  },
  {
    word: "difuso",
    eligible: false,
  },
  {
    word: "difuta",
    eligible: false,
  },
  {
    word: "digama",
    eligible: false,
  },
  {
    word: "dígamo",
    eligible: false,
  },
  {
    word: "digino",
    eligible: false,
  },
  {
    word: "dígino",
    eligible: false,
  },
  {
    word: "dígite",
    eligible: false,
  },
  {
    word: "dígito",
    eligible: false,
  },
  {
    word: "dignar",
    eligible: false,
  },
  {
    word: "dígono",
    eligible: false,
  },
  {
    word: "diguti",
    eligible: false,
  },
  {
    word: "dijiça",
    eligible: false,
  },
  {
    word: "dijina",
    eligible: false,
  },
  {
    word: "díjina",
    eligible: false,
  },
  {
    word: "dijole",
    eligible: false,
  },
  {
    word: "dilais",
    eligible: false,
  },
  {
    word: "dileco",
    eligible: false,
  },
  {
    word: "dilema",
    eligible: false,
  },
  {
    word: "dileto",
    eligible: false,
  },
  {
    word: "dileuó",
    eligible: false,
  },
  {
    word: "diligó",
    eligible: false,
  },
  {
    word: "Dilmar",
    eligible: false,
  },
  {
    word: "diloba",
    eligible: false,
  },
  {
    word: "dílofo",
    eligible: false,
  },
  {
    word: "dilolo",
    eligible: false,
  },
  {
    word: "dilona",
    eligible: false,
  },
  {
    word: "Dílson",
    eligible: false,
  },
  {
    word: "Dílton",
    eligible: false,
  },
  {
    word: "diluia",
    eligible: false,
  },
  {
    word: "diluir",
    eligible: false,
  },
  {
    word: "dilula",
    eligible: false,
  },
  {
    word: "diluto",
    eligible: false,
  },
  {
    word: "diluvo",
    eligible: false,
  },
  {
    word: "dimbui",
    eligible: false,
  },
  {
    word: "dímere",
    eligible: false,
  },
  {
    word: "dímero",
    eligible: false,
  },
  {
    word: "dimina",
    eligible: false,
  },
  {
    word: "dimiti",
    eligible: false,
  },
  {
    word: "dimuro",
    eligible: false,
  },
  {
    word: "Dinabá",
    eligible: false,
  },
  {
    word: "díname",
    eligible: false,
  },
  {
    word: "dínamo",
    eligible: false,
  },
  {
    word: "dindar",
    eligible: false,
  },
  {
    word: "díndia",
    eligible: false,
  },
  {
    word: "dindié",
    eligible: false,
  },
  {
    word: "dindim",
    eligible: false,
  },
  {
    word: "dinemo",
    eligible: false,
  },
  {
    word: "díneto",
    eligible: false,
  },
  {
    word: "dingui",
    eligible: false,
  },
  {
    word: "dínico",
    eligible: false,
  },
  {
    word: "dínodo",
    eligible: false,
  },
  {
    word: "dinoio",
    eligible: false,
  },
  {
    word: "dinope",
    eligible: false,
  },
  {
    word: "Dinorá",
    eligible: false,
  },
  {
    word: "dintel",
    eligible: false,
  },
  {
    word: "diódio",
    eligible: false,
  },
  {
    word: "diogos",
    eligible: false,
  },
  {
    word: "dioico",
    eligible: false,
  },
  {
    word: "Diomar",
    eligible: false,
  },
  {
    word: "Dionéa",
    eligible: false,
  },
  {
    word: "diópro",
    eligible: false,
  },
  {
    word: "diosma",
    eligible: false,
  },
  {
    word: "diotia",
    eligible: false,
  },
  {
    word: "dioxia",
    eligible: false,
  },
  {
    word: "dípigo",
    eligible: false,
  },
  {
    word: "dípilo",
    eligible: false,
  },
  {
    word: "dipiro",
    eligible: false,
  },
  {
    word: "díploe",
    eligible: false,
  },
  {
    word: "dípode",
    eligible: false,
  },
  {
    word: "dipolo",
    eligible: false,
  },
  {
    word: "dípolo",
    eligible: false,
  },
  {
    word: "díporo",
    eligible: false,
  },
  {
    word: "dipsia",
    eligible: false,
  },
  {
    word: "dípsis",
    eligible: false,
  },
  {
    word: "díquia",
    eligible: false,
  },
  {
    word: "dírcea",
    eligible: false,
  },
  {
    word: "Dirceu",
    eligible: false,
  },
  {
    word: "dirceu",
    eligible: false,
  },
  {
    word: "direto",
    eligible: false,
  },
  {
    word: "dirino",
    eligible: false,
  },
  {
    word: "diriri",
    eligible: false,
  },
  {
    word: "dirito",
    eligible: false,
  },
  {
    word: "dirqui",
    eligible: false,
  },
  {
    word: "diruir",
    eligible: false,
  },
  {
    word: "dísaco",
    eligible: false,
  },
  {
    word: "discal",
    eligible: false,
  },
  {
    word: "discar",
    eligible: false,
  },
  {
    word: "discos",
    eligible: false,
  },
  {
    word: "disema",
    eligible: false,
  },
  {
    word: "disgra",
    eligible: false,
  },
  {
    word: "díspar",
    eligible: false,
  },
  {
    word: "dispor",
    eligible: false,
  },
  {
    word: "Disque",
    eligible: false,
  },
  {
    word: "distal",
    eligible: false,
  },
  {
    word: "distar",
    eligible: false,
  },
  {
    word: "distro",
    eligible: false,
  },
  {
    word: "ditame",
    eligible: false,
  },
  {
    word: "ditaxe",
    eligible: false,
  },
  {
    word: "diteco",
    eligible: false,
  },
  {
    word: "ditema",
    eligible: false,
  },
  {
    word: "dítico",
    eligible: false,
  },
  {
    word: "dítiro",
    eligible: false,
  },
  {
    word: "ditoba",
    eligible: false,
  },
  {
    word: "dítome",
    eligible: false,
  },
  {
    word: "dítomo",
    eligible: false,
  },
  {
    word: "dítono",
    eligible: false,
  },
  {
    word: "ditoso",
    eligible: false,
  },
  {
    word: "ditote",
    eligible: false,
  },
  {
    word: "ditoxo",
    eligible: false,
  },
  {
    word: "dituma",
    eligible: false,
  },
  {
    word: "dituta",
    eligible: false,
  },
  {
    word: "diunda",
    eligible: false,
  },
  {
    word: "diunga",
    eligible: false,
  },
  {
    word: "diuria",
    eligible: false,
  },
  {
    word: "diúria",
    eligible: false,
  },
  {
    word: "diurno",
    eligible: false,
  },
  {
    word: "divali",
    eligible: false,
  },
  {
    word: "divani",
    eligible: false,
  },
  {
    word: "divedo",
    eligible: false,
  },
  {
    word: "divehi",
    eligible: false,
  },
  {
    word: "divers",
    eligible: false,
  },
  {
    word: "diveta",
    eligible: false,
  },
  {
    word: "dívida",
    eligible: false,
  },
  {
    word: "divina",
    eligible: false,
  },
  {
    word: "divino",
    eligible: false,
  },
  {
    word: "divisa",
    eligible: false,
  },
  {
    word: "diviso",
    eligible: false,
  },
  {
    word: "divuna",
    eligible: false,
  },
  {
    word: "dixiça",
    eligible: false,
  },
  {
    word: "dixico",
    eligible: false,
  },
  {
    word: "díxico",
    eligible: false,
  },
  {
    word: "dixita",
    eligible: false,
  },
  {
    word: "dízimo",
    eligible: false,
  },
  {
    word: "Djalma",
    eligible: false,
  },
  {
    word: "djalma",
    eligible: false,
  },
  {
    word: "djamba",
    eligible: false,
  },
  {
    word: "djapás",
    eligible: false,
  },
  {
    word: "Djavan",
    eligible: false,
  },
  {
    word: "DLVIII",
    eligible: false,
  },
  {
    word: "DLXIII",
    eligible: false,
  },
  {
    word: "DLXVII",
    eligible: false,
  },
  {
    word: "DLXXII",
    eligible: false,
  },
  {
    word: "DLXXIV",
    eligible: false,
  },
  {
    word: "DLXXIX",
    eligible: false,
  },
  {
    word: "DLXXVI",
    eligible: false,
  },
  {
    word: "DLXXXI",
    eligible: false,
  },
  {
    word: "DLXXXV",
    eligible: false,
  },
  {
    word: "doação",
    eligible: false,
  },
  {
    word: "doador",
    eligible: false,
  },
  {
    word: "doaire",
    eligible: false,
  },
  {
    word: "doairo",
    eligible: false,
  },
  {
    word: "doário",
    eligible: false,
  },
  {
    word: "doável",
    eligible: false,
  },
  {
    word: "dobale",
    eligible: false,
  },
  {
    word: "dobalé",
    eligible: false,
  },
  {
    word: "doblez",
    eligible: false,
  },
  {
    word: "doboru",
    eligible: false,
  },
  {
    word: "dobral",
    eligible: false,
  },
  {
    word: "dobrão",
    eligible: false,
  },
  {
    word: "dobrar",
    eligible: false,
  },
  {
    word: "dobrel",
    eligible: false,
  },
  {
    word: "dobres",
    eligible: false,
  },
  {
    word: "dobrez",
    eligible: false,
  },
  {
    word: "dobrum",
    eligible: false,
  },
  {
    word: "doburu",
    eligible: false,
  },
  {
    word: "doceta",
    eligible: false,
  },
  {
    word: "dócmio",
    eligible: false,
  },
  {
    word: "doçote",
    eligible: false,
  },
  {
    word: "doctor",
    eligible: false,
  },
  {
    word: "docuim",
    eligible: false,
  },
  {
    word: "doçura",
    eligible: false,
  },
  {
    word: "doeira",
    eligible: false,
  },
  {
    word: "doença",
    eligible: false,
  },
  {
    word: "doente",
    eligible: false,
  },
  {
    word: "dofono",
    eligible: false,
  },
  {
    word: "dogado",
    eligible: false,
  },
  {
    word: "dogesa",
    eligible: false,
  },
  {
    word: "dógico",
    eligible: false,
  },
  {
    word: "doidão",
    eligible: false,
  },
  {
    word: "doidas",
    eligible: false,
  },
  {
    word: "doidos",
    eligible: false,
  },
  {
    word: "doilos",
    eligible: false,
  },
  {
    word: "doirar",
    eligible: false,
  },
  {
    word: "dojico",
    eligible: false,
  },
  {
    word: "dolero",
    eligible: false,
  },
  {
    word: "dólico",
    eligible: false,
  },
  {
    word: "dólida",
    eligible: false,
  },
  {
    word: "dolina",
    eligible: false,
  },
  {
    word: "Dolmar",
    eligible: false,
  },
  {
    word: "dólmen",
    eligible: false,
  },
  {
    word: "dólmin",
    eligible: false,
  },
  {
    word: "dólope",
    eligible: false,
  },
  {
    word: "doloso",
    eligible: false,
  },
  {
    word: "dolqui",
    eligible: false,
  },
  {
    word: "dombdi",
    eligible: false,
  },
  {
    word: "domena",
    eligible: false,
  },
  {
    word: "dômico",
    eligible: false,
  },
  {
    word: "dômina",
    eligible: false,
  },
  {
    word: "dominó",
    eligible: false,
  },
  {
    word: "dômino",
    eligible: false,
  },
  {
    word: "domito",
    eligible: false,
  },
  {
    word: "dônace",
    eligible: false,
  },
  {
    word: "donato",
    eligible: false,
  },
  {
    word: "dondom",
    eligible: false,
  },
  {
    word: "donear",
    eligible: false,
  },
  {
    word: "doneta",
    eligible: false,
  },
  {
    word: "dongri",
    eligible: false,
  },
  {
    word: "donoso",
    eligible: false,
  },
  {
    word: "dontre",
    eligible: false,
  },
  {
    word: "donzel",
    eligible: false,
  },
  {
    word: "doódia",
    eligible: false,
  },
  {
    word: "doping",
    eligible: false,
  },
  {
    word: "dopraz",
    eligible: false,
  },
  {
    word: "dorado",
    eligible: false,
  },
  {
    word: "dorcas",
    eligible: false,
  },
  {
    word: "dórcus",
    eligible: false,
  },
  {
    word: "dorema",
    eligible: false,
  },
  {
    word: "dorial",
    eligible: false,
  },
  {
    word: "dórico",
    eligible: false,
  },
  {
    word: "dóride",
    eligible: false,
  },
  {
    word: "dorido",
    eligible: false,
  },
  {
    word: "Dorina",
    eligible: false,
  },
  {
    word: "doripe",
    eligible: false,
  },
  {
    word: "dormes",
    eligible: false,
  },
  {
    word: "dormir",
    eligible: false,
  },
  {
    word: "dornão",
    eligible: false,
  },
  {
    word: "dorobo",
    eligible: false,
  },
  {
    word: "doroso",
    eligible: false,
  },
  {
    word: "dorrum",
    eligible: false,
  },
  {
    word: "dorsal",
    eligible: false,
  },
  {
    word: "dorsos",
    eligible: false,
  },
  {
    word: "dosear",
    eligible: false,
  },
  {
    word: "dossel",
    eligible: false,
  },
  {
    word: "dossiê",
    eligible: false,
  },
  {
    word: "dotado",
    eligible: false,
  },
  {
    word: "double",
    eligible: false,
  },
  {
    word: "doudão",
    eligible: false,
  },
  {
    word: "doudos",
    eligible: false,
  },
  {
    word: "doundo",
    eligible: false,
  },
  {
    word: "dourar",
    eligible: false,
  },
  {
    word: "doutor",
    eligible: false,
  },
  {
    word: "doutro",
    eligible: false,
  },
  {
    word: "dóxico",
    eligible: false,
  },
  {
    word: "dozeno",
    eligible: false,
  },
  {
    word: "dracar",
    eligible: false,
  },
  {
    word: "drácar",
    eligible: false,
  },
  {
    word: "dracma",
    eligible: false,
  },
  {
    word: "dragão",
    eligible: false,
  },
  {
    word: "dragar",
    eligible: false,
  },
  {
    word: "drágea",
    eligible: false,
  },
  {
    word: "draiva",
    eligible: false,
  },
  {
    word: "drenar",
    eligible: false,
  },
  {
    word: "drenos",
    eligible: false,
  },
  {
    word: "dríade",
    eligible: false,
  },
  {
    word: "drogar",
    eligible: false,
  },
  {
    word: "drongo",
    eligible: false,
  },
  {
    word: "dronte",
    eligible: false,
  },
  {
    word: "dropes",
    eligible: false,
  },
  {
    word: "druida",
    eligible: false,
  },
  {
    word: "drunfo",
    eligible: false,
  },
  {
    word: "duaire",
    eligible: false,
  },
  {
    word: "duairo",
    eligible: false,
  },
  {
    word: "duarca",
    eligible: false,
  },
  {
    word: "Duarte",
    eligible: false,
  },
  {
    word: "duatlo",
    eligible: false,
  },
  {
    word: "dubiez",
    eligible: false,
  },
  {
    word: "dublar",
    eligible: false,
  },
  {
    word: "Dublim",
    eligible: false,
  },
  {
    word: "dúbnio",
    eligible: false,
  },
  {
    word: "dubulé",
    eligible: false,
  },
  {
    word: "duburu",
    eligible: false,
  },
  {
    word: "Ducado",
    eligible: false,
  },
  {
    word: "ducado",
    eligible: false,
  },
  {
    word: "ducais",
    eligible: false,
  },
  {
    word: "ducará",
    eligible: false,
  },
  {
    word: "ducção",
    eligible: false,
  },
  {
    word: "duchal",
    eligible: false,
  },
  {
    word: "duchar",
    eligible: false,
  },
  {
    word: "ducina",
    eligible: false,
  },
  {
    word: "ductal",
    eligible: false,
  },
  {
    word: "dúctil",
    eligible: false,
  },
  {
    word: "ductor",
    eligible: false,
  },
  {
    word: "ducucu",
    eligible: false,
  },
  {
    word: "ducume",
    eligible: false,
  },
  {
    word: "dueiro",
    eligible: false,
  },
  {
    word: "duelar",
    eligible: false,
  },
  {
    word: "duende",
    eligible: false,
  },
  {
    word: "duenha",
    eligible: false,
  },
  {
    word: "duerno",
    eligible: false,
  },
  {
    word: "duetar",
    eligible: false,
  },
  {
    word: "dugani",
    eligible: false,
  },
  {
    word: "dugaza",
    eligible: false,
  },
  {
    word: "Duílio",
    eligible: false,
  },
  {
    word: "duinze",
    eligible: false,
  },
  {
    word: "Dulcie",
    eligible: false,
  },
  {
    word: "Dúlcio",
    eligible: false,
  },
  {
    word: "dúlcis",
    eligible: false,
  },
  {
    word: "dulçor",
    eligible: false,
  },
  {
    word: "dulijá",
    eligible: false,
  },
  {
    word: "dulimã",
    eligible: false,
  },
  {
    word: "dulose",
    eligible: false,
  },
  {
    word: "Dultra",
    eligible: false,
  },
  {
    word: "duludi",
    eligible: false,
  },
  {
    word: "Dumará",
    eligible: false,
  },
  {
    word: "Dumont",
    eligible: false,
  },
  {
    word: "Duncan",
    eligible: false,
  },
  {
    word: "dundum",
    eligible: false,
  },
  {
    word: "duneta",
    eligible: false,
  },
  {
    word: "dunito",
    eligible: false,
  },
  {
    word: "duodia",
    eligible: false,
  },
  {
    word: "duotal",
    eligible: false,
  },
  {
    word: "dupião",
    eligible: false,
  },
  {
    word: "duplar",
    eligible: false,
  },
  {
    word: "duplas",
    eligible: false,
  },
  {
    word: "duplex",
    eligible: false,
  },
  {
    word: "dúplex",
    eligible: false,
  },
  {
    word: "duplos",
    eligible: false,
  },
  {
    word: "duraço",
    eligible: false,
  },
  {
    word: "durame",
    eligible: false,
  },
  {
    word: "durani",
    eligible: false,
  },
  {
    word: "Durban",
    eligible: false,
  },
  {
    word: "durbar",
    eligible: false,
  },
  {
    word: "dureno",
    eligible: false,
  },
  {
    word: "dureza",
    eligible: false,
  },
  {
    word: "durial",
    eligible: false,
  },
  {
    word: "durião",
    eligible: false,
  },
  {
    word: "durilo",
    eligible: false,
  },
  {
    word: "durina",
    eligible: false,
  },
  {
    word: "durite",
    eligible: false,
  },
  {
    word: "durito",
    eligible: false,
  },
  {
    word: "duroia",
    eligible: false,
  },
  {
    word: "durona",
    eligible: false,
  },
  {
    word: "durura",
    eligible: false,
  },
  {
    word: "Durval",
    eligible: false,
  },
  {
    word: "dútila",
    eligible: false,
  },
  {
    word: "duturó",
    eligible: false,
  },
  {
    word: "duveia",
    eligible: false,
  },
  {
    word: "duvela",
    eligible: false,
  },
  {
    word: "dúvida",
    eligible: false,
  },
  {
    word: "duzina",
    eligible: false,
  },
  {
    word: "DXCIII",
    eligible: false,
  },
  {
    word: "DXCVII",
    eligible: false,
  },
  {
    word: "DXLIII",
    eligible: false,
  },
  {
    word: "DXLVII",
    eligible: false,
  },
  {
    word: "DXVIII",
    eligible: false,
  },
  {
    word: "DXXIII",
    eligible: false,
  },
  {
    word: "DXXVII",
    eligible: false,
  },
  {
    word: "DXXXII",
    eligible: false,
  },
  {
    word: "DXXXIV",
    eligible: false,
  },
  {
    word: "DXXXIX",
    eligible: false,
  },
  {
    word: "DXXXVI",
    eligible: false,
  },
  {
    word: "dzonga",
    eligible: false,
  },
  {
    word: "danca",
    eligible: false,
  },
  {
    word: "Eácido",
    eligible: false,
  },
  {
    word: "ealmar",
    eligible: false,
  },
  {
    word: "earcar",
    eligible: false,
  },
  {
    word: "earina",
    eligible: false,
  },
  {
    word: "ebálio",
    eligible: false,
  },
  {
    word: "ebambe",
    eligible: false,
  },
  {
    word: "ebamim",
    eligible: false,
  },
  {
    word: "ebande",
    eligible: false,
  },
  {
    word: "ebâneo",
    eligible: false,
  },
  {
    word: "ébanos",
    eligible: false,
  },
  {
    word: "ebenal",
    eligible: false,
  },
  {
    word: "Éberle",
    eligible: false,
  },
  {
    word: "ebiara",
    eligible: false,
  },
  {
    word: "ebombe",
    eligible: false,
  },
  {
    word: "ebomim",
    eligible: false,
  },
  {
    word: "ebóreo",
    eligible: false,
  },
  {
    word: "Ebraim",
    eligible: false,
  },
  {
    word: "ebriez",
    eligible: false,
  },
  {
    word: "ebulir",
    eligible: false,
  },
  {
    word: "eburão",
    eligible: false,
  },
  {
    word: "ecagra",
    eligible: false,
  },
  {
    word: "ecanda",
    eligible: false,
  },
  {
    word: "ecanto",
    eligible: false,
  },
  {
    word: "Eçaúna",
    eligible: false,
  },
  {
    word: "écbase",
    eligible: false,
  },
  {
    word: "écbola",
    eligible: false,
  },
  {
    word: "ecdero",
    eligible: false,
  },
  {
    word: "écdico",
    eligible: false,
  },
  {
    word: "ecdise",
    eligible: false,
  },
  {
    word: "ecdora",
    eligible: false,
  },
  {
    word: "ecétis",
    eligible: false,
  },
  {
    word: "écfora",
    eligible: false,
  },
  {
    word: "echião",
    eligible: false,
  },
  {
    word: "eciano",
    eligible: false,
  },
  {
    word: "ecídio",
    eligible: false,
  },
  {
    word: "eciese",
    eligible: false,
  },
  {
    word: "ecília",
    eligible: false,
  },
  {
    word: "ecismo",
    eligible: false,
  },
  {
    word: "ecíton",
    eligible: false,
  },
  {
    word: "éciton",
    eligible: false,
  },
  {
    word: "éclair",
    eligible: false,
  },
  {
    word: "Ecleia",
    eligible: false,
  },
  {
    word: "eclise",
    eligible: false,
  },
  {
    word: "écloga",
    eligible: false,
  },
  {
    word: "eclusa",
    eligible: false,
  },
  {
    word: "ecmeia",
    eligible: false,
  },
  {
    word: "ecoico",
    eligible: false,
  },
  {
    word: "ecoide",
    eligible: false,
  },
  {
    word: "ecóleo",
    eligible: false,
  },
  {
    word: "ecolia",
    eligible: false,
  },
  {
    word: "econgo",
    eligible: false,
  },
  {
    word: "ecovia",
    eligible: false,
  },
  {
    word: "écrina",
    eligible: false,
  },
  {
    word: "ecrise",
    eligible: false,
  },
  {
    word: "ecrucu",
    eligible: false,
  },
  {
    word: "ecruru",
    eligible: false,
  },
  {
    word: "éctase",
    eligible: false,
  },
  {
    word: "éctese",
    eligible: false,
  },
  {
    word: "ectima",
    eligible: false,
  },
  {
    word: "ectino",
    eligible: false,
  },
  {
    word: "éctipo",
    eligible: false,
  },
  {
    word: "ecúleo",
    eligible: false,
  },
  {
    word: "ecúlex",
    eligible: false,
  },
  {
    word: "eczema",
    eligible: false,
  },
  {
    word: "edáfio",
    eligible: false,
  },
  {
    word: "édafon",
    eligible: false,
  },
  {
    word: "edeago",
    eligible: false,
  },
  {
    word: "Edécio",
    eligible: false,
  },
  {
    word: "Edegar",
    eligible: false,
  },
  {
    word: "edeíte",
    eligible: false,
  },
  {
    word: "Edemar",
    eligible: false,
  },
  {
    word: "edemia",
    eligible: false,
  },
  {
    word: "edêneo",
    eligible: false,
  },
  {
    word: "édenes",
    eligible: false,
  },
  {
    word: "edense",
    eligible: false,
  },
  {
    word: "edésia",
    eligible: false,
  },
  {
    word: "Edésio",
    eligible: false,
  },
  {
    word: "edetol",
    eligible: false,
  },
  {
    word: "Ediane",
    eligible: false,
  },
  {
    word: "edição",
    eligible: false,
  },
  {
    word: "Edilia",
    eligible: false,
  },
  {
    word: "Edílio",
    eligible: false,
  },
  {
    word: "Edilma",
    eligible: false,
  },
  {
    word: "Edilza",
    eligible: false,
  },
  {
    word: "edíneo",
    eligible: false,
  },
  {
    word: "Edinho",
    eligible: false,
  },
  {
    word: "Edison",
    eligible: false,
  },
  {
    word: "Edissa",
    eligible: false,
  },
  {
    word: "edital",
    eligible: false,
  },
  {
    word: "editar",
    eligible: false,
  },
  {
    word: "Editor",
    eligible: false,
  },
  {
    word: "editor",
    eligible: false,
  },
  {
    word: "editos",
    eligible: false,
  },
  {
    word: "edítuo",
    eligible: false,
  },
  {
    word: "Edival",
    eligible: false,
  },
  {
    word: "edível",
    eligible: false,
  },
  {
    word: "Edjane",
    eligible: false,
  },
  {
    word: "edomeu",
    eligible: false,
  },
  {
    word: "edônio",
    eligible: false,
  },
  {
    word: "edução",
    eligible: false,
  },
  {
    word: "educar",
    eligible: false,
  },
  {
    word: "Educom",
    eligible: false,
  },
  {
    word: "educto",
    eligible: false,
  },
  {
    word: "Eduíno",
    eligible: false,
  },
  {
    word: "edutor",
    eligible: false,
  },
  {
    word: "eduzir",
    eligible: false,
  },
  {
    word: "Edvino",
    eligible: false,
  },
  {
    word: "Edward",
    eligible: false,
  },
  {
    word: "éfanes",
    eligible: false,
  },
  {
    word: "efebia",
    eligible: false,
  },
  {
    word: "éfedra",
    eligible: false,
  },
  {
    word: "efeito",
    eligible: false,
  },
  {
    word: "efélia",
    eligible: false,
  },
  {
    word: "efêndi",
    eligible: false,
  },
  {
    word: "efésio",
    eligible: false,
  },
  {
    word: "efetor",
    eligible: false,
  },
  {
    word: "eficaz",
    eligible: false,
  },
  {
    word: "efígie",
    eligible: false,
  },
  {
    word: "efílio",
    eligible: false,
  },
  {
    word: "efípio",
    eligible: false,
  },
  {
    word: "efireu",
    eligible: false,
  },
  {
    word: "efitia",
    eligible: false,
  },
  {
    word: "efluir",
    eligible: false,
  },
  {
    word: "efluxo",
    eligible: false,
  },
  {
    word: "eforia",
    eligible: false,
  },
  {
    word: "Efraim",
    eligible: false,
  },
  {
    word: "Efrate",
    eligible: false,
  },
  {
    word: "efrato",
    eligible: false,
  },
  {
    word: "efúgio",
    eligible: false,
  },
  {
    word: "efusal",
    eligible: false,
  },
  {
    word: "efusão",
    eligible: false,
  },
  {
    word: "efusor",
    eligible: false,
  },
  {
    word: "efuzel",
    eligible: false,
  },
  {
    word: "egagra",
    eligible: false,
  },
  {
    word: "égagro",
    eligible: false,
  },
  {
    word: "eganto",
    eligible: false,
  },
  {
    word: "egbano",
    eligible: false,
  },
  {
    word: "egbele",
    eligible: false,
  },
  {
    word: "egeato",
    eligible: false,
  },
  {
    word: "egéria",
    eligible: false,
  },
  {
    word: "egerse",
    eligible: false,
  },
  {
    word: "egesta",
    eligible: false,
  },
  {
    word: "egídeo",
    eligible: false,
  },
  {
    word: "egídio",
    eligible: false,
  },
  {
    word: "egíneo",
    eligible: false,
  },
  {
    word: "eglete",
    eligible: false,
  },
  {
    word: "égloga",
    eligible: false,
  },
  {
    word: "egoíce",
    eligible: false,
  },
  {
    word: "egoico",
    eligible: false,
  },
  {
    word: "ególio",
    eligible: false,
  },
  {
    word: "egrete",
    eligible: false,
  },
  {
    word: "eibado",
    eligible: false,
  },
  {
    word: "eiceta",
    eligible: false,
  },
  {
    word: "eichão",
    eligible: false,
  },
  {
    word: "Eiffel",
    eligible: false,
  },
  {
    word: "eirado",
    eligible: false,
  },
  {
    word: "eiriço",
    eligible: false,
  },
  {
    word: "eirogo",
    eligible: false,
  },
  {
    word: "eitada",
    eligible: false,
  },
  {
    word: "eiveca",
    eligible: false,
  },
  {
    word: "eixial",
    eligible: false,
  },
  {
    word: "ejeção",
    eligible: false,
  },
  {
    word: "ejecto",
    eligible: false,
  },
  {
    word: "ejetar",
    eligible: false,
  },
  {
    word: "ejetor",
    eligible: false,
  },
  {
    word: "elação",
    eligible: false,
  },
  {
    word: "elache",
    eligible: false,
  },
  {
    word: "Eládio",
    eligible: false,
  },
  {
    word: "élafro",
    eligible: false,
  },
  {
    word: "elaico",
    eligible: false,
  },
  {
    word: "elaína",
    eligible: false,
  },
  {
    word: "Elaine",
    eligible: false,
  },
  {
    word: "elampo",
    eligible: false,
  },
  {
    word: "elance",
    eligible: false,
  },
  {
    word: "elande",
    eligible: false,
  },
  {
    word: "Elânio",
    eligible: false,
  },
  {
    word: "elasma",
    eligible: false,
  },
  {
    word: "elasmo",
    eligible: false,
  },
  {
    word: "elasto",
    eligible: false,
  },
  {
    word: "elator",
    eligible: false,
  },
  {
    word: "elatro",
    eligible: false,
  },
  {
    word: "Élcana",
    eligible: false,
  },
  {
    word: "Eldoro",
    eligible: false,
  },
  {
    word: "eleano",
    eligible: false,
  },
  {
    word: "eleate",
    eligible: false,
  },
  {
    word: "elefas",
    eligible: false,
  },
  {
    word: "elefoa",
    eligible: false,
  },
  {
    word: "elegbá",
    eligible: false,
  },
  {
    word: "eleger",
    eligible: false,
  },
  {
    word: "eleguá",
    eligible: false,
  },
  {
    word: "eleíte",
    eligible: false,
  },
  {
    word: "eleito",
    eligible: false,
  },
  {
    word: "elemis",
    eligible: false,
  },
  {
    word: "elende",
    eligible: false,
  },
  {
    word: "elênia",
    eligible: false,
  },
  {
    word: "eleoma",
    eligible: false,
  },
  {
    word: "eléqui",
    eligible: false,
  },
  {
    word: "elerão",
    eligible: false,
  },
  {
    word: "elesco",
    eligible: false,
  },
  {
    word: "eletro",
    eligible: false,
  },
  {
    word: "eleubá",
    eligible: false,
  },
  {
    word: "elevar",
    eligible: false,
  },
  {
    word: "Eliane",
    eligible: false,
  },
  {
    word: "Eliano",
    eligible: false,
  },
  {
    word: "Elício",
    eligible: false,
  },
  {
    word: "elidir",
    eligible: false,
  },
  {
    word: "Eliene",
    eligible: false,
  },
  {
    word: "Eliete",
    eligible: false,
  },
  {
    word: "Elifaz",
    eligible: false,
  },
  {
    word: "Elígio",
    eligible: false,
  },
  {
    word: "eligir",
    eligible: false,
  },
  {
    word: "Elimas",
    eligible: false,
  },
  {
    word: "elimeu",
    eligible: false,
  },
  {
    word: "elimim",
    eligible: false,
  },
  {
    word: "elinga",
    eligible: false,
  },
  {
    word: "eliota",
    eligible: false,
  },
  {
    word: "elipse",
    eligible: false,
  },
  {
    word: "elisão",
    eligible: false,
  },
  {
    word: "Eliseu",
    eligible: false,
  },
  {
    word: "eliseu",
    eligible: false,
  },
  {
    word: "elísio",
    eligible: false,
  },
  {
    word: "elisma",
    eligible: false,
  },
  {
    word: "Elissa",
    eligible: false,
  },
  {
    word: "élitro",
    eligible: false,
  },
  {
    word: "elixar",
    eligible: false,
  },
  {
    word: "elixir",
    eligible: false,
  },
  {
    word: "Elmadã",
    eligible: false,
  },
  {
    word: "Elmano",
    eligible: false,
  },
  {
    word: "elmete",
    eligible: false,
  },
  {
    word: "Elmiro",
    eligible: false,
  },
  {
    word: "elódea",
    eligible: false,
  },
  {
    word: "elogio",
    eligible: false,
  },
  {
    word: "elomué",
    eligible: false,
  },
  {
    word: "elório",
    eligible: false,
  },
  {
    word: "elósia",
    eligible: false,
  },
  {
    word: "elução",
    eligible: false,
  },
  {
    word: "eludir",
    eligible: false,
  },
  {
    word: "eluído",
    eligible: false,
  },
  {
    word: "elumba",
    eligible: false,
  },
  {
    word: "elúvio",
    eligible: false,
  },
  {
    word: "Elvino",
    eligible: false,
  },
  {
    word: "elvira",
    eligible: false,
  },
  {
    word: "Elvire",
    eligible: false,
  },
  {
    word: "Elviro",
    eligible: false,
  },
  {
    word: "elyita",
    eligible: false,
  },
  {
    word: "emaçar",
    eligible: false,
  },
  {
    word: "emalar",
    eligible: false,
  },
  {
    word: "emalia",
    eligible: false,
  },
  {
    word: "emanar",
    eligible: false,
  },
  {
    word: "emânio",
    eligible: false,
  },
  {
    word: "emarar",
    eligible: false,
  },
  {
    word: "Emater",
    eligible: false,
  },
  {
    word: "emátio",
    eligible: false,
  },
  {
    word: "embaca",
    eligible: false,
  },
  {
    word: "embaiá",
    eligible: false,
  },
  {
    word: "embair",
    eligible: false,
  },
  {
    word: "embama",
    eligible: false,
  },
  {
    word: "embaré",
    eligible: false,
  },
  {
    word: "embate",
    eligible: false,
  },
  {
    word: "embazo",
    eligible: false,
  },
  {
    word: "embeca",
    eligible: false,
  },
  {
    word: "emberi",
    eligible: false,
  },
  {
    word: "embida",
    eligible: false,
  },
  {
    word: "embigo",
    eligible: false,
  },
  {
    word: "embile",
    eligible: false,
  },
  {
    word: "embira",
    eligible: false,
  },
  {
    word: "embiri",
    eligible: false,
  },
  {
    word: "embiru",
    eligible: false,
  },
  {
    word: "embiús",
    eligible: false,
  },
  {
    word: "êmbolo",
    eligible: false,
  },
  {
    word: "emboma",
    eligible: false,
  },
  {
    word: "embora",
    eligible: false,
  },
  {
    word: "emboré",
    eligible: false,
  },
  {
    word: "embuba",
    eligible: false,
  },
  {
    word: "embuís",
    eligible: false,
  },
  {
    word: "emburé",
    eligible: false,
  },
  {
    word: "emburi",
    eligible: false,
  },
  {
    word: "embuxi",
    eligible: false,
  },
  {
    word: "emedar",
    eligible: false,
  },
  {
    word: "emelar",
    eligible: false,
  },
  {
    word: "emelia",
    eligible: false,
  },
  {
    word: "emenda",
    eligible: false,
  },
  {
    word: "emenia",
    eligible: false,
  },
  {
    word: "emense",
    eligible: false,
  },
  {
    word: "emerso",
    eligible: false,
  },
  {
    word: "emicon",
    eligible: false,
  },
  {
    word: "emídia",
    eligible: false,
  },
  {
    word: "Emídio",
    eligible: false,
  },
  {
    word: "emília",
    eligible: false,
  },
  {
    word: "Emílio",
    eligible: false,
  },
  {
    word: "emílio",
    eligible: false,
  },
  {
    word: "emínia",
    eligible: false,
  },
  {
    word: "emiono",
    eligible: false,
  },
  {
    word: "emitir",
    eligible: false,
  },
  {
    word: "emmeio",
    eligible: false,
  },
  {
    word: "emoção",
    eligible: false,
  },
  {
    word: "emolir",
    eligible: false,
  },
  {
    word: "emonar",
    eligible: false,
  },
  {
    word: "empada",
    eligible: false,
  },
  {
    word: "empata",
    eligible: false,
  },
  {
    word: "empear",
    eligible: false,
  },
  {
    word: "êmpida",
    eligible: false,
  },
  {
    word: "êmpise",
    eligible: false,
  },
  {
    word: "empoar",
    eligible: false,
  },
  {
    word: "empofe",
    eligible: false,
  },
  {
    word: "empofo",
    eligible: false,
  },
  {
    word: "emposa",
    eligible: false,
  },
  {
    word: "empuco",
    eligible: false,
  },
  {
    word: "empusa",
    eligible: false,
  },
  {
    word: "emular",
    eligible: false,
  },
  {
    word: "enação",
    eligible: false,
  },
  {
    word: "enágua",
    eligible: false,
  },
  {
    word: "Enalva",
    eligible: false,
  },
  {
    word: "enante",
    eligible: false,
  },
  {
    word: "enanto",
    eligible: false,
  },
  {
    word: "enatar",
    eligible: false,
  },
  {
    word: "encado",
    eligible: false,
  },
  {
    word: "encher",
    eligible: false,
  },
  {
    word: "enchuí",
    eligible: false,
  },
  {
    word: "encume",
    eligible: false,
  },
  {
    word: "endaca",
    eligible: false,
  },
  {
    word: "êndero",
    eligible: false,
  },
  {
    word: "Endira",
    eligible: false,
  },
  {
    word: "êndito",
    eligible: false,
  },
  {
    word: "endiva",
    eligible: false,
  },
  {
    word: "endrão",
    eligible: false,
  },
  {
    word: "endros",
    eligible: false,
  },
  {
    word: "endudo",
    eligible: false,
  },
  {
    word: "enduiá",
    eligible: false,
  },
  {
    word: "enéade",
    eligible: false,
  },
  {
    word: "eneate",
    eligible: false,
  },
  {
    word: "eneide",
    eligible: false,
  },
  {
    word: "enense",
    eligible: false,
  },
  {
    word: "enesol",
    eligible: false,
  },
  {
    word: "enevar",
    eligible: false,
  },
  {
    word: "ênfase",
    eligible: false,
  },
  {
    word: "enfear",
    eligible: false,
  },
  {
    word: "enfiar",
    eligible: false,
  },
  {
    word: "enfilo",
    eligible: false,
  },
  {
    word: "ênfobo",
    eligible: false,
  },
  {
    word: "enfuar",
    eligible: false,
  },
  {
    word: "engana",
    eligible: false,
  },
  {
    word: "engano",
    eligible: false,
  },
  {
    word: "engaxo",
    eligible: false,
  },
  {
    word: "engear",
    eligible: false,
  },
  {
    word: "engeco",
    eligible: false,
  },
  {
    word: "engino",
    eligible: false,
  },
  {
    word: "engiva",
    eligible: false,
  },
  {
    word: "engobe",
    eligible: false,
  },
  {
    word: "engobo",
    eligible: false,
  },
  {
    word: "engodo",
    eligible: false,
  },
  {
    word: "engôdo",
    eligible: false,
  },
  {
    word: "engole",
    eligible: false,
  },
  {
    word: "enguia",
    eligible: false,
  },
  {
    word: "eníada",
    eligible: false,
  },
  {
    word: "eniane",
    eligible: false,
  },
  {
    word: "enidro",
    eligible: false,
  },
  {
    word: "ênidro",
    eligible: false,
  },
  {
    word: "enjaca",
    eligible: false,
  },
  {
    word: "enjoar",
    eligible: false,
  },
  {
    word: "enjogó",
    eligible: false,
  },
  {
    word: "enjojo",
    eligible: false,
  },
  {
    word: "enjoló",
    eligible: false,
  },
  {
    word: "enlear",
    eligible: false,
  },
  {
    word: "enócoa",
    eligible: false,
  },
  {
    word: "enocto",
    eligible: false,
  },
  {
    word: "enodar",
    eligible: false,
  },
  {
    word: "Enódio",
    eligible: false,
  },
  {
    word: "enoema",
    eligible: false,
  },
  {
    word: "enogar",
    eligible: false,
  },
  {
    word: "enojar",
    eligible: false,
  },
  {
    word: "enóleo",
    eligible: false,
  },
  {
    word: "enomel",
    eligible: false,
  },
  {
    word: "enópio",
    eligible: false,
  },
  {
    word: "enoplo",
    eligible: false,
  },
  {
    word: "enoque",
    eligible: false,
  },
  {
    word: "enorme",
    eligible: false,
  },
  {
    word: "enovar",
    eligible: false,
  },
  {
    word: "enredo",
    eligible: false,
  },
  {
    word: "enriar",
    eligible: false,
  },
  {
    word: "enrola",
    eligible: false,
  },
  {
    word: "ensaio",
    eligible: false,
  },
  {
    word: "ensais",
    eligible: false,
  },
  {
    word: "ensear",
    eligible: false,
  },
  {
    word: "Ensino",
    eligible: false,
  },
  {
    word: "ensino",
    eligible: false,
  },
  {
    word: "ensoar",
    eligible: false,
  },
  {
    word: "entaca",
    eligible: false,
  },
  {
    word: "entada",
    eligible: false,
  },
  {
    word: "êntase",
    eligible: false,
  },
  {
    word: "entear",
    eligible: false,
  },
  {
    word: "entero",
    eligible: false,
  },
  {
    word: "êntero",
    eligible: false,
  },
  {
    word: "ential",
    eligible: false,
  },
  {
    word: "entimo",
    eligible: false,
  },
  {
    word: "entoar",
    eligible: false,
  },
  {
    word: "entomo",
    eligible: false,
  },
  {
    word: "entope",
    eligible: false,
  },
  {
    word: "entrar",
    eligible: false,
  },
  {
    word: "entraz",
    eligible: false,
  },
  {
    word: "entrós",
    eligible: false,
  },
  {
    word: "entuna",
    eligible: false,
  },
  {
    word: "ênulas",
    eligible: false,
  },
  {
    word: "ênuplo",
    eligible: false,
  },
  {
    word: "enviar",
    eligible: false,
  },
  {
    word: "enviés",
    eligible: false,
  },
  {
    word: "envios",
    eligible: false,
  },
  {
    word: "Envira",
    eligible: false,
  },
  {
    word: "envira",
    eligible: false,
  },
  {
    word: "envite",
    eligible: false,
  },
  {
    word: "enxaca",
    eligible: false,
  },
  {
    word: "enxada",
    eligible: false,
  },
  {
    word: "enxame",
    eligible: false,
  },
  {
    word: "enxara",
    eligible: false,
  },
  {
    word: "enxavo",
    eligible: false,
  },
  {
    word: "enxiar",
    eligible: false,
  },
  {
    word: "enxota",
    eligible: false,
  },
  {
    word: "enxuga",
    eligible: false,
  },
  {
    word: "enxuta",
    eligible: false,
  },
  {
    word: "enxuto",
    eligible: false,
  },
  {
    word: "enzena",
    eligible: false,
  },
  {
    word: "enzima",
    eligible: false,
  },
  {
    word: "enzolo",
    eligible: false,
  },
  {
    word: "eocene",
    eligible: false,
  },
  {
    word: "eoceno",
    eligible: false,
  },
  {
    word: "eofilo",
    eligible: false,
  },
  {
    word: "eólico",
    eligible: false,
  },
  {
    word: "eolina",
    eligible: false,
  },
  {
    word: "eólito",
    eligible: false,
  },
  {
    word: "eonita",
    eligible: false,
  },
  {
    word: "eordeu",
    eligible: false,
  },
  {
    word: "eosina",
    eligible: false,
  },
  {
    word: "eosite",
    eligible: false,
  },
  {
    word: "eosoto",
    eligible: false,
  },
  {
    word: "eozone",
    eligible: false,
  },
  {
    word: "epacmo",
    eligible: false,
  },
  {
    word: "épacre",
    eligible: false,
  },
  {
    word: "epacta",
    eligible: false,
  },
  {
    word: "epalto",
    eligible: false,
  },
  {
    word: "eparca",
    eligible: false,
  },
  {
    word: "eparma",
    eligible: false,
  },
  {
    word: "epeira",
    eligible: false,
  },
  {
    word: "epéolo",
    eligible: false,
  },
  {
    word: "eperva",
    eligible: false,
  },
  {
    word: "epíalo",
    eligible: false,
  },
  {
    word: "epícea",
    eligible: false,
  },
  {
    word: "epigeu",
    eligible: false,
  },
  {
    word: "epilar",
    eligible: false,
  },
  {
    word: "epílio",
    eligible: false,
  },
  {
    word: "epiplo",
    eligible: false,
  },
  {
    word: "epísio",
    eligible: false,
  },
  {
    word: "epocal",
    eligible: false,
  },
  {
    word: "epopta",
    eligible: false,
  },
  {
    word: "epoquê",
    eligible: false,
  },
  {
    word: "épsilo",
    eligible: false,
  },
  {
    word: "epulão",
    eligible: false,
  },
  {
    word: "epular",
    eligible: false,
  },
  {
    word: "equala",
    eligible: false,
  },
  {
    word: "equede",
    eligible: false,
  },
  {
    word: "équene",
    eligible: false,
  },
  {
    word: "equeso",
    eligible: false,
  },
  {
    word: "equevo",
    eligible: false,
  },
  {
    word: "equião",
    eligible: false,
  },
  {
    word: "equice",
    eligible: false,
  },
  {
    word: "equida",
    eligible: false,
  },
  {
    word: "équida",
    eligible: false,
  },
  {
    word: "equino",
    eligible: false,
  },
  {
    word: "equipa",
    eligible: false,
  },
  {
    word: "equipe",
    eligible: false,
  },
  {
    word: "equita",
    eligible: false,
  },
  {
    word: "eráceo",
    eligible: false,
  },
  {
    word: "Eraldo",
    eligible: false,
  },
  {
    word: "éramos",
    eligible: false,
  },
  {
    word: "erande",
    eligible: false,
  },
  {
    word: "erândi",
    eligible: false,
  },
  {
    word: "erário",
    eligible: false,
  },
  {
    word: "erarta",
    eligible: false,
  },
  {
    word: "Erasmo",
    eligible: false,
  },
  {
    word: "erbabo",
    eligible: false,
  },
  {
    word: "érbico",
    eligible: false,
  },
  {
    word: "erbina",
    eligible: false,
  },
  {
    word: "ercila",
    eligible: false,
  },
  {
    word: "érdimo",
    eligible: false,
  },
  {
    word: "erébia",
    eligible: false,
  },
  {
    word: "ereção",
    eligible: false,
  },
  {
    word: "erécia",
    eligible: false,
  },
  {
    word: "erecto",
    eligible: false,
  },
  {
    word: "erefuê",
    eligible: false,
  },
  {
    word: "erembo",
    eligible: false,
  },
  {
    word: "erêmia",
    eligible: false,
  },
  {
    word: "erense",
    eligible: false,
  },
  {
    word: "erequê",
    eligible: false,
  },
  {
    word: "erétia",
    eligible: false,
  },
  {
    word: "erétil",
    eligible: false,
  },
  {
    word: "eretor",
    eligible: false,
  },
  {
    word: "érgato",
    eligible: false,
  },
  {
    word: "erguer",
    eligible: false,
  },
  {
    word: "erical",
    eligible: false,
  },
  {
    word: "eriçar",
    eligible: false,
  },
  {
    word: "eríceo",
    eligible: false,
  },
  {
    word: "erício",
    eligible: false,
  },
  {
    word: "ericto",
    eligible: false,
  },
  {
    word: "erífia",
    eligible: false,
  },
  {
    word: "erigir",
    eligible: false,
  },
  {
    word: "Erildo",
    eligible: false,
  },
  {
    word: "erineu",
    eligible: false,
  },
  {
    word: "eriope",
    eligible: false,
  },
  {
    word: "eríopo",
    eligible: false,
  },
  {
    word: "erisma",
    eligible: false,
  },
  {
    word: "eritas",
    eligible: false,
  },
  {
    word: "eriteu",
    eligible: false,
  },
  {
    word: "eritio",
    eligible: false,
  },
  {
    word: "eritro",
    eligible: false,
  },
  {
    word: "ermelo",
    eligible: false,
  },
  {
    word: "ermida",
    eligible: false,
  },
  {
    word: "Ermino",
    eligible: false,
  },
  {
    word: "ermita",
    eligible: false,
  },
  {
    word: "Ernâni",
    eligible: false,
  },
  {
    word: "ernita",
    eligible: false,
  },
  {
    word: "eroder",
    eligible: false,
  },
  {
    word: "eródio",
    eligible: false,
  },
  {
    word: "erodir",
    eligible: false,
  },
  {
    word: "erosão",
    eligible: false,
  },
  {
    word: "erosar",
    eligible: false,
  },
  {
    word: "errata",
    eligible: false,
  },
  {
    word: "errino",
    eligible: false,
  },
  {
    word: "errita",
    eligible: false,
  },
  {
    word: "erucas",
    eligible: false,
  },
  {
    word: "erudir",
    eligible: false,
  },
  {
    word: "eruído",
    eligible: false,
  },
  {
    word: "ervaca",
    eligible: false,
  },
  {
    word: "ervano",
    eligible: false,
  },
  {
    word: "ervedo",
    eligible: false,
  },
  {
    word: "érvedo",
    eligible: false,
  },
  {
    word: "êrvedo",
    eligible: false,
  },
  {
    word: "erviço",
    eligible: false,
  },
  {
    word: "Ervino",
    eligible: false,
  },
  {
    word: "ervoar",
    eligible: false,
  },
  {
    word: "érvodo",
    eligible: false,
  },
  {
    word: "êrvodo",
    eligible: false,
  },
  {
    word: "ervoso",
    eligible: false,
  },
  {
    word: "esbafo",
    eligible: false,
  },
  {
    word: "escaço",
    eligible: false,
  },
  {
    word: "escada",
    eligible: false,
  },
  {
    word: "escafo",
    eligible: false,
  },
  {
    word: "escair",
    eligible: false,
  },
  {
    word: "escala",
    eligible: false,
  },
  {
    word: "escama",
    eligible: false,
  },
  {
    word: "escapa",
    eligible: false,
  },
  {
    word: "escape",
    eligible: false,
  },
  {
    word: "escaro",
    eligible: false,
  },
  {
    word: "escato",
    eligible: false,
  },
  {
    word: "escaum",
    eligible: false,
  },
  {
    word: "escava",
    eligible: false,
  },
  {
    word: "escina",
    eligible: false,
  },
  {
    word: "escoar",
    eligible: false,
  },
  {
    word: "Escola",
    eligible: false,
  },
  {
    word: "escola",
    eligible: false,
  },
  {
    word: "escope",
    eligible: false,
  },
  {
    word: "escopo",
    eligible: false,
  },
  {
    word: "éscops",
    eligible: false,
  },
  {
    word: "escora",
    eligible: false,
  },
  {
    word: "escote",
    eligible: false,
  },
  {
    word: "escoto",
    eligible: false,
  },
  {
    word: "escova",
    eligible: false,
  },
  {
    word: "escudo",
    eligible: false,
  },
  {
    word: "ésculo",
    eligible: false,
  },
  {
    word: "escuma",
    eligible: false,
  },
  {
    word: "escuna",
    eligible: false,
  },
  {
    word: "escura",
    eligible: false,
  },
  {
    word: "escuro",
    eligible: false,
  },
  {
    word: "escuso",
    eligible: false,
  },
  {
    word: "escuta",
    eligible: false,
  },
  {
    word: "esfece",
    eligible: false,
  },
  {
    word: "esfeco",
    eligible: false,
  },
  {
    word: "esfeno",
    eligible: false,
  },
  {
    word: "esfera",
    eligible: false,
  },
  {
    word: "esfero",
    eligible: false,
  },
  {
    word: "esfiar",
    eligible: false,
  },
  {
    word: "esfola",
    eligible: false,
  },
  {
    word: "esfria",
    eligible: false,
  },
  {
    word: "esgana",
    eligible: false,
  },
  {
    word: "esgoto",
    eligible: false,
  },
  {
    word: "Esídio",
    eligible: false,
  },
  {
    word: "esipra",
    eligible: false,
  },
  {
    word: "eslavo",
    eligible: false,
  },
  {
    word: "esmaga",
    eligible: false,
  },
  {
    word: "esmala",
    eligible: false,
  },
  {
    word: "esmear",
    eligible: false,
  },
  {
    word: "esmoer",
    eligible: false,
  },
  {
    word: "esnobe",
    eligible: false,
  },
  {
    word: "esnoga",
    eligible: false,
  },
  {
    word: "esnuar",
    eligible: false,
  },
  {
    word: "espaço",
    eligible: false,
  },
  {
    word: "espada",
    eligible: false,
  },
  {
    word: "espato",
    eligible: false,
  },
  {
    word: "espera",
    eligible: false,
  },
  {
    word: "éspera",
    eligible: false,
  },
  {
    word: "espeta",
    eligible: false,
  },
  {
    word: "espeto",
    eligible: false,
  },
  {
    word: "espião",
    eligible: false,
  },
  {
    word: "espiar",
    eligible: false,
  },
  {
    word: "espica",
    eligible: false,
  },
  {
    word: "espicé",
    eligible: false,
  },
  {
    word: "espiga",
    eligible: false,
  },
  {
    word: "espilo",
    eligible: false,
  },
  {
    word: "espino",
    eligible: false,
  },
  {
    word: "espins",
    eligible: false,
  },
  {
    word: "espira",
    eligible: false,
  },
  {
    word: "esplim",
    eligible: false,
  },
  {
    word: "espoar",
    eligible: false,
  },
  {
    word: "espola",
    eligible: false,
  },
  {
    word: "espora",
    eligible: false,
  },
  {
    word: "esporo",
    eligible: false,
  },
  {
    word: "esposo",
    eligible: false,
  },
  {
    word: "esprém",
    eligible: false,
  },
  {
    word: "esprue",
    eligible: false,
  },
  {
    word: "espuir",
    eligible: false,
  },
  {
    word: "espuma",
    eligible: false,
  },
  {
    word: "éssedo",
    eligible: false,
  },
  {
    word: "esseno",
    eligible: false,
  },
  {
    word: "essivo",
    eligible: false,
  },
  {
    word: "estaca",
    eligible: false,
  },
  {
    word: "Estado",
    eligible: false,
  },
  {
    word: "estado",
    eligible: false,
  },
  {
    word: "estalo",
    eligible: false,
  },
  {
    word: "estame",
    eligible: false,
  },
  {
    word: "estape",
    eligible: false,
  },
  {
    word: "estase",
    eligible: false,
  },
  {
    word: "estear",
    eligible: false,
  },
  {
    word: "esteba",
    eligible: false,
  },
  {
    word: "estefo",
    eligible: false,
  },
  {
    word: "esteio",
    eligible: false,
  },
  {
    word: "Estela",
    eligible: false,
  },
  {
    word: "estema",
    eligible: false,
  },
  {
    word: "esteno",
    eligible: false,
  },
  {
    word: "estepe",
    eligible: false,
  },
  {
    word: "estere",
    eligible: false,
  },
  {
    word: "estero",
    eligible: false,
  },
  {
    word: "estese",
    eligible: false,
  },
  {
    word: "esteso",
    eligible: false,
  },
  {
    word: "esteto",
    eligible: false,
  },
  {
    word: "estiar",
    eligible: false,
  },
  {
    word: "estiba",
    eligible: false,
  },
  {
    word: "estifa",
    eligible: false,
  },
  {
    word: "estilo",
    eligible: false,
  },
  {
    word: "estipe",
    eligible: false,
  },
  {
    word: "estojo",
    eligible: false,
  },
  {
    word: "estoma",
    eligible: false,
  },
  {
    word: "estore",
    eligible: false,
  },
  {
    word: "estral",
    eligible: false,
  },
  {
    word: "estrar",
    eligible: false,
  },
  {
    word: "estrém",
    eligible: false,
  },
  {
    word: "estrói",
    eligible: false,
  },
  {
    word: "estuar",
    eligible: false,
  },
  {
    word: "estube",
    eligible: false,
  },
  {
    word: "estudo",
    eligible: false,
  },
  {
    word: "estufa",
    eligible: false,
  },
  {
    word: "estupa",
    eligible: false,
  },
  {
    word: "ésulas",
    eligible: false,
  },
  {
    word: "esvair",
    eligible: false,
  },
  {
    word: "etambo",
    eligible: false,
  },
  {
    word: "etanal",
    eligible: false,
  },
  {
    word: "etanda",
    eligible: false,
  },
  {
    word: "etânio",
    eligible: false,
  },
  {
    word: "etanol",
    eligible: false,
  },
  {
    word: "etário",
    eligible: false,
  },
  {
    word: "etarra",
    eligible: false,
  },
  {
    word: "ételis",
    eligible: false,
  },
  {
    word: "etenil",
    eligible: false,
  },
  {
    word: "etenol",
    eligible: false,
  },
  {
    word: "eteral",
    eligible: false,
  },
  {
    word: "etéreo",
    eligible: false,
  },
  {
    word: "eterno",
    eligible: false,
  },
  {
    word: "eterol",
    eligible: false,
  },
  {
    word: "etésio",
    eligible: false,
  },
  {
    word: "etilal",
    eligible: false,
  },
  {
    word: "etilar",
    eligible: false,
  },
  {
    word: "etílio",
    eligible: false,
  },
  {
    word: "etinil",
    eligible: false,
  },
  {
    word: "etíope",
    eligible: false,
  },
  {
    word: "Étnico",
    eligible: false,
  },
  {
    word: "étnico",
    eligible: false,
  },
  {
    word: "etólio",
    eligible: false,
  },
  {
    word: "etomia",
    eligible: false,
  },
  {
    word: "etonam",
    eligible: false,
  },
  {
    word: "etopeu",
    eligible: false,
  },
  {
    word: "euarco",
    eligible: false,
  },
  {
    word: "eubage",
    eligible: false,
  },
  {
    word: "eubazo",
    eligible: false,
  },
  {
    word: "eubena",
    eligible: false,
  },
  {
    word: "eubria",
    eligible: false,
  },
  {
    word: "Êubulo",
    eligible: false,
  },
  {
    word: "êucare",
    eligible: false,
  },
  {
    word: "eucata",
    eligible: false,
  },
  {
    word: "êucero",
    eligible: false,
  },
  {
    word: "Êucles",
    eligible: false,
  },
  {
    word: "êucome",
    eligible: false,
  },
  {
    word: "eudema",
    eligible: false,
  },
  {
    word: "Eudemo",
    eligible: false,
  },
  {
    word: "Eudine",
    eligible: false,
  },
  {
    word: "eudose",
    eligible: false,
  },
  {
    word: "Eudson",
    eligible: false,
  },
  {
    word: "euedro",
    eligible: false,
  },
  {
    word: "euemia",
    eligible: false,
  },
  {
    word: "euexia",
    eligible: false,
  },
  {
    word: "eufono",
    eligible: false,
  },
  {
    word: "êufono",
    eligible: false,
  },
  {
    word: "eugira",
    eligible: false,
  },
  {
    word: "eulemo",
    eligible: false,
  },
  {
    word: "eulimo",
    eligible: false,
  },
  {
    word: "Eulino",
    eligible: false,
  },
  {
    word: "eulita",
    eligible: false,
  },
  {
    word: "êulofo",
    eligible: false,
  },
  {
    word: "êumene",
    eligible: false,
  },
  {
    word: "êumeno",
    eligible: false,
  },
  {
    word: "eumero",
    eligible: false,
  },
  {
    word: "eumida",
    eligible: false,
  },
  {
    word: "êumida",
    eligible: false,
  },
  {
    word: "euneia",
    eligible: false,
  },
  {
    word: "Eunice",
    eligible: false,
  },
  {
    word: "eunuco",
    eligible: false,
  },
  {
    word: "êupode",
    eligible: false,
  },
  {
    word: "Êuporo",
    eligible: false,
  },
  {
    word: "eureca",
    eligible: false,
  },
  {
    word: "eurema",
    eligible: false,
  },
  {
    word: "eurete",
    eligible: false,
  },
  {
    word: "eurial",
    eligible: false,
  },
  {
    word: "Eurico",
    eligible: false,
  },
  {
    word: "eurino",
    eligible: false,
  },
  {
    word: "êurino",
    eligible: false,
  },
  {
    word: "euripo",
    eligible: false,
  },
  {
    word: "eurite",
    eligible: false,
  },
  {
    word: "Eurodo",
    eligible: false,
  },
  {
    word: "Europa",
    eligible: false,
  },
  {
    word: "europa",
    eligible: false,
  },
  {
    word: "eusiro",
    eligible: false,
  },
  {
    word: "eusomo",
    eligible: false,
  },
  {
    word: "Êutico",
    eligible: false,
  },
  {
    word: "êutoco",
    eligible: false,
  },
  {
    word: "euzimo",
    eligible: false,
  },
  {
    word: "evadir",
    eligible: false,
  },
  {
    word: "evadno",
    eligible: false,
  },
  {
    word: "Évagon",
    eligible: false,
  },
  {
    word: "Evaldo",
    eligible: false,
  },
  {
    word: "evalve",
    eligible: false,
  },
  {
    word: "evalvo",
    eligible: false,
  },
  {
    word: "Evanda",
    eligible: false,
  },
  {
    word: "evânia",
    eligible: false,
  },
  {
    word: "evasão",
    eligible: false,
  },
  {
    word: "evazar",
    eligible: false,
  },
  {
    word: "eveíta",
    eligible: false,
  },
  {
    word: "Evélio",
    eligible: false,
  },
  {
    word: "evemia",
    eligible: false,
  },
  {
    word: "evento",
    eligible: false,
  },
  {
    word: "everso",
    eligible: false,
  },
  {
    word: "evexia",
    eligible: false,
  },
  {
    word: "evicto",
    eligible: false,
  },
  {
    word: "evímbi",
    eligible: false,
  },
  {
    word: "evirar",
    eligible: false,
  },
  {
    word: "evitar",
    eligible: false,
  },
  {
    word: "evocar",
    eligible: false,
  },
  {
    word: "evódia",
    eligible: false,
  },
  {
    word: "Evódio",
    eligible: false,
  },
  {
    word: "evolar",
    eligible: false,
  },
  {
    word: "Ewbank",
    eligible: false,
  },
  {
    word: "exação",
    eligible: false,
  },
  {
    word: "exalar",
    eligible: false,
  },
  {
    word: "exalos",
    eligible: false,
  },
  {
    word: "exames",
    eligible: false,
  },
  {
    word: "exania",
    eligible: false,
  },
  {
    word: "exarar",
    eligible: false,
  },
  {
    word: "exarco",
    eligible: false,
  },
  {
    word: "exarma",
    eligible: false,
  },
  {
    word: "exator",
    eligible: false,
  },
  {
    word: "exceto",
    eligible: false,
  },
  {
    word: "êxedra",
    eligible: false,
  },
  {
    word: "exergo",
    eligible: false,
  },
  {
    word: "exibir",
    eligible: false,
  },
  {
    word: "exício",
    eligible: false,
  },
  {
    word: "exídia",
    eligible: false,
  },
  {
    word: "exigir",
    eligible: false,
  },
  {
    word: "exíguo",
    eligible: false,
  },
  {
    word: "exilar",
    eligible: false,
  },
  {
    word: "exílio",
    eligible: false,
  },
  {
    word: "exímio",
    eligible: false,
  },
  {
    word: "eximir",
    eligible: false,
  },
  {
    word: "exitar",
    eligible: false,
  },
  {
    word: "exódio",
    eligible: false,
  },
  {
    word: "exorar",
    eligible: false,
  },
  {
    word: "exorca",
    eligible: false,
  },
  {
    word: "expiar",
    eligible: false,
  },
  {
    word: "exstar",
    eligible: false,
  },
  {
    word: "exsuar",
    eligible: false,
  },
  {
    word: "êxtase",
    eligible: false,
  },
  {
    word: "êxtero",
    eligible: false,
  },
  {
    word: "exular",
    eligible: false,
  },
  {
    word: "exumar",
    eligible: false,
  },
  {
    word: "exúvio",
    eligible: false,
  },
  {
    word: "Ezeque",
    eligible: false,
  },
  {
    word: "ezinho",
    eligible: false,
  },
  {
    word: "eznita",
    eligible: false,
  },
  {
    word: "ezrina",
    eligible: false,
  },
  {
    word: "ezteri",
    eligible: false,
  },
  {
    word: "fabale",
    eligible: false,
  },
  {
    word: "fabela",
    eligible: false,
  },
  {
    word: "fabril",
    eligible: false,
  },
  {
    word: "fábula",
    eligible: false,
  },
  {
    word: "facada",
    eligible: false,
  },
  {
    word: "facaio",
    eligible: false,
  },
  {
    word: "facané",
    eligible: false,
  },
  {
    word: "facção",
    eligible: false,
  },
  {
    word: "facear",
    eligible: false,
  },
  {
    word: "faceta",
    eligible: false,
  },
  {
    word: "fachar",
    eligible: false,
  },
  {
    word: "fachos",
    eligible: false,
  },
  {
    word: "facial",
    eligible: false,
  },
  {
    word: "fácies",
    eligible: false,
  },
  {
    word: "facite",
    eligible: false,
  },
  {
    word: "facoma",
    eligible: false,
  },
  {
    word: "facote",
    eligible: false,
  },
  {
    word: "façudo",
    eligible: false,
  },
  {
    word: "fácula",
    eligible: false,
  },
  {
    word: "fadado",
    eligible: false,
  },
  {
    word: "fadiço",
    eligible: false,
  },
  {
    word: "fádico",
    eligible: false,
  },
  {
    word: "fadiga",
    eligible: false,
  },
  {
    word: "faenga",
    eligible: false,
  },
  {
    word: "Faetec",
    eligible: false,
  },
  {
    word: "faeton",
    eligible: false,
  },
  {
    word: "fáeton",
    eligible: false,
  },
  {
    word: "Faferj",
    eligible: false,
  },
  {
    word: "fagale",
    eligible: false,
  },
  {
    word: "fágara",
    eligible: false,
  },
  {
    word: "fagina",
    eligible: false,
  },
  {
    word: "Fagner",
    eligible: false,
  },
  {
    word: "fagote",
    eligible: false,
  },
  {
    word: "fainar",
    eligible: false,
  },
  {
    word: "fairar",
    eligible: false,
  },
  {
    word: "faisão",
    eligible: false,
  },
  {
    word: "faísco",
    eligible: false,
  },
  {
    word: "faisoa",
    eligible: false,
  },
  {
    word: "faixar",
    eligible: false,
  },
  {
    word: "faixas",
    eligible: false,
  },
  {
    word: "fajana",
    eligible: false,
  },
  {
    word: "fajeca",
    eligible: false,
  },
  {
    word: "fajoco",
    eligible: false,
  },
  {
    word: "falaca",
    eligible: false,
  },
  {
    word: "falace",
    eligible: false,
  },
  {
    word: "falaço",
    eligible: false,
  },
  {
    word: "falado",
    eligible: false,
  },
  {
    word: "falcão",
    eligible: false,
  },
  {
    word: "falcar",
    eligible: false,
  },
  {
    word: "faldra",
    eligible: false,
  },
  {
    word: "falena",
    eligible: false,
  },
  {
    word: "faleno",
    eligible: false,
  },
  {
    word: "fálera",
    eligible: false,
  },
  {
    word: "falgar",
    eligible: false,
  },
  {
    word: "falhão",
    eligible: false,
  },
  {
    word: "falhar",
    eligible: false,
  },
  {
    word: "falhos",
    eligible: false,
  },
  {
    word: "fálico",
    eligible: false,
  },
  {
    word: "falija",
    eligible: false,
  },
  {
    word: "falina",
    eligible: false,
  },
  {
    word: "falite",
    eligible: false,
  },
  {
    word: "falope",
    eligible: false,
  },
  {
    word: "falsar",
    eligible: false,
  },
  {
    word: "falsas",
    eligible: false,
  },
  {
    word: "falsia",
    eligible: false,
  },
  {
    word: "falsos",
    eligible: false,
  },
  {
    word: "faltar",
    eligible: false,
  },
  {
    word: "faltos",
    eligible: false,
  },
  {
    word: "faludo",
    eligible: false,
  },
  {
    word: "falupa",
    eligible: false,
  },
  {
    word: "famanã",
    eligible: false,
  },
  {
    word: "famego",
    eligible: false,
  },
  {
    word: "famoso",
    eligible: false,
  },
  {
    word: "fâmulo",
    eligible: false,
  },
  {
    word: "fanaco",
    eligible: false,
  },
  {
    word: "fanate",
    eligible: false,
  },
  {
    word: "fancho",
    eligible: false,
  },
  {
    word: "faneco",
    eligible: false,
  },
  {
    word: "fanega",
    eligible: false,
  },
  {
    word: "fanero",
    eligible: false,
  },
  {
    word: "fânero",
    eligible: false,
  },
  {
    word: "fanfar",
    eligible: false,
  },
  {
    word: "fanfas",
    eligible: false,
  },
  {
    word: "fanóis",
    eligible: false,
  },
  {
    word: "fanqui",
    eligible: false,
  },
  {
    word: "fantil",
    eligible: false,
  },
  {
    word: "fantim",
    eligible: false,
  },
  {
    word: "fantom",
    eligible: false,
  },
  {
    word: "faquim",
    eligible: false,
  },
  {
    word: "faquir",
    eligible: false,
  },
  {
    word: "Farads",
    eligible: false,
  },
  {
    word: "fárbio",
    eligible: false,
  },
  {
    word: "fardão",
    eligible: false,
  },
  {
    word: "fardar",
    eligible: false,
  },
  {
    word: "fardel",
    eligible: false,
  },
  {
    word: "fardos",
    eligible: false,
  },
  {
    word: "farelo",
    eligible: false,
  },
  {
    word: "farias",
    eligible: false,
  },
  {
    word: "farita",
    eligible: false,
  },
  {
    word: "farnel",
    eligible: false,
  },
  {
    word: "farofa",
    eligible: false,
  },
  {
    word: "farota",
    eligible: false,
  },
  {
    word: "farpão",
    eligible: false,
  },
  {
    word: "farpar",
    eligible: false,
  },
  {
    word: "farrão",
    eligible: false,
  },
  {
    word: "farrar",
    eligible: false,
  },
  {
    word: "fárreo",
    eligible: false,
  },
  {
    word: "fartão",
    eligible: false,
  },
  {
    word: "fartar",
    eligible: false,
  },
  {
    word: "fártel",
    eligible: false,
  },
  {
    word: "fártem",
    eligible: false,
  },
  {
    word: "fartos",
    eligible: false,
  },
  {
    word: "fartum",
    eligible: false,
  },
  {
    word: "farula",
    eligible: false,
  },
  {
    word: "fascal",
    eligible: false,
  },
  {
    word: "fasces",
    eligible: false,
  },
  {
    word: "fáscio",
    eligible: false,
  },
  {
    word: "fasear",
    eligible: false,
  },
  {
    word: "fásido",
    eligible: false,
  },
  {
    word: "fastar",
    eligible: false,
  },
  {
    word: "fastio",
    eligible: false,
  },
  {
    word: "fastos",
    eligible: false,
  },
  {
    word: "fataca",
    eligible: false,
  },
  {
    word: "fataça",
    eligible: false,
  },
  {
    word: "fatada",
    eligible: false,
  },
  {
    word: "fateco",
    eligible: false,
  },
  {
    word: "fateia",
    eligible: false,
  },
  {
    word: "fatela",
    eligible: false,
  },
  {
    word: "fatiar",
    eligible: false,
  },
  {
    word: "fatias",
    eligible: false,
  },
  {
    word: "fático",
    eligible: false,
  },
  {
    word: "Fátima",
    eligible: false,
  },
  {
    word: "fatolá",
    eligible: false,
  },
  {
    word: "fátsia",
    eligible: false,
  },
  {
    word: "fatual",
    eligible: false,
  },
  {
    word: "fátuos",
    eligible: false,
  },
  {
    word: "faucal",
    eligible: false,
  },
  {
    word: "faular",
    eligible: false,
  },
  {
    word: "faúlho",
    eligible: false,
  },
  {
    word: "fáurea",
    eligible: false,
  },
  {
    word: "fausel",
    eligible: false,
  },
  {
    word: "fausto",
    eligible: false,
  },
  {
    word: "fautor",
    eligible: false,
  },
  {
    word: "favaco",
    eligible: false,
  },
  {
    word: "favais",
    eligible: false,
  },
  {
    word: "faveca",
    eligible: false,
  },
  {
    word: "faveco",
    eligible: false,
  },
  {
    word: "favela",
    eligible: false,
  },
  {
    word: "faveta",
    eligible: false,
  },
  {
    word: "favica",
    eligible: false,
  },
  {
    word: "fávico",
    eligible: false,
  },
  {
    word: "favila",
    eligible: false,
  },
  {
    word: "favola",
    eligible: false,
  },
  {
    word: "favona",
    eligible: false,
  },
  {
    word: "favoso",
    eligible: false,
  },
  {
    word: "faxada",
    eligible: false,
  },
  {
    word: "faxear",
    eligible: false,
  },
  {
    word: "faxeta",
    eligible: false,
  },
  {
    word: "faxina",
    eligible: false,
  },
  {
    word: "faxino",
    eligible: false,
  },
  {
    word: "feácio",
    eligible: false,
  },
  {
    word: "febrão",
    eligible: false,
  },
  {
    word: "febras",
    eligible: false,
  },
  {
    word: "febril",
    eligible: false,
  },
  {
    word: "fechal",
    eligible: false,
  },
  {
    word: "fechar",
    eligible: false,
  },
  {
    word: "fechas",
    eligible: false,
  },
  {
    word: "fechos",
    eligible: false,
  },
  {
    word: "fecial",
    eligible: false,
  },
  {
    word: "fécula",
    eligible: false,
  },
  {
    word: "fedaim",
    eligible: false,
  },
  {
    word: "Fedato",
    eligible: false,
  },
  {
    word: "fedega",
    eligible: false,
  },
  {
    word: "fedida",
    eligible: false,
  },
  {
    word: "fedido",
    eligible: false,
  },
  {
    word: "fedoca",
    eligible: false,
  },
  {
    word: "feduço",
    eligible: false,
  },
  {
    word: "feense",
    eligible: false,
  },
  {
    word: "feeria",
    eligible: false,
  },
  {
    word: "féerie",
    eligible: false,
  },
  {
    word: "feiabá",
    eligible: false,
  },
  {
    word: "feição",
    eligible: false,
  },
  {
    word: "feieza",
    eligible: false,
  },
  {
    word: "feijão",
    eligible: false,
  },
  {
    word: "feijoa",
    eligible: false,
  },
  {
    word: "feiona",
    eligible: false,
  },
  {
    word: "feioso",
    eligible: false,
  },
  {
    word: "feiral",
    eligible: false,
  },
  {
    word: "feirão",
    eligible: false,
  },
  {
    word: "feirar",
    eligible: false,
  },
  {
    word: "Feiras",
    eligible: false,
  },
  {
    word: "feiras",
    eligible: false,
  },
  {
    word: "feirio",
    eligible: false,
  },
  {
    word: "feísmo",
    eligible: false,
  },
  {
    word: "feital",
    eligible: false,
  },
  {
    word: "feitão",
    eligible: false,
  },
  {
    word: "feitar",
    eligible: false,
  },
  {
    word: "feitas",
    eligible: false,
  },
  {
    word: "feitém",
    eligible: false,
  },
  {
    word: "feitio",
    eligible: false,
  },
  {
    word: "feitor",
    eligible: false,
  },
  {
    word: "feitos",
    eligible: false,
  },
  {
    word: "feiudo",
    eligible: false,
  },
  {
    word: "feiula",
    eligible: false,
  },
  {
    word: "feiume",
    eligible: false,
  },
  {
    word: "feiura",
    eligible: false,
  },
  {
    word: "feixas",
    eligible: false,
  },
  {
    word: "felame",
    eligible: false,
  },
  {
    word: "felata",
    eligible: false,
  },
  {
    word: "feleca",
    eligible: false,
  },
  {
    word: "feleme",
    eligible: false,
  },
  {
    word: "félida",
    eligible: false,
  },
  {
    word: "felino",
    eligible: false,
  },
  {
    word: "Felipe",
    eligible: false,
  },
  {
    word: "feloca",
    eligible: false,
  },
  {
    word: "felose",
    eligible: false,
  },
  {
    word: "feloso",
    eligible: false,
  },
  {
    word: "felpar",
    eligible: false,
  },
  {
    word: "felupe",
    eligible: false,
  },
  {
    word: "felupo",
    eligible: false,
  },
  {
    word: "fembar",
    eligible: false,
  },
  {
    word: "femeal",
    eligible: false,
  },
  {
    word: "femear",
    eligible: false,
  },
  {
    word: "fêmeas",
    eligible: false,
  },
  {
    word: "femeel",
    eligible: false,
  },
  {
    word: "femenê",
    eligible: false,
  },
  {
    word: "fêmeos",
    eligible: false,
  },
  {
    word: "fêmico",
    eligible: false,
  },
  {
    word: "fenace",
    eligible: false,
  },
  {
    word: "fenato",
    eligible: false,
  },
  {
    word: "fender",
    eligible: false,
  },
  {
    word: "feneco",
    eligible: false,
  },
  {
    word: "fenela",
    eligible: false,
  },
  {
    word: "fenfém",
    eligible: false,
  },
  {
    word: "fengir",
    eligible: false,
  },
  {
    word: "fenice",
    eligible: false,
  },
  {
    word: "fênico",
    eligible: false,
  },
  {
    word: "fenilo",
    eligible: false,
  },
  {
    word: "fenona",
    eligible: false,
  },
  {
    word: "fental",
    eligible: false,
  },
  {
    word: "fenusa",
    eligible: false,
  },
  {
    word: "feódio",
    eligible: false,
  },
  {
    word: "ferace",
    eligible: false,
  },
  {
    word: "feresa",
    eligible: false,
  },
  {
    word: "fereza",
    eligible: false,
  },
  {
    word: "ferial",
    eligible: false,
  },
  {
    word: "feriar",
    eligible: false,
  },
  {
    word: "feribá",
    eligible: false,
  },
  {
    word: "ferido",
    eligible: false,
  },
  {
    word: "ferino",
    eligible: false,
  },
  {
    word: "férmio",
    eligible: false,
  },
  {
    word: "Fernão",
    eligible: false,
  },
  {
    word: "fernão",
    eligible: false,
  },
  {
    word: "fernel",
    eligible: false,
  },
  {
    word: "feroce",
    eligible: false,
  },
  {
    word: "Féroes",
    eligible: false,
  },
  {
    word: "feroês",
    eligible: false,
  },
  {
    word: "ferral",
    eligible: false,
  },
  {
    word: "ferrão",
    eligible: false,
  },
  {
    word: "ferrar",
    eligible: false,
  },
  {
    word: "Ferraz",
    eligible: false,
  },
  {
    word: "férrea",
    eligible: false,
  },
  {
    word: "férreo",
    eligible: false,
  },
  {
    word: "Ferrer",
    eligible: false,
  },
  {
    word: "ferror",
    eligible: false,
  },
  {
    word: "ferros",
    eligible: false,
  },
  {
    word: "fértil",
    eligible: false,
  },
  {
    word: "fertor",
    eligible: false,
  },
  {
    word: "feruer",
    eligible: false,
  },
  {
    word: "férula",
    eligible: false,
  },
  {
    word: "ferusa",
    eligible: false,
  },
  {
    word: "ferver",
    eligible: false,
  },
  {
    word: "fervor",
    eligible: false,
  },
  {
    word: "fesapo",
    eligible: false,
  },
  {
    word: "festão",
    eligible: false,
  },
  {
    word: "festar",
    eligible: false,
  },
  {
    word: "festas",
    eligible: false,
  },
  {
    word: "festim",
    eligible: false,
  },
  {
    word: "festor",
    eligible: false,
  },
  {
    word: "fétida",
    eligible: false,
  },
  {
    word: "fétido",
    eligible: false,
  },
  {
    word: "Fetraf",
    eligible: false,
  },
  {
    word: "fetuca",
    eligible: false,
  },
  {
    word: "fetusa",
    eligible: false,
  },
  {
    word: "feudal",
    eligible: false,
  },
  {
    word: "fêvera",
    eligible: false,
  },
  {
    word: "fezada",
    eligible: false,
  },
  {
    word: "fezais",
    eligible: false,
  },
  {
    word: "fiação",
    eligible: false,
  },
  {
    word: "fiacre",
    eligible: false,
  },
  {
    word: "fiadas",
    eligible: false,
  },
  {
    word: "fialho",
    eligible: false,
  },
  {
    word: "fianço",
    eligible: false,
  },
  {
    word: "fiango",
    eligible: false,
  },
  {
    word: "fianho",
    eligible: false,
  },
  {
    word: "fiasco",
    eligible: false,
  },
  {
    word: "fiável",
    eligible: false,
  },
  {
    word: "fíbula",
    eligible: false,
  },
  {
    word: "ficato",
    eligible: false,
  },
  {
    word: "ficção",
    eligible: false,
  },
  {
    word: "ficela",
    eligible: false,
  },
  {
    word: "fichar",
    eligible: false,
  },
  {
    word: "fichoa",
    eligible: false,
  },
  {
    word: "ficina",
    eligible: false,
  },
  {
    word: "ficite",
    eligible: false,
  },
  {
    word: "ficore",
    eligible: false,
  },
  {
    word: "fíctil",
    eligible: false,
  },
  {
    word: "fictor",
    eligible: false,
  },
  {
    word: "fícula",
    eligible: false,
  },
  {
    word: "fieira",
    eligible: false,
  },
  {
    word: "fieiro",
    eligible: false,
  },
  {
    word: "fieito",
    eligible: false,
  },
  {
    word: "figada",
    eligible: false,
  },
  {
    word: "fígado",
    eligible: false,
  },
  {
    word: "fígaro",
    eligible: false,
  },
  {
    word: "figite",
    eligible: false,
  },
  {
    word: "figote",
    eligible: false,
  },
  {
    word: "fígulo",
    eligible: false,
  },
  {
    word: "figura",
    eligible: false,
  },
  {
    word: "fijola",
    eligible: false,
  },
  {
    word: "filaça",
    eligible: false,
  },
  {
    word: "filago",
    eligible: false,
  },
  {
    word: "filali",
    eligible: false,
  },
  {
    word: "filáli",
    eligible: false,
  },
  {
    word: "filame",
    eligible: false,
  },
  {
    word: "fileco",
    eligible: false,
  },
  {
    word: "filele",
    eligible: false,
  },
  {
    word: "fileno",
    eligible: false,
  },
  {
    word: "filhão",
    eligible: false,
  },
  {
    word: "filhar",
    eligible: false,
  },
  {
    word: "filhas",
    eligible: false,
  },
  {
    word: "filhos",
    eligible: false,
  },
  {
    word: "filial",
    eligible: false,
  },
  {
    word: "filiar",
    eligible: false,
  },
  {
    word: "fílica",
    eligible: false,
  },
  {
    word: "filine",
    eligible: false,
  },
  {
    word: "filipe",
    eligible: false,
  },
  {
    word: "filite",
    eligible: false,
  },
  {
    word: "filito",
    eligible: false,
  },
  {
    word: "filmão",
    eligible: false,
  },
  {
    word: "filmar",
    eligible: false,
  },
  {
    word: "filmes",
    eligible: false,
  },
  {
    word: "filode",
    eligible: false,
  },
  {
    word: "filoma",
    eligible: false,
  },
  {
    word: "filoso",
    eligible: false,
  },
  {
    word: "filtro",
    eligible: false,
  },
  {
    word: "fílula",
    eligible: false,
  },
  {
    word: "filuro",
    eligible: false,
  },
  {
    word: "fímata",
    eligible: false,
  },
  {
    word: "fimbra",
    eligible: false,
  },
  {
    word: "fímico",
    eligible: false,
  },
  {
    word: "fimose",
    eligible: false,
  },
  {
    word: "finado",
    eligible: false,
  },
  {
    word: "finais",
    eligible: false,
  },
  {
    word: "fincão",
    eligible: false,
  },
  {
    word: "fincar",
    eligible: false,
  },
  {
    word: "findar",
    eligible: false,
  },
  {
    word: "findos",
    eligible: false,
  },
  {
    word: "fineza",
    eligible: false,
  },
  {
    word: "finfar",
    eligible: false,
  },
  {
    word: "finfim",
    eligible: false,
  },
  {
    word: "fingir",
    eligible: false,
  },
  {
    word: "finice",
    eligible: false,
  },
  {
    word: "fínico",
    eligible: false,
  },
  {
    word: "finito",
    eligible: false,
  },
  {
    word: "finoto",
    eligible: false,
  },
  {
    word: "fintão",
    eligible: false,
  },
  {
    word: "fintar",
    eligible: false,
  },
  {
    word: "finura",
    eligible: false,
  },
  {
    word: "fiolho",
    eligible: false,
  },
  {
    word: "fiomel",
    eligible: false,
  },
  {
    word: "fiorde",
    eligible: false,
  },
  {
    word: "fípsia",
    eligible: false,
  },
  {
    word: "firaco",
    eligible: false,
  },
  {
    word: "firmal",
    eligible: false,
  },
  {
    word: "firmão",
    eligible: false,
  },
  {
    word: "firmar",
    eligible: false,
  },
  {
    word: "Firmas",
    eligible: false,
  },
  {
    word: "firmas",
    eligible: false,
  },
  {
    word: "firmes",
    eligible: false,
  },
  {
    word: "firola",
    eligible: false,
  },
  {
    word: "firrar",
    eligible: false,
  },
  {
    word: "firros",
    eligible: false,
  },
  {
    word: "firula",
    eligible: false,
  },
  {
    word: "firuli",
    eligible: false,
  },
  {
    word: "fisale",
    eligible: false,
  },
  {
    word: "físalo",
    eligible: false,
  },
  {
    word: "físaro",
    eligible: false,
  },
  {
    word: "Fiscal",
    eligible: false,
  },
  {
    word: "fiscal",
    eligible: false,
  },
  {
    word: "físcia",
    eligible: false,
  },
  {
    word: "fisema",
    eligible: false,
  },
  {
    word: "fisese",
    eligible: false,
  },
  {
    word: "fisgar",
    eligible: false,
  },
  {
    word: "Físico",
    eligible: false,
  },
  {
    word: "físico",
    eligible: false,
  },
  {
    word: "fisose",
    eligible: false,
  },
  {
    word: "fissão",
    eligible: false,
  },
  {
    word: "físsil",
    eligible: false,
  },
  {
    word: "fistor",
    eligible: false,
  },
  {
    word: "fistra",
    eligible: false,
  },
  {
    word: "fitaça",
    eligible: false,
  },
  {
    word: "fitato",
    eligible: false,
  },
  {
    word: "fítico",
    eligible: false,
  },
  {
    word: "fitina",
    eligible: false,
  },
  {
    word: "fitona",
    eligible: false,
  },
  {
    word: "fitose",
    eligible: false,
  },
  {
    word: "fiunça",
    eligible: false,
  },
  {
    word: "fiunco",
    eligible: false,
  },
  {
    word: "fivela",
    eligible: false,
  },
  {
    word: "fixado",
    eligible: false,
  },
  {
    word: "fixura",
    eligible: false,
  },
  {
    word: "flache",
    eligible: false,
  },
  {
    word: "flamão",
    eligible: false,
  },
  {
    word: "flamar",
    eligible: false,
  },
  {
    word: "flamas",
    eligible: false,
  },
  {
    word: "flambê",
    eligible: false,
  },
  {
    word: "flâmeo",
    eligible: false,
  },
  {
    word: "flanar",
    eligible: false,
  },
  {
    word: "flanco",
    eligible: false,
  },
  {
    word: "flande",
    eligible: false,
  },
  {
    word: "flange",
    eligible: false,
  },
  {
    word: "flarte",
    eligible: false,
  },
  {
    word: "Flávio",
    eligible: false,
  },
  {
    word: "flavor",
    eligible: false,
  },
  {
    word: "flavus",
    eligible: false,
  },
  {
    word: "flebês",
    eligible: false,
  },
  {
    word: "flébil",
    eligible: false,
  },
  {
    word: "flecha",
    eligible: false,
  },
  {
    word: "flegma",
    eligible: false,
  },
  {
    word: "fleima",
    eligible: false,
  },
  {
    word: "fleína",
    eligible: false,
  },
  {
    word: "flente",
    eligible: false,
  },
  {
    word: "fléolo",
    eligible: false,
  },
  {
    word: "fletir",
    eligible: false,
  },
  {
    word: "fletor",
    eligible: false,
  },
  {
    word: "fleuma",
    eligible: false,
  },
  {
    word: "flexão",
    eligible: false,
  },
  {
    word: "flexar",
    eligible: false,
  },
  {
    word: "fléxil",
    eligible: false,
  },
  {
    word: "flexor",
    eligible: false,
  },
  {
    word: "flimar",
    eligible: false,
  },
  {
    word: "flipar",
    eligible: false,
  },
  {
    word: "flíper",
    eligible: false,
  },
  {
    word: "flitar",
    eligible: false,
  },
  {
    word: "flocar",
    eligible: false,
  },
  {
    word: "flocha",
    eligible: false,
  },
  {
    word: "flocos",
    eligible: false,
  },
  {
    word: "floema",
    eligible: false,
  },
  {
    word: "Floraí",
    eligible: false,
  },
  {
    word: "floral",
    eligible: false,
  },
  {
    word: "florão",
    eligible: false,
  },
  {
    word: "florar",
    eligible: false,
  },
  {
    word: "flóreo",
    eligible: false,
  },
  {
    word: "flores",
    eligible: false,
  },
  {
    word: "florim",
    eligible: false,
  },
  {
    word: "florir",
    eligible: false,
  },
  {
    word: "floris",
    eligible: false,
  },
  {
    word: "flotar",
    eligible: false,
  },
  {
    word: "flotel",
    eligible: false,
  },
  {
    word: "fluato",
    eligible: false,
  },
  {
    word: "flúgea",
    eligible: false,
  },
  {
    word: "flúmen",
    eligible: false,
  },
  {
    word: "flútuo",
    eligible: false,
  },
  {
    word: "fluxão",
    eligible: false,
  },
  {
    word: "fóbico",
    eligible: false,
  },
  {
    word: "foboca",
    eligible: false,
  },
  {
    word: "focale",
    eligible: false,
  },
  {
    word: "focena",
    eligible: false,
  },
  {
    word: "fócida",
    eligible: false,
  },
  {
    word: "foeira",
    eligible: false,
  },
  {
    word: "fofana",
    eligible: false,
  },
  {
    word: "fofice",
    eligible: false,
  },
  {
    word: "fofoli",
    eligible: false,
  },
  {
    word: "fofura",
    eligible: false,
  },
  {
    word: "fogaça",
    eligible: false,
  },
  {
    word: "fogoió",
    eligible: false,
  },
  {
    word: "fogone",
    eligible: false,
  },
  {
    word: "fogoso",
    eligible: false,
  },
  {
    word: "foguéu",
    eligible: false,
  },
  {
    word: "foição",
    eligible: false,
  },
  {
    word: "foiçar",
    eligible: false,
  },
  {
    word: "foísmo",
    eligible: false,
  },
  {
    word: "foísta",
    eligible: false,
  },
  {
    word: "fólade",
    eligible: false,
  },
  {
    word: "folato",
    eligible: false,
  },
  {
    word: "fôlder",
    eligible: false,
  },
  {
    word: "folear",
    eligible: false,
  },
  {
    word: "fôlego",
    eligible: false,
  },
  {
    word: "folepo",
    eligible: false,
  },
  {
    word: "folgar",
    eligible: false,
  },
  {
    word: "folgaz",
    eligible: false,
  },
  {
    word: "folhal",
    eligible: false,
  },
  {
    word: "folhão",
    eligible: false,
  },
  {
    word: "folhar",
    eligible: false,
  },
  {
    word: "folhas",
    eligible: false,
  },
  {
    word: "folhos",
    eligible: false,
  },
  {
    word: "folião",
    eligible: false,
  },
  {
    word: "foliar",
    eligible: false,
  },
  {
    word: "folias",
    eligible: false,
  },
  {
    word: "fólico",
    eligible: false,
  },
  {
    word: "folipo",
    eligible: false,
  },
  {
    word: "folosa",
    eligible: false,
  },
  {
    word: "folote",
    eligible: false,
  },
  {
    word: "fonado",
    eligible: false,
  },
  {
    word: "fonção",
    eligible: false,
  },
  {
    word: "fondue",
    eligible: false,
  },
  {
    word: "foneca",
    eligible: false,
  },
  {
    word: "fonema",
    eligible: false,
  },
  {
    word: "fonfom",
    eligible: false,
  },
  {
    word: "fonice",
    eligible: false,
  },
  {
    word: "fônico",
    eligible: false,
  },
  {
    word: "fonola",
    eligible: false,
  },
  {
    word: "fontal",
    eligible: false,
  },
  {
    word: "fontes",
    eligible: false,
  },
  {
    word: "forais",
    eligible: false,
  },
  {
    word: "forame",
    eligible: false,
  },
  {
    word: "forano",
    eligible: false,
  },
  {
    word: "forata",
    eligible: false,
  },
  {
    word: "forcão",
    eligible: false,
  },
  {
    word: "forção",
    eligible: false,
  },
  {
    word: "forcar",
    eligible: false,
  },
  {
    word: "forçar",
    eligible: false,
  },
  {
    word: "forças",
    eligible: false,
  },
  {
    word: "forcaz",
    eligible: false,
  },
  {
    word: "foreca",
    eligible: false,
  },
  {
    word: "forese",
    eligible: false,
  },
  {
    word: "fórfex",
    eligible: false,
  },
  {
    word: "forgão",
    eligible: false,
  },
  {
    word: "forgul",
    eligible: false,
  },
  {
    word: "fórico",
    eligible: false,
  },
  {
    word: "fórida",
    eligible: false,
  },
  {
    word: "forjar",
    eligible: false,
  },
  {
    word: "formal",
    eligible: false,
  },
  {
    word: "formão",
    eligible: false,
  },
  {
    word: "formar",
    eligible: false,
  },
  {
    word: "formas",
    eligible: false,
  },
  {
    word: "formil",
    eligible: false,
  },
  {
    word: "fórmio",
    eligible: false,
  },
  {
    word: "formol",
    eligible: false,
  },
  {
    word: "fornir",
    eligible: false,
  },
  {
    word: "fórnix",
    eligible: false,
  },
  {
    word: "fornos",
    eligible: false,
  },
  {
    word: "foroia",
    eligible: false,
  },
  {
    word: "forona",
    eligible: false,
  },
  {
    word: "forrar",
    eligible: false,
  },
  {
    word: "forras",
    eligible: false,
  },
  {
    word: "forros",
    eligible: false,
  },
  {
    word: "Fortes",
    eligible: false,
  },
  {
    word: "fortes",
    eligible: false,
  },
  {
    word: "fortim",
    eligible: false,
  },
  {
    word: "fortum",
    eligible: false,
  },
  {
    word: "foscar",
    eligible: false,
  },
  {
    word: "foscos",
    eligible: false,
  },
  {
    word: "fosfal",
    eligible: false,
  },
  {
    word: "fósmeo",
    eligible: false,
  },
  {
    word: "fossão",
    eligible: false,
  },
  {
    word: "fossar",
    eligible: false,
  },
  {
    word: "fossas",
    eligible: false,
  },
  {
    word: "fóssil",
    eligible: false,
  },
  {
    word: "fossos",
    eligible: false,
  },
  {
    word: "fotado",
    eligible: false,
  },
  {
    word: "fotear",
    eligible: false,
  },
  {
    word: "foteno",
    eligible: false,
  },
  {
    word: "fótico",
    eligible: false,
  },
  {
    word: "fótons",
    eligible: false,
  },
  {
    word: "foução",
    eligible: false,
  },
  {
    word: "fouçar",
    eligible: false,
  },
  {
    word: "fovila",
    eligible: false,
  },
  {
    word: "fovoco",
    eligible: false,
  },
  {
    word: "fóxida",
    eligible: false,
  },
  {
    word: "foxino",
    eligible: false,
  },
  {
    word: "fração",
    eligible: false,
  },
  {
    word: "fracar",
    eligible: false,
  },
  {
    word: "fracas",
    eligible: false,
  },
  {
    word: "fracos",
    eligible: false,
  },
  {
    word: "fradar",
    eligible: false,
  },
  {
    word: "frades",
    eligible: false,
  },
  {
    word: "fradil",
    eligible: false,
  },
  {
    word: "fragal",
    eligible: false,
  },
  {
    word: "fragão",
    eligible: false,
  },
  {
    word: "frágil",
    eligible: false,
  },
  {
    word: "fragma",
    eligible: false,
  },
  {
    word: "fragor",
    eligible: false,
  },
  {
    word: "frágua",
    eligible: false,
  },
  {
    word: "fraire",
    eligible: false,
  },
  {
    word: "fraita",
    eligible: false,
  },
  {
    word: "fralda",
    eligible: false,
  },
  {
    word: "frâmea",
    eligible: false,
  },
  {
    word: "França",
    eligible: false,
  },
  {
    word: "franca",
    eligible: false,
  },
  {
    word: "frança",
    eligible: false,
  },
  {
    word: "Franco",
    eligible: false,
  },
  {
    word: "franco",
    eligible: false,
  },
  {
    word: "frande",
    eligible: false,
  },
  {
    word: "franga",
    eligible: false,
  },
  {
    word: "frango",
    eligible: false,
  },
  {
    word: "franja",
    eligible: false,
  },
  {
    word: "fraque",
    eligible: false,
  },
  {
    word: "frasal",
    eligible: false,
  },
  {
    word: "frasco",
    eligible: false,
  },
  {
    word: "frases",
    eligible: false,
  },
  {
    word: "fráter",
    eligible: false,
  },
  {
    word: "fraude",
    eligible: false,
  },
  {
    word: "Frazão",
    eligible: false,
  },
  {
    word: "frecha",
    eligible: false,
  },
  {
    word: "fregão",
    eligible: false,
  },
  {
    word: "fregar",
    eligible: false,
  },
  {
    word: "freijó",
    eligible: false,
  },
  {
    word: "freime",
    eligible: false,
  },
  {
    word: "freira",
    eligible: false,
  },
  {
    word: "freixo",
    eligible: false,
  },
  {
    word: "fremer",
    eligible: false,
  },
  {
    word: "fremir",
    eligible: false,
  },
  {
    word: "frenal",
    eligible: false,
  },
  {
    word: "frenar",
    eligible: false,
  },
  {
    word: "frenia",
    eligible: false,
  },
  {
    word: "frente",
    eligible: false,
  },
  {
    word: "fresar",
    eligible: false,
  },
  {
    word: "fresca",
    eligible: false,
  },
  {
    word: "fresco",
    eligible: false,
  },
  {
    word: "frésia",
    eligible: false,
  },
  {
    word: "fresos",
    eligible: false,
  },
  {
    word: "fresta",
    eligible: false,
  },
  {
    word: "fretar",
    eligible: false,
  },
  {
    word: "fretes",
    eligible: false,
  },
  {
    word: "frevar",
    eligible: false,
  },
  {
    word: "frevos",
    eligible: false,
  },
  {
    word: "friame",
    eligible: false,
  },
  {
    word: "friamo",
    eligible: false,
  },
  {
    word: "Frieda",
    eligible: false,
  },
  {
    word: "frieza",
    eligible: false,
  },
  {
    word: "frígio",
    eligible: false,
  },
  {
    word: "frigir",
    eligible: false,
  },
  {
    word: "frimam",
    eligible: false,
  },
  {
    word: "frimão",
    eligible: false,
  },
  {
    word: "frínio",
    eligible: false,
  },
  {
    word: "frioso",
    eligible: false,
  },
  {
    word: "frisão",
    eligible: false,
  },
  {
    word: "frisar",
    eligible: false,
  },
  {
    word: "friseu",
    eligible: false,
  },
  {
    word: "frísio",
    eligible: false,
  },
  {
    word: "frisos",
    eligible: false,
  },
  {
    word: "fritar",
    eligible: false,
  },
  {
    word: "fritas",
    eligible: false,
  },
  {
    word: "fritos",
    eligible: false,
  },
  {
    word: "friúme",
    eligible: false,
  },
  {
    word: "friúra",
    eligible: false,
  },
  {
    word: "frixeu",
    eligible: false,
  },
  {
    word: "frocar",
    eligible: false,
  },
  {
    word: "frocos",
    eligible: false,
  },
  {
    word: "froina",
    eligible: false,
  },
  {
    word: "frolar",
    eligible: false,
  },
  {
    word: "frolho",
    eligible: false,
  },
  {
    word: "frolir",
    eligible: false,
  },
  {
    word: "fronha",
    eligible: false,
  },
  {
    word: "fronho",
    eligible: false,
  },
  {
    word: "frônia",
    eligible: false,
  },
  {
    word: "fronta",
    eligible: false,
  },
  {
    word: "fronte",
    eligible: false,
  },
  {
    word: "fronto",
    eligible: false,
  },
  {
    word: "frosca",
    eligible: false,
  },
  {
    word: "frouma",
    eligible: false,
  },
  {
    word: "frouva",
    eligible: false,
  },
  {
    word: "frouxó",
    eligible: false,
  },
  {
    word: "frugal",
    eligible: false,
  },
  {
    word: "fruito",
    eligible: false,
  },
  {
    word: "frunco",
    eligible: false,
  },
  {
    word: "frutal",
    eligible: false,
  },
  {
    word: "frutão",
    eligible: false,
  },
  {
    word: "frutar",
    eligible: false,
  },
  {
    word: "frutas",
    eligible: false,
  },
  {
    word: "frutos",
    eligible: false,
  },
  {
    word: "fruzuê",
    eligible: false,
  },
  {
    word: "fuampa",
    eligible: false,
  },
  {
    word: "fubaca",
    eligible: false,
  },
  {
    word: "fubana",
    eligible: false,
  },
  {
    word: "fubica",
    eligible: false,
  },
  {
    word: "fuboca",
    eligible: false,
  },
  {
    word: "fubuia",
    eligible: false,
  },
  {
    word: "fucale",
    eligible: false,
  },
  {
    word: "fucani",
    eligible: false,
  },
  {
    word: "fúcaro",
    eligible: false,
  },
  {
    word: "fucina",
    eligible: false,
  },
  {
    word: "fucose",
    eligible: false,
  },
  {
    word: "fúcsia",
    eligible: false,
  },
  {
    word: "fugace",
    eligible: false,
  },
  {
    word: "fugato",
    eligible: false,
  },
  {
    word: "fugeca",
    eligible: false,
  },
  {
    word: "fugião",
    eligible: false,
  },
  {
    word: "fugido",
    eligible: false,
  },
  {
    word: "fúgueo",
    eligible: false,
  },
  {
    word: "führer",
    eligible: false,
  },
  {
    word: "fuinha",
    eligible: false,
  },
  {
    word: "fuinho",
    eligible: false,
  },
  {
    word: "fujona",
    eligible: false,
  },
  {
    word: "fulame",
    eligible: false,
  },
  {
    word: "fulano",
    eligible: false,
  },
  {
    word: "fulcro",
    eligible: false,
  },
  {
    word: "fulejo",
    eligible: false,
  },
  {
    word: "fulgir",
    eligible: false,
  },
  {
    word: "fulgor",
    eligible: false,
  },
  {
    word: "fúlica",
    eligible: false,
  },
  {
    word: "fuligo",
    eligible: false,
  },
  {
    word: "fulmar",
    eligible: false,
  },
  {
    word: "fúlmen",
    eligible: false,
  },
  {
    word: "fulniô",
    eligible: false,
  },
  {
    word: "fuloar",
    eligible: false,
  },
  {
    word: "fuloso",
    eligible: false,
  },
  {
    word: "fulupo",
    eligible: false,
  },
  {
    word: "Fúlvio",
    eligible: false,
  },
  {
    word: "fumaça",
    eligible: false,
  },
  {
    word: "fumacê",
    eligible: false,
  },
  {
    word: "fumago",
    eligible: false,
  },
  {
    word: "fumear",
    eligible: false,
  },
  {
    word: "fúmido",
    eligible: false,
  },
  {
    word: "fuminé",
    eligible: false,
  },
  {
    word: "fumona",
    eligible: false,
  },
  {
    word: "fumoso",
    eligible: false,
  },
  {
    word: "funaná",
    eligible: false,
  },
  {
    word: "Funasa",
    eligible: false,
  },
  {
    word: "função",
    eligible: false,
  },
  {
    word: "funcho",
    eligible: false,
  },
  {
    word: "fundal",
    eligible: false,
  },
  {
    word: "fundão",
    eligible: false,
  },
  {
    word: "fundar",
    eligible: false,
  },
  {
    word: "Fundeb",
    eligible: false,
  },
  {
    word: "Fundef",
    eligible: false,
  },
  {
    word: "fundir",
    eligible: false,
  },
  {
    word: "fundos",
    eligible: false,
  },
  {
    word: "funeca",
    eligible: false,
  },
  {
    word: "fúnera",
    eligible: false,
  },
  {
    word: "funfar",
    eligible: false,
  },
  {
    word: "funfos",
    eligible: false,
  },
  {
    word: "funfum",
    eligible: false,
  },
  {
    word: "fungão",
    eligible: false,
  },
  {
    word: "fungar",
    eligible: false,
  },
  {
    word: "fúngia",
    eligible: false,
  },
  {
    word: "funhir",
    eligible: false,
  },
  {
    word: "furada",
    eligible: false,
  },
  {
    word: "furado",
    eligible: false,
  },
  {
    word: "furano",
    eligible: false,
  },
  {
    word: "furdão",
    eligible: false,
  },
  {
    word: "furgão",
    eligible: false,
  },
  {
    word: "furial",
    eligible: false,
  },
  {
    word: "furico",
    eligible: false,
  },
  {
    word: "furilo",
    eligible: false,
  },
  {
    word: "furoar",
    eligible: false,
  },
  {
    word: "furões",
    eligible: false,
  },
  {
    word: "furono",
    eligible: false,
  },
  {
    word: "furtar",
    eligible: false,
  },
  {
    word: "furtos",
    eligible: false,
  },
  {
    word: "fusada",
    eligible: false,
  },
  {
    word: "fusano",
    eligible: false,
  },
  {
    word: "fúsaro",
    eligible: false,
  },
  {
    word: "fuscão",
    eligible: false,
  },
  {
    word: "fuscar",
    eligible: false,
  },
  {
    word: "fuscas",
    eligible: false,
  },
  {
    word: "fuscos",
    eligible: false,
  },
  {
    word: "fuselo",
    eligible: false,
  },
  {
    word: "fusgar",
    eligible: false,
  },
  {
    word: "fusilo",
    eligible: false,
  },
  {
    word: "fusito",
    eligible: false,
  },
  {
    word: "fusque",
    eligible: false,
  },
  {
    word: "fustão",
    eligible: false,
  },
  {
    word: "fustel",
    eligible: false,
  },
  {
    word: "fustes",
    eligible: false,
  },
  {
    word: "futeco",
    eligible: false,
  },
  {
    word: "futila",
    eligible: false,
  },
  {
    word: "futsal",
    eligible: false,
  },
  {
    word: "Futuna",
    eligible: false,
  },
  {
    word: "futuro",
    eligible: false,
  },
  {
    word: "fuxico",
    eligible: false,
  },
  {
    word: "gaaíra",
    eligible: false,
  },
  {
    word: "gabaço",
    eligible: false,
  },
  {
    word: "gabaia",
    eligible: false,
  },
  {
    word: "gábale",
    eligible: false,
  },
  {
    word: "gábalo",
    eligible: false,
  },
  {
    word: "gabari",
    eligible: false,
  },
  {
    word: "gabaru",
    eligible: false,
  },
  {
    word: "gábata",
    eligible: false,
  },
  {
    word: "gabedo",
    eligible: false,
  },
  {
    word: "gabelo",
    eligible: false,
  },
  {
    word: "gabeno",
    eligible: false,
  },
  {
    word: "gaberi",
    eligible: false,
  },
  {
    word: "gabete",
    eligible: false,
  },
  {
    word: "gabião",
    eligible: false,
  },
  {
    word: "gabiar",
    eligible: false,
  },
  {
    word: "gabino",
    eligible: false,
  },
  {
    word: "gabiru",
    eligible: false,
  },
  {
    word: "gábito",
    eligible: false,
  },
  {
    word: "gabola",
    eligible: false,
  },
  {
    word: "gabona",
    eligible: false,
  },
  {
    word: "gabote",
    eligible: false,
  },
  {
    word: "Gábrio",
    eligible: false,
  },
  {
    word: "gábulo",
    eligible: false,
  },
  {
    word: "gabuta",
    eligible: false,
  },
  {
    word: "gaçaba",
    eligible: false,
  },
  {
    word: "gaçapo",
    eligible: false,
  },
  {
    word: "gadame",
    eligible: false,
  },
  {
    word: "gadamo",
    eligible: false,
  },
  {
    word: "gadaru",
    eligible: false,
  },
  {
    word: "gadeza",
    eligible: false,
  },
  {
    word: "gadibe",
    eligible: false,
  },
  {
    word: "gádido",
    eligible: false,
  },
  {
    word: "Gadiel",
    eligible: false,
  },
  {
    word: "gadila",
    eligible: false,
  },
  {
    word: "gadina",
    eligible: false,
  },
  {
    word: "gadita",
    eligible: false,
  },
  {
    word: "gafana",
    eligible: false,
  },
  {
    word: "gafice",
    eligible: false,
  },
  {
    word: "gagata",
    eligible: false,
  },
  {
    word: "gageia",
    eligible: false,
  },
  {
    word: "gagino",
    eligible: false,
  },
  {
    word: "gagosa",
    eligible: false,
  },
  {
    word: "gaguez",
    eligible: false,
  },
  {
    word: "gáiaco",
    eligible: false,
  },
  {
    word: "gaiano",
    eligible: false,
  },
  {
    word: "gaibéu",
    eligible: false,
  },
  {
    word: "gaibim",
    eligible: false,
  },
  {
    word: "gaimão",
    eligible: false,
  },
  {
    word: "gaiolo",
    eligible: false,
  },
  {
    word: "gaiosa",
    eligible: false,
  },
  {
    word: "gaioto",
    eligible: false,
  },
  {
    word: "gaitar",
    eligible: false,
  },
  {
    word: "gaitas",
    eligible: false,
  },
  {
    word: "gaiulo",
    eligible: false,
  },
  {
    word: "gaiuta",
    eligible: false,
  },
  {
    word: "gaivão",
    eligible: false,
  },
  {
    word: "gaivar",
    eligible: false,
  },
  {
    word: "gáivea",
    eligible: false,
  },
  {
    word: "gaivel",
    eligible: false,
  },
  {
    word: "gaivéu",
    eligible: false,
  },
  {
    word: "gajada",
    eligible: false,
  },
  {
    word: "gajaja",
    eligible: false,
  },
  {
    word: "gajato",
    eligible: false,
  },
  {
    word: "gajeru",
    eligible: false,
  },
  {
    word: "gajeta",
    eligible: false,
  },
  {
    word: "gajice",
    eligible: false,
  },
  {
    word: "gajiru",
    eligible: false,
  },
  {
    word: "gajola",
    eligible: false,
  },
  {
    word: "gajuru",
    eligible: false,
  },
  {
    word: "galacé",
    eligible: false,
  },
  {
    word: "gálaco",
    eligible: false,
  },
  {
    word: "gálago",
    eligible: false,
  },
  {
    word: "galaio",
    eligible: false,
  },
  {
    word: "galapo",
    eligible: false,
  },
  {
    word: "gálata",
    eligible: false,
  },
  {
    word: "galato",
    eligible: false,
  },
  {
    word: "galdir",
    eligible: false,
  },
  {
    word: "galeão",
    eligible: false,
  },
  {
    word: "galear",
    eligible: false,
  },
  {
    word: "galeca",
    eligible: false,
  },
  {
    word: "galega",
    eligible: false,
  },
  {
    word: "galego",
    eligible: false,
  },
  {
    word: "galeia",
    eligible: false,
  },
  {
    word: "galelo",
    eligible: false,
  },
  {
    word: "galeno",
    eligible: false,
  },
  {
    word: "galero",
    eligible: false,
  },
  {
    word: "galeto",
    eligible: false,
  },
  {
    word: "galgal",
    eligible: false,
  },
  {
    word: "galgão",
    eligible: false,
  },
  {
    word: "galgar",
    eligible: false,
  },
  {
    word: "galgaz",
    eligible: false,
  },
  {
    word: "galgos",
    eligible: false,
  },
  {
    word: "galhas",
    eligible: false,
  },
  {
    word: "galião",
    eligible: false,
  },
  {
    word: "galibi",
    eligible: false,
  },
  {
    word: "gálico",
    eligible: false,
  },
  {
    word: "galilé",
    eligible: false,
  },
  {
    word: "galipó",
    eligible: false,
  },
  {
    word: "galiré",
    eligible: false,
  },
  {
    word: "galito",
    eligible: false,
  },
  {
    word: "Galiza",
    eligible: false,
  },
  {
    word: "galizo",
    eligible: false,
  },
  {
    word: "galoar",
    eligible: false,
  },
  {
    word: "galole",
    eligible: false,
  },
  {
    word: "galóli",
    eligible: false,
  },
  {
    word: "galolo",
    eligible: false,
  },
  {
    word: "galope",
    eligible: false,
  },
  {
    word: "galpão",
    eligible: false,
  },
  {
    word: "galrão",
    eligible: false,
  },
  {
    word: "galrar",
    eligible: false,
  },
  {
    word: "galubé",
    eligible: false,
  },
  {
    word: "galula",
    eligible: false,
  },
  {
    word: "galupa",
    eligible: false,
  },
  {
    word: "Galvão",
    eligible: false,
  },
  {
    word: "gamaio",
    eligible: false,
  },
  {
    word: "gâmaro",
    eligible: false,
  },
  {
    word: "gambaz",
    eligible: false,
  },
  {
    word: "Gâmbia",
    eligible: false,
  },
  {
    word: "gâmbia",
    eligible: false,
  },
  {
    word: "gambir",
    eligible: false,
  },
  {
    word: "gamboa",
    eligible: false,
  },
  {
    word: "gâmbue",
    eligible: false,
  },
  {
    word: "gamela",
    eligible: false,
  },
  {
    word: "gamelo",
    eligible: false,
  },
  {
    word: "gamera",
    eligible: false,
  },
  {
    word: "gâmeta",
    eligible: false,
  },
  {
    word: "gameto",
    eligible: false,
  },
  {
    word: "gâmico",
    eligible: false,
  },
  {
    word: "gamões",
    eligible: false,
  },
  {
    word: "gamote",
    eligible: false,
  },
  {
    word: "gamute",
    eligible: false,
  },
  {
    word: "gamúti",
    eligible: false,
  },
  {
    word: "gamuto",
    eligible: false,
  },
  {
    word: "ganalo",
    eligible: false,
  },
  {
    word: "ganapé",
    eligible: false,
  },
  {
    word: "ganapo",
    eligible: false,
  },
  {
    word: "ganara",
    eligible: false,
  },
  {
    word: "gancar",
    eligible: false,
  },
  {
    word: "gançar",
    eligible: false,
  },
  {
    word: "gancho",
    eligible: false,
  },
  {
    word: "ganços",
    eligible: false,
  },
  {
    word: "gandar",
    eligible: false,
  },
  {
    word: "gandir",
    eligible: false,
  },
  {
    word: "gandra",
    eligible: false,
  },
  {
    word: "gandum",
    eligible: false,
  },
  {
    word: "ganete",
    eligible: false,
  },
  {
    word: "ganfar",
    eligible: false,
  },
  {
    word: "gangão",
    eligible: false,
  },
  {
    word: "Ganges",
    eligible: false,
  },
  {
    word: "ganges",
    eligible: false,
  },
  {
    word: "gangri",
    eligible: false,
  },
  {
    word: "gangue",
    eligible: false,
  },
  {
    word: "ganguê",
    eligible: false,
  },
  {
    word: "ganhão",
    eligible: false,
  },
  {
    word: "ganhar",
    eligible: false,
  },
  {
    word: "ganhoa",
    eligible: false,
  },
  {
    word: "ganíea",
    eligible: false,
  },
  {
    word: "ganite",
    eligible: false,
  },
  {
    word: "ganjão",
    eligible: false,
  },
  {
    word: "ganoga",
    eligible: false,
  },
  {
    word: "gansão",
    eligible: false,
  },
  {
    word: "gansas",
    eligible: false,
  },
  {
    word: "gansos",
    eligible: false,
  },
  {
    word: "ganzar",
    eligible: false,
  },
  {
    word: "ganzuá",
    eligible: false,
  },
  {
    word: "gapira",
    eligible: false,
  },
  {
    word: "garabi",
    eligible: false,
  },
  {
    word: "garabu",
    eligible: false,
  },
  {
    word: "garage",
    eligible: false,
  },
  {
    word: "garapa",
    eligible: false,
  },
  {
    word: "garapé",
    eligible: false,
  },
  {
    word: "garapu",
    eligible: false,
  },
  {
    word: "Gararu",
    eligible: false,
  },
  {
    word: "garção",
    eligible: false,
  },
  {
    word: "garças",
    eligible: false,
  },
  {
    word: "garcês",
    eligible: false,
  },
  {
    word: "Garcez",
    eligible: false,
  },
  {
    word: "Garcia",
    eligible: false,
  },
  {
    word: "garçom",
    eligible: false,
  },
  {
    word: "garela",
    eligible: false,
  },
  {
    word: "garepe",
    eligible: false,
  },
  {
    word: "garera",
    eligible: false,
  },
  {
    word: "garete",
    eligible: false,
  },
  {
    word: "garfar",
    eligible: false,
  },
  {
    word: "garfim",
    eligible: false,
  },
  {
    word: "garfos",
    eligible: false,
  },
  {
    word: "gargal",
    eligible: false,
  },
  {
    word: "gargar",
    eligible: false,
  },
  {
    word: "gargaú",
    eligible: false,
  },
  {
    word: "garina",
    eligible: false,
  },
  {
    word: "garino",
    eligible: false,
  },
  {
    word: "garite",
    eligible: false,
  },
  {
    word: "garito",
    eligible: false,
  },
  {
    word: "garjau",
    eligible: false,
  },
  {
    word: "garnar",
    eligible: false,
  },
  {
    word: "garnir",
    eligible: false,
  },
  {
    word: "garoar",
    eligible: false,
  },
  {
    word: "garoma",
    eligible: false,
  },
  {
    word: "Garona",
    eligible: false,
  },
  {
    word: "garopo",
    eligible: false,
  },
  {
    word: "garota",
    eligible: false,
  },
  {
    word: "garoto",
    eligible: false,
  },
  {
    word: "garrão",
    eligible: false,
  },
  {
    word: "garrar",
    eligible: false,
  },
  {
    word: "garras",
    eligible: false,
  },
  {
    word: "garrau",
    eligible: false,
  },
  {
    word: "garraz",
    eligible: false,
  },
  {
    word: "garril",
    eligible: false,
  },
  {
    word: "gárrio",
    eligible: false,
  },
  {
    word: "garrir",
    eligible: false,
  },
  {
    word: "garroa",
    eligible: false,
  },
  {
    word: "garros",
    eligible: false,
  },
  {
    word: "garuar",
    eligible: false,
  },
  {
    word: "garuba",
    eligible: false,
  },
  {
    word: "garuda",
    eligible: false,
  },
  {
    word: "garuga",
    eligible: false,
  },
  {
    word: "garuja",
    eligible: false,
  },
  {
    word: "garula",
    eligible: false,
  },
  {
    word: "garumá",
    eligible: false,
  },
  {
    word: "garuna",
    eligible: false,
  },
  {
    word: "garupa",
    eligible: false,
  },
  {
    word: "Garuva",
    eligible: false,
  },
  {
    word: "gascão",
    eligible: false,
  },
  {
    word: "gascoa",
    eligible: false,
  },
  {
    word: "gasear",
    eligible: false,
  },
  {
    word: "gasmar",
    eligible: false,
  },
  {
    word: "gasnir",
    eligible: false,
  },
  {
    word: "gasoso",
    eligible: false,
  },
  {
    word: "Gaspar",
    eligible: false,
  },
  {
    word: "gáspea",
    eligible: false,
  },
  {
    word: "gastão",
    eligible: false,
  },
  {
    word: "gastar",
    eligible: false,
  },
  {
    word: "gáster",
    eligible: false,
  },
  {
    word: "gastro",
    eligible: false,
  },
  {
    word: "gatear",
    eligible: false,
  },
  {
    word: "gateia",
    eligible: false,
  },
  {
    word: "gateza",
    eligible: false,
  },
  {
    word: "gatice",
    eligible: false,
  },
  {
    word: "gático",
    eligible: false,
  },
  {
    word: "gatina",
    eligible: false,
  },
  {
    word: "gatona",
    eligible: false,
  },
  {
    word: "gatoso",
    eligible: false,
  },
  {
    word: "gauche",
    eligible: false,
  },
  {
    word: "gaúcho",
    eligible: false,
  },
  {
    word: "gauchu",
    eligible: false,
  },
  {
    word: "gaudar",
    eligible: false,
  },
  {
    word: "gáudio",
    eligible: false,
  },
  {
    word: "gaudir",
    eligible: false,
  },
  {
    word: "gaugau",
    eligible: false,
  },
  {
    word: "gaulês",
    eligible: false,
  },
  {
    word: "gáurio",
    eligible: false,
  },
  {
    word: "gavana",
    eligible: false,
  },
  {
    word: "gávata",
    eligible: false,
  },
  {
    word: "gavear",
    eligible: false,
  },
  {
    word: "gávedo",
    eligible: false,
  },
  {
    word: "gavejo",
    eligible: false,
  },
  {
    word: "gavelo",
    eligible: false,
  },
  {
    word: "gaveta",
    eligible: false,
  },
  {
    word: "gaveto",
    eligible: false,
  },
  {
    word: "gavial",
    eligible: false,
  },
  {
    word: "Gavião",
    eligible: false,
  },
  {
    word: "gavião",
    eligible: false,
  },
  {
    word: "gavina",
    eligible: false,
  },
  {
    word: "Gavino",
    eligible: false,
  },
  {
    word: "gavito",
    eligible: false,
  },
  {
    word: "gavota",
    eligible: false,
  },
  {
    word: "gaxeta",
    eligible: false,
  },
  {
    word: "gazano",
    eligible: false,
  },
  {
    word: "gazata",
    eligible: false,
  },
  {
    word: "gazear",
    eligible: false,
  },
  {
    word: "gazebo",
    eligible: false,
  },
  {
    word: "gazela",
    eligible: false,
  },
  {
    word: "gazena",
    eligible: false,
  },
  {
    word: "gazeta",
    eligible: false,
  },
  {
    word: "gazipo",
    eligible: false,
  },
  {
    word: "gazito",
    eligible: false,
  },
  {
    word: "gaziva",
    eligible: false,
  },
  {
    word: "gazopo",
    eligible: false,
  },
  {
    word: "gazuar",
    eligible: false,
  },
  {
    word: "geassa",
    eligible: false,
  },
  {
    word: "gebice",
    eligible: false,
  },
  {
    word: "geboso",
    eligible: false,
  },
  {
    word: "gebrar",
    eligible: false,
  },
  {
    word: "gécino",
    eligible: false,
  },
  {
    word: "Gedeão",
    eligible: false,
  },
  {
    word: "gedebo",
    eligible: false,
  },
  {
    word: "Gederá",
    eligible: false,
  },
  {
    word: "geeiro",
    eligible: false,
  },
  {
    word: "geente",
    eligible: false,
  },
  {
    word: "geento",
    eligible: false,
  },
  {
    word: "gefira",
    eligible: false,
  },
  {
    word: "Geisel",
    eligible: false,
  },
  {
    word: "gêiser",
    eligible: false,
  },
  {
    word: "Geison",
    eligible: false,
  },
  {
    word: "geleca",
    eligible: false,
  },
  {
    word: "geleia",
    eligible: false,
  },
  {
    word: "gélido",
    eligible: false,
  },
  {
    word: "gelino",
    eligible: false,
  },
  {
    word: "geliva",
    eligible: false,
  },
  {
    word: "gelono",
    eligible: false,
  },
  {
    word: "gelose",
    eligible: false,
  },
  {
    word: "gélula",
    eligible: false,
  },
  {
    word: "gemado",
    eligible: false,
  },
  {
    word: "gemear",
    eligible: false,
  },
  {
    word: "gemelo",
    eligible: false,
  },
  {
    word: "gêmeos",
    eligible: false,
  },
  {
    word: "gemiar",
    eligible: false,
  },
  {
    word: "gêmino",
    eligible: false,
  },
  {
    word: "gémula",
    eligible: false,
  },
  {
    word: "gêmula",
    eligible: false,
  },
  {
    word: "Genaro",
    eligible: false,
  },
  {
    word: "Gêncio",
    eligible: false,
  },
  {
    word: "genepi",
    eligible: false,
  },
  {
    word: "gênero",
    eligible: false,
  },
  {
    word: "gênese",
    eligible: false,
  },
  {
    word: "geneta",
    eligible: false,
  },
  {
    word: "genial",
    eligible: false,
  },
  {
    word: "genica",
    eligible: false,
  },
  {
    word: "gênico",
    eligible: false,
  },
  {
    word: "genina",
    eligible: false,
  },
  {
    word: "genipa",
    eligible: false,
  },
  {
    word: "Genito",
    eligible: false,
  },
  {
    word: "gênito",
    eligible: false,
  },
  {
    word: "genoês",
    eligible: false,
  },
  {
    word: "genomo",
    eligible: false,
  },
  {
    word: "Gênova",
    eligible: false,
  },
  {
    word: "gentil",
    eligible: false,
  },
  {
    word: "gentio",
    eligible: false,
  },
  {
    word: "genuês",
    eligible: false,
  },
  {
    word: "geóbio",
    eligible: false,
  },
  {
    word: "geoica",
    eligible: false,
  },
  {
    word: "geoide",
    eligible: false,
  },
  {
    word: "geolho",
    eligible: false,
  },
  {
    word: "géomis",
    eligible: false,
  },
  {
    word: "George",
    eligible: false,
  },
  {
    word: "gépida",
    eligible: false,
  },
  {
    word: "Gerais",
    eligible: false,
  },
  {
    word: "gerais",
    eligible: false,
  },
  {
    word: "gerano",
    eligible: false,
  },
  {
    word: "gerbão",
    eligible: false,
  },
  {
    word: "gerbos",
    eligible: false,
  },
  {
    word: "gereza",
    eligible: false,
  },
  {
    word: "geribé",
    eligible: false,
  },
  {
    word: "gerico",
    eligible: false,
  },
  {
    word: "germão",
    eligible: false,
  },
  {
    word: "gérmen",
    eligible: false,
  },
  {
    word: "gerona",
    eligible: false,
  },
  {
    word: "gérris",
    eligible: false,
  },
  {
    word: "gersal",
    eligible: false,
  },
  {
    word: "Gérson",
    eligible: false,
  },
  {
    word: "Gerusa",
    eligible: false,
  },
  {
    word: "Gerute",
    eligible: false,
  },
  {
    word: "gervão",
    eligible: false,
  },
  {
    word: "gesate",
    eligible: false,
  },
  {
    word: "gesato",
    eligible: false,
  },
  {
    word: "gessal",
    eligible: false,
  },
  {
    word: "gessar",
    eligible: false,
  },
  {
    word: "gessos",
    eligible: false,
  },
  {
    word: "Gestal",
    eligible: false,
  },
  {
    word: "gestão",
    eligible: false,
  },
  {
    word: "gestar",
    eligible: false,
  },
  {
    word: "gestor",
    eligible: false,
  },
  {
    word: "gestos",
    eligible: false,
  },
  {
    word: "gético",
    eligible: false,
  },
  {
    word: "getulo",
    eligible: false,
  },
  {
    word: "Gibeão",
    eligible: false,
  },
  {
    word: "gibões",
    eligible: false,
  },
  {
    word: "giboso",
    eligible: false,
  },
  {
    word: "Gibral",
    eligible: false,
  },
  {
    word: "Gibson",
    eligible: false,
  },
  {
    word: "gíbula",
    eligible: false,
  },
  {
    word: "gicebi",
    eligible: false,
  },
  {
    word: "gideão",
    eligible: false,
  },
  {
    word: "giesta",
    eligible: false,
  },
  {
    word: "giesto",
    eligible: false,
  },
  {
    word: "gigoga",
    eligible: false,
  },
  {
    word: "gigoia",
    eligible: false,
  },
  {
    word: "gigolô",
    eligible: false,
  },
  {
    word: "gigote",
    eligible: false,
  },
  {
    word: "Gildão",
    eligible: false,
  },
  {
    word: "gilete",
    eligible: false,
  },
  {
    word: "Gilmar",
    eligible: false,
  },
  {
    word: "Gílson",
    eligible: false,
  },
  {
    word: "Gílton",
    eligible: false,
  },
  {
    word: "Gilvan",
    eligible: false,
  },
  {
    word: "gilvaz",
    eligible: false,
  },
  {
    word: "gimboa",
    eligible: false,
  },
  {
    word: "gimbré",
    eligible: false,
  },
  {
    word: "ginari",
    eligible: false,
  },
  {
    word: "ginase",
    eligible: false,
  },
  {
    word: "gínase",
    eligible: false,
  },
  {
    word: "Ginate",
    eligible: false,
  },
  {
    word: "gincgo",
    eligible: false,
  },
  {
    word: "ginete",
    eligible: false,
  },
  {
    word: "gineto",
    eligible: false,
  },
  {
    word: "gingão",
    eligible: false,
  },
  {
    word: "gingar",
    eligible: false,
  },
  {
    word: "ginhal",
    eligible: false,
  },
  {
    word: "ginjal",
    eligible: false,
  },
  {
    word: "ginjas",
    eligible: false,
  },
  {
    word: "ginkgo",
    eligible: false,
  },
  {
    word: "ginsão",
    eligible: false,
  },
  {
    word: "ginsem",
    eligible: false,
  },
  {
    word: "ginura",
    eligible: false,
  },
  {
    word: "Giobre",
    eligible: false,
  },
  {
    word: "giolho",
    eligible: false,
  },
  {
    word: "gipeto",
    eligible: false,
  },
  {
    word: "gípseo",
    eligible: false,
  },
  {
    word: "girafa",
    eligible: false,
  },
  {
    word: "girame",
    eligible: false,
  },
  {
    word: "girata",
    eligible: false,
  },
  {
    word: "girbão",
    eligible: false,
  },
  {
    word: "girela",
    eligible: false,
  },
  {
    word: "gireza",
    eligible: false,
  },
  {
    word: "girice",
    eligible: false,
  },
  {
    word: "girino",
    eligible: false,
  },
  {
    word: "gírios",
    eligible: false,
  },
  {
    word: "giroma",
    eligible: false,
  },
  {
    word: "giropo",
    eligible: false,
  },
  {
    word: "girose",
    eligible: false,
  },
  {
    word: "girote",
    eligible: false,
  },
  {
    word: "giroto",
    eligible: false,
  },
  {
    word: "girreu",
    eligible: false,
  },
  {
    word: "Gisele",
    eligible: false,
  },
  {
    word: "gitago",
    eligible: false,
  },
  {
    word: "gitano",
    eligible: false,
  },
  {
    word: "gitina",
    eligible: false,
  },
  {
    word: "Giulia",
    eligible: false,
  },
  {
    word: "glabro",
    eligible: false,
  },
  {
    word: "glaçar",
    eligible: false,
  },
  {
    word: "glacês",
    eligible: false,
  },
  {
    word: "gládio",
    eligible: false,
  },
  {
    word: "glande",
    eligible: false,
  },
  {
    word: "glasto",
    eligible: false,
  },
  {
    word: "glauca",
    eligible: false,
  },
  {
    word: "Glauce",
    eligible: false,
  },
  {
    word: "glauco",
    eligible: false,
  },
  {
    word: "Gleice",
    eligible: false,
  },
  {
    word: "Gleide",
    eligible: false,
  },
  {
    word: "Glélia",
    eligible: false,
  },
  {
    word: "Glenda",
    eligible: false,
  },
  {
    word: "Glênio",
    eligible: false,
  },
  {
    word: "Gleusa",
    eligible: false,
  },
  {
    word: "glicol",
    eligible: false,
  },
  {
    word: "gliglô",
    eligible: false,
  },
  {
    word: "glioma",
    eligible: false,
  },
  {
    word: "gliose",
    eligible: false,
  },
  {
    word: "glissê",
    eligible: false,
  },
  {
    word: "global",
    eligible: false,
  },
  {
    word: "glóbea",
    eligible: false,
  },
  {
    word: "globia",
    eligible: false,
  },
  {
    word: "globos",
    eligible: false,
  },
  {
    word: "glocal",
    eligible: false,
  },
  {
    word: "glória",
    eligible: false,
  },
  {
    word: "glosar",
    eligible: false,
  },
  {
    word: "glossa",
    eligible: false,
  },
  {
    word: "glotal",
    eligible: false,
  },
  {
    word: "glótis",
    eligible: false,
  },
  {
    word: "glutão",
    eligible: false,
  },
  {
    word: "glúten",
    eligible: false,
  },
  {
    word: "glúteo",
    eligible: false,
  },
  {
    word: "gnosia",
    eligible: false,
  },
  {
    word: "goanês",
    eligible: false,
  },
  {
    word: "gobião",
    eligible: false,
  },
  {
    word: "gocete",
    eligible: false,
  },
  {
    word: "godelo",
    eligible: false,
  },
  {
    word: "godeme",
    eligible: false,
  },
  {
    word: "godemo",
    eligible: false,
  },
  {
    word: "godião",
    eligible: false,
  },
  {
    word: "godiar",
    eligible: false,
  },
  {
    word: "godoia",
    eligible: false,
  },
  {
    word: "godoya",
    eligible: false,
  },
  {
    word: "godrim",
    eligible: false,
  },
  {
    word: "goelar",
    eligible: false,
  },
  {
    word: "goelas",
    eligible: false,
  },
  {
    word: "goeldi",
    eligible: false,
  },
  {
    word: "goense",
    eligible: false,
  },
  {
    word: "goetão",
    eligible: false,
  },
  {
    word: "goétea",
    eligible: false,
  },
  {
    word: "Goethe",
    eligible: false,
  },
  {
    word: "goétia",
    eligible: false,
  },
  {
    word: "gofrar",
    eligible: false,
  },
  {
    word: "gogada",
    eligible: false,
  },
  {
    word: "gogogô",
    eligible: false,
  },
  {
    word: "gogoia",
    eligible: false,
  },
  {
    word: "gogoso",
    eligible: false,
  },
  {
    word: "goiaba",
    eligible: false,
  },
  {
    word: "goiaca",
    eligible: false,
  },
  {
    word: "goiacá",
    eligible: false,
  },
  {
    word: "goiamu",
    eligible: false,
  },
  {
    word: "Goianá",
    eligible: false,
  },
  {
    word: "goiano",
    eligible: false,
  },
  {
    word: "goilão",
    eligible: false,
  },
  {
    word: "goitar",
    eligible: false,
  },
  {
    word: "goivar",
    eligible: false,
  },
  {
    word: "goivos",
    eligible: false,
  },
  {
    word: "gojoba",
    eligible: false,
  },
  {
    word: "golaço",
    eligible: false,
  },
  {
    word: "golada",
    eligible: false,
  },
  {
    word: "goldre",
    eligible: false,
  },
  {
    word: "golear",
    eligible: false,
  },
  {
    word: "goleta",
    eligible: false,
  },
  {
    word: "golfão",
    eligible: false,
  },
  {
    word: "gólfão",
    eligible: false,
  },
  {
    word: "golfar",
    eligible: false,
  },
  {
    word: "golfim",
    eligible: false,
  },
  {
    word: "golfos",
    eligible: false,
  },
  {
    word: "golias",
    eligible: false,
  },
  {
    word: "golmor",
    eligible: false,
  },
  {
    word: "golpar",
    eligible: false,
  },
  {
    word: "golpes",
    eligible: false,
  },
  {
    word: "gombir",
    eligible: false,
  },
  {
    word: "gombôs",
    eligible: false,
  },
  {
    word: "gomera",
    eligible: false,
  },
  {
    word: "gomesa",
    eligible: false,
  },
  {
    word: "gomeza",
    eligible: false,
  },
  {
    word: "gomina",
    eligible: false,
  },
  {
    word: "gômito",
    eligible: false,
  },
  {
    word: "gomoar",
    eligible: false,
  },
  {
    word: "gomose",
    eligible: false,
  },
  {
    word: "gomoso",
    eligible: false,
  },
  {
    word: "gomuto",
    eligible: false,
  },
  {
    word: "gônada",
    eligible: false,
  },
  {
    word: "gondão",
    eligible: false,
  },
  {
    word: "gondii",
    eligible: false,
  },
  {
    word: "gonete",
    eligible: false,
  },
  {
    word: "gongar",
    eligible: false,
  },
  {
    word: "gongom",
    eligible: false,
  },
  {
    word: "gongos",
    eligible: false,
  },
  {
    word: "gongós",
    eligible: false,
  },
  {
    word: "gonguê",
    eligible: false,
  },
  {
    word: "gonite",
    eligible: false,
  },
  {
    word: "gonono",
    eligible: false,
  },
  {
    word: "gopurá",
    eligible: false,
  },
  {
    word: "gorana",
    eligible: false,
  },
  {
    word: "goraná",
    eligible: false,
  },
  {
    word: "gorcho",
    eligible: false,
  },
  {
    word: "gordal",
    eligible: false,
  },
  {
    word: "gordas",
    eligible: false,
  },
  {
    word: "górdio",
    eligible: false,
  },
  {
    word: "gordos",
    eligible: false,
  },
  {
    word: "gorete",
    eligible: false,
  },
  {
    word: "goreto",
    eligible: false,
  },
  {
    word: "gorgão",
    eligible: false,
  },
  {
    word: "gorgas",
    eligible: false,
  },
  {
    word: "gorgaz",
    eligible: false,
  },
  {
    word: "gorguz",
    eligible: false,
  },
  {
    word: "gorila",
    eligible: false,
  },
  {
    word: "gorino",
    eligible: false,
  },
  {
    word: "gorite",
    eligible: false,
  },
  {
    word: "gorjal",
    eligible: false,
  },
  {
    word: "gorjão",
    eligible: false,
  },
  {
    word: "gorjas",
    eligible: false,
  },
  {
    word: "gorjel",
    eligible: false,
  },
  {
    word: "gornir",
    eligible: false,
  },
  {
    word: "gorona",
    eligible: false,
  },
  {
    word: "gorrar",
    eligible: false,
  },
  {
    word: "gorros",
    eligible: false,
  },
  {
    word: "gosmão",
    eligible: false,
  },
  {
    word: "gosmar",
    eligible: false,
  },
  {
    word: "gospel",
    eligible: false,
  },
  {
    word: "gospes",
    eligible: false,
  },
  {
    word: "gostar",
    eligible: false,
  },
  {
    word: "gostos",
    eligible: false,
  },
  {
    word: "gotado",
    eligible: false,
  },
  {
    word: "gotear",
    eligible: false,
  },
  {
    word: "gótico",
    eligible: false,
  },
  {
    word: "gotija",
    eligible: false,
  },
  {
    word: "gotino",
    eligible: false,
  },
  {
    word: "gotoso",
    eligible: false,
  },
  {
    word: "gotrim",
    eligible: false,
  },
  {
    word: "gougar",
    eligible: false,
  },
  {
    word: "gougre",
    eligible: false,
  },
  {
    word: "goulão",
    eligible: false,
  },
  {
    word: "goupia",
    eligible: false,
  },
  {
    word: "gourde",
    eligible: false,
  },
  {
    word: "gouvir",
    eligible: false,
  },
  {
    word: "govera",
    eligible: false,
  },
  {
    word: "govete",
    eligible: false,
  },
  {
    word: "gozona",
    eligible: false,
  },
  {
    word: "gozoso",
    eligible: false,
  },
  {
    word: "grabeu",
    eligible: false,
  },
  {
    word: "graçaí",
    eligible: false,
  },
  {
    word: "gracas",
    eligible: false,
  },
  {
    word: "graças",
    eligible: false,
  },
  {
    word: "Gracho",
    eligible: false,
  },
  {
    word: "grácil",
    eligible: false,
  },
  {
    word: "Grácio",
    eligible: false,
  },
  {
    word: "gracuí",
    eligible: false,
  },
  {
    word: "gradaó",
    eligible: false,
  },
  {
    word: "gradão",
    eligible: false,
  },
  {
    word: "gradar",
    eligible: false,
  },
  {
    word: "gradaú",
    eligible: false,
  },
  {
    word: "gradil",
    eligible: false,
  },
  {
    word: "gradim",
    eligible: false,
  },
  {
    word: "Graeff",
    eligible: false,
  },
  {
    word: "graelo",
    eligible: false,
  },
  {
    word: "grafar",
    eligible: false,
  },
  {
    word: "grafia",
    eligible: false,
  },
  {
    word: "gráfio",
    eligible: false,
  },
  {
    word: "grageu",
    eligible: false,
  },
  {
    word: "Graham",
    eligible: false,
  },
  {
    word: "graiar",
    eligible: false,
  },
  {
    word: "graíço",
    eligible: false,
  },
  {
    word: "graipa",
    eligible: false,
  },
  {
    word: "graipu",
    eligible: false,
  },
  {
    word: "Grajaú",
    eligible: false,
  },
  {
    word: "gralha",
    eligible: false,
  },
  {
    word: "gramal",
    eligible: false,
  },
  {
    word: "gramão",
    eligible: false,
  },
  {
    word: "gramar",
    eligible: false,
  },
  {
    word: "gramas",
    eligible: false,
  },
  {
    word: "grambe",
    eligible: false,
  },
  {
    word: "grâmia",
    eligible: false,
  },
  {
    word: "granal",
    eligible: false,
  },
  {
    word: "granar",
    eligible: false,
  },
  {
    word: "grança",
    eligible: false,
  },
  {
    word: "grande",
    eligible: false,
  },
  {
    word: "granel",
    eligible: false,
  },
  {
    word: "granfo",
    eligible: false,
  },
  {
    word: "granir",
    eligible: false,
  },
  {
    word: "granjo",
    eligible: false,
  },
  {
    word: "granol",
    eligible: false,
  },
  {
    word: "granza",
    eligible: false,
  },
  {
    word: "graodo",
    eligible: false,
  },
  {
    word: "grápia",
    eligible: false,
  },
  {
    word: "grapso",
    eligible: false,
  },
  {
    word: "graspa",
    eligible: false,
  },
  {
    word: "gratia",
    eligible: false,
  },
  {
    word: "Gratio",
    eligible: false,
  },
  {
    word: "grátis",
    eligible: false,
  },
  {
    word: "grauçá",
    eligible: false,
  },
  {
    word: "graúda",
    eligible: false,
  },
  {
    word: "graúde",
    eligible: false,
  },
  {
    word: "graúdo",
    eligible: false,
  },
  {
    word: "graúna",
    eligible: false,
  },
  {
    word: "gravar",
    eligible: false,
  },
  {
    word: "graves",
    eligible: false,
  },
  {
    word: "gravim",
    eligible: false,
  },
  {
    word: "grávio",
    eligible: false,
  },
  {
    word: "Gravis",
    eligible: false,
  },
  {
    word: "graxas",
    eligible: false,
  },
  {
    word: "Grécia",
    eligible: false,
  },
  {
    word: "gregal",
    eligible: false,
  },
  {
    word: "gregas",
    eligible: false,
  },
  {
    word: "gregos",
    eligible: false,
  },
  {
    word: "gregue",
    eligible: false,
  },
  {
    word: "greide",
    eligible: false,
  },
  {
    word: "greiro",
    eligible: false,
  },
  {
    word: "grelão",
    eligible: false,
  },
  {
    word: "grelar",
    eligible: false,
  },
  {
    word: "grelha",
    eligible: false,
  },
  {
    word: "grelos",
    eligible: false,
  },
  {
    word: "Grêmio",
    eligible: false,
  },
  {
    word: "grêmio",
    eligible: false,
  },
  {
    word: "grempa",
    eligible: false,
  },
  {
    word: "grenho",
    eligible: false,
  },
  {
    word: "gresca",
    eligible: false,
  },
  {
    word: "gretar",
    eligible: false,
  },
  {
    word: "grévia",
    eligible: false,
  },
  {
    word: "gréyia",
    eligible: false,
  },
  {
    word: "gricho",
    eligible: false,
  },
  {
    word: "grícua",
    eligible: false,
  },
  {
    word: "grielo",
    eligible: false,
  },
  {
    word: "grifar",
    eligible: false,
  },
  {
    word: "grífea",
    eligible: false,
  },
  {
    word: "grifom",
    eligible: false,
  },
  {
    word: "grifos",
    eligible: false,
  },
  {
    word: "grigri",
    eligible: false,
  },
  {
    word: "grijom",
    eligible: false,
  },
  {
    word: "grilar",
    eligible: false,
  },
  {
    word: "grilho",
    eligible: false,
  },
  {
    word: "grilir",
    eligible: false,
  },
  {
    word: "grilos",
    eligible: false,
  },
  {
    word: "grímea",
    eligible: false,
  },
  {
    word: "grímia",
    eligible: false,
  },
  {
    word: "gringo",
    eligible: false,
  },
  {
    word: "gripal",
    eligible: false,
  },
  {
    word: "gripar",
    eligible: false,
  },
  {
    word: "grisão",
    eligible: false,
  },
  {
    word: "grisar",
    eligible: false,
  },
  {
    word: "gríseo",
    eligible: false,
  },
  {
    word: "grises",
    eligible: false,
  },
  {
    word: "griséu",
    eligible: false,
  },
  {
    word: "grisoa",
    eligible: false,
  },
  {
    word: "gritão",
    eligible: false,
  },
  {
    word: "gritar",
    eligible: false,
  },
  {
    word: "gritos",
    eligible: false,
  },
  {
    word: "grivar",
    eligible: false,
  },
  {
    word: "gróbia",
    eligible: false,
  },
  {
    word: "groçaí",
    eligible: false,
  },
  {
    word: "grocho",
    eligible: false,
  },
  {
    word: "grogue",
    eligible: false,
  },
  {
    word: "grolar",
    eligible: false,
  },
  {
    word: "grolos",
    eligible: false,
  },
  {
    word: "gromar",
    eligible: false,
  },
  {
    word: "grômia",
    eligible: false,
  },
  {
    word: "gronho",
    eligible: false,
  },
  {
    word: "gronja",
    eligible: false,
  },
  {
    word: "grosar",
    eligible: false,
  },
  {
    word: "grossa",
    eligible: false,
  },
  {
    word: "grosso",
    eligible: false,
  },
  {
    word: "grotão",
    eligible: false,
  },
  {
    word: "gróvio",
    eligible: false,
  },
  {
    word: "grudar",
    eligible: false,
  },
  {
    word: "grumar",
    eligible: false,
  },
  {
    word: "grumos",
    eligible: false,
  },
  {
    word: "grunge",
    eligible: false,
  },
  {
    word: "grupal",
    eligible: false,
  },
  {
    word: "grupar",
    eligible: false,
  },
  {
    word: "grupos",
    eligible: false,
  },
  {
    word: "guaçaí",
    eligible: false,
  },
  {
    word: "guache",
    eligible: false,
  },
  {
    word: "guacho",
    eligible: false,
  },
  {
    word: "guaciá",
    eligible: false,
  },
  {
    word: "guacos",
    eligible: false,
  },
  {
    word: "Guaçuí",
    eligible: false,
  },
  {
    word: "guaçus",
    eligible: false,
  },
  {
    word: "guadal",
    eligible: false,
  },
  {
    word: "guadua",
    eligible: false,
  },
  {
    word: "guaiar",
    eligible: false,
  },
  {
    word: "guaiás",
    eligible: false,
  },
  {
    word: "Guaíba",
    eligible: false,
  },
  {
    word: "guaicá",
    eligible: false,
  },
  {
    word: "guaiol",
    eligible: false,
  },
  {
    word: "guaipá",
    eligible: false,
  },
  {
    word: "guaipé",
    eligible: false,
  },
  {
    word: "Guaíra",
    eligible: false,
  },
  {
    word: "guairá",
    eligible: false,
  },
  {
    word: "guairó",
    eligible: false,
  },
  {
    word: "guaitá",
    eligible: false,
  },
  {
    word: "guaiva",
    eligible: false,
  },
  {
    word: "gualdo",
    eligible: false,
  },
  {
    word: "guamba",
    eligible: false,
  },
  {
    word: "guambu",
    eligible: false,
  },
  {
    word: "guamês",
    eligible: false,
  },
  {
    word: "guampa",
    eligible: false,
  },
  {
    word: "guampo",
    eligible: false,
  },
  {
    word: "guando",
    eligible: false,
  },
  {
    word: "guandu",
    eligible: false,
  },
  {
    word: "guango",
    eligible: false,
  },
  {
    word: "guanhã",
    eligible: false,
  },
  {
    word: "guante",
    eligible: false,
  },
  {
    word: "guapuí",
    eligible: false,
  },
  {
    word: "guaqui",
    eligible: false,
  },
  {
    word: "Guaraí",
    eligible: false,
  },
  {
    word: "guaral",
    eligible: false,
  },
  {
    word: "guarás",
    eligible: false,
  },
  {
    word: "guaraz",
    eligible: false,
  },
  {
    word: "Guarda",
    eligible: false,
  },
  {
    word: "guarda",
    eligible: false,
  },
  {
    word: "guárea",
    eligible: false,
  },
  {
    word: "Guareí",
    eligible: false,
  },
  {
    word: "guarir",
    eligible: false,
  },
  {
    word: "guarro",
    eligible: false,
  },
  {
    word: "guarus",
    eligible: false,
  },
  {
    word: "guasca",
    eligible: false,
  },
  {
    word: "guaucá",
    eligible: false,
  },
  {
    word: "guazar",
    eligible: false,
  },
  {
    word: "guazil",
    eligible: false,
  },
  {
    word: "guazuí",
    eligible: false,
  },
  {
    word: "gudião",
    eligible: false,
  },
  {
    word: "guebli",
    eligible: false,
  },
  {
    word: "guebro",
    eligible: false,
  },
  {
    word: "gueche",
    eligible: false,
  },
  {
    word: "guecho",
    eligible: false,
  },
  {
    word: "guedes",
    eligible: false,
  },
  {
    word: "guegue",
    eligible: false,
  },
  {
    word: "gueguê",
    eligible: false,
  },
  {
    word: "gueijo",
    eligible: false,
  },
  {
    word: "gueiro",
    eligible: false,
  },
  {
    word: "gueixo",
    eligible: false,
  },
  {
    word: "guelfo",
    eligible: false,
  },
  {
    word: "guelmo",
    eligible: false,
  },
  {
    word: "guelro",
    eligible: false,
  },
  {
    word: "guemal",
    eligible: false,
  },
  {
    word: "guembé",
    eligible: false,
  },
  {
    word: "guembê",
    eligible: false,
  },
  {
    word: "guembo",
    eligible: false,
  },
  {
    word: "guembu",
    eligible: false,
  },
  {
    word: "guende",
    eligible: false,
  },
  {
    word: "guenga",
    eligible: false,
  },
  {
    word: "guenha",
    eligible: false,
  },
  {
    word: "guenso",
    eligible: false,
  },
  {
    word: "guenza",
    eligible: false,
  },
  {
    word: "guenze",
    eligible: false,
  },
  {
    word: "guenzo",
    eligible: false,
  },
  {
    word: "Guerda",
    eligible: false,
  },
  {
    word: "guerém",
    eligible: false,
  },
  {
    word: "Guerra",
    eligible: false,
  },
  {
    word: "guerra",
    eligible: false,
  },
  {
    word: "guesso",
    eligible: false,
  },
  {
    word: "guesto",
    eligible: false,
  },
  {
    word: "guiaba",
    eligible: false,
  },
  {
    word: "guiaca",
    eligible: false,
  },
  {
    word: "guiamu",
    eligible: false,
  },
  {
    word: "Guiana",
    eligible: false,
  },
  {
    word: "guiana",
    eligible: false,
  },
  {
    word: "guiché",
    eligible: false,
  },
  {
    word: "guichê",
    eligible: false,
  },
  {
    word: "guicho",
    eligible: false,
  },
  {
    word: "guidão",
    eligible: false,
  },
  {
    word: "guidar",
    eligible: false,
  },
  {
    word: "guidom",
    eligible: false,
  },
  {
    word: "Guigiu",
    eligible: false,
  },
  {
    word: "guilda",
    eligible: false,
  },
  {
    word: "guilho",
    eligible: false,
  },
  {
    word: "guimba",
    eligible: false,
  },
  {
    word: "guimbé",
    eligible: false,
  },
  {
    word: "guimbi",
    eligible: false,
  },
  {
    word: "guímel",
    eligible: false,
  },
  {
    word: "guimpe",
    eligible: false,
  },
  {
    word: "guinal",
    eligible: false,
  },
  {
    word: "guinar",
    eligible: false,
  },
  {
    word: "guinaú",
    eligible: false,
  },
  {
    word: "guinés",
    eligible: false,
  },
  {
    word: "guinéu",
    eligible: false,
  },
  {
    word: "guirás",
    eligible: false,
  },
  {
    word: "guirri",
    eligible: false,
  },
  {
    word: "guisar",
    eligible: false,
  },
  {
    word: "guivra",
    eligible: false,
  },
  {
    word: "guizar",
    eligible: false,
  },
  {
    word: "guizos",
    eligible: false,
  },
  {
    word: "gujará",
    eligible: false,
  },
  {
    word: "gujire",
    eligible: false,
  },
  {
    word: "gulala",
    eligible: false,
  },
  {
    word: "gulapa",
    eligible: false,
  },
  {
    word: "gulgul",
    eligible: false,
  },
  {
    word: "gulosa",
    eligible: false,
  },
  {
    word: "guloso",
    eligible: false,
  },
  {
    word: "guluve",
    eligible: false,
  },
  {
    word: "gumate",
    eligible: false,
  },
  {
    word: "gúmena",
    eligible: false,
  },
  {
    word: "gúmico",
    eligible: false,
  },
  {
    word: "gumina",
    eligible: false,
  },
  {
    word: "gumite",
    eligible: false,
  },
  {
    word: "gumoso",
    eligible: false,
  },
  {
    word: "guncho",
    eligible: false,
  },
  {
    word: "gúndia",
    eligible: false,
  },
  {
    word: "gundra",
    eligible: false,
  },
  {
    word: "gunelo",
    eligible: false,
  },
  {
    word: "gúnera",
    eligible: false,
  },
  {
    word: "gunfar",
    eligible: false,
  },
  {
    word: "gunite",
    eligible: false,
  },
  {
    word: "gurabo",
    eligible: false,
  },
  {
    word: "gurabu",
    eligible: false,
  },
  {
    word: "guraém",
    eligible: false,
  },
  {
    word: "gurami",
    eligible: false,
  },
  {
    word: "guratã",
    eligible: false,
  },
  {
    word: "gurcar",
    eligible: false,
  },
  {
    word: "gureri",
    eligible: false,
  },
  {
    word: "guresi",
    eligible: false,
  },
  {
    word: "gurgau",
    eligible: false,
  },
  {
    word: "Gurgel",
    eligible: false,
  },
  {
    word: "guriba",
    eligible: false,
  },
  {
    word: "guribu",
    eligible: false,
  },
  {
    word: "guriçá",
    eligible: false,
  },
  {
    word: "guriri",
    eligible: false,
  },
  {
    word: "gurita",
    eligible: false,
  },
  {
    word: "Gurjão",
    eligible: false,
  },
  {
    word: "gurnir",
    eligible: false,
  },
  {
    word: "guropé",
    eligible: false,
  },
  {
    word: "gurubu",
    eligible: false,
  },
  {
    word: "guruçá",
    eligible: false,
  },
  {
    word: "guruçu",
    eligible: false,
  },
  {
    word: "Gurupá",
    eligible: false,
  },
  {
    word: "Gurupi",
    eligible: false,
  },
  {
    word: "gurupu",
    eligible: false,
  },
  {
    word: "gururi",
    eligible: false,
  },
  {
    word: "gusano",
    eligible: false,
  },
  {
    word: "Gusmão",
    eligible: false,
  },
  {
    word: "gustar",
    eligible: false,
  },
  {
    word: "gutina",
    eligible: false,
  },
  {
    word: "gútulo",
    eligible: false,
  },
  {
    word: "guzerá",
    eligible: false,
  },
  {
    word: "habeas",
    eligible: false,
  },
  {
    word: "habena",
    eligible: false,
  },
  {
    word: "hábito",
    eligible: false,
  },
  {
    word: "Hacatã",
    eligible: false,
  },
  {
    word: "hacata",
    eligible: false,
  },
  {
    word: "hacker",
    eligible: false,
  },
  {
    word: "hacube",
    eligible: false,
  },
  {
    word: "Hadade",
    eligible: false,
  },
  {
    word: "Hadata",
    eligible: false,
  },
  {
    word: "hadena",
    eligible: false,
  },
  {
    word: "hadimu",
    eligible: false,
  },
  {
    word: "hadrão",
    eligible: false,
  },
  {
    word: "hádron",
    eligible: false,
  },
  {
    word: "hafnia",
    eligible: false,
  },
  {
    word: "háfnio",
    eligible: false,
  },
  {
    word: "Hagabe",
    eligible: false,
  },
  {
    word: "Hagias",
    eligible: false,
  },
  {
    word: "haicai",
    eligible: false,
  },
  {
    word: "Haimon",
    eligible: false,
  },
  {
    word: "haique",
    eligible: false,
  },
  {
    word: "hájibe",
    eligible: false,
  },
  {
    word: "Hajime",
    eligible: false,
  },
  {
    word: "halaca",
    eligible: false,
  },
  {
    word: "halali",
    eligible: false,
  },
  {
    word: "haleso",
    eligible: false,
  },
  {
    word: "haleto",
    eligible: false,
  },
  {
    word: "halial",
    eligible: false,
  },
  {
    word: "hálice",
    eligible: false,
  },
  {
    word: "hálimo",
    eligible: false,
  },
  {
    word: "halito",
    eligible: false,
  },
  {
    word: "hálito",
    eligible: false,
  },
  {
    word: "Haloés",
    eligible: false,
  },
  {
    word: "halter",
    eligible: false,
  },
  {
    word: "háluce",
    eligible: false,
  },
  {
    word: "hamada",
    eligible: false,
  },
  {
    word: "Hamate",
    eligible: false,
  },
  {
    word: "hamato",
    eligible: false,
  },
  {
    word: "hamita",
    eligible: false,
  },
  {
    word: "hamito",
    eligible: false,
  },
  {
    word: "Hamlet",
    eligible: false,
  },
  {
    word: "hamoso",
    eligible: false,
  },
  {
    word: "hâmulo",
    eligible: false,
  },
  {
    word: "Hanani",
    eligible: false,
  },
  {
    word: "Hanbal",
    eligible: false,
  },
  {
    word: "Handel",
    eligible: false,
  },
  {
    word: "hangar",
    eligible: false,
  },
  {
    word: "Haniel",
    eligible: false,
  },
  {
    word: "Hanrão",
    eligible: false,
  },
  {
    word: "Hansel",
    eligible: false,
  },
  {
    word: "Hanucá",
    eligible: false,
  },
  {
    word: "hápalo",
    eligible: false,
  },
  {
    word: "háquia",
    eligible: false,
  },
  {
    word: "Harade",
    eligible: false,
  },
  {
    word: "Harare",
    eligible: false,
  },
  {
    word: "harari",
    eligible: false,
  },
  {
    word: "Harefe",
    eligible: false,
  },
  {
    word: "hargio",
    eligible: false,
  },
  {
    word: "haridi",
    eligible: false,
  },
  {
    word: "Hariel",
    eligible: false,
  },
  {
    word: "Harlem",
    eligible: false,
  },
  {
    word: "harpar",
    eligible: false,
  },
  {
    word: "harpia",
    eligible: false,
  },
  {
    word: "hártea",
    eligible: false,
  },
  {
    word: "harude",
    eligible: false,
  },
  {
    word: "Hasita",
    eligible: false,
  },
  {
    word: "hássio",
    eligible: false,
  },
  {
    word: "hástea",
    eligible: false,
  },
  {
    word: "hastes",
    eligible: false,
  },
  {
    word: "hástia",
    eligible: false,
  },
  {
    word: "hastil",
    eligible: false,
  },
  {
    word: "hastim",
    eligible: false,
  },
  {
    word: "Hasubá",
    eligible: false,
  },
  {
    word: "Hasube",
    eligible: false,
  },
  {
    word: "Hasufa",
    eligible: false,
  },
  {
    word: "hatama",
    eligible: false,
  },
  {
    word: "Hatate",
    eligible: false,
  },
  {
    word: "Hatifa",
    eligible: false,
  },
  {
    word: "Hatita",
    eligible: false,
  },
  {
    word: "hauina",
    eligible: false,
  },
  {
    word: "haurir",
    eligible: false,
  },
  {
    word: "hausto",
    eligible: false,
  },
  {
    word: "havano",
    eligible: false,
  },
  {
    word: "Havilá",
    eligible: false,
  },
  {
    word: "Havote",
    eligible: false,
  },
  {
    word: "haxixe",
    eligible: false,
  },
  {
    word: "Hazael",
    eligible: false,
  },
  {
    word: "hazena",
    eligible: false,
  },
  {
    word: "Haziel",
    eligible: false,
  },
  {
    word: "Hazine",
    eligible: false,
  },
  {
    word: "heango",
    eligible: false,
  },
  {
    word: "hebreu",
    eligible: false,
  },
  {
    word: "Hecate",
    eligible: false,
  },
  {
    word: "hechor",
    eligible: false,
  },
  {
    word: "héctia",
    eligible: false,
  },
  {
    word: "Hector",
    eligible: false,
  },
  {
    word: "Hécuba",
    eligible: false,
  },
  {
    word: "hédera",
    eligible: false,
  },
  {
    word: "hefner",
    eligible: false,
  },
  {
    word: "hégira",
    eligible: false,
  },
  {
    word: "hêimia",
    eligible: false,
  },
  {
    word: "Heitor",
    eligible: false,
  },
  {
    word: "Hélber",
    eligible: false,
  },
  {
    word: "Helbom",
    eligible: false,
  },
  {
    word: "Helcai",
    eligible: false,
  },
  {
    word: "Hélcio",
    eligible: false,
  },
  {
    word: "Heldai",
    eligible: false,
  },
  {
    word: "Hélder",
    eligible: false,
  },
  {
    word: "Helede",
    eligible: false,
  },
  {
    word: "Helefe",
    eligible: false,
  },
  {
    word: "Helena",
    eligible: false,
  },
  {
    word: "helena",
    eligible: false,
  },
  {
    word: "helene",
    eligible: false,
  },
  {
    word: "heleno",
    eligible: false,
  },
  {
    word: "helião",
    eligible: false,
  },
  {
    word: "hélice",
    eligible: false,
  },
  {
    word: "hélico",
    eligible: false,
  },
  {
    word: "helíea",
    eligible: false,
  },
  {
    word: "Helier",
    eligible: false,
  },
  {
    word: "Heline",
    eligible: false,
  },
  {
    word: "helino",
    eligible: false,
  },
  {
    word: "hélion",
    eligible: false,
  },
  {
    word: "hélmis",
    eligible: false,
  },
  {
    word: "hélode",
    eligible: false,
  },
  {
    word: "hélodo",
    eligible: false,
  },
  {
    word: "helope",
    eligible: false,
  },
  {
    word: "hélope",
    eligible: false,
  },
  {
    word: "hélops",
    eligible: false,
  },
  {
    word: "helose",
    eligible: false,
  },
  {
    word: "Helton",
    eligible: false,
  },
  {
    word: "hélula",
    eligible: false,
  },
  {
    word: "hélvio",
    eligible: false,
  },
  {
    word: "hêmase",
    eligible: false,
  },
  {
    word: "hemato",
    eligible: false,
  },
  {
    word: "hemera",
    eligible: false,
  },
  {
    word: "hemina",
    eligible: false,
  },
  {
    word: "hemipo",
    eligible: false,
  },
  {
    word: "hêmiso",
    eligible: false,
  },
  {
    word: "hemite",
    eligible: false,
  },
  {
    word: "hemixo",
    eligible: false,
  },
  {
    word: "hêneto",
    eligible: false,
  },
  {
    word: "henide",
    eligible: false,
  },
  {
    word: "hênrio",
    eligible: false,
  },
  {
    word: "hepato",
    eligible: false,
  },
  {
    word: "heptil",
    eligible: false,
  },
  {
    word: "Herbes",
    eligible: false,
  },
  {
    word: "herdar",
    eligible: false,
  },
  {
    word: "herege",
    eligible: false,
  },
  {
    word: "hereia",
    eligible: false,
  },
  {
    word: "hereja",
    eligible: false,
  },
  {
    word: "herela",
    eligible: false,
  },
  {
    word: "herero",
    eligible: false,
  },
  {
    word: "hereró",
    eligible: false,
  },
  {
    word: "Herete",
    eligible: false,
  },
  {
    word: "Hérica",
    eligible: false,
  },
  {
    word: "herieu",
    eligible: false,
  },
  {
    word: "hérmeo",
    eligible: false,
  },
  {
    word: "hermes",
    eligible: false,
  },
  {
    word: "hermeu",
    eligible: false,
  },
  {
    word: "hérmia",
    eligible: false,
  },
  {
    word: "Hermos",
    eligible: false,
  },
  {
    word: "hérnia",
    eligible: false,
  },
  {
    word: "heróis",
    eligible: false,
  },
  {
    word: "herôon",
    eligible: false,
  },
  {
    word: "herpes",
    eligible: false,
  },
  {
    word: "hérpon",
    eligible: false,
  },
  {
    word: "hérulo",
    eligible: false,
  },
  {
    word: "Herval",
    eligible: false,
  },
  {
    word: "Hesbom",
    eligible: false,
  },
  {
    word: "Hesede",
    eligible: false,
  },
  {
    word: "Hesmom",
    eligible: false,
  },
  {
    word: "Hesrai",
    eligible: false,
  },
  {
    word: "hétego",
    eligible: false,
  },
  {
    word: "hétemã",
    eligible: false,
  },
  {
    word: "hetera",
    eligible: false,
  },
  {
    word: "hetero",
    eligible: false,
  },
  {
    word: "hétero",
    eligible: false,
  },
  {
    word: "hético",
    eligible: false,
  },
  {
    word: "hétigo",
    eligible: false,
  },
  {
    word: "hétodo",
    eligible: false,
  },
  {
    word: "heurté",
    eligible: false,
  },
  {
    word: "hexano",
    eligible: false,
  },
  {
    word: "hexere",
    eligible: false,
  },
  {
    word: "hexilo",
    eligible: false,
  },
  {
    word: "hexina",
    eligible: false,
  },
  {
    word: "hexita",
    eligible: false,
  },
  {
    word: "hexodo",
    eligible: false,
  },
  {
    word: "hexona",
    eligible: false,
  },
  {
    word: "hexose",
    eligible: false,
  },
  {
    word: "híadas",
    eligible: false,
  },
  {
    word: "híades",
    eligible: false,
  },
  {
    word: "hiálea",
    eligible: false,
  },
  {
    word: "hiante",
    eligible: false,
  },
  {
    word: "hiapuá",
    eligible: false,
  },
  {
    word: "hiatal",
    eligible: false,
  },
  {
    word: "hibleu",
    eligible: false,
  },
  {
    word: "híbode",
    eligible: false,
  },
  {
    word: "hiboma",
    eligible: false,
  },
  {
    word: "hícleo",
    eligible: false,
  },
  {
    word: "híctia",
    eligible: false,
  },
  {
    word: "hídneo",
    eligible: false,
  },
  {
    word: "hidras",
    eligible: false,
  },
  {
    word: "hídria",
    eligible: false,
  },
  {
    word: "hidroa",
    eligible: false,
  },
  {
    word: "hidrol",
    eligible: false,
  },
  {
    word: "hiemal",
    eligible: false,
  },
  {
    word: "hienas",
    eligible: false,
  },
  {
    word: "hifale",
    eligible: false,
  },
  {
    word: "hifema",
    eligible: false,
  },
  {
    word: "hifens",
    eligible: false,
  },
  {
    word: "hífico",
    eligible: false,
  },
  {
    word: "hígido",
    eligible: false,
  },
  {
    word: "Higino",
    eligible: false,
  },
  {
    word: "hílare",
    eligible: false,
  },
  {
    word: "hilata",
    eligible: false,
  },
  {
    word: "hileia",
    eligible: false,
  },
  {
    word: "hilela",
    eligible: false,
  },
  {
    word: "hileto",
    eligible: false,
  },
  {
    word: "hílico",
    eligible: false,
  },
  {
    word: "hílida",
    eligible: false,
  },
  {
    word: "hiline",
    eligible: false,
  },
  {
    word: "hilino",
    eligible: false,
  },
  {
    word: "hilipo",
    eligible: false,
  },
  {
    word: "Hilmar",
    eligible: false,
  },
  {
    word: "hilode",
    eligible: false,
  },
  {
    word: "hilota",
    eligible: false,
  },
  {
    word: "Hílton",
    eligible: false,
  },
  {
    word: "himbar",
    eligible: false,
  },
  {
    word: "himens",
    eligible: false,
  },
  {
    word: "hímera",
    eligible: false,
  },
  {
    word: "Hímero",
    eligible: false,
  },
  {
    word: "hínico",
    eligible: false,
  },
  {
    word: "hinodo",
    eligible: false,
  },
  {
    word: "híodon",
    eligible: false,
  },
  {
    word: "hioide",
    eligible: false,
  },
  {
    word: "hípata",
    eligible: false,
  },
  {
    word: "hipena",
    eligible: false,
  },
  {
    word: "hipera",
    eligible: false,
  },
  {
    word: "hípico",
    eligible: false,
  },
  {
    word: "hípida",
    eligible: false,
  },
  {
    word: "hipnal",
    eligible: false,
  },
  {
    word: "hípnea",
    eligible: false,
  },
  {
    word: "hipote",
    eligible: false,
  },
  {
    word: "hipoxe",
    eligible: false,
  },
  {
    word: "hippie",
    eligible: false,
  },
  {
    word: "híptis",
    eligible: false,
  },
  {
    word: "hipure",
    eligible: false,
  },
  {
    word: "hipuro",
    eligible: false,
  },
  {
    word: "hírace",
    eligible: false,
  },
  {
    word: "hirara",
    eligible: false,
  },
  {
    word: "hireia",
    eligible: false,
  },
  {
    word: "hirgol",
    eligible: false,
  },
  {
    word: "Hirieu",
    eligible: false,
  },
  {
    word: "hirino",
    eligible: false,
  },
  {
    word: "hirirá",
    eligible: false,
  },
  {
    word: "Hiromi",
    eligible: false,
  },
  {
    word: "hírpex",
    eligible: false,
  },
  {
    word: "hirtar",
    eligible: false,
  },
  {
    word: "hirtos",
    eligible: false,
  },
  {
    word: "hirudo",
    eligible: false,
  },
  {
    word: "hispar",
    eligible: false,
  },
  {
    word: "hissom",
    eligible: false,
  },
  {
    word: "hister",
    eligible: false,
  },
  {
    word: "hitita",
    eligible: false,
  },
  {
    word: "Hitler",
    eligible: false,
  },
  {
    word: "hiulco",
    eligible: false,
  },
  {
    word: "hoazim",
    eligible: false,
  },
  {
    word: "Hobabe",
    eligible: false,
  },
  {
    word: "hodamo",
    eligible: false,
  },
  {
    word: "Hodeva",
    eligible: false,
  },
  {
    word: "hólmio",
    eligible: false,
  },
  {
    word: "hólobo",
    eligible: false,
  },
  {
    word: "hólopo",
    eligible: false,
  },
  {
    word: "holter",
    eligible: false,
  },
  {
    word: "homaça",
    eligible: false,
  },
  {
    word: "homana",
    eligible: false,
  },
  {
    word: "homaro",
    eligible: false,
  },
  {
    word: "homela",
    eligible: false,
  },
  {
    word: "Homens",
    eligible: false,
  },
  {
    word: "homens",
    eligible: false,
  },
  {
    word: "Homero",
    eligible: false,
  },
  {
    word: "homine",
    eligible: false,
  },
  {
    word: "hômolo",
    eligible: false,
  },
  {
    word: "homoro",
    eligible: false,
  },
  {
    word: "homose",
    eligible: false,
  },
  {
    word: "honrar",
    eligible: false,
  },
  {
    word: "honras",
    eligible: false,
  },
  {
    word: "hoóbia",
    eligible: false,
  },
  {
    word: "hoódia",
    eligible: false,
  },
  {
    word: "hoombe",
    eligible: false,
  },
  {
    word: "hóplia",
    eligible: false,
  },
  {
    word: "hóplon",
    eligible: false,
  },
  {
    word: "hóquei",
    eligible: false,
  },
  {
    word: "Horace",
    eligible: false,
  },
  {
    word: "hórcia",
    eligible: false,
  },
  {
    word: "hórdeo",
    eligible: false,
  },
  {
    word: "Horebe",
    eligible: false,
  },
  {
    word: "horror",
    eligible: false,
  },
  {
    word: "hortar",
    eligible: false,
  },
  {
    word: "hortas",
    eligible: false,
  },
  {
    word: "hórtia",
    eligible: false,
  },
  {
    word: "hortos",
    eligible: false,
  },
  {
    word: "Hosama",
    eligible: false,
  },
  {
    word: "hosana",
    eligible: false,
  },
  {
    word: "hostal",
    eligible: false,
  },
  {
    word: "hostau",
    eligible: false,
  },
  {
    word: "hóstia",
    eligible: false,
  },
  {
    word: "hostil",
    eligible: false,
  },
  {
    word: "hoteia",
    eligible: false,
  },
  {
    word: "houari",
    eligible: false,
  },
  {
    word: "houcha",
    eligible: false,
  },
  {
    word: "huáceo",
    eligible: false,
  },
  {
    word: "huaino",
    eligible: false,
  },
  {
    word: "huamal",
    eligible: false,
  },
  {
    word: "huambe",
    eligible: false,
  },
  {
    word: "huambo",
    eligible: false,
  },
  {
    word: "huanói",
    eligible: false,
  },
  {
    word: "Hübner",
    eligible: false,
  },
  {
    word: "húbris",
    eligible: false,
  },
  {
    word: "Hudson",
    eligible: false,
  },
  {
    word: "huênia",
    eligible: false,
  },
  {
    word: "huerta",
    eligible: false,
  },
  {
    word: "huhner",
    eligible: false,
  },
  {
    word: "hulhas",
    eligible: false,
  },
  {
    word: "humada",
    eligible: false,
  },
  {
    word: "humano",
    eligible: false,
  },
  {
    word: "húmico",
    eligible: false,
  },
  {
    word: "húmile",
    eligible: false,
  },
  {
    word: "humina",
    eligible: false,
  },
  {
    word: "humiri",
    eligible: false,
  },
  {
    word: "humite",
    eligible: false,
  },
  {
    word: "humoso",
    eligible: false,
  },
  {
    word: "húmulo",
    eligible: false,
  },
  {
    word: "huquer",
    eligible: false,
  },
  {
    word: "hússar",
    eligible: false,
  },
  {
    word: "Huzote",
    eligible: false,
  },
  {
    word: "iabacê",
    eligible: false,
  },
  {
    word: "iabaim",
    eligible: false,
  },
  {
    word: "iaburu",
    eligible: false,
  },
  {
    word: "iaçanã",
    eligible: false,
  },
  {
    word: "iacuma",
    eligible: false,
  },
  {
    word: "iacuto",
    eligible: false,
  },
  {
    word: "iadagã",
    eligible: false,
  },
  {
    word: "iaefum",
    eligible: false,
  },
  {
    word: "ialaxé",
    eligible: false,
  },
  {
    word: "ialhoí",
    eligible: false,
  },
  {
    word: "ialhor",
    eligible: false,
  },
  {
    word: "ialilá",
    eligible: false,
  },
  {
    word: "ialodê",
    eligible: false,
  },
  {
    word: "ialofo",
    eligible: false,
  },
  {
    word: "iamacê",
    eligible: false,
  },
  {
    word: "iameia",
    eligible: false,
  },
  {
    word: "iamorô",
    eligible: false,
  },
  {
    word: "iândom",
    eligible: false,
  },
  {
    word: "ianomã",
    eligible: false,
  },
  {
    word: "ianque",
    eligible: false,
  },
  {
    word: "iantra",
    eligible: false,
  },
  {
    word: "iapana",
    eligible: false,
  },
  {
    word: "iápice",
    eligible: false,
  },
  {
    word: "iápide",
    eligible: false,
  },
  {
    word: "iapuçá",
    eligible: false,
  },
  {
    word: "iarivá",
    eligible: false,
  },
  {
    word: "iarumá",
    eligible: false,
  },
  {
    word: "Iasião",
    eligible: false,
  },
  {
    word: "Iasmim",
    eligible: false,
  },
  {
    word: "iássio",
    eligible: false,
  },
  {
    word: "iatagã",
    eligible: false,
  },
  {
    word: "iatreu",
    eligible: false,
  },
  {
    word: "iatria",
    eligible: false,
  },
  {
    word: "iátrio",
    eligible: false,
  },
  {
    word: "iauira",
    eligible: false,
  },
  {
    word: "Iaundé",
    eligible: false,
  },
  {
    word: "iaupês",
    eligible: false,
  },
  {
    word: "iazele",
    eligible: false,
  },
  {
    word: "iázige",
    eligible: false,
  },
  {
    word: "iázigo",
    eligible: false,
  },
  {
    word: "ibabiú",
    eligible: false,
  },
  {
    word: "ibacau",
    eligible: false,
  },
  {
    word: "ibácia",
    eligible: false,
  },
  {
    word: "Ibaiti",
    eligible: false,
  },
  {
    word: "ibapoi",
    eligible: false,
  },
  {
    word: "ibapoó",
    eligible: false,
  },
  {
    word: "ibério",
    eligible: false,
  },
  {
    word: "ibéris",
    eligible: false,
  },
  {
    word: "Ibiaçá",
    eligible: false,
  },
  {
    word: "Ibiara",
    eligible: false,
  },
  {
    word: "ibibio",
    eligible: false,
  },
  {
    word: "Ibicuí",
    eligible: false,
  },
  {
    word: "Ibidas",
    eligible: false,
  },
  {
    word: "ibidem",
    eligible: false,
  },
  {
    word: "ibídeo",
    eligible: false,
  },
  {
    word: "ibijaú",
    eligible: false,
  },
  {
    word: "ibioca",
    eligible: false,
  },
  {
    word: "Ibiúna",
    eligible: false,
  },
  {
    word: "Ibleão",
    eligible: false,
  },
  {
    word: "iboicu",
    eligible: false,
  },
  {
    word: "Ibraim",
    eligible: false,
  },
  {
    word: "Icádio",
    eligible: false,
  },
  {
    word: "icanga",
    eligible: false,
  },
  {
    word: "Icanor",
    eligible: false,
  },
  {
    word: "Icapuí",
    eligible: false,
  },
  {
    word: "Icaraí",
    eligible: false,
  },
  {
    word: "icário",
    eligible: false,
  },
  {
    word: "icense",
    eligible: false,
  },
  {
    word: "icéria",
    eligible: false,
  },
  {
    word: "ichibi",
    eligible: false,
  },
  {
    word: "ichibu",
    eligible: false,
  },
  {
    word: "Ichiro",
    eligible: false,
  },
  {
    word: "ichoba",
    eligible: false,
  },
  {
    word: "Icílio",
    eligible: false,
  },
  {
    word: "icnito",
    eligible: false,
  },
  {
    word: "icnopo",
    eligible: false,
  },
  {
    word: "icoglã",
    eligible: false,
  },
  {
    word: "Iconha",
    eligible: false,
  },
  {
    word: "Icônio",
    eligible: false,
  },
  {
    word: "icóqui",
    eligible: false,
  },
  {
    word: "íctero",
    eligible: false,
  },
  {
    word: "ictina",
    eligible: false,
  },
  {
    word: "Ictino",
    eligible: false,
  },
  {
    word: "ictiol",
    eligible: false,
  },
  {
    word: "icumbe",
    eligible: false,
  },
  {
    word: "icungo",
    eligible: false,
  },
  {
    word: "idades",
    eligible: false,
  },
  {
    word: "idaíta",
    eligible: false,
  },
  {
    word: "idálio",
    eligible: false,
  },
  {
    word: "idalxa",
    eligible: false,
  },
  {
    word: "Idanha",
    eligible: false,
  },
  {
    word: "idante",
    eligible: false,
  },
  {
    word: "ideias",
    eligible: false,
  },
  {
    word: "Idelmo",
    eligible: false,
  },
  {
    word: "idésia",
    eligible: false,
  },
  {
    word: "ídiche",
    eligible: false,
  },
  {
    word: "Idiene",
    eligible: false,
  },
  {
    word: "idílio",
    eligible: false,
  },
  {
    word: "idioma",
    eligible: false,
  },
  {
    word: "iditol",
    eligible: false,
  },
  {
    word: "idjogó",
    eligible: false,
  },
  {
    word: "idoiro",
    eligible: false,
  },
  {
    word: "idôneo",
    eligible: false,
  },
  {
    word: "idótea",
    eligible: false,
  },
  {
    word: "idouro",
    eligible: false,
  },
  {
    word: "Idúlio",
    eligible: false,
  },
  {
    word: "idumeu",
    eligible: false,
  },
  {
    word: "iebaro",
    eligible: false,
  },
  {
    word: "ieboxi",
    eligible: false,
  },
  {
    word: "Iêmene",
    eligible: false,
  },
  {
    word: "ienita",
    eligible: false,
  },
  {
    word: "iererê",
    eligible: false,
  },
  {
    word: "iérico",
    eligible: false,
  },
  {
    word: "ietino",
    eligible: false,
  },
  {
    word: "ifínoe",
    eligible: false,
  },
  {
    word: "ifrite",
    eligible: false,
  },
  {
    word: "ifuche",
    eligible: false,
  },
  {
    word: "ifumbe",
    eligible: false,
  },
  {
    word: "ifusse",
    eligible: false,
  },
  {
    word: "iganga",
    eligible: false,
  },
  {
    word: "igapós",
    eligible: false,
  },
  {
    word: "igarçu",
    eligible: false,
  },
  {
    word: "igasol",
    eligible: false,
  },
  {
    word: "igbira",
    eligible: false,
  },
  {
    word: "igbona",
    eligible: false,
  },
  {
    word: "iglite",
    eligible: false,
  },
  {
    word: "iglito",
    eligible: false,
  },
  {
    word: "ignaro",
    eligible: false,
  },
  {
    word: "ignavo",
    eligible: false,
  },
  {
    word: "ignito",
    eligible: false,
  },
  {
    word: "ignoto",
    eligible: false,
  },
  {
    word: "igongo",
    eligible: false,
  },
  {
    word: "igonha",
    eligible: false,
  },
  {
    word: "igreja",
    eligible: false,
  },
  {
    word: "igrejó",
    eligible: false,
  },
  {
    word: "Iguaba",
    eligible: false,
  },
  {
    word: "iguaba",
    eligible: false,
  },
  {
    word: "iguaçu",
    eligible: false,
  },
  {
    word: "iguais",
    eligible: false,
  },
  {
    word: "iguana",
    eligible: false,
  },
  {
    word: "iguano",
    eligible: false,
  },
  {
    word: "Iguape",
    eligible: false,
  },
  {
    word: "Iguapé",
    eligible: false,
  },
  {
    word: "iguape",
    eligible: false,
  },
  {
    word: "iguapó",
    eligible: false,
  },
  {
    word: "Iguara",
    eligible: false,
  },
  {
    word: "iguari",
    eligible: false,
  },
  {
    word: "Iguatu",
    eligible: false,
  },
  {
    word: "iguexá",
    eligible: false,
  },
  {
    word: "iianhá",
    eligible: false,
  },
  {
    word: "iianlá",
    eligible: false,
  },
  {
    word: "iijexá",
    eligible: false,
  },
  {
    word: "ijinde",
    eligible: false,
  },
  {
    word: "ilambo",
    eligible: false,
  },
  {
    word: "ilapso",
    eligible: false,
  },
  {
    word: "ilarca",
    eligible: false,
  },
  {
    word: "ilecum",
    eligible: false,
  },
  {
    word: "ileíte",
    eligible: false,
  },
  {
    word: "ileomo",
    eligible: false,
  },
  {
    word: "ileose",
    eligible: false,
  },
  {
    word: "ileoso",
    eligible: false,
  },
  {
    word: "ilequé",
    eligible: false,
  },
  {
    word: "ilhapa",
    eligible: false,
  },
  {
    word: "ílhavo",
    eligible: false,
  },
  {
    word: "ilheta",
    eligible: false,
  },
  {
    word: "ilhoas",
    eligible: false,
  },
  {
    word: "ilhoco",
    eligible: false,
  },
  {
    word: "ilhote",
    eligible: false,
  },
  {
    word: "ilhoto",
    eligible: false,
  },
  {
    word: "ilíaco",
    eligible: false,
  },
  {
    word: "ilíade",
    eligible: false,
  },
  {
    word: "ilíbio",
    eligible: false,
  },
  {
    word: "iliçar",
    eligible: false,
  },
  {
    word: "ilíceo",
    eligible: false,
  },
  {
    word: "ilício",
    eligible: false,
  },
  {
    word: "Ilídio",
    eligible: false,
  },
  {
    word: "ilidir",
    eligible: false,
  },
  {
    word: "ilínio",
    eligible: false,
  },
  {
    word: "Ilíone",
    eligible: false,
  },
  {
    word: "Ilirio",
    eligible: false,
  },
  {
    word: "ilírio",
    eligible: false,
  },
  {
    word: "ilísia",
    eligible: false,
  },
  {
    word: "Ilítia",
    eligible: false,
  },
  {
    word: "illita",
    eligible: false,
  },
  {
    word: "ilogia",
    eligible: false,
  },
  {
    word: "iluaiê",
    eligible: false,
  },
  {
    word: "iludir",
    eligible: false,
  },
  {
    word: "ilumba",
    eligible: false,
  },
  {
    word: "ilúrio",
    eligible: false,
  },
  {
    word: "ilusão",
    eligible: false,
  },
  {
    word: "ilusir",
    eligible: false,
  },
  {
    word: "ilusor",
    eligible: false,
  },
  {
    word: "ilúvio",
    eligible: false,
  },
  {
    word: "ilvate",
    eligible: false,
  },
  {
    word: "imagem",
    eligible: false,
  },
  {
    word: "imanar",
    eligible: false,
  },
  {
    word: "ímanes",
    eligible: false,
  },
  {
    word: "Imaruí",
    eligible: false,
  },
  {
    word: "imãzar",
    eligible: false,
  },
  {
    word: "imbele",
    eligible: false,
  },
  {
    word: "imbila",
    eligible: false,
  },
  {
    word: "imbiuá",
    eligible: false,
  },
  {
    word: "imborã",
    eligible: false,
  },
  {
    word: "imbotê",
    eligible: false,
  },
  {
    word: "imbuia",
    eligible: false,
  },
  {
    word: "imbuiá",
    eligible: false,
  },
  {
    word: "imbuim",
    eligible: false,
  },
  {
    word: "imbuir",
    eligible: false,
  },
  {
    word: "imburi",
    eligible: false,
  },
  {
    word: "Imelda",
    eligible: false,
  },
  {
    word: "imenso",
    eligible: false,
  },
  {
    word: "imerso",
    eligible: false,
  },
  {
    word: "imisso",
    eligible: false,
  },
  {
    word: "imitar",
    eligible: false,
  },
  {
    word: "imitir",
    eligible: false,
  },
  {
    word: "impaca",
    eligible: false,
  },
  {
    word: "ímpado",
    eligible: false,
  },
  {
    word: "impala",
    eligible: false,
  },
  {
    word: "impene",
    eligible: false,
  },
  {
    word: "ímpeto",
    eligible: false,
  },
  {
    word: "impige",
    eligible: false,
  },
  {
    word: "impilo",
    eligible: false,
  },
  {
    word: "impota",
    eligible: false,
  },
  {
    word: "impuje",
    eligible: false,
  },
  {
    word: "impune",
    eligible: false,
  },
  {
    word: "impura",
    eligible: false,
  },
  {
    word: "impuro",
    eligible: false,
  },
  {
    word: "imutar",
    eligible: false,
  },
  {
    word: "inábil",
    eligible: false,
  },
  {
    word: "inação",
    eligible: false,
  },
  {
    word: "inácia",
    eligible: false,
  },
  {
    word: "Inácio",
    eligible: false,
  },
  {
    word: "inácio",
    eligible: false,
  },
  {
    word: "inaiaí",
    eligible: false,
  },
  {
    word: "inaíba",
    eligible: false,
  },
  {
    word: "inajaí",
    eligible: false,
  },
  {
    word: "inajás",
    eligible: false,
  },
  {
    word: "inalar",
    eligible: false,
  },
  {
    word: "Inaldo",
    eligible: false,
  },
  {
    word: "inambu",
    eligible: false,
  },
  {
    word: "inamuí",
    eligible: false,
  },
  {
    word: "inamus",
    eligible: false,
  },
  {
    word: "inamuu",
    eligible: false,
  },
  {
    word: "Inandê",
    eligible: false,
  },
  {
    word: "inanir",
    eligible: false,
  },
  {
    word: "incabi",
    eligible: false,
  },
  {
    word: "incalá",
    eligible: false,
  },
  {
    word: "inchar",
    eligible: false,
  },
  {
    word: "incoce",
    eligible: false,
  },
  {
    word: "íncola",
    eligible: false,
  },
  {
    word: "incréu",
    eligible: false,
  },
  {
    word: "íncubo",
    eligible: false,
  },
  {
    word: "incuça",
    eligible: false,
  },
  {
    word: "ínculo",
    eligible: false,
  },
  {
    word: "incuso",
    eligible: false,
  },
  {
    word: "indaca",
    eligible: false,
  },
  {
    word: "indaiá",
    eligible: false,
  },
  {
    word: "indaié",
    eligible: false,
  },
  {
    word: "indajá",
    eligible: false,
  },
  {
    word: "indene",
    eligible: false,
  },
  {
    word: "indeno",
    eligible: false,
  },
  {
    word: "índias",
    eligible: false,
  },
  {
    word: "indicã",
    eligible: false,
  },
  {
    word: "índica",
    eligible: false,
  },
  {
    word: "índice",
    eligible: false,
  },
  {
    word: "Índico",
    eligible: false,
  },
  {
    word: "índico",
    eligible: false,
  },
  {
    word: "índigo",
    eligible: false,
  },
  {
    word: "índios",
    eligible: false,
  },
  {
    word: "Indira",
    eligible: false,
  },
  {
    word: "indita",
    eligible: false,
  },
  {
    word: "índium",
    eligible: false,
  },
  {
    word: "índole",
    eligible: false,
  },
  {
    word: "indona",
    eligible: false,
  },
  {
    word: "indria",
    eligible: false,
  },
  {
    word: "ineína",
    eligible: false,
  },
  {
    word: "ineixa",
    eligible: false,
  },
  {
    word: "inembu",
    eligible: false,
  },
  {
    word: "inepto",
    eligible: false,
  },
  {
    word: "inerir",
    eligible: false,
  },
  {
    word: "inerme",
    eligible: false,
  },
  {
    word: "inerte",
    eligible: false,
  },
  {
    word: "ineses",
    eligible: false,
  },
  {
    word: "infame",
    eligible: false,
  },
  {
    word: "ínfero",
    eligible: false,
  },
  {
    word: "infião",
    eligible: false,
  },
  {
    word: "ínfimo",
    eligible: false,
  },
  {
    word: "infize",
    eligible: false,
  },
  {
    word: "inflar",
    eligible: false,
  },
  {
    word: "ínfula",
    eligible: false,
  },
  {
    word: "ingaçu",
    eligible: false,
  },
  {
    word: "ingala",
    eligible: false,
  },
  {
    word: "inglês",
    eligible: false,
  },
  {
    word: "Ingmar",
    eligible: false,
  },
  {
    word: "ingome",
    eligible: false,
  },
  {
    word: "ingono",
    eligible: false,
  },
  {
    word: "ingoté",
    eligible: false,
  },
  {
    word: "Ingram",
    eligible: false,
  },
  {
    word: "íngrio",
    eligible: false,
  },
  {
    word: "inhame",
    eligible: false,
  },
  {
    word: "inhapa",
    eligible: false,
  },
  {
    word: "inhapi",
    eligible: false,
  },
  {
    word: "inhara",
    eligible: false,
  },
  {
    word: "inharé",
    eligible: false,
  },
  {
    word: "inhuma",
    eligible: false,
  },
  {
    word: "iniala",
    eligible: false,
  },
  {
    word: "inibir",
    eligible: false,
  },
  {
    word: "início",
    eligible: false,
  },
  {
    word: "inimbó",
    eligible: false,
  },
  {
    word: "iniomo",
    eligible: false,
  },
  {
    word: "iníquo",
    eligible: false,
  },
  {
    word: "inócuo",
    eligible: false,
  },
  {
    word: "inópia",
    eligible: false,
  },
  {
    word: "inputs",
    eligible: false,
  },
  {
    word: "insano",
    eligible: false,
  },
  {
    word: "ínscio",
    eligible: false,
  },
  {
    word: "inseto",
    eligible: false,
  },
  {
    word: "ínsito",
    eligible: false,
  },
  {
    word: "insone",
    eligible: false,
  },
  {
    word: "ínsono",
    eligible: false,
  },
  {
    word: "instar",
    eligible: false,
  },
  {
    word: "insuco",
    eligible: false,
  },
  {
    word: "insula",
    eligible: false,
  },
  {
    word: "ínsulo",
    eligible: false,
  },
  {
    word: "insumo",
    eligible: false,
  },
  {
    word: "íntero",
    eligible: false,
  },
  {
    word: "intigo",
    eligible: false,
  },
  {
    word: "íntimo",
    eligible: false,
  },
  {
    word: "intino",
    eligible: false,
  },
  {
    word: "íntino",
    eligible: false,
  },
  {
    word: "intisi",
    eligible: false,
  },
  {
    word: "intoto",
    eligible: false,
  },
  {
    word: "intrão",
    eligible: false,
  },
  {
    word: "intuir",
    eligible: false,
  },
  {
    word: "intulá",
    eligible: false,
  },
  {
    word: "inúbia",
    eligible: false,
  },
  {
    word: "inúleo",
    eligible: false,
  },
  {
    word: "inumar",
    eligible: false,
  },
  {
    word: "inupto",
    eligible: false,
  },
  {
    word: "inveca",
    eligible: false,
  },
  {
    word: "inveja",
    eligible: false,
  },
  {
    word: "invice",
    eligible: false,
  },
  {
    word: "invido",
    eligible: false,
  },
  {
    word: "ínvido",
    eligible: false,
  },
  {
    word: "inviso",
    eligible: false,
  },
  {
    word: "inzala",
    eligible: false,
  },
  {
    word: "inziba",
    eligible: false,
  },
  {
    word: "inzica",
    eligible: false,
  },
  {
    word: "ioculo",
    eligible: false,
  },
  {
    word: "iodado",
    eligible: false,
  },
  {
    word: "iodato",
    eligible: false,
  },
  {
    word: "iodeto",
    eligible: false,
  },
  {
    word: "iódico",
    eligible: false,
  },
  {
    word: "iódide",
    eligible: false,
  },
  {
    word: "iodina",
    eligible: false,
  },
  {
    word: "iodite",
    eligible: false,
  },
  {
    word: "iodona",
    eligible: false,
  },
  {
    word: "iodoso",
    eligible: false,
  },
  {
    word: "ioduro",
    eligible: false,
  },
  {
    word: "ioexol",
    eligible: false,
  },
  {
    word: "ioguim",
    eligible: false,
  },
  {
    word: "ioioca",
    eligible: false,
  },
  {
    word: "iôldia",
    eligible: false,
  },
  {
    word: "iolema",
    eligible: false,
  },
  {
    word: "iolita",
    eligible: false,
  },
  {
    word: "iólito",
    eligible: false,
  },
  {
    word: "iólogo",
    eligible: false,
  },
  {
    word: "Iomerê",
    eligible: false,
  },
  {
    word: "ioneno",
    eligible: false,
  },
  {
    word: "iônico",
    eligible: false,
  },
  {
    word: "ionita",
    eligible: false,
  },
  {
    word: "ionone",
    eligible: false,
  },
  {
    word: "iorimã",
    eligible: false,
  },
  {
    word: "Iorque",
    eligible: false,
  },
  {
    word: "ioruba",
    eligible: false,
  },
  {
    word: "iorubá",
    eligible: false,
  },
  {
    word: "iozita",
    eligible: false,
  },
  {
    word: "Ipauçu",
    eligible: false,
  },
  {
    word: "ipecaá",
    eligible: false,
  },
  {
    word: "ipecas",
    eligible: false,
  },
  {
    word: "ipequi",
    eligible: false,
  },
  {
    word: "ipeúba",
    eligible: false,
  },
  {
    word: "ipeúna",
    eligible: false,
  },
  {
    word: "ipeúva",
    eligible: false,
  },
  {
    word: "iPhone",
    eligible: false,
  },
  {
    word: "Ipiaçu",
    eligible: false,
  },
  {
    word: "ipídeo",
    eligible: false,
  },
  {
    word: "Ipiguá",
    eligible: false,
  },
  {
    word: "ipíneo",
    eligible: false,
  },
  {
    word: "ípnops",
    eligible: false,
  },
  {
    word: "ipombo",
    eligible: false,
  },
  {
    word: "ipsido",
    eligible: false,
  },
  {
    word: "ipsilo",
    eligible: false,
  },
  {
    word: "ípsilo",
    eligible: false,
  },
  {
    word: "iptima",
    eligible: false,
  },
  {
    word: "ipuaba",
    eligible: false,
  },
  {
    word: "ipuaçu",
    eligible: false,
  },
  {
    word: "ipuada",
    eligible: false,
  },
  {
    word: "ipuano",
    eligible: false,
  },
  {
    word: "ipuera",
    eligible: false,
  },
  {
    word: "iquira",
    eligible: false,
  },
  {
    word: "iquito",
    eligible: false,
  },
  {
    word: "iracuí",
    eligible: false,
  },
  {
    word: "iraíba",
    eligible: false,
  },
  {
    word: "iramba",
    eligible: false,
  },
  {
    word: "irânio",
    eligible: false,
  },
  {
    word: "iranxe",
    eligible: false,
  },
  {
    word: "Irapuã",
    eligible: false,
  },
  {
    word: "irapuá",
    eligible: false,
  },
  {
    word: "irapuã",
    eligible: false,
  },
  {
    word: "Iraque",
    eligible: false,
  },
  {
    word: "iratim",
    eligible: false,
  },
  {
    word: "iratuã",
    eligible: false,
  },
  {
    word: "irauçu",
    eligible: false,
  },
  {
    word: "iraúna",
    eligible: false,
  },
  {
    word: "irávia",
    eligible: false,
  },
  {
    word: "iraxim",
    eligible: false,
  },
  {
    word: "irênio",
    eligible: false,
  },
  {
    word: "iretol",
    eligible: false,
  },
  {
    word: "iriano",
    eligible: false,
  },
  {
    word: "iriate",
    eligible: false,
  },
  {
    word: "irídeo",
    eligible: false,
  },
  {
    word: "irídio",
    eligible: false,
  },
  {
    word: "iridol",
    eligible: false,
  },
  {
    word: "Irineu",
    eligible: false,
  },
  {
    word: "irisar",
    eligible: false,
  },
  {
    word: "irizar",
    eligible: false,
  },
  {
    word: "irmãos",
    eligible: false,
  },
  {
    word: "irocos",
    eligible: false,
  },
  {
    word: "ironia",
    eligible: false,
  },
  {
    word: "irrete",
    eligible: false,
  },
  {
    word: "írrito",
    eligible: false,
  },
  {
    word: "irruir",
    eligible: false,
  },
  {
    word: "iruçus",
    eligible: false,
  },
  {
    word: "isabel",
    eligible: false,
  },
  {
    word: "isacne",
    eligible: false,
  },
  {
    word: "Isaías",
    eligible: false,
  },
  {
    word: "Isamar",
    eligible: false,
  },
  {
    word: "isanto",
    eligible: false,
  },
  {
    word: "Isaque",
    eligible: false,
  },
  {
    word: "isarco",
    eligible: false,
  },
  {
    word: "isária",
    eligible: false,
  },
  {
    word: "ísatis",
    eligible: false,
  },
  {
    word: "isauro",
    eligible: false,
  },
  {
    word: "iscaço",
    eligible: false,
  },
  {
    word: "isíaco",
    eligible: false,
  },
  {
    word: "isídeo",
    eligible: false,
  },
  {
    word: "isídio",
    eligible: false,
  },
  {
    word: "Isidro",
    eligible: false,
  },
  {
    word: "islado",
    eligible: false,
  },
  {
    word: "islame",
    eligible: false,
  },
  {
    word: "Island",
    eligible: false,
  },
  {
    word: "isleno",
    eligible: false,
  },
  {
    word: "Ismael",
    eligible: false,
  },
  {
    word: "Ismail",
    eligible: false,
  },
  {
    word: "ismene",
    eligible: false,
  },
  {
    word: "isoaxe",
    eligible: false,
  },
  {
    word: "isóete",
    eligible: false,
  },
  {
    word: "isóeto",
    eligible: false,
  },
  {
    word: "isogal",
    eligible: false,
  },
  {
    word: "isogel",
    eligible: false,
  },
  {
    word: "isolar",
    eligible: false,
  },
  {
    word: "Isolda",
    eligible: false,
  },
  {
    word: "isopia",
    eligible: false,
  },
  {
    word: "isopor",
    eligible: false,
  },
  {
    word: "ísquio",
    eligible: false,
  },
  {
    word: "Israel",
    eligible: false,
  },
  {
    word: "israel",
    eligible: false,
  },
  {
    word: "issena",
    eligible: false,
  },
  {
    word: "Issias",
    eligible: false,
  },
  {
    word: "issico",
    eligible: false,
  },
  {
    word: "íssida",
    eligible: false,
  },
  {
    word: "issobo",
    eligible: false,
  },
  {
    word: "issubo",
    eligible: false,
  },
  {
    word: "issúbu",
    eligible: false,
  },
  {
    word: "issuco",
    eligible: false,
  },
  {
    word: "ístmio",
    eligible: false,
  },
  {
    word: "isuria",
    eligible: false,
  },
  {
    word: "isúria",
    eligible: false,
  },
  {
    word: "Itaara",
    eligible: false,
  },
  {
    word: "itacuã",
    eligible: false,
  },
  {
    word: "Itaeté",
    eligible: false,
  },
  {
    word: "Itaetê",
    eligible: false,
  },
  {
    word: "itaíba",
    eligible: false,
  },
  {
    word: "Itaipé",
    eligible: false,
  },
  {
    word: "Itaipu",
    eligible: false,
  },
  {
    word: "Itajaí",
    eligible: false,
  },
  {
    word: "Itália",
    eligible: false,
  },
  {
    word: "itália",
    eligible: false,
  },
  {
    word: "Italva",
    eligible: false,
  },
  {
    word: "Itamar",
    eligible: false,
  },
  {
    word: "itambá",
    eligible: false,
  },
  {
    word: "itambé",
    eligible: false,
  },
  {
    word: "itambi",
    eligible: false,
  },
  {
    word: "itangá",
    eligible: false,
  },
  {
    word: "itanha",
    eligible: false,
  },
  {
    word: "itanhá",
    eligible: false,
  },
  {
    word: "Itanhy",
    eligible: false,
  },
  {
    word: "Itaóca",
    eligible: false,
  },
  {
    word: "itaoca",
    eligible: false,
  },
  {
    word: "Itapoá",
    eligible: false,
  },
  {
    word: "itapoá",
    eligible: false,
  },
  {
    word: "itapuá",
    eligible: false,
  },
  {
    word: "itapuã",
    eligible: false,
  },
  {
    word: "Itapuí",
    eligible: false,
  },
  {
    word: "Itaqui",
    eligible: false,
  },
  {
    word: "Itatim",
    eligible: false,
  },
  {
    word: "itaúba",
    eligible: false,
  },
  {
    word: "Itauçu",
    eligible: false,
  },
  {
    word: "itaúna",
    eligible: false,
  },
  {
    word: "itengo",
    eligible: false,
  },
  {
    word: "iteque",
    eligible: false,
  },
  {
    word: "iterar",
    eligible: false,
  },
  {
    word: "Itidal",
    eligible: false,
  },
  {
    word: "Itinga",
    eligible: false,
  },
  {
    word: "itiqui",
    eligible: false,
  },
  {
    word: "Itiúba",
    eligible: false,
  },
  {
    word: "itoíta",
    eligible: false,
  },
  {
    word: "itoneu",
    eligible: false,
  },
  {
    word: "Itreão",
    eligible: false,
  },
  {
    word: "ítrico",
    eligible: false,
  },
  {
    word: "itrite",
    eligible: false,
  },
  {
    word: "Ituaçu",
    eligible: false,
  },
  {
    word: "ituano",
    eligible: false,
  },
  {
    word: "Itueto",
    eligible: false,
  },
  {
    word: "itumbo",
    eligible: false,
  },
  {
    word: "itureu",
    eligible: false,
  },
  {
    word: "iuberi",
    eligible: false,
  },
  {
    word: "iuçara",
    eligible: false,
  },
  {
    word: "iúlida",
    eligible: false,
  },
  {
    word: "iupati",
    eligible: false,
  },
  {
    word: "iuraco",
    eligible: false,
  },
  {
    word: "iurará",
    eligible: false,
  },
  {
    word: "iurari",
    eligible: false,
  },
  {
    word: "iurumi",
    eligible: false,
  },
  {
    word: "ivaína",
    eligible: false,
  },
  {
    word: "Ivaldo",
    eligible: false,
  },
  {
    word: "Ivânia",
    eligible: false,
  },
  {
    word: "ixanto",
    eligible: false,
  },
  {
    word: "ixíneo",
    eligible: false,
  },
  {
    word: "ixódio",
    eligible: false,
  },
  {
    word: "ixoras",
    eligible: false,
  },
  {
    word: "ixórea",
    eligible: false,
  },
  {
    word: "ixuabo",
    eligible: false,
  },
  {
    word: "Izabel",
    eligible: false,
  },
  {
    word: "Izaíra",
    eligible: false,
  },
  {
    word: "izalco",
    eligible: false,
  },
  {
    word: "izarra",
    eligible: false,
  },
  {
    word: "Iziane",
    eligible: false,
  },
  {
    word: "Izilda",
    eligible: false,
  },
  {
    word: "izinho",
    eligible: false,
  },
  {
    word: "izipra",
    eligible: false,
  },
  {
    word: "Izlias",
    eligible: false,
  },
  {
    word: "izombe",
    eligible: false,
  },
  {
    word: "Jaasai",
    eligible: false,
  },
  {
    word: "jabara",
    eligible: false,
  },
  {
    word: "jabari",
    eligible: false,
  },
  {
    word: "jabear",
    eligible: false,
  },
  {
    word: "jabeca",
    eligible: false,
  },
  {
    word: "jabiru",
    eligible: false,
  },
  {
    word: "jabitá",
    eligible: false,
  },
  {
    word: "jabite",
    eligible: false,
  },
  {
    word: "jabona",
    eligible: false,
  },
  {
    word: "Jaborá",
    eligible: false,
  },
  {
    word: "jabota",
    eligible: false,
  },
  {
    word: "jabotá",
    eligible: false,
  },
  {
    word: "Jaboti",
    eligible: false,
  },
  {
    word: "jaburá",
    eligible: false,
  },
  {
    word: "jaburu",
    eligible: false,
  },
  {
    word: "jabutá",
    eligible: false,
  },
  {
    word: "jabuti",
    eligible: false,
  },
  {
    word: "jacaçu",
    eligible: false,
  },
  {
    word: "jacaió",
    eligible: false,
  },
  {
    word: "jacama",
    eligible: false,
  },
  {
    word: "jacami",
    eligible: false,
  },
  {
    word: "jacana",
    eligible: false,
  },
  {
    word: "jaçana",
    eligible: false,
  },
  {
    word: "jaçanã",
    eligible: false,
  },
  {
    word: "jacapa",
    eligible: false,
  },
  {
    word: "jacapá",
    eligible: false,
  },
  {
    word: "jacapé",
    eligible: false,
  },
  {
    word: "jaçapé",
    eligible: false,
  },
  {
    word: "jacapu",
    eligible: false,
  },
  {
    word: "jacará",
    eligible: false,
  },
  {
    word: "jácara",
    eligible: false,
  },
  {
    word: "jacaré",
    eligible: false,
  },
  {
    word: "jacatá",
    eligible: false,
  },
  {
    word: "jacicá",
    eligible: false,
  },
  {
    word: "jacicô",
    eligible: false,
  },
  {
    word: "Jaciel",
    eligible: false,
  },
  {
    word: "jacina",
    eligible: false,
  },
  {
    word: "Jacobi",
    eligible: false,
  },
  {
    word: "jacobo",
    eligible: false,
  },
  {
    word: "jácoma",
    eligible: false,
  },
  {
    word: "jactar",
    eligible: false,
  },
  {
    word: "jacuba",
    eligible: false,
  },
  {
    word: "jáculo",
    eligible: false,
  },
  {
    word: "jacuma",
    eligible: false,
  },
  {
    word: "jacumã",
    eligible: false,
  },
  {
    word: "jacuna",
    eligible: false,
  },
  {
    word: "jacuné",
    eligible: false,
  },
  {
    word: "Jacuri",
    eligible: false,
  },
  {
    word: "jacuru",
    eligible: false,
  },
  {
    word: "jacuto",
    eligible: false,
  },
  {
    word: "jacuva",
    eligible: false,
  },
  {
    word: "jacúzi",
    eligible: false,
  },
  {
    word: "jadera",
    eligible: false,
  },
  {
    word: "Jadiel",
    eligible: false,
  },
  {
    word: "jadono",
    eligible: false,
  },
  {
    word: "Jadson",
    eligible: false,
  },
  {
    word: "jaezar",
    eligible: false,
  },
  {
    word: "jagado",
    eligible: false,
  },
  {
    word: "jágara",
    eligible: false,
  },
  {
    word: "jagato",
    eligible: false,
  },
  {
    word: "jagode",
    eligible: false,
  },
  {
    word: "jagoma",
    eligible: false,
  },
  {
    word: "jaguaí",
    eligible: false,
  },
  {
    word: "jaguar",
    eligible: false,
  },
  {
    word: "jaguás",
    eligible: false,
  },
  {
    word: "jagube",
    eligible: false,
  },
  {
    word: "jagudi",
    eligible: false,
  },
  {
    word: "jaguir",
    eligible: false,
  },
  {
    word: "jagunã",
    eligible: false,
  },
  {
    word: "jaibro",
    eligible: false,
  },
  {
    word: "Jailma",
    eligible: false,
  },
  {
    word: "jalapa",
    eligible: false,
  },
  {
    word: "jaleco",
    eligible: false,
  },
  {
    word: "jaleia",
    eligible: false,
  },
  {
    word: "jaliso",
    eligible: false,
  },
  {
    word: "jalofo",
    eligible: false,
  },
  {
    word: "jaluto",
    eligible: false,
  },
  {
    word: "jamaia",
    eligible: false,
  },
  {
    word: "jamais",
    eligible: false,
  },
  {
    word: "jamari",
    eligible: false,
  },
  {
    word: "jamaru",
    eligible: false,
  },
  {
    word: "jamaxi",
    eligible: false,
  },
  {
    word: "jambão",
    eligible: false,
  },
  {
    word: "jamboa",
    eligible: false,
  },
  {
    word: "jambol",
    eligible: false,
  },
  {
    word: "jambos",
    eligible: false,
  },
  {
    word: "jambri",
    eligible: false,
  },
  {
    word: "jambul",
    eligible: false,
  },
  {
    word: "Jamile",
    eligible: false,
  },
  {
    word: "jampal",
    eligible: false,
  },
  {
    word: "janaca",
    eligible: false,
  },
  {
    word: "janari",
    eligible: false,
  },
  {
    word: "janauí",
    eligible: false,
  },
  {
    word: "jancro",
    eligible: false,
  },
  {
    word: "jandiá",
    eligible: false,
  },
  {
    word: "Jandir",
    eligible: false,
  },
  {
    word: "janduí",
    eligible: false,
  },
  {
    word: "janeca",
    eligible: false,
  },
  {
    word: "janela",
    eligible: false,
  },
  {
    word: "Janete",
    eligible: false,
  },
  {
    word: "jângal",
    eligible: false,
  },
  {
    word: "jangão",
    eligible: false,
  },
  {
    word: "jangar",
    eligible: false,
  },
  {
    word: "jangax",
    eligible: false,
  },
  {
    word: "jangaz",
    eligible: false,
  },
  {
    word: "jangué",
    eligible: false,
  },
  {
    word: "janguê",
    eligible: false,
  },
  {
    word: "janhar",
    eligible: false,
  },
  {
    word: "Janice",
    eligible: false,
  },
  {
    word: "Janine",
    eligible: false,
  },
  {
    word: "janira",
    eligible: false,
  },
  {
    word: "janita",
    eligible: false,
  },
  {
    word: "janitá",
    eligible: false,
  },
  {
    word: "jantar",
    eligible: false,
  },
  {
    word: "janual",
    eligible: false,
  },
  {
    word: "janufo",
    eligible: false,
  },
  {
    word: "janumá",
    eligible: false,
  },
  {
    word: "japana",
    eligible: false,
  },
  {
    word: "japani",
    eligible: false,
  },
  {
    word: "japara",
    eligible: false,
  },
  {
    word: "Japeri",
    eligible: false,
  },
  {
    word: "Jápeto",
    eligible: false,
  },
  {
    word: "jápide",
    eligible: false,
  },
  {
    word: "jápige",
    eligible: false,
  },
  {
    word: "japiim",
    eligible: false,
  },
  {
    word: "japins",
    eligible: false,
  },
  {
    word: "japira",
    eligible: false,
  },
  {
    word: "japona",
    eligible: false,
  },
  {
    word: "Japorã",
    eligible: false,
  },
  {
    word: "japubá",
    eligible: false,
  },
  {
    word: "japuçá",
    eligible: false,
  },
  {
    word: "japurá",
    eligible: false,
  },
  {
    word: "Jaquim",
    eligible: false,
  },
  {
    word: "jaraçu",
    eligible: false,
  },
  {
    word: "jarana",
    eligible: false,
  },
  {
    word: "jarapé",
    eligible: false,
  },
  {
    word: "jarauá",
    eligible: false,
  },
  {
    word: "jarava",
    eligible: false,
  },
  {
    word: "Jarbas",
    eligible: false,
  },
  {
    word: "Jarcom",
    eligible: false,
  },
  {
    word: "jardar",
    eligible: false,
  },
  {
    word: "Jardel",
    eligible: false,
  },
  {
    word: "járdia",
    eligible: false,
  },
  {
    word: "jardim",
    eligible: false,
  },
  {
    word: "Jarebe",
    eligible: false,
  },
  {
    word: "jareré",
    eligible: false,
  },
  {
    word: "Jarete",
    eligible: false,
  },
  {
    word: "jareuá",
    eligible: false,
  },
  {
    word: "Jargal",
    eligible: false,
  },
  {
    word: "jargão",
    eligible: false,
  },
  {
    word: "Jaribe",
    eligible: false,
  },
  {
    word: "jarina",
    eligible: false,
  },
  {
    word: "Jarinu",
    eligible: false,
  },
  {
    word: "jarivá",
    eligible: false,
  },
  {
    word: "jaroba",
    eligible: false,
  },
  {
    word: "jarrão",
    eligible: false,
  },
  {
    word: "jarros",
    eligible: false,
  },
  {
    word: "jaruma",
    eligible: false,
  },
  {
    word: "jaruru",
    eligible: false,
  },
  {
    word: "jaruva",
    eligible: false,
  },
  {
    word: "jaruvá",
    eligible: false,
  },
  {
    word: "Jarvis",
    eligible: false,
  },
  {
    word: "jasmim",
    eligible: false,
  },
  {
    word: "jáspeo",
    eligible: false,
  },
  {
    word: "Jásper",
    eligible: false,
  },
  {
    word: "jaspes",
    eligible: false,
  },
  {
    word: "jassaí",
    eligible: false,
  },
  {
    word: "jássio",
    eligible: false,
  },
  {
    word: "játaca",
    eligible: false,
  },
  {
    word: "jataís",
    eligible: false,
  },
  {
    word: "jatear",
    eligible: false,
  },
  {
    word: "jateca",
    eligible: false,
  },
  {
    word: "jateum",
    eligible: false,
  },
  {
    word: "jatibá",
    eligible: false,
  },
  {
    word: "jatica",
    eligible: false,
  },
  {
    word: "jaticá",
    eligible: false,
  },
  {
    word: "jatium",
    eligible: false,
  },
  {
    word: "jatobá",
    eligible: false,
  },
  {
    word: "jatubá",
    eligible: false,
  },
  {
    word: "jatura",
    eligible: false,
  },
  {
    word: "jauari",
    eligible: false,
  },
  {
    word: "jaumea",
    eligible: false,
  },
  {
    word: "javali",
    eligible: false,
  },
  {
    word: "javalu",
    eligible: false,
  },
  {
    word: "javari",
    eligible: false,
  },
  {
    word: "javevó",
    eligible: false,
  },
  {
    word: "Javier",
    eligible: false,
  },
  {
    word: "javira",
    eligible: false,
  },
  {
    word: "javite",
    eligible: false,
  },
  {
    word: "javrar",
    eligible: false,
  },
  {
    word: "jazeda",
    eligible: false,
  },
  {
    word: "jazida",
    eligible: false,
  },
  {
    word: "Jaziel",
    eligible: false,
  },
  {
    word: "jázige",
    eligible: false,
  },
  {
    word: "jazigo",
    eligible: false,
  },
  {
    word: "jázigo",
    eligible: false,
  },
  {
    word: "jebara",
    eligible: false,
  },
  {
    word: "jebaru",
    eligible: false,
  },
  {
    word: "jegada",
    eligible: false,
  },
  {
    word: "jegama",
    eligible: false,
  },
  {
    word: "jeirão",
    eligible: false,
  },
  {
    word: "jeiras",
    eligible: false,
  },
  {
    word: "jeitão",
    eligible: false,
  },
  {
    word: "jeitar",
    eligible: false,
  },
  {
    word: "jejuar",
    eligible: false,
  },
  {
    word: "jejuni",
    eligible: false,
  },
  {
    word: "jejuno",
    eligible: false,
  },
  {
    word: "jelaba",
    eligible: false,
  },
  {
    word: "jelala",
    eligible: false,
  },
  {
    word: "jelapa",
    eligible: false,
  },
  {
    word: "jenipá",
    eligible: false,
  },
  {
    word: "jequiá",
    eligible: false,
  },
  {
    word: "Jequié",
    eligible: false,
  },
  {
    word: "jeramu",
    eligible: false,
  },
  {
    word: "jereba",
    eligible: false,
  },
  {
    word: "Jerede",
    eligible: false,
  },
  {
    word: "jerema",
    eligible: false,
  },
  {
    word: "Jeremy",
    eligible: false,
  },
  {
    word: "jereré",
    eligible: false,
  },
  {
    word: "jererê",
    eligible: false,
  },
  {
    word: "jereva",
    eligible: false,
  },
  {
    word: "jeriba",
    eligible: false,
  },
  {
    word: "jeribá",
    eligible: false,
  },
  {
    word: "jerico",
    eligible: false,
  },
  {
    word: "jericó",
    eligible: false,
  },
  {
    word: "Jeriel",
    eligible: false,
  },
  {
    word: "jerimu",
    eligible: false,
  },
  {
    word: "jerivá",
    eligible: false,
  },
  {
    word: "jeriza",
    eligible: false,
  },
  {
    word: "Jeroão",
    eligible: false,
  },
  {
    word: "jeroma",
    eligible: false,
  },
  {
    word: "Jerome",
    eligible: false,
  },
  {
    word: "jeromó",
    eligible: false,
  },
  {
    word: "jérsei",
    eligible: false,
  },
  {
    word: "Jersey",
    eligible: false,
  },
  {
    word: "jerumu",
    eligible: false,
  },
  {
    word: "Jerusa",
    eligible: false,
  },
  {
    word: "jeruti",
    eligible: false,
  },
  {
    word: "jeruva",
    eligible: false,
  },
  {
    word: "Jesana",
    eligible: false,
  },
  {
    word: "jetaís",
    eligible: false,
  },
  {
    word: "jetape",
    eligible: false,
  },
  {
    word: "Jetete",
    eligible: false,
  },
  {
    word: "Jetibá",
    eligible: false,
  },
  {
    word: "jetico",
    eligible: false,
  },
  {
    word: "jetino",
    eligible: false,
  },
  {
    word: "jetivi",
    eligible: false,
  },
  {
    word: "jetuca",
    eligible: false,
  },
  {
    word: "jetucu",
    eligible: false,
  },
  {
    word: "jevivi",
    eligible: false,
  },
  {
    word: "jevura",
    eligible: false,
  },
  {
    word: "Jezias",
    eligible: false,
  },
  {
    word: "Jeziel",
    eligible: false,
  },
  {
    word: "jiboia",
    eligible: false,
  },
  {
    word: "jibonã",
    eligible: false,
  },
  {
    word: "Jibril",
    eligible: false,
  },
  {
    word: "Jibuti",
    eligible: false,
  },
  {
    word: "jiçara",
    eligible: false,
  },
  {
    word: "jifume",
    eligible: false,
  },
  {
    word: "jigoga",
    eligible: false,
  },
  {
    word: "jigote",
    eligible: false,
  },
  {
    word: "jijoca",
    eligible: false,
  },
  {
    word: "jilaba",
    eligible: false,
  },
  {
    word: "jiloal",
    eligible: false,
  },
  {
    word: "jimbas",
    eligible: false,
  },
  {
    word: "jimboa",
    eligible: false,
  },
  {
    word: "jinari",
    eligible: false,
  },
  {
    word: "jingim",
    eligible: false,
  },
  {
    word: "jingle",
    eligible: false,
  },
  {
    word: "jingoa",
    eligible: false,
  },
  {
    word: "jingol",
    eligible: false,
  },
  {
    word: "jinjim",
    eligible: false,
  },
  {
    word: "jinsão",
    eligible: false,
  },
  {
    word: "jinsém",
    eligible: false,
  },
  {
    word: "jinzeu",
    eligible: false,
  },
  {
    word: "jipepe",
    eligible: false,
  },
  {
    word: "jipuba",
    eligible: false,
  },
  {
    word: "jiquiá",
    eligible: false,
  },
  {
    word: "jiraba",
    eligible: false,
  },
  {
    word: "jiraué",
    eligible: false,
  },
  {
    word: "jiribá",
    eligible: false,
  },
  {
    word: "jirita",
    eligible: false,
  },
  {
    word: "jiriti",
    eligible: false,
  },
  {
    word: "jirivá",
    eligible: false,
  },
  {
    word: "jirixá",
    eligible: false,
  },
  {
    word: "jirope",
    eligible: false,
  },
  {
    word: "jirote",
    eligible: false,
  },
  {
    word: "jirubá",
    eligible: false,
  },
  {
    word: "jiruma",
    eligible: false,
  },
  {
    word: "jiruvá",
    eligible: false,
  },
  {
    word: "jisabu",
    eligible: false,
  },
  {
    word: "jitaís",
    eligible: false,
  },
  {
    word: "jitica",
    eligible: false,
  },
  {
    word: "jivaro",
    eligible: false,
  },
  {
    word: "Joacaz",
    eligible: false,
  },
  {
    word: "Joaíma",
    eligible: false,
  },
  {
    word: "Joaldo",
    eligible: false,
  },
  {
    word: "joanas",
    eligible: false,
  },
  {
    word: "Joatão",
    eligible: false,
  },
  {
    word: "Jobabe",
    eligible: false,
  },
  {
    word: "jocoso",
    eligible: false,
  },
  {
    word: "jocotó",
    eligible: false,
  },
  {
    word: "jodina",
    eligible: false,
  },
  {
    word: "joelho",
    eligible: false,
  },
  {
    word: "Joelma",
    eligible: false,
  },
  {
    word: "jogata",
    eligible: false,
  },
  {
    word: "jogral",
    eligible: false,
  },
  {
    word: "jogrão",
    eligible: false,
  },
  {
    word: "joiado",
    eligible: false,
  },
  {
    word: "joieta",
    eligible: false,
  },
  {
    word: "joinas",
    eligible: false,
  },
  {
    word: "jojoba",
    eligible: false,
  },
  {
    word: "jojoga",
    eligible: false,
  },
  {
    word: "joldra",
    eligible: false,
  },
  {
    word: "Jonatã",
    eligible: false,
  },
  {
    word: "jongar",
    eligible: false,
  },
  {
    word: "jônico",
    eligible: false,
  },
  {
    word: "jonjar",
    eligible: false,
  },
  {
    word: "joósia",
    eligible: false,
  },
  {
    word: "jópico",
    eligible: false,
  },
  {
    word: "jóquei",
    eligible: false,
  },
  {
    word: "jóquer",
    eligible: false,
  },
  {
    word: "Jordão",
    eligible: false,
  },
  {
    word: "jorges",
    eligible: false,
  },
  {
    word: "jornal",
    eligible: false,
  },
  {
    word: "jórnea",
    eligible: false,
  },
  {
    word: "joropa",
    eligible: false,
  },
  {
    word: "jorrão",
    eligible: false,
  },
  {
    word: "jorrar",
    eligible: false,
  },
  {
    word: "jorros",
    eligible: false,
  },
  {
    word: "joruna",
    eligible: false,
  },
  {
    word: "Josael",
    eligible: false,
  },
  {
    word: "Josafá",
    eligible: false,
  },
  {
    word: "Josana",
    eligible: false,
  },
  {
    word: "Josefo",
    eligible: false,
  },
  {
    word: "Josias",
    eligible: false,
  },
  {
    word: "Josiel",
    eligible: false,
  },
  {
    word: "Josino",
    eligible: false,
  },
  {
    word: "jótico",
    eligible: false,
  },
  {
    word: "joveva",
    eligible: false,
  },
  {
    word: "jovial",
    eligible: false,
  },
  {
    word: "Jovino",
    eligible: false,
  },
  {
    word: "Jovito",
    eligible: false,
  },
  {
    word: "Juarez",
    eligible: false,
  },
  {
    word: "juarez",
    eligible: false,
  },
  {
    word: "jubado",
    eligible: false,
  },
  {
    word: "jubata",
    eligible: false,
  },
  {
    word: "jubati",
    eligible: false,
  },
  {
    word: "jubeba",
    eligible: false,
  },
  {
    word: "juberi",
    eligible: false,
  },
  {
    word: "júbilo",
    eligible: false,
  },
  {
    word: "juboso",
    eligible: false,
  },
  {
    word: "juburu",
    eligible: false,
  },
  {
    word: "juçana",
    eligible: false,
  },
  {
    word: "juçapé",
    eligible: false,
  },
  {
    word: "juçara",
    eligible: false,
  },
  {
    word: "Jucati",
    eligible: false,
  },
  {
    word: "juciri",
    eligible: false,
  },
  {
    word: "jucuna",
    eligible: false,
  },
  {
    word: "jucuri",
    eligible: false,
  },
  {
    word: "jucuru",
    eligible: false,
  },
  {
    word: "Judeia",
    eligible: false,
  },
  {
    word: "judeia",
    eligible: false,
  },
  {
    word: "judéia",
    eligible: false,
  },
  {
    word: "judeus",
    eligible: false,
  },
  {
    word: "judiar",
    eligible: false,
  },
  {
    word: "judias",
    eligible: false,
  },
  {
    word: "judice",
    eligible: false,
  },
  {
    word: "judite",
    eligible: false,
  },
  {
    word: "judoca",
    eligible: false,
  },
  {
    word: "jugata",
    eligible: false,
  },
  {
    word: "jugoso",
    eligible: false,
  },
  {
    word: "juizar",
    eligible: false,
  },
  {
    word: "juízes",
    eligible: false,
  },
  {
    word: "jujuba",
    eligible: false,
  },
  {
    word: "julata",
    eligible: false,
  },
  {
    word: "julepe",
    eligible: false,
  },
  {
    word: "julepo",
    eligible: false,
  },
  {
    word: "julgar",
    eligible: false,
  },
  {
    word: "Julian",
    eligible: false,
  },
  {
    word: "julião",
    eligible: false,
  },
  {
    word: "Julita",
    eligible: false,
  },
  {
    word: "Julius",
    eligible: false,
  },
  {
    word: "julpai",
    eligible: false,
  },
  {
    word: "jumada",
    eligible: false,
  },
  {
    word: "jumana",
    eligible: false,
  },
  {
    word: "jumará",
    eligible: false,
  },
  {
    word: "jumbos",
    eligible: false,
  },
  {
    word: "jumelo",
    eligible: false,
  },
  {
    word: "juncal",
    eligible: false,
  },
  {
    word: "junçal",
    eligible: false,
  },
  {
    word: "Juncão",
    eligible: false,
  },
  {
    word: "junção",
    eligible: false,
  },
  {
    word: "juncar",
    eligible: false,
  },
  {
    word: "junças",
    eligible: false,
  },
  {
    word: "juncos",
    eligible: false,
  },
  {
    word: "jundaí",
    eligible: false,
  },
  {
    word: "jundiá",
    eligible: false,
  },
  {
    word: "jungir",
    eligible: false,
  },
  {
    word: "jungue",
    eligible: false,
  },
  {
    word: "junhal",
    eligible: false,
  },
  {
    word: "junino",
    eligible: false,
  },
  {
    word: "júnior",
    eligible: false,
  },
  {
    word: "juntar",
    eligible: false,
  },
  {
    word: "juntas",
    eligible: false,
  },
  {
    word: "juntos",
    eligible: false,
  },
  {
    word: "jupará",
    eligible: false,
  },
  {
    word: "jupati",
    eligible: false,
  },
  {
    word: "jupeba",
    eligible: false,
  },
  {
    word: "jupurá",
    eligible: false,
  },
  {
    word: "juquiá",
    eligible: false,
  },
  {
    word: "juquis",
    eligible: false,
  },
  {
    word: "Juraci",
    eligible: false,
  },
  {
    word: "jurana",
    eligible: false,
  },
  {
    word: "jurará",
    eligible: false,
  },
  {
    word: "jureba",
    eligible: false,
  },
  {
    word: "Jureia",
    eligible: false,
  },
  {
    word: "jurema",
    eligible: false,
  },
  {
    word: "juremá",
    eligible: false,
  },
  {
    word: "jurera",
    eligible: false,
  },
  {
    word: "Jurerê",
    eligible: false,
  },
  {
    word: "jurgar",
    eligible: false,
  },
  {
    word: "juriti",
    eligible: false,
  },
  {
    word: "jurumi",
    eligible: false,
  },
  {
    word: "jurumu",
    eligible: false,
  },
  {
    word: "juruna",
    eligible: false,
  },
  {
    word: "jurunu",
    eligible: false,
  },
  {
    word: "jururá",
    eligible: false,
  },
  {
    word: "jururu",
    eligible: false,
  },
  {
    word: "juruté",
    eligible: false,
  },
  {
    word: "jurutê",
    eligible: false,
  },
  {
    word: "juruti",
    eligible: false,
  },
  {
    word: "juruva",
    eligible: false,
  },
  {
    word: "juruvá",
    eligible: false,
  },
  {
    word: "Jusabe",
    eligible: false,
  },
  {
    word: "jusano",
    eligible: false,
  },
  {
    word: "jusita",
    eligible: false,
  },
  {
    word: "justar",
    eligible: false,
  },
  {
    word: "justas",
    eligible: false,
  },
  {
    word: "justos",
    eligible: false,
  },
  {
    word: "jutaís",
    eligible: false,
  },
  {
    word: "juvenê",
    eligible: false,
  },
  {
    word: "juveti",
    eligible: false,
  },
  {
    word: "juveva",
    eligible: false,
  },
  {
    word: "juvevê",
    eligible: false,
  },
  {
    word: "juvira",
    eligible: false,
  },
  {
    word: "Kaiowá",
    eligible: false,
  },
  {
    word: "kaiowá",
    eligible: false,
  },
  {
    word: "Kaloré",
    eligible: false,
  },
  {
    word: "Kansas",
    eligible: false,
  },
  {
    word: "karatê",
    eligible: false,
  },
  {
    word: "Karina",
    eligible: false,
  },
  {
    word: "Karine",
    eligible: false,
  },
  {
    word: "Kelsen",
    eligible: false,
  },
  {
    word: "Kelvin",
    eligible: false,
  },
  {
    word: "Kepler",
    eligible: false,
  },
  {
    word: "Kibaxe",
    eligible: false,
  },
  {
    word: "Kikito",
    eligible: false,
  },
  {
    word: "Kleber",
    eligible: false,
  },
  {
    word: "Komodo",
    eligible: false,
  },
  {
    word: "Kuwait",
    eligible: false,
  },
  {
    word: "Kwanza",
    eligible: false,
  },
  {
    word: "Laamás",
    eligible: false,
  },
  {
    word: "labaça",
    eligible: false,
  },
  {
    word: "labacê",
    eligible: false,
  },
  {
    word: "lábaro",
    eligible: false,
  },
  {
    word: "Labeão",
    eligible: false,
  },
  {
    word: "labego",
    eligible: false,
  },
  {
    word: "labial",
    eligible: false,
  },
  {
    word: "labico",
    eligible: false,
  },
  {
    word: "lábido",
    eligible: false,
  },
  {
    word: "lábios",
    eligible: false,
  },
  {
    word: "labisa",
    eligible: false,
  },
  {
    word: "labita",
    eligible: false,
  },
  {
    word: "lábium",
    eligible: false,
  },
  {
    word: "labore",
    eligible: false,
  },
  {
    word: "labral",
    eligible: false,
  },
  {
    word: "Lábrea",
    eligible: false,
  },
  {
    word: "lábrum",
    eligible: false,
  },
  {
    word: "labula",
    eligible: false,
  },
  {
    word: "lacacã",
    eligible: false,
  },
  {
    word: "lacaço",
    eligible: false,
  },
  {
    word: "lacaio",
    eligible: false,
  },
  {
    word: "lácase",
    eligible: false,
  },
  {
    word: "lacear",
    eligible: false,
  },
  {
    word: "lacedo",
    eligible: false,
  },
  {
    word: "laceio",
    eligible: false,
  },
  {
    word: "lácero",
    eligible: false,
  },
  {
    word: "lacete",
    eligible: false,
  },
  {
    word: "lacial",
    eligible: false,
  },
  {
    word: "laciar",
    eligible: false,
  },
  {
    word: "lácico",
    eligible: false,
  },
  {
    word: "lacina",
    eligible: false,
  },
  {
    word: "lácnea",
    eligible: false,
  },
  {
    word: "lacoso",
    eligible: false,
  },
  {
    word: "lacrão",
    eligible: false,
  },
  {
    word: "lacrar",
    eligible: false,
  },
  {
    word: "lacrau",
    eligible: false,
  },
  {
    word: "lacres",
    eligible: false,
  },
  {
    word: "lactar",
    eligible: false,
  },
  {
    word: "lácteo",
    eligible: false,
  },
  {
    word: "lactol",
    eligible: false,
  },
  {
    word: "ladane",
    eligible: false,
  },
  {
    word: "ladano",
    eligible: false,
  },
  {
    word: "ládano",
    eligible: false,
  },
  {
    word: "ladear",
    eligible: false,
  },
  {
    word: "ladeza",
    eligible: false,
  },
  {
    word: "ladino",
    eligible: false,
  },
  {
    word: "ladral",
    eligible: false,
  },
  {
    word: "ladrão",
    eligible: false,
  },
  {
    word: "ladrar",
    eligible: false,
  },
  {
    word: "ladros",
    eligible: false,
  },
  {
    word: "laense",
    eligible: false,
  },
  {
    word: "Laerte",
    eligible: false,
  },
  {
    word: "lafiro",
    eligible: false,
  },
  {
    word: "Lafite",
    eligible: false,
  },
  {
    word: "lafola",
    eligible: false,
  },
  {
    word: "lafrau",
    eligible: false,
  },
  {
    word: "láfria",
    eligible: false,
  },
  {
    word: "lagaia",
    eligible: false,
  },
  {
    word: "lágano",
    eligible: false,
  },
  {
    word: "lágaro",
    eligible: false,
  },
  {
    word: "lagena",
    eligible: false,
  },
  {
    word: "lagera",
    eligible: false,
  },
  {
    word: "lageta",
    eligible: false,
  },
  {
    word: "lagide",
    eligible: false,
  },
  {
    word: "lágima",
    eligible: false,
  },
  {
    word: "lagino",
    eligible: false,
  },
  {
    word: "lagoão",
    eligible: false,
  },
  {
    word: "lagona",
    eligible: false,
  },
  {
    word: "lagopo",
    eligible: false,
  },
  {
    word: "lágria",
    eligible: false,
  },
  {
    word: "laguel",
    eligible: false,
  },
  {
    word: "laguna",
    eligible: false,
  },
  {
    word: "laguro",
    eligible: false,
  },
  {
    word: "lahore",
    eligible: false,
  },
  {
    word: "laiano",
    eligible: false,
  },
  {
    word: "laical",
    eligible: false,
  },
  {
    word: "laivão",
    eligible: false,
  },
  {
    word: "laivar",
    eligible: false,
  },
  {
    word: "laivos",
    eligible: false,
  },
  {
    word: "lajeal",
    eligible: false,
  },
  {
    word: "lajear",
    eligible: false,
  },
  {
    word: "lajedo",
    eligible: false,
  },
  {
    word: "lajeta",
    eligible: false,
  },
  {
    word: "lajota",
    eligible: false,
  },
  {
    word: "lamaço",
    eligible: false,
  },
  {
    word: "lâmane",
    eligible: false,
  },
  {
    word: "lambão",
    eligible: false,
  },
  {
    word: "lambar",
    eligible: false,
  },
  {
    word: "lambaz",
    eligible: false,
  },
  {
    word: "lambda",
    eligible: false,
  },
  {
    word: "lambel",
    eligible: false,
  },
  {
    word: "lamber",
    eligible: false,
  },
  {
    word: "lâmbia",
    eligible: false,
  },
  {
    word: "lambio",
    eligible: false,
  },
  {
    word: "lambri",
    eligible: false,
  },
  {
    word: "lambro",
    eligible: false,
  },
  {
    word: "lâmede",
    eligible: false,
  },
  {
    word: "lamedo",
    eligible: false,
  },
  {
    word: "lamego",
    eligible: false,
  },
  {
    word: "lâmina",
    eligible: false,
  },
  {
    word: "lâmios",
    eligible: false,
  },
  {
    word: "lamira",
    eligible: false,
  },
  {
    word: "lamiré",
    eligible: false,
  },
  {
    word: "lamoja",
    eligible: false,
  },
  {
    word: "lamoso",
    eligible: false,
  },
  {
    word: "lampão",
    eligible: false,
  },
  {
    word: "lâmpão",
    eligible: false,
  },
  {
    word: "lampar",
    eligible: false,
  },
  {
    word: "lâmpio",
    eligible: false,
  },
  {
    word: "lampos",
    eligible: false,
  },
  {
    word: "lamprã",
    eligible: false,
  },
  {
    word: "lamuca",
    eligible: false,
  },
  {
    word: "lamuje",
    eligible: false,
  },
  {
    word: "lâmure",
    eligible: false,
  },
  {
    word: "lamuta",
    eligible: false,
  },
  {
    word: "lançar",
    eligible: false,
  },
  {
    word: "lanças",
    eligible: false,
  },
  {
    word: "lancha",
    eligible: false,
  },
  {
    word: "lanche",
    eligible: false,
  },
  {
    word: "lanchô",
    eligible: false,
  },
  {
    word: "lancil",
    eligible: false,
  },
  {
    word: "lancoa",
    eligible: false,
  },
  {
    word: "lanços",
    eligible: false,
  },
  {
    word: "landal",
    eligible: false,
  },
  {
    word: "landau",
    eligible: false,
  },
  {
    word: "landes",
    eligible: false,
  },
  {
    word: "landês",
    eligible: false,
  },
  {
    word: "landim",
    eligible: false,
  },
  {
    word: "landoá",
    eligible: false,
  },
  {
    word: "lândoa",
    eligible: false,
  },
  {
    word: "landre",
    eligible: false,
  },
  {
    word: "Landri",
    eligible: false,
  },
  {
    word: "landri",
    eligible: false,
  },
  {
    word: "landro",
    eligible: false,
  },
  {
    word: "landru",
    eligible: false,
  },
  {
    word: "landuá",
    eligible: false,
  },
  {
    word: "landum",
    eligible: false,
  },
  {
    word: "lanedo",
    eligible: false,
  },
  {
    word: "laneta",
    eligible: false,
  },
  {
    word: "langaa",
    eligible: false,
  },
  {
    word: "lângia",
    eligible: false,
  },
  {
    word: "langor",
    eligible: false,
  },
  {
    word: "langos",
    eligible: false,
  },
  {
    word: "lângua",
    eligible: false,
  },
  {
    word: "langur",
    eligible: false,
  },
  {
    word: "lanhar",
    eligible: false,
  },
  {
    word: "laniar",
    eligible: false,
  },
  {
    word: "lanice",
    eligible: false,
  },
  {
    word: "lanoja",
    eligible: false,
  },
  {
    word: "lanoro",
    eligible: false,
  },
  {
    word: "lanosa",
    eligible: false,
  },
  {
    word: "lanoso",
    eligible: false,
  },
  {
    word: "lantém",
    eligible: false,
  },
  {
    word: "lantim",
    eligible: false,
  },
  {
    word: "lantor",
    eligible: false,
  },
  {
    word: "lanuça",
    eligible: false,
  },
  {
    word: "lanudo",
    eligible: false,
  },
  {
    word: "lanugo",
    eligible: false,
  },
  {
    word: "lânvio",
    eligible: false,
  },
  {
    word: "laparo",
    eligible: false,
  },
  {
    word: "láparo",
    eligible: false,
  },
  {
    word: "lapear",
    eligible: false,
  },
  {
    word: "lapedo",
    eligible: false,
  },
  {
    word: "lapela",
    eligible: false,
  },
  {
    word: "lapiar",
    eligible: false,
  },
  {
    word: "lapiaz",
    eligible: false,
  },
  {
    word: "lápico",
    eligible: false,
  },
  {
    word: "lápide",
    eligible: false,
  },
  {
    word: "lapiez",
    eligible: false,
  },
  {
    word: "lapiga",
    eligible: false,
  },
  {
    word: "lapíli",
    eligible: false,
  },
  {
    word: "lapina",
    eligible: false,
  },
  {
    word: "lápito",
    eligible: false,
  },
  {
    word: "lapona",
    eligible: false,
  },
  {
    word: "laptop",
    eligible: false,
  },
  {
    word: "láqueo",
    eligible: false,
  },
  {
    word: "larada",
    eligible: false,
  },
  {
    word: "larafi",
    eligible: false,
  },
  {
    word: "larapa",
    eligible: false,
  },
  {
    word: "larcão",
    eligible: false,
  },
  {
    word: "lardão",
    eligible: false,
  },
  {
    word: "larear",
    eligible: false,
  },
  {
    word: "laredo",
    eligible: false,
  },
  {
    word: "larego",
    eligible: false,
  },
  {
    word: "lareta",
    eligible: false,
  },
  {
    word: "largar",
    eligible: false,
  },
  {
    word: "largas",
    eligible: false,
  },
  {
    word: "largos",
    eligible: false,
  },
  {
    word: "larião",
    eligible: false,
  },
  {
    word: "larica",
    eligible: false,
  },
  {
    word: "lárice",
    eligible: false,
  },
  {
    word: "lariço",
    eligible: false,
  },
  {
    word: "lárico",
    eligible: false,
  },
  {
    word: "larida",
    eligible: false,
  },
  {
    word: "lárida",
    eligible: false,
  },
  {
    word: "larifo",
    eligible: false,
  },
  {
    word: "larila",
    eligible: false,
  },
  {
    word: "larino",
    eligible: false,
  },
  {
    word: "laroca",
    eligible: false,
  },
  {
    word: "laroiê",
    eligible: false,
  },
  {
    word: "larona",
    eligible: false,
  },
  {
    word: "larote",
    eligible: false,
  },
  {
    word: "larpão",
    eligible: false,
  },
  {
    word: "larpar",
    eligible: false,
  },
  {
    word: "laruça",
    eligible: false,
  },
  {
    word: "laruto",
    eligible: false,
  },
  {
    word: "larval",
    eligible: false,
  },
  {
    word: "larvar",
    eligible: false,
  },
  {
    word: "larvas",
    eligible: false,
  },
  {
    word: "lascar",
    eligible: false,
  },
  {
    word: "laseia",
    eligible: false,
  },
  {
    word: "lasers",
    eligible: false,
  },
  {
    word: "lasíea",
    eligible: false,
  },
  {
    word: "lassar",
    eligible: false,
  },
  {
    word: "lastex",
    eligible: false,
  },
  {
    word: "lastro",
    eligible: false,
  },
  {
    word: "latada",
    eligible: false,
  },
  {
    word: "latane",
    eligible: false,
  },
  {
    word: "latear",
    eligible: false,
  },
  {
    word: "látego",
    eligible: false,
  },
  {
    word: "látero",
    eligible: false,
  },
  {
    word: "látice",
    eligible: false,
  },
  {
    word: "lático",
    eligible: false,
  },
  {
    word: "latilo",
    eligible: false,
  },
  {
    word: "Latino",
    eligible: false,
  },
  {
    word: "latino",
    eligible: false,
  },
  {
    word: "latipá",
    eligible: false,
  },
  {
    word: "látire",
    eligible: false,
  },
  {
    word: "látiro",
    eligible: false,
  },
  {
    word: "latona",
    eligible: false,
  },
  {
    word: "latosa",
    eligible: false,
  },
  {
    word: "látrea",
    eligible: false,
  },
  {
    word: "latria",
    eligible: false,
  },
  {
    word: "Lattes",
    eligible: false,
  },
  {
    word: "laudar",
    eligible: false,
  },
  {
    word: "laudel",
    eligible: false,
  },
  {
    word: "laudéu",
    eligible: false,
  },
  {
    word: "laulau",
    eligible: false,
  },
  {
    word: "launim",
    eligible: false,
  },
  {
    word: "laurel",
    eligible: false,
  },
  {
    word: "láureo",
    eligible: false,
  },
  {
    word: "láuria",
    eligible: false,
  },
  {
    word: "lautal",
    eligible: false,
  },
  {
    word: "lautiá",
    eligible: false,
  },
  {
    word: "lavabo",
    eligible: false,
  },
  {
    word: "lavada",
    eligible: false,
  },
  {
    word: "lavado",
    eligible: false,
  },
  {
    word: "lavajo",
    eligible: false,
  },
  {
    word: "lavego",
    eligible: false,
  },
  {
    word: "lávico",
    eligible: false,
  },
  {
    word: "lavita",
    eligible: false,
  },
  {
    word: "lavoso",
    eligible: false,
  },
  {
    word: "lavrar",
    eligible: false,
  },
  {
    word: "lavujo",
    eligible: false,
  },
  {
    word: "layout",
    eligible: false,
  },
  {
    word: "lázaro",
    eligible: false,
  },
  {
    word: "lazona",
    eligible: false,
  },
  {
    word: "lãzudo",
    eligible: false,
  },
  {
    word: "lazule",
    eligible: false,
  },
  {
    word: "lazúli",
    eligible: false,
  },
  {
    word: "Lebana",
    eligible: false,
  },
  {
    word: "Leblon",
    eligible: false,
  },
  {
    word: "lebrão",
    eligible: false,
  },
  {
    word: "lebrel",
    eligible: false,
  },
  {
    word: "lebres",
    eligible: false,
  },
  {
    word: "lebréu",
    eligible: false,
  },
  {
    word: "lebuno",
    eligible: false,
  },
  {
    word: "lechia",
    eligible: false,
  },
  {
    word: "lechuê",
    eligible: false,
  },
  {
    word: "lecite",
    eligible: false,
  },
  {
    word: "lécito",
    eligible: false,
  },
  {
    word: "lector",
    eligible: false,
  },
  {
    word: "ledeno",
    eligible: false,
  },
  {
    word: "lediça",
    eligible: false,
  },
  {
    word: "ledice",
    eligible: false,
  },
  {
    word: "lefana",
    eligible: false,
  },
  {
    word: "legaço",
    eligible: false,
  },
  {
    word: "legado",
    eligible: false,
  },
  {
    word: "legalé",
    eligible: false,
  },
  {
    word: "legame",
    eligible: false,
  },
  {
    word: "legato",
    eligible: false,
  },
  {
    word: "légbeo",
    eligible: false,
  },
  {
    word: "legião",
    eligible: false,
  },
  {
    word: "legrar",
    eligible: false,
  },
  {
    word: "léguas",
    eligible: false,
  },
  {
    word: "legume",
    eligible: false,
  },
  {
    word: "lêidia",
    eligible: false,
  },
  {
    word: "leigal",
    eligible: false,
  },
  {
    word: "leigar",
    eligible: false,
  },
  {
    word: "leigos",
    eligible: false,
  },
  {
    word: "leilão",
    eligible: false,
  },
  {
    word: "leipoa",
    eligible: false,
  },
  {
    word: "leirão",
    eligible: false,
  },
  {
    word: "leirar",
    eligible: false,
  },
  {
    word: "leiria",
    eligible: false,
  },
  {
    word: "lêiser",
    eligible: false,
  },
  {
    word: "leísto",
    eligible: false,
  },
  {
    word: "leital",
    eligible: false,
  },
  {
    word: "leitão",
    eligible: false,
  },
  {
    word: "leitar",
    eligible: false,
  },
  {
    word: "leites",
    eligible: false,
  },
  {
    word: "leitoa",
    eligible: false,
  },
  {
    word: "leitor",
    eligible: false,
  },
  {
    word: "leitos",
    eligible: false,
  },
  {
    word: "leitra",
    eligible: false,
  },
  {
    word: "leivão",
    eligible: false,
  },
  {
    word: "leixão",
    eligible: false,
  },
  {
    word: "leixar",
    eligible: false,
  },
  {
    word: "lélape",
    eligible: false,
  },
  {
    word: "lélaps",
    eligible: false,
  },
  {
    word: "lélege",
    eligible: false,
  },
  {
    word: "lelelê",
    eligible: false,
  },
  {
    word: "lelíea",
    eligible: false,
  },
  {
    word: "lemane",
    eligible: false,
  },
  {
    word: "lemano",
    eligible: false,
  },
  {
    word: "lembar",
    eligible: false,
  },
  {
    word: "lêmico",
    eligible: false,
  },
  {
    word: "lêmneo",
    eligible: false,
  },
  {
    word: "lêmnio",
    eligible: false,
  },
  {
    word: "lemosi",
    eligible: false,
  },
  {
    word: "Lemuel",
    eligible: false,
  },
  {
    word: "lêmure",
    eligible: false,
  },
  {
    word: "lenano",
    eligible: false,
  },
  {
    word: "lenção",
    eligible: false,
  },
  {
    word: "lençol",
    eligible: false,
  },
  {
    word: "lenços",
    eligible: false,
  },
  {
    word: "lêndea",
    eligible: false,
  },
  {
    word: "lengar",
    eligible: false,
  },
  {
    word: "lêngua",
    eligible: false,
  },
  {
    word: "lengue",
    eligible: false,
  },
  {
    word: "lenhal",
    eligible: false,
  },
  {
    word: "lenhar",
    eligible: false,
  },
  {
    word: "lenhas",
    eligible: false,
  },
  {
    word: "lenhos",
    eligible: false,
  },
  {
    word: "Lenine",
    eligible: false,
  },
  {
    word: "Lenise",
    eligible: false,
  },
  {
    word: "Lenita",
    eligible: false,
  },
  {
    word: "lênnoa",
    eligible: false,
  },
  {
    word: "lentar",
    eligible: false,
  },
  {
    word: "lentor",
    eligible: false,
  },
  {
    word: "Leomil",
    eligible: false,
  },
  {
    word: "Leomir",
    eligible: false,
  },
  {
    word: "Leonel",
    eligible: false,
  },
  {
    word: "leonês",
    eligible: false,
  },
  {
    word: "Leonor",
    eligible: false,
  },
  {
    word: "lépade",
    eligible: false,
  },
  {
    word: "lépalo",
    eligible: false,
  },
  {
    word: "lepcha",
    eligible: false,
  },
  {
    word: "lepeta",
    eligible: false,
  },
  {
    word: "lépido",
    eligible: false,
  },
  {
    word: "lepiro",
    eligible: false,
  },
  {
    word: "leprae",
    eligible: false,
  },
  {
    word: "léptis",
    eligible: false,
  },
  {
    word: "lépton",
    eligible: false,
  },
  {
    word: "leques",
    eligible: false,
  },
  {
    word: "léquio",
    eligible: false,
  },
  {
    word: "lereia",
    eligible: false,
  },
  {
    word: "lerese",
    eligible: false,
  },
  {
    word: "leriar",
    eligible: false,
  },
  {
    word: "lerico",
    eligible: false,
  },
  {
    word: "leriva",
    eligible: false,
  },
  {
    word: "lérneo",
    eligible: false,
  },
  {
    word: "lerneu",
    eligible: false,
  },
  {
    word: "lésbio",
    eligible: false,
  },
  {
    word: "Lesbos",
    eligible: false,
  },
  {
    word: "lesivo",
    eligible: false,
  },
  {
    word: "lesmar",
    eligible: false,
  },
  {
    word: "lesmas",
    eligible: false,
  },
  {
    word: "lésmia",
    eligible: false,
  },
  {
    word: "lêsmia",
    eligible: false,
  },
  {
    word: "Lesoto",
    eligible: false,
  },
  {
    word: "lesoto",
    eligible: false,
  },
  {
    word: "lesque",
    eligible: false,
  },
  {
    word: "lestar",
    eligible: false,
  },
  {
    word: "lestia",
    eligible: false,
  },
  {
    word: "lestro",
    eligible: false,
  },
  {
    word: "lético",
    eligible: false,
  },
  {
    word: "letivo",
    eligible: false,
  },
  {
    word: "letrar",
    eligible: false,
  },
  {
    word: "letras",
    eligible: false,
  },
  {
    word: "letria",
    eligible: false,
  },
  {
    word: "letzte",
    eligible: false,
  },
  {
    word: "leucol",
    eligible: false,
  },
  {
    word: "lêucon",
    eligible: false,
  },
  {
    word: "lêuzea",
    eligible: false,
  },
  {
    word: "levaco",
    eligible: false,
  },
  {
    word: "lêvedo",
    eligible: false,
  },
  {
    word: "leveza",
    eligible: false,
  },
  {
    word: "leviar",
    eligible: false,
  },
  {
    word: "levubo",
    eligible: false,
  },
  {
    word: "levyna",
    eligible: false,
  },
  {
    word: "lexema",
    eligible: false,
  },
  {
    word: "lexial",
    eligible: false,
  },
  {
    word: "léxico",
    eligible: false,
  },
  {
    word: "lézaro",
    eligible: false,
  },
  {
    word: "lezira",
    eligible: false,
  },
  {
    word: "lhanta",
    eligible: false,
  },
  {
    word: "lhufas",
    eligible: false,
  },
  {
    word: "liação",
    eligible: false,
  },
  {
    word: "liagem",
    eligible: false,
  },
  {
    word: "liamba",
    eligible: false,
  },
  {
    word: "liança",
    eligible: false,
  },
  {
    word: "liásis",
    eligible: false,
  },
  {
    word: "liável",
    eligible: false,
  },
  {
    word: "libame",
    eligible: false,
  },
  {
    word: "Líbano",
    eligible: false,
  },
  {
    word: "líbano",
    eligible: false,
  },
  {
    word: "libata",
    eligible: false,
  },
  {
    word: "líbelo",
    eligible: false,
  },
  {
    word: "líbero",
    eligible: false,
  },
  {
    word: "líbico",
    eligible: false,
  },
  {
    word: "libido",
    eligible: false,
  },
  {
    word: "líbido",
    eligible: false,
  },
  {
    word: "libita",
    eligible: false,
  },
  {
    word: "líbito",
    eligible: false,
  },
  {
    word: "libolo",
    eligible: false,
  },
  {
    word: "librar",
    eligible: false,
  },
  {
    word: "libras",
    eligible: false,
  },
  {
    word: "libréu",
    eligible: false,
  },
  {
    word: "líbris",
    eligible: false,
  },
  {
    word: "libuno",
    eligible: false,
  },
  {
    word: "licaão",
    eligible: false,
  },
  {
    word: "licada",
    eligible: false,
  },
  {
    word: "licata",
    eligible: false,
  },
  {
    word: "liceal",
    eligible: false,
  },
  {
    word: "licena",
    eligible: false,
  },
  {
    word: "lichia",
    eligible: false,
  },
  {
    word: "lícida",
    eligible: false,
  },
  {
    word: "licino",
    eligible: false,
  },
  {
    word: "lícito",
    eligible: false,
  },
  {
    word: "lícnis",
    eligible: false,
  },
  {
    word: "licode",
    eligible: false,
  },
  {
    word: "licono",
    eligible: false,
  },
  {
    word: "lícopo",
    eligible: false,
  },
  {
    word: "licose",
    eligible: false,
  },
  {
    word: "licreu",
    eligible: false,
  },
  {
    word: "licréu",
    eligible: false,
  },
  {
    word: "lictor",
    eligible: false,
  },
  {
    word: "licuri",
    eligible: false,
  },
  {
    word: "Lídice",
    eligible: false,
  },
  {
    word: "lídimo",
    eligible: false,
  },
  {
    word: "lidite",
    eligible: false,
  },
  {
    word: "lidito",
    eligible: false,
  },
  {
    word: "lidoso",
    eligible: false,
  },
  {
    word: "lienal",
    eligible: false,
  },
  {
    word: "lierne",
    eligible: false,
  },
  {
    word: "lifemo",
    eligible: false,
  },
  {
    word: "lifuco",
    eligible: false,
  },
  {
    word: "lifuti",
    eligible: false,
  },
  {
    word: "ligado",
    eligible: false,
  },
  {
    word: "ligáeo",
    eligible: false,
  },
  {
    word: "ligaio",
    eligible: false,
  },
  {
    word: "ligame",
    eligible: false,
  },
  {
    word: "ligase",
    eligible: false,
  },
  {
    word: "lígase",
    eligible: false,
  },
  {
    word: "ligina",
    eligible: false,
  },
  {
    word: "ligiro",
    eligible: false,
  },
  {
    word: "lígneo",
    eligible: false,
  },
  {
    word: "ligola",
    eligible: false,
  },
  {
    word: "lígris",
    eligible: false,
  },
  {
    word: "lígulo",
    eligible: false,
  },
  {
    word: "lígure",
    eligible: false,
  },
  {
    word: "liguro",
    eligible: false,
  },
  {
    word: "lilaia",
    eligible: false,
  },
  {
    word: "lileia",
    eligible: false,
  },
  {
    word: "lilial",
    eligible: false,
  },
  {
    word: "Liliam",
    eligible: false,
  },
  {
    word: "Lilian",
    eligible: false,
  },
  {
    word: "Lílian",
    eligible: false,
  },
  {
    word: "limaça",
    eligible: false,
  },
  {
    word: "limace",
    eligible: false,
  },
  {
    word: "limano",
    eligible: false,
  },
  {
    word: "limbel",
    eligible: false,
  },
  {
    word: "límbeo",
    eligible: false,
  },
  {
    word: "límbio",
    eligible: false,
  },
  {
    word: "limeno",
    eligible: false,
  },
  {
    word: "limião",
    eligible: false,
  },
  {
    word: "limiar",
    eligible: false,
  },
  {
    word: "límico",
    eligible: false,
  },
  {
    word: "límido",
    eligible: false,
  },
  {
    word: "limite",
    eligible: false,
  },
  {
    word: "límnea",
    eligible: false,
  },
  {
    word: "límnio",
    eligible: false,
  },
  {
    word: "limoal",
    eligible: false,
  },
  {
    word: "limões",
    eligible: false,
  },
  {
    word: "limose",
    eligible: false,
  },
  {
    word: "limoso",
    eligible: false,
  },
  {
    word: "limote",
    eligible: false,
  },
  {
    word: "limpar",
    eligible: false,
  },
  {
    word: "limpas",
    eligible: false,
  },
  {
    word: "límpio",
    eligible: false,
  },
  {
    word: "límulo",
    eligible: false,
  },
  {
    word: "linale",
    eligible: false,
  },
  {
    word: "lincar",
    eligible: false,
  },
  {
    word: "línceo",
    eligible: false,
  },
  {
    word: "lindar",
    eligible: false,
  },
  {
    word: "lindas",
    eligible: false,
  },
  {
    word: "lindos",
    eligible: false,
  },
  {
    word: "lineal",
    eligible: false,
  },
  {
    word: "linear",
    eligible: false,
  },
  {
    word: "lineia",
    eligible: false,
  },
  {
    word: "linete",
    eligible: false,
  },
  {
    word: "linfar",
    eligible: false,
  },
  {
    word: "lingão",
    eligible: false,
  },
  {
    word: "lingar",
    eligible: false,
  },
  {
    word: "língel",
    eligible: false,
  },
  {
    word: "lingre",
    eligible: false,
  },
  {
    word: "linguá",
    eligible: false,
  },
  {
    word: "língua",
    eligible: false,
  },
  {
    word: "linhal",
    eligible: false,
  },
  {
    word: "linhão",
    eligible: false,
  },
  {
    word: "linhar",
    eligible: false,
  },
  {
    word: "linhas",
    eligible: false,
  },
  {
    word: "linhol",
    eligible: false,
  },
  {
    word: "linhos",
    eligible: false,
  },
  {
    word: "línico",
    eligible: false,
  },
  {
    word: "linina",
    eligible: false,
  },
  {
    word: "linite",
    eligible: false,
  },
  {
    word: "linoma",
    eligible: false,
  },
  {
    word: "linose",
    eligible: false,
  },
  {
    word: "líntea",
    eligible: false,
  },
  {
    word: "lintel",
    eligible: false,
  },
  {
    word: "líntia",
    eligible: false,
  },
  {
    word: "linura",
    eligible: false,
  },
  {
    word: "Lionel",
    eligible: false,
  },
  {
    word: "lionês",
    eligible: false,
  },
  {
    word: "liônia",
    eligible: false,
  },
  {
    word: "liorna",
    eligible: false,
  },
  {
    word: "lióteo",
    eligible: false,
  },
  {
    word: "liótia",
    eligible: false,
  },
  {
    word: "lípare",
    eligible: false,
  },
  {
    word: "líparo",
    eligible: false,
  },
  {
    word: "lipase",
    eligible: false,
  },
  {
    word: "lípase",
    eligible: false,
  },
  {
    word: "lipate",
    eligible: false,
  },
  {
    word: "lipato",
    eligible: false,
  },
  {
    word: "lipeja",
    eligible: false,
  },
  {
    word: "lípico",
    eligible: false,
  },
  {
    word: "lípide",
    eligible: false,
  },
  {
    word: "lípido",
    eligible: false,
  },
  {
    word: "lipina",
    eligible: false,
  },
  {
    word: "lipoma",
    eligible: false,
  },
  {
    word: "lipose",
    eligible: false,
  },
  {
    word: "liposo",
    eligible: false,
  },
  {
    word: "lipote",
    eligible: false,
  },
  {
    word: "líppia",
    eligible: false,
  },
  {
    word: "lipupo",
    eligible: false,
  },
  {
    word: "liputo",
    eligible: false,
  },
  {
    word: "líquen",
    eligible: false,
  },
  {
    word: "liques",
    eligible: false,
  },
  {
    word: "líquia",
    eligible: false,
  },
  {
    word: "liquor",
    eligible: false,
  },
  {
    word: "liraça",
    eligible: false,
  },
  {
    word: "lirado",
    eligible: false,
  },
  {
    word: "lirial",
    eligible: false,
  },
  {
    word: "lírico",
    eligible: false,
  },
  {
    word: "lirino",
    eligible: false,
  },
  {
    word: "lírios",
    eligible: false,
  },
  {
    word: "lirodo",
    eligible: false,
  },
  {
    word: "lisado",
    eligible: false,
  },
  {
    word: "Lisana",
    eligible: false,
  },
  {
    word: "Lisboa",
    eligible: false,
  },
  {
    word: "lisboa",
    eligible: false,
  },
  {
    word: "liscar",
    eligible: false,
  },
  {
    word: "lisila",
    eligible: false,
  },
  {
    word: "lisina",
    eligible: false,
  },
  {
    word: "lismar",
    eligible: false,
  },
  {
    word: "lispro",
    eligible: false,
  },
  {
    word: "lissos",
    eligible: false,
  },
  {
    word: "listão",
    eligible: false,
  },
  {
    word: "listar",
    eligible: false,
  },
  {
    word: "listãs",
    eligible: false,
  },
  {
    word: "listel",
    eligible: false,
  },
  {
    word: "líster",
    eligible: false,
  },
  {
    word: "lisuro",
    eligible: false,
  },
  {
    word: "litchi",
    eligible: false,
  },
  {
    word: "lítera",
    eligible: false,
  },
  {
    word: "lítero",
    eligible: false,
  },
  {
    word: "lítico",
    eligible: false,
  },
  {
    word: "lítida",
    eligible: false,
  },
  {
    word: "litina",
    eligible: false,
  },
  {
    word: "litite",
    eligible: false,
  },
  {
    word: "litito",
    eligible: false,
  },
  {
    word: "litode",
    eligible: false,
  },
  {
    word: "litope",
    eligible: false,
  },
  {
    word: "litose",
    eligible: false,
  },
  {
    word: "litote",
    eligible: false,
  },
  {
    word: "lítrea",
    eligible: false,
  },
  {
    word: "lítria",
    eligible: false,
  },
  {
    word: "lítsea",
    eligible: false,
  },
  {
    word: "litura",
    eligible: false,
  },
  {
    word: "liurai",
    eligible: false,
  },
  {
    word: "liural",
    eligible: false,
  },
  {
    word: "livedo",
    eligible: false,
  },
  {
    word: "liveta",
    eligible: false,
  },
  {
    word: "lívico",
    eligible: false,
  },
  {
    word: "lívido",
    eligible: false,
  },
  {
    word: "livona",
    eligible: false,
  },
  {
    word: "livrar",
    eligible: false,
  },
  {
    word: "livres",
    eligible: false,
  },
  {
    word: "livros",
    eligible: false,
  },
  {
    word: "lixose",
    eligible: false,
  },
  {
    word: "lixoso",
    eligible: false,
  },
  {
    word: "lizela",
    eligible: false,
  },
  {
    word: "lizusa",
    eligible: false,
  },
  {
    word: "loação",
    eligible: false,
  },
  {
    word: "Loanda",
    eligible: false,
  },
  {
    word: "loango",
    eligible: false,
  },
  {
    word: "loáseo",
    eligible: false,
  },
  {
    word: "loável",
    eligible: false,
  },
  {
    word: "lobado",
    eligible: false,
  },
  {
    word: "lôbado",
    eligible: false,
  },
  {
    word: "lobare",
    eligible: false,
  },
  {
    word: "lobato",
    eligible: false,
  },
  {
    word: "lobeno",
    eligible: false,
  },
  {
    word: "lobete",
    eligible: false,
  },
  {
    word: "lobeto",
    eligible: false,
  },
  {
    word: "lobeza",
    eligible: false,
  },
  {
    word: "lobido",
    eligible: false,
  },
  {
    word: "lobina",
    eligible: false,
  },
  {
    word: "lobite",
    eligible: false,
  },
  {
    word: "lobito",
    eligible: false,
  },
  {
    word: "lobona",
    eligible: false,
  },
  {
    word: "loboso",
    eligible: false,
  },
  {
    word: "lobote",
    eligible: false,
  },
  {
    word: "loboto",
    eligible: false,
  },
  {
    word: "lóbulo",
    eligible: false,
  },
  {
    word: "lobuno",
    eligible: false,
  },
  {
    word: "locafa",
    eligible: false,
  },
  {
    word: "locago",
    eligible: false,
  },
  {
    word: "locaia",
    eligible: false,
  },
  {
    word: "locelo",
    eligible: false,
  },
  {
    word: "lócmio",
    eligible: false,
  },
  {
    word: "locote",
    eligible: false,
  },
  {
    word: "lócrio",
    eligible: false,
  },
  {
    word: "loctal",
    eligible: false,
  },
  {
    word: "lóculo",
    eligible: false,
  },
  {
    word: "locuri",
    eligible: false,
  },
  {
    word: "lodaça",
    eligible: false,
  },
  {
    word: "lódãos",
    eligible: false,
  },
  {
    word: "lodoso",
    eligible: false,
  },
  {
    word: "loenda",
    eligible: false,
  },
  {
    word: "loengo",
    eligible: false,
  },
  {
    word: "loesse",
    eligible: false,
  },
  {
    word: "loeste",
    eligible: false,
  },
  {
    word: "lofina",
    eligible: false,
  },
  {
    word: "lófiro",
    eligible: false,
  },
  {
    word: "lofoma",
    eligible: false,
  },
  {
    word: "lófopo",
    eligible: false,
  },
  {
    word: "lofote",
    eligible: false,
  },
  {
    word: "lofoto",
    eligible: false,
  },
  {
    word: "lofuro",
    eligible: false,
  },
  {
    word: "logado",
    eligible: false,
  },
  {
    word: "lógico",
    eligible: false,
  },
  {
    word: "logout",
    eligible: false,
  },
  {
    word: "logrão",
    eligible: false,
  },
  {
    word: "lograr",
    eligible: false,
  },
  {
    word: "loíase",
    eligible: false,
  },
  {
    word: "loimia",
    eligible: false,
  },
  {
    word: "loiola",
    eligible: false,
  },
  {
    word: "loirar",
    eligible: false,
  },
  {
    word: "loiras",
    eligible: false,
  },
  {
    word: "loiros",
    eligible: false,
  },
  {
    word: "loisão",
    eligible: false,
  },
  {
    word: "loisar",
    eligible: false,
  },
  {
    word: "lojeca",
    eligible: false,
  },
  {
    word: "lojica",
    eligible: false,
  },
  {
    word: "lolana",
    eligible: false,
  },
  {
    word: "lóligo",
    eligible: false,
  },
  {
    word: "Lolita",
    eligible: false,
  },
  {
    word: "lomani",
    eligible: false,
  },
  {
    word: "lombal",
    eligible: false,
  },
  {
    word: "lombar",
    eligible: false,
  },
  {
    word: "lombos",
    eligible: false,
  },
  {
    word: "lombra",
    eligible: false,
  },
  {
    word: "lonado",
    eligible: false,
  },
  {
    word: "londão",
    eligible: false,
  },
  {
    word: "londré",
    eligible: false,
  },
  {
    word: "londum",
    eligible: false,
  },
  {
    word: "longal",
    eligible: false,
  },
  {
    word: "longar",
    eligible: false,
  },
  {
    word: "longas",
    eligible: false,
  },
  {
    word: "longor",
    eligible: false,
  },
  {
    word: "longôs",
    eligible: false,
  },
  {
    word: "longue",
    eligible: false,
  },
  {
    word: "lonita",
    eligible: false,
  },
  {
    word: "lontar",
    eligible: false,
  },
  {
    word: "lontra",
    eligible: false,
  },
  {
    word: "lontro",
    eligible: false,
  },
  {
    word: "looque",
    eligible: false,
  },
  {
    word: "lopado",
    eligible: false,
  },
  {
    word: "lopano",
    eligible: false,
  },
  {
    word: "loquaz",
    eligible: false,
  },
  {
    word: "lóquio",
    eligible: false,
  },
  {
    word: "loraço",
    eligible: false,
  },
  {
    word: "lorcar",
    eligible: false,
  },
  {
    word: "lorcha",
    eligible: false,
  },
  {
    word: "lordar",
    eligible: false,
  },
  {
    word: "lordes",
    eligible: false,
  },
  {
    word: "loreal",
    eligible: false,
  },
  {
    word: "loreia",
    eligible: false,
  },
  {
    word: "loreno",
    eligible: false,
  },
  {
    word: "Lorenz",
    eligible: false,
  },
  {
    word: "loreta",
    eligible: false,
  },
  {
    word: "Loreto",
    eligible: false,
  },
  {
    word: "lorgar",
    eligible: false,
  },
  {
    word: "lorico",
    eligible: false,
  },
  {
    word: "loriga",
    eligible: false,
  },
  {
    word: "loriol",
    eligible: false,
  },
  {
    word: "lorosa",
    eligible: false,
  },
  {
    word: "lórulo",
    eligible: false,
  },
  {
    word: "lósbia",
    eligible: false,
  },
  {
    word: "losnas",
    eligible: false,
  },
  {
    word: "lostra",
    eligible: false,
  },
  {
    word: "lotase",
    eligible: false,
  },
  {
    word: "lótase",
    eligible: false,
  },
  {
    word: "lotear",
    eligible: false,
  },
  {
    word: "loteca",
    eligible: false,
  },
  {
    word: "lotela",
    eligible: false,
  },
  {
    word: "lótico",
    eligible: false,
  },
  {
    word: "loução",
    eligible: false,
  },
  {
    word: "loucas",
    eligible: false,
  },
  {
    word: "louças",
    eligible: false,
  },
  {
    word: "loudel",
    eligible: false,
  },
  {
    word: "Louise",
    eligible: false,
  },
  {
    word: "lounge",
    eligible: false,
  },
  {
    word: "lourar",
    eligible: false,
  },
  {
    word: "louras",
    eligible: false,
  },
  {
    word: "louros",
    eligible: false,
  },
  {
    word: "lousão",
    eligible: false,
  },
  {
    word: "lousar",
    eligible: false,
  },
  {
    word: "loutiá",
    eligible: false,
  },
  {
    word: "louvar",
    eligible: false,
  },
  {
    word: "louvor",
    eligible: false,
  },
  {
    word: "Louvre",
    eligible: false,
  },
  {
    word: "lovale",
    eligible: false,
  },
  {
    word: "loxode",
    eligible: false,
  },
  {
    word: "lualuá",
    eligible: false,
  },
  {
    word: "luanco",
    eligible: false,
  },
  {
    word: "luando",
    eligible: false,
  },
  {
    word: "luango",
    eligible: false,
  },
  {
    word: "luário",
    eligible: false,
  },
  {
    word: "lubeno",
    eligible: false,
  },
  {
    word: "lubina",
    eligible: false,
  },
  {
    word: "lubire",
    eligible: false,
  },
  {
    word: "lubito",
    eligible: false,
  },
  {
    word: "lubobo",
    eligible: false,
  },
  {
    word: "lucaço",
    eligible: false,
  },
  {
    word: "lucaio",
    eligible: false,
  },
  {
    word: "lucano",
    eligible: false,
  },
  {
    word: "lucata",
    eligible: false,
  },
  {
    word: "luceno",
    eligible: false,
  },
  {
    word: "lúcere",
    eligible: false,
  },
  {
    word: "lúcero",
    eligible: false,
  },
  {
    word: "luchan",
    eligible: false,
  },
  {
    word: "luchar",
    eligible: false,
  },
  {
    word: "lúcias",
    eligible: false,
  },
  {
    word: "lúcido",
    eligible: false,
  },
  {
    word: "lúcilo",
    eligible: false,
  },
  {
    word: "lucina",
    eligible: false,
  },
  {
    word: "lúcios",
    eligible: false,
  },
  {
    word: "lucite",
    eligible: false,
  },
  {
    word: "lucmão",
    eligible: false,
  },
  {
    word: "lucrar",
    eligible: false,
  },
  {
    word: "luculo",
    eligible: false,
  },
  {
    word: "lúculo",
    eligible: false,
  },
  {
    word: "lucuma",
    eligible: false,
  },
  {
    word: "lúcumo",
    eligible: false,
  },
  {
    word: "ludeus",
    eligible: false,
  },
  {
    word: "ludião",
    eligible: false,
  },
  {
    word: "lúdico",
    eligible: false,
  },
  {
    word: "ludita",
    eligible: false,
  },
  {
    word: "Ludwig",
    eligible: false,
  },
  {
    word: "luengo",
    eligible: false,
  },
  {
    word: "lueque",
    eligible: false,
  },
  {
    word: "lufica",
    eligible: false,
  },
  {
    word: "lufuma",
    eligible: false,
  },
  {
    word: "lugiso",
    eligible: false,
  },
  {
    word: "lugres",
    eligible: false,
  },
  {
    word: "luídia",
    eligible: false,
  },
  {
    word: "luíida",
    eligible: false,
  },
  {
    word: "luimbe",
    eligible: false,
  },
  {
    word: "luimbi",
    eligible: false,
  },
  {
    word: "luinha",
    eligible: false,
  },
  {
    word: "Luisão",
    eligible: false,
  },
  {
    word: "luísas",
    eligible: false,
  },
  {
    word: "Luíses",
    eligible: false,
  },
  {
    word: "luíses",
    eligible: false,
  },
  {
    word: "luísia",
    eligible: false,
  },
  {
    word: "lulula",
    eligible: false,
  },
  {
    word: "lumens",
    eligible: false,
  },
  {
    word: "lumeto",
    eligible: false,
  },
  {
    word: "lumiar",
    eligible: false,
  },
  {
    word: "lumine",
    eligible: false,
  },
  {
    word: "lúmpen",
    eligible: false,
  },
  {
    word: "lunado",
    eligible: false,
  },
  {
    word: "lundês",
    eligible: false,
  },
  {
    word: "lúndia",
    eligible: false,
  },
  {
    word: "lundum",
    eligible: false,
  },
  {
    word: "lundus",
    eligible: false,
  },
  {
    word: "luneta",
    eligible: false,
  },
  {
    word: "lunida",
    eligible: false,
  },
  {
    word: "lunite",
    eligible: false,
  },
  {
    word: "lúnula",
    eligible: false,
  },
  {
    word: "lupaça",
    eligible: false,
  },
  {
    word: "lupada",
    eligible: false,
  },
  {
    word: "lúparo",
    eligible: false,
  },
  {
    word: "lupato",
    eligible: false,
  },
  {
    word: "lupeol",
    eligible: false,
  },
  {
    word: "lupero",
    eligible: false,
  },
  {
    word: "lupeta",
    eligible: false,
  },
  {
    word: "lúpico",
    eligible: false,
  },
  {
    word: "lupino",
    eligible: false,
  },
  {
    word: "lupoca",
    eligible: false,
  },
  {
    word: "lupoça",
    eligible: false,
  },
  {
    word: "lupoma",
    eligible: false,
  },
  {
    word: "luposo",
    eligible: false,
  },
  {
    word: "lupuié",
    eligible: false,
  },
  {
    word: "lúpulo",
    eligible: false,
  },
  {
    word: "lúpuro",
    eligible: false,
  },
  {
    word: "Lurdes",
    eligible: false,
  },
  {
    word: "lúrido",
    eligible: false,
  },
  {
    word: "lúrtia",
    eligible: false,
  },
  {
    word: "lurura",
    eligible: false,
  },
  {
    word: "luscar",
    eligible: false,
  },
  {
    word: "lusito",
    eligible: false,
  },
  {
    word: "lúsmeo",
    eligible: false,
  },
  {
    word: "lusmir",
    eligible: false,
  },
  {
    word: "lusque",
    eligible: false,
  },
  {
    word: "lustra",
    eligible: false,
  },
  {
    word: "lútaro",
    eligible: false,
  },
  {
    word: "luteal",
    eligible: false,
  },
  {
    word: "luteol",
    eligible: false,
  },
  {
    word: "lúteos",
    eligible: false,
  },
  {
    word: "Lutero",
    eligible: false,
  },
  {
    word: "lutero",
    eligible: false,
  },
  {
    word: "lutina",
    eligible: false,
  },
  {
    word: "lutito",
    eligible: false,
  },
  {
    word: "lutoca",
    eligible: false,
  },
  {
    word: "lutoso",
    eligible: false,
  },
  {
    word: "luuiuí",
    eligible: false,
  },
  {
    word: "luvale",
    eligible: false,
  },
  {
    word: "luvare",
    eligible: false,
  },
  {
    word: "luvete",
    eligible: false,
  },
  {
    word: "luvita",
    eligible: false,
  },
  {
    word: "luxaze",
    eligible: false,
  },
  {
    word: "luxázi",
    eligible: false,
  },
  {
    word: "luxeta",
    eligible: false,
  },
  {
    word: "luxiba",
    eligible: false,
  },
  {
    word: "luxoso",
    eligible: false,
  },
  {
    word: "luzecu",
    eligible: false,
  },
  {
    word: "luzias",
    eligible: false,
  },
  {
    word: "luzica",
    eligible: false,
  },
  {
    word: "luzicu",
    eligible: false,
  },
  {
    word: "luzios",
    eligible: false,
  },
  {
    word: "luzula",
    eligible: false,
  },
  {
    word: "LXVIII",
    eligible: false,
  },
  {
    word: "LXXIII",
    eligible: false,
  },
  {
    word: "LXXVII",
    eligible: false,
  },
  {
    word: "LXXXII",
    eligible: false,
  },
  {
    word: "LXXXIV",
    eligible: false,
  },
  {
    word: "LXXXIX",
    eligible: false,
  },
  {
    word: "LXXXVI",
    eligible: false,
  },
  {
    word: "maamba",
    eligible: false,
  },
  {
    word: "maatma",
    eligible: false,
  },
  {
    word: "mabaço",
    eligible: false,
  },
  {
    word: "mabaia",
    eligible: false,
  },
  {
    word: "mabala",
    eligible: false,
  },
  {
    word: "mabate",
    eligible: false,
  },
  {
    word: "mabaza",
    eligible: false,
  },
  {
    word: "mabeco",
    eligible: false,
  },
  {
    word: "mabeia",
    eligible: false,
  },
  {
    word: "mabela",
    eligible: false,
  },
  {
    word: "mabile",
    eligible: false,
  },
  {
    word: "mabita",
    eligible: false,
  },
  {
    word: "maboca",
    eligible: false,
  },
  {
    word: "mabode",
    eligible: false,
  },
  {
    word: "maboia",
    eligible: false,
  },
  {
    word: "mabole",
    eligible: false,
  },
  {
    word: "mabolo",
    eligible: false,
  },
  {
    word: "mabuba",
    eligible: false,
  },
  {
    word: "mabuco",
    eligible: false,
  },
  {
    word: "mabuda",
    eligible: false,
  },
  {
    word: "mabuia",
    eligible: false,
  },
  {
    word: "mabulá",
    eligible: false,
  },
  {
    word: "mabuno",
    eligible: false,
  },
  {
    word: "mabure",
    eligible: false,
  },
  {
    word: "mabuta",
    eligible: false,
  },
  {
    word: "macaão",
    eligible: false,
  },
  {
    word: "macaba",
    eligible: false,
  },
  {
    word: "macabi",
    eligible: false,
  },
  {
    word: "Macabu",
    eligible: false,
  },
  {
    word: "macaca",
    eligible: false,
  },
  {
    word: "macaça",
    eligible: false,
  },
  {
    word: "macaco",
    eligible: false,
  },
  {
    word: "macacu",
    eligible: false,
  },
  {
    word: "macaio",
    eligible: false,
  },
  {
    word: "macajá",
    eligible: false,
  },
  {
    word: "macáli",
    eligible: false,
  },
  {
    word: "macalo",
    eligible: false,
  },
  {
    word: "macama",
    eligible: false,
  },
  {
    word: "macamã",
    eligible: false,
  },
  {
    word: "macana",
    eligible: false,
  },
  {
    word: "macaná",
    eligible: false,
  },
  {
    word: "macanã",
    eligible: false,
  },
  {
    word: "Macapá",
    eligible: false,
  },
  {
    word: "macara",
    eligible: false,
  },
  {
    word: "macaré",
    eligible: false,
  },
  {
    word: "macata",
    eligible: false,
  },
  {
    word: "macate",
    eligible: false,
  },
  {
    word: "macauã",
    eligible: false,
  },
  {
    word: "macaxá",
    eligible: false,
  },
  {
    word: "macaxó",
    eligible: false,
  },
  {
    word: "macaza",
    eligible: false,
  },
  {
    word: "macece",
    eligible: false,
  },
  {
    word: "macedo",
    eligible: false,
  },
  {
    word: "mácedo",
    eligible: false,
  },
  {
    word: "macega",
    eligible: false,
  },
  {
    word: "maceió",
    eligible: false,
  },
  {
    word: "macela",
    eligible: false,
  },
  {
    word: "macerá",
    eligible: false,
  },
  {
    word: "mácete",
    eligible: false,
  },
  {
    word: "machão",
    eligible: false,
  },
  {
    word: "machas",
    eligible: false,
  },
  {
    word: "machil",
    eligible: false,
  },
  {
    word: "machim",
    eligible: false,
  },
  {
    word: "máchio",
    eligible: false,
  },
  {
    word: "machoa",
    eligible: false,
  },
  {
    word: "machos",
    eligible: false,
  },
  {
    word: "maciar",
    eligible: false,
  },
  {
    word: "macias",
    eligible: false,
  },
  {
    word: "macico",
    eligible: false,
  },
  {
    word: "maciço",
    eligible: false,
  },
  {
    word: "Maciel",
    eligible: false,
  },
  {
    word: "maciez",
    eligible: false,
  },
  {
    word: "macina",
    eligible: false,
  },
  {
    word: "macios",
    eligible: false,
  },
  {
    word: "máclie",
    eligible: false,
  },
  {
    word: "macoba",
    eligible: false,
  },
  {
    word: "macoco",
    eligible: false,
  },
  {
    word: "macofu",
    eligible: false,
  },
  {
    word: "macoia",
    eligible: false,
  },
  {
    word: "macolo",
    eligible: false,
  },
  {
    word: "macoma",
    eligible: false,
  },
  {
    word: "macone",
    eligible: false,
  },
  {
    word: "maconi",
    eligible: false,
  },
  {
    word: "macopo",
    eligible: false,
  },
  {
    word: "macote",
    eligible: false,
  },
  {
    word: "maçote",
    eligible: false,
  },
  {
    word: "macóxi",
    eligible: false,
  },
  {
    word: "macozo",
    eligible: false,
  },
  {
    word: "macral",
    eligible: false,
  },
  {
    word: "macrão",
    eligible: false,
  },
  {
    word: "mácron",
    eligible: false,
  },
  {
    word: "macruu",
    eligible: false,
  },
  {
    word: "mactra",
    eligible: false,
  },
  {
    word: "macuba",
    eligible: false,
  },
  {
    word: "macuco",
    eligible: false,
  },
  {
    word: "macucu",
    eligible: false,
  },
  {
    word: "maçudo",
    eligible: false,
  },
  {
    word: "macuim",
    eligible: false,
  },
  {
    word: "macujá",
    eligible: false,
  },
  {
    word: "macujé",
    eligible: false,
  },
  {
    word: "mácula",
    eligible: false,
  },
  {
    word: "macuma",
    eligible: false,
  },
  {
    word: "macumá",
    eligible: false,
  },
  {
    word: "macumã",
    eligible: false,
  },
  {
    word: "macuna",
    eligible: false,
  },
  {
    word: "macuná",
    eligible: false,
  },
  {
    word: "macuni",
    eligible: false,
  },
  {
    word: "macupi",
    eligible: false,
  },
  {
    word: "macura",
    eligible: false,
  },
  {
    word: "macurá",
    eligible: false,
  },
  {
    word: "macuru",
    eligible: false,
  },
  {
    word: "macute",
    eligible: false,
  },
  {
    word: "macúti",
    eligible: false,
  },
  {
    word: "macuto",
    eligible: false,
  },
  {
    word: "macuve",
    eligible: false,
  },
  {
    word: "macuxi",
    eligible: false,
  },
  {
    word: "madala",
    eligible: false,
  },
  {
    word: "madama",
    eligible: false,
  },
  {
    word: "madame",
    eligible: false,
  },
  {
    word: "madiar",
    eligible: false,
  },
  {
    word: "mádido",
    eligible: false,
  },
  {
    word: "madijá",
    eligible: false,
  },
  {
    word: "madoda",
    eligible: false,
  },
  {
    word: "madona",
    eligible: false,
  },
  {
    word: "madras",
    eligible: false,
  },
  {
    word: "madrás",
    eligible: false,
  },
  {
    word: "madres",
    eligible: false,
  },
  {
    word: "madria",
    eligible: false,
  },
  {
    word: "mádria",
    eligible: false,
  },
  {
    word: "Madrid",
    eligible: false,
  },
  {
    word: "madril",
    eligible: false,
  },
  {
    word: "madriz",
    eligible: false,
  },
  {
    word: "Madson",
    eligible: false,
  },
  {
    word: "maduca",
    eligible: false,
  },
  {
    word: "maduro",
    eligible: false,
  },
  {
    word: "maenga",
    eligible: false,
  },
  {
    word: "maenje",
    eligible: false,
  },
  {
    word: "mafabé",
    eligible: false,
  },
  {
    word: "mafafa",
    eligible: false,
  },
  {
    word: "mafali",
    eligible: false,
  },
  {
    word: "mafana",
    eligible: false,
  },
  {
    word: "mafião",
    eligible: false,
  },
  {
    word: "mafiar",
    eligible: false,
  },
  {
    word: "máfico",
    eligible: false,
  },
  {
    word: "mafire",
    eligible: false,
  },
  {
    word: "mafite",
    eligible: false,
  },
  {
    word: "mafome",
    eligible: false,
  },
  {
    word: "mafuco",
    eligible: false,
  },
  {
    word: "mafulo",
    eligible: false,
  },
  {
    word: "mafumo",
    eligible: false,
  },
  {
    word: "mafura",
    eligible: false,
  },
  {
    word: "mafurá",
    eligible: false,
  },
  {
    word: "mafuta",
    eligible: false,
  },
  {
    word: "magaça",
    eligible: false,
  },
  {
    word: "Magadã",
    eligible: false,
  },
  {
    word: "magadi",
    eligible: false,
  },
  {
    word: "Magali",
    eligible: false,
  },
  {
    word: "magano",
    eligible: false,
  },
  {
    word: "magari",
    eligible: false,
  },
  {
    word: "magatô",
    eligible: false,
  },
  {
    word: "mageda",
    eligible: false,
  },
  {
    word: "magelo",
    eligible: false,
  },
  {
    word: "magiar",
    eligible: false,
  },
  {
    word: "mágica",
    eligible: false,
  },
  {
    word: "mágico",
    eligible: false,
  },
  {
    word: "magilo",
    eligible: false,
  },
  {
    word: "magnas",
    eligible: false,
  },
  {
    word: "mágnio",
    eligible: false,
  },
  {
    word: "magnon",
    eligible: false,
  },
  {
    word: "mágnon",
    eligible: false,
  },
  {
    word: "Magnum",
    eligible: false,
  },
  {
    word: "magoar",
    eligible: false,
  },
  {
    word: "magodo",
    eligible: false,
  },
  {
    word: "magote",
    eligible: false,
  },
  {
    word: "magoua",
    eligible: false,
  },
  {
    word: "magrão",
    eligible: false,
  },
  {
    word: "magras",
    eligible: false,
  },
  {
    word: "magrém",
    eligible: false,
  },
  {
    word: "magrez",
    eligible: false,
  },
  {
    word: "magriz",
    eligible: false,
  },
  {
    word: "magros",
    eligible: false,
  },
  {
    word: "magudo",
    eligible: false,
  },
  {
    word: "maguei",
    eligible: false,
  },
  {
    word: "magujo",
    eligible: false,
  },
  {
    word: "maiaca",
    eligible: false,
  },
  {
    word: "maiacá",
    eligible: false,
  },
  {
    word: "maiaia",
    eligible: false,
  },
  {
    word: "maiano",
    eligible: false,
  },
  {
    word: "maiato",
    eligible: false,
  },
  {
    word: "maidão",
    eligible: false,
  },
  {
    word: "maídea",
    eligible: false,
  },
  {
    word: "maidim",
    eligible: false,
  },
  {
    word: "maiela",
    eligible: false,
  },
  {
    word: "maimbu",
    eligible: false,
  },
  {
    word: "mainás",
    eligible: false,
  },
  {
    word: "mainça",
    eligible: false,
  },
  {
    word: "maindo",
    eligible: false,
  },
  {
    word: "mainel",
    eligible: false,
  },
  {
    word: "mainha",
    eligible: false,
  },
  {
    word: "maiobo",
    eligible: false,
  },
  {
    word: "maioca",
    eligible: false,
  },
  {
    word: "maiolo",
    eligible: false,
  },
  {
    word: "Maiote",
    eligible: false,
  },
  {
    word: "maioto",
    eligible: false,
  },
  {
    word: "maisal",
    eligible: false,
  },
  {
    word: "majeró",
    eligible: false,
  },
  {
    word: "majovo",
    eligible: false,
  },
  {
    word: "majuba",
    eligible: false,
  },
  {
    word: "majuga",
    eligible: false,
  },
  {
    word: "Majuro",
    eligible: false,
  },
  {
    word: "malabo",
    eligible: false,
  },
  {
    word: "Málaca",
    eligible: false,
  },
  {
    word: "malaca",
    eligible: false,
  },
  {
    word: "málaco",
    eligible: false,
  },
  {
    word: "malafo",
    eligible: false,
  },
  {
    word: "malaga",
    eligible: false,
  },
  {
    word: "málaga",
    eligible: false,
  },
  {
    word: "malaio",
    eligible: false,
  },
  {
    word: "malala",
    eligible: false,
  },
  {
    word: "malali",
    eligible: false,
  },
  {
    word: "malári",
    eligible: false,
  },
  {
    word: "malato",
    eligible: false,
  },
  {
    word: "Malauí",
    eligible: false,
  },
  {
    word: "malaui",
    eligible: false,
  },
  {
    word: "Malávi",
    eligible: false,
  },
  {
    word: "malavo",
    eligible: false,
  },
  {
    word: "Malawi",
    eligible: false,
  },
  {
    word: "maldar",
    eligible: false,
  },
  {
    word: "malear",
    eligible: false,
  },
  {
    word: "maledo",
    eligible: false,
  },
  {
    word: "malejo",
    eligible: false,
  },
  {
    word: "maleta",
    eligible: false,
  },
  {
    word: "malevo",
    eligible: false,
  },
  {
    word: "maleza",
    eligible: false,
  },
  {
    word: "malhal",
    eligible: false,
  },
  {
    word: "malhão",
    eligible: false,
  },
  {
    word: "malhar",
    eligible: false,
  },
  {
    word: "malhas",
    eligible: false,
  },
  {
    word: "malhio",
    eligible: false,
  },
  {
    word: "malhos",
    eligible: false,
  },
  {
    word: "málico",
    eligible: false,
  },
  {
    word: "malido",
    eligible: false,
  },
  {
    word: "Maliha",
    eligible: false,
  },
  {
    word: "malili",
    eligible: false,
  },
  {
    word: "malilo",
    eligible: false,
  },
  {
    word: "malinu",
    eligible: false,
  },
  {
    word: "malita",
    eligible: false,
  },
  {
    word: "mallei",
    eligible: false,
  },
  {
    word: "Mallet",
    eligible: false,
  },
  {
    word: "malmal",
    eligible: false,
  },
  {
    word: "maloio",
    eligible: false,
  },
  {
    word: "maloja",
    eligible: false,
  },
  {
    word: "malolo",
    eligible: false,
  },
  {
    word: "malope",
    eligible: false,
  },
  {
    word: "malora",
    eligible: false,
  },
  {
    word: "malosa",
    eligible: false,
  },
  {
    word: "malota",
    eligible: false,
  },
  {
    word: "malote",
    eligible: false,
  },
  {
    word: "maloto",
    eligible: false,
  },
  {
    word: "malsão",
    eligible: false,
  },
  {
    word: "malsim",
    eligible: false,
  },
  {
    word: "maltar",
    eligible: false,
  },
  {
    word: "maltês",
    eligible: false,
  },
  {
    word: "maltol",
    eligible: false,
  },
  {
    word: "maluco",
    eligible: false,
  },
  {
    word: "maludo",
    eligible: false,
  },
  {
    word: "malufo",
    eligible: false,
  },
  {
    word: "maluia",
    eligible: false,
  },
  {
    word: "malume",
    eligible: false,
  },
  {
    word: "maluro",
    eligible: false,
  },
  {
    word: "maluta",
    eligible: false,
  },
  {
    word: "maluvo",
    eligible: false,
  },
  {
    word: "malval",
    eligible: false,
  },
  {
    word: "malvar",
    eligible: false,
  },
  {
    word: "malvas",
    eligible: false,
  },
  {
    word: "málveo",
    eligible: false,
  },
  {
    word: "malvis",
    eligible: false,
  },
  {
    word: "málvis",
    eligible: false,
  },
  {
    word: "mamães",
    eligible: false,
  },
  {
    word: "mamana",
    eligible: false,
  },
  {
    word: "mamanê",
    eligible: false,
  },
  {
    word: "mamanô",
    eligible: false,
  },
  {
    word: "mamata",
    eligible: false,
  },
  {
    word: "mamato",
    eligible: false,
  },
  {
    word: "Mambaí",
    eligible: false,
  },
  {
    word: "mambar",
    eligible: false,
  },
  {
    word: "Mamede",
    eligible: false,
  },
  {
    word: "mamede",
    eligible: false,
  },
  {
    word: "mamela",
    eligible: false,
  },
  {
    word: "mameto",
    eligible: false,
  },
  {
    word: "mamica",
    eligible: false,
  },
  {
    word: "mamilo",
    eligible: false,
  },
  {
    word: "mamirá",
    eligible: false,
  },
  {
    word: "mamite",
    eligible: false,
  },
  {
    word: "mamixi",
    eligible: false,
  },
  {
    word: "mamoco",
    eligible: false,
  },
  {
    word: "mamões",
    eligible: false,
  },
  {
    word: "mamola",
    eligible: false,
  },
  {
    word: "mamona",
    eligible: false,
  },
  {
    word: "mamono",
    eligible: false,
  },
  {
    word: "mamonó",
    eligible: false,
  },
  {
    word: "Mamoré",
    eligible: false,
  },
  {
    word: "mamoso",
    eligible: false,
  },
  {
    word: "mamote",
    eligible: false,
  },
  {
    word: "mamoto",
    eligible: false,
  },
  {
    word: "mampar",
    eligible: false,
  },
  {
    word: "mamude",
    eligible: false,
  },
  {
    word: "mamudo",
    eligible: false,
  },
  {
    word: "mamulo",
    eligible: false,
  },
  {
    word: "mamuna",
    eligible: false,
  },
  {
    word: "mamuri",
    eligible: false,
  },
  {
    word: "mamute",
    eligible: false,
  },
  {
    word: "manacá",
    eligible: false,
  },
  {
    word: "manacã",
    eligible: false,
  },
  {
    word: "manaça",
    eligible: false,
  },
  {
    word: "manada",
    eligible: false,
  },
  {
    word: "Manaém",
    eligible: false,
  },
  {
    word: "managé",
    eligible: false,
  },
  {
    word: "manaié",
    eligible: false,
  },
  {
    word: "manaio",
    eligible: false,
  },
  {
    word: "manajá",
    eligible: false,
  },
  {
    word: "manajé",
    eligible: false,
  },
  {
    word: "manajó",
    eligible: false,
  },
  {
    word: "Manama",
    eligible: false,
  },
  {
    word: "manana",
    eligible: false,
  },
  {
    word: "mananá",
    eligible: false,
  },
  {
    word: "Manari",
    eligible: false,
  },
  {
    word: "manate",
    eligible: false,
  },
  {
    word: "manati",
    eligible: false,
  },
  {
    word: "manato",
    eligible: false,
  },
  {
    word: "manauê",
    eligible: false,
  },
  {
    word: "manaus",
    eligible: false,
  },
  {
    word: "manaxo",
    eligible: false,
  },
  {
    word: "mancal",
    eligible: false,
  },
  {
    word: "mancão",
    eligible: false,
  },
  {
    word: "mancar",
    eligible: false,
  },
  {
    word: "mancas",
    eligible: false,
  },
  {
    word: "mancha",
    eligible: false,
  },
  {
    word: "manchó",
    eligible: false,
  },
  {
    word: "manchu",
    eligible: false,
  },
  {
    word: "Mâncio",
    eligible: false,
  },
  {
    word: "mancos",
    eligible: false,
  },
  {
    word: "mandão",
    eligible: false,
  },
  {
    word: "mandar",
    eligible: false,
  },
  {
    word: "mandau",
    eligible: false,
  },
  {
    word: "mandeu",
    eligible: false,
  },
  {
    word: "mandii",
    eligible: false,
  },
  {
    word: "mandil",
    eligible: false,
  },
  {
    word: "mandim",
    eligible: false,
  },
  {
    word: "mandis",
    eligible: false,
  },
  {
    word: "mandiú",
    eligible: false,
  },
  {
    word: "mandos",
    eligible: false,
  },
  {
    word: "mandro",
    eligible: false,
  },
  {
    word: "mandua",
    eligible: false,
  },
  {
    word: "manear",
    eligible: false,
  },
  {
    word: "maneco",
    eligible: false,
  },
  {
    word: "manege",
    eligible: false,
  },
  {
    word: "manego",
    eligible: false,
  },
  {
    word: "manelo",
    eligible: false,
  },
  {
    word: "manema",
    eligible: false,
  },
  {
    word: "maneta",
    eligible: false,
  },
  {
    word: "manete",
    eligible: false,
  },
  {
    word: "manfuí",
    eligible: false,
  },
  {
    word: "mangal",
    eligible: false,
  },
  {
    word: "mangão",
    eligible: false,
  },
  {
    word: "mangar",
    eligible: false,
  },
  {
    word: "mangas",
    eligible: false,
  },
  {
    word: "mangaz",
    eligible: false,
  },
  {
    word: "mangbá",
    eligible: false,
  },
  {
    word: "mangle",
    eligible: false,
  },
  {
    word: "mangos",
    eligible: false,
  },
  {
    word: "manguá",
    eligible: false,
  },
  {
    word: "mangue",
    eligible: false,
  },
  {
    word: "manhãs",
    eligible: false,
  },
  {
    word: "maniba",
    eligible: false,
  },
  {
    word: "manibu",
    eligible: false,
  },
  {
    word: "manicá",
    eligible: false,
  },
  {
    word: "manice",
    eligible: false,
  },
  {
    word: "manico",
    eligible: false,
  },
  {
    word: "manicu",
    eligible: false,
  },
  {
    word: "manila",
    eligible: false,
  },
  {
    word: "manino",
    eligible: false,
  },
  {
    word: "manipo",
    eligible: false,
  },
  {
    word: "manite",
    eligible: false,
  },
  {
    word: "manito",
    eligible: false,
  },
  {
    word: "manitu",
    eligible: false,
  },
  {
    word: "maniva",
    eligible: false,
  },
  {
    word: "manixi",
    eligible: false,
  },
  {
    word: "manjar",
    eligible: false,
  },
  {
    word: "manjil",
    eligible: false,
  },
  {
    word: "manjua",
    eligible: false,
  },
  {
    word: "Manoel",
    eligible: false,
  },
  {
    word: "manoel",
    eligible: false,
  },
  {
    word: "manoio",
    eligible: false,
  },
  {
    word: "manojo",
    eligible: false,
  },
  {
    word: "manolo",
    eligible: false,
  },
  {
    word: "manona",
    eligible: false,
  },
  {
    word: "manopé",
    eligible: false,
  },
  {
    word: "manose",
    eligible: false,
  },
  {
    word: "manota",
    eligible: false,
  },
  {
    word: "mansão",
    eligible: false,
  },
  {
    word: "mansas",
    eligible: false,
  },
  {
    word: "mansos",
    eligible: false,
  },
  {
    word: "mantão",
    eligible: false,
  },
  {
    word: "mantar",
    eligible: false,
  },
  {
    word: "mantas",
    eligible: false,
  },
  {
    word: "mantaz",
    eligible: false,
  },
  {
    word: "mantel",
    eligible: false,
  },
  {
    word: "manter",
    eligible: false,
  },
  {
    word: "mantéu",
    eligible: false,
  },
  {
    word: "mantil",
    eligible: false,
  },
  {
    word: "mantol",
    eligible: false,
  },
  {
    word: "mantos",
    eligible: false,
  },
  {
    word: "mantra",
    eligible: false,
  },
  {
    word: "mantrá",
    eligible: false,
  },
  {
    word: "Mântua",
    eligible: false,
  },
  {
    word: "Mantus",
    eligible: false,
  },
  {
    word: "manual",
    eligible: false,
  },
  {
    word: "manuba",
    eligible: false,
  },
  {
    word: "manuel",
    eligible: false,
  },
  {
    word: "manuma",
    eligible: false,
  },
  {
    word: "manvio",
    eligible: false,
  },
  {
    word: "manzuá",
    eligible: false,
  },
  {
    word: "maombe",
    eligible: false,
  },
  {
    word: "maonhe",
    eligible: false,
  },
  {
    word: "maônia",
    eligible: false,
  },
  {
    word: "Maoque",
    eligible: false,
  },
  {
    word: "mapará",
    eligible: false,
  },
  {
    word: "maparé",
    eligible: false,
  },
  {
    word: "mapari",
    eligible: false,
  },
  {
    word: "mapati",
    eligible: false,
  },
  {
    word: "mapear",
    eligible: false,
  },
  {
    word: "mapiar",
    eligible: false,
  },
  {
    word: "mapico",
    eligible: false,
  },
  {
    word: "mapila",
    eligible: false,
  },
  {
    word: "mapira",
    eligible: false,
  },
  {
    word: "mapixi",
    eligible: false,
  },
  {
    word: "mapoão",
    eligible: false,
  },
  {
    word: "mapoió",
    eligible: false,
  },
  {
    word: "mapole",
    eligible: false,
  },
  {
    word: "mapote",
    eligible: false,
  },
  {
    word: "mapuca",
    eligible: false,
  },
  {
    word: "mapula",
    eligible: false,
  },
  {
    word: "mapupa",
    eligible: false,
  },
  {
    word: "mapurá",
    eligible: false,
  },
  {
    word: "Maputo",
    eligible: false,
  },
  {
    word: "máquia",
    eligible: false,
  },
  {
    word: "maquié",
    eligible: false,
  },
  {
    word: "maquim",
    eligible: false,
  },
  {
    word: "Maquir",
    eligible: false,
  },
  {
    word: "Maraba",
    eligible: false,
  },
  {
    word: "marabá",
    eligible: false,
  },
  {
    word: "marabô",
    eligible: false,
  },
  {
    word: "marabu",
    eligible: false,
  },
  {
    word: "maraca",
    eligible: false,
  },
  {
    word: "maracá",
    eligible: false,
  },
  {
    word: "maracã",
    eligible: false,
  },
  {
    word: "marace",
    eligible: false,
  },
  {
    word: "márace",
    eligible: false,
  },
  {
    word: "maracu",
    eligible: false,
  },
  {
    word: "marafo",
    eligible: false,
  },
  {
    word: "maraga",
    eligible: false,
  },
  {
    word: "maraiá",
    eligible: false,
  },
  {
    word: "marajá",
    eligible: false,
  },
  {
    word: "marajó",
    eligible: false,
  },
  {
    word: "Maralá",
    eligible: false,
  },
  {
    word: "marani",
    eligible: false,
  },
  {
    word: "marano",
    eligible: false,
  },
  {
    word: "marapá",
    eligible: false,
  },
  {
    word: "marapé",
    eligible: false,
  },
  {
    word: "Maratá",
    eligible: false,
  },
  {
    word: "marata",
    eligible: false,
  },
  {
    word: "marati",
    eligible: false,
  },
  {
    word: "marauá",
    eligible: false,
  },
  {
    word: "marave",
    eligible: false,
  },
  {
    word: "Marçal",
    eligible: false,
  },
  {
    word: "Marcão",
    eligible: false,
  },
  {
    word: "marcar",
    eligible: false,
  },
  {
    word: "marcas",
    eligible: false,
  },
  {
    word: "Marcel",
    eligible: false,
  },
  {
    word: "marcha",
    eligible: false,
  },
  {
    word: "marche",
    eligible: false,
  },
  {
    word: "márcio",
    eligible: false,
  },
  {
    word: "marcos",
    eligible: false,
  },
  {
    word: "Marcus",
    eligible: false,
  },
  {
    word: "marear",
    eligible: false,
  },
  {
    word: "mareca",
    eligible: false,
  },
  {
    word: "marema",
    eligible: false,
  },
  {
    word: "mareta",
    eligible: false,
  },
  {
    word: "marfar",
    eligible: false,
  },
  {
    word: "marfil",
    eligible: false,
  },
  {
    word: "Marfim",
    eligible: false,
  },
  {
    word: "marfim",
    eligible: false,
  },
  {
    word: "Margão",
    eligible: false,
  },
  {
    word: "margar",
    eligible: false,
  },
  {
    word: "margem",
    eligible: false,
  },
  {
    word: "margio",
    eligible: false,
  },
  {
    word: "margir",
    eligible: false,
  },
  {
    word: "margui",
    eligible: false,
  },
  {
    word: "marial",
    eligible: false,
  },
  {
    word: "Mariam",
    eligible: false,
  },
  {
    word: "marias",
    eligible: false,
  },
  {
    word: "maribi",
    eligible: false,
  },
  {
    word: "maricá",
    eligible: false,
  },
  {
    word: "marico",
    eligible: false,
  },
  {
    word: "marido",
    eligible: false,
  },
  {
    word: "Mariel",
    eligible: false,
  },
  {
    word: "Marili",
    eligible: false,
  },
  {
    word: "Marilu",
    eligible: false,
  },
  {
    word: "marimã",
    eligible: false,
  },
  {
    word: "marimo",
    eligible: false,
  },
  {
    word: "marine",
    eligible: false,
  },
  {
    word: "marinô",
    eligible: false,
  },
  {
    word: "maripa",
    eligible: false,
  },
  {
    word: "maripá",
    eligible: false,
  },
  {
    word: "maripu",
    eligible: false,
  },
  {
    word: "marisa",
    eligible: false,
  },
  {
    word: "Marise",
    eligible: false,
  },
  {
    word: "marite",
    eligible: false,
  },
  {
    word: "mariuô",
    eligible: false,
  },
  {
    word: "Marius",
    eligible: false,
  },
  {
    word: "marjão",
    eligible: false,
  },
  {
    word: "marlim",
    eligible: false,
  },
  {
    word: "Márlon",
    eligible: false,
  },
  {
    word: "Marlus",
    eligible: false,
  },
  {
    word: "marmar",
    eligible: false,
  },
  {
    word: "marnel",
    eligible: false,
  },
  {
    word: "maroba",
    eligible: false,
  },
  {
    word: "marobá",
    eligible: false,
  },
  {
    word: "maroca",
    eligible: false,
  },
  {
    word: "marões",
    eligible: false,
  },
  {
    word: "marolo",
    eligible: false,
  },
  {
    word: "marome",
    eligible: false,
  },
  {
    word: "marona",
    eligible: false,
  },
  {
    word: "maropa",
    eligible: false,
  },
  {
    word: "marota",
    eligible: false,
  },
  {
    word: "Marote",
    eligible: false,
  },
  {
    word: "maroto",
    eligible: false,
  },
  {
    word: "marova",
    eligible: false,
  },
  {
    word: "marrão",
    eligible: false,
  },
  {
    word: "marrar",
    eligible: false,
  },
  {
    word: "marraú",
    eligible: false,
  },
  {
    word: "marrié",
    eligible: false,
  },
  {
    word: "marrim",
    eligible: false,
  },
  {
    word: "marrom",
    eligible: false,
  },
  {
    word: "marruá",
    eligible: false,
  },
  {
    word: "martas",
    eligible: false,
  },
  {
    word: "martel",
    eligible: false,
  },
  {
    word: "martim",
    eligible: false,
  },
  {
    word: "mártir",
    eligible: false,
  },
  {
    word: "martur",
    eligible: false,
  },
  {
    word: "maruba",
    eligible: false,
  },
  {
    word: "marubá",
    eligible: false,
  },
  {
    word: "marubé",
    eligible: false,
  },
  {
    word: "Marubo",
    eligible: false,
  },
  {
    word: "maruca",
    eligible: false,
  },
  {
    word: "marufo",
    eligible: false,
  },
  {
    word: "maruge",
    eligible: false,
  },
  {
    word: "maruim",
    eligible: false,
  },
  {
    word: "maruja",
    eligible: false,
  },
  {
    word: "marujo",
    eligible: false,
  },
  {
    word: "marulo",
    eligible: false,
  },
  {
    word: "marumo",
    eligible: false,
  },
  {
    word: "marupá",
    eligible: false,
  },
  {
    word: "maruru",
    eligible: false,
  },
  {
    word: "maruta",
    eligible: false,
  },
  {
    word: "Maruxa",
    eligible: false,
  },
  {
    word: "Marvão",
    eligible: false,
  },
  {
    word: "Marvel",
    eligible: false,
  },
  {
    word: "marvil",
    eligible: false,
  },
  {
    word: "marzão",
    eligible: false,
  },
  {
    word: "marzia",
    eligible: false,
  },
  {
    word: "masacá",
    eligible: false,
  },
  {
    word: "masara",
    eligible: false,
  },
  {
    word: "Masaru",
    eligible: false,
  },
  {
    word: "masasi",
    eligible: false,
  },
  {
    word: "masato",
    eligible: false,
  },
  {
    word: "mascar",
    eligible: false,
  },
  {
    word: "masdeu",
    eligible: false,
  },
  {
    word: "Maseru",
    eligible: false,
  },
  {
    word: "másrio",
    eligible: false,
  },
  {
    word: "massai",
    eligible: false,
  },
  {
    word: "massal",
    eligible: false,
  },
  {
    word: "Massao",
    eligible: false,
  },
  {
    word: "massar",
    eligible: false,
  },
  {
    word: "massas",
    eligible: false,
  },
  {
    word: "massau",
    eligible: false,
  },
  {
    word: "mássia",
    eligible: false,
  },
  {
    word: "massua",
    eligible: false,
  },
  {
    word: "massul",
    eligible: false,
  },
  {
    word: "massur",
    eligible: false,
  },
  {
    word: "mástax",
    eligible: false,
  },
  {
    word: "máster",
    eligible: false,
  },
  {
    word: "mastil",
    eligible: false,
  },
  {
    word: "mastim",
    eligible: false,
  },
  {
    word: "mastro",
    eligible: false,
  },
  {
    word: "Masumi",
    eligible: false,
  },
  {
    word: "mataba",
    eligible: false,
  },
  {
    word: "mataco",
    eligible: false,
  },
  {
    word: "matade",
    eligible: false,
  },
  {
    word: "matame",
    eligible: false,
  },
  {
    word: "Mataná",
    eligible: false,
  },
  {
    word: "mataná",
    eligible: false,
  },
  {
    word: "matapa",
    eligible: false,
  },
  {
    word: "matapá",
    eligible: false,
  },
  {
    word: "matapi",
    eligible: false,
  },
  {
    word: "matari",
    eligible: false,
  },
  {
    word: "mataru",
    eligible: false,
  },
  {
    word: "Matatá",
    eligible: false,
  },
  {
    word: "matear",
    eligible: false,
  },
  {
    word: "mateba",
    eligible: false,
  },
  {
    word: "matelé",
    eligible: false,
  },
  {
    word: "mátere",
    eligible: false,
  },
  {
    word: "matese",
    eligible: false,
  },
  {
    word: "matete",
    eligible: false,
  },
  {
    word: "matetê",
    eligible: false,
  },
  {
    word: "mateus",
    eligible: false,
  },
  {
    word: "mateva",
    eligible: false,
  },
  {
    word: "matias",
    eligible: false,
  },
  {
    word: "matiço",
    eligible: false,
  },
  {
    word: "mático",
    eligible: false,
  },
  {
    word: "matiné",
    eligible: false,
  },
  {
    word: "matinê",
    eligible: false,
  },
  {
    word: "Matipó",
    eligible: false,
  },
  {
    word: "matipu",
    eligible: false,
  },
  {
    word: "matira",
    eligible: false,
  },
  {
    word: "matiri",
    eligible: false,
  },
  {
    word: "matita",
    eligible: false,
  },
  {
    word: "matodi",
    eligible: false,
  },
  {
    word: "matola",
    eligible: false,
  },
  {
    word: "matomo",
    eligible: false,
  },
  {
    word: "matona",
    eligible: false,
  },
  {
    word: "matope",
    eligible: false,
  },
  {
    word: "matoso",
    eligible: false,
  },
  {
    word: "matral",
    eligible: false,
  },
  {
    word: "matraz",
    eligible: false,
  },
  {
    word: "mátrio",
    eligible: false,
  },
  {
    word: "matriz",
    eligible: false,
  },
  {
    word: "matruá",
    eligible: false,
  },
  {
    word: "matruz",
    eligible: false,
  },
  {
    word: "matuca",
    eligible: false,
  },
  {
    word: "matuiú",
    eligible: false,
  },
  {
    word: "mátula",
    eligible: false,
  },
  {
    word: "matulo",
    eligible: false,
  },
  {
    word: "matumo",
    eligible: false,
  },
  {
    word: "matupá",
    eligible: false,
  },
  {
    word: "matura",
    eligible: false,
  },
  {
    word: "maturi",
    eligible: false,
  },
  {
    word: "maturu",
    eligible: false,
  },
  {
    word: "matuta",
    eligible: false,
  },
  {
    word: "matuti",
    eligible: false,
  },
  {
    word: "mauaco",
    eligible: false,
  },
  {
    word: "mauaçu",
    eligible: false,
  },
  {
    word: "mauaiá",
    eligible: false,
  },
  {
    word: "mauaía",
    eligible: false,
  },
  {
    word: "Mauarí",
    eligible: false,
  },
  {
    word: "mauari",
    eligible: false,
  },
  {
    word: "mauaua",
    eligible: false,
  },
  {
    word: "maúbas",
    eligible: false,
  },
  {
    word: "maueza",
    eligible: false,
  },
  {
    word: "maunça",
    eligible: false,
  },
  {
    word: "maundo",
    eligible: false,
  },
  {
    word: "maungo",
    eligible: false,
  },
  {
    word: "maúrea",
    eligible: false,
  },
  {
    word: "Maurer",
    eligible: false,
  },
  {
    word: "máuser",
    eligible: false,
  },
  {
    word: "mauzão",
    eligible: false,
  },
  {
    word: "mavevé",
    eligible: false,
  },
  {
    word: "Mavino",
    eligible: false,
  },
  {
    word: "maviti",
    eligible: false,
  },
  {
    word: "mavuvi",
    eligible: false,
  },
  {
    word: "maxaca",
    eligible: false,
  },
  {
    word: "maxana",
    eligible: false,
  },
  {
    word: "maxapó",
    eligible: false,
  },
  {
    word: "maxaxa",
    eligible: false,
  },
  {
    word: "maxesa",
    eligible: false,
  },
  {
    word: "maxila",
    eligible: false,
  },
  {
    word: "maxilo",
    eligible: false,
  },
  {
    word: "máxime",
    eligible: false,
  },
  {
    word: "máximo",
    eligible: false,
  },
  {
    word: "Maxine",
    eligible: false,
  },
  {
    word: "maxira",
    eligible: false,
  },
  {
    word: "maxite",
    eligible: false,
  },
  {
    word: "maxixe",
    eligible: false,
  },
  {
    word: "maxona",
    eligible: false,
  },
  {
    word: "maxoto",
    eligible: false,
  },
  {
    word: "maxuaí",
    eligible: false,
  },
  {
    word: "maxubi",
    eligible: false,
  },
  {
    word: "maxuxo",
    eligible: false,
  },
  {
    word: "Mayote",
    eligible: false,
  },
  {
    word: "mázace",
    eligible: false,
  },
  {
    word: "mazama",
    eligible: false,
  },
  {
    word: "mazane",
    eligible: false,
  },
  {
    word: "mazera",
    eligible: false,
  },
  {
    word: "Mazola",
    eligible: false,
  },
  {
    word: "mazute",
    eligible: false,
  },
  {
    word: "MCCCII",
    eligible: false,
  },
  {
    word: "MCCCIV",
    eligible: false,
  },
  {
    word: "MCCCIX",
    eligible: false,
  },
  {
    word: "MCCCLI",
    eligible: false,
  },
  {
    word: "MCCCLV",
    eligible: false,
  },
  {
    word: "MCCCLX",
    eligible: false,
  },
  {
    word: "MCCCVI",
    eligible: false,
  },
  {
    word: "MCCCXC",
    eligible: false,
  },
  {
    word: "MCCCXI",
    eligible: false,
  },
  {
    word: "MCCCXL",
    eligible: false,
  },
  {
    word: "MCCCXV",
    eligible: false,
  },
  {
    word: "MCCCXX",
    eligible: false,
  },
  {
    word: "MCCIII",
    eligible: false,
  },
  {
    word: "MCCLII",
    eligible: false,
  },
  {
    word: "MCCLIV",
    eligible: false,
  },
  {
    word: "MCCLIX",
    eligible: false,
  },
  {
    word: "MCCLVI",
    eligible: false,
  },
  {
    word: "MCCLXI",
    eligible: false,
  },
  {
    word: "MCCLXV",
    eligible: false,
  },
  {
    word: "MCCLXX",
    eligible: false,
  },
  {
    word: "MCCVII",
    eligible: false,
  },
  {
    word: "MCCXCI",
    eligible: false,
  },
  {
    word: "MCCXCV",
    eligible: false,
  },
  {
    word: "MCCXII",
    eligible: false,
  },
  {
    word: "MCCXIV",
    eligible: false,
  },
  {
    word: "MCCXIX",
    eligible: false,
  },
  {
    word: "MCCXLI",
    eligible: false,
  },
  {
    word: "MCCXLV",
    eligible: false,
  },
  {
    word: "MCCXVI",
    eligible: false,
  },
  {
    word: "MCCXXI",
    eligible: false,
  },
  {
    word: "MCCXXV",
    eligible: false,
  },
  {
    word: "MCCXXX",
    eligible: false,
  },
  {
    word: "MCDIII",
    eligible: false,
  },
  {
    word: "MCDLII",
    eligible: false,
  },
  {
    word: "MCDLIV",
    eligible: false,
  },
  {
    word: "MCDLIX",
    eligible: false,
  },
  {
    word: "MCDLVI",
    eligible: false,
  },
  {
    word: "MCDLXI",
    eligible: false,
  },
  {
    word: "MCDLXV",
    eligible: false,
  },
  {
    word: "MCDLXX",
    eligible: false,
  },
  {
    word: "MCDVII",
    eligible: false,
  },
  {
    word: "MCDXCI",
    eligible: false,
  },
  {
    word: "MCDXCV",
    eligible: false,
  },
  {
    word: "MCDXII",
    eligible: false,
  },
  {
    word: "MCDXIV",
    eligible: false,
  },
  {
    word: "MCDXIX",
    eligible: false,
  },
  {
    word: "MCDXLI",
    eligible: false,
  },
  {
    word: "MCDXLV",
    eligible: false,
  },
  {
    word: "MCDXVI",
    eligible: false,
  },
  {
    word: "MCDXXI",
    eligible: false,
  },
  {
    word: "MCDXXV",
    eligible: false,
  },
  {
    word: "MCDXXX",
    eligible: false,
  },
  {
    word: "MCLIII",
    eligible: false,
  },
  {
    word: "MCLVII",
    eligible: false,
  },
  {
    word: "MCLXII",
    eligible: false,
  },
  {
    word: "MCLXIV",
    eligible: false,
  },
  {
    word: "MCLXIX",
    eligible: false,
  },
  {
    word: "MCLXVI",
    eligible: false,
  },
  {
    word: "MCLXXI",
    eligible: false,
  },
  {
    word: "MCLXXV",
    eligible: false,
  },
  {
    word: "MCLXXX",
    eligible: false,
  },
  {
    word: "MCMIII",
    eligible: false,
  },
  {
    word: "MCMLII",
    eligible: false,
  },
  {
    word: "MCMLIV",
    eligible: false,
  },
  {
    word: "MCMLIX",
    eligible: false,
  },
  {
    word: "MCMLVI",
    eligible: false,
  },
  {
    word: "MCMLXI",
    eligible: false,
  },
  {
    word: "MCMLXV",
    eligible: false,
  },
  {
    word: "MCMLXX",
    eligible: false,
  },
  {
    word: "MCMVII",
    eligible: false,
  },
  {
    word: "MCMXCI",
    eligible: false,
  },
  {
    word: "MCMXCV",
    eligible: false,
  },
  {
    word: "MCMXII",
    eligible: false,
  },
  {
    word: "MCMXIV",
    eligible: false,
  },
  {
    word: "MCMXIX",
    eligible: false,
  },
  {
    word: "MCMXLI",
    eligible: false,
  },
  {
    word: "MCMXLV",
    eligible: false,
  },
  {
    word: "MCMXVI",
    eligible: false,
  },
  {
    word: "MCMXXI",
    eligible: false,
  },
  {
    word: "MCMXXV",
    eligible: false,
  },
  {
    word: "MCMXXX",
    eligible: false,
  },
  {
    word: "MCVIII",
    eligible: false,
  },
  {
    word: "MCXCII",
    eligible: false,
  },
  {
    word: "MCXCIV",
    eligible: false,
  },
  {
    word: "MCXCIX",
    eligible: false,
  },
  {
    word: "MCXCVI",
    eligible: false,
  },
  {
    word: "MCXIII",
    eligible: false,
  },
  {
    word: "MCXLII",
    eligible: false,
  },
  {
    word: "MCXLIV",
    eligible: false,
  },
  {
    word: "MCXLIX",
    eligible: false,
  },
  {
    word: "MCXLVI",
    eligible: false,
  },
  {
    word: "MCXVII",
    eligible: false,
  },
  {
    word: "MCXXII",
    eligible: false,
  },
  {
    word: "MCXXIV",
    eligible: false,
  },
  {
    word: "MCXXIX",
    eligible: false,
  },
  {
    word: "MCXXVI",
    eligible: false,
  },
  {
    word: "MCXXXI",
    eligible: false,
  },
  {
    word: "MCXXXV",
    eligible: false,
  },
  {
    word: "MDCCCI",
    eligible: false,
  },
  {
    word: "MDCCCL",
    eligible: false,
  },
  {
    word: "MDCCCV",
    eligible: false,
  },
  {
    word: "MDCCCX",
    eligible: false,
  },
  {
    word: "MDCCII",
    eligible: false,
  },
  {
    word: "MDCCIV",
    eligible: false,
  },
  {
    word: "MDCCIX",
    eligible: false,
  },
  {
    word: "MDCCLI",
    eligible: false,
  },
  {
    word: "MDCCLV",
    eligible: false,
  },
  {
    word: "MDCCLX",
    eligible: false,
  },
  {
    word: "MDCCVI",
    eligible: false,
  },
  {
    word: "MDCCXC",
    eligible: false,
  },
  {
    word: "MDCCXI",
    eligible: false,
  },
  {
    word: "MDCCXL",
    eligible: false,
  },
  {
    word: "MDCCXV",
    eligible: false,
  },
  {
    word: "MDCCXX",
    eligible: false,
  },
  {
    word: "MDCIII",
    eligible: false,
  },
  {
    word: "MDCLII",
    eligible: false,
  },
  {
    word: "MDCLIV",
    eligible: false,
  },
  {
    word: "MDCLIX",
    eligible: false,
  },
  {
    word: "MDCLVI",
    eligible: false,
  },
  {
    word: "MDCLXI",
    eligible: false,
  },
  {
    word: "MDCLXV",
    eligible: false,
  },
  {
    word: "MDCLXX",
    eligible: false,
  },
  {
    word: "MDCVII",
    eligible: false,
  },
  {
    word: "MDCXCI",
    eligible: false,
  },
  {
    word: "MDCXCV",
    eligible: false,
  },
  {
    word: "MDCXII",
    eligible: false,
  },
  {
    word: "MDCXIV",
    eligible: false,
  },
  {
    word: "MDCXIX",
    eligible: false,
  },
  {
    word: "MDCXLI",
    eligible: false,
  },
  {
    word: "MDCXLV",
    eligible: false,
  },
  {
    word: "MDCXVI",
    eligible: false,
  },
  {
    word: "MDCXXI",
    eligible: false,
  },
  {
    word: "MDCXXV",
    eligible: false,
  },
  {
    word: "MDCXXX",
    eligible: false,
  },
  {
    word: "MDLIII",
    eligible: false,
  },
  {
    word: "MDLVII",
    eligible: false,
  },
  {
    word: "MDLXII",
    eligible: false,
  },
  {
    word: "MDLXIV",
    eligible: false,
  },
  {
    word: "MDLXIX",
    eligible: false,
  },
  {
    word: "MDLXVI",
    eligible: false,
  },
  {
    word: "MDLXXI",
    eligible: false,
  },
  {
    word: "MDLXXV",
    eligible: false,
  },
  {
    word: "MDLXXX",
    eligible: false,
  },
  {
    word: "MDVIII",
    eligible: false,
  },
  {
    word: "MDXCII",
    eligible: false,
  },
  {
    word: "MDXCIV",
    eligible: false,
  },
  {
    word: "MDXCIX",
    eligible: false,
  },
  {
    word: "MDXCVI",
    eligible: false,
  },
  {
    word: "MDXIII",
    eligible: false,
  },
  {
    word: "MDXLII",
    eligible: false,
  },
  {
    word: "MDXLIV",
    eligible: false,
  },
  {
    word: "MDXLIX",
    eligible: false,
  },
  {
    word: "MDXLVI",
    eligible: false,
  },
  {
    word: "MDXVII",
    eligible: false,
  },
  {
    word: "MDXXII",
    eligible: false,
  },
  {
    word: "MDXXIV",
    eligible: false,
  },
  {
    word: "MDXXIX",
    eligible: false,
  },
  {
    word: "MDXXVI",
    eligible: false,
  },
  {
    word: "MDXXXI",
    eligible: false,
  },
  {
    word: "MDXXXV",
    eligible: false,
  },
  {
    word: "meação",
    eligible: false,
  },
  {
    word: "mealho",
    eligible: false,
  },
  {
    word: "meambá",
    eligible: false,
  },
  {
    word: "Mearim",
    eligible: false,
  },
  {
    word: "mebaar",
    eligible: false,
  },
  {
    word: "mebaco",
    eligible: false,
  },
  {
    word: "mebádi",
    eligible: false,
  },
  {
    word: "mebaua",
    eligible: false,
  },
  {
    word: "meberi",
    eligible: false,
  },
  {
    word: "mebila",
    eligible: false,
  },
  {
    word: "mebosa",
    eligible: false,
  },
  {
    word: "mebota",
    eligible: false,
  },
  {
    word: "meboua",
    eligible: false,
  },
  {
    word: "mebuca",
    eligible: false,
  },
  {
    word: "mebufo",
    eligible: false,
  },
  {
    word: "mebula",
    eligible: false,
  },
  {
    word: "mebuta",
    eligible: false,
  },
  {
    word: "mebuze",
    eligible: false,
  },
  {
    word: "mecaia",
    eligible: false,
  },
  {
    word: "mecaju",
    eligible: false,
  },
  {
    word: "mecala",
    eligible: false,
  },
  {
    word: "mecate",
    eligible: false,
  },
  {
    word: "meceno",
    eligible: false,
  },
  {
    word: "mechar",
    eligible: false,
  },
  {
    word: "mechas",
    eligible: false,
  },
  {
    word: "mechua",
    eligible: false,
  },
  {
    word: "mecino",
    eligible: false,
  },
  {
    word: "mecola",
    eligible: false,
  },
  {
    word: "Mecona",
    eligible: false,
  },
  {
    word: "mecota",
    eligible: false,
  },
  {
    word: "mecuco",
    eligible: false,
  },
  {
    word: "mecuia",
    eligible: false,
  },
  {
    word: "mecuri",
    eligible: false,
  },
  {
    word: "Medade",
    eligible: false,
  },
  {
    word: "médano",
    eligible: false,
  },
  {
    word: "Medeba",
    eligible: false,
  },
  {
    word: "Medeia",
    eligible: false,
  },
  {
    word: "medela",
    eligible: false,
  },
  {
    word: "medial",
    eligible: false,
  },
  {
    word: "medião",
    eligible: false,
  },
  {
    word: "mediar",
    eligible: false,
  },
  {
    word: "médias",
    eligible: false,
  },
  {
    word: "médica",
    eligible: false,
  },
  {
    word: "Médici",
    eligible: false,
  },
  {
    word: "Médico",
    eligible: false,
  },
  {
    word: "médico",
    eligible: false,
  },
  {
    word: "medida",
    eligible: false,
  },
  {
    word: "medina",
    eligible: false,
  },
  {
    word: "médios",
    eligible: false,
  },
  {
    word: "médium",
    eligible: false,
  },
  {
    word: "medogo",
    eligible: false,
  },
  {
    word: "medrar",
    eligible: false,
  },
  {
    word: "medrio",
    eligible: false,
  },
  {
    word: "medula",
    eligible: false,
  },
  {
    word: "médulo",
    eligible: false,
  },
  {
    word: "medusa",
    eligible: false,
  },
  {
    word: "meeiro",
    eligible: false,
  },
  {
    word: "meense",
    eligible: false,
  },
  {
    word: "megalo",
    eligible: false,
  },
  {
    word: "mégaro",
    eligible: false,
  },
  {
    word: "megera",
    eligible: false,
  },
  {
    word: "Megido",
    eligible: false,
  },
  {
    word: "megohm",
    eligible: false,
  },
  {
    word: "meigar",
    eligible: false,
  },
  {
    word: "meijão",
    eligible: false,
  },
  {
    word: "meilha",
    eligible: false,
  },
  {
    word: "meimão",
    eligible: false,
  },
  {
    word: "meinim",
    eligible: false,
  },
  {
    word: "meiose",
    eligible: false,
  },
  {
    word: "meiote",
    eligible: false,
  },
  {
    word: "meirus",
    eligible: false,
  },
  {
    word: "meixão",
    eligible: false,
  },
  {
    word: "meixil",
    eligible: false,
  },
  {
    word: "melaço",
    eligible: false,
  },
  {
    word: "melado",
    eligible: false,
  },
  {
    word: "melafa",
    eligible: false,
  },
  {
    word: "melala",
    eligible: false,
  },
  {
    word: "melame",
    eligible: false,
  },
  {
    word: "melano",
    eligible: false,
  },
  {
    word: "melato",
    eligible: false,
  },
  {
    word: "meleca",
    eligible: false,
  },
  {
    word: "meleia",
    eligible: false,
  },
  {
    word: "melele",
    eligible: false,
  },
  {
    word: "meleno",
    eligible: false,
  },
  {
    word: "melete",
    eligible: false,
  },
  {
    word: "melgas",
    eligible: false,
  },
  {
    word: "melhor",
    eligible: false,
  },
  {
    word: "mélico",
    eligible: false,
  },
  {
    word: "melida",
    eligible: false,
  },
  {
    word: "melido",
    eligible: false,
  },
  {
    word: "Melila",
    eligible: false,
  },
  {
    word: "meline",
    eligible: false,
  },
  {
    word: "melino",
    eligible: false,
  },
  {
    word: "melite",
    eligible: false,
  },
  {
    word: "melito",
    eligible: false,
  },
  {
    word: "meloal",
    eligible: false,
  },
  {
    word: "melões",
    eligible: false,
  },
  {
    word: "meloje",
    eligible: false,
  },
  {
    word: "melope",
    eligible: false,
  },
  {
    word: "melopo",
    eligible: false,
  },
  {
    word: "melosa",
    eligible: false,
  },
  {
    word: "melose",
    eligible: false,
  },
  {
    word: "meloso",
    eligible: false,
  },
  {
    word: "melote",
    eligible: false,
  },
  {
    word: "Melqui",
    eligible: false,
  },
  {
    word: "melrão",
    eligible: false,
  },
  {
    word: "mélroa",
    eligible: false,
  },
  {
    word: "melros",
    eligible: false,
  },
  {
    word: "mélton",
    eligible: false,
  },
  {
    word: "melusa",
    eligible: false,
  },
  {
    word: "Membro",
    eligible: false,
  },
  {
    word: "membro",
    eligible: false,
  },
  {
    word: "memino",
    eligible: false,
  },
  {
    word: "Memonõ",
    eligible: false,
  },
  {
    word: "mêmore",
    eligible: false,
  },
  {
    word: "memulê",
    eligible: false,
  },
  {
    word: "menabé",
    eligible: false,
  },
  {
    word: "ménade",
    eligible: false,
  },
  {
    word: "mênade",
    eligible: false,
  },
  {
    word: "menção",
    eligible: false,
  },
  {
    word: "mendão",
    eligible: false,
  },
  {
    word: "mendaz",
    eligible: false,
  },
  {
    word: "Mendel",
    eligible: false,
  },
  {
    word: "mendes",
    eligible: false,
  },
  {
    word: "Mendez",
    eligible: false,
  },
  {
    word: "menduí",
    eligible: false,
  },
  {
    word: "menear",
    eligible: false,
  },
  {
    word: "meneba",
    eligible: false,
  },
  {
    word: "meneia",
    eligible: false,
  },
  {
    word: "meneio",
    eligible: false,
  },
  {
    word: "menela",
    eligible: false,
  },
  {
    word: "menepe",
    eligible: false,
  },
  {
    word: "mênfio",
    eligible: false,
  },
  {
    word: "Mênfis",
    eligible: false,
  },
  {
    word: "Mengão",
    eligible: false,
  },
  {
    word: "mengar",
    eligible: false,
  },
  {
    word: "mengas",
    eligible: false,
  },
  {
    word: "menhir",
    eligible: false,
  },
  {
    word: "mênido",
    eligible: false,
  },
  {
    word: "meniém",
    eligible: false,
  },
  {
    word: "menina",
    eligible: false,
  },
  {
    word: "menino",
    eligible: false,
  },
  {
    word: "Menipo",
    eligible: false,
  },
  {
    word: "menorá",
    eligible: false,
  },
  {
    word: "mensal",
    eligible: false,
  },
  {
    word: "mensor",
    eligible: false,
  },
  {
    word: "mental",
    eligible: false,
  },
  {
    word: "mentar",
    eligible: false,
  },
  {
    word: "mentém",
    eligible: false,
  },
  {
    word: "mentir",
    eligible: false,
  },
  {
    word: "mentol",
    eligible: false,
  },
  {
    word: "mentor",
    eligible: false,
  },
  {
    word: "mêntor",
    eligible: false,
  },
  {
    word: "mentre",
    eligible: false,
  },
  {
    word: "menuro",
    eligible: false,
  },
  {
    word: "menuzi",
    eligible: false,
  },
  {
    word: "meolha",
    eligible: false,
  },
  {
    word: "meônio",
    eligible: false,
  },
  {
    word: "mepafu",
    eligible: false,
  },
  {
    word: "mepera",
    eligible: false,
  },
  {
    word: "mepete",
    eligible: false,
  },
  {
    word: "mepeza",
    eligible: false,
  },
  {
    word: "mepive",
    eligible: false,
  },
  {
    word: "mepori",
    eligible: false,
  },
  {
    word: "mepoto",
    eligible: false,
  },
  {
    word: "mepuri",
    eligible: false,
  },
  {
    word: "mepuru",
    eligible: false,
  },
  {
    word: "mequém",
    eligible: false,
  },
  {
    word: "meraço",
    eligible: false,
  },
  {
    word: "merada",
    eligible: false,
  },
  {
    word: "meraró",
    eligible: false,
  },
  {
    word: "mercar",
    eligible: false,
  },
  {
    word: "mércio",
    eligible: false,
  },
  {
    word: "merdal",
    eligible: false,
  },
  {
    word: "mereçá",
    eligible: false,
  },
  {
    word: "merepe",
    eligible: false,
  },
  {
    word: "mereré",
    eligible: false,
  },
  {
    word: "mererê",
    eligible: false,
  },
  {
    word: "mereuá",
    eligible: false,
  },
  {
    word: "mergar",
    eligible: false,
  },
  {
    word: "Meribe",
    eligible: false,
  },
  {
    word: "Mérida",
    eligible: false,
  },
  {
    word: "méride",
    eligible: false,
  },
  {
    word: "merino",
    eligible: false,
  },
  {
    word: "merinó",
    eligible: false,
  },
  {
    word: "meriti",
    eligible: false,
  },
  {
    word: "mérito",
    eligible: false,
  },
  {
    word: "merlão",
    eligible: false,
  },
  {
    word: "merlim",
    eligible: false,
  },
  {
    word: "mermar",
    eligible: false,
  },
  {
    word: "mérmis",
    eligible: false,
  },
  {
    word: "meroça",
    eligible: false,
  },
  {
    word: "merona",
    eligible: false,
  },
  {
    word: "Merópe",
    eligible: false,
  },
  {
    word: "merope",
    eligible: false,
  },
  {
    word: "mérops",
    eligible: false,
  },
  {
    word: "merote",
    eligible: false,
  },
  {
    word: "merucá",
    eligible: false,
  },
  {
    word: "merufo",
    eligible: false,
  },
  {
    word: "meruge",
    eligible: false,
  },
  {
    word: "meruim",
    eligible: false,
  },
  {
    word: "merujo",
    eligible: false,
  },
  {
    word: "mérula",
    eligible: false,
  },
  {
    word: "merval",
    eligible: false,
  },
  {
    word: "mesada",
    eligible: false,
  },
  {
    word: "mescal",
    eligible: false,
  },
  {
    word: "mescão",
    eligible: false,
  },
  {
    word: "mescar",
    eligible: false,
  },
  {
    word: "méscia",
    eligible: false,
  },
  {
    word: "mescla",
    eligible: false,
  },
  {
    word: "meselo",
    eligible: false,
  },
  {
    word: "meseta",
    eligible: false,
  },
  {
    word: "mesial",
    eligible: false,
  },
  {
    word: "mésico",
    eligible: false,
  },
  {
    word: "mesodo",
    eligible: false,
  },
  {
    word: "mesope",
    eligible: false,
  },
  {
    word: "mesops",
    eligible: false,
  },
  {
    word: "mesori",
    eligible: false,
  },
  {
    word: "mesosa",
    eligible: false,
  },
  {
    word: "messar",
    eligible: false,
  },
  {
    word: "messor",
    eligible: false,
  },
  {
    word: "mester",
    eligible: false,
  },
  {
    word: "mestra",
    eligible: false,
  },
  {
    word: "Mestre",
    eligible: false,
  },
  {
    word: "mestre",
    eligible: false,
  },
  {
    word: "mesusu",
    eligible: false,
  },
  {
    word: "metade",
    eligible: false,
  },
  {
    word: "metais",
    eligible: false,
  },
  {
    word: "metane",
    eligible: false,
  },
  {
    word: "metano",
    eligible: false,
  },
  {
    word: "metara",
    eligible: false,
  },
  {
    word: "meteco",
    eligible: false,
  },
  {
    word: "meteno",
    eligible: false,
  },
  {
    word: "metete",
    eligible: false,
  },
  {
    word: "metiba",
    eligible: false,
  },
  {
    word: "metiná",
    eligible: false,
  },
  {
    word: "metino",
    eligible: false,
  },
  {
    word: "metiri",
    eligible: false,
  },
  {
    word: "metoca",
    eligible: false,
  },
  {
    word: "método",
    eligible: false,
  },
  {
    word: "métope",
    eligible: false,
  },
  {
    word: "métopo",
    eligible: false,
  },
  {
    word: "metose",
    eligible: false,
  },
  {
    word: "metrar",
    eligible: false,
  },
  {
    word: "metria",
    eligible: false,
  },
  {
    word: "metros",
    eligible: false,
  },
  {
    word: "metúbi",
    eligible: false,
  },
  {
    word: "métula",
    eligible: false,
  },
  {
    word: "Meunim",
    eligible: false,
  },
  {
    word: "mexate",
    eligible: false,
  },
  {
    word: "mexefo",
    eligible: false,
  },
  {
    word: "México",
    eligible: false,
  },
  {
    word: "méxico",
    eligible: false,
  },
  {
    word: "mexido",
    eligible: false,
  },
  {
    word: "mexire",
    eligible: false,
  },
  {
    word: "mexuar",
    eligible: false,
  },
  {
    word: "mexuda",
    eligible: false,
  },
  {
    word: "mezena",
    eligible: false,
  },
  {
    word: "mezíia",
    eligible: false,
  },
  {
    word: "mezuzá",
    eligible: false,
  },
  {
    word: "mfúcua",
    eligible: false,
  },
  {
    word: "miáceo",
    eligible: false,
  },
  {
    word: "miadas",
    eligible: false,
  },
  {
    word: "miagro",
    eligible: false,
  },
  {
    word: "miamba",
    eligible: false,
  },
  {
    word: "miamiá",
    eligible: false,
  },
  {
    word: "miapia",
    eligible: false,
  },
  {
    word: "miário",
    eligible: false,
  },
  {
    word: "miasma",
    eligible: false,
  },
  {
    word: "miazal",
    eligible: false,
  },
  {
    word: "mibora",
    eligible: false,
  },
  {
    word: "micado",
    eligible: false,
  },
  {
    word: "Micael",
    eligible: false,
  },
  {
    word: "micaia",
    eligible: false,
  },
  {
    word: "miçalo",
    eligible: false,
  },
  {
    word: "micção",
    eligible: false,
  },
  {
    word: "micela",
    eligible: false,
  },
  {
    word: "Miceli",
    eligible: false,
  },
  {
    word: "miceno",
    eligible: false,
  },
  {
    word: "miceta",
    eligible: false,
  },
  {
    word: "michar",
    eligible: false,
  },
  {
    word: "Michel",
    eligible: false,
  },
  {
    word: "Michio",
    eligible: false,
  },
  {
    word: "micipa",
    eligible: false,
  },
  {
    word: "miclas",
    eligible: false,
  },
  {
    word: "micocó",
    eligible: false,
  },
  {
    word: "miçoço",
    eligible: false,
  },
  {
    word: "micolo",
    eligible: false,
  },
  {
    word: "micose",
    eligible: false,
  },
  {
    word: "micota",
    eligible: false,
  },
  {
    word: "mícron",
    eligible: false,
  },
  {
    word: "mictar",
    eligible: false,
  },
  {
    word: "mictio",
    eligible: false,
  },
  {
    word: "micuim",
    eligible: false,
  },
  {
    word: "micula",
    eligible: false,
  },
  {
    word: "micurê",
    eligible: false,
  },
  {
    word: "midane",
    eligible: false,
  },
  {
    word: "midese",
    eligible: false,
  },
  {
    word: "midino",
    eligible: false,
  },
  {
    word: "Midori",
    eligible: false,
  },
  {
    word: "midrol",
    eligible: false,
  },
  {
    word: "miembe",
    eligible: false,
  },
  {
    word: "miengo",
    eligible: false,
  },
  {
    word: "mígala",
    eligible: false,
  },
  {
    word: "migdão",
    eligible: false,
  },
  {
    word: "migdoa",
    eligible: false,
  },
  {
    word: "mignon",
    eligible: false,
  },
  {
    word: "migoso",
    eligible: false,
  },
  {
    word: "migrar",
    eligible: false,
  },
  {
    word: "miguel",
    eligible: false,
  },
  {
    word: "miguim",
    eligible: false,
  },
  {
    word: "Mihael",
    eligible: false,
  },
  {
    word: "miíase",
    eligible: false,
  },
  {
    word: "mijina",
    eligible: false,
  },
  {
    word: "mijoca",
    eligible: false,
  },
  {
    word: "mijolo",
    eligible: false,
  },
  {
    word: "mijona",
    eligible: false,
  },
  {
    word: "mijote",
    eligible: false,
  },
  {
    word: "mijuba",
    eligible: false,
  },
  {
    word: "Milane",
    eligible: false,
  },
  {
    word: "Milano",
    eligible: false,
  },
  {
    word: "milara",
    eligible: false,
  },
  {
    word: "milavo",
    eligible: false,
  },
  {
    word: "míldio",
    eligible: false,
  },
  {
    word: "milena",
    eligible: false,
  },
  {
    word: "Milene",
    eligible: false,
  },
  {
    word: "Mileto",
    eligible: false,
  },
  {
    word: "mileto",
    eligible: false,
  },
  {
    word: "milgrá",
    eligible: false,
  },
  {
    word: "milhal",
    eligible: false,
  },
  {
    word: "milhão",
    eligible: false,
  },
  {
    word: "milhar",
    eligible: false,
  },
  {
    word: "milhas",
    eligible: false,
  },
  {
    word: "milhãs",
    eligible: false,
  },
  {
    word: "milhém",
    eligible: false,
  },
  {
    word: "milheu",
    eligible: false,
  },
  {
    word: "milhos",
    eligible: false,
  },
  {
    word: "miliar",
    eligible: false,
  },
  {
    word: "milico",
    eligible: false,
  },
  {
    word: "milieu",
    eligible: false,
  },
  {
    word: "mílimo",
    eligible: false,
  },
  {
    word: "mílite",
    eligible: false,
  },
  {
    word: "miloca",
    eligible: false,
  },
  {
    word: "milola",
    eligible: false,
  },
  {
    word: "miloló",
    eligible: false,
  },
  {
    word: "milona",
    eligible: false,
  },
  {
    word: "milreu",
    eligible: false,
  },
  {
    word: "Mílson",
    eligible: false,
  },
  {
    word: "Mílton",
    eligible: false,
  },
  {
    word: "mílvio",
    eligible: false,
  },
  {
    word: "mimaça",
    eligible: false,
  },
  {
    word: "mimalo",
    eligible: false,
  },
  {
    word: "mimbar",
    eligible: false,
  },
  {
    word: "mimeco",
    eligible: false,
  },
  {
    word: "Mimenó",
    eligible: false,
  },
  {
    word: "mimese",
    eligible: false,
  },
  {
    word: "mímese",
    eligible: false,
  },
  {
    word: "mimete",
    eligible: false,
  },
  {
    word: "mimeto",
    eligible: false,
  },
  {
    word: "mimice",
    eligible: false,
  },
  {
    word: "mímico",
    eligible: false,
  },
  {
    word: "mímida",
    eligible: false,
  },
  {
    word: "mimosa",
    eligible: false,
  },
  {
    word: "mimoso",
    eligible: false,
  },
  {
    word: "mímulo",
    eligible: false,
  },
  {
    word: "minace",
    eligible: false,
  },
  {
    word: "Minaçu",
    eligible: false,
  },
  {
    word: "minacu",
    eligible: false,
  },
  {
    word: "minana",
    eligible: false,
  },
  {
    word: "minape",
    eligible: false,
  },
  {
    word: "minção",
    eligible: false,
  },
  {
    word: "minche",
    eligible: false,
  },
  {
    word: "mindim",
    eligible: false,
  },
  {
    word: "mindzã",
    eligible: false,
  },
  {
    word: "minete",
    eligible: false,
  },
  {
    word: "mingar",
    eligible: false,
  },
  {
    word: "mingau",
    eligible: false,
  },
  {
    word: "minhão",
    eligible: false,
  },
  {
    word: "minhas",
    eligible: false,
  },
  {
    word: "miniar",
    eligible: false,
  },
  {
    word: "miníma",
    eligible: false,
  },
  {
    word: "mínimo",
    eligible: false,
  },
  {
    word: "Minite",
    eligible: false,
  },
  {
    word: "Minoru",
    eligible: false,
  },
  {
    word: "minoto",
    eligible: false,
  },
  {
    word: "mintói",
    eligible: false,
  },
  {
    word: "minuir",
    eligible: false,
  },
  {
    word: "mínula",
    eligible: false,
  },
  {
    word: "minuta",
    eligible: false,
  },
  {
    word: "minuto",
    eligible: false,
  },
  {
    word: "mioide",
    eligible: false,
  },
  {
    word: "miolha",
    eligible: false,
  },
  {
    word: "miolos",
    eligible: false,
  },
  {
    word: "miombo",
    eligible: false,
  },
  {
    word: "mionga",
    eligible: false,
  },
  {
    word: "miopia",
    eligible: false,
  },
  {
    word: "miotos",
    eligible: false,
  },
  {
    word: "Mipibu",
    eligible: false,
  },
  {
    word: "mirabe",
    eligible: false,
  },
  {
    word: "miraia",
    eligible: false,
  },
  {
    word: "mirana",
    eligible: false,
  },
  {
    word: "Mircia",
    eligible: false,
  },
  {
    word: "mírcia",
    eligible: false,
  },
  {
    word: "Mirela",
    eligible: false,
  },
  {
    word: "Míriam",
    eligible: false,
  },
  {
    word: "mirica",
    eligible: false,
  },
  {
    word: "mirici",
    eligible: false,
  },
  {
    word: "Miriel",
    eligible: false,
  },
  {
    word: "Míriel",
    eligible: false,
  },
  {
    word: "mirina",
    eligible: false,
  },
  {
    word: "mirins",
    eligible: false,
  },
  {
    word: "miriti",
    eligible: false,
  },
  {
    word: "mirixi",
    eligible: false,
  },
  {
    word: "mírmex",
    eligible: false,
  },
  {
    word: "mirmol",
    eligible: false,
  },
  {
    word: "mirone",
    eligible: false,
  },
  {
    word: "miroró",
    eligible: false,
  },
  {
    word: "mirrar",
    eligible: false,
  },
  {
    word: "mirras",
    eligible: false,
  },
  {
    word: "mírreo",
    eligible: false,
  },
  {
    word: "mírris",
    eligible: false,
  },
  {
    word: "mirrol",
    eligible: false,
  },
  {
    word: "mirtal",
    eligible: false,
  },
  {
    word: "mírteo",
    eligible: false,
  },
  {
    word: "Mirtes",
    eligible: false,
  },
  {
    word: "mírtil",
    eligible: false,
  },
  {
    word: "mirtol",
    eligible: false,
  },
  {
    word: "mirtos",
    eligible: false,
  },
  {
    word: "miruim",
    eligible: false,
  },
  {
    word: "Misael",
    eligible: false,
  },
  {
    word: "misaga",
    eligible: false,
  },
  {
    word: "miscar",
    eligible: false,
  },
  {
    word: "misena",
    eligible: false,
  },
  {
    word: "miserê",
    eligible: false,
  },
  {
    word: "mísero",
    eligible: false,
  },
  {
    word: "misoso",
    eligible: false,
  },
  {
    word: "missal",
    eligible: false,
  },
  {
    word: "missão",
    eligible: false,
  },
  {
    word: "missar",
    eligible: false,
  },
  {
    word: "missas",
    eligible: false,
  },
  {
    word: "misser",
    eligible: false,
  },
  {
    word: "míssil",
    eligible: false,
  },
  {
    word: "missós",
    eligible: false,
  },
  {
    word: "mistão",
    eligible: false,
  },
  {
    word: "místax",
    eligible: false,
  },
  {
    word: "mister",
    eligible: false,
  },
  {
    word: "mistol",
    eligible: false,
  },
  {
    word: "mistos",
    eligible: false,
  },
  {
    word: "mistro",
    eligible: false,
  },
  {
    word: "mísula",
    eligible: false,
  },
  {
    word: "misura",
    eligible: false,
  },
  {
    word: "mitela",
    eligible: false,
  },
  {
    word: "mitema",
    eligible: false,
  },
  {
    word: "mitene",
    eligible: false,
  },
  {
    word: "mitete",
    eligible: false,
  },
  {
    word: "mítico",
    eligible: false,
  },
  {
    word: "mítilo",
    eligible: false,
  },
  {
    word: "mitiri",
    eligible: false,
  },
  {
    word: "mitose",
    eligible: false,
  },
  {
    word: "mitote",
    eligible: false,
  },
  {
    word: "mitral",
    eligible: false,
  },
  {
    word: "mitrar",
    eligible: false,
  },
  {
    word: "mítrax",
    eligible: false,
  },
  {
    word: "mitreu",
    eligible: false,
  },
  {
    word: "miudar",
    eligible: false,
  },
  {
    word: "miúdas",
    eligible: false,
  },
  {
    word: "miúdos",
    eligible: false,
  },
  {
    word: "miunço",
    eligible: false,
  },
  {
    word: "miungo",
    eligible: false,
  },
  {
    word: "mixeto",
    eligible: false,
  },
  {
    word: "míxico",
    eligible: false,
  },
  {
    word: "mixila",
    eligible: false,
  },
  {
    word: "mixino",
    eligible: false,
  },
  {
    word: "mixira",
    eligible: false,
  },
  {
    word: "mixite",
    eligible: false,
  },
  {
    word: "mixole",
    eligible: false,
  },
  {
    word: "mixolo",
    eligible: false,
  },
  {
    word: "mixoma",
    eligible: false,
  },
  {
    word: "mixono",
    eligible: false,
  },
  {
    word: "mixtão",
    eligible: false,
  },
  {
    word: "mixuto",
    eligible: false,
  },
  {
    word: "Mizael",
    eligible: false,
  },
  {
    word: "mizcal",
    eligible: false,
  },
  {
    word: "mizefe",
    eligible: false,
  },
  {
    word: "mizena",
    eligible: false,
  },
  {
    word: "mizimo",
    eligible: false,
  },
  {
    word: "mizine",
    eligible: false,
  },
  {
    word: "MLVIII",
    eligible: false,
  },
  {
    word: "MLXIII",
    eligible: false,
  },
  {
    word: "MLXVII",
    eligible: false,
  },
  {
    word: "MLXXII",
    eligible: false,
  },
  {
    word: "MLXXIV",
    eligible: false,
  },
  {
    word: "MLXXIX",
    eligible: false,
  },
  {
    word: "MLXXVI",
    eligible: false,
  },
  {
    word: "MLXXXI",
    eligible: false,
  },
  {
    word: "MLXXXV",
    eligible: false,
  },
  {
    word: "MMLIII",
    eligible: false,
  },
  {
    word: "MMLVII",
    eligible: false,
  },
  {
    word: "MMLXII",
    eligible: false,
  },
  {
    word: "MMLXIV",
    eligible: false,
  },
  {
    word: "MMLXIX",
    eligible: false,
  },
  {
    word: "MMLXVI",
    eligible: false,
  },
  {
    word: "MMLXXI",
    eligible: false,
  },
  {
    word: "MMLXXV",
    eligible: false,
  },
  {
    word: "MMLXXX",
    eligible: false,
  },
  {
    word: "MMVIII",
    eligible: false,
  },
  {
    word: "MMXCII",
    eligible: false,
  },
  {
    word: "MMXCIV",
    eligible: false,
  },
  {
    word: "MMXCIX",
    eligible: false,
  },
  {
    word: "MMXCVI",
    eligible: false,
  },
  {
    word: "MMXIII",
    eligible: false,
  },
  {
    word: "MMXLII",
    eligible: false,
  },
  {
    word: "MMXLIV",
    eligible: false,
  },
  {
    word: "MMXLIX",
    eligible: false,
  },
  {
    word: "MMXLVI",
    eligible: false,
  },
  {
    word: "MMXVII",
    eligible: false,
  },
  {
    word: "MMXXII",
    eligible: false,
  },
  {
    word: "MMXXIV",
    eligible: false,
  },
  {
    word: "MMXXIX",
    eligible: false,
  },
  {
    word: "MMXXVI",
    eligible: false,
  },
  {
    word: "MMXXXI",
    eligible: false,
  },
  {
    word: "MMXXXV",
    eligible: false,
  },
  {
    word: "mnêmia",
    eligible: false,
  },
  {
    word: "mniaro",
    eligible: false,
  },
  {
    word: "Moacir",
    eligible: false,
  },
  {
    word: "moagem",
    eligible: false,
  },
  {
    word: "moaica",
    eligible: false,
  },
  {
    word: "moambo",
    eligible: false,
  },
  {
    word: "moanas",
    eligible: false,
  },
  {
    word: "moando",
    eligible: false,
  },
  {
    word: "moangi",
    eligible: false,
  },
  {
    word: "moanha",
    eligible: false,
  },
  {
    word: "moansa",
    eligible: false,
  },
  {
    word: "moarbe",
    eligible: false,
  },
  {
    word: "moatra",
    eligible: false,
  },
  {
    word: "mobato",
    eligible: false,
  },
  {
    word: "mobede",
    eligible: false,
  },
  {
    word: "mobele",
    eligible: false,
  },
  {
    word: "mobica",
    eligible: false,
  },
  {
    word: "móbile",
    eligible: false,
  },
  {
    word: "mobiro",
    eligible: false,
  },
  {
    word: "mobola",
    eligible: false,
  },
  {
    word: "mobula",
    eligible: false,
  },
  {
    word: "móbula",
    eligible: false,
  },
  {
    word: "moçaço",
    eligible: false,
  },
  {
    word: "moçada",
    eligible: false,
  },
  {
    word: "moçafe",
    eligible: false,
  },
  {
    word: "moçafo",
    eligible: false,
  },
  {
    word: "mocajá",
    eligible: false,
  },
  {
    word: "moçame",
    eligible: false,
  },
  {
    word: "mocano",
    eligible: false,
  },
  {
    word: "mocear",
    eligible: false,
  },
  {
    word: "mocedo",
    eligible: false,
  },
  {
    word: "mocela",
    eligible: false,
  },
  {
    word: "mocete",
    eligible: false,
  },
  {
    word: "mochão",
    eligible: false,
  },
  {
    word: "mochar",
    eligible: false,
  },
  {
    word: "mochas",
    eligible: false,
  },
  {
    word: "mochau",
    eligible: false,
  },
  {
    word: "mochos",
    eligible: false,
  },
  {
    word: "mocica",
    eligible: false,
  },
  {
    word: "mociço",
    eligible: false,
  },
  {
    word: "Mococa",
    eligible: false,
  },
  {
    word: "mococo",
    eligible: false,
  },
  {
    word: "mococó",
    eligible: false,
  },
  {
    word: "mocoim",
    eligible: false,
  },
  {
    word: "mocoiú",
    eligible: false,
  },
  {
    word: "mocojé",
    eligible: false,
  },
  {
    word: "mocoma",
    eligible: false,
  },
  {
    word: "moconi",
    eligible: false,
  },
  {
    word: "mocoró",
    eligible: false,
  },
  {
    word: "mocosa",
    eligible: false,
  },
  {
    word: "mocotó",
    eligible: false,
  },
  {
    word: "mocuba",
    eligible: false,
  },
  {
    word: "mocuda",
    eligible: false,
  },
  {
    word: "mocuso",
    eligible: false,
  },
  {
    word: "modeca",
    eligible: false,
  },
  {
    word: "Modelo",
    eligible: false,
  },
  {
    word: "modelo",
    eligible: false,
  },
  {
    word: "modems",
    eligible: false,
  },
  {
    word: "modena",
    eligible: false,
  },
  {
    word: "módena",
    eligible: false,
  },
  {
    word: "modens",
    eligible: false,
  },
  {
    word: "módico",
    eligible: false,
  },
  {
    word: "moduba",
    eligible: false,
  },
  {
    word: "módulo",
    eligible: false,
  },
  {
    word: "moeção",
    eligible: false,
  },
  {
    word: "moedas",
    eligible: false,
  },
  {
    word: "moeiro",
    eligible: false,
  },
  {
    word: "moelas",
    eligible: false,
  },
  {
    word: "moenda",
    eligible: false,
  },
  {
    word: "moengo",
    eligible: false,
  },
  {
    word: "moente",
    eligible: false,
  },
  {
    word: "moenza",
    eligible: false,
  },
  {
    word: "mofedo",
    eligible: false,
  },
  {
    word: "mofeta",
    eligible: false,
  },
  {
    word: "mofina",
    eligible: false,
  },
  {
    word: "mofino",
    eligible: false,
  },
  {
    word: "mofofô",
    eligible: false,
  },
  {
    word: "mofoso",
    eligible: false,
  },
  {
    word: "mofumo",
    eligible: false,
  },
  {
    word: "mogego",
    eligible: false,
  },
  {
    word: "mogica",
    eligible: false,
  },
  {
    word: "mognos",
    eligible: false,
  },
  {
    word: "mogóis",
    eligible: false,
  },
  {
    word: "mógono",
    eligible: false,
  },
  {
    word: "mogore",
    eligible: false,
  },
  {
    word: "mogori",
    eligible: false,
  },
  {
    word: "mohair",
    eligible: false,
  },
  {
    word: "moição",
    eligible: false,
  },
  {
    word: "moimbe",
    eligible: false,
  },
  {
    word: "moinar",
    eligible: false,
  },
  {
    word: "moindo",
    eligible: false,
  },
  {
    word: "moíngi",
    eligible: false,
  },
  {
    word: "moinho",
    eligible: false,
  },
  {
    word: "moipua",
    eligible: false,
  },
  {
    word: "moiral",
    eligible: false,
  },
  {
    word: "moirão",
    eligible: false,
  },
  {
    word: "moirar",
    eligible: false,
  },
  {
    word: "moiras",
    eligible: false,
  },
  {
    word: "moiraz",
    eligible: false,
  },
  {
    word: "moiros",
    eligible: false,
  },
  {
    word: "moisés",
    eligible: false,
  },
  {
    word: "moital",
    eligible: false,
  },
  {
    word: "moitão",
    eligible: false,
  },
  {
    word: "moitar",
    eligible: false,
  },
  {
    word: "moitas",
    eligible: false,
  },
  {
    word: "mojajo",
    eligible: false,
  },
  {
    word: "mojojo",
    eligible: false,
  },
  {
    word: "mojolo",
    eligible: false,
  },
  {
    word: "molaço",
    eligible: false,
  },
  {
    word: "Moladá",
    eligible: false,
  },
  {
    word: "molada",
    eligible: false,
  },
  {
    word: "moladô",
    eligible: false,
  },
  {
    word: "molana",
    eligible: false,
  },
  {
    word: "Molara",
    eligible: false,
  },
  {
    word: "moldar",
    eligible: false,
  },
  {
    word: "moldes",
    eligible: false,
  },
  {
    word: "molear",
    eligible: false,
  },
  {
    word: "moledo",
    eligible: false,
  },
  {
    word: "molego",
    eligible: false,
  },
  {
    word: "molejo",
    eligible: false,
  },
  {
    word: "molete",
    eligible: false,
  },
  {
    word: "moleza",
    eligible: false,
  },
  {
    word: "molgar",
    eligible: false,
  },
  {
    word: "molhar",
    eligible: false,
  },
  {
    word: "molhes",
    eligible: false,
  },
  {
    word: "molhos",
    eligible: false,
  },
  {
    word: "moliço",
    eligible: false,
  },
  {
    word: "molida",
    eligible: false,
  },
  {
    word: "Molide",
    eligible: false,
  },
  {
    word: "molime",
    eligible: false,
  },
  {
    word: "molina",
    eligible: false,
  },
  {
    word: "molipa",
    eligible: false,
  },
  {
    word: "molite",
    eligible: false,
  },
  {
    word: "molito",
    eligible: false,
  },
  {
    word: "moloca",
    eligible: false,
  },
  {
    word: "moloço",
    eligible: false,
  },
  {
    word: "moloje",
    eligible: false,
  },
  {
    word: "molola",
    eligible: false,
  },
  {
    word: "molona",
    eligible: false,
  },
  {
    word: "molugo",
    eligible: false,
  },
  {
    word: "molulo",
    eligible: false,
  },
  {
    word: "molulu",
    eligible: false,
  },
  {
    word: "moluro",
    eligible: false,
  },
  {
    word: "momaná",
    eligible: false,
  },
  {
    word: "mômaro",
    eligible: false,
  },
  {
    word: "momaxó",
    eligible: false,
  },
  {
    word: "mombiú",
    eligible: false,
  },
  {
    word: "momear",
    eligible: false,
  },
  {
    word: "momice",
    eligible: false,
  },
  {
    word: "momoto",
    eligible: false,
  },
  {
    word: "Mônaco",
    eligible: false,
  },
  {
    word: "mônade",
    eligible: false,
  },
  {
    word: "monado",
    eligible: false,
  },
  {
    word: "monare",
    eligible: false,
  },
  {
    word: "monasa",
    eligible: false,
  },
  {
    word: "monaxó",
    eligible: false,
  },
  {
    word: "monção",
    eligible: false,
  },
  {
    word: "moncar",
    eligible: false,
  },
  {
    word: "môncia",
    eligible: false,
  },
  {
    word: "moncos",
    eligible: false,
  },
  {
    word: "Mondaí",
    eligible: false,
  },
  {
    word: "mondão",
    eligible: false,
  },
  {
    word: "mondar",
    eligible: false,
  },
  {
    word: "mondéu",
    eligible: false,
  },
  {
    word: "mondiá",
    eligible: false,
  },
  {
    word: "mondim",
    eligible: false,
  },
  {
    word: "monduí",
    eligible: false,
  },
  {
    word: "moneco",
    eligible: false,
  },
  {
    word: "monede",
    eligible: false,
  },
  {
    word: "monema",
    eligible: false,
  },
  {
    word: "monere",
    eligible: false,
  },
  {
    word: "moneso",
    eligible: false,
  },
  {
    word: "monete",
    eligible: false,
  },
  {
    word: "monger",
    eligible: false,
  },
  {
    word: "monges",
    eligible: false,
  },
  {
    word: "mongia",
    eligible: false,
  },
  {
    word: "mongil",
    eligible: false,
  },
  {
    word: "môngoa",
    eligible: false,
  },
  {
    word: "Mongol",
    eligible: false,
  },
  {
    word: "mongol",
    eligible: false,
  },
  {
    word: "monice",
    eligible: false,
  },
  {
    word: "moniço",
    eligible: false,
  },
  {
    word: "mônico",
    eligible: false,
  },
  {
    word: "monilo",
    eligible: false,
  },
  {
    word: "monima",
    eligible: false,
  },
  {
    word: "monina",
    eligible: false,
  },
  {
    word: "moniro",
    eligible: false,
  },
  {
    word: "monita",
    eligible: false,
  },
  {
    word: "mônita",
    eligible: false,
  },
  {
    word: "monjal",
    eligible: false,
  },
  {
    word: "monjas",
    eligible: false,
  },
  {
    word: "monjio",
    eligible: false,
  },
  {
    word: "monoca",
    eligible: false,
  },
  {
    word: "monome",
    eligible: false,
  },
  {
    word: "monopé",
    eligible: false,
  },
  {
    word: "monose",
    eligible: false,
  },
  {
    word: "monote",
    eligible: false,
  },
  {
    word: "monoxó",
    eligible: false,
  },
  {
    word: "Monroe",
    eligible: false,
  },
  {
    word: "montão",
    eligible: false,
  },
  {
    word: "montar",
    eligible: false,
  },
  {
    word: "Montes",
    eligible: false,
  },
  {
    word: "montes",
    eligible: false,
  },
  {
    word: "montês",
    eligible: false,
  },
  {
    word: "monteu",
    eligible: false,
  },
  {
    word: "montra",
    eligible: false,
  },
  {
    word: "monuro",
    eligible: false,
  },
  {
    word: "mopane",
    eligible: false,
  },
  {
    word: "moquém",
    eligible: false,
  },
  {
    word: "moquir",
    eligible: false,
  },
  {
    word: "morada",
    eligible: false,
  },
  {
    word: "Moraes",
    eligible: false,
  },
  {
    word: "morane",
    eligible: false,
  },
  {
    word: "morato",
    eligible: false,
  },
  {
    word: "moravo",
    eligible: false,
  },
  {
    word: "morbos",
    eligible: false,
  },
  {
    word: "mórbus",
    eligible: false,
  },
  {
    word: "morcão",
    eligible: false,
  },
  {
    word: "morcos",
    eligible: false,
  },
  {
    word: "mordaz",
    eligible: false,
  },
  {
    word: "morder",
    eligible: false,
  },
  {
    word: "moreão",
    eligible: false,
  },
  {
    word: "moréea",
    eligible: false,
  },
  {
    word: "moreia",
    eligible: false,
  },
  {
    word: "morena",
    eligible: false,
  },
  {
    word: "moreno",
    eligible: false,
  },
  {
    word: "morerê",
    eligible: false,
  },
  {
    word: "moreto",
    eligible: false,
  },
  {
    word: "morfão",
    eligible: false,
  },
  {
    word: "morfar",
    eligible: false,
  },
  {
    word: "Morfeu",
    eligible: false,
  },
  {
    word: "morfia",
    eligible: false,
  },
  {
    word: "mórfis",
    eligible: false,
  },
  {
    word: "morfno",
    eligible: false,
  },
  {
    word: "morfol",
    eligible: false,
  },
  {
    word: "Morgan",
    eligible: false,
  },
  {
    word: "morgar",
    eligible: false,
  },
  {
    word: "mórgio",
    eligible: false,
  },
  {
    word: "morial",
    eligible: false,
  },
  {
    word: "mórico",
    eligible: false,
  },
  {
    word: "morilo",
    eligible: false,
  },
  {
    word: "morimo",
    eligible: false,
  },
  {
    word: "morina",
    eligible: false,
  },
  {
    word: "mórino",
    eligible: false,
  },
  {
    word: "mórion",
    eligible: false,
  },
  {
    word: "moriti",
    eligible: false,
  },
  {
    word: "morivá",
    eligible: false,
  },
  {
    word: "morlés",
    eligible: false,
  },
  {
    word: "mormão",
    eligible: false,
  },
  {
    word: "mórmon",
    eligible: false,
  },
  {
    word: "mornal",
    eligible: false,
  },
  {
    word: "mornar",
    eligible: false,
  },
  {
    word: "mornez",
    eligible: false,
  },
  {
    word: "mornos",
    eligible: false,
  },
  {
    word: "moroba",
    eligible: false,
  },
  {
    word: "moroda",
    eligible: false,
  },
  {
    word: "morone",
    eligible: false,
  },
  {
    word: "móropo",
    eligible: false,
  },
  {
    word: "mororê",
    eligible: false,
  },
  {
    word: "mororó",
    eligible: false,
  },
  {
    word: "moroso",
    eligible: false,
  },
  {
    word: "morotó",
    eligible: false,
  },
  {
    word: "morrão",
    eligible: false,
  },
  {
    word: "morrer",
    eligible: false,
  },
  {
    word: "morros",
    eligible: false,
  },
  {
    word: "morsal",
    eligible: false,
  },
  {
    word: "morsos",
    eligible: false,
  },
  {
    word: "mortal",
    eligible: false,
  },
  {
    word: "mortas",
    eligible: false,
  },
  {
    word: "mortem",
    eligible: false,
  },
  {
    word: "mortes",
    eligible: false,
  },
  {
    word: "mortis",
    eligible: false,
  },
  {
    word: "Mortos",
    eligible: false,
  },
  {
    word: "mortos",
    eligible: false,
  },
  {
    word: "moruco",
    eligible: false,
  },
  {
    word: "morula",
    eligible: false,
  },
  {
    word: "mórula",
    eligible: false,
  },
  {
    word: "moruno",
    eligible: false,
  },
  {
    word: "moruré",
    eligible: false,
  },
  {
    word: "mosano",
    eligible: false,
  },
  {
    word: "moscão",
    eligible: false,
  },
  {
    word: "moscar",
    eligible: false,
  },
  {
    word: "moscas",
    eligible: false,
  },
  {
    word: "Mosele",
    eligible: false,
  },
  {
    word: "Moserá",
    eligible: false,
  },
  {
    word: "mosino",
    eligible: false,
  },
  {
    word: "mosite",
    eligible: false,
  },
  {
    word: "moslém",
    eligible: false,
  },
  {
    word: "moslim",
    eligible: false,
  },
  {
    word: "mossar",
    eligible: false,
  },
  {
    word: "mossém",
    eligible: false,
  },
  {
    word: "mossua",
    eligible: false,
  },
  {
    word: "mossué",
    eligible: false,
  },
  {
    word: "mostil",
    eligible: false,
  },
  {
    word: "motacé",
    eligible: false,
  },
  {
    word: "motacu",
    eligible: false,
  },
  {
    word: "motamo",
    eligible: false,
  },
  {
    word: "motano",
    eligible: false,
  },
  {
    word: "motava",
    eligible: false,
  },
  {
    word: "motazé",
    eligible: false,
  },
  {
    word: "moteno",
    eligible: false,
  },
  {
    word: "motete",
    eligible: false,
  },
  {
    word: "moteto",
    eligible: false,
  },
  {
    word: "motevo",
    eligible: false,
  },
  {
    word: "motira",
    eligible: false,
  },
  {
    word: "motoca",
    eligible: false,
  },
  {
    word: "motocu",
    eligible: false,
  },
  {
    word: "MotoGP",
    eligible: false,
  },
  {
    word: "motolo",
    eligible: false,
  },
  {
    word: "motome",
    eligible: false,
  },
  {
    word: "motora",
    eligible: false,
  },
  {
    word: "motoro",
    eligible: false,
  },
  {
    word: "motril",
    eligible: false,
  },
  {
    word: "motriz",
    eligible: false,
  },
  {
    word: "motuca",
    eligible: false,
  },
  {
    word: "motucu",
    eligible: false,
  },
  {
    word: "motula",
    eligible: false,
  },
  {
    word: "moucar",
    eligible: false,
  },
  {
    word: "mouche",
    eligible: false,
  },
  {
    word: "moufar",
    eligible: false,
  },
  {
    word: "moumar",
    eligible: false,
  },
  {
    word: "mounha",
    eligible: false,
  },
  {
    word: "moural",
    eligible: false,
  },
  {
    word: "mourão",
    eligible: false,
  },
  {
    word: "mourar",
    eligible: false,
  },
  {
    word: "mouras",
    eligible: false,
  },
  {
    word: "mouraz",
    eligible: false,
  },
  {
    word: "mouril",
    eligible: false,
  },
  {
    word: "Mouros",
    eligible: false,
  },
  {
    word: "mouros",
    eligible: false,
  },
  {
    word: "mourte",
    eligible: false,
  },
  {
    word: "mousse",
    eligible: false,
  },
  {
    word: "moutal",
    eligible: false,
  },
  {
    word: "moutão",
    eligible: false,
  },
  {
    word: "moutas",
    eligible: false,
  },
  {
    word: "móveis",
    eligible: false,
  },
  {
    word: "móvito",
    eligible: false,
  },
  {
    word: "moxoli",
    eligible: false,
  },
  {
    word: "Mozart",
    eligible: false,
  },
  {
    word: "mozena",
    eligible: false,
  },
  {
    word: "mozeta",
    eligible: false,
  },
  {
    word: "mozina",
    eligible: false,
  },
  {
    word: "muadiê",
    eligible: false,
  },
  {
    word: "muambo",
    eligible: false,
  },
  {
    word: "muance",
    eligible: false,
  },
  {
    word: "muanco",
    eligible: false,
  },
  {
    word: "muandi",
    eligible: false,
  },
  {
    word: "muando",
    eligible: false,
  },
  {
    word: "muange",
    eligible: false,
  },
  {
    word: "muango",
    eligible: false,
  },
  {
    word: "muanha",
    eligible: false,
  },
  {
    word: "muanhi",
    eligible: false,
  },
  {
    word: "muanza",
    eligible: false,
  },
  {
    word: "muarrã",
    eligible: false,
  },
  {
    word: "mubafo",
    eligible: false,
  },
  {
    word: "mubata",
    eligible: false,
  },
  {
    word: "mubeba",
    eligible: false,
  },
  {
    word: "mubela",
    eligible: false,
  },
  {
    word: "mubica",
    eligible: false,
  },
  {
    word: "mubilu",
    eligible: false,
  },
  {
    word: "mubire",
    eligible: false,
  },
  {
    word: "mubono",
    eligible: false,
  },
  {
    word: "mubota",
    eligible: false,
  },
  {
    word: "mubula",
    eligible: false,
  },
  {
    word: "mucaca",
    eligible: false,
  },
  {
    word: "mucaça",
    eligible: false,
  },
  {
    word: "muçaca",
    eligible: false,
  },
  {
    word: "muçaça",
    eligible: false,
  },
  {
    word: "muçaco",
    eligible: false,
  },
  {
    word: "mucage",
    eligible: false,
  },
  {
    word: "mucaiá",
    eligible: false,
  },
  {
    word: "mucajá",
    eligible: false,
  },
  {
    word: "mucaje",
    eligible: false,
  },
  {
    word: "mucala",
    eligible: false,
  },
  {
    word: "muçale",
    eligible: false,
  },
  {
    word: "mucali",
    eligible: false,
  },
  {
    word: "muçalo",
    eligible: false,
  },
  {
    word: "mucama",
    eligible: false,
  },
  {
    word: "mucano",
    eligible: false,
  },
  {
    word: "muçapo",
    eligible: false,
  },
  {
    word: "mucato",
    eligible: false,
  },
  {
    word: "mucaúa",
    eligible: false,
  },
  {
    word: "muçaxe",
    eligible: false,
  },
  {
    word: "mucáxi",
    eligible: false,
  },
  {
    word: "mucazo",
    eligible: false,
  },
  {
    word: "mucece",
    eligible: false,
  },
  {
    word: "mucefo",
    eligible: false,
  },
  {
    word: "mucera",
    eligible: false,
  },
  {
    word: "mucete",
    eligible: false,
  },
  {
    word: "muchão",
    eligible: false,
  },
  {
    word: "muchém",
    eligible: false,
  },
  {
    word: "muchir",
    eligible: false,
  },
  {
    word: "mucica",
    eligible: false,
  },
  {
    word: "múcico",
    eligible: false,
  },
  {
    word: "mucina",
    eligible: false,
  },
  {
    word: "mucite",
    eligible: false,
  },
  {
    word: "mucito",
    eligible: false,
  },
  {
    word: "mucoba",
    eligible: false,
  },
  {
    word: "mucoco",
    eligible: false,
  },
  {
    word: "mucolo",
    eligible: false,
  },
  {
    word: "mucoma",
    eligible: false,
  },
  {
    word: "mucoso",
    eligible: false,
  },
  {
    word: "mucóxi",
    eligible: false,
  },
  {
    word: "mucoxo",
    eligible: false,
  },
  {
    word: "mucrão",
    eligible: false,
  },
  {
    word: "múcron",
    eligible: false,
  },
  {
    word: "mucual",
    eligible: false,
  },
  {
    word: "mucuba",
    eligible: false,
  },
  {
    word: "mucubu",
    eligible: false,
  },
  {
    word: "mucuco",
    eligible: false,
  },
  {
    word: "mucucó",
    eligible: false,
  },
  {
    word: "mucuço",
    eligible: false,
  },
  {
    word: "mucucu",
    eligible: false,
  },
  {
    word: "mucudi",
    eligible: false,
  },
  {
    word: "mucudo",
    eligible: false,
  },
  {
    word: "mucufo",
    eligible: false,
  },
  {
    word: "Mucugê",
    eligible: false,
  },
  {
    word: "mucuim",
    eligible: false,
  },
  {
    word: "mucuió",
    eligible: false,
  },
  {
    word: "mucuiú",
    eligible: false,
  },
  {
    word: "mucujá",
    eligible: false,
  },
  {
    word: "mucujé",
    eligible: false,
  },
  {
    word: "mucujê",
    eligible: false,
  },
  {
    word: "muculo",
    eligible: false,
  },
  {
    word: "mucumá",
    eligible: false,
  },
  {
    word: "mucumã",
    eligible: false,
  },
  {
    word: "mucume",
    eligible: false,
  },
  {
    word: "mucuna",
    eligible: false,
  },
  {
    word: "mucuná",
    eligible: false,
  },
  {
    word: "mucunã",
    eligible: false,
  },
  {
    word: "mucune",
    eligible: false,
  },
  {
    word: "mucuni",
    eligible: false,
  },
  {
    word: "mucúni",
    eligible: false,
  },
  {
    word: "mucura",
    eligible: false,
  },
  {
    word: "mucure",
    eligible: false,
  },
  {
    word: "mucuri",
    eligible: false,
  },
  {
    word: "mucuro",
    eligible: false,
  },
  {
    word: "mucuso",
    eligible: false,
  },
  {
    word: "mucuta",
    eligible: false,
  },
  {
    word: "mucuto",
    eligible: false,
  },
  {
    word: "mucuve",
    eligible: false,
  },
  {
    word: "mudama",
    eligible: false,
  },
  {
    word: "mudeza",
    eligible: false,
  },
  {
    word: "mudima",
    eligible: false,
  },
  {
    word: "mudiri",
    eligible: false,
  },
  {
    word: "mudulo",
    eligible: false,
  },
  {
    word: "muedem",
    eligible: false,
  },
  {
    word: "muelas",
    eligible: false,
  },
  {
    word: "mueles",
    eligible: false,
  },
  {
    word: "muemar",
    eligible: false,
  },
  {
    word: "muenar",
    eligible: false,
  },
  {
    word: "muende",
    eligible: false,
  },
  {
    word: "muenha",
    eligible: false,
  },
  {
    word: "muenhê",
    eligible: false,
  },
  {
    word: "muentz",
    eligible: false,
  },
  {
    word: "muesli",
    eligible: false,
  },
  {
    word: "muezim",
    eligible: false,
  },
  {
    word: "múfalo",
    eligible: false,
  },
  {
    word: "mufana",
    eligible: false,
  },
  {
    word: "mufete",
    eligible: false,
  },
  {
    word: "mufico",
    eligible: false,
  },
  {
    word: "mufilo",
    eligible: false,
  },
  {
    word: "mufino",
    eligible: false,
  },
  {
    word: "mufito",
    eligible: false,
  },
  {
    word: "mufixé",
    eligible: false,
  },
  {
    word: "muflão",
    eligible: false,
  },
  {
    word: "mufufa",
    eligible: false,
  },
  {
    word: "mufumo",
    eligible: false,
  },
  {
    word: "mugens",
    eligible: false,
  },
  {
    word: "mugódi",
    eligible: false,
  },
  {
    word: "múgria",
    eligible: false,
  },
  {
    word: "muiaje",
    eligible: false,
  },
  {
    word: "muiana",
    eligible: false,
  },
  {
    word: "muimbo",
    eligible: false,
  },
  {
    word: "muindo",
    eligible: false,
  },
  {
    word: "muinge",
    eligible: false,
  },
  {
    word: "muinha",
    eligible: false,
  },
  {
    word: "muinje",
    eligible: false,
  },
  {
    word: "muirri",
    eligible: false,
  },
  {
    word: "muitia",
    eligible: false,
  },
  {
    word: "muiuna",
    eligible: false,
  },
  {
    word: "muiuré",
    eligible: false,
  },
  {
    word: "mujajo",
    eligible: false,
  },
  {
    word: "mujena",
    eligible: false,
  },
  {
    word: "mujico",
    eligible: false,
  },
  {
    word: "mujije",
    eligible: false,
  },
  {
    word: "mujima",
    eligible: false,
  },
  {
    word: "mujojo",
    eligible: false,
  },
  {
    word: "mujolo",
    eligible: false,
  },
  {
    word: "mulabá",
    eligible: false,
  },
  {
    word: "mulabe",
    eligible: false,
  },
  {
    word: "muladi",
    eligible: false,
  },
  {
    word: "mulage",
    eligible: false,
  },
  {
    word: "mulaje",
    eligible: false,
  },
  {
    word: "muláli",
    eligible: false,
  },
  {
    word: "mulalo",
    eligible: false,
  },
  {
    word: "mulame",
    eligible: false,
  },
  {
    word: "mulana",
    eligible: false,
  },
  {
    word: "mulata",
    eligible: false,
  },
  {
    word: "mulato",
    eligible: false,
  },
  {
    word: "mulele",
    eligible: false,
  },
  {
    word: "mulemá",
    eligible: false,
  },
  {
    word: "mulemo",
    eligible: false,
  },
  {
    word: "muleno",
    eligible: false,
  },
  {
    word: "mulera",
    eligible: false,
  },
  {
    word: "muleta",
    eligible: false,
  },
  {
    word: "Mulher",
    eligible: false,
  },
  {
    word: "mulher",
    eligible: false,
  },
  {
    word: "múlida",
    eligible: false,
  },
  {
    word: "mulino",
    eligible: false,
  },
  {
    word: "mulita",
    eligible: false,
  },
  {
    word: "Müller",
    eligible: false,
  },
  {
    word: "mulóji",
    eligible: false,
  },
  {
    word: "mulôji",
    eligible: false,
  },
  {
    word: "mulolo",
    eligible: false,
  },
  {
    word: "mulope",
    eligible: false,
  },
  {
    word: "muloso",
    eligible: false,
  },
  {
    word: "mulsão",
    eligible: false,
  },
  {
    word: "multar",
    eligible: false,
  },
  {
    word: "mulucu",
    eligible: false,
  },
  {
    word: "mululo",
    eligible: false,
  },
  {
    word: "mulume",
    eligible: false,
  },
  {
    word: "Mumbai",
    eligible: false,
  },
  {
    word: "mumbos",
    eligible: false,
  },
  {
    word: "mumono",
    eligible: false,
  },
  {
    word: "Mumtaz",
    eligible: false,
  },
  {
    word: "mumuca",
    eligible: false,
  },
  {
    word: "múmure",
    eligible: false,
  },
  {
    word: "munchi",
    eligible: false,
  },
  {
    word: "mundão",
    eligible: false,
  },
  {
    word: "mundaú",
    eligible: false,
  },
  {
    word: "Mundeo",
    eligible: false,
  },
  {
    word: "mundés",
    eligible: false,
  },
  {
    word: "mundéu",
    eligible: false,
  },
  {
    word: "Mundim",
    eligible: false,
  },
  {
    word: "múndio",
    eligible: false,
  },
  {
    word: "mundos",
    eligible: false,
  },
  {
    word: "munduí",
    eligible: false,
  },
  {
    word: "munefe",
    eligible: false,
  },
  {
    word: "munega",
    eligible: false,
  },
  {
    word: "munema",
    eligible: false,
  },
  {
    word: "munere",
    eligible: false,
  },
  {
    word: "mungai",
    eligible: false,
  },
  {
    word: "munger",
    eligible: false,
  },
  {
    word: "mungil",
    eligible: false,
  },
  {
    word: "mungir",
    eligible: false,
  },
  {
    word: "mungue",
    eligible: false,
  },
  {
    word: "munhão",
    eligible: false,
  },
  {
    word: "Munhoz",
    eligible: false,
  },
  {
    word: "múnida",
    eligible: false,
  },
  {
    word: "munjue",
    eligible: false,
  },
  {
    word: "munono",
    eligible: false,
  },
  {
    word: "munquê",
    eligible: false,
  },
  {
    word: "munuru",
    eligible: false,
  },
  {
    word: "muônio",
    eligible: false,
  },
  {
    word: "mupaco",
    eligible: false,
  },
  {
    word: "mupapa",
    eligible: false,
  },
  {
    word: "mupeça",
    eligible: false,
  },
  {
    word: "mupéua",
    eligible: false,
  },
  {
    word: "mupexe",
    eligible: false,
  },
  {
    word: "mupira",
    eligible: false,
  },
  {
    word: "mupupo",
    eligible: false,
  },
  {
    word: "Muquém",
    eligible: false,
  },
  {
    word: "múquia",
    eligible: false,
  },
  {
    word: "muracá",
    eligible: false,
  },
  {
    word: "murado",
    eligible: false,
  },
  {
    word: "murale",
    eligible: false,
  },
  {
    word: "Murari",
    eligible: false,
  },
  {
    word: "murças",
    eligible: false,
  },
  {
    word: "Múrcia",
    eligible: false,
  },
  {
    word: "murear",
    eligible: false,
  },
  {
    word: "murena",
    eligible: false,
  },
  {
    word: "mureré",
    eligible: false,
  },
  {
    word: "mureru",
    eligible: false,
  },
  {
    word: "murete",
    eligible: false,
  },
  {
    word: "mureto",
    eligible: false,
  },
  {
    word: "Muriaé",
    eligible: false,
  },
  {
    word: "múrice",
    eligible: false,
  },
  {
    word: "murici",
    eligible: false,
  },
  {
    word: "múrida",
    eligible: false,
  },
  {
    word: "Muriel",
    eligible: false,
  },
  {
    word: "Murilo",
    eligible: false,
  },
  {
    word: "murino",
    eligible: false,
  },
  {
    word: "muriri",
    eligible: false,
  },
  {
    word: "muriti",
    eligible: false,
  },
  {
    word: "murixi",
    eligible: false,
  },
  {
    word: "múrmur",
    eligible: false,
  },
  {
    word: "murnau",
    eligible: false,
  },
  {
    word: "murrão",
    eligible: false,
  },
  {
    word: "murroa",
    eligible: false,
  },
  {
    word: "murrué",
    eligible: false,
  },
  {
    word: "murtal",
    eligible: false,
  },
  {
    word: "murtas",
    eligible: false,
  },
  {
    word: "murubu",
    eligible: false,
  },
  {
    word: "muruca",
    eligible: false,
  },
  {
    word: "muruci",
    eligible: false,
  },
  {
    word: "murucu",
    eligible: false,
  },
  {
    word: "muruim",
    eligible: false,
  },
  {
    word: "murumo",
    eligible: false,
  },
  {
    word: "murupi",
    eligible: false,
  },
  {
    word: "mururé",
    eligible: false,
  },
  {
    word: "mururu",
    eligible: false,
  },
  {
    word: "muruti",
    eligible: false,
  },
  {
    word: "muruuá",
    eligible: false,
  },
  {
    word: "muruxi",
    eligible: false,
  },
  {
    word: "musaça",
    eligible: false,
  },
  {
    word: "musale",
    eligible: false,
  },
  {
    word: "muscal",
    eligible: false,
  },
  {
    word: "muscam",
    eligible: false,
  },
  {
    word: "muscle",
    eligible: false,
  },
  {
    word: "musena",
    eligible: false,
  },
  {
    word: "museta",
    eligible: false,
  },
  {
    word: "musgão",
    eligible: false,
  },
  {
    word: "musgar",
    eligible: false,
  },
  {
    word: "musgos",
    eligible: false,
  },
  {
    word: "música",
    eligible: false,
  },
  {
    word: "músico",
    eligible: false,
  },
  {
    word: "muslim",
    eligible: false,
  },
  {
    word: "musole",
    eligible: false,
  },
  {
    word: "musoso",
    eligible: false,
  },
  {
    word: "musque",
    eligible: false,
  },
  {
    word: "mussiú",
    eligible: false,
  },
  {
    word: "mussuá",
    eligible: false,
  },
  {
    word: "mússua",
    eligible: false,
  },
  {
    word: "musuar",
    eligible: false,
  },
  {
    word: "musuno",
    eligible: false,
  },
  {
    word: "mutaco",
    eligible: false,
  },
  {
    word: "mutaço",
    eligible: false,
  },
  {
    word: "mutala",
    eligible: false,
  },
  {
    word: "mutano",
    eligible: false,
  },
  {
    word: "mutapá",
    eligible: false,
  },
  {
    word: "mútase",
    eligible: false,
  },
  {
    word: "mutele",
    eligible: false,
  },
  {
    word: "mutepa",
    eligible: false,
  },
  {
    word: "mutete",
    eligible: false,
  },
  {
    word: "mutibi",
    eligible: false,
  },
  {
    word: "mutico",
    eligible: false,
  },
  {
    word: "mútilo",
    eligible: false,
  },
  {
    word: "mutino",
    eligible: false,
  },
  {
    word: "mutobo",
    eligible: false,
  },
  {
    word: "mutoco",
    eligible: false,
  },
  {
    word: "mutone",
    eligible: false,
  },
  {
    word: "mutopa",
    eligible: false,
  },
  {
    word: "mutove",
    eligible: false,
  },
  {
    word: "mutoxe",
    eligible: false,
  },
  {
    word: "mutrar",
    eligible: false,
  },
  {
    word: "mutual",
    eligible: false,
  },
  {
    word: "mutuar",
    eligible: false,
  },
  {
    word: "mutuca",
    eligible: false,
  },
  {
    word: "mutula",
    eligible: false,
  },
  {
    word: "mútulo",
    eligible: false,
  },
  {
    word: "mutune",
    eligible: false,
  },
  {
    word: "mutuns",
    eligible: false,
  },
  {
    word: "muturi",
    eligible: false,
  },
  {
    word: "mututi",
    eligible: false,
  },
  {
    word: "mututo",
    eligible: false,
  },
  {
    word: "mututu",
    eligible: false,
  },
  {
    word: "muumbe",
    eligible: false,
  },
  {
    word: "muungo",
    eligible: false,
  },
  {
    word: "muvala",
    eligible: false,
  },
  {
    word: "muvovo",
    eligible: false,
  },
  {
    word: "muvuca",
    eligible: false,
  },
  {
    word: "muvuga",
    eligible: false,
  },
  {
    word: "muxama",
    eligible: false,
  },
  {
    word: "muxara",
    eligible: false,
  },
  {
    word: "muxaxo",
    eligible: false,
  },
  {
    word: "muxeca",
    eligible: false,
  },
  {
    word: "muxiba",
    eligible: false,
  },
  {
    word: "muxibi",
    eligible: false,
  },
  {
    word: "muxima",
    eligible: false,
  },
  {
    word: "muxira",
    eligible: false,
  },
  {
    word: "muxiri",
    eligible: false,
  },
  {
    word: "muxito",
    eligible: false,
  },
  {
    word: "muxixe",
    eligible: false,
  },
  {
    word: "muxove",
    eligible: false,
  },
  {
    word: "muxoxo",
    eligible: false,
  },
  {
    word: "muxuri",
    eligible: false,
  },
  {
    word: "muzeba",
    eligible: false,
  },
  {
    word: "muzimo",
    eligible: false,
  },
  {
    word: "muzozo",
    eligible: false,
  },
  {
    word: "muzuco",
    eligible: false,
  },
  {
    word: "muzuno",
    eligible: false,
  },
  {
    word: "muzuzu",
    eligible: false,
  },
  {
    word: "MXCIII",
    eligible: false,
  },
  {
    word: "MXCVII",
    eligible: false,
  },
  {
    word: "MXLIII",
    eligible: false,
  },
  {
    word: "MXLVII",
    eligible: false,
  },
  {
    word: "MXVIII",
    eligible: false,
  },
  {
    word: "MXXIII",
    eligible: false,
  },
  {
    word: "MXXVII",
    eligible: false,
  },
  {
    word: "MXXXII",
    eligible: false,
  },
  {
    word: "MXXXIV",
    eligible: false,
  },
  {
    word: "MXXXIX",
    eligible: false,
  },
  {
    word: "MXXXVI",
    eligible: false,
  },
  {
    word: "N'Água",
    eligible: false,
  },
  {
    word: "n'Água",
    eligible: false,
  },
  {
    word: "n'água",
    eligible: false,
  },
  {
    word: "N'Alma",
    eligible: false,
  },
  {
    word: "n'Alma",
    eligible: false,
  },
  {
    word: "n'alma",
    eligible: false,
  },
  {
    word: "nababo",
    eligible: false,
  },
  {
    word: "nabade",
    eligible: false,
  },
  {
    word: "nábata",
    eligible: false,
  },
  {
    word: "nabede",
    eligible: false,
  },
  {
    word: "nabiça",
    eligible: false,
  },
  {
    word: "náblio",
    eligible: false,
  },
  {
    word: "Nabote",
    eligible: false,
  },
  {
    word: "nabuco",
    eligible: false,
  },
  {
    word: "nábulo",
    eligible: false,
  },
  {
    word: "nacaca",
    eligible: false,
  },
  {
    word: "nacada",
    eligible: false,
  },
  {
    word: "nacará",
    eligible: false,
  },
  {
    word: "nacauã",
    eligible: false,
  },
  {
    word: "naceja",
    eligible: false,
  },
  {
    word: "nacele",
    eligible: false,
  },
  {
    word: "nacibo",
    eligible: false,
  },
  {
    word: "nacodá",
    eligible: false,
  },
  {
    word: "nações",
    eligible: false,
  },
  {
    word: "nacreá",
    eligible: false,
  },
  {
    word: "nádega",
    eligible: false,
  },
  {
    word: "nadica",
    eligible: false,
  },
  {
    word: "nadida",
    eligible: false,
  },
  {
    word: "Nadima",
    eligible: false,
  },
  {
    word: "nadina",
    eligible: false,
  },
  {
    word: "Nadine",
    eligible: false,
  },
  {
    word: "nadivo",
    eligible: false,
  },
  {
    word: "Nadson",
    eligible: false,
  },
  {
    word: "nafana",
    eligible: false,
  },
  {
    word: "nafato",
    eligible: false,
  },
  {
    word: "náfego",
    eligible: false,
  },
  {
    word: "naftil",
    eligible: false,
  },
  {
    word: "naftol",
    eligible: false,
  },
  {
    word: "nafute",
    eligible: false,
  },
  {
    word: "nagana",
    eligible: false,
  },
  {
    word: "nágera",
    eligible: false,
  },
  {
    word: "nagias",
    eligible: false,
  },
  {
    word: "nagibe",
    eligible: false,
  },
  {
    word: "Nagoia",
    eligible: false,
  },
  {
    word: "Nagoya",
    eligible: false,
  },
  {
    word: "nagual",
    eligible: false,
  },
  {
    word: "naguim",
    eligible: false,
  },
  {
    word: "náiade",
    eligible: false,
  },
  {
    word: "Naiara",
    eligible: false,
  },
  {
    word: "naibre",
    eligible: false,
  },
  {
    word: "náideo",
    eligible: false,
  },
  {
    word: "náilon",
    eligible: false,
  },
  {
    word: "Naiote",
    eligible: false,
  },
  {
    word: "naipar",
    eligible: false,
  },
  {
    word: "naique",
    eligible: false,
  },
  {
    word: "najera",
    eligible: false,
  },
  {
    word: "najico",
    eligible: false,
  },
  {
    word: "Najjar",
    eligible: false,
  },
  {
    word: "najuru",
    eligible: false,
  },
  {
    word: "nalagu",
    eligible: false,
  },
  {
    word: "Nalani",
    eligible: false,
  },
  {
    word: "nalata",
    eligible: false,
  },
  {
    word: "nalgum",
    eligible: false,
  },
  {
    word: "Nalone",
    eligible: false,
  },
  {
    word: "namázi",
    eligible: false,
  },
  {
    word: "nambua",
    eligible: false,
  },
  {
    word: "nambus",
    eligible: false,
  },
  {
    word: "nambuu",
    eligible: false,
  },
  {
    word: "nameia",
    eligible: false,
  },
  {
    word: "namoim",
    eligible: false,
  },
  {
    word: "namoro",
    eligible: false,
  },
  {
    word: "namunu",
    eligible: false,
  },
  {
    word: "nanaci",
    eligible: false,
  },
  {
    word: "Nanael",
    eligible: false,
  },
  {
    word: "nanato",
    eligible: false,
  },
  {
    word: "nanauí",
    eligible: false,
  },
  {
    word: "nanavi",
    eligible: false,
  },
  {
    word: "nangor",
    eligible: false,
  },
  {
    word: "nangra",
    eligible: false,
  },
  {
    word: "nanica",
    eligible: false,
  },
  {
    word: "nanico",
    eligible: false,
  },
  {
    word: "nanine",
    eligible: false,
  },
  {
    word: "nanito",
    eligible: false,
  },
  {
    word: "nânopo",
    eligible: false,
  },
  {
    word: "Nantes",
    eligible: false,
  },
  {
    word: "nantes",
    eligible: false,
  },
  {
    word: "nantês",
    eligible: false,
  },
  {
    word: "napalm",
    eligible: false,
  },
  {
    word: "Napata",
    eligible: false,
  },
  {
    word: "napelo",
    eligible: false,
  },
  {
    word: "napeva",
    eligible: false,
  },
  {
    word: "napier",
    eligible: false,
  },
  {
    word: "napita",
    eligible: false,
  },
  {
    word: "napopé",
    eligible: false,
  },
  {
    word: "napula",
    eligible: false,
  },
  {
    word: "napupa",
    eligible: false,
  },
  {
    word: "napura",
    eligible: false,
  },
  {
    word: "nárdia",
    eligible: false,
  },
  {
    word: "nárdoa",
    eligible: false,
  },
  {
    word: "nardos",
    eligible: false,
  },
  {
    word: "narece",
    eligible: false,
  },
  {
    word: "nargol",
    eligible: false,
  },
  {
    word: "narica",
    eligible: false,
  },
  {
    word: "narina",
    eligible: false,
  },
  {
    word: "narope",
    eligible: false,
  },
  {
    word: "narrar",
    eligible: false,
  },
  {
    word: "nártex",
    eligible: false,
  },
  {
    word: "Naruto",
    eligible: false,
  },
  {
    word: "narval",
    eligible: false,
  },
  {
    word: "nasara",
    eligible: false,
  },
  {
    word: "nascer",
    eligible: false,
  },
  {
    word: "náscio",
    eligible: false,
  },
  {
    word: "Nasdaq",
    eligible: false,
  },
  {
    word: "nasica",
    eligible: false,
  },
  {
    word: "násico",
    eligible: false,
  },
  {
    word: "Nassau",
    eligible: false,
  },
  {
    word: "Násser",
    eligible: false,
  },
  {
    word: "Nassim",
    eligible: false,
  },
  {
    word: "nastia",
    eligible: false,
  },
  {
    word: "nasuto",
    eligible: false,
  },
  {
    word: "natado",
    eligible: false,
  },
  {
    word: "natafe",
    eligible: false,
  },
  {
    word: "Natali",
    eligible: false,
  },
  {
    word: "natalo",
    eligible: false,
  },
  {
    word: "nátice",
    eligible: false,
  },
  {
    word: "nativa",
    eligible: false,
  },
  {
    word: "native",
    eligible: false,
  },
  {
    word: "nativo",
    eligible: false,
  },
  {
    word: "nativu",
    eligible: false,
  },
  {
    word: "natrão",
    eligible: false,
  },
  {
    word: "nátrio",
    eligible: false,
  },
  {
    word: "natrum",
    eligible: false,
  },
  {
    word: "Natuba",
    eligible: false,
  },
  {
    word: "natura",
    eligible: false,
  },
  {
    word: "natuva",
    eligible: false,
  },
  {
    word: "naucuá",
    eligible: false,
  },
  {
    word: "nauete",
    eligible: false,
  },
  {
    word: "naunde",
    eligible: false,
  },
  {
    word: "nauquá",
    eligible: false,
  },
  {
    word: "náusea",
    eligible: false,
  },
  {
    word: "navais",
    eligible: false,
  },
  {
    word: "navajo",
    eligible: false,
  },
  {
    word: "naveta",
    eligible: false,
  },
  {
    word: "Navier",
    eligible: false,
  },
  {
    word: "navios",
    eligible: false,
  },
  {
    word: "náxaro",
    eligible: false,
  },
  {
    word: "Nazaré",
    eligible: false,
  },
  {
    word: "nazaré",
    eligible: false,
  },
  {
    word: "ndando",
    eligible: false,
  },
  {
    word: "ndendo",
    eligible: false,
  },
  {
    word: "ndimba",
    eligible: false,
  },
  {
    word: "ndomba",
    eligible: false,
  },
  {
    word: "ndongo",
    eligible: false,
  },
  {
    word: "ndumba",
    eligible: false,
  },
  {
    word: "ndzava",
    eligible: false,
  },
  {
    word: "neânia",
    eligible: false,
  },
  {
    word: "nearco",
    eligible: false,
  },
  {
    word: "neasso",
    eligible: false,
  },
  {
    word: "nebafo",
    eligible: false,
  },
  {
    word: "nebaso",
    eligible: false,
  },
  {
    word: "Nebate",
    eligible: false,
  },
  {
    word: "neboto",
    eligible: false,
  },
  {
    word: "nébria",
    eligible: false,
  },
  {
    word: "nébris",
    eligible: false,
  },
  {
    word: "nébula",
    eligible: false,
  },
  {
    word: "nécara",
    eligible: false,
  },
  {
    word: "necear",
    eligible: false,
  },
  {
    word: "necoco",
    eligible: false,
  },
  {
    word: "necodá",
    eligible: false,
  },
  {
    word: "néctar",
    eligible: false,
  },
  {
    word: "nectes",
    eligible: false,
  },
  {
    word: "nécton",
    eligible: false,
  },
  {
    word: "nediez",
    eligible: false,
  },
  {
    word: "nedita",
    eligible: false,
  },
  {
    word: "neésia",
    eligible: false,
  },
  {
    word: "néfane",
    eligible: false,
  },
  {
    word: "nefelo",
    eligible: false,
  },
  {
    word: "nefena",
    eligible: false,
  },
  {
    word: "nêfeta",
    eligible: false,
  },
  {
    word: "néfila",
    eligible: false,
  },
  {
    word: "nefita",
    eligible: false,
  },
  {
    word: "néfodo",
    eligible: false,
  },
  {
    word: "néfron",
    eligible: false,
  },
  {
    word: "néftea",
    eligible: false,
  },
  {
    word: "néftis",
    eligible: false,
  },
  {
    word: "negiló",
    eligible: false,
  },
  {
    word: "negoco",
    eligible: false,
  },
  {
    word: "negral",
    eligible: false,
  },
  {
    word: "negrão",
    eligible: false,
  },
  {
    word: "negras",
    eligible: false,
  },
  {
    word: "negroa",
    eligible: false,
  },
  {
    word: "negror",
    eligible: false,
  },
  {
    word: "negros",
    eligible: false,
  },
  {
    word: "neguça",
    eligible: false,
  },
  {
    word: "neguma",
    eligible: false,
  },
  {
    word: "neides",
    eligible: false,
  },
  {
    word: "neinei",
    eligible: false,
  },
  {
    word: "neísmo",
    eligible: false,
  },
  {
    word: "nelavã",
    eligible: false,
  },
  {
    word: "nelita",
    eligible: false,
  },
  {
    word: "nelore",
    eligible: false,
  },
  {
    word: "Nélson",
    eligible: false,
  },
  {
    word: "Nélton",
    eligible: false,
  },
  {
    word: "nêmato",
    eligible: false,
  },
  {
    word: "nemeeu",
    eligible: false,
  },
  {
    word: "nêmese",
    eligible: false,
  },
  {
    word: "nemeta",
    eligible: false,
  },
  {
    word: "nêmete",
    eligible: false,
  },
  {
    word: "Nemias",
    eligible: false,
  },
  {
    word: "nemplé",
    eligible: false,
  },
  {
    word: "Nemuel",
    eligible: false,
  },
  {
    word: "nemura",
    eligible: false,
  },
  {
    word: "nenéns",
    eligible: false,
  },
  {
    word: "nengro",
    eligible: false,
  },
  {
    word: "nengue",
    eligible: false,
  },
  {
    word: "nenhum",
    eligible: false,
  },
  {
    word: "neônio",
    eligible: false,
  },
  {
    word: "neótia",
    eligible: false,
  },
  {
    word: "nepali",
    eligible: false,
  },
  {
    word: "nepepe",
    eligible: false,
  },
  {
    word: "népeta",
    eligible: false,
  },
  {
    word: "nêpeta",
    eligible: false,
  },
  {
    word: "népida",
    eligible: false,
  },
  {
    word: "nepote",
    eligible: false,
  },
  {
    word: "néptis",
    eligible: false,
  },
  {
    word: "nereia",
    eligible: false,
  },
  {
    word: "Nergal",
    eligible: false,
  },
  {
    word: "Nergis",
    eligible: false,
  },
  {
    word: "Nerias",
    eligible: false,
  },
  {
    word: "nerina",
    eligible: false,
  },
  {
    word: "neripo",
    eligible: false,
  },
  {
    word: "nerita",
    eligible: false,
  },
  {
    word: "Neroli",
    eligible: false,
  },
  {
    word: "néroli",
    eligible: false,
  },
  {
    word: "neruso",
    eligible: false,
  },
  {
    word: "nerval",
    eligible: false,
  },
  {
    word: "nérveo",
    eligible: false,
  },
  {
    word: "nérvio",
    eligible: false,
  },
  {
    word: "nervol",
    eligible: false,
  },
  {
    word: "nervos",
    eligible: false,
  },
  {
    word: "néscio",
    eligible: false,
  },
  {
    word: "nesgão",
    eligible: false,
  },
  {
    word: "nesgar",
    eligible: false,
  },
  {
    word: "nesita",
    eligible: false,
  },
  {
    word: "néslia",
    eligible: false,
  },
  {
    word: "nesque",
    eligible: false,
  },
  {
    word: "nésqui",
    eligible: false,
  },
  {
    word: "nestia",
    eligible: false,
  },
  {
    word: "néstis",
    eligible: false,
  },
  {
    word: "nestor",
    eligible: false,
  },
  {
    word: "netapo",
    eligible: false,
  },
  {
    word: "nético",
    eligible: false,
  },
  {
    word: "Netofá",
    eligible: false,
  },
  {
    word: "Netuno",
    eligible: false,
  },
  {
    word: "neural",
    eligible: false,
  },
  {
    word: "nêuria",
    eligible: false,
  },
  {
    word: "nêuron",
    eligible: false,
  },
  {
    word: "neusto",
    eligible: false,
  },
  {
    word: "neutra",
    eligible: false,
  },
  {
    word: "neutro",
    eligible: false,
  },
  {
    word: "nevada",
    eligible: false,
  },
  {
    word: "nevari",
    eligible: false,
  },
  {
    word: "nêveda",
    eligible: false,
  },
  {
    word: "nevoal",
    eligible: false,
  },
  {
    word: "nevoar",
    eligible: false,
  },
  {
    word: "nevoso",
    eligible: false,
  },
  {
    word: "nevral",
    eligible: false,
  },
  {
    word: "nevruz",
    eligible: false,
  },
  {
    word: "newton",
    eligible: false,
  },
  {
    word: "nexina",
    eligible: false,
  },
  {
    word: "nexual",
    eligible: false,
  },
  {
    word: "Neymar",
    eligible: false,
  },
  {
    word: "nezara",
    eligible: false,
  },
  {
    word: "nganda",
    eligible: false,
  },
  {
    word: "nganga",
    eligible: false,
  },
  {
    word: "nhambi",
    eligible: false,
  },
  {
    word: "nhambu",
    eligible: false,
  },
  {
    word: "nhampã",
    eligible: false,
  },
  {
    word: "nhamuí",
    eligible: false,
  },
  {
    word: "nhandi",
    eligible: false,
  },
  {
    word: "nhandu",
    eligible: false,
  },
  {
    word: "nhango",
    eligible: false,
  },
  {
    word: "nhanha",
    eligible: false,
  },
  {
    word: "nhanhá",
    eligible: false,
  },
  {
    word: "nhanhã",
    eligible: false,
  },
  {
    word: "nhapim",
    eligible: false,
  },
  {
    word: "nhaque",
    eligible: false,
  },
  {
    word: "Nharea",
    eligible: false,
  },
  {
    word: "nhemba",
    eligible: false,
  },
  {
    word: "nhenha",
    eligible: false,
  },
  {
    word: "nhonho",
    eligible: false,
  },
  {
    word: "nhoque",
    eligible: false,
  },
  {
    word: "nhuaçu",
    eligible: false,
  },
  {
    word: "nhumbo",
    eligible: false,
  },
  {
    word: "nhumue",
    eligible: false,
  },
  {
    word: "nhunde",
    eligible: false,
  },
  {
    word: "nhundi",
    eligible: false,
  },
  {
    word: "nhundu",
    eligible: false,
  },
  {
    word: "nhurro",
    eligible: false,
  },
  {
    word: "nianja",
    eligible: false,
  },
  {
    word: "nibala",
    eligible: false,
  },
  {
    word: "nibora",
    eligible: false,
  },
  {
    word: "niçace",
    eligible: false,
  },
  {
    word: "nicané",
    eligible: false,
  },
  {
    word: "nicate",
    eligible: false,
  },
  {
    word: "Niceia",
    eligible: false,
  },
  {
    word: "niceno",
    eligible: false,
  },
  {
    word: "nichar",
    eligible: false,
  },
  {
    word: "nichos",
    eligible: false,
  },
  {
    word: "nicles",
    eligible: false,
  },
  {
    word: "Nicole",
    eligible: false,
  },
  {
    word: "nictar",
    eligible: false,
  },
  {
    word: "nictos",
    eligible: false,
  },
  {
    word: "nicuri",
    eligible: false,
  },
  {
    word: "nidema",
    eligible: false,
  },
  {
    word: "nieiro",
    eligible: false,
  },
  {
    word: "nielim",
    eligible: false,
  },
  {
    word: "nifela",
    eligible: false,
  },
  {
    word: "nifona",
    eligible: false,
  },
  {
    word: "nigela",
    eligible: false,
  },
  {
    word: "nigero",
    eligible: false,
  },
  {
    word: "niiama",
    eligible: false,
  },
  {
    word: "nilgai",
    eligible: false,
  },
  {
    word: "niliar",
    eligible: false,
  },
  {
    word: "nílico",
    eligible: false,
  },
  {
    word: "Nilmar",
    eligible: false,
  },
  {
    word: "nilota",
    eligible: false,
  },
  {
    word: "Nilsen",
    eligible: false,
  },
  {
    word: "Nílson",
    eligible: false,
  },
  {
    word: "Nílton",
    eligible: false,
  },
  {
    word: "nimbaí",
    eligible: false,
  },
  {
    word: "nimbar",
    eligible: false,
  },
  {
    word: "nímbio",
    eligible: false,
  },
  {
    word: "nimboí",
    eligible: false,
  },
  {
    word: "nimbos",
    eligible: false,
  },
  {
    word: "nimita",
    eligible: false,
  },
  {
    word: "ninfal",
    eligible: false,
  },
  {
    word: "ninfeu",
    eligible: false,
  },
  {
    word: "ninfio",
    eligible: false,
  },
  {
    word: "ninhal",
    eligible: false,
  },
  {
    word: "ninhar",
    eligible: false,
  },
  {
    word: "ninhos",
    eligible: false,
  },
  {
    word: "Nínive",
    eligible: false,
  },
  {
    word: "nínsia",
    eligible: false,
  },
  {
    word: "nióbio",
    eligible: false,
  },
  {
    word: "níparo",
    eligible: false,
  },
  {
    word: "nipene",
    eligible: false,
  },
  {
    word: "nipeva",
    eligible: false,
  },
  {
    word: "níquel",
    eligible: false,
  },
  {
    word: "niquim",
    eligible: false,
  },
  {
    word: "niroca",
    eligible: false,
  },
  {
    word: "niscro",
    eligible: false,
  },
  {
    word: "nisina",
    eligible: false,
  },
  {
    word: "nisita",
    eligible: false,
  },
  {
    word: "nissei",
    eligible: false,
  },
  {
    word: "nitela",
    eligible: false,
  },
  {
    word: "nítido",
    eligible: false,
  },
  {
    word: "nítoes",
    eligible: false,
  },
  {
    word: "nítois",
    eligible: false,
  },
  {
    word: "nitral",
    eligible: false,
  },
  {
    word: "nitrar",
    eligible: false,
  },
  {
    word: "nitrir",
    eligible: false,
  },
  {
    word: "nitrol",
    eligible: false,
  },
  {
    word: "nítron",
    eligible: false,
  },
  {
    word: "niumbó",
    eligible: false,
  },
  {
    word: "niveal",
    eligible: false,
  },
  {
    word: "nivoso",
    eligible: false,
  },
  {
    word: "nízaro",
    eligible: false,
  },
  {
    word: "nízera",
    eligible: false,
  },
  {
    word: "njango",
    eligible: false,
  },
  {
    word: "Noadia",
    eligible: false,
  },
  {
    word: "Noboru",
    eligible: false,
  },
  {
    word: "nobres",
    eligible: false,
  },
  {
    word: "nocebo",
    eligible: false,
  },
  {
    word: "nocivo",
    eligible: false,
  },
  {
    word: "nóctua",
    eligible: false,
  },
  {
    word: "nódico",
    eligible: false,
  },
  {
    word: "nodoar",
    eligible: false,
  },
  {
    word: "nódoas",
    eligible: false,
  },
  {
    word: "nodoso",
    eligible: false,
  },
  {
    word: "nodulá",
    eligible: false,
  },
  {
    word: "nódulo",
    eligible: false,
  },
  {
    word: "Noélia",
    eligible: false,
  },
  {
    word: "noêmia",
    eligible: false,
  },
  {
    word: "nogado",
    eligible: false,
  },
  {
    word: "noitão",
    eligible: false,
  },
  {
    word: "noites",
    eligible: false,
  },
  {
    word: "noitol",
    eligible: false,
  },
  {
    word: "noival",
    eligible: false,
  },
  {
    word: "noivar",
    eligible: false,
  },
  {
    word: "noivas",
    eligible: false,
  },
  {
    word: "noivos",
    eligible: false,
  },
  {
    word: "nojice",
    eligible: false,
  },
  {
    word: "nojoso",
    eligible: false,
  },
  {
    word: "nolano",
    eligible: false,
  },
  {
    word: "nolela",
    eligible: false,
  },
  {
    word: "Noleto",
    eligible: false,
  },
  {
    word: "nolina",
    eligible: false,
  },
  {
    word: "nolita",
    eligible: false,
  },
  {
    word: "nômade",
    eligible: false,
  },
  {
    word: "nomasa",
    eligible: false,
  },
  {
    word: "nomear",
    eligible: false,
  },
  {
    word: "nômeno",
    eligible: false,
  },
  {
    word: "nômico",
    eligible: false,
  },
  {
    word: "nômina",
    eligible: false,
  },
  {
    word: "nonada",
    eligible: false,
  },
  {
    word: "nonano",
    eligible: false,
  },
  {
    word: "nonato",
    eligible: false,
  },
  {
    word: "nonavo",
    eligible: false,
  },
  {
    word: "nonena",
    eligible: false,
  },
  {
    word: "noneto",
    eligible: false,
  },
  {
    word: "nonina",
    eligible: false,
  },
  {
    word: "Nonoai",
    eligible: false,
  },
  {
    word: "nonodo",
    eligible: false,
  },
  {
    word: "nonose",
    eligible: false,
  },
  {
    word: "nonula",
    eligible: false,
  },
  {
    word: "norato",
    eligible: false,
  },
  {
    word: "norças",
    eligible: false,
  },
  {
    word: "Nórcia",
    eligible: false,
  },
  {
    word: "nórico",
    eligible: false,
  },
  {
    word: "norina",
    eligible: false,
  },
  {
    word: "norite",
    eligible: false,
  },
  {
    word: "norito",
    eligible: false,
  },
  {
    word: "normal",
    eligible: false,
  },
  {
    word: "Norman",
    eligible: false,
  },
  {
    word: "normas",
    eligible: false,
  },
  {
    word: "nórope",
    eligible: false,
  },
  {
    word: "nortão",
    eligible: false,
  },
  {
    word: "nortes",
    eligible: false,
  },
  {
    word: "nortia",
    eligible: false,
  },
  {
    word: "Nórton",
    eligible: false,
  },
  {
    word: "nosema",
    eligible: false,
  },
  {
    word: "nosite",
    eligible: false,
  },
  {
    word: "nossas",
    eligible: false,
  },
  {
    word: "nossos",
    eligible: false,
  },
  {
    word: "nóster",
    eligible: false,
  },
  {
    word: "nótafo",
    eligible: false,
  },
  {
    word: "nótero",
    eligible: false,
  },
  {
    word: "notite",
    eligible: false,
  },
  {
    word: "notôni",
    eligible: false,
  },
  {
    word: "nótops",
    eligible: false,
  },
  {
    word: "notoxo",
    eligible: false,
  },
  {
    word: "notozo",
    eligible: false,
  },
  {
    word: "nótula",
    eligible: false,
  },
  {
    word: "noturo",
    eligible: false,
  },
  {
    word: "Nouméa",
    eligible: false,
  },
  {
    word: "noutão",
    eligible: false,
  },
  {
    word: "noutes",
    eligible: false,
  },
  {
    word: "noutro",
    eligible: false,
  },
  {
    word: "Novaes",
    eligible: false,
  },
  {
    word: "novato",
    eligible: false,
  },
  {
    word: "novelo",
    eligible: false,
  },
  {
    word: "novena",
    eligible: false,
  },
  {
    word: "noveno",
    eligible: false,
  },
  {
    word: "novial",
    eligible: false,
  },
  {
    word: "novice",
    eligible: false,
  },
  {
    word: "noviço",
    eligible: false,
  },
  {
    word: "novino",
    eligible: false,
  },
  {
    word: "novita",
    eligible: false,
  },
  {
    word: "nozado",
    eligible: false,
  },
  {
    word: "nozari",
    eligible: false,
  },
  {
    word: "nozedo",
    eligible: false,
  },
  {
    word: "núbilo",
    eligible: false,
  },
  {
    word: "nublar",
    eligible: false,
  },
  {
    word: "núcego",
    eligible: false,
  },
  {
    word: "nucelo",
    eligible: false,
  },
  {
    word: "nucibe",
    eligible: false,
  },
  {
    word: "nucina",
    eligible: false,
  },
  {
    word: "núcleo",
    eligible: false,
  },
  {
    word: "nucode",
    eligible: false,
  },
  {
    word: "nucras",
    eligible: false,
  },
  {
    word: "núcula",
    eligible: false,
  },
  {
    word: "núdeos",
    eligible: false,
  },
  {
    word: "nudeza",
    eligible: false,
  },
  {
    word: "nuinho",
    eligible: false,
  },
  {
    word: "nuitão",
    eligible: false,
  },
  {
    word: "Numair",
    eligible: false,
  },
  {
    word: "númeno",
    eligible: false,
  },
  {
    word: "número",
    eligible: false,
  },
  {
    word: "númida",
    eligible: false,
  },
  {
    word: "núncio",
    eligible: false,
  },
  {
    word: "nunuma",
    eligible: false,
  },
  {
    word: "nupeba",
    eligible: false,
  },
  {
    word: "núpero",
    eligible: false,
  },
  {
    word: "nuruma",
    eligible: false,
  },
  {
    word: "nútria",
    eligible: false,
  },
  {
    word: "nutrir",
    eligible: false,
  },
  {
    word: "nutriz",
    eligible: false,
  },
  {
    word: "nuvear",
    eligible: false,
  },
  {
    word: "nuvens",
    eligible: false,
  },
  {
    word: "oaçacu",
    eligible: false,
  },
  {
    word: "oacaju",
    eligible: false,
  },
  {
    word: "oacauã",
    eligible: false,
  },
  {
    word: "oaiana",
    eligible: false,
  },
  {
    word: "oaiapi",
    eligible: false,
  },
  {
    word: "oajeru",
    eligible: false,
  },
  {
    word: "oajuru",
    eligible: false,
  },
  {
    word: "oanaçu",
    eligible: false,
  },
  {
    word: "oanani",
    eligible: false,
  },
  {
    word: "oanuçu",
    eligible: false,
  },
  {
    word: "oapina",
    eligible: false,
  },
  {
    word: "oárico",
    eligible: false,
  },
  {
    word: "oásico",
    eligible: false,
  },
  {
    word: "oasino",
    eligible: false,
  },
  {
    word: "oasita",
    eligible: false,
  },
  {
    word: "obamba",
    eligible: false,
  },
  {
    word: "Obdias",
    eligible: false,
  },
  {
    word: "obécia",
    eligible: false,
  },
  {
    word: "obélio",
    eligible: false,
  },
  {
    word: "oberar",
    eligible: false,
  },
  {
    word: "obérea",
    eligible: false,
  },
  {
    word: "Oberto",
    eligible: false,
  },
  {
    word: "Óbidos",
    eligible: false,
  },
  {
    word: "óbidos",
    eligible: false,
  },
  {
    word: "obione",
    eligible: false,
  },
  {
    word: "obipom",
    eligible: false,
  },
  {
    word: "obirim",
    eligible: false,
  },
  {
    word: "obísio",
    eligible: false,
  },
  {
    word: "objeto",
    eligible: false,
  },
  {
    word: "oblada",
    eligible: false,
  },
  {
    word: "obongo",
    eligible: false,
  },
  {
    word: "oboval",
    eligible: false,
  },
  {
    word: "obóveo",
    eligible: false,
  },
  {
    word: "obrage",
    eligible: false,
  },
  {
    word: "obreia",
    eligible: false,
  },
  {
    word: "obrima",
    eligible: false,
  },
  {
    word: "obstar",
    eligible: false,
  },
  {
    word: "obtusa",
    eligible: false,
  },
  {
    word: "obtuso",
    eligible: false,
  },
  {
    word: "obviar",
    eligible: false,
  },
  {
    word: "ocálio",
    eligible: false,
  },
  {
    word: "ocanda",
    eligible: false,
  },
  {
    word: "ocanho",
    eligible: false,
  },
  {
    word: "ocápia",
    eligible: false,
  },
  {
    word: "Ocator",
    eligible: false,
  },
  {
    word: "Ocauçu",
    eligible: false,
  },
  {
    word: "ocável",
    eligible: false,
  },
  {
    word: "oceano",
    eligible: false,
  },
  {
    word: "ocelar",
    eligible: false,
  },
  {
    word: "océleo",
    eligible: false,
  },
  {
    word: "ocíale",
    eligible: false,
  },
  {
    word: "ocíalo",
    eligible: false,
  },
  {
    word: "ocídio",
    eligible: false,
  },
  {
    word: "ocíduo",
    eligible: false,
  },
  {
    word: "ocímea",
    eligible: false,
  },
  {
    word: "ocinhé",
    eligible: false,
  },
  {
    word: "ocioso",
    eligible: false,
  },
  {
    word: "ocíroe",
    eligible: false,
  },
  {
    word: "ocisão",
    eligible: false,
  },
  {
    word: "ocítoe",
    eligible: false,
  },
  {
    word: "oclese",
    eligible: false,
  },
  {
    word: "ocluir",
    eligible: false,
  },
  {
    word: "ocluso",
    eligible: false,
  },
  {
    word: "ocótea",
    eligible: false,
  },
  {
    word: "ocozol",
    eligible: false,
  },
  {
    word: "ocrame",
    eligible: false,
  },
  {
    word: "ocrano",
    eligible: false,
  },
  {
    word: "ocrase",
    eligible: false,
  },
  {
    word: "ocroma",
    eligible: false,
  },
  {
    word: "ocrose",
    eligible: false,
  },
  {
    word: "octeca",
    eligible: false,
  },
  {
    word: "octeno",
    eligible: false,
  },
  {
    word: "octero",
    eligible: false,
  },
  {
    word: "octeto",
    eligible: false,
  },
  {
    word: "octidi",
    eligible: false,
  },
  {
    word: "octilo",
    eligible: false,
  },
  {
    word: "octino",
    eligible: false,
  },
  {
    word: "octodo",
    eligible: false,
  },
  {
    word: "octono",
    eligible: false,
  },
  {
    word: "octopo",
    eligible: false,
  },
  {
    word: "ocular",
    eligible: false,
  },
  {
    word: "óculos",
    eligible: false,
  },
  {
    word: "oculto",
    eligible: false,
  },
  {
    word: "ocumba",
    eligible: false,
  },
  {
    word: "ocupar",
    eligible: false,
  },
  {
    word: "ocuuba",
    eligible: false,
  },
  {
    word: "Odacir",
    eligible: false,
  },
  {
    word: "oddite",
    eligible: false,
  },
  {
    word: "Odécio",
    eligible: false,
  },
  {
    word: "Odélio",
    eligible: false,
  },
  {
    word: "Odemar",
    eligible: false,
  },
  {
    word: "Odense",
    eligible: false,
  },
  {
    word: "Odessa",
    eligible: false,
  },
  {
    word: "odézia",
    eligible: false,
  },
  {
    word: "Odílio",
    eligible: false,
  },
  {
    word: "Odilon",
    eligible: false,
  },
  {
    word: "odínia",
    eligible: false,
  },
  {
    word: "odioso",
    eligible: false,
  },
  {
    word: "odista",
    eligible: false,
  },
  {
    word: "odjada",
    eligible: false,
  },
  {
    word: "odonto",
    eligible: false,
  },
  {
    word: "odorar",
    eligible: false,
  },
  {
    word: "Odória",
    eligible: false,
  },
  {
    word: "odrada",
    eligible: false,
  },
  {
    word: "Oduduá",
    eligible: false,
  },
  {
    word: "Oduíno",
    eligible: false,
  },
  {
    word: "odulço",
    eligible: false,
  },
  {
    word: "Odulfo",
    eligible: false,
  },
  {
    word: "oédalo",
    eligible: false,
  },
  {
    word: "Oeiras",
    eligible: false,
  },
  {
    word: "oerudá",
    eligible: false,
  },
  {
    word: "ofaiés",
    eligible: false,
  },
  {
    word: "ofegar",
    eligible: false,
  },
  {
    word: "ofélia",
    eligible: false,
  },
  {
    word: "ofenso",
    eligible: false,
  },
  {
    word: "ofíase",
    eligible: false,
  },
  {
    word: "ofício",
    eligible: false,
  },
  {
    word: "ofídio",
    eligible: false,
  },
  {
    word: "ofigle",
    eligible: false,
  },
  {
    word: "ofione",
    eligible: false,
  },
  {
    word: "ofiope",
    eligible: false,
  },
  {
    word: "ofíopo",
    eligible: false,
  },
  {
    word: "ofírio",
    eligible: false,
  },
  {
    word: "ofisma",
    eligible: false,
  },
  {
    word: "ofiúco",
    eligible: false,
  },
  {
    word: "ofiúro",
    eligible: false,
  },
  {
    word: "ofiúsa",
    eligible: false,
  },
  {
    word: "ofônio",
    eligible: false,
  },
  {
    word: "oforia",
    eligible: false,
  },
  {
    word: "ofrite",
    eligible: false,
  },
  {
    word: "ofsete",
    eligible: false,
  },
  {
    word: "ogambá",
    eligible: false,
  },
  {
    word: "ogango",
    eligible: false,
  },
  {
    word: "ogcode",
    eligible: false,
  },
  {
    word: "ogiera",
    eligible: false,
  },
  {
    word: "ogígio",
    eligible: false,
  },
  {
    word: "ogival",
    eligible: false,
  },
  {
    word: "ogivar",
    eligible: false,
  },
  {
    word: "ogivos",
    eligible: false,
  },
  {
    word: "oglifa",
    eligible: false,
  },
  {
    word: "oguedê",
    eligible: false,
  },
  {
    word: "oguiri",
    eligible: false,
  },
  {
    word: "ogunhê",
    eligible: false,
  },
  {
    word: "oguniê",
    eligible: false,
  },
  {
    word: "ôhmico",
    eligible: false,
  },
  {
    word: "oiçais",
    eligible: false,
  },
  {
    word: "oidial",
    eligible: false,
  },
  {
    word: "oigalê",
    eligible: false,
  },
  {
    word: "oigaté",
    eligible: false,
  },
  {
    word: "oigatê",
    eligible: false,
  },
  {
    word: "oilite",
    eligible: false,
  },
  {
    word: "oirama",
    eligible: false,
  },
  {
    word: "oirana",
    eligible: false,
  },
  {
    word: "oirate",
    eligible: false,
  },
  {
    word: "oirega",
    eligible: false,
  },
  {
    word: "oiriço",
    eligible: false,
  },
  {
    word: "oirote",
    eligible: false,
  },
  {
    word: "oirudo",
    eligible: false,
  },
  {
    word: "oitava",
    eligible: false,
  },
  {
    word: "oitavo",
    eligible: false,
  },
  {
    word: "oitchi",
    eligible: false,
  },
  {
    word: "oiteda",
    eligible: false,
  },
  {
    word: "oitibá",
    eligible: false,
  },
  {
    word: "oitibó",
    eligible: false,
  },
  {
    word: "oitiva",
    eligible: false,
  },
  {
    word: "oitona",
    eligible: false,
  },
  {
    word: "ojamba",
    eligible: false,
  },
  {
    word: "ojambi",
    eligible: false,
  },
  {
    word: "oláceo",
    eligible: false,
  },
  {
    word: "olampi",
    eligible: false,
  },
  {
    word: "olandi",
    eligible: false,
  },
  {
    word: "olangá",
    eligible: false,
  },
  {
    word: "olaria",
    eligible: false,
  },
  {
    word: "oleale",
    eligible: false,
  },
  {
    word: "oléase",
    eligible: false,
  },
  {
    word: "oleato",
    eligible: false,
  },
  {
    word: "oleico",
    eligible: false,
  },
  {
    word: "oleído",
    eligible: false,
  },
  {
    word: "oleila",
    eligible: false,
  },
  {
    word: "oleílo",
    eligible: false,
  },
  {
    word: "oleína",
    eligible: false,
  },
  {
    word: "oleiro",
    eligible: false,
  },
  {
    word: "olente",
    eligible: false,
  },
  {
    word: "oleona",
    eligible: false,
  },
  {
    word: "oleoso",
    eligible: false,
  },
  {
    word: "oleula",
    eligible: false,
  },
  {
    word: "oleúla",
    eligible: false,
  },
  {
    word: "olhado",
    eligible: false,
  },
  {
    word: "olhete",
    eligible: false,
  },
  {
    word: "olhico",
    eligible: false,
  },
  {
    word: "olhuda",
    eligible: false,
  },
  {
    word: "olhudo",
    eligible: false,
  },
  {
    word: "oliari",
    eligible: false,
  },
  {
    word: "olíaro",
    eligible: false,
  },
  {
    word: "olibro",
    eligible: false,
  },
  {
    word: "olígia",
    eligible: false,
  },
  {
    word: "olimpo",
    eligible: false,
  },
  {
    word: "Olinda",
    eligible: false,
  },
  {
    word: "olínea",
    eligible: false,
  },
  {
    word: "olinto",
    eligible: false,
  },
  {
    word: "Oliose",
    eligible: false,
  },
  {
    word: "olípio",
    eligible: false,
  },
  {
    word: "olíreo",
    eligible: false,
  },
  {
    word: "olíria",
    eligible: false,
  },
  {
    word: "olival",
    eligible: false,
  },
  {
    word: "olivar",
    eligible: false,
  },
  {
    word: "olivas",
    eligible: false,
  },
  {
    word: "olivel",
    eligible: false,
  },
  {
    word: "olíveo",
    eligible: false,
  },
  {
    word: "Oliver",
    eligible: false,
  },
  {
    word: "Olivia",
    eligible: false,
  },
  {
    word: "Olívio",
    eligible: false,
  },
  {
    word: "olmeca",
    eligible: false,
  },
  {
    word: "olmedo",
    eligible: false,
  },
  {
    word: "Olocum",
    eligible: false,
  },
  {
    word: "Olodum",
    eligible: false,
  },
  {
    word: "olofro",
    eligible: false,
  },
  {
    word: "olongo",
    eligible: false,
  },
  {
    word: "Olorum",
    eligible: false,
  },
  {
    word: "olumué",
    eligible: false,
  },
  {
    word: "omácio",
    eligible: false,
  },
  {
    word: "omádio",
    eligible: false,
  },
  {
    word: "omafia",
    eligible: false,
  },
  {
    word: "omagra",
    eligible: false,
  },
  {
    word: "omágua",
    eligible: false,
  },
  {
    word: "omálio",
    eligible: false,
  },
  {
    word: "omanda",
    eligible: false,
  },
  {
    word: "omanto",
    eligible: false,
  },
  {
    word: "omarim",
    eligible: false,
  },
  {
    word: "omáseo",
    eligible: false,
  },
  {
    word: "omátio",
    eligible: false,
  },
  {
    word: "omátua",
    eligible: false,
  },
  {
    word: "ombaca",
    eligible: false,
  },
  {
    word: "ombulo",
    eligible: false,
  },
  {
    word: "omenié",
    eligible: false,
  },
  {
    word: "omento",
    eligible: false,
  },
  {
    word: "omerti",
    eligible: false,
  },
  {
    word: "ômetro",
    eligible: false,
  },
  {
    word: "omíada",
    eligible: false,
  },
  {
    word: "omicro",
    eligible: false,
  },
  {
    word: "ominar",
    eligible: false,
  },
  {
    word: "omisso",
    eligible: false,
  },
  {
    word: "omitir",
    eligible: false,
  },
  {
    word: "omoflo",
    eligible: false,
  },
  {
    word: "omofro",
    eligible: false,
  },
  {
    word: "omoide",
    eligible: false,
  },
  {
    word: "omorga",
    eligible: false,
  },
  {
    word: "ompata",
    eligible: false,
  },
  {
    word: "omumbo",
    eligible: false,
  },
  {
    word: "onagre",
    eligible: false,
  },
  {
    word: "onagro",
    eligible: false,
  },
  {
    word: "onceia",
    eligible: false,
  },
  {
    word: "oncial",
    eligible: false,
  },
  {
    word: "oncima",
    eligible: false,
  },
  {
    word: "oncoba",
    eligible: false,
  },
  {
    word: "oncode",
    eligible: false,
  },
  {
    word: "oncose",
    eligible: false,
  },
  {
    word: "ondaca",
    eligible: false,
  },
  {
    word: "ondaio",
    eligible: false,
  },
  {
    word: "ondala",
    eligible: false,
  },
  {
    word: "ondear",
    eligible: false,
  },
  {
    word: "ondele",
    eligible: false,
  },
  {
    word: "ondina",
    eligible: false,
  },
  {
    word: "ondjói",
    eligible: false,
  },
  {
    word: "ondoar",
    eligible: false,
  },
  {
    word: "onduda",
    eligible: false,
  },
  {
    word: "ôndula",
    eligible: false,
  },
  {
    word: "oneída",
    eligible: false,
  },
  {
    word: "onense",
    eligible: false,
  },
  {
    word: "onerar",
    eligible: false,
  },
  {
    word: "Onésio",
    eligible: false,
  },
  {
    word: "onfalo",
    eligible: false,
  },
  {
    word: "ongebo",
    eligible: false,
  },
  {
    word: "ongolo",
    eligible: false,
  },
  {
    word: "ongoti",
    eligible: false,
  },
  {
    word: "ongulo",
    eligible: false,
  },
  {
    word: "onhame",
    eligible: false,
  },
  {
    word: "onhima",
    eligible: false,
  },
  {
    word: "onhoca",
    eligible: false,
  },
  {
    word: "onhuio",
    eligible: false,
  },
  {
    word: "oniama",
    eligible: false,
  },
  {
    word: "Ônibus",
    eligible: false,
  },
  {
    word: "ônibus",
    eligible: false,
  },
  {
    word: "onicha",
    eligible: false,
  },
  {
    word: "oníneo",
    eligible: false,
  },
  {
    word: "oninlé",
    eligible: false,
  },
  {
    word: "onioso",
    eligible: false,
  },
  {
    word: "onisco",
    eligible: false,
  },
  {
    word: "onítis",
    eligible: false,
  },
  {
    word: "online",
    eligible: false,
  },
  {
    word: "Onofre",
    eligible: false,
  },
  {
    word: "onônis",
    eligible: false,
  },
  {
    word: "onosma",
    eligible: false,
  },
  {
    word: "ontero",
    eligible: false,
  },
  {
    word: "ôntico",
    eligible: false,
  },
  {
    word: "ontivo",
    eligible: false,
  },
  {
    word: "onúfis",
    eligible: false,
  },
  {
    word: "onundo",
    eligible: false,
  },
  {
    word: "onunha",
    eligible: false,
  },
  {
    word: "onussi",
    eligible: false,
  },
  {
    word: "onusto",
    eligible: false,
  },
  {
    word: "oócito",
    eligible: false,
  },
  {
    word: "oófago",
    eligible: false,
  },
  {
    word: "oófito",
    eligible: false,
  },
  {
    word: "oóforo",
    eligible: false,
  },
  {
    word: "oógamo",
    eligible: false,
  },
  {
    word: "oogema",
    eligible: false,
  },
  {
    word: "oolema",
    eligible: false,
  },
  {
    word: "oólise",
    eligible: false,
  },
  {
    word: "oólito",
    eligible: false,
  },
  {
    word: "oótide",
    eligible: false,
  },
  {
    word: "oótipo",
    eligible: false,
  },
  {
    word: "oótoco",
    eligible: false,
  },
  {
    word: "oótoma",
    eligible: false,
  },
  {
    word: "opacar",
    eligible: false,
  },
  {
    word: "opacos",
    eligible: false,
  },
  {
    word: "opaiés",
    eligible: false,
  },
  {
    word: "opalas",
    eligible: false,
  },
  {
    word: "opanol",
    eligible: false,
  },
  {
    word: "opatro",
    eligible: false,
  },
  {
    word: "opável",
    eligible: false,
  },
  {
    word: "opelés",
    eligible: false,
  },
  {
    word: "operar",
    eligible: false,
  },
  {
    word: "óperas",
    eligible: false,
  },
  {
    word: "operto",
    eligible: false,
  },
  {
    word: "opiato",
    eligible: false,
  },
  {
    word: "opilar",
    eligible: false,
  },
  {
    word: "opília",
    eligible: false,
  },
  {
    word: "opímio",
    eligible: false,
  },
  {
    word: "opinar",
    eligible: false,
  },
  {
    word: "opinás",
    eligible: false,
  },
  {
    word: "opisto",
    eligible: false,
  },
  {
    word: "opízia",
    eligible: false,
  },
  {
    word: "oplomo",
    eligible: false,
  },
  {
    word: "opóleo",
    eligible: false,
  },
  {
    word: "oponal",
    eligible: false,
  },
  {
    word: "opsina",
    eligible: false,
  },
  {
    word: "óptico",
    eligible: false,
  },
  {
    word: "optose",
    eligible: false,
  },
  {
    word: "opuluí",
    eligible: false,
  },
  {
    word: "oquedê",
    eligible: false,
  },
  {
    word: "oquina",
    eligible: false,
  },
  {
    word: "orabim",
    eligible: false,
  },
  {
    word: "oração",
    eligible: false,
  },
  {
    word: "Orália",
    eligible: false,
  },
  {
    word: "oranês",
    eligible: false,
  },
  {
    word: "orange",
    eligible: false,
  },
  {
    word: "orango",
    eligible: false,
  },
  {
    word: "orário",
    eligible: false,
  },
  {
    word: "órbita",
    eligible: false,
  },
  {
    word: "orcela",
    eligible: false,
  },
  {
    word: "orcina",
    eligible: false,
  },
  {
    word: "orcino",
    eligible: false,
  },
  {
    word: "ordens",
    eligible: false,
  },
  {
    word: "ordume",
    eligible: false,
  },
  {
    word: "oreáde",
    eligible: false,
  },
  {
    word: "oréade",
    eligible: false,
  },
  {
    word: "orecta",
    eligible: false,
  },
  {
    word: "orégão",
    eligible: false,
  },
  {
    word: "óregão",
    eligible: false,
  },
  {
    word: "Oregim",
    eligible: false,
  },
  {
    word: "oreino",
    eligible: false,
  },
  {
    word: "orelha",
    eligible: false,
  },
  {
    word: "orélia",
    eligible: false,
  },
  {
    word: "orenda",
    eligible: false,
  },
  {
    word: "oressa",
    eligible: false,
  },
  {
    word: "orexia",
    eligible: false,
  },
  {
    word: "orfeão",
    eligible: false,
  },
  {
    word: "orfeon",
    eligible: false,
  },
  {
    word: "órfico",
    eligible: false,
  },
  {
    word: "orgada",
    eligible: false,
  },
  {
    word: "orgiar",
    eligible: false,
  },
  {
    word: "orgíia",
    eligible: false,
  },
  {
    word: "orgona",
    eligible: false,
  },
  {
    word: "Oriana",
    eligible: false,
  },
  {
    word: "orício",
    eligible: false,
  },
  {
    word: "oricte",
    eligible: false,
  },
  {
    word: "oricto",
    eligible: false,
  },
  {
    word: "origem",
    eligible: false,
  },
  {
    word: "orígia",
    eligible: false,
  },
  {
    word: "origma",
    eligible: false,
  },
  {
    word: "orilha",
    eligible: false,
  },
  {
    word: "orinco",
    eligible: false,
  },
  {
    word: "oríolo",
    eligible: false,
  },
  {
    word: "oriqui",
    eligible: false,
  },
  {
    word: "orismo",
    eligible: false,
  },
  {
    word: "orisol",
    eligible: false,
  },
  {
    word: "orisso",
    eligible: false,
  },
  {
    word: "orítia",
    eligible: false,
  },
  {
    word: "orixás",
    eligible: false,
  },
  {
    word: "orízeo",
    eligible: false,
  },
  {
    word: "orlaia",
    eligible: false,
  },
  {
    word: "orleta",
    eligible: false,
  },
  {
    word: "orlita",
    eligible: false,
  },
  {
    word: "ormiro",
    eligible: false,
  },
  {
    word: "ormulu",
    eligible: false,
  },
  {
    word: "ornato",
    eligible: false,
  },
  {
    word: "ornear",
    eligible: false,
  },
  {
    word: "ornito",
    eligible: false,
  },
  {
    word: "oróbio",
    eligible: false,
  },
  {
    word: "oroide",
    eligible: false,
  },
  {
    word: "oroípo",
    eligible: false,
  },
  {
    word: "oronga",
    eligible: false,
  },
  {
    word: "oronja",
    eligible: false,
  },
  {
    word: "oroode",
    eligible: false,
  },
  {
    word: "orovaí",
    eligible: false,
  },
  {
    word: "oroval",
    eligible: false,
  },
  {
    word: "orreta",
    eligible: false,
  },
  {
    word: "orsamo",
    eligible: false,
  },
  {
    word: "orsela",
    eligible: false,
  },
  {
    word: "orseta",
    eligible: false,
  },
  {
    word: "orsilo",
    eligible: false,
  },
  {
    word: "Orsini",
    eligible: false,
  },
  {
    word: "Ortega",
    eligible: false,
  },
  {
    word: "orteia",
    eligible: false,
  },
  {
    word: "órtese",
    eligible: false,
  },
  {
    word: "ortiga",
    eligible: false,
  },
  {
    word: "ortite",
    eligible: false,
  },
  {
    word: "ortivo",
    eligible: false,
  },
  {
    word: "ortope",
    eligible: false,
  },
  {
    word: "ortose",
    eligible: false,
  },
  {
    word: "oruncó",
    eligible: false,
  },
  {
    word: "orungo",
    eligible: false,
  },
  {
    word: "orungu",
    eligible: false,
  },
  {
    word: "orveto",
    eligible: false,
  },
  {
    word: "Orvile",
    eligible: false,
  },
  {
    word: "orzaga",
    eligible: false,
  },
  {
    word: "orzuna",
    eligible: false,
  },
  {
    word: "Osasco",
    eligible: false,
  },
  {
    word: "osassa",
    eligible: false,
  },
  {
    word: "Oscavu",
    eligible: false,
  },
  {
    word: "ósculo",
    eligible: false,
  },
  {
    word: "Oseias",
    eligible: false,
  },
  {
    word: "oséria",
    eligible: false,
  },
  {
    word: "osfíia",
    eligible: false,
  },
  {
    word: "osfite",
    eligible: false,
  },
  {
    word: "osídio",
    eligible: false,
  },
  {
    word: "Osíris",
    eligible: false,
  },
  {
    word: "osmato",
    eligible: false,
  },
  {
    word: "osmero",
    eligible: false,
  },
  {
    word: "ósmico",
    eligible: false,
  },
  {
    word: "osmina",
    eligible: false,
  },
  {
    word: "Osmiro",
    eligible: false,
  },
  {
    word: "osmita",
    eligible: false,
  },
  {
    word: "osmose",
    eligible: false,
  },
  {
    word: "Osório",
    eligible: false,
  },
  {
    word: "ossada",
    eligible: false,
  },
  {
    word: "ossama",
    eligible: false,
  },
  {
    word: "óssame",
    eligible: false,
  },
  {
    word: "ossana",
    eligible: false,
  },
  {
    word: "osseia",
    eligible: false,
  },
  {
    word: "osseno",
    eligible: false,
  },
  {
    word: "osseto",
    eligible: false,
  },
  {
    word: "ossima",
    eligible: false,
  },
  {
    word: "ossobó",
    eligible: false,
  },
  {
    word: "ossoso",
    eligible: false,
  },
  {
    word: "ossudo",
    eligible: false,
  },
  {
    word: "ostaga",
    eligible: false,
  },
  {
    word: "ostaxa",
    eligible: false,
  },
  {
    word: "osteon",
    eligible: false,
  },
  {
    word: "ostial",
    eligible: false,
  },
  {
    word: "ostite",
    eligible: false,
  },
  {
    word: "ostras",
    eligible: false,
  },
  {
    word: "Osvino",
    eligible: false,
  },
  {
    word: "otanto",
    eligible: false,
  },
  {
    word: "otário",
    eligible: false,
  },
  {
    word: "otávia",
    eligible: false,
  },
  {
    word: "Otávio",
    eligible: false,
  },
  {
    word: "otélia",
    eligible: false,
  },
  {
    word: "otídea",
    eligible: false,
  },
  {
    word: "otídio",
    eligible: false,
  },
  {
    word: "otomão",
    eligible: false,
  },
  {
    word: "Otomar",
    eligible: false,
  },
  {
    word: "otomba",
    eligible: false,
  },
  {
    word: "otômio",
    eligible: false,
  },
  {
    word: "otônia",
    eligible: false,
  },
  {
    word: "otoque",
    eligible: false,
  },
  {
    word: "ototós",
    eligible: false,
  },
  {
    word: "Ottawa",
    eligible: false,
  },
  {
    word: "otuqué",
    eligible: false,
  },
  {
    word: "ouquia",
    eligible: false,
  },
  {
    word: "ourama",
    eligible: false,
  },
  {
    word: "ourana",
    eligible: false,
  },
  {
    word: "ourate",
    eligible: false,
  },
  {
    word: "oureça",
    eligible: false,
  },
  {
    word: "ourego",
    eligible: false,
  },
  {
    word: "ouriço",
    eligible: false,
  },
  {
    word: "ourolo",
    eligible: false,
  },
  {
    word: "ourudo",
    eligible: false,
  },
  {
    word: "ousiar",
    eligible: false,
  },
  {
    word: "ousios",
    eligible: false,
  },
  {
    word: "outiva",
    eligible: false,
  },
  {
    word: "Outono",
    eligible: false,
  },
  {
    word: "outono",
    eligible: false,
  },
  {
    word: "outrem",
    eligible: false,
  },
  {
    word: "ouvido",
    eligible: false,
  },
  {
    word: "ovação",
    eligible: false,
  },
  {
    word: "ovalar",
    eligible: false,
  },
  {
    word: "ovambo",
    eligible: false,
  },
  {
    word: "ovampo",
    eligible: false,
  },
  {
    word: "ovário",
    eligible: false,
  },
  {
    word: "oveiro",
    eligible: false,
  },
  {
    word: "ovelha",
    eligible: false,
  },
  {
    word: "ovença",
    eligible: false,
  },
  {
    word: "oviado",
    eligible: false,
  },
  {
    word: "ovídeo",
    eligible: false,
  },
  {
    word: "Ovídio",
    eligible: false,
  },
  {
    word: "Oviedo",
    eligible: false,
  },
  {
    word: "oviela",
    eligible: false,
  },
  {
    word: "ovinha",
    eligible: false,
  },
  {
    word: "ovismo",
    eligible: false,
  },
  {
    word: "ovogal",
    eligible: false,
  },
  {
    word: "ovoide",
    eligible: false,
  },
  {
    word: "ovular",
    eligible: false,
  },
  {
    word: "oxalil",
    eligible: false,
  },
  {
    word: "oxalme",
    eligible: false,
  },
  {
    word: "oxápio",
    eligible: false,
  },
  {
    word: "oxatre",
    eligible: false,
  },
  {
    word: "oxazol",
    eligible: false,
  },
  {
    word: "oxente",
    eligible: false,
  },
  {
    word: "Oxford",
    eligible: false,
  },
  {
    word: "oxford",
    eligible: false,
  },
  {
    word: "oxíbia",
    eligible: false,
  },
  {
    word: "oxidar",
    eligible: false,
  },
  {
    word: "oxídio",
    eligible: false,
  },
  {
    word: "oxíeco",
    eligible: false,
  },
  {
    word: "oxílio",
    eligible: false,
  },
  {
    word: "oximel",
    eligible: false,
  },
  {
    word: "oxínoe",
    eligible: false,
  },
  {
    word: "oxíone",
    eligible: false,
  },
  {
    word: "oxiope",
    eligible: false,
  },
  {
    word: "oxiria",
    eligible: false,
  },
  {
    word: "oxiura",
    eligible: false,
  },
  {
    word: "oxiúre",
    eligible: false,
  },
  {
    word: "oxiúro",
    eligible: false,
  },
  {
    word: "oxóleo",
    eligible: false,
  },
  {
    word: "oxônio",
    eligible: false,
  },
  {
    word: "ozagre",
    eligible: false,
  },
  {
    word: "ozíneo",
    eligible: false,
  },
  {
    word: "ozóbia",
    eligible: false,
  },
  {
    word: "ozonar",
    eligible: false,
  },
  {
    word: "ozônio",
    eligible: false,
  },
  {
    word: "ozóroa",
    eligible: false,
  },
  {
    word: "paanga",
    eligible: false,
  },
  {
    word: "pabola",
    eligible: false,
  },
  {
    word: "pábulo",
    eligible: false,
  },
  {
    word: "pacaás",
    eligible: false,
  },
  {
    word: "pacaço",
    eligible: false,
  },
  {
    word: "pacaiá",
    eligible: false,
  },
  {
    word: "pacaio",
    eligible: false,
  },
  {
    word: "pacajá",
    eligible: false,
  },
  {
    word: "pacala",
    eligible: false,
  },
  {
    word: "pacamá",
    eligible: false,
  },
  {
    word: "pacará",
    eligible: false,
  },
  {
    word: "pacaré",
    eligible: false,
  },
  {
    word: "pacari",
    eligible: false,
  },
  {
    word: "pacaso",
    eligible: false,
  },
  {
    word: "pacato",
    eligible: false,
  },
  {
    word: "pacatu",
    eligible: false,
  },
  {
    word: "pachel",
    eligible: false,
  },
  {
    word: "pachto",
    eligible: false,
  },
  {
    word: "pacite",
    eligible: false,
  },
  {
    word: "pacoba",
    eligible: false,
  },
  {
    word: "pacoca",
    eligible: false,
  },
  {
    word: "paçoca",
    eligible: false,
  },
  {
    word: "pacolé",
    eligible: false,
  },
  {
    word: "pacote",
    eligible: false,
  },
  {
    word: "pacoté",
    eligible: false,
  },
  {
    word: "pacotê",
    eligible: false,
  },
  {
    word: "Pacoti",
    eligible: false,
  },
  {
    word: "pacova",
    eligible: false,
  },
  {
    word: "pacová",
    eligible: false,
  },
  {
    word: "pactar",
    eligible: false,
  },
  {
    word: "pactos",
    eligible: false,
  },
  {
    word: "pacuás",
    eligible: false,
  },
  {
    word: "pacubo",
    eligible: false,
  },
  {
    word: "pacuçu",
    eligible: false,
  },
  {
    word: "Pacujá",
    eligible: false,
  },
  {
    word: "pacula",
    eligible: false,
  },
  {
    word: "pacumã",
    eligible: false,
  },
  {
    word: "pacuna",
    eligible: false,
  },
  {
    word: "pacuri",
    eligible: false,
  },
  {
    word: "padane",
    eligible: false,
  },
  {
    word: "padelo",
    eligible: false,
  },
  {
    word: "padida",
    eligible: false,
  },
  {
    word: "padina",
    eligible: false,
  },
  {
    word: "padixá",
    eligible: false,
  },
  {
    word: "padixo",
    eligible: false,
  },
  {
    word: "padral",
    eligible: false,
  },
  {
    word: "padrão",
    eligible: false,
  },
  {
    word: "padrar",
    eligible: false,
  },
  {
    word: "padres",
    eligible: false,
  },
  {
    word: "paelha",
    eligible: false,
  },
  {
    word: "paélia",
    eligible: false,
  },
  {
    word: "paella",
    eligible: false,
  },
  {
    word: "pagaga",
    eligible: false,
  },
  {
    word: "pagala",
    eligible: false,
  },
  {
    word: "págasa",
    eligible: false,
  },
  {
    word: "pagelo",
    eligible: false,
  },
  {
    word: "pagiço",
    eligible: false,
  },
  {
    word: "Pagiel",
    eligible: false,
  },
  {
    word: "página",
    eligible: false,
  },
  {
    word: "pagito",
    eligible: false,
  },
  {
    word: "pagode",
    eligible: false,
  },
  {
    word: "pagodô",
    eligible: false,
  },
  {
    word: "paguel",
    eligible: false,
  },
  {
    word: "paguer",
    eligible: false,
  },
  {
    word: "paguma",
    eligible: false,
  },
  {
    word: "paguro",
    eligible: false,
  },
  {
    word: "paiaba",
    eligible: false,
  },
  {
    word: "paiacu",
    eligible: false,
  },
  {
    word: "paiaiá",
    eligible: false,
  },
  {
    word: "paiana",
    eligible: false,
  },
  {
    word: "paídia",
    eligible: false,
  },
  {
    word: "paiena",
    eligible: false,
  },
  {
    word: "pailão",
    eligible: false,
  },
  {
    word: "painas",
    eligible: false,
  },
  {
    word: "painço",
    eligible: false,
  },
  {
    word: "painel",
    eligible: false,
  },
  {
    word: "painho",
    eligible: false,
  },
  {
    word: "pairar",
    eligible: false,
  },
  {
    word: "Países",
    eligible: false,
  },
  {
    word: "países",
    eligible: false,
  },
  {
    word: "paiurá",
    eligible: false,
  },
  {
    word: "paivar",
    eligible: false,
  },
  {
    word: "paivos",
    eligible: false,
  },
  {
    word: "paixão",
    eligible: false,
  },
  {
    word: "paixol",
    eligible: false,
  },
  {
    word: "paizão",
    eligible: false,
  },
  {
    word: "pajade",
    eligible: false,
  },
  {
    word: "pajana",
    eligible: false,
  },
  {
    word: "pajear",
    eligible: false,
  },
  {
    word: "pajião",
    eligible: false,
  },
  {
    word: "pajola",
    eligible: false,
  },
  {
    word: "pajurá",
    eligible: false,
  },
  {
    word: "pajuru",
    eligible: false,
  },
  {
    word: "palace",
    eligible: false,
  },
  {
    word: "pálace",
    eligible: false,
  },
  {
    word: "pálade",
    eligible: false,
  },
  {
    word: "palado",
    eligible: false,
  },
  {
    word: "palaiê",
    eligible: false,
  },
  {
    word: "palaio",
    eligible: false,
  },
  {
    word: "palama",
    eligible: false,
  },
  {
    word: "pálamo",
    eligible: false,
  },
  {
    word: "palapa",
    eligible: false,
  },
  {
    word: "palato",
    eligible: false,
  },
  {
    word: "palave",
    eligible: false,
  },
  {
    word: "palavi",
    eligible: false,
  },
  {
    word: "palávi",
    eligible: false,
  },
  {
    word: "pálavi",
    eligible: false,
  },
  {
    word: "paleal",
    eligible: false,
  },
  {
    word: "palear",
    eligible: false,
  },
  {
    word: "paleco",
    eligible: false,
  },
  {
    word: "palefe",
    eligible: false,
  },
  {
    word: "palega",
    eligible: false,
  },
  {
    word: "palene",
    eligible: false,
  },
  {
    word: "paletó",
    eligible: false,
  },
  {
    word: "palhal",
    eligible: false,
  },
  {
    word: "palhão",
    eligible: false,
  },
  {
    word: "palhar",
    eligible: false,
  },
  {
    word: "palhas",
    eligible: false,
  },
  {
    word: "palhim",
    eligible: false,
  },
  {
    word: "palial",
    eligible: false,
  },
  {
    word: "paliar",
    eligible: false,
  },
  {
    word: "palibe",
    eligible: false,
  },
  {
    word: "paliça",
    eligible: false,
  },
  {
    word: "pálico",
    eligible: false,
  },
  {
    word: "pálida",
    eligible: false,
  },
  {
    word: "pálido",
    eligible: false,
  },
  {
    word: "pálios",
    eligible: false,
  },
  {
    word: "palito",
    eligible: false,
  },
  {
    word: "paliza",
    eligible: false,
  },
  {
    word: "palmal",
    eligible: false,
  },
  {
    word: "palmar",
    eligible: false,
  },
  {
    word: "palmas",
    eligible: false,
  },
  {
    word: "pálmer",
    eligible: false,
  },
  {
    word: "palmos",
    eligible: false,
  },
  {
    word: "palode",
    eligible: false,
  },
  {
    word: "paloio",
    eligible: false,
  },
  {
    word: "palolo",
    eligible: false,
  },
  {
    word: "palpar",
    eligible: false,
  },
  {
    word: "palpos",
    eligible: false,
  },
  {
    word: "palrão",
    eligible: false,
  },
  {
    word: "palrar",
    eligible: false,
  },
  {
    word: "pálrea",
    eligible: false,
  },
  {
    word: "palude",
    eligible: false,
  },
  {
    word: "paludo",
    eligible: false,
  },
  {
    word: "palumo",
    eligible: false,
  },
  {
    word: "paluta",
    eligible: false,
  },
  {
    word: "pamaná",
    eligible: false,
  },
  {
    word: "pamari",
    eligible: false,
  },
  {
    word: "Pâmela",
    eligible: false,
  },
  {
    word: "pamonã",
    eligible: false,
  },
  {
    word: "pampas",
    eligible: false,
  },
  {
    word: "pamplo",
    eligible: false,
  },
  {
    word: "pampos",
    eligible: false,
  },
  {
    word: "pampuã",
    eligible: false,
  },
  {
    word: "panaba",
    eligible: false,
  },
  {
    word: "panaca",
    eligible: false,
  },
  {
    word: "pânace",
    eligible: false,
  },
  {
    word: "panacu",
    eligible: false,
  },
  {
    word: "Panamá",
    eligible: false,
  },
  {
    word: "panamá",
    eligible: false,
  },
  {
    word: "panari",
    eligible: false,
  },
  {
    word: "panaso",
    eligible: false,
  },
  {
    word: "panati",
    eligible: false,
  },
  {
    word: "panazo",
    eligible: false,
  },
  {
    word: "pancão",
    eligible: false,
  },
  {
    word: "pancar",
    eligible: false,
  },
  {
    word: "panças",
    eligible: false,
  },
  {
    word: "Pancho",
    eligible: false,
  },
  {
    word: "pancuã",
    eligible: false,
  },
  {
    word: "pandal",
    eligible: false,
  },
  {
    word: "pandar",
    eligible: false,
  },
  {
    word: "pandas",
    eligible: false,
  },
  {
    word: "pândio",
    eligible: false,
  },
  {
    word: "pandos",
    eligible: false,
  },
  {
    word: "pandur",
    eligible: false,
  },
  {
    word: "Paneia",
    eligible: false,
  },
  {
    word: "panela",
    eligible: false,
  },
  {
    word: "panelo",
    eligible: false,
  },
  {
    word: "panema",
    eligible: false,
  },
  {
    word: "panete",
    eligible: false,
  },
  {
    word: "pangar",
    eligible: false,
  },
  {
    word: "pangau",
    eligible: false,
  },
  {
    word: "pangeu",
    eligible: false,
  },
  {
    word: "pângio",
    eligible: false,
  },
  {
    word: "pangos",
    eligible: false,
  },
  {
    word: "panhão",
    eligible: false,
  },
  {
    word: "panico",
    eligible: false,
  },
  {
    word: "paniço",
    eligible: false,
  },
  {
    word: "pânico",
    eligible: false,
  },
  {
    word: "panino",
    eligible: false,
  },
  {
    word: "panoca",
    eligible: false,
  },
  {
    word: "panoia",
    eligible: false,
  },
  {
    word: "panoré",
    eligible: false,
  },
  {
    word: "panoto",
    eligible: false,
  },
  {
    word: "panque",
    eligible: false,
  },
  {
    word: "pânria",
    eligible: false,
  },
  {
    word: "pantal",
    eligible: false,
  },
  {
    word: "pânteo",
    eligible: false,
  },
  {
    word: "panteu",
    eligible: false,
  },
  {
    word: "pantim",
    eligible: false,
  },
  {
    word: "pantum",
    eligible: false,
  },
  {
    word: "panzer",
    eligible: false,
  },
  {
    word: "papago",
    eligible: false,
  },
  {
    word: "papaia",
    eligible: false,
  },
  {
    word: "papais",
    eligible: false,
  },
  {
    word: "papaná",
    eligible: false,
  },
  {
    word: "papari",
    eligible: false,
  },
  {
    word: "papata",
    eligible: false,
  },
  {
    word: "papear",
    eligible: false,
  },
  {
    word: "papeás",
    eligible: false,
  },
  {
    word: "papéis",
    eligible: false,
  },
  {
    word: "papiar",
    eligible: false,
  },
  {
    word: "papilo",
    eligible: false,
  },
  {
    word: "papiri",
    eligible: false,
  },
  {
    word: "papiro",
    eligible: false,
  },
  {
    word: "papisa",
    eligible: false,
  },
  {
    word: "papita",
    eligible: false,
  },
  {
    word: "papões",
    eligible: false,
  },
  {
    word: "papola",
    eligible: false,
  },
  {
    word: "paposo",
    eligible: false,
  },
  {
    word: "papote",
    eligible: false,
  },
  {
    word: "paptox",
    eligible: false,
  },
  {
    word: "papuco",
    eligible: false,
  },
  {
    word: "papuda",
    eligible: false,
  },
  {
    word: "papudo",
    eligible: false,
  },
  {
    word: "pápulo",
    eligible: false,
  },
  {
    word: "parabu",
    eligible: false,
  },
  {
    word: "parado",
    eligible: false,
  },
  {
    word: "párago",
    eligible: false,
  },
  {
    word: "parajá",
    eligible: false,
  },
  {
    word: "paraju",
    eligible: false,
  },
  {
    word: "páralo",
    eligible: false,
  },
  {
    word: "páramo",
    eligible: false,
  },
  {
    word: "Parana",
    eligible: false,
  },
  {
    word: "Paraná",
    eligible: false,
  },
  {
    word: "paraná",
    eligible: false,
  },
  {
    word: "paranã",
    eligible: false,
  },
  {
    word: "parano",
    eligible: false,
  },
  {
    word: "parapa",
    eligible: false,
  },
  {
    word: "parari",
    eligible: false,
  },
  {
    word: "pararu",
    eligible: false,
  },
  {
    word: "parati",
    eligible: false,
  },
  {
    word: "Paraty",
    eligible: false,
  },
  {
    word: "parauá",
    eligible: false,
  },
  {
    word: "paravá",
    eligible: false,
  },
  {
    word: "parbão",
    eligible: false,
  },
  {
    word: "parcel",
    eligible: false,
  },
  {
    word: "parche",
    eligible: false,
  },
  {
    word: "parcho",
    eligible: false,
  },
  {
    word: "pardal",
    eligible: false,
  },
  {
    word: "pardar",
    eligible: false,
  },
  {
    word: "pardas",
    eligible: false,
  },
  {
    word: "pardau",
    eligible: false,
  },
  {
    word: "pardês",
    eligible: false,
  },
  {
    word: "pardos",
    eligible: false,
  },
  {
    word: "parear",
    eligible: false,
  },
  {
    word: "pareca",
    eligible: false,
  },
  {
    word: "parece",
    eligible: false,
  },
  {
    word: "pareci",
    eligible: false,
  },
  {
    word: "parede",
    eligible: false,
  },
  {
    word: "parere",
    eligible: false,
  },
  {
    word: "párese",
    eligible: false,
  },
  {
    word: "Pareto",
    eligible: false,
  },
  {
    word: "pargos",
    eligible: false,
  },
  {
    word: "paricá",
    eligible: false,
  },
  {
    word: "parici",
    eligible: false,
  },
  {
    word: "parida",
    eligible: false,
  },
  {
    word: "párifa",
    eligible: false,
  },
  {
    word: "parimá",
    eligible: false,
  },
  {
    word: "parina",
    eligible: false,
  },
  {
    word: "pariri",
    eligible: false,
  },
  {
    word: "pariru",
    eligible: false,
  },
  {
    word: "Parisi",
    eligible: false,
  },
  {
    word: "paritá",
    eligible: false,
  },
  {
    word: "parlar",
    eligible: false,
  },
  {
    word: "parnão",
    eligible: false,
  },
  {
    word: "parnau",
    eligible: false,
  },
  {
    word: "Parobé",
    eligible: false,
  },
  {
    word: "pároco",
    eligible: false,
  },
  {
    word: "párodo",
    eligible: false,
  },
  {
    word: "paroli",
    eligible: false,
  },
  {
    word: "parque",
    eligible: false,
  },
  {
    word: "parqué",
    eligible: false,
  },
  {
    word: "parquê",
    eligible: false,
  },
  {
    word: "parrar",
    eligible: false,
  },
  {
    word: "párria",
    eligible: false,
  },
  {
    word: "parros",
    eligible: false,
  },
  {
    word: "parruá",
    eligible: false,
  },
  {
    word: "parsec",
    eligible: false,
  },
  {
    word: "párseo",
    eligible: false,
  },
  {
    word: "parser",
    eligible: false,
  },
  {
    word: "partes",
    eligible: false,
  },
  {
    word: "partir",
    eligible: false,
  },
  {
    word: "partos",
    eligible: false,
  },
  {
    word: "partum",
    eligible: false,
  },
  {
    word: "paruco",
    eligible: false,
  },
  {
    word: "párula",
    eligible: false,
  },
  {
    word: "paruns",
    eligible: false,
  },
  {
    word: "paruru",
    eligible: false,
  },
  {
    word: "parvão",
    eligible: false,
  },
  {
    word: "párvoa",
    eligible: false,
  },
  {
    word: "párvuo",
    eligible: false,
  },
  {
    word: "pascal",
    eligible: false,
  },
  {
    word: "pascer",
    eligible: false,
  },
  {
    word: "páscoa",
    eligible: false,
  },
  {
    word: "Paseia",
    eligible: false,
  },
  {
    word: "pasire",
    eligible: false,
  },
  {
    word: "pasmão",
    eligible: false,
  },
  {
    word: "pasmar",
    eligible: false,
  },
  {
    word: "pasmos",
    eligible: false,
  },
  {
    word: "passal",
    eligible: false,
  },
  {
    word: "passar",
    eligible: false,
  },
  {
    word: "passas",
    eligible: false,
  },
  {
    word: "Passau",
    eligible: false,
  },
  {
    word: "passer",
    eligible: false,
  },
  {
    word: "passes",
    eligible: false,
  },
  {
    word: "passos",
    eligible: false,
  },
  {
    word: "pastão",
    eligible: false,
  },
  {
    word: "pastar",
    eligible: false,
  },
  {
    word: "pastas",
    eligible: false,
  },
  {
    word: "pastel",
    eligible: false,
  },
  {
    word: "pastio",
    eligible: false,
  },
  {
    word: "pastor",
    eligible: false,
  },
  {
    word: "pastos",
    eligible: false,
  },
  {
    word: "pataca",
    eligible: false,
  },
  {
    word: "pataco",
    eligible: false,
  },
  {
    word: "pataço",
    eligible: false,
  },
  {
    word: "patado",
    eligible: false,
  },
  {
    word: "patala",
    eligible: false,
  },
  {
    word: "patamo",
    eligible: false,
  },
  {
    word: "patane",
    eligible: false,
  },
  {
    word: "Pátara",
    eligible: false,
  },
  {
    word: "patatá",
    eligible: false,
  },
  {
    word: "patauá",
    eligible: false,
  },
  {
    word: "patavá",
    eligible: false,
  },
  {
    word: "pataxó",
    eligible: false,
  },
  {
    word: "patear",
    eligible: false,
  },
  {
    word: "pateco",
    eligible: false,
  },
  {
    word: "patelo",
    eligible: false,
  },
  {
    word: "patema",
    eligible: false,
  },
  {
    word: "pátena",
    eligible: false,
  },
  {
    word: "pátera",
    eligible: false,
  },
  {
    word: "patere",
    eligible: false,
  },
  {
    word: "patiar",
    eligible: false,
  },
  {
    word: "patica",
    eligible: false,
  },
  {
    word: "pático",
    eligible: false,
  },
  {
    word: "patife",
    eligible: false,
  },
  {
    word: "pátina",
    eligible: false,
  },
  {
    word: "patira",
    eligible: false,
  },
  {
    word: "patola",
    eligible: false,
  },
  {
    word: "pátola",
    eligible: false,
  },
  {
    word: "patorá",
    eligible: false,
  },
  {
    word: "patoré",
    eligible: false,
  },
  {
    word: "patota",
    eligible: false,
  },
  {
    word: "patrão",
    eligible: false,
  },
  {
    word: "Patras",
    eligible: false,
  },
  {
    word: "pátria",
    eligible: false,
  },
  {
    word: "pátrio",
    eligible: false,
  },
  {
    word: "patrol",
    eligible: false,
  },
  {
    word: "patuás",
    eligible: false,
  },
  {
    word: "patuca",
    eligible: false,
  },
  {
    word: "patudo",
    eligible: false,
  },
  {
    word: "pátulo",
    eligible: false,
  },
  {
    word: "patuno",
    eligible: false,
  },
  {
    word: "paturé",
    eligible: false,
  },
  {
    word: "paturi",
    eligible: false,
  },
  {
    word: "pauatê",
    eligible: false,
  },
  {
    word: "Pauini",
    eligible: false,
  },
  {
    word: "paular",
    eligible: false,
  },
  {
    word: "páulia",
    eligible: false,
  },
  {
    word: "Paulos",
    eligible: false,
  },
  {
    word: "paulos",
    eligible: false,
  },
  {
    word: "pausar",
    eligible: false,
  },
  {
    word: "pausas",
    eligible: false,
  },
  {
    word: "páusea",
    eligible: false,
  },
  {
    word: "páusia",
    eligible: false,
  },
  {
    word: "pausso",
    eligible: false,
  },
  {
    word: "pautal",
    eligible: false,
  },
  {
    word: "pautar",
    eligible: false,
  },
  {
    word: "pauxis",
    eligible: false,
  },
  {
    word: "pavame",
    eligible: false,
  },
  {
    word: "pavano",
    eligible: false,
  },
  {
    word: "paveia",
    eligible: false,
  },
  {
    word: "pavena",
    eligible: false,
  },
  {
    word: "paveta",
    eligible: false,
  },
  {
    word: "pavião",
    eligible: false,
  },
  {
    word: "pávido",
    eligible: false,
  },
  {
    word: "pavios",
    eligible: false,
  },
  {
    word: "Pavlov",
    eligible: false,
  },
  {
    word: "pavões",
    eligible: false,
  },
  {
    word: "pavona",
    eligible: false,
  },
  {
    word: "pávulo",
    eligible: false,
  },
  {
    word: "pavuna",
    eligible: false,
  },
  {
    word: "paxaxo",
    eligible: false,
  },
  {
    word: "paxicá",
    eligible: false,
  },
  {
    word: "paxilo",
    eligible: false,
  },
  {
    word: "paxita",
    eligible: false,
  },
  {
    word: "paxoró",
    eligible: false,
  },
  {
    word: "paxorô",
    eligible: false,
  },
  {
    word: "pazada",
    eligible: false,
  },
  {
    word: "pazear",
    eligible: false,
  },
  {
    word: "peação",
    eligible: false,
  },
  {
    word: "peagem",
    eligible: false,
  },
  {
    word: "pealar",
    eligible: false,
  },
  {
    word: "pealho",
    eligible: false,
  },
  {
    word: "peança",
    eligible: false,
  },
  {
    word: "peanho",
    eligible: false,
  },
  {
    word: "pearça",
    eligible: false,
  },
  {
    word: "peasca",
    eligible: false,
  },
  {
    word: "pebado",
    eligible: false,
  },
  {
    word: "pecari",
    eligible: false,
  },
  {
    word: "peceta",
    eligible: false,
  },
  {
    word: "pechar",
    eligible: false,
  },
  {
    word: "pechém",
    eligible: false,
  },
  {
    word: "pécile",
    eligible: false,
  },
  {
    word: "pécilo",
    eligible: false,
  },
  {
    word: "pecite",
    eligible: false,
  },
  {
    word: "pécora",
    eligible: false,
  },
  {
    word: "peçote",
    eligible: false,
  },
  {
    word: "pécten",
    eligible: false,
  },
  {
    word: "péctis",
    eligible: false,
  },
  {
    word: "pedaço",
    eligible: false,
  },
  {
    word: "pedado",
    eligible: false,
  },
  {
    word: "pedano",
    eligible: false,
  },
  {
    word: "pedato",
    eligible: false,
  },
  {
    word: "pédero",
    eligible: false,
  },
  {
    word: "pedese",
    eligible: false,
  },
  {
    word: "pedial",
    eligible: false,
  },
  {
    word: "pedião",
    eligible: false,
  },
  {
    word: "pedida",
    eligible: false,
  },
  {
    word: "pedíea",
    eligible: false,
  },
  {
    word: "pedino",
    eligible: false,
  },
  {
    word: "pédion",
    eligible: false,
  },
  {
    word: "pédite",
    eligible: false,
  },
  {
    word: "pedral",
    eligible: false,
  },
  {
    word: "pedrão",
    eligible: false,
  },
  {
    word: "pedrar",
    eligible: false,
  },
  {
    word: "pedras",
    eligible: false,
  },
  {
    word: "pedrês",
    eligible: false,
  },
  {
    word: "pedros",
    eligible: false,
  },
  {
    word: "peeira",
    eligible: false,
  },
  {
    word: "peeiro",
    eligible: false,
  },
  {
    word: "péfilo",
    eligible: false,
  },
  {
    word: "pegada",
    eligible: false,
  },
  {
    word: "pégano",
    eligible: false,
  },
  {
    word: "pégaso",
    eligible: false,
  },
  {
    word: "pegata",
    eligible: false,
  },
  {
    word: "pégnia",
    eligible: false,
  },
  {
    word: "pegudo",
    eligible: false,
  },
  {
    word: "péguia",
    eligible: false,
  },
  {
    word: "peidão",
    eligible: false,
  },
  {
    word: "peidar",
    eligible: false,
  },
  {
    word: "peidos",
    eligible: false,
  },
  {
    word: "peinar",
    eligible: false,
  },
  {
    word: "peinde",
    eligible: false,
  },
  {
    word: "peiote",
    eligible: false,
  },
  {
    word: "peirão",
    eligible: false,
  },
  {
    word: "peirau",
    eligible: false,
  },
  {
    word: "peitão",
    eligible: false,
  },
  {
    word: "peitar",
    eligible: false,
  },
  {
    word: "peitos",
    eligible: false,
  },
  {
    word: "peiudo",
    eligible: false,
  },
  {
    word: "peixão",
    eligible: false,
  },
  {
    word: "peixar",
    eligible: false,
  },
  {
    word: "peixes",
    eligible: false,
  },
  {
    word: "peixol",
    eligible: false,
  },
  {
    word: "pejoso",
    eligible: false,
  },
  {
    word: "pelada",
    eligible: false,
  },
  {
    word: "pélago",
    eligible: false,
  },
  {
    word: "pelame",
    eligible: false,
  },
  {
    word: "pelear",
    eligible: false,
  },
  {
    word: "peleco",
    eligible: false,
  },
  {
    word: "pelego",
    eligible: false,
  },
  {
    word: "pelele",
    eligible: false,
  },
  {
    word: "pelelé",
    eligible: false,
  },
  {
    word: "pelene",
    eligible: false,
  },
  {
    word: "peleoa",
    eligible: false,
  },
  {
    word: "pelete",
    eligible: false,
  },
  {
    word: "pélete",
    eligible: false,
  },
  {
    word: "pelevi",
    eligible: false,
  },
  {
    word: "peliça",
    eligible: false,
  },
  {
    word: "pelicé",
    eligible: false,
  },
  {
    word: "pelico",
    eligible: false,
  },
  {
    word: "Pelino",
    eligible: false,
  },
  {
    word: "pelito",
    eligible: false,
  },
  {
    word: "peloco",
    eligible: false,
  },
  {
    word: "pelome",
    eligible: false,
  },
  {
    word: "pelona",
    eligible: false,
  },
  {
    word: "pélope",
    eligible: false,
  },
  {
    word: "pélops",
    eligible: false,
  },
  {
    word: "peloso",
    eligible: false,
  },
  {
    word: "pelote",
    eligible: false,
  },
  {
    word: "peltre",
    eligible: false,
  },
  {
    word: "peluda",
    eligible: false,
  },
  {
    word: "peludo",
    eligible: false,
  },
  {
    word: "Peluso",
    eligible: false,
  },
  {
    word: "pélvis",
    eligible: false,
  },
  {
    word: "pemano",
    eligible: false,
  },
  {
    word: "pêmeno",
    eligible: false,
  },
  {
    word: "penaia",
    eligible: false,
  },
  {
    word: "penais",
    eligible: false,
  },
  {
    word: "pencão",
    eligible: false,
  },
  {
    word: "pencas",
    eligible: false,
  },
  {
    word: "pencha",
    eligible: false,
  },
  {
    word: "pendal",
    eligible: false,
  },
  {
    word: "pendão",
    eligible: false,
  },
  {
    word: "pender",
    eligible: false,
  },
  {
    word: "pendor",
    eligible: false,
  },
  {
    word: "pendre",
    eligible: false,
  },
  {
    word: "pendro",
    eligible: false,
  },
  {
    word: "penedo",
    eligible: false,
  },
  {
    word: "penego",
    eligible: false,
  },
  {
    word: "peneia",
    eligible: false,
  },
  {
    word: "penela",
    eligible: false,
  },
  {
    word: "penenê",
    eligible: false,
  },
  {
    word: "peneta",
    eligible: false,
  },
  {
    word: "penhor",
    eligible: false,
  },
  {
    word: "pênico",
    eligible: false,
  },
  {
    word: "Penido",
    eligible: false,
  },
  {
    word: "Peniel",
    eligible: false,
  },
  {
    word: "penina",
    eligible: false,
  },
  {
    word: "Penipe",
    eligible: false,
  },
  {
    word: "pênopo",
    eligible: false,
  },
  {
    word: "penoso",
    eligible: false,
  },
  {
    word: "pensão",
    eligible: false,
  },
  {
    word: "pensar",
    eligible: false,
  },
  {
    word: "pensée",
    eligible: false,
  },
  {
    word: "pênsil",
    eligible: false,
  },
  {
    word: "pensos",
    eligible: false,
  },
  {
    word: "pentes",
    eligible: false,
  },
  {
    word: "penudo",
    eligible: false,
  },
  {
    word: "pénulo",
    eligible: false,
  },
  {
    word: "pênulo",
    eligible: false,
  },
  {
    word: "peoada",
    eligible: false,
  },
  {
    word: "peônia",
    eligible: false,
  },
  {
    word: "peonol",
    eligible: false,
  },
  {
    word: "pepeca",
    eligible: false,
  },
  {
    word: "Pepéis",
    eligible: false,
  },
  {
    word: "pepelé",
    eligible: false,
  },
  {
    word: "pepena",
    eligible: false,
  },
  {
    word: "pepéua",
    eligible: false,
  },
  {
    word: "pepeva",
    eligible: false,
  },
  {
    word: "pepiça",
    eligible: false,
  },
  {
    word: "pepino",
    eligible: false,
  },
  {
    word: "pepira",
    eligible: false,
  },
  {
    word: "pepita",
    eligible: false,
  },
  {
    word: "peplum",
    eligible: false,
  },
  {
    word: "pepsia",
    eligible: false,
  },
  {
    word: "pepuxi",
    eligible: false,
  },
  {
    word: "pequiá",
    eligible: false,
  },
  {
    word: "pequim",
    eligible: false,
  },
  {
    word: "pequis",
    eligible: false,
  },
  {
    word: "perado",
    eligible: false,
  },
  {
    word: "perama",
    eligible: false,
  },
  {
    word: "perava",
    eligible: false,
  },
  {
    word: "percal",
    eligible: false,
  },
  {
    word: "percar",
    eligible: false,
  },
  {
    word: "percas",
    eligible: false,
  },
  {
    word: "percha",
    eligible: false,
  },
  {
    word: "Pércio",
    eligible: false,
  },
  {
    word: "pércis",
    eligible: false,
  },
  {
    word: "perdão",
    eligible: false,
  },
  {
    word: "perder",
    eligible: false,
  },
  {
    word: "perdiz",
    eligible: false,
  },
  {
    word: "perdoa",
    eligible: false,
  },
  {
    word: "pereba",
    eligible: false,
  },
  {
    word: "perema",
    eligible: false,
  },
  {
    word: "perene",
    eligible: false,
  },
  {
    word: "peréon",
    eligible: false,
  },
  {
    word: "pereré",
    eligible: false,
  },
  {
    word: "pererê",
    eligible: false,
  },
  {
    word: "pereva",
    eligible: false,
  },
  {
    word: "perexi",
    eligible: false,
  },
  {
    word: "perfil",
    eligible: false,
  },
  {
    word: "perfis",
    eligible: false,
  },
  {
    word: "pergeu",
    eligible: false,
  },
  {
    word: "perico",
    eligible: false,
  },
  {
    word: "pericó",
    eligible: false,
  },
  {
    word: "Perida",
    eligible: false,
  },
  {
    word: "peridá",
    eligible: false,
  },
  {
    word: "périfo",
    eligible: false,
  },
  {
    word: "perilo",
    eligible: false,
  },
  {
    word: "perina",
    eligible: false,
  },
  {
    word: "periná",
    eligible: false,
  },
  {
    word: "perinã",
    eligible: false,
  },
  {
    word: "perito",
    eligible: false,
  },
  {
    word: "perlar",
    eligible: false,
  },
  {
    word: "perlon",
    eligible: false,
  },
  {
    word: "perluí",
    eligible: false,
  },
  {
    word: "permil",
    eligible: false,
  },
  {
    word: "pernão",
    eligible: false,
  },
  {
    word: "pernas",
    eligible: false,
  },
  {
    word: "pérnea",
    eligible: false,
  },
  {
    word: "pernil",
    eligible: false,
  },
  {
    word: "pernim",
    eligible: false,
  },
  {
    word: "pérnis",
    eligible: false,
  },
  {
    word: "perniz",
    eligible: false,
  },
  {
    word: "peroba",
    eligible: false,
  },
  {
    word: "perogi",
    eligible: false,
  },
  {
    word: "pérola",
    eligible: false,
  },
  {
    word: "perose",
    eligible: false,
  },
  {
    word: "perote",
    eligible: false,
  },
  {
    word: "perova",
    eligible: false,
  },
  {
    word: "peróxi",
    eligible: false,
  },
  {
    word: "perpau",
    eligible: false,
  },
  {
    word: "perros",
    eligible: false,
  },
  {
    word: "perrum",
    eligible: false,
  },
  {
    word: "persal",
    eligible: false,
  },
  {
    word: "persea",
    eligible: false,
  },
  {
    word: "pérseo",
    eligible: false,
  },
  {
    word: "Perseu",
    eligible: false,
  },
  {
    word: "pérsia",
    eligible: false,
  },
  {
    word: "pérsio",
    eligible: false,
  },
  {
    word: "peruar",
    eligible: false,
  },
  {
    word: "peruas",
    eligible: false,
  },
  {
    word: "peruca",
    eligible: false,
  },
  {
    word: "peruda",
    eligible: false,
  },
  {
    word: "pérula",
    eligible: false,
  },
  {
    word: "perver",
    eligible: false,
  },
  {
    word: "pérvio",
    eligible: false,
  },
  {
    word: "pesada",
    eligible: false,
  },
  {
    word: "pesado",
    eligible: false,
  },
  {
    word: "pêsame",
    eligible: false,
  },
  {
    word: "pescal",
    eligible: false,
  },
  {
    word: "pescar",
    eligible: false,
  },
  {
    word: "pescaz",
    eligible: false,
  },
  {
    word: "peseta",
    eligible: false,
  },
  {
    word: "pesgar",
    eligible: false,
  },
  {
    word: "pésico",
    eligible: false,
  },
  {
    word: "pessoa",
    eligible: false,
  },
  {
    word: "pestes",
    eligible: false,
  },
  {
    word: "pestis",
    eligible: false,
  },
  {
    word: "pesume",
    eligible: false,
  },
  {
    word: "pésure",
    eligible: false,
  },
  {
    word: "pésuro",
    eligible: false,
  },
  {
    word: "pétala",
    eligible: false,
  },
  {
    word: "petear",
    eligible: false,
  },
  {
    word: "peteca",
    eligible: false,
  },
  {
    word: "petefe",
    eligible: false,
  },
  {
    word: "petema",
    eligible: false,
  },
  {
    word: "petica",
    eligible: false,
  },
  {
    word: "petiça",
    eligible: false,
  },
  {
    word: "petiço",
    eligible: false,
  },
  {
    word: "petipé",
    eligible: false,
  },
  {
    word: "petiza",
    eligible: false,
  },
  {
    word: "petral",
    eligible: false,
  },
  {
    word: "petrel",
    eligible: false,
  },
  {
    word: "pétreo",
    eligible: false,
  },
  {
    word: "petreu",
    eligible: false,
  },
  {
    word: "petrim",
    eligible: false,
  },
  {
    word: "petume",
    eligible: false,
  },
  {
    word: "peúlbe",
    eligible: false,
  },
  {
    word: "peuval",
    eligible: false,
  },
  {
    word: "peúvas",
    eligible: false,
  },
  {
    word: "pevide",
    eligible: false,
  },
  {
    word: "pexeti",
    eligible: false,
  },
  {
    word: "péxica",
    eligible: false,
  },
  {
    word: "pezada",
    eligible: false,
  },
  {
    word: "peziza",
    eligible: false,
  },
  {
    word: "pezudo",
    eligible: false,
  },
  {
    word: "pfucar",
    eligible: false,
  },
  {
    word: "piabar",
    eligible: false,
  },
  {
    word: "piabas",
    eligible: false,
  },
  {
    word: "piação",
    eligible: false,
  },
  {
    word: "piafar",
    eligible: false,
  },
  {
    word: "Piaget",
    eligible: false,
  },
  {
    word: "pialar",
    eligible: false,
  },
  {
    word: "pialos",
    eligible: false,
  },
  {
    word: "piamba",
    eligible: false,
  },
  {
    word: "Piancó",
    eligible: false,
  },
  {
    word: "pianos",
    eligible: false,
  },
  {
    word: "piápia",
    eligible: false,
  },
  {
    word: "piarça",
    eligible: false,
  },
  {
    word: "piarda",
    eligible: false,
  },
  {
    word: "piaroa",
    eligible: false,
  },
  {
    word: "piasco",
    eligible: false,
  },
  {
    word: "piasta",
    eligible: false,
  },
  {
    word: "piauçu",
    eligible: false,
  },
  {
    word: "piavas",
    eligible: false,
  },
  {
    word: "picaça",
    eligible: false,
  },
  {
    word: "picaço",
    eligible: false,
  },
  {
    word: "picaçu",
    eligible: false,
  },
  {
    word: "picado",
    eligible: false,
  },
  {
    word: "picaim",
    eligible: false,
  },
  {
    word: "picais",
    eligible: false,
  },
  {
    word: "picana",
    eligible: false,
  },
  {
    word: "picape",
    eligible: false,
  },
  {
    word: "picaré",
    eligible: false,
  },
  {
    word: "picaró",
    eligible: false,
  },
  {
    word: "pícaro",
    eligible: false,
  },
  {
    word: "picaxo",
    eligible: false,
  },
  {
    word: "picazo",
    eligible: false,
  },
  {
    word: "piceno",
    eligible: false,
  },
  {
    word: "piceol",
    eligible: false,
  },
  {
    word: "pichão",
    eligible: false,
  },
  {
    word: "pichar",
    eligible: false,
  },
  {
    word: "pichel",
    eligible: false,
  },
  {
    word: "pichia",
    eligible: false,
  },
  {
    word: "picica",
    eligible: false,
  },
  {
    word: "pícida",
    eligible: false,
  },
  {
    word: "picite",
    eligible: false,
  },
  {
    word: "pícnio",
    eligible: false,
  },
  {
    word: "picões",
    eligible: false,
  },
  {
    word: "picola",
    eligible: false,
  },
  {
    word: "picolé",
    eligible: false,
  },
  {
    word: "picoso",
    eligible: false,
  },
  {
    word: "picotê",
    eligible: false,
  },
  {
    word: "pícreo",
    eligible: false,
  },
  {
    word: "pícria",
    eligible: false,
  },
  {
    word: "picrol",
    eligible: false,
  },
  {
    word: "picual",
    eligible: false,
  },
  {
    word: "picuar",
    eligible: false,
  },
  {
    word: "picudo",
    eligible: false,
  },
  {
    word: "picuim",
    eligible: false,
  },
  {
    word: "picuís",
    eligible: false,
  },
  {
    word: "picumã",
    eligible: false,
  },
  {
    word: "pidneu",
    eligible: false,
  },
  {
    word: "pidona",
    eligible: false,
  },
  {
    word: "piedra",
    eligible: false,
  },
  {
    word: "pieiro",
    eligible: false,
  },
  {
    word: "piemia",
    eligible: false,
  },
  {
    word: "piense",
    eligible: false,
  },
  {
    word: "piério",
    eligible: false,
  },
  {
    word: "píeris",
    eligible: false,
  },
  {
    word: "Pierre",
    eligible: false,
  },
  {
    word: "pierrô",
    eligible: false,
  },
  {
    word: "piesma",
    eligible: false,
  },
  {
    word: "Pietro",
    eligible: false,
  },
  {
    word: "pífano",
    eligible: false,
  },
  {
    word: "pífaro",
    eligible: false,
  },
  {
    word: "pigaça",
    eligible: false,
  },
  {
    word: "pigera",
    eligible: false,
  },
  {
    word: "pigmeu",
    eligible: false,
  },
  {
    word: "pígopo",
    eligible: false,
  },
  {
    word: "pijame",
    eligible: false,
  },
  {
    word: "pijuca",
    eligible: false,
  },
  {
    word: "pilafe",
    eligible: false,
  },
  {
    word: "pilano",
    eligible: false,
  },
  {
    word: "pílcia",
    eligible: false,
  },
  {
    word: "pildar",
    eligible: false,
  },
  {
    word: "pildra",
    eligible: false,
  },
  {
    word: "pileco",
    eligible: false,
  },
  {
    word: "pilera",
    eligible: false,
  },
  {
    word: "pileta",
    eligible: false,
  },
  {
    word: "pilhar",
    eligible: false,
  },
  {
    word: "pilina",
    eligible: false,
  },
  {
    word: "pilite",
    eligible: false,
  },
  {
    word: "piloca",
    eligible: false,
  },
  {
    word: "piloia",
    eligible: false,
  },
  {
    word: "piloma",
    eligible: false,
  },
  {
    word: "pilone",
    eligible: false,
  },
  {
    word: "pilono",
    eligible: false,
  },
  {
    word: "piloro",
    eligible: false,
  },
  {
    word: "pilose",
    eligible: false,
  },
  {
    word: "piloso",
    eligible: false,
  },
  {
    word: "piloti",
    eligible: false,
  },
  {
    word: "piloto",
    eligible: false,
  },
  {
    word: "pilrão",
    eligible: false,
  },
  {
    word: "Piltai",
    eligible: false,
  },
  {
    word: "pílula",
    eligible: false,
  },
  {
    word: "pimbar",
    eligible: false,
  },
  {
    word: "pimpão",
    eligible: false,
  },
  {
    word: "pimpar",
    eligible: false,
  },
  {
    word: "pimpim",
    eligible: false,
  },
  {
    word: "pimpol",
    eligible: false,
  },
  {
    word: "pinaca",
    eligible: false,
  },
  {
    word: "pinaça",
    eligible: false,
  },
  {
    word: "pinama",
    eligible: false,
  },
  {
    word: "pinano",
    eligible: false,
  },
  {
    word: "pinaré",
    eligible: false,
  },
  {
    word: "pinção",
    eligible: false,
  },
  {
    word: "pinçar",
    eligible: false,
  },
  {
    word: "pincel",
    eligible: false,
  },
  {
    word: "pincha",
    eligible: false,
  },
  {
    word: "pincre",
    eligible: false,
  },
  {
    word: "Pindaí",
    eligible: false,
  },
  {
    word: "pindaí",
    eligible: false,
  },
  {
    word: "pindás",
    eligible: false,
  },
  {
    word: "pindus",
    eligible: false,
  },
  {
    word: "pineal",
    eligible: false,
  },
  {
    word: "pineno",
    eligible: false,
  },
  {
    word: "pingão",
    eligible: false,
  },
  {
    word: "pingar",
    eligible: false,
  },
  {
    word: "pingas",
    eligible: false,
  },
  {
    word: "pingoé",
    eligible: false,
  },
  {
    word: "pingos",
    eligible: false,
  },
  {
    word: "pingue",
    eligible: false,
  },
  {
    word: "pinhal",
    eligible: false,
  },
  {
    word: "pinhão",
    eligible: false,
  },
  {
    word: "pinhar",
    eligible: false,
  },
  {
    word: "pinhas",
    eligible: false,
  },
  {
    word: "pinhel",
    eligible: false,
  },
  {
    word: "pinhém",
    eligible: false,
  },
  {
    word: "pinhos",
    eligible: false,
  },
  {
    word: "pinhum",
    eligible: false,
  },
  {
    word: "pinica",
    eligible: false,
  },
  {
    word: "pínico",
    eligible: false,
  },
  {
    word: "pinima",
    eligible: false,
  },
  {
    word: "pinina",
    eligible: false,
  },
  {
    word: "pinite",
    eligible: false,
  },
  {
    word: "pinoio",
    eligible: false,
  },
  {
    word: "pinque",
    eligible: false,
  },
  {
    word: "pintão",
    eligible: false,
  },
  {
    word: "pintar",
    eligible: false,
  },
  {
    word: "pintas",
    eligible: false,
  },
  {
    word: "pintéu",
    eligible: false,
  },
  {
    word: "pintor",
    eligible: false,
  },
  {
    word: "pintos",
    eligible: false,
  },
  {
    word: "pínulo",
    eligible: false,
  },
  {
    word: "piocho",
    eligible: false,
  },
  {
    word: "pioide",
    eligible: false,
  },
  {
    word: "piolho",
    eligible: false,
  },
  {
    word: "piolim",
    eligible: false,
  },
  {
    word: "piônea",
    eligible: false,
  },
  {
    word: "pionés",
    eligible: false,
  },
  {
    word: "piongo",
    eligible: false,
  },
  {
    word: "piônio",
    eligible: false,
  },
  {
    word: "piorar",
    eligible: false,
  },
  {
    word: "piorio",
    eligible: false,
  },
  {
    word: "piorne",
    eligible: false,
  },
  {
    word: "piorno",
    eligible: false,
  },
  {
    word: "piorro",
    eligible: false,
  },
  {
    word: "piovês",
    eligible: false,
  },
  {
    word: "pípede",
    eligible: false,
  },
  {
    word: "pipelê",
    eligible: false,
  },
  {
    word: "piperi",
    eligible: false,
  },
  {
    word: "pipião",
    eligible: false,
  },
  {
    word: "pipiar",
    eligible: false,
  },
  {
    word: "pípida",
    eligible: false,
  },
  {
    word: "pipipã",
    eligible: false,
  },
  {
    word: "pipira",
    eligible: false,
  },
  {
    word: "pipiri",
    eligible: false,
  },
  {
    word: "pipoca",
    eligible: false,
  },
  {
    word: "pipote",
    eligible: false,
  },
  {
    word: "pipuco",
    eligible: false,
  },
  {
    word: "piques",
    eligible: false,
  },
  {
    word: "Piquet",
    eligible: false,
  },
  {
    word: "piquet",
    eligible: false,
  },
  {
    word: "piquiá",
    eligible: false,
  },
  {
    word: "piraba",
    eligible: false,
  },
  {
    word: "piraca",
    eligible: false,
  },
  {
    word: "piracá",
    eligible: false,
  },
  {
    word: "piraém",
    eligible: false,
  },
  {
    word: "piraia",
    eligible: false,
  },
  {
    word: "piraiú",
    eligible: false,
  },
  {
    word: "pirajá",
    eligible: false,
  },
  {
    word: "piraji",
    eligible: false,
  },
  {
    word: "piraju",
    eligible: false,
  },
  {
    word: "pirale",
    eligible: false,
  },
  {
    word: "piraná",
    eligible: false,
  },
  {
    word: "pirano",
    eligible: false,
  },
  {
    word: "piraoá",
    eligible: false,
  },
  {
    word: "piraoã",
    eligible: false,
  },
  {
    word: "Pirapó",
    eligible: false,
  },
  {
    word: "pirarã",
    eligible: false,
  },
  {
    word: "pirata",
    eligible: false,
  },
  {
    word: "pirati",
    eligible: false,
  },
  {
    word: "pirauá",
    eligible: false,
  },
  {
    word: "pircha",
    eligible: false,
  },
  {
    word: "pireco",
    eligible: false,
  },
  {
    word: "pirema",
    eligible: false,
  },
  {
    word: "pirene",
    eligible: false,
  },
  {
    word: "pireno",
    eligible: false,
  },
  {
    word: "pirera",
    eligible: false,
  },
  {
    word: "píreto",
    eligible: false,
  },
  {
    word: "pireza",
    eligible: false,
  },
  {
    word: "pírico",
    eligible: false,
  },
  {
    word: "pirima",
    eligible: false,
  },
  {
    word: "pirina",
    eligible: false,
  },
  {
    word: "Piripá",
    eligible: false,
  },
  {
    word: "piriri",
    eligible: false,
  },
  {
    word: "pirita",
    eligible: false,
  },
  {
    word: "piritá",
    eligible: false,
  },
  {
    word: "pirite",
    eligible: false,
  },
  {
    word: "pirito",
    eligible: false,
  },
  {
    word: "pirixi",
    eligible: false,
  },
  {
    word: "pirobo",
    eligible: false,
  },
  {
    word: "pirões",
    eligible: false,
  },
  {
    word: "piroga",
    eligible: false,
  },
  {
    word: "pirole",
    eligible: false,
  },
  {
    word: "pirolé",
    eligible: false,
  },
  {
    word: "pírolo",
    eligible: false,
  },
  {
    word: "pirona",
    eligible: false,
  },
  {
    word: "piropo",
    eligible: false,
  },
  {
    word: "pirose",
    eligible: false,
  },
  {
    word: "piroso",
    eligible: false,
  },
  {
    word: "pirote",
    eligible: false,
  },
  {
    word: "pirrol",
    eligible: false,
  },
  {
    word: "pirulo",
    eligible: false,
  },
  {
    word: "pisano",
    eligible: false,
  },
  {
    word: "piscar",
    eligible: false,
  },
  {
    word: "písceo",
    eligible: false,
  },
  {
    word: "piscos",
    eligible: false,
  },
  {
    word: "pisgar",
    eligible: false,
  },
  {
    word: "pisida",
    eligible: false,
  },
  {
    word: "pisoar",
    eligible: false,
  },
  {
    word: "pistão",
    eligible: false,
  },
  {
    word: "pistar",
    eligible: false,
  },
  {
    word: "pístia",
    eligible: false,
  },
  {
    word: "pistom",
    eligible: false,
  },
  {
    word: "pistor",
    eligible: false,
  },
  {
    word: "pitaco",
    eligible: false,
  },
  {
    word: "pitafe",
    eligible: false,
  },
  {
    word: "pitafo",
    eligible: false,
  },
  {
    word: "pítago",
    eligible: false,
  },
  {
    word: "pitaiá",
    eligible: false,
  },
  {
    word: "pítais",
    eligible: false,
  },
  {
    word: "pitanã",
    eligible: false,
  },
  {
    word: "pítano",
    eligible: false,
  },
  {
    word: "pitauá",
    eligible: false,
  },
  {
    word: "pitauã",
    eligible: false,
  },
  {
    word: "piteco",
    eligible: false,
  },
  {
    word: "pitiás",
    eligible: false,
  },
  {
    word: "pítico",
    eligible: false,
  },
  {
    word: "pítigo",
    eligible: false,
  },
  {
    word: "pítilo",
    eligible: false,
  },
  {
    word: "pitima",
    eligible: false,
  },
  {
    word: "pitipé",
    eligible: false,
  },
  {
    word: "pitium",
    eligible: false,
  },
  {
    word: "pitiús",
    eligible: false,
  },
  {
    word: "pitoco",
    eligible: false,
  },
  {
    word: "pitora",
    eligible: false,
  },
  {
    word: "pitoso",
    eligible: false,
  },
  {
    word: "pitote",
    eligible: false,
  },
  {
    word: "pituba",
    eligible: false,
  },
  {
    word: "pituim",
    eligible: false,
  },
  {
    word: "pitula",
    eligible: false,
  },
  {
    word: "pitura",
    eligible: false,
  },
  {
    word: "pituri",
    eligible: false,
  },
  {
    word: "piucar",
    eligible: false,
  },
  {
    word: "piulco",
    eligible: false,
  },
  {
    word: "Piumhi",
    eligible: false,
  },
  {
    word: "piuria",
    eligible: false,
  },
  {
    word: "piúria",
    eligible: false,
  },
  {
    word: "piuval",
    eligible: false,
  },
  {
    word: "piúvas",
    eligible: false,
  },
  {
    word: "pivelo",
    eligible: false,
  },
  {
    word: "pivete",
    eligible: false,
  },
  {
    word: "pivoca",
    eligible: false,
  },
  {
    word: "pixaim",
    eligible: false,
  },
  {
    word: "pixear",
    eligible: false,
  },
  {
    word: "píxide",
    eligible: false,
  },
  {
    word: "pixina",
    eligible: false,
  },
  {
    word: "pixoré",
    eligible: false,
  },
  {
    word: "pixote",
    eligible: false,
  },
  {
    word: "pixoxó",
    eligible: false,
  },
  {
    word: "pixuna",
    eligible: false,
  },
  {
    word: "pixuri",
    eligible: false,
  },
  {
    word: "placar",
    eligible: false,
  },
  {
    word: "placas",
    eligible: false,
  },
  {
    word: "plácer",
    eligible: false,
  },
  {
    word: "plafom",
    eligible: false,
  },
  {
    word: "plagal",
    eligible: false,
  },
  {
    word: "plagão",
    eligible: false,
  },
  {
    word: "plágio",
    eligible: false,
  },
  {
    word: "planar",
    eligible: false,
  },
  {
    word: "planas",
    eligible: false,
  },
  {
    word: "Planck",
    eligible: false,
  },
  {
    word: "planos",
    eligible: false,
  },
  {
    word: "planta",
    eligible: false,
  },
  {
    word: "plaqué",
    eligible: false,
  },
  {
    word: "plaquê",
    eligible: false,
  },
  {
    word: "plasia",
    eligible: false,
  },
  {
    word: "plasma",
    eligible: false,
  },
  {
    word: "plasta",
    eligible: false,
  },
  {
    word: "plasto",
    eligible: false,
  },
  {
    word: "platal",
    eligible: false,
  },
  {
    word: "Platão",
    eligible: false,
  },
  {
    word: "plátax",
    eligible: false,
  },
  {
    word: "Plauto",
    eligible: false,
  },
  {
    word: "plázia",
    eligible: false,
  },
  {
    word: "plebeu",
    eligible: false,
  },
  {
    word: "plecto",
    eligible: false,
  },
  {
    word: "plegia",
    eligible: false,
  },
  {
    word: "plengo",
    eligible: false,
  },
  {
    word: "plenos",
    eligible: false,
  },
  {
    word: "plésia",
    eligible: false,
  },
  {
    word: "pletro",
    eligible: false,
  },
  {
    word: "pleura",
    eligible: false,
  },
  {
    word: "pleuro",
    eligible: false,
  },
  {
    word: "plévia",
    eligible: false,
  },
  {
    word: "plexia",
    eligible: false,
  },
  {
    word: "plexos",
    eligible: false,
  },
  {
    word: "plicar",
    eligible: false,
  },
  {
    word: "plidar",
    eligible: false,
  },
  {
    word: "plínia",
    eligible: false,
  },
  {
    word: "Plínio",
    eligible: false,
  },
  {
    word: "plinto",
    eligible: false,
  },
  {
    word: "plissê",
    eligible: false,
  },
  {
    word: "plóceo",
    eligible: false,
  },
  {
    word: "plócia",
    eligible: false,
  },
  {
    word: "plódia",
    eligible: false,
  },
  {
    word: "ploimo",
    eligible: false,
  },
  {
    word: "ploira",
    eligible: false,
  },
  {
    word: "plorim",
    eligible: false,
  },
  {
    word: "plosão",
    eligible: false,
  },
  {
    word: "plotar",
    eligible: false,
  },
  {
    word: "plugar",
    eligible: false,
  },
  {
    word: "plumão",
    eligible: false,
  },
  {
    word: "plumar",
    eligible: false,
  },
  {
    word: "plumas",
    eligible: false,
  },
  {
    word: "plumaz",
    eligible: false,
  },
  {
    word: "plúmeo",
    eligible: false,
  },
  {
    word: "plural",
    eligible: false,
  },
  {
    word: "Plutão",
    eligible: false,
  },
  {
    word: "plutão",
    eligible: false,
  },
  {
    word: "plúteo",
    eligible: false,
  },
  {
    word: "plúvio",
    eligible: false,
  },
  {
    word: "pneuma",
    eligible: false,
  },
  {
    word: "pneumo",
    eligible: false,
  },
  {
    word: "poáceo",
    eligible: false,
  },
  {
    word: "poaias",
    eligible: false,
  },
  {
    word: "poalho",
    eligible: false,
  },
  {
    word: "pobila",
    eligible: false,
  },
  {
    word: "pobres",
    eligible: false,
  },
  {
    word: "pobura",
    eligible: false,
  },
  {
    word: "pocaçu",
    eligible: false,
  },
  {
    word: "poçada",
    eligible: false,
  },
  {
    word: "pocamó",
    eligible: false,
  },
  {
    word: "poceco",
    eligible: false,
  },
  {
    word: "pocema",
    eligible: false,
  },
  {
    word: "poçoca",
    eligible: false,
  },
  {
    word: "Poconé",
    eligible: false,
  },
  {
    word: "poçuca",
    eligible: false,
  },
  {
    word: "podaxo",
    eligible: false,
  },
  {
    word: "podere",
    eligible: false,
  },
  {
    word: "podica",
    eligible: false,
  },
  {
    word: "pódice",
    eligible: false,
  },
  {
    word: "podida",
    eligible: false,
  },
  {
    word: "podito",
    eligible: false,
  },
  {
    word: "pódito",
    eligible: false,
  },
  {
    word: "podogó",
    eligible: false,
  },
  {
    word: "podoio",
    eligible: false,
  },
  {
    word: "podone",
    eligible: false,
  },
  {
    word: "podrão",
    eligible: false,
  },
  {
    word: "podres",
    eligible: false,
  },
  {
    word: "podriz",
    eligible: false,
  },
  {
    word: "podrum",
    eligible: false,
  },
  {
    word: "poduro",
    eligible: false,
  },
  {
    word: "poeira",
    eligible: false,
  },
  {
    word: "poejos",
    eligible: false,
  },
  {
    word: "poemas",
    eligible: false,
  },
  {
    word: "poesco",
    eligible: false,
  },
  {
    word: "poesia",
    eligible: false,
  },
  {
    word: "poetar",
    eligible: false,
  },
  {
    word: "poetas",
    eligible: false,
  },
  {
    word: "pogono",
    eligible: false,
  },
  {
    word: "pogoro",
    eligible: false,
  },
  {
    word: "pogrom",
    eligible: false,
  },
  {
    word: "poiage",
    eligible: false,
  },
  {
    word: "poiana",
    eligible: false,
  },
  {
    word: "poiese",
    eligible: false,
  },
  {
    word: "poilão",
    eligible: false,
  },
  {
    word: "poisar",
    eligible: false,
  },
  {
    word: "poisio",
    eligible: false,
  },
  {
    word: "poisol",
    eligible: false,
  },
  {
    word: "poisos",
    eligible: false,
  },
  {
    word: "poitão",
    eligible: false,
  },
  {
    word: "poitar",
    eligible: false,
  },
  {
    word: "pojeia",
    eligible: false,
  },
  {
    word: "pojino",
    eligible: false,
  },
  {
    word: "pojixá",
    eligible: false,
  },
  {
    word: "pojoji",
    eligible: false,
  },
  {
    word: "Pojuca",
    eligible: false,
  },
  {
    word: "polaca",
    eligible: false,
  },
  {
    word: "polaci",
    eligible: false,
  },
  {
    word: "polaco",
    eligible: false,
  },
  {
    word: "polcar",
    eligible: false,
  },
  {
    word: "polcas",
    eligible: false,
  },
  {
    word: "pólder",
    eligible: false,
  },
  {
    word: "pôlder",
    eligible: false,
  },
  {
    word: "poldra",
    eligible: false,
  },
  {
    word: "poldro",
    eligible: false,
  },
  {
    word: "polear",
    eligible: false,
  },
  {
    word: "polela",
    eligible: false,
  },
  {
    word: "polens",
    eligible: false,
  },
  {
    word: "polibã",
    eligible: false,
  },
  {
    word: "pólice",
    eligible: false,
  },
  {
    word: "pólico",
    eligible: false,
  },
  {
    word: "políea",
    eligible: false,
  },
  {
    word: "polina",
    eligible: false,
  },
  {
    word: "poliol",
    eligible: false,
  },
  {
    word: "polipo",
    eligible: false,
  },
  {
    word: "pólipo",
    eligible: false,
  },
  {
    word: "polmão",
    eligible: false,
  },
  {
    word: "pólmen",
    eligible: false,
  },
  {
    word: "polmes",
    eligible: false,
  },
  {
    word: "Poloni",
    eligible: false,
  },
  {
    word: "polono",
    eligible: false,
  },
  {
    word: "polpão",
    eligible: false,
  },
  {
    word: "polpar",
    eligible: false,
  },
  {
    word: "poluir",
    eligible: false,
  },
  {
    word: "poluto",
    eligible: false,
  },
  {
    word: "pólvor",
    eligible: false,
  },
  {
    word: "pomada",
    eligible: false,
  },
  {
    word: "pomaré",
    eligible: false,
  },
  {
    word: "pomari",
    eligible: false,
  },
  {
    word: "pombal",
    eligible: false,
  },
  {
    word: "pombas",
    eligible: false,
  },
  {
    word: "pombos",
    eligible: false,
  },
  {
    word: "pomear",
    eligible: false,
  },
  {
    word: "pomelo",
    eligible: false,
  },
  {
    word: "pômice",
    eligible: false,
  },
  {
    word: "pomito",
    eligible: false,
  },
  {
    word: "pomona",
    eligible: false,
  },
  {
    word: "pomoso",
    eligible: false,
  },
  {
    word: "Pompeo",
    eligible: false,
  },
  {
    word: "Pompeu",
    eligible: false,
  },
  {
    word: "Pompéu",
    eligible: false,
  },
  {
    word: "pompom",
    eligible: false,
  },
  {
    word: "pômulo",
    eligible: false,
  },
  {
    word: "ponaca",
    eligible: false,
  },
  {
    word: "ponçar",
    eligible: false,
  },
  {
    word: "ponche",
    eligible: false,
  },
  {
    word: "poncho",
    eligible: false,
  },
  {
    word: "Pôncio",
    eligible: false,
  },
  {
    word: "Pondos",
    eligible: false,
  },
  {
    word: "pondra",
    eligible: false,
  },
  {
    word: "ponera",
    eligible: false,
  },
  {
    word: "Pongaí",
    eligible: false,
  },
  {
    word: "pongar",
    eligible: false,
  },
  {
    word: "pongue",
    eligible: false,
  },
  {
    word: "ponhar",
    eligible: false,
  },
  {
    word: "ponhês",
    eligible: false,
  },
  {
    word: "ponose",
    eligible: false,
  },
  {
    word: "pontal",
    eligible: false,
  },
  {
    word: "pontão",
    eligible: false,
  },
  {
    word: "pontar",
    eligible: false,
  },
  {
    word: "pontas",
    eligible: false,
  },
  {
    word: "pontel",
    eligible: false,
  },
  {
    word: "pontes",
    eligible: false,
  },
  {
    word: "pontil",
    eligible: false,
  },
  {
    word: "pontos",
    eligible: false,
  },
  {
    word: "poodle",
    eligible: false,
  },
  {
    word: "popana",
    eligible: false,
  },
  {
    word: "popela",
    eligible: false,
  },
  {
    word: "poperi",
    eligible: false,
  },
  {
    word: "popiar",
    eligible: false,
  },
  {
    word: "popina",
    eligible: false,
  },
  {
    word: "poples",
    eligible: false,
  },
  {
    word: "popoca",
    eligible: false,
  },
  {
    word: "popuca",
    eligible: false,
  },
  {
    word: "pópulo",
    eligible: false,
  },
  {
    word: "póquer",
    eligible: false,
  },
  {
    word: "pôquer",
    eligible: false,
  },
  {
    word: "poracá",
    eligible: false,
  },
  {
    word: "poracé",
    eligible: false,
  },
  {
    word: "porana",
    eligible: false,
  },
  {
    word: "porção",
    eligible: false,
  },
  {
    word: "porcas",
    eligible: false,
  },
  {
    word: "porcaz",
    eligible: false,
  },
  {
    word: "pórcia",
    eligible: false,
  },
  {
    word: "Pórcio",
    eligible: false,
  },
  {
    word: "porcos",
    eligible: false,
  },
  {
    word: "porcum",
    eligible: false,
  },
  {
    word: "porela",
    eligible: false,
  },
  {
    word: "porina",
    eligible: false,
  },
  {
    word: "pórion",
    eligible: false,
  },
  {
    word: "porito",
    eligible: false,
  },
  {
    word: "porneu",
    eligible: false,
  },
  {
    word: "poroco",
    eligible: false,
  },
  {
    word: "porodó",
    eligible: false,
  },
  {
    word: "porões",
    eligible: false,
  },
  {
    word: "poroma",
    eligible: false,
  },
  {
    word: "pororó",
    eligible: false,
  },
  {
    word: "porose",
    eligible: false,
  },
  {
    word: "poroso",
    eligible: false,
  },
  {
    word: "porota",
    eligible: false,
  },
  {
    word: "porpau",
    eligible: false,
  },
  {
    word: "porque",
    eligible: false,
  },
  {
    word: "porquê",
    eligible: false,
  },
  {
    word: "porral",
    eligible: false,
  },
  {
    word: "porrão",
    eligible: false,
  },
  {
    word: "porras",
    eligible: false,
  },
  {
    word: "pórrio",
    eligible: false,
  },
  {
    word: "porros",
    eligible: false,
  },
  {
    word: "porrós",
    eligible: false,
  },
  {
    word: "porrôs",
    eligible: false,
  },
  {
    word: "porrum",
    eligible: false,
  },
  {
    word: "portal",
    eligible: false,
  },
  {
    word: "portão",
    eligible: false,
  },
  {
    word: "portar",
    eligible: false,
  },
  {
    word: "portas",
    eligible: false,
  },
  {
    word: "pórtea",
    eligible: false,
  },
  {
    word: "Portel",
    eligible: false,
  },
  {
    word: "portor",
    eligible: false,
  },
  {
    word: "portos",
    eligible: false,
  },
  {
    word: "poruca",
    eligible: false,
  },
  {
    word: "poruti",
    eligible: false,
  },
  {
    word: "porvir",
    eligible: false,
  },
  {
    word: "possar",
    eligible: false,
  },
  {
    word: "postal",
    eligible: false,
  },
  {
    word: "postar",
    eligible: false,
  },
  {
    word: "postas",
    eligible: false,
  },
  {
    word: "pôster",
    eligible: false,
  },
  {
    word: "postos",
    eligible: false,
  },
  {
    word: "postre",
    eligible: false,
  },
  {
    word: "posual",
    eligible: false,
  },
  {
    word: "posudo",
    eligible: false,
  },
  {
    word: "potaba",
    eligible: false,
  },
  {
    word: "potage",
    eligible: false,
  },
  {
    word: "potava",
    eligible: false,
  },
  {
    word: "poteia",
    eligible: false,
  },
  {
    word: "poteri",
    eligible: false,
  },
  {
    word: "poteti",
    eligible: false,
  },
  {
    word: "potial",
    eligible: false,
  },
  {
    word: "potici",
    eligible: false,
  },
  {
    word: "potíea",
    eligible: false,
  },
  {
    word: "Potira",
    eligible: false,
  },
  {
    word: "potiri",
    eligible: false,
  },
  {
    word: "potobó",
    eligible: false,
  },
  {
    word: "potóea",
    eligible: false,
  },
  {
    word: "potona",
    eligible: false,
  },
  {
    word: "potosi",
    eligible: false,
  },
  {
    word: "potote",
    eligible: false,
  },
  {
    word: "pótrea",
    eligible: false,
  },
  {
    word: "potril",
    eligible: false,
  },
  {
    word: "póttia",
    eligible: false,
  },
  {
    word: "poturu",
    eligible: false,
  },
  {
    word: "poucas",
    eligible: false,
  },
  {
    word: "poucos",
    eligible: false,
  },
  {
    word: "poupão",
    eligible: false,
  },
  {
    word: "poupar",
    eligible: false,
  },
  {
    word: "poupas",
    eligible: false,
  },
  {
    word: "pourri",
    eligible: false,
  },
  {
    word: "pousal",
    eligible: false,
  },
  {
    word: "pousar",
    eligible: false,
  },
  {
    word: "pousio",
    eligible: false,
  },
  {
    word: "pousos",
    eligible: false,
  },
  {
    word: "poutão",
    eligible: false,
  },
  {
    word: "poutar",
    eligible: false,
  },
  {
    word: "povoar",
    eligible: false,
  },
  {
    word: "povoto",
    eligible: false,
  },
  {
    word: "poxeti",
    eligible: false,
  },
  {
    word: "poxoxô",
    eligible: false,
  },
  {
    word: "praças",
    eligible: false,
  },
  {
    word: "prácia",
    eligible: false,
  },
  {
    word: "prados",
    eligible: false,
  },
  {
    word: "pragal",
    eligible: false,
  },
  {
    word: "pragão",
    eligible: false,
  },
  {
    word: "pragar",
    eligible: false,
  },
  {
    word: "pragas",
    eligible: false,
  },
  {
    word: "praguá",
    eligible: false,
  },
  {
    word: "praias",
    eligible: false,
  },
  {
    word: "praino",
    eligible: false,
  },
  {
    word: "prango",
    eligible: false,
  },
  {
    word: "prásio",
    eligible: false,
  },
  {
    word: "pratão",
    eligible: false,
  },
  {
    word: "pratel",
    eligible: false,
  },
  {
    word: "Prates",
    eligible: false,
  },
  {
    word: "prátia",
    eligible: false,
  },
  {
    word: "pratos",
    eligible: false,
  },
  {
    word: "Pravda",
    eligible: false,
  },
  {
    word: "praxar",
    eligible: false,
  },
  {
    word: "praxia",
    eligible: false,
  },
  {
    word: "práxis",
    eligible: false,
  },
  {
    word: "prazer",
    eligible: false,
  },
  {
    word: "prazos",
    eligible: false,
  },
  {
    word: "preçar",
    eligible: false,
  },
  {
    word: "precha",
    eligible: false,
  },
  {
    word: "précio",
    eligible: false,
  },
  {
    word: "précis",
    eligible: false,
  },
  {
    word: "preços",
    eligible: false,
  },
  {
    word: "precoz",
    eligible: false,
  },
  {
    word: "prédio",
    eligible: false,
  },
  {
    word: "pregão",
    eligible: false,
  },
  {
    word: "pregar",
    eligible: false,
  },
  {
    word: "pregos",
    eligible: false,
  },
  {
    word: "prégua",
    eligible: false,
  },
  {
    word: "prélio",
    eligible: false,
  },
  {
    word: "premar",
    eligible: false,
  },
  {
    word: "premer",
    eligible: false,
  },
  {
    word: "premiê",
    eligible: false,
  },
  {
    word: "prêmio",
    eligible: false,
  },
  {
    word: "premir",
    eligible: false,
  },
  {
    word: "prensa",
    eligible: false,
  },
  {
    word: "presar",
    eligible: false,
  },
  {
    word: "presas",
    eligible: false,
  },
  {
    word: "presbi",
    eligible: false,
  },
  {
    word: "presor",
    eligible: false,
  },
  {
    word: "presos",
    eligible: false,
  },
  {
    word: "presso",
    eligible: false,
  },
  {
    word: "presta",
    eligible: false,
  },
  {
    word: "pretas",
    eligible: false,
  },
  {
    word: "pretor",
    eligible: false,
  },
  {
    word: "pretos",
    eligible: false,
  },
  {
    word: "prever",
    eligible: false,
  },
  {
    word: "prévio",
    eligible: false,
  },
  {
    word: "prezar",
    eligible: false,
  },
  {
    word: "prézea",
    eligible: false,
  },
  {
    word: "priaca",
    eligible: false,
  },
  {
    word: "príamo",
    eligible: false,
  },
  {
    word: "priapo",
    eligible: false,
  },
  {
    word: "Prieto",
    eligible: false,
  },
  {
    word: "prijuí",
    eligible: false,
  },
  {
    word: "primal",
    eligible: false,
  },
  {
    word: "primar",
    eligible: false,
  },
  {
    word: "primas",
    eligible: false,
  },
  {
    word: "primaz",
    eligible: false,
  },
  {
    word: "primor",
    eligible: false,
  },
  {
    word: "primos",
    eligible: false,
  },
  {
    word: "Prince",
    eligible: false,
  },
  {
    word: "prínia",
    eligible: false,
  },
  {
    word: "príone",
    eligible: false,
  },
  {
    word: "príono",
    eligible: false,
  },
  {
    word: "priori",
    eligible: false,
  },
  {
    word: "prisão",
    eligible: false,
  },
  {
    word: "prisma",
    eligible: false,
  },
  {
    word: "priste",
    eligible: false,
  },
  {
    word: "pristo",
    eligible: false,
  },
  {
    word: "privar",
    eligible: false,
  },
  {
    word: "proale",
    eligible: false,
  },
  {
    word: "próavo",
    eligible: false,
  },
  {
    word: "procaz",
    eligible: false,
  },
  {
    word: "prócer",
    eligible: false,
  },
  {
    word: "prócie",
    eligible: false,
  },
  {
    word: "prócio",
    eligible: false,
  },
  {
    word: "Procon",
    eligible: false,
  },
  {
    word: "procto",
    eligible: false,
  },
  {
    word: "proeza",
    eligible: false,
  },
  {
    word: "progne",
    eligible: false,
  },
  {
    word: "prolan",
    eligible: false,
  },
  {
    word: "Pronaf",
    eligible: false,
  },
  {
    word: "prônax",
    eligible: false,
  },
  {
    word: "prônoe",
    eligible: false,
  },
  {
    word: "pronta",
    eligible: false,
  },
  {
    word: "Pronto",
    eligible: false,
  },
  {
    word: "pronto",
    eligible: false,
  },
  {
    word: "propiá",
    eligible: false,
  },
  {
    word: "propor",
    eligible: false,
  },
  {
    word: "propos",
    eligible: false,
  },
  {
    word: "prosar",
    eligible: false,
  },
  {
    word: "prosma",
    eligible: false,
  },
  {
    word: "protão",
    eligible: false,
  },
  {
    word: "próteo",
    eligible: false,
  },
  {
    word: "prótio",
    eligible: false,
  },
  {
    word: "prótis",
    eligible: false,
  },
  {
    word: "próton",
    eligible: false,
  },
  {
    word: "provão",
    eligible: false,
  },
  {
    word: "provar",
    eligible: false,
  },
  {
    word: "provas",
    eligible: false,
  },
  {
    word: "prover",
    eligible: false,
  },
  {
    word: "provir",
    eligible: false,
  },
  {
    word: "próxis",
    eligible: false,
  },
  {
    word: "prozar",
    eligible: false,
  },
  {
    word: "pruína",
    eligible: false,
  },
  {
    word: "prumão",
    eligible: false,
  },
  {
    word: "prumar",
    eligible: false,
  },
  {
    word: "prumos",
    eligible: false,
  },
  {
    word: "prurir",
    eligible: false,
  },
  {
    word: "prusso",
    eligible: false,
  },
  {
    word: "psális",
    eligible: false,
  },
  {
    word: "psálix",
    eligible: false,
  },
  {
    word: "psélio",
    eligible: false,
  },
  {
    word: "psenes",
    eligible: false,
  },
  {
    word: "psésio",
    eligible: false,
  },
  {
    word: "pseudo",
    eligible: false,
  },
  {
    word: "psiado",
    eligible: false,
  },
  {
    word: "psiché",
    eligible: false,
  },
  {
    word: "psichê",
    eligible: false,
  },
  {
    word: "psídio",
    eligible: false,
  },
  {
    word: "psílio",
    eligible: false,
  },
  {
    word: "psique",
    eligible: false,
  },
  {
    word: "psiquê",
    eligible: false,
  },
  {
    word: "psítio",
    eligible: false,
  },
  {
    word: "psófia",
    eligible: false,
  },
  {
    word: "psoíte",
    eligible: false,
  },
  {
    word: "ptélea",
    eligible: false,
  },
  {
    word: "ptênio",
    eligible: false,
  },
  {
    word: "ptério",
    eligible: false,
  },
  {
    word: "ptéris",
    eligible: false,
  },
  {
    word: "ptialo",
    eligible: false,
  },
  {
    word: "puampé",
    eligible: false,
  },
  {
    word: "púbere",
    eligible: false,
  },
  {
    word: "púbico",
    eligible: false,
  },
  {
    word: "pucaçu",
    eligible: false,
  },
  {
    word: "púcaro",
    eligible: false,
  },
  {
    word: "pucela",
    eligible: false,
  },
  {
    word: "púcero",
    eligible: false,
  },
  {
    word: "puchom",
    eligible: false,
  },
  {
    word: "pucino",
    eligible: false,
  },
  {
    word: "puçuca",
    eligible: false,
  },
  {
    word: "pucumã",
    eligible: false,
  },
  {
    word: "pucuri",
    eligible: false,
  },
  {
    word: "pudice",
    eligible: false,
  },
  {
    word: "pudico",
    eligible: false,
  },
  {
    word: "pudlar",
    eligible: false,
  },
  {
    word: "pudvém",
    eligible: false,
  },
  {
    word: "puelar",
    eligible: false,
  },
  {
    word: "puélia",
    eligible: false,
  },
  {
    word: "pueril",
    eligible: false,
  },
  {
    word: "pufino",
    eligible: false,
  },
  {
    word: "Pugmil",
    eligible: false,
  },
  {
    word: "pugnar",
    eligible: false,
  },
  {
    word: "pugnaz",
    eligible: false,
  },
  {
    word: "puitar",
    eligible: false,
  },
  {
    word: "pujacá",
    eligible: false,
  },
  {
    word: "pujixá",
    eligible: false,
  },
  {
    word: "pulcro",
    eligible: false,
  },
  {
    word: "pulear",
    eligible: false,
  },
  {
    word: "pulgão",
    eligible: false,
  },
  {
    word: "pulgas",
    eligible: false,
  },
  {
    word: "pulhar",
    eligible: false,
  },
  {
    word: "púlice",
    eligible: false,
  },
  {
    word: "pulmão",
    eligible: false,
  },
  {
    word: "pulona",
    eligible: false,
  },
  {
    word: "pulpar",
    eligible: false,
  },
  {
    word: "pulque",
    eligible: false,
  },
  {
    word: "pulsão",
    eligible: false,
  },
  {
    word: "pulsar",
    eligible: false,
  },
  {
    word: "pulsos",
    eligible: false,
  },
  {
    word: "pultar",
    eligible: false,
  },
  {
    word: "puluar",
    eligible: false,
  },
  {
    word: "pumari",
    eligible: false,
  },
  {
    word: "púmice",
    eligible: false,
  },
  {
    word: "pumpro",
    eligible: false,
  },
  {
    word: "pumumo",
    eligible: false,
  },
  {
    word: "punaca",
    eligible: false,
  },
  {
    word: "punaré",
    eligible: false,
  },
  {
    word: "punaru",
    eligible: false,
  },
  {
    word: "punção",
    eligible: false,
  },
  {
    word: "punçar",
    eligible: false,
  },
  {
    word: "puncta",
    eligible: false,
  },
  {
    word: "pungir",
    eligible: false,
  },
  {
    word: "pungue",
    eligible: false,
  },
  {
    word: "punhal",
    eligible: false,
  },
  {
    word: "punhão",
    eligible: false,
  },
  {
    word: "punhos",
    eligible: false,
  },
  {
    word: "púnico",
    eligible: false,
  },
  {
    word: "puntar",
    eligible: false,
  },
  {
    word: "Puntel",
    eligible: false,
  },
  {
    word: "puntos",
    eligible: false,
  },
  {
    word: "pupilo",
    eligible: false,
  },
  {
    word: "pupina",
    eligible: false,
  },
  {
    word: "púraca",
    eligible: false,
  },
  {
    word: "puracé",
    eligible: false,
  },
  {
    word: "puraci",
    eligible: false,
  },
  {
    word: "puranã",
    eligible: false,
  },
  {
    word: "puravá",
    eligible: false,
  },
  {
    word: "pureza",
    eligible: false,
  },
  {
    word: "purgar",
    eligible: false,
  },
  {
    word: "purgas",
    eligible: false,
  },
  {
    word: "púrico",
    eligible: false,
  },
  {
    word: "purina",
    eligible: false,
  },
  {
    word: "purona",
    eligible: false,
  },
  {
    word: "púrrio",
    eligible: false,
  },
  {
    word: "puruca",
    eligible: false,
  },
  {
    word: "puruís",
    eligible: false,
  },
  {
    word: "puruma",
    eligible: false,
  },
  {
    word: "purumá",
    eligible: false,
  },
  {
    word: "purumã",
    eligible: false,
  },
  {
    word: "pururu",
    eligible: false,
  },
  {
    word: "putada",
    eligible: false,
  },
  {
    word: "putauá",
    eligible: false,
  },
  {
    word: "puteal",
    eligible: false,
  },
  {
    word: "putear",
    eligible: false,
  },
  {
    word: "putedo",
    eligible: false,
  },
  {
    word: "pútega",
    eligible: false,
  },
  {
    word: "puteus",
    eligible: false,
  },
  {
    word: "putici",
    eligible: false,
  },
  {
    word: "putila",
    eligible: false,
  },
  {
    word: "putter",
    eligible: false,
  },
  {
    word: "putuca",
    eligible: false,
  },
  {
    word: "puxado",
    eligible: false,
  },
  {
    word: "puxeta",
    eligible: false,
  },
  {
    word: "puxiri",
    eligible: false,
  },
  {
    word: "puxuri",
    eligible: false,
  },
  {
    word: "puzzle",
    eligible: false,
  },
  {
    word: "quacre",
    eligible: false,
  },
  {
    word: "quadra",
    eligible: false,
  },
  {
    word: "Quadro",
    eligible: false,
  },
  {
    word: "quadro",
    eligible: false,
  },
  {
    word: "quaira",
    eligible: false,
  },
  {
    word: "quálea",
    eligible: false,
  },
  {
    word: "qualés",
    eligible: false,
  },
  {
    word: "quando",
    eligible: false,
  },
  {
    word: "quanté",
    eligible: false,
  },
  {
    word: "quanto",
    eligible: false,
  },
  {
    word: "quanza",
    eligible: false,
  },
  {
    word: "Quaraí",
    eligible: false,
  },
  {
    word: "quarar",
    eligible: false,
  },
  {
    word: "quarás",
    eligible: false,
  },
  {
    word: "quarço",
    eligible: false,
  },
  {
    word: "quaris",
    eligible: false,
  },
  {
    word: "Quarta",
    eligible: false,
  },
  {
    word: "quarta",
    eligible: false,
  },
  {
    word: "quartã",
    eligible: false,
  },
  {
    word: "quarto",
    eligible: false,
  },
  {
    word: "quasar",
    eligible: false,
  },
  {
    word: "quatás",
    eligible: false,
  },
  {
    word: "quatis",
    eligible: false,
  },
  {
    word: "Quatro",
    eligible: false,
  },
  {
    word: "quatro",
    eligible: false,
  },
  {
    word: "qubits",
    eligible: false,
  },
  {
    word: "Quebec",
    eligible: false,
  },
  {
    word: "Quebra",
    eligible: false,
  },
  {
    word: "quebra",
    eligible: false,
  },
  {
    word: "queche",
    eligible: false,
  },
  {
    word: "quedar",
    eligible: false,
  },
  {
    word: "quedas",
    eligible: false,
  },
  {
    word: "quédio",
    eligible: false,
  },
  {
    word: "quedos",
    eligible: false,
  },
  {
    word: "quefir",
    eligible: false,
  },
  {
    word: "queijo",
    eligible: false,
  },
  {
    word: "queilo",
    eligible: false,
  },
  {
    word: "queima",
    eligible: false,
  },
  {
    word: "queire",
    eligible: false,
  },
  {
    word: "queiro",
    eligible: false,
  },
  {
    word: "queiró",
    eligible: false,
  },
  {
    word: "queixa",
    eligible: false,
  },
  {
    word: "queixo",
    eligible: false,
  },
  {
    word: "quelar",
    eligible: false,
  },
  {
    word: "quélea",
    eligible: false,
  },
  {
    word: "quelém",
    eligible: false,
  },
  {
    word: "quelho",
    eligible: false,
  },
  {
    word: "quélia",
    eligible: false,
  },
  {
    word: "quelim",
    eligible: false,
  },
  {
    word: "quélis",
    eligible: false,
  },
  {
    word: "quelme",
    eligible: false,
  },
  {
    word: "quelmo",
    eligible: false,
  },
  {
    word: "Queluz",
    eligible: false,
  },
  {
    word: "quembe",
    eligible: false,
  },
  {
    word: "Quemós",
    eligible: false,
  },
  {
    word: "quende",
    eligible: false,
  },
  {
    word: "quendô",
    eligible: false,
  },
  {
    word: "queneu",
    eligible: false,
  },
  {
    word: "quengo",
    eligible: false,
  },
  {
    word: "Quênia",
    eligible: false,
  },
  {
    word: "quente",
    eligible: false,
  },
  {
    word: "queoma",
    eligible: false,
  },
  {
    word: "queomó",
    eligible: false,
  },
  {
    word: "Quéops",
    eligible: false,
  },
  {
    word: "queque",
    eligible: false,
  },
  {
    word: "quequé",
    eligible: false,
  },
  {
    word: "querco",
    eligible: false,
  },
  {
    word: "querer",
    eligible: false,
  },
  {
    word: "quério",
    eligible: false,
  },
  {
    word: "quéris",
    eligible: false,
  },
  {
    word: "queros",
    eligible: false,
  },
  {
    word: "quesal",
    eligible: false,
  },
  {
    word: "quesri",
    eligible: false,
  },
  {
    word: "questa",
    eligible: false,
  },
  {
    word: "quetri",
    eligible: false,
  },
  {
    word: "quetua",
    eligible: false,
  },
  {
    word: "quevel",
    eligible: false,
  },
  {
    word: "quezia",
    eligible: false,
  },
  {
    word: "quiabo",
    eligible: false,
  },
  {
    word: "quiaça",
    eligible: false,
  },
  {
    word: "quiala",
    eligible: false,
  },
  {
    word: "quiama",
    eligible: false,
  },
  {
    word: "quiara",
    eligible: false,
  },
  {
    word: "quiari",
    eligible: false,
  },
  {
    word: "quíbis",
    eligible: false,
  },
  {
    word: "quiboa",
    eligible: false,
  },
  {
    word: "quíbua",
    eligible: false,
  },
  {
    word: "quíbus",
    eligible: false,
  },
  {
    word: "quiçai",
    eligible: false,
  },
  {
    word: "quiçal",
    eligible: false,
  },
  {
    word: "quicar",
    eligible: false,
  },
  {
    word: "quicas",
    eligible: false,
  },
  {
    word: "quiçau",
    eligible: false,
  },
  {
    word: "quicês",
    eligible: false,
  },
  {
    word: "quiche",
    eligible: false,
  },
  {
    word: "quiché",
    eligible: false,
  },
  {
    word: "quício",
    eligible: false,
  },
  {
    word: "quicoa",
    eligible: false,
  },
  {
    word: "quicos",
    eligible: false,
  },
  {
    word: "quicua",
    eligible: false,
  },
  {
    word: "quiçua",
    eligible: false,
  },
  {
    word: "quidam",
    eligible: false,
  },
  {
    word: "quiela",
    eligible: false,
  },
  {
    word: "quiina",
    eligible: false,
  },
  {
    word: "quiita",
    eligible: false,
  },
  {
    word: "quilha",
    eligible: false,
  },
  {
    word: "quilim",
    eligible: false,
  },
  {
    word: "quílio",
    eligible: false,
  },
  {
    word: "quilme",
    eligible: false,
  },
  {
    word: "quíloa",
    eligible: false,
  },
  {
    word: "quilos",
    eligible: false,
  },
  {
    word: "quimão",
    eligible: false,
  },
  {
    word: "quimau",
    eligible: false,
  },
  {
    word: "quimes",
    eligible: false,
  },
  {
    word: "quimia",
    eligible: false,
  },
  {
    word: "quinal",
    eligible: false,
  },
  {
    word: "quinar",
    eligible: false,
  },
  {
    word: "quinas",
    eligible: false,
  },
  {
    word: "quinau",
    eligible: false,
  },
  {
    word: "quinca",
    eligible: false,
  },
  {
    word: "quinda",
    eligible: false,
  },
  {
    word: "quinim",
    eligible: false,
  },
  {
    word: "quínio",
    eligible: false,
  },
  {
    word: "quinoa",
    eligible: false,
  },
  {
    word: "quinol",
    eligible: false,
  },
  {
    word: "quinor",
    eligible: false,
  },
  {
    word: "quinos",
    eligible: false,
  },
  {
    word: "Quinta",
    eligible: false,
  },
  {
    word: "quinta",
    eligible: false,
  },
  {
    word: "quinté",
    eligible: false,
  },
  {
    word: "quinti",
    eligible: false,
  },
  {
    word: "quinto",
    eligible: false,
  },
  {
    word: "quinze",
    eligible: false,
  },
  {
    word: "quinzo",
    eligible: false,
  },
  {
    word: "quioco",
    eligible: false,
  },
  {
    word: "quioio",
    eligible: false,
  },
  {
    word: "quioiô",
    eligible: false,
  },
  {
    word: "quiota",
    eligible: false,
  },
  {
    word: "Quioto",
    eligible: false,
  },
  {
    word: "quiova",
    eligible: false,
  },
  {
    word: "quioza",
    eligible: false,
  },
  {
    word: "quíper",
    eligible: false,
  },
  {
    word: "quipiú",
    eligible: false,
  },
  {
    word: "quiqui",
    eligible: false,
  },
  {
    word: "quiral",
    eligible: false,
  },
  {
    word: "Quirão",
    eligible: false,
  },
  {
    word: "quirdi",
    eligible: false,
  },
  {
    word: "quírie",
    eligible: false,
  },
  {
    word: "quirim",
    eligible: false,
  },
  {
    word: "quiruá",
    eligible: false,
  },
  {
    word: "quisco",
    eligible: false,
  },
  {
    word: "quispá",
    eligible: false,
  },
  {
    word: "quisto",
    eligible: false,
  },
  {
    word: "quitão",
    eligible: false,
  },
  {
    word: "quitar",
    eligible: false,
  },
  {
    word: "quitia",
    eligible: false,
  },
  {
    word: "Quitim",
    eligible: false,
  },
  {
    word: "quíton",
    eligible: false,
  },
  {
    word: "quitos",
    eligible: false,
  },
  {
    word: "quitué",
    eligible: false,
  },
  {
    word: "quitul",
    eligible: false,
  },
  {
    word: "quíxia",
    eligible: false,
  },
  {
    word: "quorum",
    eligible: false,
  },
  {
    word: "quórum",
    eligible: false,
  },
  {
    word: "quotar",
    eligible: false,
  },
  {
    word: "quotas",
    eligible: false,
  },
  {
    word: "rababe",
    eligible: false,
  },
  {
    word: "rabaça",
    eligible: false,
  },
  {
    word: "rabaço",
    eligible: false,
  },
  {
    word: "rabado",
    eligible: false,
  },
  {
    word: "rábano",
    eligible: false,
  },
  {
    word: "rábãos",
    eligible: false,
  },
  {
    word: "rabata",
    eligible: false,
  },
  {
    word: "rábdia",
    eligible: false,
  },
  {
    word: "rabear",
    eligible: false,
  },
  {
    word: "rabeca",
    eligible: false,
  },
  {
    word: "rabeco",
    eligible: false,
  },
  {
    word: "rabelo",
    eligible: false,
  },
  {
    word: "rabete",
    eligible: false,
  },
  {
    word: "rabeto",
    eligible: false,
  },
  {
    word: "rabiar",
    eligible: false,
  },
  {
    word: "rabiça",
    eligible: false,
  },
  {
    word: "rabicó",
    eligible: false,
  },
  {
    word: "rabiço",
    eligible: false,
  },
  {
    word: "rábico",
    eligible: false,
  },
  {
    word: "rábido",
    eligible: false,
  },
  {
    word: "rabigo",
    eligible: false,
  },
  {
    word: "rabino",
    eligible: false,
  },
  {
    word: "rabita",
    eligible: false,
  },
  {
    word: "rábita",
    eligible: false,
  },
  {
    word: "rabito",
    eligible: false,
  },
  {
    word: "rabolo",
    eligible: false,
  },
  {
    word: "raboso",
    eligible: false,
  },
  {
    word: "rabuco",
    eligible: false,
  },
  {
    word: "rabuda",
    eligible: false,
  },
  {
    word: "rabudo",
    eligible: false,
  },
  {
    word: "rabuge",
    eligible: false,
  },
  {
    word: "rábula",
    eligible: false,
  },
  {
    word: "raçado",
    eligible: false,
  },
  {
    word: "racama",
    eligible: false,
  },
  {
    word: "racear",
    eligible: false,
  },
  {
    word: "racemo",
    eligible: false,
  },
  {
    word: "rachão",
    eligible: false,
  },
  {
    word: "rachar",
    eligible: false,
  },
  {
    word: "Racial",
    eligible: false,
  },
  {
    word: "racial",
    eligible: false,
  },
  {
    word: "rácico",
    eligible: false,
  },
  {
    word: "racimo",
    eligible: false,
  },
  {
    word: "raçoar",
    eligible: false,
  },
  {
    word: "racose",
    eligible: false,
  },
  {
    word: "raçudo",
    eligible: false,
  },
  {
    word: "radial",
    eligible: false,
  },
  {
    word: "radiar",
    eligible: false,
  },
  {
    word: "rádico",
    eligible: false,
  },
  {
    word: "rádios",
    eligible: false,
  },
  {
    word: "rádium",
    eligible: false,
  },
  {
    word: "radomo",
    eligible: false,
  },
  {
    word: "radote",
    eligible: false,
  },
  {
    word: "rádula",
    eligible: false,
  },
  {
    word: "Rafael",
    eligible: false,
  },
  {
    word: "rafael",
    eligible: false,
  },
  {
    word: "rafalo",
    eligible: false,
  },
  {
    word: "ráfano",
    eligible: false,
  },
  {
    word: "Rafard",
    eligible: false,
  },
  {
    word: "raffar",
    eligible: false,
  },
  {
    word: "rafiar",
    eligible: false,
  },
  {
    word: "ráfide",
    eligible: false,
  },
  {
    word: "rafiro",
    eligible: false,
  },
  {
    word: "rafite",
    eligible: false,
  },
  {
    word: "rafles",
    eligible: false,
  },
  {
    word: "ráfnia",
    eligible: false,
  },
  {
    word: "ragada",
    eligible: false,
  },
  {
    word: "rágade",
    eligible: false,
  },
  {
    word: "ragião",
    eligible: false,
  },
  {
    word: "ragite",
    eligible: false,
  },
  {
    word: "ragura",
    eligible: false,
  },
  {
    word: "raiada",
    eligible: false,
  },
  {
    word: "raiado",
    eligible: false,
  },
  {
    word: "raiano",
    eligible: false,
  },
  {
    word: "raigão",
    eligible: false,
  },
  {
    word: "raíida",
    eligible: false,
  },
  {
    word: "railhe",
    eligible: false,
  },
  {
    word: "rainha",
    eligible: false,
  },
  {
    word: "rainho",
    eligible: false,
  },
  {
    word: "raiola",
    eligible: false,
  },
  {
    word: "raioso",
    eligible: false,
  },
  {
    word: "Raíssa",
    eligible: false,
  },
  {
    word: "raiuna",
    eligible: false,
  },
  {
    word: "raival",
    eligible: false,
  },
  {
    word: "raivar",
    eligible: false,
  },
  {
    word: "raivel",
    eligible: false,
  },
  {
    word: "raízes",
    eligible: false,
  },
  {
    word: "rajabe",
    eligible: false,
  },
  {
    word: "rajada",
    eligible: false,
  },
  {
    word: "rajado",
    eligible: false,
  },
  {
    word: "rájava",
    eligible: false,
  },
  {
    word: "rájida",
    eligible: false,
  },
  {
    word: "rajido",
    eligible: false,
  },
  {
    word: "ralado",
    eligible: false,
  },
  {
    word: "ralear",
    eligible: false,
  },
  {
    word: "ralete",
    eligible: false,
  },
  {
    word: "raleza",
    eligible: false,
  },
  {
    word: "ralhão",
    eligible: false,
  },
  {
    word: "ralhar",
    eligible: false,
  },
  {
    word: "ralhos",
    eligible: false,
  },
  {
    word: "ralice",
    eligible: false,
  },
  {
    word: "rálida",
    eligible: false,
  },
  {
    word: "ralina",
    eligible: false,
  },
  {
    word: "raluto",
    eligible: false,
  },
  {
    word: "ramadã",
    eligible: false,
  },
  {
    word: "ramazã",
    eligible: false,
  },
  {
    word: "rambla",
    eligible: false,
  },
  {
    word: "rameal",
    eligible: false,
  },
  {
    word: "ramear",
    eligible: false,
  },
  {
    word: "ramela",
    eligible: false,
  },
  {
    word: "rameta",
    eligible: false,
  },
  {
    word: "Ramiro",
    eligible: false,
  },
  {
    word: "ramiso",
    eligible: false,
  },
  {
    word: "ramnal",
    eligible: false,
  },
  {
    word: "râmneo",
    eligible: false,
  },
  {
    word: "râmola",
    eligible: false,
  },
  {
    word: "ramona",
    eligible: false,
  },
  {
    word: "ramosa",
    eligible: false,
  },
  {
    word: "ramoso",
    eligible: false,
  },
  {
    word: "Ramsés",
    eligible: false,
  },
  {
    word: "ramuda",
    eligible: false,
  },
  {
    word: "ramudo",
    eligible: false,
  },
  {
    word: "râmulo",
    eligible: false,
  },
  {
    word: "ranale",
    eligible: false,
  },
  {
    word: "ranção",
    eligible: false,
  },
  {
    word: "rançar",
    eligible: false,
  },
  {
    word: "rancho",
    eligible: false,
  },
  {
    word: "râncio",
    eligible: false,
  },
  {
    word: "rancor",
    eligible: false,
  },
  {
    word: "ranços",
    eligible: false,
  },
  {
    word: "rândia",
    eligible: false,
  },
  {
    word: "ranela",
    eligible: false,
  },
  {
    word: "ranfar",
    eligible: false,
  },
  {
    word: "rânfia",
    eligible: false,
  },
  {
    word: "ranfos",
    eligible: false,
  },
  {
    word: "rangar",
    eligible: false,
  },
  {
    word: "rangel",
    eligible: false,
  },
  {
    word: "ranger",
    eligible: false,
  },
  {
    word: "ranges",
    eligible: false,
  },
  {
    word: "rângia",
    eligible: false,
  },
  {
    word: "rangir",
    eligible: false,
  },
  {
    word: "rangos",
    eligible: false,
  },
  {
    word: "ranhão",
    eligible: false,
  },
  {
    word: "ranhar",
    eligible: false,
  },
  {
    word: "rânida",
    eligible: false,
  },
  {
    word: "ranino",
    eligible: false,
  },
  {
    word: "ranque",
    eligible: false,
  },
  {
    word: "rânula",
    eligible: false,
  },
  {
    word: "ranzal",
    eligible: false,
  },
  {
    word: "rapace",
    eligible: false,
  },
  {
    word: "rapada",
    eligible: false,
  },
  {
    word: "rapado",
    eligible: false,
  },
  {
    word: "rapano",
    eligible: false,
  },
  {
    word: "rapapé",
    eligible: false,
  },
  {
    word: "rapaza",
    eligible: false,
  },
  {
    word: "rapiar",
    eligible: false,
  },
  {
    word: "rapiás",
    eligible: false,
  },
  {
    word: "rápido",
    eligible: false,
  },
  {
    word: "rapina",
    eligible: false,
  },
  {
    word: "rapola",
    eligible: false,
  },
  {
    word: "raposa",
    eligible: false,
  },
  {
    word: "raposo",
    eligible: false,
  },
  {
    word: "rappel",
    eligible: false,
  },
  {
    word: "ráppia",
    eligible: false,
  },
  {
    word: "raptar",
    eligible: false,
  },
  {
    word: "raptor",
    eligible: false,
  },
  {
    word: "raptos",
    eligible: false,
  },
  {
    word: "rapume",
    eligible: false,
  },
  {
    word: "raquel",
    eligible: false,
  },
  {
    word: "ráquio",
    eligible: false,
  },
  {
    word: "rarear",
    eligible: false,
  },
  {
    word: "rareza",
    eligible: false,
  },
  {
    word: "rascão",
    eligible: false,
  },
  {
    word: "rascar",
    eligible: false,
  },
  {
    word: "rascoa",
    eligible: false,
  },
  {
    word: "rascol",
    eligible: false,
  },
  {
    word: "rasgão",
    eligible: false,
  },
  {
    word: "rasgar",
    eligible: false,
  },
  {
    word: "rasgos",
    eligible: false,
  },
  {
    word: "rasina",
    eligible: false,
  },
  {
    word: "raspão",
    eligible: false,
  },
  {
    word: "raspar",
    eligible: false,
  },
  {
    word: "rastão",
    eligible: false,
  },
  {
    word: "rastro",
    eligible: false,
  },
  {
    word: "ratear",
    eligible: false,
  },
  {
    word: "ratice",
    eligible: false,
  },
  {
    word: "ratite",
    eligible: false,
  },
  {
    word: "ratões",
    eligible: false,
  },
  {
    word: "rátulo",
    eligible: false,
  },
  {
    word: "raudal",
    eligible: false,
  },
  {
    word: "raudão",
    eligible: false,
  },
  {
    word: "rauite",
    eligible: false,
  },
  {
    word: "rausar",
    eligible: false,
  },
  {
    word: "rausor",
    eligible: false,
  },
  {
    word: "ravana",
    eligible: false,
  },
  {
    word: "raveta",
    eligible: false,
  },
  {
    word: "raxeta",
    eligible: false,
  },
  {
    word: "Raydan",
    eligible: false,
  },
  {
    word: "raziar",
    eligible: false,
  },
  {
    word: "razimo",
    eligible: false,
  },
  {
    word: "razoar",
    eligible: false,
  },
  {
    word: "razões",
    eligible: false,
  },
  {
    word: "reação",
    eligible: false,
  },
  {
    word: "readal",
    eligible: false,
  },
  {
    word: "reagir",
    eligible: false,
  },
  {
    word: "reator",
    eligible: false,
  },
  {
    word: "reaver",
    eligible: false,
  },
  {
    word: "rebabe",
    eligible: false,
  },
  {
    word: "rebaçã",
    eligible: false,
  },
  {
    word: "rebate",
    eligible: false,
  },
  {
    word: "rebeca",
    eligible: false,
  },
  {
    word: "reboço",
    eligible: false,
  },
  {
    word: "reboos",
    eligible: false,
  },
  {
    word: "rebose",
    eligible: false,
  },
  {
    word: "rebria",
    eligible: false,
  },
  {
    word: "rebuço",
    eligible: false,
  },
  {
    word: "rebute",
    eligible: false,
  },
  {
    word: "Recabe",
    eligible: false,
  },
  {
    word: "recado",
    eligible: false,
  },
  {
    word: "recaus",
    eligible: false,
  },
  {
    word: "recife",
    eligible: false,
  },
  {
    word: "récipe",
    eligible: false,
  },
  {
    word: "récita",
    eligible: false,
  },
  {
    word: "récova",
    eligible: false,
  },
  {
    word: "recuão",
    eligible: false,
  },
  {
    word: "recuar",
    eligible: false,
  },
  {
    word: "recula",
    eligible: false,
  },
  {
    word: "récula",
    eligible: false,
  },
  {
    word: "recuos",
    eligible: false,
  },
  {
    word: "redabe",
    eligible: false,
  },
  {
    word: "redeal",
    eligible: false,
  },
  {
    word: "rédeas",
    eligible: false,
  },
  {
    word: "redita",
    eligible: false,
  },
  {
    word: "rédito",
    eligible: false,
  },
  {
    word: "redões",
    eligible: false,
  },
  {
    word: "redoma",
    eligible: false,
  },
  {
    word: "redona",
    eligible: false,
  },
  {
    word: "rédone",
    eligible: false,
  },
  {
    word: "rédono",
    eligible: false,
  },
  {
    word: "redova",
    eligible: false,
  },
  {
    word: "redrar",
    eligible: false,
  },
  {
    word: "redura",
    eligible: false,
  },
  {
    word: "Refaim",
    eligible: false,
  },
  {
    word: "refego",
    eligible: false,
  },
  {
    word: "refião",
    eligible: false,
  },
  {
    word: "reflar",
    eligible: false,
  },
  {
    word: "réfluo",
    eligible: false,
  },
  {
    word: "refrão",
    eligible: false,
  },
  {
    word: "refrém",
    eligible: false,
  },
  {
    word: "regano",
    eligible: false,
  },
  {
    word: "reggae",
    eligible: false,
  },
  {
    word: "Região",
    eligible: false,
  },
  {
    word: "região",
    eligible: false,
  },
  {
    word: "régias",
    eligible: false,
  },
  {
    word: "regibó",
    eligible: false,
  },
  {
    word: "regime",
    eligible: false,
  },
  {
    word: "regina",
    eligible: false,
  },
  {
    word: "régios",
    eligible: false,
  },
  {
    word: "regoar",
    eligible: false,
  },
  {
    word: "regola",
    eligible: false,
  },
  {
    word: "regota",
    eligible: false,
  },
  {
    word: "regrar",
    eligible: false,
  },
  {
    word: "regras",
    eligible: false,
  },
  {
    word: "réguas",
    eligible: false,
  },
  {
    word: "régulo",
    eligible: false,
  },
  {
    word: "reicua",
    eligible: false,
  },
  {
    word: "reídeo",
    eligible: false,
  },
  {
    word: "reimão",
    eligible: false,
  },
  {
    word: "reinal",
    eligible: false,
  },
  {
    word: "reinar",
    eligible: false,
  },
  {
    word: "reinel",
    eligible: false,
  },
  {
    word: "reinol",
    eligible: false,
  },
  {
    word: "reinos",
    eligible: false,
  },
  {
    word: "reísmo",
    eligible: false,
  },
  {
    word: "reísta",
    eligible: false,
  },
  {
    word: "Reitor",
    eligible: false,
  },
  {
    word: "reitor",
    eligible: false,
  },
  {
    word: "reitre",
    eligible: false,
  },
  {
    word: "reiuno",
    eligible: false,
  },
  {
    word: "reixar",
    eligible: false,
  },
  {
    word: "Rejane",
    eligible: false,
  },
  {
    word: "rejeto",
    eligible: false,
  },
  {
    word: "relejo",
    eligible: false,
  },
  {
    word: "relevo",
    eligible: false,
  },
  {
    word: "relexo",
    eligible: false,
  },
  {
    word: "relhar",
    eligible: false,
  },
  {
    word: "relhos",
    eligible: false,
  },
  {
    word: "relval",
    eligible: false,
  },
  {
    word: "relvão",
    eligible: false,
  },
  {
    word: "relvar",
    eligible: false,
  },
  {
    word: "relvas",
    eligible: false,
  },
  {
    word: "remate",
    eligible: false,
  },
  {
    word: "remela",
    eligible: false,
  },
  {
    word: "rêmige",
    eligible: false,
  },
  {
    word: "rémora",
    eligible: false,
  },
  {
    word: "rêmora",
    eligible: false,
  },
  {
    word: "Rêmulo",
    eligible: false,
  },
  {
    word: "renano",
    eligible: false,
  },
  {
    word: "rendão",
    eligible: false,
  },
  {
    word: "rendar",
    eligible: false,
  },
  {
    word: "rendas",
    eligible: false,
  },
  {
    word: "render",
    eligible: false,
  },
  {
    word: "rendez",
    eligible: false,
  },
  {
    word: "rendor",
    eligible: false,
  },
  {
    word: "rengra",
    eligible: false,
  },
  {
    word: "rengue",
    eligible: false,
  },
  {
    word: "renhão",
    eligible: false,
  },
  {
    word: "renhir",
    eligible: false,
  },
  {
    word: "rênico",
    eligible: false,
  },
  {
    word: "renila",
    eligible: false,
  },
  {
    word: "renina",
    eligible: false,
  },
  {
    word: "renque",
    eligible: false,
  },
  {
    word: "renrém",
    eligible: false,
  },
  {
    word: "rentão",
    eligible: false,
  },
  {
    word: "rentar",
    eligible: false,
  },
  {
    word: "rentês",
    eligible: false,
  },
  {
    word: "renuir",
    eligible: false,
  },
  {
    word: "reóbio",
    eligible: false,
  },
  {
    word: "repção",
    eligible: false,
  },
  {
    word: "repere",
    eligible: false,
  },
  {
    word: "reptar",
    eligible: false,
  },
  {
    word: "reptil",
    eligible: false,
  },
  {
    word: "réptil",
    eligible: false,
  },
  {
    word: "reptos",
    eligible: false,
  },
  {
    word: "Requém",
    eligible: false,
  },
  {
    word: "réquia",
    eligible: false,
  },
  {
    word: "réquie",
    eligible: false,
  },
  {
    word: "requim",
    eligible: false,
  },
  {
    word: "reseda",
    eligible: false,
  },
  {
    word: "resedá",
    eligible: false,
  },
  {
    word: "reseno",
    eligible: false,
  },
  {
    word: "resgar",
    eligible: false,
  },
  {
    word: "resgos",
    eligible: false,
  },
  {
    word: "resina",
    eligible: false,
  },
  {
    word: "resite",
    eligible: false,
  },
  {
    word: "resmar",
    eligible: false,
  },
  {
    word: "resort",
    eligible: false,
  },
  {
    word: "ressio",
    eligible: false,
  },
  {
    word: "restar",
    eligible: false,
  },
  {
    word: "réstio",
    eligible: false,
  },
  {
    word: "restos",
    eligible: false,
  },
  {
    word: "Resumo",
    eligible: false,
  },
  {
    word: "resumo",
    eligible: false,
  },
  {
    word: "resura",
    eligible: false,
  },
  {
    word: "resvés",
    eligible: false,
  },
  {
    word: "retame",
    eligible: false,
  },
  {
    word: "retavo",
    eligible: false,
  },
  {
    word: "retear",
    eligible: false,
  },
  {
    word: "rético",
    eligible: false,
  },
  {
    word: "retira",
    eligible: false,
  },
  {
    word: "retite",
    eligible: false,
  },
  {
    word: "retrós",
    eligible: false,
  },
  {
    word: "retuso",
    eligible: false,
  },
  {
    word: "rétzia",
    eligible: false,
  },
  {
    word: "reunir",
    eligible: false,
  },
  {
    word: "Reuter",
    eligible: false,
  },
  {
    word: "revino",
    eligible: false,
  },
  {
    word: "revira",
    eligible: false,
  },
  {
    word: "révora",
    eligible: false,
  },
  {
    word: "rexelo",
    eligible: false,
  },
  {
    word: "rexoxó",
    eligible: false,
  },
  {
    word: "rezina",
    eligible: false,
  },
  {
    word: "rezona",
    eligible: false,
  },
  {
    word: "rhesus",
    eligible: false,
  },
  {
    word: "riacho",
    eligible: false,
  },
  {
    word: "riácia",
    eligible: false,
  },
  {
    word: "Rialma",
    eligible: false,
  },
  {
    word: "riamba",
    eligible: false,
  },
  {
    word: "ribana",
    eligible: false,
  },
  {
    word: "ribete",
    eligible: false,
  },
  {
    word: "ribose",
    eligible: false,
  },
  {
    word: "ricaço",
    eligible: false,
  },
  {
    word: "ricina",
    eligible: false,
  },
  {
    word: "rícino",
    eligible: false,
  },
  {
    word: "ricola",
    eligible: false,
  },
  {
    word: "ricota",
    eligible: false,
  },
  {
    word: "ríctus",
    eligible: false,
  },
  {
    word: "ridela",
    eligible: false,
  },
  {
    word: "rídico",
    eligible: false,
  },
  {
    word: "ridita",
    eligible: false,
  },
  {
    word: "rieiro",
    eligible: false,
  },
  {
    word: "riense",
    eligible: false,
  },
  {
    word: "rifano",
    eligible: false,
  },
  {
    word: "rifete",
    eligible: false,
  },
  {
    word: "rififi",
    eligible: false,
  },
  {
    word: "riflar",
    eligible: false,
  },
  {
    word: "rigaço",
    eligible: false,
  },
  {
    word: "rígido",
    eligible: false,
  },
  {
    word: "rigolô",
    eligible: false,
  },
  {
    word: "rijeza",
    eligible: false,
  },
  {
    word: "rijoso",
    eligible: false,
  },
  {
    word: "rijume",
    eligible: false,
  },
  {
    word: "rilhar",
    eligible: false,
  },
  {
    word: "rímico",
    eligible: false,
  },
  {
    word: "rimoso",
    eligible: false,
  },
  {
    word: "rímula",
    eligible: false,
  },
  {
    word: "rinaua",
    eligible: false,
  },
  {
    word: "rincão",
    eligible: false,
  },
  {
    word: "rinçar",
    eligible: false,
  },
  {
    word: "rincha",
    eligible: false,
  },
  {
    word: "rinfão",
    eligible: false,
  },
  {
    word: "rinfar",
    eligible: false,
  },
  {
    word: "ringer",
    eligible: false,
  },
  {
    word: "ríngia",
    eligible: false,
  },
  {
    word: "ringir",
    eligible: false,
  },
  {
    word: "ringue",
    eligible: false,
  },
  {
    word: "rinhão",
    eligible: false,
  },
  {
    word: "rinhar",
    eligible: false,
  },
  {
    word: "rinial",
    eligible: false,
  },
  {
    word: "rínion",
    eligible: false,
  },
  {
    word: "rinite",
    eligible: false,
  },
  {
    word: "rínofe",
    eligible: false,
  },
  {
    word: "rinope",
    eligible: false,
  },
  {
    word: "rínops",
    eligible: false,
  },
  {
    word: "rinose",
    eligible: false,
  },
  {
    word: "rinque",
    eligible: false,
  },
  {
    word: "rinusa",
    eligible: false,
  },
  {
    word: "riosca",
    eligible: false,
  },
  {
    word: "rioste",
    eligible: false,
  },
  {
    word: "ripeta",
    eligible: false,
  },
  {
    word: "rípide",
    eligible: false,
  },
  {
    word: "ripina",
    eligible: false,
  },
  {
    word: "ripona",
    eligible: false,
  },
  {
    word: "ríquia",
    eligible: false,
  },
  {
    word: "risada",
    eligible: false,
  },
  {
    word: "riscão",
    eligible: false,
  },
  {
    word: "riscar",
    eligible: false,
  },
  {
    word: "riscas",
    eligible: false,
  },
  {
    word: "riscos",
    eligible: false,
  },
  {
    word: "risodo",
    eligible: false,
  },
  {
    word: "risona",
    eligible: false,
  },
  {
    word: "risope",
    eligible: false,
  },
  {
    word: "risops",
    eligible: false,
  },
  {
    word: "risote",
    eligible: false,
  },
  {
    word: "risoto",
    eligible: false,
  },
  {
    word: "rissol",
    eligible: false,
  },
  {
    word: "riteba",
    eligible: false,
  },
  {
    word: "ritião",
    eligible: false,
  },
  {
    word: "rítida",
    eligible: false,
  },
  {
    word: "ritido",
    eligible: false,
  },
  {
    word: "ritina",
    eligible: false,
  },
  {
    word: "ritmar",
    eligible: false,
  },
  {
    word: "ritmos",
    eligible: false,
  },
  {
    word: "ritual",
    eligible: false,
  },
  {
    word: "rituco",
    eligible: false,
  },
  {
    word: "rituti",
    eligible: false,
  },
  {
    word: "rivina",
    eligible: false,
  },
  {
    word: "rívulo",
    eligible: false,
  },
  {
    word: "rixoso",
    eligible: false,
  },
  {
    word: "rizeco",
    eligible: false,
  },
  {
    word: "rizino",
    eligible: false,
  },
  {
    word: "rizodo",
    eligible: false,
  },
  {
    word: "rizoma",
    eligible: false,
  },
  {
    word: "rizopo",
    eligible: false,
  },
  {
    word: "rizoto",
    eligible: false,
  },
  {
    word: "rízula",
    eligible: false,
  },
  {
    word: "roadie",
    eligible: false,
  },
  {
    word: "Roaldo",
    eligible: false,
  },
  {
    word: "roânia",
    eligible: false,
  },
  {
    word: "roazes",
    eligible: false,
  },
  {
    word: "robafo",
    eligible: false,
  },
  {
    word: "robalo",
    eligible: false,
  },
  {
    word: "róbbia",
    eligible: false,
  },
  {
    word: "robina",
    eligible: false,
  },
  {
    word: "roboão",
    eligible: false,
  },
  {
    word: "Robson",
    eligible: false,
  },
  {
    word: "roçana",
    eligible: false,
  },
  {
    word: "rocela",
    eligible: false,
  },
  {
    word: "rocena",
    eligible: false,
  },
  {
    word: "rochas",
    eligible: false,
  },
  {
    word: "rochaz",
    eligible: false,
  },
  {
    word: "rócheo",
    eligible: false,
  },
  {
    word: "rociar",
    eligible: false,
  },
  {
    word: "roclar",
    eligible: false,
  },
  {
    word: "rococó",
    eligible: false,
  },
  {
    word: "Rocque",
    eligible: false,
  },
  {
    word: "rodado",
    eligible: false,
  },
  {
    word: "Ródano",
    eligible: false,
  },
  {
    word: "rodapé",
    eligible: false,
  },
  {
    word: "rodato",
    eligible: false,
  },
  {
    word: "rodear",
    eligible: false,
  },
  {
    word: "rodeio",
    eligible: false,
  },
  {
    word: "rodelo",
    eligible: false,
  },
  {
    word: "rodeol",
    eligible: false,
  },
  {
    word: "rodete",
    eligible: false,
  },
  {
    word: "ródico",
    eligible: false,
  },
  {
    word: "Rodina",
    eligible: false,
  },
  {
    word: "rodine",
    eligible: false,
  },
  {
    word: "rodite",
    eligible: false,
  },
  {
    word: "rodito",
    eligible: false,
  },
  {
    word: "ródnio",
    eligible: false,
  },
  {
    word: "rodora",
    eligible: false,
  },
  {
    word: "rodura",
    eligible: false,
  },
  {
    word: "rofego",
    eligible: false,
  },
  {
    word: "roiena",
    eligible: false,
  },
  {
    word: "rojões",
    eligible: false,
  },
  {
    word: "rolaça",
    eligible: false,
  },
  {
    word: "roldão",
    eligible: false,
  },
  {
    word: "roldar",
    eligible: false,
  },
  {
    word: "roleta",
    eligible: false,
  },
  {
    word: "rolhão",
    eligible: false,
  },
  {
    word: "rolhar",
    eligible: false,
  },
  {
    word: "rolhas",
    eligible: false,
  },
  {
    word: "roliço",
    eligible: false,
  },
  {
    word: "rolimã",
    eligible: false,
  },
  {
    word: "rolotê",
    eligible: false,
  },
  {
    word: "romana",
    eligible: false,
  },
  {
    word: "romani",
    eligible: false,
  },
  {
    word: "români",
    eligible: false,
  },
  {
    word: "Romano",
    eligible: false,
  },
  {
    word: "romano",
    eligible: false,
  },
  {
    word: "romari",
    eligible: false,
  },
  {
    word: "romeco",
    eligible: false,
  },
  {
    word: "romela",
    eligible: false,
  },
  {
    word: "romeno",
    eligible: false,
  },
  {
    word: "Romero",
    eligible: false,
  },
  {
    word: "romeus",
    eligible: false,
  },
  {
    word: "romite",
    eligible: false,
  },
  {
    word: "rompão",
    eligible: false,
  },
  {
    word: "romper",
    eligible: false,
  },
  {
    word: "Romuel",
    eligible: false,
  },
  {
    word: "Rômulo",
    eligible: false,
  },
  {
    word: "Ronald",
    eligible: false,
  },
  {
    word: "roncal",
    eligible: false,
  },
  {
    word: "roncão",
    eligible: false,
  },
  {
    word: "roncar",
    eligible: false,
  },
  {
    word: "roncaz",
    eligible: false,
  },
  {
    word: "roncor",
    eligible: false,
  },
  {
    word: "roncos",
    eligible: false,
  },
  {
    word: "roncós",
    eligible: false,
  },
  {
    word: "rondão",
    eligible: false,
  },
  {
    word: "rondar",
    eligible: false,
  },
  {
    word: "rondel",
    eligible: false,
  },
  {
    word: "rondiz",
    eligible: false,
  },
  {
    word: "rondon",
    eligible: false,
  },
  {
    word: "Ronise",
    eligible: false,
  },
  {
    word: "ronrom",
    eligible: false,
  },
  {
    word: "rópalo",
    eligible: false,
  },
  {
    word: "roqueá",
    eligible: false,
  },
  {
    word: "rorela",
    eligible: false,
  },
  {
    word: "rórico",
    eligible: false,
  },
  {
    word: "rórido",
    eligible: false,
  },
  {
    word: "roripa",
    eligible: false,
  },
  {
    word: "rosaça",
    eligible: false,
  },
  {
    word: "rosada",
    eligible: false,
  },
  {
    word: "rosado",
    eligible: false,
  },
  {
    word: "rosale",
    eligible: false,
  },
  {
    word: "Rosali",
    eligible: false,
  },
  {
    word: "Rosane",
    eligible: false,
  },
  {
    word: "rosato",
    eligible: false,
  },
  {
    word: "roscar",
    eligible: false,
  },
  {
    word: "roscas",
    eligible: false,
  },
  {
    word: "róscea",
    eligible: false,
  },
  {
    word: "rosear",
    eligible: false,
  },
  {
    word: "róseas",
    eligible: false,
  },
  {
    word: "Roseau",
    eligible: false,
  },
  {
    word: "rosela",
    eligible: false,
  },
  {
    word: "Roseli",
    eligible: false,
  },
  {
    word: "rosema",
    eligible: false,
  },
  {
    word: "róseos",
    eligible: false,
  },
  {
    word: "roseta",
    eligible: false,
  },
  {
    word: "rosina",
    eligible: false,
  },
  {
    word: "rosite",
    eligible: false,
  },
  {
    word: "rosito",
    eligible: false,
  },
  {
    word: "rosnar",
    eligible: false,
  },
  {
    word: "róssia",
    eligible: false,
  },
  {
    word: "rossio",
    eligible: false,
  },
  {
    word: "rostão",
    eligible: false,
  },
  {
    word: "rostir",
    eligible: false,
  },
  {
    word: "rostos",
    eligible: false,
  },
  {
    word: "rostro",
    eligible: false,
  },
  {
    word: "rosura",
    eligible: false,
  },
  {
    word: "rotala",
    eligible: false,
  },
  {
    word: "rotear",
    eligible: false,
  },
  {
    word: "rotela",
    eligible: false,
  },
  {
    word: "rótfer",
    eligible: false,
  },
  {
    word: "rotina",
    eligible: false,
  },
  {
    word: "rótolo",
    eligible: false,
  },
  {
    word: "rótulo",
    eligible: false,
  },
  {
    word: "rotura",
    eligible: false,
  },
  {
    word: "roubar",
    eligible: false,
  },
  {
    word: "roubos",
    eligible: false,
  },
  {
    word: "roução",
    eligible: false,
  },
  {
    word: "rouçar",
    eligible: false,
  },
  {
    word: "roucos",
    eligible: false,
  },
  {
    word: "roupão",
    eligible: false,
  },
  {
    word: "roupar",
    eligible: false,
  },
  {
    word: "roupas",
    eligible: false,
  },
  {
    word: "rôurea",
    eligible: false,
  },
  {
    word: "router",
    eligible: false,
  },
  {
    word: "rouval",
    eligible: false,
  },
  {
    word: "rovote",
    eligible: false,
  },
  {
    word: "roxear",
    eligible: false,
  },
  {
    word: "roxete",
    eligible: false,
  },
  {
    word: "roxura",
    eligible: false,
  },
  {
    word: "ruamom",
    eligible: false,
  },
  {
    word: "Ruanda",
    eligible: false,
  },
  {
    word: "ruanda",
    eligible: false,
  },
  {
    word: "rubafo",
    eligible: false,
  },
  {
    word: "rubago",
    eligible: false,
  },
  {
    word: "rubala",
    eligible: false,
  },
  {
    word: "rubano",
    eligible: false,
  },
  {
    word: "rubelo",
    eligible: false,
  },
  {
    word: "rubeno",
    eligible: false,
  },
  {
    word: "rubeta",
    eligible: false,
  },
  {
    word: "rubial",
    eligible: false,
  },
  {
    word: "rubião",
    eligible: false,
  },
  {
    word: "rúbida",
    eligible: false,
  },
  {
    word: "rúbido",
    eligible: false,
  },
  {
    word: "rubina",
    eligible: false,
  },
  {
    word: "rubixá",
    eligible: false,
  },
  {
    word: "rubras",
    eligible: false,
  },
  {
    word: "rubros",
    eligible: false,
  },
  {
    word: "rucega",
    eligible: false,
  },
  {
    word: "rucete",
    eligible: false,
  },
  {
    word: "rúcola",
    eligible: false,
  },
  {
    word: "rúcula",
    eligible: false,
  },
  {
    word: "rucuri",
    eligible: false,
  },
  {
    word: "rudeza",
    eligible: false,
  },
  {
    word: "rúdgea",
    eligible: false,
  },
  {
    word: "rudite",
    eligible: false,
  },
  {
    word: "rudito",
    eligible: false,
  },
  {
    word: "rueiro",
    eligible: false,
  },
  {
    word: "ruélia",
    eligible: false,
  },
  {
    word: "rufião",
    eligible: false,
  },
  {
    word: "rufiar",
    eligible: false,
  },
  {
    word: "rufina",
    eligible: false,
  },
  {
    word: "Rufino",
    eligible: false,
  },
  {
    word: "ruflar",
    eligible: false,
  },
  {
    word: "rugibó",
    eligible: false,
  },
  {
    word: "rugoso",
    eligible: false,
  },
  {
    word: "ruiano",
    eligible: false,
  },
  {
    word: "ruidar",
    eligible: false,
  },
  {
    word: "ruinar",
    eligible: false,
  },
  {
    word: "ruinha",
    eligible: false,
  },
  {
    word: "ruival",
    eligible: false,
  },
  {
    word: "ruivão",
    eligible: false,
  },
  {
    word: "ruivas",
    eligible: false,
  },
  {
    word: "ruivor",
    eligible: false,
  },
  {
    word: "ruivos",
    eligible: false,
  },
  {
    word: "rulhar",
    eligible: false,
  },
  {
    word: "rulote",
    eligible: false,
  },
  {
    word: "rumbar",
    eligible: false,
  },
  {
    word: "rúmbia",
    eligible: false,
  },
  {
    word: "rumbor",
    eligible: false,
  },
  {
    word: "rumero",
    eligible: false,
  },
  {
    word: "rumiar",
    eligible: false,
  },
  {
    word: "rúmino",
    eligible: false,
  },
  {
    word: "rumpri",
    eligible: false,
  },
  {
    word: "runfão",
    eligible: false,
  },
  {
    word: "runfar",
    eligible: false,
  },
  {
    word: "runhar",
    eligible: false,
  },
  {
    word: "rúnico",
    eligible: false,
  },
  {
    word: "runrum",
    eligible: false,
  },
  {
    word: "rupção",
    eligible: false,
  },
  {
    word: "rupela",
    eligible: false,
  },
  {
    word: "rupipa",
    eligible: false,
  },
  {
    word: "rúppia",
    eligible: false,
  },
  {
    word: "rúptil",
    eligible: false,
  },
  {
    word: "ruptor",
    eligible: false,
  },
  {
    word: "rúrida",
    eligible: false,
  },
  {
    word: "Rurina",
    eligible: false,
  },
  {
    word: "rusgar",
    eligible: false,
  },
  {
    word: "rusina",
    eligible: false,
  },
  {
    word: "rusmas",
    eligible: false,
  },
  {
    word: "russar",
    eligible: false,
  },
  {
    word: "russas",
    eligible: false,
  },
  {
    word: "Russel",
    eligible: false,
  },
  {
    word: "Rússia",
    eligible: false,
  },
  {
    word: "rússia",
    eligible: false,
  },
  {
    word: "rússio",
    eligible: false,
  },
  {
    word: "russos",
    eligible: false,
  },
  {
    word: "rústia",
    eligible: false,
  },
  {
    word: "rustir",
    eligible: false,
  },
  {
    word: "rutale",
    eligible: false,
  },
  {
    word: "rutela",
    eligible: false,
  },
  {
    word: "ruteno",
    eligible: false,
  },
  {
    word: "rútico",
    eligible: false,
  },
  {
    word: "rútilo",
    eligible: false,
  },
  {
    word: "rutina",
    eligible: false,
  },
  {
    word: "rutuba",
    eligible: false,
  },
  {
    word: "rútulo",
    eligible: false,
  },
  {
    word: "rutura",
    eligible: false,
  },
  {
    word: "ruveto",
    eligible: false,
  },
  {
    word: "ruxaxá",
    eligible: false,
  },
  {
    word: "ruxoxó",
    eligible: false,
  },
  {
    word: "ruzagá",
    eligible: false,
  },
  {
    word: "sabacu",
    eligible: false,
  },
  {
    word: "sábado",
    eligible: false,
  },
  {
    word: "sabaio",
    eligible: false,
  },
  {
    word: "sabajo",
    eligible: false,
  },
  {
    word: "sábano",
    eligible: false,
  },
  {
    word: "Sabará",
    eligible: false,
  },
  {
    word: "sabeia",
    eligible: false,
  },
  {
    word: "sabelo",
    eligible: false,
  },
  {
    word: "sábena",
    eligible: false,
  },
  {
    word: "saberá",
    eligible: false,
  },
  {
    word: "saberé",
    eligible: false,
  },
  {
    word: "saberê",
    eligible: false,
  },
  {
    word: "Sabesp",
    eligible: false,
  },
  {
    word: "sabeto",
    eligible: false,
  },
  {
    word: "sabiás",
    eligible: false,
  },
  {
    word: "sabicu",
    eligible: false,
  },
  {
    word: "sabido",
    eligible: false,
  },
  {
    word: "sabina",
    eligible: false,
  },
  {
    word: "Sabine",
    eligible: false,
  },
  {
    word: "sabino",
    eligible: false,
  },
  {
    word: "sabitu",
    eligible: false,
  },
  {
    word: "sabões",
    eligible: false,
  },
  {
    word: "saboga",
    eligible: false,
  },
  {
    word: "saboia",
    eligible: false,
  },
  {
    word: "saborá",
    eligible: false,
  },
  {
    word: "sabras",
    eligible: false,
  },
  {
    word: "sabres",
    eligible: false,
  },
  {
    word: "sabucu",
    eligible: false,
  },
  {
    word: "Sabugi",
    eligible: false,
  },
  {
    word: "sabuiá",
    eligible: false,
  },
  {
    word: "saburá",
    eligible: false,
  },
  {
    word: "saburu",
    eligible: false,
  },
  {
    word: "sacaca",
    eligible: false,
  },
  {
    word: "sacaio",
    eligible: false,
  },
  {
    word: "sacana",
    eligible: false,
  },
  {
    word: "sácaro",
    eligible: false,
  },
  {
    word: "sáceas",
    eligible: false,
  },
  {
    word: "sacelo",
    eligible: false,
  },
  {
    word: "sacena",
    eligible: false,
  },
  {
    word: "sachão",
    eligible: false,
  },
  {
    word: "sachar",
    eligible: false,
  },
  {
    word: "sachas",
    eligible: false,
  },
  {
    word: "sachém",
    eligible: false,
  },
  {
    word: "sachos",
    eligible: false,
  },
  {
    word: "saciar",
    eligible: false,
  },
  {
    word: "sacoca",
    eligible: false,
  },
  {
    word: "sacode",
    eligible: false,
  },
  {
    word: "sacolé",
    eligible: false,
  },
  {
    word: "sacoto",
    eligible: false,
  },
  {
    word: "sacová",
    eligible: false,
  },
  {
    word: "sacral",
    eligible: false,
  },
  {
    word: "sacras",
    eligible: false,
  },
  {
    word: "sacudu",
    eligible: false,
  },
  {
    word: "sacuia",
    eligible: false,
  },
  {
    word: "sáculo",
    eligible: false,
  },
  {
    word: "sacurê",
    eligible: false,
  },
  {
    word: "sadaca",
    eligible: false,
  },
  {
    word: "Saddam",
    eligible: false,
  },
  {
    word: "sádico",
    eligible: false,
  },
  {
    word: "sádida",
    eligible: false,
  },
  {
    word: "sadino",
    eligible: false,
  },
  {
    word: "saense",
    eligible: false,
  },
  {
    word: "safári",
    eligible: false,
  },
  {
    word: "sáfaro",
    eligible: false,
  },
  {
    word: "safata",
    eligible: false,
  },
  {
    word: "safena",
    eligible: false,
  },
  {
    word: "safeno",
    eligible: false,
  },
  {
    word: "sáfico",
    eligible: false,
  },
  {
    word: "safios",
    eligible: false,
  },
  {
    word: "safira",
    eligible: false,
  },
  {
    word: "safiro",
    eligible: false,
  },
  {
    word: "safrão",
    eligible: false,
  },
  {
    word: "safrol",
    eligible: false,
  },
  {
    word: "safuta",
    eligible: false,
  },
  {
    word: "ságena",
    eligible: false,
  },
  {
    word: "sageza",
    eligible: false,
  },
  {
    word: "sagona",
    eligible: false,
  },
  {
    word: "sagrar",
    eligible: false,
  },
  {
    word: "ságrea",
    eligible: false,
  },
  {
    word: "sagual",
    eligible: false,
  },
  {
    word: "saguão",
    eligible: false,
  },
  {
    word: "saguim",
    eligible: false,
  },
  {
    word: "saguis",
    eligible: false,
  },
  {
    word: "ságulo",
    eligible: false,
  },
  {
    word: "saiada",
    eligible: false,
  },
  {
    word: "saiano",
    eligible: false,
  },
  {
    word: "saibro",
    eligible: false,
  },
  {
    word: "saídas",
    eligible: false,
  },
  {
    word: "saierê",
    eligible: false,
  },
  {
    word: "saieta",
    eligible: false,
  },
  {
    word: "saimão",
    eligible: false,
  },
  {
    word: "saimel",
    eligible: false,
  },
  {
    word: "saímel",
    eligible: false,
  },
  {
    word: "sainho",
    eligible: false,
  },
  {
    word: "sainte",
    eligible: false,
  },
  {
    word: "saiões",
    eligible: false,
  },
  {
    word: "saiola",
    eligible: false,
  },
  {
    word: "saiote",
    eligible: false,
  },
  {
    word: "saioto",
    eligible: false,
  },
  {
    word: "saíras",
    eligible: false,
  },
  {
    word: "saítis",
    eligible: false,
  },
  {
    word: "sájena",
    eligible: false,
  },
  {
    word: "sajene",
    eligible: false,
  },
  {
    word: "sajica",
    eligible: false,
  },
  {
    word: "salada",
    eligible: false,
  },
  {
    word: "salaio",
    eligible: false,
  },
  {
    word: "salalé",
    eligible: false,
  },
  {
    word: "salame",
    eligible: false,
  },
  {
    word: "salamo",
    eligible: false,
  },
  {
    word: "salavá",
    eligible: false,
  },
  {
    word: "salaxe",
    eligible: false,
  },
  {
    word: "salças",
    eligible: false,
  },
  {
    word: "saldão",
    eligible: false,
  },
  {
    word: "saldar",
    eligible: false,
  },
  {
    word: "saldos",
    eligible: false,
  },
  {
    word: "salema",
    eligible: false,
  },
  {
    word: "saleno",
    eligible: false,
  },
  {
    word: "salepo",
    eligible: false,
  },
  {
    word: "salero",
    eligible: false,
  },
  {
    word: "saleta",
    eligible: false,
  },
  {
    word: "Salete",
    eligible: false,
  },
  {
    word: "salgar",
    eligible: false,
  },
  {
    word: "salhar",
    eligible: false,
  },
  {
    word: "sálice",
    eligible: false,
  },
  {
    word: "sálico",
    eligible: false,
  },
  {
    word: "salite",
    eligible: false,
  },
  {
    word: "salmão",
    eligible: false,
  },
  {
    word: "Salmon",
    eligible: false,
  },
  {
    word: "saloia",
    eligible: false,
  },
  {
    word: "saloio",
    eligible: false,
  },
  {
    word: "Salomé",
    eligible: false,
  },
  {
    word: "salpim",
    eligible: false,
  },
  {
    word: "sálpio",
    eligible: false,
  },
  {
    word: "sálpis",
    eligible: false,
  },
  {
    word: "salpor",
    eligible: false,
  },
  {
    word: "salsão",
    eligible: false,
  },
  {
    word: "salsar",
    eligible: false,
  },
  {
    word: "salsas",
    eligible: false,
  },
  {
    word: "sálseo",
    eligible: false,
  },
  {
    word: "salsos",
    eligible: false,
  },
  {
    word: "saltão",
    eligible: false,
  },
  {
    word: "saltar",
    eligible: false,
  },
  {
    word: "salter",
    eligible: false,
  },
  {
    word: "saltos",
    eligible: false,
  },
  {
    word: "salubá",
    eligible: false,
  },
  {
    word: "saluga",
    eligible: false,
  },
  {
    word: "salvar",
    eligible: false,
  },
  {
    word: "salvas",
    eligible: false,
  },
  {
    word: "sálvia",
    eligible: false,
  },
  {
    word: "Sálvio",
    eligible: false,
  },
  {
    word: "salvos",
    eligible: false,
  },
  {
    word: "samádi",
    eligible: false,
  },
  {
    word: "sâmago",
    eligible: false,
  },
  {
    word: "sâmara",
    eligible: false,
  },
  {
    word: "sambão",
    eligible: false,
  },
  {
    word: "sambar",
    eligible: false,
  },
  {
    word: "sambas",
    eligible: false,
  },
  {
    word: "sambur",
    eligible: false,
  },
  {
    word: "samelo",
    eligible: false,
  },
  {
    word: "samiel",
    eligible: false,
  },
  {
    word: "samino",
    eligible: false,
  },
  {
    word: "samite",
    eligible: false,
  },
  {
    word: "samito",
    eligible: false,
  },
  {
    word: "sâmnio",
    eligible: false,
  },
  {
    word: "samoco",
    eligible: false,
  },
  {
    word: "sâmolo",
    eligible: false,
  },
  {
    word: "samori",
    eligible: false,
  },
  {
    word: "sampar",
    eligible: false,
  },
  {
    word: "sample",
    eligible: false,
  },
  {
    word: "Samuel",
    eligible: false,
  },
  {
    word: "sanate",
    eligible: false,
  },
  {
    word: "sanção",
    eligible: false,
  },
  {
    word: "sancha",
    eligible: false,
  },
  {
    word: "sancho",
    eligible: false,
  },
  {
    word: "sanchu",
    eligible: false,
  },
  {
    word: "sandar",
    eligible: false,
  },
  {
    word: "sandeu",
    eligible: false,
  },
  {
    word: "sandil",
    eligible: false,
  },
  {
    word: "sandim",
    eligible: false,
  },
  {
    word: "sandio",
    eligible: false,
  },
  {
    word: "sandiz",
    eligible: false,
  },
  {
    word: "sandre",
    eligible: false,
  },
  {
    word: "Sandro",
    eligible: false,
  },
  {
    word: "sanear",
    eligible: false,
  },
  {
    word: "sangão",
    eligible: false,
  },
  {
    word: "sangês",
    eligible: false,
  },
  {
    word: "sangoé",
    eligible: false,
  },
  {
    word: "sangue",
    eligible: false,
  },
  {
    word: "sangui",
    eligible: false,
  },
  {
    word: "sanibá",
    eligible: false,
  },
  {
    word: "sanita",
    eligible: false,
  },
  {
    word: "sanjar",
    eligible: false,
  },
  {
    word: "sanoco",
    eligible: false,
  },
  {
    word: "sanona",
    eligible: false,
  },
  {
    word: "sansão",
    eligible: false,
  },
  {
    word: "sansei",
    eligible: false,
  },
  {
    word: "santal",
    eligible: false,
  },
  {
    word: "santão",
    eligible: false,
  },
  {
    word: "santas",
    eligible: false,
  },
  {
    word: "sântia",
    eligible: false,
  },
  {
    word: "santil",
    eligible: false,
  },
  {
    word: "santir",
    eligible: false,
  },
  {
    word: "santol",
    eligible: false,
  },
  {
    word: "santom",
    eligible: false,
  },
  {
    word: "santor",
    eligible: false,
  },
  {
    word: "Santos",
    eligible: false,
  },
  {
    word: "santos",
    eligible: false,
  },
  {
    word: "sapajo",
    eligible: false,
  },
  {
    word: "sapaju",
    eligible: false,
  },
  {
    word: "sapata",
    eligible: false,
  },
  {
    word: "sapaté",
    eligible: false,
  },
  {
    word: "sapato",
    eligible: false,
  },
  {
    word: "sapear",
    eligible: false,
  },
  {
    word: "sapelo",
    eligible: false,
  },
  {
    word: "sapeno",
    eligible: false,
  },
  {
    word: "saperê",
    eligible: false,
  },
  {
    word: "sapico",
    eligible: false,
  },
  {
    word: "sápido",
    eligible: false,
  },
  {
    word: "sapocu",
    eligible: false,
  },
  {
    word: "saponã",
    eligible: false,
  },
  {
    word: "sapopé",
    eligible: false,
  },
  {
    word: "saporé",
    eligible: false,
  },
  {
    word: "sapota",
    eligible: false,
  },
  {
    word: "sapote",
    eligible: false,
  },
  {
    word: "sapoti",
    eligible: false,
  },
  {
    word: "sapudo",
    eligible: false,
  },
  {
    word: "sapuiá",
    eligible: false,
  },
  {
    word: "sapupo",
    eligible: false,
  },
  {
    word: "saputá",
    eligible: false,
  },
  {
    word: "saputi",
    eligible: false,
  },
  {
    word: "sapuva",
    eligible: false,
  },
  {
    word: "saquim",
    eligible: false,
  },
  {
    word: "saquis",
    eligible: false,
  },
  {
    word: "saraçá",
    eligible: false,
  },
  {
    word: "saraço",
    eligible: false,
  },
  {
    word: "sarado",
    eligible: false,
  },
  {
    word: "Sarafe",
    eligible: false,
  },
  {
    word: "sarago",
    eligible: false,
  },
  {
    word: "saraiú",
    eligible: false,
  },
  {
    word: "sarame",
    eligible: false,
  },
  {
    word: "sarapa",
    eligible: false,
  },
  {
    word: "sarapó",
    eligible: false,
  },
  {
    word: "sarauê",
    eligible: false,
  },
  {
    word: "saravá",
    eligible: false,
  },
  {
    word: "sarçal",
    eligible: false,
  },
  {
    word: "sardão",
    eligible: false,
  },
  {
    word: "sardar",
    eligible: false,
  },
  {
    word: "sardas",
    eligible: false,
  },
  {
    word: "sárdio",
    eligible: false,
  },
  {
    word: "Sardoá",
    eligible: false,
  },
  {
    word: "sardos",
    eligible: false,
  },
  {
    word: "sargos",
    eligible: false,
  },
  {
    word: "sariba",
    eligible: false,
  },
  {
    word: "sárico",
    eligible: false,
  },
  {
    word: "sariga",
    eligible: false,
  },
  {
    word: "Sarina",
    eligible: false,
  },
  {
    word: "Sarita",
    eligible: false,
  },
  {
    word: "saritã",
    eligible: false,
  },
  {
    word: "sarjão",
    eligible: false,
  },
  {
    word: "sarjar",
    eligible: false,
  },
  {
    word: "sarjel",
    eligible: false,
  },
  {
    word: "sarmão",
    eligible: false,
  },
  {
    word: "sarnão",
    eligible: false,
  },
  {
    word: "sarnar",
    eligible: false,
  },
  {
    word: "Sarney",
    eligible: false,
  },
  {
    word: "sarnir",
    eligible: false,
  },
  {
    word: "sarniu",
    eligible: false,
  },
  {
    word: "saroba",
    eligible: false,
  },
  {
    word: "sarobá",
    eligible: false,
  },
  {
    word: "sarote",
    eligible: false,
  },
  {
    word: "saroto",
    eligible: false,
  },
  {
    word: "sarova",
    eligible: false,
  },
  {
    word: "sarpar",
    eligible: false,
  },
  {
    word: "sarrão",
    eligible: false,
  },
  {
    word: "sarrar",
    eligible: false,
  },
  {
    word: "sarrau",
    eligible: false,
  },
  {
    word: "sarrom",
    eligible: false,
  },
  {
    word: "sarros",
    eligible: false,
  },
  {
    word: "sartal",
    eligible: false,
  },
  {
    word: "sartar",
    eligible: false,
  },
  {
    word: "Sartre",
    eligible: false,
  },
  {
    word: "saruba",
    eligible: false,
  },
  {
    word: "saruga",
    eligible: false,
  },
  {
    word: "saruma",
    eligible: false,
  },
  {
    word: "sassar",
    eligible: false,
  },
  {
    word: "sasseu",
    eligible: false,
  },
  {
    word: "sassor",
    eligible: false,
  },
  {
    word: "sastre",
    eligible: false,
  },
  {
    word: "sasuro",
    eligible: false,
  },
  {
    word: "saterê",
    eligible: false,
  },
  {
    word: "sátiro",
    eligible: false,
  },
  {
    word: "sativo",
    eligible: false,
  },
  {
    word: "Satomi",
    eligible: false,
  },
  {
    word: "satori",
    eligible: false,
  },
  {
    word: "Satoru",
    eligible: false,
  },
  {
    word: "Satuba",
    eligible: false,
  },
  {
    word: "sátura",
    eligible: false,
  },
  {
    word: "sauaçu",
    eligible: false,
  },
  {
    word: "saubal",
    eligible: false,
  },
  {
    word: "saucar",
    eligible: false,
  },
  {
    word: "saudar",
    eligible: false,
  },
  {
    word: "sauiás",
    eligible: false,
  },
  {
    word: "saúnas",
    eligible: false,
  },
  {
    word: "saurim",
    eligible: false,
  },
  {
    word: "sáurio",
    eligible: false,
  },
  {
    word: "sautor",
    eligible: false,
  },
  {
    word: "sauval",
    eligible: false,
  },
  {
    word: "savacu",
    eligible: false,
  },
  {
    word: "savalu",
    eligible: false,
  },
  {
    word: "savana",
    eligible: false,
  },
  {
    word: "savate",
    eligible: false,
  },
  {
    word: "Savero",
    eligible: false,
  },
  {
    word: "savete",
    eligible: false,
  },
  {
    word: "savica",
    eligible: false,
  },
  {
    word: "Savine",
    eligible: false,
  },
  {
    word: "Savino",
    eligible: false,
  },
  {
    word: "savite",
    eligible: false,
  },
  {
    word: "savito",
    eligible: false,
  },
  {
    word: "savitu",
    eligible: false,
  },
  {
    word: "savoga",
    eligible: false,
  },
  {
    word: "Savoia",
    eligible: false,
  },
  {
    word: "savoir",
    eligible: false,
  },
  {
    word: "savora",
    eligible: false,
  },
  {
    word: "saxina",
    eligible: false,
  },
  {
    word: "sáxone",
    eligible: false,
  },
  {
    word: "saxoso",
    eligible: false,
  },
  {
    word: "sazoar",
    eligible: false,
  },
  {
    word: "scheol",
    eligible: false,
  },
  {
    word: "sclero",
    eligible: false,
  },
  {
    word: "scopia",
    eligible: false,
  },
  {
    word: "Seabra",
    eligible: false,
  },
  {
    word: "searão",
    eligible: false,
  },
  {
    word: "searas",
    eligible: false,
  },
  {
    word: "sebaça",
    eligible: false,
  },
  {
    word: "sebada",
    eligible: false,
  },
  {
    word: "sêbado",
    eligible: false,
  },
  {
    word: "sebato",
    eligible: false,
  },
  {
    word: "Seberi",
    eligible: false,
  },
  {
    word: "sebino",
    eligible: false,
  },
  {
    word: "sebite",
    eligible: false,
  },
  {
    word: "sebito",
    eligible: false,
  },
  {
    word: "seboso",
    eligible: false,
  },
  {
    word: "SEBRAE",
    eligible: false,
  },
  {
    word: "Sebrae",
    eligible: false,
  },
  {
    word: "secano",
    eligible: false,
  },
  {
    word: "secção",
    eligible: false,
  },
  {
    word: "seciar",
    eligible: false,
  },
  {
    word: "sécias",
    eligible: false,
  },
  {
    word: "séctil",
    eligible: false,
  },
  {
    word: "sector",
    eligible: false,
  },
  {
    word: "seculo",
    eligible: false,
  },
  {
    word: "século",
    eligible: false,
  },
  {
    word: "secure",
    eligible: false,
  },
  {
    word: "sedaço",
    eligible: false,
  },
  {
    word: "sedear",
    eligible: false,
  },
  {
    word: "sedeca",
    eligible: false,
  },
  {
    word: "sedela",
    eligible: false,
  },
  {
    word: "sediar",
    eligible: false,
  },
  {
    word: "sedosa",
    eligible: false,
  },
  {
    word: "sedoso",
    eligible: false,
  },
  {
    word: "sédulo",
    eligible: false,
  },
  {
    word: "seduno",
    eligible: false,
  },
  {
    word: "seense",
    eligible: false,
  },
  {
    word: "sefelo",
    eligible: false,
  },
  {
    word: "sefina",
    eligible: false,
  },
  {
    word: "Séfora",
    eligible: false,
  },
  {
    word: "Sefufá",
    eligible: false,
  },
  {
    word: "segrel",
    eligible: false,
  },
  {
    word: "seguir",
    eligible: false,
  },
  {
    word: "Seguro",
    eligible: false,
  },
  {
    word: "seguro",
    eligible: false,
  },
  {
    word: "seiada",
    eligible: false,
  },
  {
    word: "seibão",
    eligible: false,
  },
  {
    word: "seiçal",
    eligible: false,
  },
  {
    word: "seiche",
    eligible: false,
  },
  {
    word: "seifia",
    eligible: false,
  },
  {
    word: "seirão",
    eligible: false,
  },
  {
    word: "seires",
    eligible: false,
  },
  {
    word: "seitar",
    eligible: false,
  },
  {
    word: "seitas",
    eligible: false,
  },
  {
    word: "seiudo",
    eligible: false,
  },
  {
    word: "seival",
    eligible: false,
  },
  {
    word: "seivar",
    eligible: false,
  },
  {
    word: "seivos",
    eligible: false,
  },
  {
    word: "seixal",
    eligible: false,
  },
  {
    word: "séjana",
    eligible: false,
  },
  {
    word: "selado",
    eligible: false,
  },
  {
    word: "Selena",
    eligible: false,
  },
  {
    word: "selene",
    eligible: false,
  },
  {
    word: "seleta",
    eligible: false,
  },
  {
    word: "Selima",
    eligible: false,
  },
  {
    word: "selino",
    eligible: false,
  },
  {
    word: "selite",
    eligible: false,
  },
  {
    word: "seller",
    eligible: false,
  },
  {
    word: "Selmar",
    eligible: false,
  },
  {
    word: "selote",
    eligible: false,
  },
  {
    word: "Sélton",
    eligible: false,
  },
  {
    word: "semana",
    eligible: false,
  },
  {
    word: "sembar",
    eligible: false,
  },
  {
    word: "semear",
    eligible: false,
  },
  {
    word: "semeia",
    eligible: false,
  },
  {
    word: "semema",
    eligible: false,
  },
  {
    word: "semens",
    eligible: false,
  },
  {
    word: "sêmico",
    eligible: false,
  },
  {
    word: "semimi",
    eligible: false,
  },
  {
    word: "semino",
    eligible: false,
  },
  {
    word: "semita",
    eligible: false,
  },
  {
    word: "sêmita",
    eligible: false,
  },
  {
    word: "semito",
    eligible: false,
  },
  {
    word: "sêmola",
    eligible: false,
  },
  {
    word: "semoto",
    eligible: false,
  },
  {
    word: "sêmper",
    eligible: false,
  },
  {
    word: "sempre",
    eligible: false,
  },
  {
    word: "Semuel",
    eligible: false,
  },
  {
    word: "senabó",
    eligible: false,
  },
  {
    word: "senado",
    eligible: false,
  },
  {
    word: "senata",
    eligible: false,
  },
  {
    word: "sendal",
    eligible: false,
  },
  {
    word: "sendur",
    eligible: false,
  },
  {
    word: "sêneca",
    eligible: false,
  },
  {
    word: "sênega",
    eligible: false,
  },
  {
    word: "sengar",
    eligible: false,
  },
  {
    word: "Sengés",
    eligible: false,
  },
  {
    word: "senhor",
    eligible: false,
  },
  {
    word: "sênica",
    eligible: false,
  },
  {
    word: "sênior",
    eligible: false,
  },
  {
    word: "sênone",
    eligible: false,
  },
  {
    word: "sênsil",
    eligible: false,
  },
  {
    word: "sensor",
    eligible: false,
  },
  {
    word: "sensos",
    eligible: false,
  },
  {
    word: "sentar",
    eligible: false,
  },
  {
    word: "sentir",
    eligible: false,
  },
  {
    word: "sépalo",
    eligible: false,
  },
  {
    word: "separa",
    eligible: false,
  },
  {
    word: "seperu",
    eligible: false,
  },
  {
    word: "sépion",
    eligible: false,
  },
  {
    word: "sepite",
    eligible: false,
  },
  {
    word: "seposo",
    eligible: false,
  },
  {
    word: "sepsia",
    eligible: false,
  },
  {
    word: "sépsis",
    eligible: false,
  },
  {
    word: "septal",
    eligible: false,
  },
  {
    word: "septar",
    eligible: false,
  },
  {
    word: "séptil",
    eligible: false,
  },
  {
    word: "septos",
    eligible: false,
  },
  {
    word: "sequaz",
    eligible: false,
  },
  {
    word: "sequer",
    eligible: false,
  },
  {
    word: "sequim",
    eligible: false,
  },
  {
    word: "séquio",
    eligible: false,
  },
  {
    word: "seraco",
    eligible: false,
  },
  {
    word: "sérbio",
    eligible: false,
  },
  {
    word: "serbro",
    eligible: false,
  },
  {
    word: "serdão",
    eligible: false,
  },
  {
    word: "serdar",
    eligible: false,
  },
  {
    word: "sereia",
    eligible: false,
  },
  {
    word: "serena",
    eligible: false,
  },
  {
    word: "sereno",
    eligible: false,
  },
  {
    word: "serere",
    eligible: false,
  },
  {
    word: "serero",
    eligible: false,
  },
  {
    word: "Sergia",
    eligible: false,
  },
  {
    word: "sérgia",
    eligible: false,
  },
  {
    word: "Sérgio",
    eligible: false,
  },
  {
    word: "serial",
    eligible: false,
  },
  {
    word: "seriar",
    eligible: false,
  },
  {
    word: "seriba",
    eligible: false,
  },
  {
    word: "sérico",
    eligible: false,
  },
  {
    word: "séride",
    eligible: false,
  },
  {
    word: "Serido",
    eligible: false,
  },
  {
    word: "seridó",
    eligible: false,
  },
  {
    word: "serifa",
    eligible: false,
  },
  {
    word: "Serigy",
    eligible: false,
  },
  {
    word: "serino",
    eligible: false,
  },
  {
    word: "sermão",
    eligible: false,
  },
  {
    word: "sernal",
    eligible: false,
  },
  {
    word: "seroar",
    eligible: false,
  },
  {
    word: "seroca",
    eligible: false,
  },
  {
    word: "serões",
    eligible: false,
  },
  {
    word: "sérola",
    eligible: false,
  },
  {
    word: "seroma",
    eligible: false,
  },
  {
    word: "seroso",
    eligible: false,
  },
  {
    word: "serpão",
    eligible: false,
  },
  {
    word: "serpil",
    eligible: false,
  },
  {
    word: "serpol",
    eligible: false,
  },
  {
    word: "serrão",
    eligible: false,
  },
  {
    word: "serrar",
    eligible: false,
  },
  {
    word: "serras",
    eligible: false,
  },
  {
    word: "sérreo",
    eligible: false,
  },
  {
    word: "serril",
    eligible: false,
  },
  {
    word: "serrim",
    eligible: false,
  },
  {
    word: "serros",
    eligible: false,
  },
  {
    word: "sertão",
    eligible: false,
  },
  {
    word: "sertém",
    eligible: false,
  },
  {
    word: "sertum",
    eligible: false,
  },
  {
    word: "seruda",
    eligible: false,
  },
  {
    word: "serval",
    eligible: false,
  },
  {
    word: "servan",
    eligible: false,
  },
  {
    word: "Sérvia",
    eligible: false,
  },
  {
    word: "servil",
    eligible: false,
  },
  {
    word: "sérvio",
    eligible: false,
  },
  {
    word: "servir",
    eligible: false,
  },
  {
    word: "servos",
    eligible: false,
  },
  {
    word: "sésamo",
    eligible: false,
  },
  {
    word: "sésega",
    eligible: false,
  },
  {
    word: "sésele",
    eligible: false,
  },
  {
    word: "séseli",
    eligible: false,
  },
  {
    word: "sésica",
    eligible: false,
  },
  {
    word: "sésiga",
    eligible: false,
  },
  {
    word: "sesmar",
    eligible: false,
  },
  {
    word: "sesoto",
    eligible: false,
  },
  {
    word: "sessão",
    eligible: false,
  },
  {
    word: "sessar",
    eligible: false,
  },
  {
    word: "séssil",
    eligible: false,
  },
  {
    word: "sessor",
    eligible: false,
  },
  {
    word: "sesudo",
    eligible: false,
  },
  {
    word: "seteal",
    eligible: false,
  },
  {
    word: "setear",
    eligible: false,
  },
  {
    word: "seteno",
    eligible: false,
  },
  {
    word: "setial",
    eligible: false,
  },
  {
    word: "sétimo",
    eligible: false,
  },
  {
    word: "setoso",
    eligible: false,
  },
  {
    word: "setter",
    eligible: false,
  },
  {
    word: "sétula",
    eligible: false,
  },
  {
    word: "seurbo",
    eligible: false,
  },
  {
    word: "seutil",
    eligible: false,
  },
  {
    word: "sevens",
    eligible: false,
  },
  {
    word: "severo",
    eligible: false,
  },
  {
    word: "séviro",
    eligible: false,
  },
  {
    word: "sevres",
    eligible: false,
  },
  {
    word: "sexata",
    eligible: false,
  },
  {
    word: "sexavô",
    eligible: false,
  },
  {
    word: "Sextas",
    eligible: false,
  },
  {
    word: "sextas",
    eligible: false,
  },
  {
    word: "sextil",
    eligible: false,
  },
  {
    word: "sexual",
    eligible: false,
  },
  {
    word: "sexuar",
    eligible: false,
  },
  {
    word: "sezeno",
    eligible: false,
  },
  {
    word: "sezoar",
    eligible: false,
  },
  {
    word: "sezões",
    eligible: false,
  },
  {
    word: "sezuto",
    eligible: false,
  },
  {
    word: "síagro",
    eligible: false,
  },
  {
    word: "siália",
    eligible: false,
  },
  {
    word: "siális",
    eligible: false,
  },
  {
    word: "siamês",
    eligible: false,
  },
  {
    word: "sibala",
    eligible: false,
  },
  {
    word: "sibana",
    eligible: false,
  },
  {
    word: "síbara",
    eligible: false,
  },
  {
    word: "Sibele",
    eligible: false,
  },
  {
    word: "síbilo",
    eligible: false,
  },
  {
    word: "sibilu",
    eligible: false,
  },
  {
    word: "síbine",
    eligible: false,
  },
  {
    word: "sibira",
    eligible: false,
  },
  {
    word: "sibivo",
    eligible: false,
  },
  {
    word: "sicano",
    eligible: false,
  },
  {
    word: "sicate",
    eligible: false,
  },
  {
    word: "sícera",
    eligible: false,
  },
  {
    word: "sicino",
    eligible: false,
  },
  {
    word: "sicite",
    eligible: false,
  },
  {
    word: "sicoia",
    eligible: false,
  },
  {
    word: "sicoma",
    eligible: false,
  },
  {
    word: "sícone",
    eligible: false,
  },
  {
    word: "sícono",
    eligible: false,
  },
  {
    word: "sicose",
    eligible: false,
  },
  {
    word: "sículo",
    eligible: false,
  },
  {
    word: "sicuri",
    eligible: false,
  },
  {
    word: "sidagã",
    eligible: false,
  },
  {
    word: "sidamo",
    eligible: false,
  },
  {
    word: "sideta",
    eligible: false,
  },
  {
    word: "sidina",
    eligible: false,
  },
  {
    word: "Sidnei",
    eligible: false,
  },
  {
    word: "Sidney",
    eligible: false,
  },
  {
    word: "sienês",
    eligible: false,
  },
  {
    word: "sífile",
    eligible: false,
  },
  {
    word: "siflar",
    eligible: false,
  },
  {
    word: "sífneo",
    eligible: false,
  },
  {
    word: "sífnio",
    eligible: false,
  },
  {
    word: "sífula",
    eligible: false,
  },
  {
    word: "siglar",
    eligible: false,
  },
  {
    word: "sigmas",
    eligible: false,
  },
  {
    word: "signar",
    eligible: false,
  },
  {
    word: "signos",
    eligible: false,
  },
  {
    word: "sílabo",
    eligible: false,
  },
  {
    word: "silano",
    eligible: false,
  },
  {
    word: "silene",
    eligible: false,
  },
  {
    word: "sileno",
    eligible: false,
  },
  {
    word: "sílere",
    eligible: false,
  },
  {
    word: "sílfio",
    eligible: false,
  },
  {
    word: "silhal",
    eligible: false,
  },
  {
    word: "silhão",
    eligible: false,
  },
  {
    word: "silhar",
    eligible: false,
  },
  {
    word: "sílibo",
    eligible: false,
  },
  {
    word: "sílica",
    eligible: false,
  },
  {
    word: "sílice",
    eligible: false,
  },
  {
    word: "silico",
    eligible: false,
  },
  {
    word: "sílico",
    eligible: false,
  },
  {
    word: "siligo",
    eligible: false,
  },
  {
    word: "sililo",
    eligible: false,
  },
  {
    word: "silina",
    eligible: false,
  },
  {
    word: "silure",
    eligible: false,
  },
  {
    word: "siluro",
    eligible: false,
  },
  {
    word: "silvão",
    eligible: false,
  },
  {
    word: "silvar",
    eligible: false,
  },
  {
    word: "silvas",
    eligible: false,
  },
  {
    word: "sílvia",
    eligible: false,
  },
  {
    word: "Sílvio",
    eligible: false,
  },
  {
    word: "silvos",
    eligible: false,
  },
  {
    word: "simaba",
    eligible: false,
  },
  {
    word: "Símaco",
    eligible: false,
  },
  {
    word: "Simara",
    eligible: false,
  },
  {
    word: "simbor",
    eligible: false,
  },
  {
    word: "Simeão",
    eligible: false,
  },
  {
    word: "Simeia",
    eligible: false,
  },
  {
    word: "símelo",
    eligible: false,
  },
  {
    word: "Simere",
    eligible: false,
  },
  {
    word: "simete",
    eligible: false,
  },
  {
    word: "símico",
    eligible: false,
  },
  {
    word: "símile",
    eligible: false,
  },
  {
    word: "simira",
    eligible: false,
  },
  {
    word: "simiri",
    eligible: false,
  },
  {
    word: "simius",
    eligible: false,
  },
  {
    word: "simoco",
    eligible: false,
  },
  {
    word: "Simone",
    eligible: false,
  },
  {
    word: "simote",
    eligible: false,
  },
  {
    word: "símulo",
    eligible: false,
  },
  {
    word: "sinabo",
    eligible: false,
  },
  {
    word: "sínafe",
    eligible: false,
  },
  {
    word: "sinais",
    eligible: false,
  },
  {
    word: "sinape",
    eligible: false,
  },
  {
    word: "sinápi",
    eligible: false,
  },
  {
    word: "sinaxe",
    eligible: false,
  },
  {
    word: "SINDPD",
    eligible: false,
  },
  {
    word: "sineco",
    eligible: false,
  },
  {
    word: "sinela",
    eligible: false,
  },
  {
    word: "sinema",
    eligible: false,
  },
  {
    word: "sínese",
    eligible: false,
  },
  {
    word: "Singer",
    eligible: false,
  },
  {
    word: "single",
    eligible: false,
  },
  {
    word: "sinhás",
    eligible: false,
  },
  {
    word: "sinhôs",
    eligible: false,
  },
  {
    word: "sínico",
    eligible: false,
  },
  {
    word: "sínoco",
    eligible: false,
  },
  {
    word: "sínodo",
    eligible: false,
  },
  {
    word: "sinoto",
    eligible: false,
  },
  {
    word: "Sinpef",
    eligible: false,
  },
  {
    word: "SINPRF",
    eligible: false,
  },
  {
    word: "Sinpro",
    eligible: false,
  },
  {
    word: "sinsim",
    eligible: false,
  },
  {
    word: "sintan",
    eligible: false,
  },
  {
    word: "Sintap",
    eligible: false,
  },
  {
    word: "sínter",
    eligible: false,
  },
  {
    word: "Sintia",
    eligible: false,
  },
  {
    word: "Sintra",
    eligible: false,
  },
  {
    word: "sintro",
    eligible: false,
  },
  {
    word: "sinuar",
    eligible: false,
  },
  {
    word: "sinura",
    eligible: false,
  },
  {
    word: "sinzal",
    eligible: false,
  },
  {
    word: "siocho",
    eligible: false,
  },
  {
    word: "sipaio",
    eligible: false,
  },
  {
    word: "sipibo",
    eligible: false,
  },
  {
    word: "sipiri",
    eligible: false,
  },
  {
    word: "siraco",
    eligible: false,
  },
  {
    word: "síraco",
    eligible: false,
  },
  {
    word: "siracu",
    eligible: false,
  },
  {
    word: "sirage",
    eligible: false,
  },
  {
    word: "sirali",
    eligible: false,
  },
  {
    word: "sirdar",
    eligible: false,
  },
  {
    word: "sireca",
    eligible: false,
  },
  {
    word: "síreca",
    eligible: false,
  },
  {
    word: "sirgar",
    eligible: false,
  },
  {
    word: "siribá",
    eligible: false,
  },
  {
    word: "sirica",
    eligible: false,
  },
  {
    word: "sirico",
    eligible: false,
  },
  {
    word: "sirino",
    eligible: false,
  },
  {
    word: "sírinx",
    eligible: false,
  },
  {
    word: "siriri",
    eligible: false,
  },
  {
    word: "sirito",
    eligible: false,
  },
  {
    word: "sirixa",
    eligible: false,
  },
  {
    word: "sírnio",
    eligible: false,
  },
  {
    word: "siroco",
    eligible: false,
  },
  {
    word: "sirote",
    eligible: false,
  },
  {
    word: "sirrum",
    eligible: false,
  },
  {
    word: "SISBEX",
    eligible: false,
  },
  {
    word: "sísifo",
    eligible: false,
  },
  {
    word: "sismal",
    eligible: false,
  },
  {
    word: "sismar",
    eligible: false,
  },
  {
    word: "sismos",
    eligible: false,
  },
  {
    word: "sistro",
    eligible: false,
  },
  {
    word: "sisudo",
    eligible: false,
  },
  {
    word: "sisura",
    eligible: false,
  },
  {
    word: "sitana",
    eligible: false,
  },
  {
    word: "sitela",
    eligible: false,
  },
  {
    word: "sitial",
    eligible: false,
  },
  {
    word: "sitiar",
    eligible: false,
  },
  {
    word: "sítico",
    eligible: false,
  },
  {
    word: "sítida",
    eligible: false,
  },
  {
    word: "sitite",
    eligible: false,
  },
  {
    word: "sitito",
    eligible: false,
  },
  {
    word: "sitona",
    eligible: false,
  },
  {
    word: "sítone",
    eligible: false,
  },
  {
    word: "situar",
    eligible: false,
  },
  {
    word: "sítula",
    eligible: false,
  },
  {
    word: "sivale",
    eligible: false,
  },
  {
    word: "sivane",
    eligible: false,
  },
  {
    word: "sivani",
    eligible: false,
  },
  {
    word: "slalom",
    eligible: false,
  },
  {
    word: "slogan",
    eligible: false,
  },
  {
    word: "smogue",
    eligible: false,
  },
  {
    word: "snifar",
    eligible: false,
  },
  {
    word: "soagem",
    eligible: false,
  },
  {
    word: "soante",
    eligible: false,
  },
  {
    word: "sobado",
    eligible: false,
  },
  {
    word: "sobeta",
    eligible: false,
  },
  {
    word: "sobiar",
    eligible: false,
  },
  {
    word: "sóbole",
    eligible: false,
  },
  {
    word: "soboró",
    eligible: false,
  },
  {
    word: "sobpor",
    eligible: false,
  },
  {
    word: "sobral",
    eligible: false,
  },
  {
    word: "sobrar",
    eligible: false,
  },
  {
    word: "sóbrio",
    eligible: false,
  },
  {
    word: "socapa",
    eligible: false,
  },
  {
    word: "socate",
    eligible: false,
  },
  {
    word: "sochão",
    eligible: false,
  },
  {
    word: "Social",
    eligible: false,
  },
  {
    word: "social",
    eligible: false,
  },
  {
    word: "Sócias",
    eligible: false,
  },
  {
    word: "sócias",
    eligible: false,
  },
  {
    word: "Sócios",
    eligible: false,
  },
  {
    word: "sócios",
    eligible: false,
  },
  {
    word: "sococó",
    eligible: false,
  },
  {
    word: "socoís",
    eligible: false,
  },
  {
    word: "socopé",
    eligible: false,
  },
  {
    word: "socopo",
    eligible: false,
  },
  {
    word: "socoró",
    eligible: false,
  },
  {
    word: "socoto",
    eligible: false,
  },
  {
    word: "socová",
    eligible: false,
  },
  {
    word: "socrar",
    eligible: false,
  },
  {
    word: "socume",
    eligible: false,
  },
  {
    word: "sodica",
    eligible: false,
  },
  {
    word: "sódico",
    eligible: false,
  },
  {
    word: "sodite",
    eligible: false,
  },
  {
    word: "Sodoma",
    eligible: false,
  },
  {
    word: "sodoma",
    eligible: false,
  },
  {
    word: "Soeiro",
    eligible: false,
  },
  {
    word: "soenga",
    eligible: false,
  },
  {
    word: "sofeno",
    eligible: false,
  },
  {
    word: "sofias",
    eligible: false,
  },
  {
    word: "sofito",
    eligible: false,
  },
  {
    word: "sófora",
    eligible: false,
  },
  {
    word: "sofrer",
    eligible: false,
  },
  {
    word: "sogaço",
    eligible: false,
  },
  {
    word: "sogata",
    eligible: false,
  },
  {
    word: "sograr",
    eligible: false,
  },
  {
    word: "sogros",
    eligible: false,
  },
  {
    word: "soiona",
    eligible: false,
  },
  {
    word: "soiosa",
    eligible: false,
  },
  {
    word: "soiote",
    eligible: false,
  },
  {
    word: "soioto",
    eligible: false,
  },
  {
    word: "soirée",
    eligible: false,
  },
  {
    word: "solama",
    eligible: false,
  },
  {
    word: "solano",
    eligible: false,
  },
  {
    word: "soldão",
    eligible: false,
  },
  {
    word: "soldar",
    eligible: false,
  },
  {
    word: "soldas",
    eligible: false,
  },
  {
    word: "soldos",
    eligible: false,
  },
  {
    word: "soldra",
    eligible: false,
  },
  {
    word: "solear",
    eligible: false,
  },
  {
    word: "solene",
    eligible: false,
  },
  {
    word: "soleta",
    eligible: false,
  },
  {
    word: "solfar",
    eligible: false,
  },
  {
    word: "solhar",
    eligible: false,
  },
  {
    word: "sólido",
    eligible: false,
  },
  {
    word: "sólimo",
    eligible: false,
  },
  {
    word: "solina",
    eligible: false,
  },
  {
    word: "Solino",
    eligible: false,
  },
  {
    word: "solipa",
    eligible: false,
  },
  {
    word: "solipé",
    eligible: false,
  },
  {
    word: "sólito",
    eligible: false,
  },
  {
    word: "soltar",
    eligible: false,
  },
  {
    word: "soltas",
    eligible: false,
  },
  {
    word: "soltos",
    eligible: false,
  },
  {
    word: "soluto",
    eligible: false,
  },
  {
    word: "solver",
    eligible: false,
  },
  {
    word: "solvir",
    eligible: false,
  },
  {
    word: "somali",
    eligible: false,
  },
  {
    word: "somato",
    eligible: false,
  },
  {
    word: "sombra",
    eligible: false,
  },
  {
    word: "somito",
    eligible: false,
  },
  {
    word: "sompar",
    eligible: false,
  },
  {
    word: "sonaja",
    eligible: false,
  },
  {
    word: "sonata",
    eligible: false,
  },
  {
    word: "sonave",
    eligible: false,
  },
  {
    word: "sondar",
    eligible: false,
  },
  {
    word: "soneca",
    eligible: false,
  },
  {
    word: "songue",
    eligible: false,
  },
  {
    word: "sonhar",
    eligible: false,
  },
  {
    word: "sonhos",
    eligible: false,
  },
  {
    word: "sônico",
    eligible: false,
  },
  {
    word: "sonido",
    eligible: false,
  },
  {
    word: "sonnei",
    eligible: false,
  },
  {
    word: "Sonoda",
    eligible: false,
  },
  {
    word: "sonora",
    eligible: false,
  },
  {
    word: "sonoro",
    eligible: false,
  },
  {
    word: "sonsão",
    eligible: false,
  },
  {
    word: "sonsos",
    eligible: false,
  },
  {
    word: "sopada",
    eligible: false,
  },
  {
    word: "sopear",
    eligible: false,
  },
  {
    word: "Sophia",
    eligible: false,
  },
  {
    word: "sopiar",
    eligible: false,
  },
  {
    word: "soprão",
    eligible: false,
  },
  {
    word: "soprar",
    eligible: false,
  },
  {
    word: "sopros",
    eligible: false,
  },
  {
    word: "soquir",
    eligible: false,
  },
  {
    word: "sóraco",
    eligible: false,
  },
  {
    word: "Soraia",
    eligible: false,
  },
  {
    word: "sorame",
    eligible: false,
  },
  {
    word: "sorano",
    eligible: false,
  },
  {
    word: "sórbio",
    eligible: false,
  },
  {
    word: "sorbol",
    eligible: false,
  },
  {
    word: "sorção",
    eligible: false,
  },
  {
    word: "SORCER",
    eligible: false,
  },
  {
    word: "sordão",
    eligible: false,
  },
  {
    word: "sordes",
    eligible: false,
  },
  {
    word: "sorear",
    eligible: false,
  },
  {
    word: "sorelo",
    eligible: false,
  },
  {
    word: "sorema",
    eligible: false,
  },
  {
    word: "sorete",
    eligible: false,
  },
  {
    word: "sorgos",
    eligible: false,
  },
  {
    word: "sórice",
    eligible: false,
  },
  {
    word: "sorita",
    eligible: false,
  },
  {
    word: "sornar",
    eligible: false,
  },
  {
    word: "sornir",
    eligible: false,
  },
  {
    word: "soroca",
    eligible: false,
  },
  {
    word: "sorocó",
    eligible: false,
  },
  {
    word: "soropa",
    eligible: false,
  },
  {
    word: "sororó",
    eligible: false,
  },
  {
    word: "sorose",
    eligible: false,
  },
  {
    word: "soroso",
    eligible: false,
  },
  {
    word: "sorrir",
    eligible: false,
  },
  {
    word: "sortir",
    eligible: false,
  },
  {
    word: "soruma",
    eligible: false,
  },
  {
    word: "sorval",
    eligible: false,
  },
  {
    word: "sorvar",
    eligible: false,
  },
  {
    word: "sorver",
    eligible: false,
  },
  {
    word: "sorvos",
    eligible: false,
  },
  {
    word: "sosane",
    eligible: false,
  },
  {
    word: "sosano",
    eligible: false,
  },
  {
    word: "sósibe",
    eligible: false,
  },
  {
    word: "sostro",
    eligible: false,
  },
  {
    word: "sotala",
    eligible: false,
  },
  {
    word: "sotana",
    eligible: false,
  },
  {
    word: "soteia",
    eligible: false,
  },
  {
    word: "Sotero",
    eligible: false,
  },
  {
    word: "sótnia",
    eligible: false,
  },
  {
    word: "sotoar",
    eligible: false,
  },
  {
    word: "sotoba",
    eligible: false,
  },
  {
    word: "sousão",
    eligible: false,
  },
  {
    word: "soutar",
    eligible: false,
  },
  {
    word: "soutos",
    eligible: false,
  },
  {
    word: "sovaco",
    eligible: false,
  },
  {
    word: "sovcoz",
    eligible: false,
  },
  {
    word: "soveio",
    eligible: false,
  },
  {
    word: "sovela",
    eligible: false,
  },
  {
    word: "sôvero",
    eligible: false,
  },
  {
    word: "soveto",
    eligible: false,
  },
  {
    word: "stalse",
    eligible: false,
  },
  {
    word: "stande",
    eligible: false,
  },
  {
    word: "stands",
    eligible: false,
  },
  {
    word: "status",
    eligible: false,
  },
  {
    word: "stereo",
    eligible: false,
  },
  {
    word: "stigma",
    eligible: false,
  },
  {
    word: "stique",
    eligible: false,
  },
  {
    word: "stomia",
    eligible: false,
  },
  {
    word: "stress",
    eligible: false,
  },
  {
    word: "struma",
    eligible: false,
  },
  {
    word: "suábio",
    eligible: false,
  },
  {
    word: "suaçuá",
    eligible: false,
  },
  {
    word: "Suaçuí",
    eligible: false,
  },
  {
    word: "suaçus",
    eligible: false,
  },
  {
    word: "suadir",
    eligible: false,
  },
  {
    word: "suaíle",
    eligible: false,
  },
  {
    word: "suaíli",
    eligible: false,
  },
  {
    word: "suaina",
    eligible: false,
  },
  {
    word: "suarda",
    eligible: false,
  },
  {
    word: "Suárez",
    eligible: false,
  },
  {
    word: "suário",
    eligible: false,
  },
  {
    word: "suarno",
    eligible: false,
  },
  {
    word: "suasão",
    eligible: false,
  },
  {
    word: "suasor",
    eligible: false,
  },
  {
    word: "subabo",
    eligible: false,
  },
  {
    word: "Subael",
    eligible: false,
  },
  {
    word: "subeio",
    eligible: false,
  },
  {
    word: "subido",
    eligible: false,
  },
  {
    word: "súbito",
    eligible: false,
  },
  {
    word: "subtil",
    eligible: false,
  },
  {
    word: "súbulo",
    eligible: false,
  },
  {
    word: "sucapé",
    eligible: false,
  },
  {
    word: "sucaré",
    eligible: false,
  },
  {
    word: "sucaro",
    eligible: false,
  },
  {
    word: "sucção",
    eligible: false,
  },
  {
    word: "Sucena",
    eligible: false,
  },
  {
    word: "suciar",
    eligible: false,
  },
  {
    word: "súcino",
    eligible: false,
  },
  {
    word: "sucisa",
    eligible: false,
  },
  {
    word: "sucoso",
    eligible: false,
  },
  {
    word: "sucrol",
    eligible: false,
  },
  {
    word: "sucuba",
    eligible: false,
  },
  {
    word: "súcubo",
    eligible: false,
  },
  {
    word: "sucupi",
    eligible: false,
  },
  {
    word: "sucuri",
    eligible: false,
  },
  {
    word: "sucuru",
    eligible: false,
  },
  {
    word: "sudeto",
    eligible: false,
  },
  {
    word: "súdito",
    eligible: false,
  },
  {
    word: "Suécia",
    eligible: false,
  },
  {
    word: "suécia",
    eligible: false,
  },
  {
    word: "suécio",
    eligible: false,
  },
  {
    word: "Suédia",
    eligible: false,
  },
  {
    word: "sueira",
    eligible: false,
  },
  {
    word: "Suélen",
    eligible: false,
  },
  {
    word: "Suenia",
    eligible: false,
  },
  {
    word: "Suenne",
    eligible: false,
  },
  {
    word: "sueste",
    eligible: false,
  },
  {
    word: "suéter",
    eligible: false,
  },
  {
    word: "suetro",
    eligible: false,
  },
  {
    word: "sufará",
    eligible: false,
  },
  {
    word: "sufete",
    eligible: false,
  },
  {
    word: "sufita",
    eligible: false,
  },
  {
    word: "suflar",
    eligible: false,
  },
  {
    word: "sufufe",
    eligible: false,
  },
  {
    word: "Suiane",
    eligible: false,
  },
  {
    word: "suíças",
    eligible: false,
  },
  {
    word: "suíços",
    eligible: false,
  },
  {
    word: "suídeo",
    eligible: false,
  },
  {
    word: "suindá",
    eligible: false,
  },
  {
    word: "suione",
    eligible: false,
  },
  {
    word: "suiruá",
    eligible: false,
  },
  {
    word: "suisse",
    eligible: false,
  },
  {
    word: "sujicé",
    eligible: false,
  },
  {
    word: "sujona",
    eligible: false,
  },
  {
    word: "sulano",
    eligible: false,
  },
  {
    word: "sulcar",
    eligible: false,
  },
  {
    word: "sulcos",
    eligible: false,
  },
  {
    word: "súlfur",
    eligible: false,
  },
  {
    word: "súlida",
    eligible: false,
  },
  {
    word: "sulino",
    eligible: false,
  },
  {
    word: "sulipa",
    eligible: false,
  },
  {
    word: "sultão",
    eligible: false,
  },
  {
    word: "sumaca",
    eligible: false,
  },
  {
    word: "sumalé",
    eligible: false,
  },
  {
    word: "Sumara",
    eligible: false,
  },
  {
    word: "sumaré",
    eligible: false,
  },
  {
    word: "sumbul",
    eligible: false,
  },
  {
    word: "sumiço",
    eligible: false,
  },
  {
    word: "sumiga",
    eligible: false,
  },
  {
    word: "sumoso",
    eligible: false,
  },
  {
    word: "sumpto",
    eligible: false,
  },
  {
    word: "súmula",
    eligible: false,
  },
  {
    word: "sunção",
    eligible: false,
  },
  {
    word: "sungar",
    eligible: false,
  },
  {
    word: "sunita",
    eligible: false,
  },
  {
    word: "sunuco",
    eligible: false,
  },
  {
    word: "suores",
    eligible: false,
  },
  {
    word: "supeno",
    eligible: false,
  },
  {
    word: "súpero",
    eligible: false,
  },
  {
    word: "súpeto",
    eligible: false,
  },
  {
    word: "supino",
    eligible: false,
  },
  {
    word: "súpito",
    eligible: false,
  },
  {
    word: "suprir",
    eligible: false,
  },
  {
    word: "suquir",
    eligible: false,
  },
  {
    word: "surane",
    eligible: false,
  },
  {
    word: "surata",
    eligible: false,
  },
  {
    word: "surcar",
    eligible: false,
  },
  {
    word: "surdas",
    eligible: false,
  },
  {
    word: "surdez",
    eligible: false,
  },
  {
    word: "surdir",
    eligible: false,
  },
  {
    word: "Surdos",
    eligible: false,
  },
  {
    word: "surdos",
    eligible: false,
  },
  {
    word: "surfar",
    eligible: false,
  },
  {
    word: "surgir",
    eligible: false,
  },
  {
    word: "suribi",
    eligible: false,
  },
  {
    word: "Suriel",
    eligible: false,
  },
  {
    word: "surinã",
    eligible: false,
  },
  {
    word: "suriri",
    eligible: false,
  },
  {
    word: "surita",
    eligible: false,
  },
  {
    word: "súrnia",
    eligible: false,
  },
  {
    word: "suropo",
    eligible: false,
  },
  {
    word: "surote",
    eligible: false,
  },
  {
    word: "surrão",
    eligible: false,
  },
  {
    word: "surrar",
    eligible: false,
  },
  {
    word: "sursis",
    eligible: false,
  },
  {
    word: "surtar",
    eligible: false,
  },
  {
    word: "surtir",
    eligible: false,
  },
  {
    word: "surtos",
    eligible: false,
  },
  {
    word: "surtum",
    eligible: false,
  },
  {
    word: "suruba",
    eligible: false,
  },
  {
    word: "surubi",
    eligible: false,
  },
  {
    word: "suruiá",
    eligible: false,
  },
  {
    word: "surujé",
    eligible: false,
  },
  {
    word: "surujê",
    eligible: false,
  },
  {
    word: "suruma",
    eligible: false,
  },
  {
    word: "sururu",
    eligible: false,
  },
  {
    word: "Susane",
    eligible: false,
  },
  {
    word: "susano",
    eligible: false,
  },
  {
    word: "Susete",
    eligible: false,
  },
  {
    word: "susino",
    eligible: false,
  },
  {
    word: "súsino",
    eligible: false,
  },
  {
    word: "sustar",
    eligible: false,
  },
  {
    word: "suster",
    eligible: false,
  },
  {
    word: "sustos",
    eligible: false,
  },
  {
    word: "susunu",
    eligible: false,
  },
  {
    word: "sutana",
    eligible: false,
  },
  {
    word: "sutate",
    eligible: false,
  },
  {
    word: "sutera",
    eligible: false,
  },
  {
    word: "sutora",
    eligible: false,
  },
  {
    word: "sutrão",
    eligible: false,
  },
  {
    word: "sútrio",
    eligible: false,
  },
  {
    word: "suumba",
    eligible: false,
  },
  {
    word: "suvino",
    eligible: false,
  },
  {
    word: "Suzane",
    eligible: false,
  },
  {
    word: "Suzano",
    eligible: false,
  },
  {
    word: "Suzete",
    eligible: false,
  },
  {
    word: "suzunu",
    eligible: false,
  },
  {
    word: "Sydney",
    eligible: false,
  },
  {
    word: "taanhé",
    eligible: false,
  },
  {
    word: "tabaco",
    eligible: false,
  },
  {
    word: "tabago",
    eligible: false,
  },
  {
    word: "tabalo",
    eligible: false,
  },
  {
    word: "tabano",
    eligible: false,
  },
  {
    word: "Tabate",
    eligible: false,
  },
  {
    word: "Tabeal",
    eligible: false,
  },
  {
    word: "tabeca",
    eligible: false,
  },
  {
    word: "Tabeel",
    eligible: false,
  },
  {
    word: "tabefe",
    eligible: false,
  },
  {
    word: "tabela",
    eligible: false,
  },
  {
    word: "Taberá",
    eligible: false,
  },
  {
    word: "tábido",
    eligible: false,
  },
  {
    word: "tabino",
    eligible: false,
  },
  {
    word: "tabira",
    eligible: false,
  },
  {
    word: "Tabita",
    eligible: false,
  },
  {
    word: "Taboão",
    eligible: false,
  },
  {
    word: "taboca",
    eligible: false,
  },
  {
    word: "Tabosa",
    eligible: false,
  },
  {
    word: "tabual",
    eligible: false,
  },
  {
    word: "tabuão",
    eligible: false,
  },
  {
    word: "tabuas",
    eligible: false,
  },
  {
    word: "tábuas",
    eligible: false,
  },
  {
    word: "tabujo",
    eligible: false,
  },
  {
    word: "tábula",
    eligible: false,
  },
  {
    word: "tabulé",
    eligible: false,
  },
  {
    word: "tabulu",
    eligible: false,
  },
  {
    word: "tacaca",
    eligible: false,
  },
  {
    word: "tacacá",
    eligible: false,
  },
  {
    word: "taçado",
    eligible: false,
  },
  {
    word: "tacana",
    eligible: false,
  },
  {
    word: "tacape",
    eligible: false,
  },
  {
    word: "tacaré",
    eligible: false,
  },
  {
    word: "tácaro",
    eligible: false,
  },
  {
    word: "tacauá",
    eligible: false,
  },
  {
    word: "tacelo",
    eligible: false,
  },
  {
    word: "tachão",
    eligible: false,
  },
  {
    word: "tachar",
    eligible: false,
  },
  {
    word: "tachim",
    eligible: false,
  },
  {
    word: "tachos",
    eligible: false,
  },
  {
    word: "taciaí",
    eligible: false,
  },
  {
    word: "taciba",
    eligible: false,
  },
  {
    word: "Tacima",
    eligible: false,
  },
  {
    word: "tácito",
    eligible: false,
  },
  {
    word: "tacose",
    eligible: false,
  },
  {
    word: "táctil",
    eligible: false,
  },
  {
    word: "tacujá",
    eligible: false,
  },
  {
    word: "tacula",
    eligible: false,
  },
  {
    word: "tacuná",
    eligible: false,
  },
  {
    word: "tacuri",
    eligible: false,
  },
  {
    word: "tacuru",
    eligible: false,
  },
  {
    word: "tádega",
    eligible: false,
  },
  {
    word: "tadeia",
    eligible: false,
  },
  {
    word: "tadita",
    eligible: false,
  },
  {
    word: "Tadmor",
    eligible: false,
  },
  {
    word: "taenia",
    eligible: false,
  },
  {
    word: "Tafate",
    eligible: false,
  },
  {
    word: "tafetá",
    eligible: false,
  },
  {
    word: "tafife",
    eligible: false,
  },
  {
    word: "tafile",
    eligible: false,
  },
  {
    word: "tafire",
    eligible: false,
  },
  {
    word: "Tafnes",
    eligible: false,
  },
  {
    word: "tafona",
    eligible: false,
  },
  {
    word: "tafoné",
    eligible: false,
  },
  {
    word: "tafria",
    eligible: false,
  },
  {
    word: "tagalo",
    eligible: false,
  },
  {
    word: "tagano",
    eligible: false,
  },
  {
    word: "tagara",
    eligible: false,
  },
  {
    word: "tagaté",
    eligible: false,
  },
  {
    word: "tageto",
    eligible: false,
  },
  {
    word: "tágico",
    eligible: false,
  },
  {
    word: "tágide",
    eligible: false,
  },
  {
    word: "tagona",
    eligible: false,
  },
  {
    word: "tágoro",
    eligible: false,
  },
  {
    word: "Taguaí",
    eligible: false,
  },
  {
    word: "taguaú",
    eligible: false,
  },
  {
    word: "Tahani",
    eligible: false,
  },
  {
    word: "taiaçu",
    eligible: false,
  },
  {
    word: "Taiana",
    eligible: false,
  },
  {
    word: "taietê",
    eligible: false,
  },
  {
    word: "taimbé",
    eligible: false,
  },
  {
    word: "tainar",
    eligible: false,
  },
  {
    word: "tainha",
    eligible: false,
  },
  {
    word: "tainos",
    eligible: false,
  },
  {
    word: "taioba",
    eligible: false,
  },
  {
    word: "taioca",
    eligible: false,
  },
  {
    word: "taiova",
    eligible: false,
  },
  {
    word: "taipal",
    eligible: false,
  },
  {
    word: "taipão",
    eligible: false,
  },
  {
    word: "taipar",
    eligible: false,
  },
  {
    word: "taiuiá",
    eligible: false,
  },
  {
    word: "taiura",
    eligible: false,
  },
  {
    word: "taiutá",
    eligible: false,
  },
  {
    word: "taiuva",
    eligible: false,
  },
  {
    word: "Taiwan",
    eligible: false,
  },
  {
    word: "tajaçu",
    eligible: false,
  },
  {
    word: "tajibá",
    eligible: false,
  },
  {
    word: "tajipá",
    eligible: false,
  },
  {
    word: "tajuba",
    eligible: false,
  },
  {
    word: "tajujá",
    eligible: false,
  },
  {
    word: "tajupá",
    eligible: false,
  },
  {
    word: "tajurá",
    eligible: false,
  },
  {
    word: "tajuva",
    eligible: false,
  },
  {
    word: "talaço",
    eligible: false,
  },
  {
    word: "tálamo",
    eligible: false,
  },
  {
    word: "talefe",
    eligible: false,
  },
  {
    word: "Taleia",
    eligible: false,
  },
  {
    word: "talete",
    eligible: false,
  },
  {
    word: "taleto",
    eligible: false,
  },
  {
    word: "taleva",
    eligible: false,
  },
  {
    word: "talhão",
    eligible: false,
  },
  {
    word: "talhar",
    eligible: false,
  },
  {
    word: "talhas",
    eligible: false,
  },
  {
    word: "talher",
    eligible: false,
  },
  {
    word: "talhes",
    eligible: false,
  },
  {
    word: "talhos",
    eligible: false,
  },
  {
    word: "talião",
    eligible: false,
  },
  {
    word: "talibã",
    eligible: false,
  },
  {
    word: "talibé",
    eligible: false,
  },
  {
    word: "tálico",
    eligible: false,
  },
  {
    word: "talide",
    eligible: false,
  },
  {
    word: "Táliga",
    eligible: false,
  },
  {
    word: "taliga",
    eligible: false,
  },
  {
    word: "talino",
    eligible: false,
  },
  {
    word: "talipe",
    eligible: false,
  },
  {
    word: "talipo",
    eligible: false,
  },
  {
    word: "Talita",
    eligible: false,
  },
  {
    word: "Talmai",
    eligible: false,
  },
  {
    word: "taloco",
    eligible: false,
  },
  {
    word: "talodi",
    eligible: false,
  },
  {
    word: "taloro",
    eligible: false,
  },
  {
    word: "talose",
    eligible: false,
  },
  {
    word: "taloso",
    eligible: false,
  },
  {
    word: "taluca",
    eligible: false,
  },
  {
    word: "talvez",
    eligible: false,
  },
  {
    word: "tamale",
    eligible: false,
  },
  {
    word: "tâmara",
    eligible: false,
  },
  {
    word: "tamaré",
    eligible: false,
  },
  {
    word: "tamari",
    eligible: false,
  },
  {
    word: "tamaru",
    eligible: false,
  },
  {
    word: "tamatá",
    eligible: false,
  },
  {
    word: "tamati",
    eligible: false,
  },
  {
    word: "Tambaú",
    eligible: false,
  },
  {
    word: "também",
    eligible: false,
  },
  {
    word: "tambió",
    eligible: false,
  },
  {
    word: "tambiú",
    eligible: false,
  },
  {
    word: "tambor",
    eligible: false,
  },
  {
    word: "tambuí",
    eligible: false,
  },
  {
    word: "tambul",
    eligible: false,
  },
  {
    word: "Tâmega",
    eligible: false,
  },
  {
    word: "tamiça",
    eligible: false,
  },
  {
    word: "tamina",
    eligible: false,
  },
  {
    word: "Tâmisa",
    eligible: false,
  },
  {
    word: "tâmnio",
    eligible: false,
  },
  {
    word: "tamoão",
    eligible: false,
  },
  {
    word: "tamoio",
    eligible: false,
  },
  {
    word: "tampão",
    eligible: false,
  },
  {
    word: "tampar",
    eligible: false,
  },
  {
    word: "tampos",
    eligible: false,
  },
  {
    word: "tamucu",
    eligible: false,
  },
  {
    word: "tamuje",
    eligible: false,
  },
  {
    word: "tamujo",
    eligible: false,
  },
  {
    word: "Tanabi",
    eligible: false,
  },
  {
    word: "tananá",
    eligible: false,
  },
  {
    word: "tânase",
    eligible: false,
  },
  {
    word: "tanatã",
    eligible: false,
  },
  {
    word: "tanato",
    eligible: false,
  },
  {
    word: "tanató",
    eligible: false,
  },
  {
    word: "tancar",
    eligible: false,
  },
  {
    word: "Tancos",
    eligible: false,
  },
  {
    word: "tandel",
    eligible: false,
  },
  {
    word: "tandem",
    eligible: false,
  },
  {
    word: "tandil",
    eligible: false,
  },
  {
    word: "tandur",
    eligible: false,
  },
  {
    word: "taneco",
    eligible: false,
  },
  {
    word: "tangão",
    eligible: false,
  },
  {
    word: "tangar",
    eligible: false,
  },
  {
    word: "Tânger",
    eligible: false,
  },
  {
    word: "tanger",
    eligible: false,
  },
  {
    word: "tanges",
    eligible: false,
  },
  {
    word: "tangor",
    eligible: false,
  },
  {
    word: "tangos",
    eligible: false,
  },
  {
    word: "tanguá",
    eligible: false,
  },
  {
    word: "tangul",
    eligible: false,
  },
  {
    word: "tanhos",
    eligible: false,
  },
  {
    word: "taniça",
    eligible: false,
  },
  {
    word: "tânico",
    eligible: false,
  },
  {
    word: "tanino",
    eligible: false,
  },
  {
    word: "tanjão",
    eligible: false,
  },
  {
    word: "tanoar",
    eligible: false,
  },
  {
    word: "tanoca",
    eligible: false,
  },
  {
    word: "tanona",
    eligible: false,
  },
  {
    word: "tanque",
    eligible: false,
  },
  {
    word: "tantra",
    eligible: false,
  },
  {
    word: "tapajó",
    eligible: false,
  },
  {
    word: "tapari",
    eligible: false,
  },
  {
    word: "Tapauá",
    eligible: false,
  },
  {
    word: "tapear",
    eligible: false,
  },
  {
    word: "tapema",
    eligible: false,
  },
  {
    word: "tapena",
    eligible: false,
  },
  {
    word: "tapera",
    eligible: false,
  },
  {
    word: "taperá",
    eligible: false,
  },
  {
    word: "taperu",
    eligible: false,
  },
  {
    word: "tapete",
    eligible: false,
  },
  {
    word: "tapiaí",
    eligible: false,
  },
  {
    word: "tapiás",
    eligible: false,
  },
  {
    word: "tapigo",
    eligible: false,
  },
  {
    word: "tapina",
    eligible: false,
  },
  {
    word: "tapira",
    eligible: false,
  },
  {
    word: "tapiré",
    eligible: false,
  },
  {
    word: "tapiri",
    eligible: false,
  },
  {
    word: "tápiro",
    eligible: false,
  },
  {
    word: "tapiru",
    eligible: false,
  },
  {
    word: "tapisa",
    eligible: false,
  },
  {
    word: "tapiti",
    eligible: false,
  },
  {
    word: "tapiuá",
    eligible: false,
  },
  {
    word: "tapixi",
    eligible: false,
  },
  {
    word: "tapixó",
    eligible: false,
  },
  {
    word: "tapona",
    eligible: false,
  },
  {
    word: "taporo",
    eligible: false,
  },
  {
    word: "tápsia",
    eligible: false,
  },
  {
    word: "tapuia",
    eligible: false,
  },
  {
    word: "tapuio",
    eligible: false,
  },
  {
    word: "tapuji",
    eligible: false,
  },
  {
    word: "tapume",
    eligible: false,
  },
  {
    word: "tapuru",
    eligible: false,
  },
  {
    word: "táquea",
    eligible: false,
  },
  {
    word: "tarabé",
    eligible: false,
  },
  {
    word: "tarafe",
    eligible: false,
  },
  {
    word: "Tarala",
    eligible: false,
  },
  {
    word: "taramá",
    eligible: false,
  },
  {
    word: "Tarana",
    eligible: false,
  },
  {
    word: "tarapé",
    eligible: false,
  },
  {
    word: "tarata",
    eligible: false,
  },
  {
    word: "taraxe",
    eligible: false,
  },
  {
    word: "tarbês",
    eligible: false,
  },
  {
    word: "tardão",
    eligible: false,
  },
  {
    word: "tardar",
    eligible: false,
  },
  {
    word: "tardes",
    eligible: false,
  },
  {
    word: "tardio",
    eligible: false,
  },
  {
    word: "tardor",
    eligible: false,
  },
  {
    word: "tardos",
    eligible: false,
  },
  {
    word: "tardoz",
    eligible: false,
  },
  {
    word: "tarear",
    eligible: false,
  },
  {
    word: "tareco",
    eligible: false,
  },
  {
    word: "taredo",
    eligible: false,
  },
  {
    word: "Tarefa",
    eligible: false,
  },
  {
    word: "tarefa",
    eligible: false,
  },
  {
    word: "tarega",
    eligible: false,
  },
  {
    word: "Tareia",
    eligible: false,
  },
  {
    word: "tarena",
    eligible: false,
  },
  {
    word: "tareré",
    eligible: false,
  },
  {
    word: "tárfio",
    eligible: false,
  },
  {
    word: "targra",
    eligible: false,
  },
  {
    word: "targum",
    eligible: false,
  },
  {
    word: "tarifa",
    eligible: false,
  },
  {
    word: "tarira",
    eligible: false,
  },
  {
    word: "tariri",
    eligible: false,
  },
  {
    word: "tarisa",
    eligible: false,
  },
  {
    word: "tarjão",
    eligible: false,
  },
  {
    word: "tarjar",
    eligible: false,
  },
  {
    word: "tarono",
    eligible: false,
  },
  {
    word: "taropé",
    eligible: false,
  },
  {
    word: "tarote",
    eligible: false,
  },
  {
    word: "tarpão",
    eligible: false,
  },
  {
    word: "tarrão",
    eligible: false,
  },
  {
    word: "tarraz",
    eligible: false,
  },
  {
    word: "tarréu",
    eligible: false,
  },
  {
    word: "tarsal",
    eligible: false,
  },
  {
    word: "társeo",
    eligible: false,
  },
  {
    word: "társio",
    eligible: false,
  },
  {
    word: "társis",
    eligible: false,
  },
  {
    word: "tarubá",
    eligible: false,
  },
  {
    word: "taruco",
    eligible: false,
  },
  {
    word: "Taruma",
    eligible: false,
  },
  {
    word: "tarumá",
    eligible: false,
  },
  {
    word: "tarumã",
    eligible: false,
  },
  {
    word: "tarvia",
    eligible: false,
  },
  {
    word: "Tarzan",
    eligible: false,
  },
  {
    word: "tascar",
    eligible: false,
  },
  {
    word: "tascos",
    eligible: false,
  },
  {
    word: "tasgar",
    eligible: false,
  },
  {
    word: "tásgio",
    eligible: false,
  },
  {
    word: "Tássia",
    eligible: false,
  },
  {
    word: "tatabu",
    eligible: false,
  },
  {
    word: "tatame",
    eligible: false,
  },
  {
    word: "tatâmi",
    eligible: false,
  },
  {
    word: "tatané",
    eligible: false,
  },
  {
    word: "tataré",
    eligible: false,
  },
  {
    word: "tátaro",
    eligible: false,
  },
  {
    word: "tatear",
    eligible: false,
  },
  {
    word: "tatera",
    eligible: false,
  },
  {
    word: "tateto",
    eligible: false,
  },
  {
    word: "tático",
    eligible: false,
  },
  {
    word: "tatoga",
    eligible: false,
  },
  {
    word: "tatuar",
    eligible: false,
  },
  {
    word: "tatuço",
    eligible: false,
  },
  {
    word: "tatuiá",
    eligible: false,
  },
  {
    word: "tatura",
    eligible: false,
  },
  {
    word: "taturu",
    eligible: false,
  },
  {
    word: "tauaçu",
    eligible: false,
  },
  {
    word: "tauanã",
    eligible: false,
  },
  {
    word: "tauara",
    eligible: false,
  },
  {
    word: "tauari",
    eligible: false,
  },
  {
    word: "tauató",
    eligible: false,
  },
  {
    word: "taugui",
    eligible: false,
  },
  {
    word: "tauiri",
    eligible: false,
  },
  {
    word: "tauité",
    eligible: false,
  },
  {
    word: "tauoca",
    eligible: false,
  },
  {
    word: "táureo",
    eligible: false,
  },
  {
    word: "taurim",
    eligible: false,
  },
  {
    word: "tautau",
    eligible: false,
  },
  {
    word: "tavala",
    eligible: false,
  },
  {
    word: "tavãos",
    eligible: false,
  },
  {
    word: "tavara",
    eligible: false,
  },
  {
    word: "táveda",
    eligible: false,
  },
  {
    word: "távega",
    eligible: false,
  },
  {
    word: "taveno",
    eligible: false,
  },
  {
    word: "tavila",
    eligible: false,
  },
  {
    word: "Tavira",
    eligible: false,
  },
  {
    word: "tavira",
    eligible: false,
  },
  {
    word: "tavite",
    eligible: false,
  },
  {
    word: "tavoca",
    eligible: false,
  },
  {
    word: "távola",
    eligible: false,
  },
  {
    word: "Távora",
    eligible: false,
  },
  {
    word: "taxale",
    eligible: false,
  },
  {
    word: "taxema",
    eligible: false,
  },
  {
    word: "taxiar",
    eligible: false,
  },
  {
    word: "táxico",
    eligible: false,
  },
  {
    word: "táxila",
    eligible: false,
  },
  {
    word: "taxina",
    eligible: false,
  },
  {
    word: "taxipá",
    eligible: false,
  },
  {
    word: "taxira",
    eligible: false,
  },
  {
    word: "taxite",
    eligible: false,
  },
  {
    word: "taxupá",
    eligible: false,
  },
  {
    word: "taxuri",
    eligible: false,
  },
  {
    word: "Taylor",
    eligible: false,
  },
  {
    word: "tcheco",
    eligible: false,
  },
  {
    word: "teáceo",
    eligible: false,
  },
  {
    word: "teagem",
    eligible: false,
  },
  {
    word: "teália",
    eligible: false,
  },
  {
    word: "teatro",
    eligible: false,
  },
  {
    word: "tebano",
    eligible: false,
  },
  {
    word: "tebele",
    eligible: false,
  },
  {
    word: "tebena",
    eligible: false,
  },
  {
    word: "tebexê",
    eligible: false,
  },
  {
    word: "tecebá",
    eligible: false,
  },
  {
    word: "tecelã",
    eligible: false,
  },
  {
    word: "techno",
    eligible: false,
  },
  {
    word: "tecido",
    eligible: false,
  },
  {
    word: "tecite",
    eligible: false,
  },
  {
    word: "teclar",
    eligible: false,
  },
  {
    word: "teclas",
    eligible: false,
  },
  {
    word: "téclea",
    eligible: false,
  },
  {
    word: "tecole",
    eligible: false,
  },
  {
    word: "tecoma",
    eligible: false,
  },
  {
    word: "tecumã",
    eligible: false,
  },
  {
    word: "tecuna",
    eligible: false,
  },
  {
    word: "teédia",
    eligible: false,
  },
  {
    word: "teedor",
    eligible: false,
  },
  {
    word: "Teerão",
    eligible: false,
  },
  {
    word: "teflão",
    eligible: false,
  },
  {
    word: "teflon",
    eligible: false,
  },
  {
    word: "tegeeu",
    eligible: false,
  },
  {
    word: "tegmal",
    eligible: false,
  },
  {
    word: "tégmen",
    eligible: false,
  },
  {
    word: "tégula",
    eligible: false,
  },
  {
    word: "teimar",
    eligible: false,
  },
  {
    word: "teínea",
    eligible: false,
  },
  {
    word: "teísmo",
    eligible: false,
  },
  {
    word: "teísta",
    eligible: false,
  },
  {
    word: "teitei",
    eligible: false,
  },
  {
    word: "tejano",
    eligible: false,
  },
  {
    word: "tejubu",
    eligible: false,
  },
  {
    word: "tejuco",
    eligible: false,
  },
  {
    word: "Tejupá",
    eligible: false,
  },
  {
    word: "telaro",
    eligible: false,
  },
  {
    word: "telebê",
    eligible: false,
  },
  {
    word: "telega",
    eligible: false,
  },
  {
    word: "télepo",
    eligible: false,
  },
  {
    word: "TELESC",
    eligible: false,
  },
  {
    word: "telese",
    eligible: false,
  },
  {
    word: "telhal",
    eligible: false,
  },
  {
    word: "telhão",
    eligible: false,
  },
  {
    word: "telhar",
    eligible: false,
  },
  {
    word: "telhas",
    eligible: false,
  },
  {
    word: "telina",
    eligible: false,
  },
  {
    word: "telite",
    eligible: false,
  },
  {
    word: "telões",
    eligible: false,
  },
  {
    word: "telona",
    eligible: false,
  },
  {
    word: "télson",
    eligible: false,
  },
  {
    word: "telugo",
    eligible: false,
  },
  {
    word: "télugo",
    eligible: false,
  },
  {
    word: "têmeno",
    eligible: false,
  },
  {
    word: "temero",
    eligible: false,
  },
  {
    word: "temeto",
    eligible: false,
  },
  {
    word: "tempão",
    eligible: false,
  },
  {
    word: "templo",
    eligible: false,
  },
  {
    word: "tempos",
    eligible: false,
  },
  {
    word: "temudo",
    eligible: false,
  },
  {
    word: "tenção",
    eligible: false,
  },
  {
    word: "tendal",
    eligible: false,
  },
  {
    word: "tendão",
    eligible: false,
  },
  {
    word: "tendas",
    eligible: false,
  },
  {
    word: "tender",
    eligible: false,
  },
  {
    word: "tênder",
    eligible: false,
  },
  {
    word: "tenenê",
    eligible: false,
  },
  {
    word: "tengue",
    eligible: false,
  },
  {
    word: "tênias",
    eligible: false,
  },
  {
    word: "tenito",
    eligible: false,
  },
  {
    word: "tensão",
    eligible: false,
  },
  {
    word: "tênsil",
    eligible: false,
  },
  {
    word: "tensor",
    eligible: false,
  },
  {
    word: "tentar",
    eligible: false,
  },
  {
    word: "tentém",
    eligible: false,
  },
  {
    word: "tentes",
    eligible: false,
  },
  {
    word: "tentos",
    eligible: false,
  },
  {
    word: "teocal",
    eligible: false,
  },
  {
    word: "teônoe",
    eligible: false,
  },
  {
    word: "teorba",
    eligible: false,
  },
  {
    word: "Teoria",
    eligible: false,
  },
  {
    word: "teoria",
    eligible: false,
  },
  {
    word: "teósis",
    eligible: false,
  },
  {
    word: "tépala",
    eligible: false,
  },
  {
    word: "tepari",
    eligible: false,
  },
  {
    word: "tépido",
    eligible: false,
  },
  {
    word: "TEQUEL",
    eligible: false,
  },
  {
    word: "terato",
    eligible: false,
  },
  {
    word: "térbio",
    eligible: false,
  },
  {
    word: "terção",
    eligible: false,
  },
  {
    word: "terçar",
    eligible: false,
  },
  {
    word: "Terças",
    eligible: false,
  },
  {
    word: "terças",
    eligible: false,
  },
  {
    word: "tercil",
    eligible: false,
  },
  {
    word: "tércio",
    eligible: false,
  },
  {
    word: "terçol",
    eligible: false,
  },
  {
    word: "terços",
    eligible: false,
  },
  {
    word: "tereba",
    eligible: false,
  },
  {
    word: "teredo",
    eligible: false,
  },
  {
    word: "tereno",
    eligible: false,
  },
  {
    word: "tereré",
    eligible: false,
  },
  {
    word: "tererê",
    eligible: false,
  },
  {
    word: "teresa",
    eligible: false,
  },
  {
    word: "tereso",
    eligible: false,
  },
  {
    word: "Tereza",
    eligible: false,
  },
  {
    word: "tergal",
    eligible: false,
  },
  {
    word: "terité",
    eligible: false,
  },
  {
    word: "termal",
    eligible: false,
  },
  {
    word: "termia",
    eligible: false,
  },
  {
    word: "termos",
    eligible: false,
  },
  {
    word: "ternal",
    eligible: false,
  },
  {
    word: "ternar",
    eligible: false,
  },
  {
    word: "ternos",
    eligible: false,
  },
  {
    word: "terral",
    eligible: false,
  },
  {
    word: "terrão",
    eligible: false,
  },
  {
    word: "terrar",
    eligible: false,
  },
  {
    word: "terras",
    eligible: false,
  },
  {
    word: "térreo",
    eligible: false,
  },
  {
    word: "terréu",
    eligible: false,
  },
  {
    word: "terriê",
    eligible: false,
  },
  {
    word: "terrol",
    eligible: false,
  },
  {
    word: "terror",
    eligible: false,
  },
  {
    word: "tersol",
    eligible: false,
  },
  {
    word: "tescão",
    eligible: false,
  },
  {
    word: "tesida",
    eligible: false,
  },
  {
    word: "tesíea",
    eligible: false,
  },
  {
    word: "téspio",
    eligible: false,
  },
  {
    word: "tessar",
    eligible: false,
  },
  {
    word: "testar",
    eligible: false,
  },
  {
    word: "testas",
    eligible: false,
  },
  {
    word: "testes",
    eligible: false,
  },
  {
    word: "Téstio",
    eligible: false,
  },
  {
    word: "tesudo",
    eligible: false,
  },
  {
    word: "tesura",
    eligible: false,
  },
  {
    word: "tetani",
    eligible: false,
  },
  {
    word: "tétano",
    eligible: false,
  },
  {
    word: "teteia",
    eligible: false,
  },
  {
    word: "teteté",
    eligible: false,
  },
  {
    word: "tetetê",
    eligible: false,
  },
  {
    word: "tetéus",
    eligible: false,
  },
  {
    word: "tético",
    eligible: false,
  },
  {
    word: "tetila",
    eligible: false,
  },
  {
    word: "tetina",
    eligible: false,
  },
  {
    word: "tétrao",
    eligible: false,
  },
  {
    word: "tetraz",
    eligible: false,
  },
  {
    word: "tetril",
    eligible: false,
  },
  {
    word: "tetriz",
    eligible: false,
  },
  {
    word: "tetrol",
    eligible: false,
  },
  {
    word: "tetudo",
    eligible: false,
  },
  {
    word: "teucro",
    eligible: false,
  },
  {
    word: "teurgo",
    eligible: false,
  },
  {
    word: "teutão",
    eligible: false,
  },
  {
    word: "têutis",
    eligible: false,
  },
  {
    word: "texano",
    eligible: false,
  },
  {
    word: "têxtil",
    eligible: false,
  },
  {
    word: "textor",
    eligible: false,
  },
  {
    word: "téxtor",
    eligible: false,
  },
  {
    word: "textos",
    eligible: false,
  },
  {
    word: "texugo",
    eligible: false,
  },
  {
    word: "tezime",
    eligible: false,
  },
  {
    word: "Thiago",
    eligible: false,
  },
  {
    word: "Thomas",
    eligible: false,
  },
  {
    word: "tiambo",
    eligible: false,
  },
  {
    word: "tianeu",
    eligible: false,
  },
  {
    word: "tianha",
    eligible: false,
  },
  {
    word: "tiazol",
    eligible: false,
  },
  {
    word: "tibaca",
    eligible: false,
  },
  {
    word: "Tibães",
    eligible: false,
  },
  {
    word: "Tibagi",
    eligible: false,
  },
  {
    word: "Tibaji",
    eligible: false,
  },
  {
    word: "tibelo",
    eligible: false,
  },
  {
    word: "tibete",
    eligible: false,
  },
  {
    word: "tibeto",
    eligible: false,
  },
  {
    word: "tibial",
    eligible: false,
  },
  {
    word: "tibiez",
    eligible: false,
  },
  {
    word: "tibilo",
    eligible: false,
  },
  {
    word: "tibiro",
    eligible: false,
  },
  {
    word: "tibuna",
    eligible: false,
  },
  {
    word: "tiburo",
    eligible: false,
  },
  {
    word: "ticaca",
    eligible: false,
  },
  {
    word: "ticono",
    eligible: false,
  },
  {
    word: "ticopá",
    eligible: false,
  },
  {
    word: "ticoró",
    eligible: false,
  },
  {
    word: "ticoso",
    eligible: false,
  },
  {
    word: "tictos",
    eligible: false,
  },
  {
    word: "ticuca",
    eligible: false,
  },
  {
    word: "ticuna",
    eligible: false,
  },
  {
    word: "ticupá",
    eligible: false,
  },
  {
    word: "ticupi",
    eligible: false,
  },
  {
    word: "ticura",
    eligible: false,
  },
  {
    word: "tidore",
    eligible: false,
  },
  {
    word: "tiemia",
    eligible: false,
  },
  {
    word: "tienzu",
    eligible: false,
  },
  {
    word: "tietar",
    eligible: false,
  },
  {
    word: "tieteí",
    eligible: false,
  },
  {
    word: "tieuté",
    eligible: false,
  },
  {
    word: "tifale",
    eligible: false,
  },
  {
    word: "tífico",
    eligible: false,
  },
  {
    word: "tifoia",
    eligible: false,
  },
  {
    word: "tifose",
    eligible: false,
  },
  {
    word: "tifoso",
    eligible: false,
  },
  {
    word: "tífula",
    eligible: false,
  },
  {
    word: "tigela",
    eligible: false,
  },
  {
    word: "tigelo",
    eligible: false,
  },
  {
    word: "tiglão",
    eligible: false,
  },
  {
    word: "tíglio",
    eligible: false,
  },
  {
    word: "tigrão",
    eligible: false,
  },
  {
    word: "tigres",
    eligible: false,
  },
  {
    word: "tigura",
    eligible: false,
  },
  {
    word: "tiíada",
    eligible: false,
  },
  {
    word: "tiiera",
    eligible: false,
  },
  {
    word: "tijibu",
    eligible: false,
  },
  {
    word: "tijoco",
    eligible: false,
  },
  {
    word: "tijolo",
    eligible: false,
  },
  {
    word: "tijuco",
    eligible: false,
  },
  {
    word: "tijupá",
    eligible: false,
  },
  {
    word: "tildar",
    eligible: false,
  },
  {
    word: "tileia",
    eligible: false,
  },
  {
    word: "tílias",
    eligible: false,
  },
  {
    word: "tilíea",
    eligible: false,
  },
  {
    word: "tilina",
    eligible: false,
  },
  {
    word: "tilito",
    eligible: false,
  },
  {
    word: "tilodo",
    eligible: false,
  },
  {
    word: "tiloma",
    eligible: false,
  },
  {
    word: "tilose",
    eligible: false,
  },
  {
    word: "tiloso",
    eligible: false,
  },
  {
    word: "timaca",
    eligible: false,
  },
  {
    word: "timaço",
    eligible: false,
  },
  {
    word: "tímaco",
    eligible: false,
  },
  {
    word: "timalo",
    eligible: false,
  },
  {
    word: "timbaí",
    eligible: false,
  },
  {
    word: "timbal",
    eligible: false,
  },
  {
    word: "timbós",
    eligible: false,
  },
  {
    word: "timbri",
    eligible: false,
  },
  {
    word: "timbuí",
    eligible: false,
  },
  {
    word: "tímele",
    eligible: false,
  },
  {
    word: "timené",
    eligible: false,
  },
  {
    word: "timeno",
    eligible: false,
  },
  {
    word: "timico",
    eligible: false,
  },
  {
    word: "tímico",
    eligible: false,
  },
  {
    word: "timicu",
    eligible: false,
  },
  {
    word: "tímido",
    eligible: false,
  },
  {
    word: "timilo",
    eligible: false,
  },
  {
    word: "timina",
    eligible: false,
  },
  {
    word: "timite",
    eligible: false,
  },
  {
    word: "timões",
    eligible: false,
  },
  {
    word: "Timora",
    eligible: false,
  },
  {
    word: "tinada",
    eligible: false,
  },
  {
    word: "tínamo",
    eligible: false,
  },
  {
    word: "tinamu",
    eligible: false,
  },
  {
    word: "tincal",
    eligible: false,
  },
  {
    word: "tinção",
    eligible: false,
  },
  {
    word: "tincar",
    eligible: false,
  },
  {
    word: "tincoã",
    eligible: false,
  },
  {
    word: "tinefe",
    eligible: false,
  },
  {
    word: "tineia",
    eligible: false,
  },
  {
    word: "tinelo",
    eligible: false,
  },
  {
    word: "tineta",
    eligible: false,
  },
  {
    word: "tinfeu",
    eligible: false,
  },
  {
    word: "tingar",
    eligible: false,
  },
  {
    word: "tingir",
    eligible: false,
  },
  {
    word: "tíngis",
    eligible: false,
  },
  {
    word: "tingos",
    eligible: false,
  },
  {
    word: "tinguá",
    eligible: false,
  },
  {
    word: "tingui",
    eligible: false,
  },
  {
    word: "tinhão",
    eligible: false,
  },
  {
    word: "tinito",
    eligible: false,
  },
  {
    word: "tinoca",
    eligible: false,
  },
  {
    word: "Tinoco",
    eligible: false,
  },
  {
    word: "tinote",
    eligible: false,
  },
  {
    word: "tinoto",
    eligible: false,
  },
  {
    word: "tinqui",
    eligible: false,
  },
  {
    word: "tintar",
    eligible: false,
  },
  {
    word: "tintas",
    eligible: false,
  },
  {
    word: "tintim",
    eligible: false,
  },
  {
    word: "tintor",
    eligible: false,
  },
  {
    word: "tintos",
    eligible: false,
  },
  {
    word: "tiocol",
    eligible: false,
  },
  {
    word: "tioico",
    eligible: false,
  },
  {
    word: "tiombe",
    eligible: false,
  },
  {
    word: "tionol",
    eligible: false,
  },
  {
    word: "tiorba",
    eligible: false,
  },
  {
    word: "tiorga",
    eligible: false,
  },
  {
    word: "tipado",
    eligible: false,
  },
  {
    word: "típico",
    eligible: false,
  },
  {
    word: "tipiri",
    eligible: false,
  },
  {
    word: "tipiti",
    eligible: false,
  },
  {
    word: "tipixa",
    eligible: false,
  },
  {
    word: "tipoia",
    eligible: false,
  },
  {
    word: "tipote",
    eligible: false,
  },
  {
    word: "típton",
    eligible: false,
  },
  {
    word: "tipuca",
    eligible: false,
  },
  {
    word: "tipuiú",
    eligible: false,
  },
  {
    word: "típula",
    eligible: false,
  },
  {
    word: "Tiquié",
    eligible: false,
  },
  {
    word: "tíquio",
    eligible: false,
  },
  {
    word: "Tiraca",
    eligible: false,
  },
  {
    word: "tiraço",
    eligible: false,
  },
  {
    word: "tirada",
    eligible: false,
  },
  {
    word: "tirado",
    eligible: false,
  },
  {
    word: "Tiraná",
    eligible: false,
  },
  {
    word: "tirana",
    eligible: false,
  },
  {
    word: "tirano",
    eligible: false,
  },
  {
    word: "tirapé",
    eligible: false,
  },
  {
    word: "tireia",
    eligible: false,
  },
  {
    word: "tirete",
    eligible: false,
  },
  {
    word: "tiriba",
    eligible: false,
  },
  {
    word: "tiriça",
    eligible: false,
  },
  {
    word: "tirina",
    eligible: false,
  },
  {
    word: "tirira",
    eligible: false,
  },
  {
    word: "tiriri",
    eligible: false,
  },
  {
    word: "tiriva",
    eligible: false,
  },
  {
    word: "tiroma",
    eligible: false,
  },
  {
    word: "tisana",
    eligible: false,
  },
  {
    word: "tísano",
    eligible: false,
  },
  {
    word: "tíscio",
    eligible: false,
  },
  {
    word: "tísico",
    eligible: false,
  },
  {
    word: "tisite",
    eligible: false,
  },
  {
    word: "tisito",
    eligible: false,
  },
  {
    word: "tísmia",
    eligible: false,
  },
  {
    word: "tisnar",
    eligible: false,
  },
  {
    word: "titano",
    eligible: false,
  },
  {
    word: "titara",
    eligible: false,
  },
  {
    word: "titela",
    eligible: false,
  },
  {
    word: "títere",
    eligible: false,
  },
  {
    word: "titeri",
    eligible: false,
  },
  {
    word: "titica",
    eligible: false,
  },
  {
    word: "titina",
    eligible: false,
  },
  {
    word: "titira",
    eligible: false,
  },
  {
    word: "título",
    eligible: false,
  },
  {
    word: "Tityus",
    eligible: false,
  },
  {
    word: "tiúbas",
    eligible: false,
  },
  {
    word: "tívoli",
    eligible: false,
  },
  {
    word: "tizita",
    eligible: false,
  },
  {
    word: "tlaspe",
    eligible: false,
  },
  {
    word: "tlipse",
    eligible: false,
  },
  {
    word: "tluqui",
    eligible: false,
  },
  {
    word: "tmólio",
    eligible: false,
  },
  {
    word: "toadas",
    eligible: false,
  },
  {
    word: "toalha",
    eligible: false,
  },
  {
    word: "toarda",
    eligible: false,
  },
  {
    word: "tobaca",
    eligible: false,
  },
  {
    word: "Tobago",
    eligible: false,
  },
  {
    word: "Tobias",
    eligible: false,
  },
  {
    word: "tobias",
    eligible: false,
  },
  {
    word: "tobira",
    eligible: false,
  },
  {
    word: "tobote",
    eligible: false,
  },
  {
    word: "tocado",
    eligible: false,
  },
  {
    word: "tocajé",
    eligible: false,
  },
  {
    word: "tocama",
    eligible: false,
  },
  {
    word: "tocari",
    eligible: false,
  },
  {
    word: "tócaro",
    eligible: false,
  },
  {
    word: "tocata",
    eligible: false,
  },
  {
    word: "Tocate",
    eligible: false,
  },
  {
    word: "tocear",
    eligible: false,
  },
  {
    word: "tococa",
    eligible: false,
  },
  {
    word: "tocoió",
    eligible: false,
  },
  {
    word: "toeiro",
    eligible: false,
  },
  {
    word: "toesar",
    eligible: false,
  },
  {
    word: "tofana",
    eligible: false,
  },
  {
    word: "Tofano",
    eligible: false,
  },
  {
    word: "Tofete",
    eligible: false,
  },
  {
    word: "togato",
    eligible: false,
  },
  {
    word: "toguês",
    eligible: false,
  },
  {
    word: "toiçar",
    eligible: false,
  },
  {
    word: "toiços",
    eligible: false,
  },
  {
    word: "toinha",
    eligible: false,
  },
  {
    word: "Toinho",
    eligible: false,
  },
  {
    word: "toiral",
    eligible: false,
  },
  {
    word: "toirão",
    eligible: false,
  },
  {
    word: "toirar",
    eligible: false,
  },
  {
    word: "toiril",
    eligible: false,
  },
  {
    word: "toiros",
    eligible: false,
  },
  {
    word: "tojoso",
    eligible: false,
  },
  {
    word: "tolaço",
    eligible: false,
  },
  {
    word: "tolano",
    eligible: false,
  },
  {
    word: "toldar",
    eligible: false,
  },
  {
    word: "toldos",
    eligible: false,
  },
  {
    word: "toledo",
    eligible: false,
  },
  {
    word: "toleno",
    eligible: false,
  },
  {
    word: "tolete",
    eligible: false,
  },
  {
    word: "tolher",
    eligible: false,
  },
  {
    word: "tolice",
    eligible: false,
  },
  {
    word: "tolilo",
    eligible: false,
  },
  {
    word: "tólipe",
    eligible: false,
  },
  {
    word: "tolite",
    eligible: false,
  },
  {
    word: "Tolmai",
    eligible: false,
  },
  {
    word: "tolona",
    eligible: false,
  },
  {
    word: "Tolosa",
    eligible: false,
  },
  {
    word: "tólpis",
    eligible: false,
  },
  {
    word: "toluol",
    eligible: false,
  },
  {
    word: "tomada",
    eligible: false,
  },
  {
    word: "tomara",
    eligible: false,
  },
  {
    word: "tomate",
    eligible: false,
  },
  {
    word: "tombão",
    eligible: false,
  },
  {
    word: "tombar",
    eligible: false,
  },
  {
    word: "tombos",
    eligible: false,
  },
  {
    word: "tomelo",
    eligible: false,
  },
  {
    word: "tômico",
    eligible: false,
  },
  {
    word: "tôminx",
    eligible: false,
  },
  {
    word: "tomiso",
    eligible: false,
  },
  {
    word: "tomita",
    eligible: false,
  },
  {
    word: "tômoro",
    eligible: false,
  },
  {
    word: "toncaí",
    eligible: false,
  },
  {
    word: "tonema",
    eligible: false,
  },
  {
    word: "tongus",
    eligible: false,
  },
  {
    word: "Tonhão",
    eligible: false,
  },
  {
    word: "tônica",
    eligible: false,
  },
  {
    word: "Tonico",
    eligible: false,
  },
  {
    word: "tônico",
    eligible: false,
  },
  {
    word: "tonina",
    eligible: false,
  },
  {
    word: "tonite",
    eligible: false,
  },
  {
    word: "tonose",
    eligible: false,
  },
  {
    word: "tonsar",
    eligible: false,
  },
  {
    word: "tontão",
    eligible: false,
  },
  {
    word: "tontas",
    eligible: false,
  },
  {
    word: "tontos",
    eligible: false,
  },
  {
    word: "toparó",
    eligible: false,
  },
  {
    word: "topaza",
    eligible: false,
  },
  {
    word: "topear",
    eligible: false,
  },
  {
    word: "topete",
    eligible: false,
  },
  {
    word: "topiar",
    eligible: false,
  },
  {
    word: "tópico",
    eligible: false,
  },
  {
    word: "topino",
    eligible: false,
  },
  {
    word: "topitá",
    eligible: false,
  },
  {
    word: "Toquém",
    eligible: false,
  },
  {
    word: "toques",
    eligible: false,
  },
  {
    word: "Tóquio",
    eligible: false,
  },
  {
    word: "torace",
    eligible: false,
  },
  {
    word: "tóraco",
    eligible: false,
  },
  {
    word: "torana",
    eligible: false,
  },
  {
    word: "torcal",
    eligible: false,
  },
  {
    word: "torçal",
    eligible: false,
  },
  {
    word: "torção",
    eligible: false,
  },
  {
    word: "torcaz",
    eligible: false,
  },
  {
    word: "torcel",
    eligible: false,
  },
  {
    word: "torcer",
    eligible: false,
  },
  {
    word: "torçol",
    eligible: false,
  },
  {
    word: "tordas",
    eligible: false,
  },
  {
    word: "tordos",
    eligible: false,
  },
  {
    word: "torena",
    eligible: false,
  },
  {
    word: "tóreta",
    eligible: false,
  },
  {
    word: "torete",
    eligible: false,
  },
  {
    word: "torgal",
    eligible: false,
  },
  {
    word: "torgão",
    eligible: false,
  },
  {
    word: "torgas",
    eligible: false,
  },
  {
    word: "tórico",
    eligible: false,
  },
  {
    word: "torilo",
    eligible: false,
  },
  {
    word: "torina",
    eligible: false,
  },
  {
    word: "torino",
    eligible: false,
  },
  {
    word: "tórino",
    eligible: false,
  },
  {
    word: "torite",
    eligible: false,
  },
  {
    word: "torito",
    eligible: false,
  },
  {
    word: "tornar",
    eligible: false,
  },
  {
    word: "tornel",
    eligible: false,
  },
  {
    word: "tornês",
    eligible: false,
  },
  {
    word: "tornil",
    eligible: false,
  },
  {
    word: "tornol",
    eligible: false,
  },
  {
    word: "tornos",
    eligible: false,
  },
  {
    word: "torofo",
    eligible: false,
  },
  {
    word: "tóropa",
    eligible: false,
  },
  {
    word: "Toropi",
    eligible: false,
  },
  {
    word: "tororó",
    eligible: false,
  },
  {
    word: "toroso",
    eligible: false,
  },
  {
    word: "torpor",
    eligible: false,
  },
  {
    word: "torque",
    eligible: false,
  },
  {
    word: "torrão",
    eligible: false,
  },
  {
    word: "torrar",
    eligible: false,
  },
  {
    word: "torres",
    eligible: false,
  },
  {
    word: "torroa",
    eligible: false,
  },
  {
    word: "torsal",
    eligible: false,
  },
  {
    word: "torsor",
    eligible: false,
  },
  {
    word: "tortão",
    eligible: false,
  },
  {
    word: "tortas",
    eligible: false,
  },
  {
    word: "tortor",
    eligible: false,
  },
  {
    word: "tortos",
    eligible: false,
  },
  {
    word: "tortoz",
    eligible: false,
  },
  {
    word: "tórulo",
    eligible: false,
  },
  {
    word: "torumã",
    eligible: false,
  },
  {
    word: "torvar",
    eligible: false,
  },
  {
    word: "torvos",
    eligible: false,
  },
  {
    word: "toscar",
    eligible: false,
  },
  {
    word: "toscos",
    eligible: false,
  },
  {
    word: "tosela",
    eligible: false,
  },
  {
    word: "tosila",
    eligible: false,
  },
  {
    word: "tossir",
    eligible: false,
  },
  {
    word: "tostão",
    eligible: false,
  },
  {
    word: "tostar",
    eligible: false,
  },
  {
    word: "totano",
    eligible: false,
  },
  {
    word: "tóteme",
    eligible: false,
  },
  {
    word: "totora",
    eligible: false,
  },
  {
    word: "totumo",
    eligible: false,
  },
  {
    word: "toucar",
    eligible: false,
  },
  {
    word: "touçar",
    eligible: false,
  },
  {
    word: "toucas",
    eligible: false,
  },
  {
    word: "touços",
    eligible: false,
  },
  {
    word: "toufão",
    eligible: false,
  },
  {
    word: "tougue",
    eligible: false,
  },
  {
    word: "toural",
    eligible: false,
  },
  {
    word: "tourão",
    eligible: false,
  },
  {
    word: "tourar",
    eligible: false,
  },
  {
    word: "touril",
    eligible: false,
  },
  {
    word: "touros",
    eligible: false,
  },
  {
    word: "tovaca",
    eligible: false,
  },
  {
    word: "tóxico",
    eligible: false,
  },
  {
    word: "toxina",
    eligible: false,
  },
  {
    word: "toxona",
    eligible: false,
  },
  {
    word: "tóxoto",
    eligible: false,
  },
  {
    word: "Toyota",
    eligible: false,
  },
  {
    word: "trabal",
    eligible: false,
  },
  {
    word: "trábea",
    eligible: false,
  },
  {
    word: "trabul",
    eligible: false,
  },
  {
    word: "tração",
    eligible: false,
  },
  {
    word: "traçar",
    eligible: false,
  },
  {
    word: "traças",
    eligible: false,
  },
  {
    word: "trácio",
    eligible: false,
  },
  {
    word: "traços",
    eligible: false,
  },
  {
    word: "tracuá",
    eligible: false,
  },
  {
    word: "tracuã",
    eligible: false,
  },
  {
    word: "tradar",
    eligible: false,
  },
  {
    word: "trados",
    eligible: false,
  },
  {
    word: "tragar",
    eligible: false,
  },
  {
    word: "tragaz",
    eligible: false,
  },
  {
    word: "trager",
    eligible: false,
  },
  {
    word: "trágio",
    eligible: false,
  },
  {
    word: "tragor",
    eligible: false,
  },
  {
    word: "tragos",
    eligible: false,
  },
  {
    word: "traguá",
    eligible: false,
  },
  {
    word: "trágus",
    eligible: false,
  },
  {
    word: "Traipu",
    eligible: false,
  },
  {
    word: "traíra",
    eligible: false,
  },
  {
    word: "Trairi",
    eligible: false,
  },
  {
    word: "traite",
    eligible: false,
  },
  {
    word: "trajar",
    eligible: false,
  },
  {
    word: "trajos",
    eligible: false,
  },
  {
    word: "tramar",
    eligible: false,
  },
  {
    word: "tramba",
    eligible: false,
  },
  {
    word: "tramos",
    eligible: false,
  },
  {
    word: "trampo",
    eligible: false,
  },
  {
    word: "tranar",
    eligible: false,
  },
  {
    word: "tranca",
    eligible: false,
  },
  {
    word: "trança",
    eligible: false,
  },
  {
    word: "trango",
    eligible: false,
  },
  {
    word: "trapaz",
    eligible: false,
  },
  {
    word: "trapel",
    eligible: false,
  },
  {
    word: "trapiá",
    eligible: false,
  },
  {
    word: "trapio",
    eligible: false,
  },
  {
    word: "trapos",
    eligible: false,
  },
  {
    word: "trapus",
    eligible: false,
  },
  {
    word: "trapuz",
    eligible: false,
  },
  {
    word: "traquá",
    eligible: false,
  },
  {
    word: "traque",
    eligible: false,
  },
  {
    word: "trasgo",
    eligible: false,
  },
  {
    word: "traste",
    eligible: false,
  },
  {
    word: "trasto",
    eligible: false,
  },
  {
    word: "tratar",
    eligible: false,
  },
  {
    word: "trator",
    eligible: false,
  },
  {
    word: "tratos",
    eligible: false,
  },
  {
    word: "trauma",
    eligible: false,
  },
  {
    word: "trauso",
    eligible: false,
  },
  {
    word: "traval",
    eligible: false,
  },
  {
    word: "travão",
    eligible: false,
  },
  {
    word: "travar",
    eligible: false,
  },
  {
    word: "través",
    eligible: false,
  },
  {
    word: "travia",
    eligible: false,
  },
  {
    word: "Travis",
    eligible: false,
  },
  {
    word: "travor",
    eligible: false,
  },
  {
    word: "travos",
    eligible: false,
  },
  {
    word: "trazer",
    eligible: false,
  },
  {
    word: "trázio",
    eligible: false,
  },
  {
    word: "treala",
    eligible: false,
  },
  {
    word: "trébio",
    eligible: false,
  },
  {
    word: "trebol",
    eligible: false,
  },
  {
    word: "trecho",
    eligible: false,
  },
  {
    word: "treçol",
    eligible: false,
  },
  {
    word: "trégua",
    eligible: false,
  },
  {
    word: "treino",
    eligible: false,
  },
  {
    word: "treler",
    eligible: false,
  },
  {
    word: "trelho",
    eligible: false,
  },
  {
    word: "tremão",
    eligible: false,
  },
  {
    word: "tremar",
    eligible: false,
  },
  {
    word: "tremer",
    eligible: false,
  },
  {
    word: "tremes",
    eligible: false,
  },
  {
    word: "tremês",
    eligible: false,
  },
  {
    word: "tremor",
    eligible: false,
  },
  {
    word: "trempe",
    eligible: false,
  },
  {
    word: "trenar",
    eligible: false,
  },
  {
    word: "trença",
    eligible: false,
  },
  {
    word: "trenel",
    eligible: false,
  },
  {
    word: "trengo",
    eligible: false,
  },
  {
    word: "trenla",
    eligible: false,
  },
  {
    word: "trenos",
    eligible: false,
  },
  {
    word: "Trento",
    eligible: false,
  },
  {
    word: "treose",
    eligible: false,
  },
  {
    word: "trepar",
    eligible: false,
  },
  {
    word: "tréron",
    eligible: false,
  },
  {
    word: "tresia",
    eligible: false,
  },
  {
    word: "tresse",
    eligible: false,
  },
  {
    word: "treval",
    eligible: false,
  },
  {
    word: "trevas",
    eligible: false,
  },
  {
    word: "trévia",
    eligible: false,
  },
  {
    word: "Trevis",
    eligible: false,
  },
  {
    word: "trevor",
    eligible: false,
  },
  {
    word: "trevos",
    eligible: false,
  },
  {
    word: "triaca",
    eligible: false,
  },
  {
    word: "tríade",
    eligible: false,
  },
  {
    word: "triaga",
    eligible: false,
  },
  {
    word: "triale",
    eligible: false,
  },
  {
    word: "triano",
    eligible: false,
  },
  {
    word: "tribal",
    eligible: false,
  },
  {
    word: "tribul",
    eligible: false,
  },
  {
    word: "trício",
    eligible: false,
  },
  {
    word: "tridia",
    eligible: false,
  },
  {
    word: "tríduo",
    eligible: false,
  },
  {
    word: "trieco",
    eligible: false,
  },
  {
    word: "triere",
    eligible: false,
  },
  {
    word: "trigal",
    eligible: false,
  },
  {
    word: "trigar",
    eligible: false,
  },
  {
    word: "trígeo",
    eligible: false,
  },
  {
    word: "triglo",
    eligible: false,
  },
  {
    word: "trígon",
    eligible: false,
  },
  {
    word: "trigos",
    eligible: false,
  },
  {
    word: "trilar",
    eligible: false,
  },
  {
    word: "tríler",
    eligible: false,
  },
  {
    word: "trilha",
    eligible: false,
  },
  {
    word: "trílio",
    eligible: false,
  },
  {
    word: "trímio",
    eligible: false,
  },
  {
    word: "trinar",
    eligible: false,
  },
  {
    word: "trínax",
    eligible: false,
  },
  {
    word: "Trinca",
    eligible: false,
  },
  {
    word: "trinca",
    eligible: false,
  },
  {
    word: "tringa",
    eligible: false,
  },
  {
    word: "trínio",
    eligible: false,
  },
  {
    word: "trinir",
    eligible: false,
  },
  {
    word: "trinos",
    eligible: false,
  },
  {
    word: "trinta",
    eligible: false,
  },
  {
    word: "triodo",
    eligible: false,
  },
  {
    word: "tríodo",
    eligible: false,
  },
  {
    word: "triolé",
    eligible: false,
  },
  {
    word: "tríopa",
    eligible: false,
  },
  {
    word: "triope",
    eligible: false,
  },
  {
    word: "triose",
    eligible: false,
  },
  {
    word: "tripar",
    eligible: false,
  },
  {
    word: "tripas",
    eligible: false,
  },
  {
    word: "triple",
    eligible: false,
  },
  {
    word: "triplo",
    eligible: false,
  },
  {
    word: "tripos",
    eligible: false,
  },
  {
    word: "tripse",
    eligible: false,
  },
  {
    word: "tripsi",
    eligible: false,
  },
  {
    word: "trique",
    eligible: false,
  },
  {
    word: "trisar",
    eligible: false,
  },
  {
    word: "trismo",
    eligible: false,
  },
  {
    word: "trisna",
    eligible: false,
  },
  {
    word: "trista",
    eligible: false,
  },
  {
    word: "triste",
    eligible: false,
  },
  {
    word: "tritão",
    eligible: false,
  },
  {
    word: "tritar",
    eligible: false,
  },
  {
    word: "trítio",
    eligible: false,
  },
  {
    word: "trítis",
    eligible: false,
  },
  {
    word: "tritol",
    eligible: false,
  },
  {
    word: "tritom",
    eligible: false,
  },
  {
    word: "tríton",
    eligible: false,
  },
  {
    word: "tritos",
    eligible: false,
  },
  {
    word: "triúra",
    eligible: false,
  },
  {
    word: "triúso",
    eligible: false,
  },
  {
    word: "trívio",
    eligible: false,
  },
  {
    word: "trízia",
    eligible: false,
  },
  {
    word: "Trôade",
    eligible: false,
  },
  {
    word: "trocal",
    eligible: false,
  },
  {
    word: "troçal",
    eligible: false,
  },
  {
    word: "trocar",
    eligible: false,
  },
  {
    word: "troçar",
    eligible: false,
  },
  {
    word: "trocas",
    eligible: false,
  },
  {
    word: "trocaz",
    eligible: false,
  },
  {
    word: "trocmo",
    eligible: false,
  },
  {
    word: "trocos",
    eligible: false,
  },
  {
    word: "troços",
    eligible: false,
  },
  {
    word: "trocto",
    eligible: false,
  },
  {
    word: "troféu",
    eligible: false,
  },
  {
    word: "trofia",
    eligible: false,
  },
  {
    word: "trofil",
    eligible: false,
  },
  {
    word: "trófon",
    eligible: false,
  },
  {
    word: "trogia",
    eligible: false,
  },
  {
    word: "trógio",
    eligible: false,
  },
  {
    word: "trogmo",
    eligible: false,
  },
  {
    word: "trógon",
    eligible: false,
  },
  {
    word: "troião",
    eligible: false,
  },
  {
    word: "troiar",
    eligible: false,
  },
  {
    word: "troico",
    eligible: false,
  },
  {
    word: "troile",
    eligible: false,
  },
  {
    word: "troilo",
    eligible: false,
  },
  {
    word: "troira",
    eligible: false,
  },
  {
    word: "troixe",
    eligible: false,
  },
  {
    word: "troixo",
    eligible: false,
  },
  {
    word: "trojan",
    eligible: false,
  },
  {
    word: "trolas",
    eligible: false,
  },
  {
    word: "trólei",
    eligible: false,
  },
  {
    word: "troles",
    eligible: false,
  },
  {
    word: "trolho",
    eligible: false,
  },
  {
    word: "trolim",
    eligible: false,
  },
  {
    word: "trólio",
    eligible: false,
  },
  {
    word: "tromba",
    eligible: false,
  },
  {
    word: "tronar",
    eligible: false,
  },
  {
    word: "Tronco",
    eligible: false,
  },
  {
    word: "tronco",
    eligible: false,
  },
  {
    word: "tronda",
    eligible: false,
  },
  {
    word: "tronga",
    eligible: false,
  },
  {
    word: "trônio",
    eligible: false,
  },
  {
    word: "tronos",
    eligible: false,
  },
  {
    word: "tropão",
    eligible: false,
  },
  {
    word: "tropar",
    eligible: false,
  },
  {
    word: "tropas",
    eligible: false,
  },
  {
    word: "tropel",
    eligible: false,
  },
  {
    word: "tropia",
    eligible: false,
  },
  {
    word: "tropos",
    eligible: false,
  },
  {
    word: "trotão",
    eligible: false,
  },
  {
    word: "trotar",
    eligible: false,
  },
  {
    word: "trotil",
    eligible: false,
  },
  {
    word: "trouxe",
    eligible: false,
  },
  {
    word: "trouxo",
    eligible: false,
  },
  {
    word: "trovão",
    eligible: false,
  },
  {
    word: "trovar",
    eligible: false,
  },
  {
    word: "truaca",
    eligible: false,
  },
  {
    word: "trucar",
    eligible: false,
  },
  {
    word: "trucha",
    eligible: false,
  },
  {
    word: "trucos",
    eligible: false,
  },
  {
    word: "trucuá",
    eligible: false,
  },
  {
    word: "trufal",
    eligible: false,
  },
  {
    word: "trufar",
    eligible: false,
  },
  {
    word: "truita",
    eligible: false,
  },
  {
    word: "trumaí",
    eligible: false,
  },
  {
    word: "trupar",
    eligible: false,
  },
  {
    word: "trúpia",
    eligible: false,
  },
  {
    word: "trupir",
    eligible: false,
  },
  {
    word: "trussa",
    eligible: false,
  },
  {
    word: "truste",
    eligible: false,
  },
  {
    word: "trutas",
    eligible: false,
  },
  {
    word: "tsonga",
    eligible: false,
  },
  {
    word: "tuatua",
    eligible: false,
  },
  {
    word: "tuauçu",
    eligible: false,
  },
  {
    word: "tubabo",
    eligible: false,
  },
  {
    word: "tubaca",
    eligible: false,
  },
  {
    word: "tubana",
    eligible: false,
  },
  {
    word: "túbaro",
    eligible: false,
  },
  {
    word: "túbera",
    eligible: false,
  },
  {
    word: "túbero",
    eligible: false,
  },
  {
    word: "tubete",
    eligible: false,
  },
  {
    word: "tubiba",
    eligible: false,
  },
  {
    word: "túbulo",
    eligible: false,
  },
  {
    word: "tubuna",
    eligible: false,
  },
  {
    word: "tucaiá",
    eligible: false,
  },
  {
    word: "tucajé",
    eligible: false,
  },
  {
    word: "tucani",
    eligible: false,
  },
  {
    word: "tucano",
    eligible: false,
  },
  {
    word: "tucari",
    eligible: false,
  },
  {
    word: "tucujá",
    eligible: false,
  },
  {
    word: "tucuju",
    eligible: false,
  },
  {
    word: "tucuma",
    eligible: false,
  },
  {
    word: "tucumá",
    eligible: false,
  },
  {
    word: "tucumã",
    eligible: false,
  },
  {
    word: "tucuna",
    eligible: false,
  },
  {
    word: "tucuns",
    eligible: false,
  },
  {
    word: "tucupá",
    eligible: false,
  },
  {
    word: "tucupi",
    eligible: false,
  },
  {
    word: "tucura",
    eligible: false,
  },
  {
    word: "tucuri",
    eligible: false,
  },
  {
    word: "tucuru",
    eligible: false,
  },
  {
    word: "tucuxi",
    eligible: false,
  },
  {
    word: "tudaca",
    eligible: false,
  },
  {
    word: "tufnol",
    eligible: false,
  },
  {
    word: "tufoso",
    eligible: false,
  },
  {
    word: "tuição",
    eligible: false,
  },
  {
    word: "tuietê",
    eligible: false,
  },
  {
    word: "tuindá",
    eligible: false,
  },
  {
    word: "tuinim",
    eligible: false,
  },
  {
    word: "tuiona",
    eligible: false,
  },
  {
    word: "tuíras",
    eligible: false,
  },
  {
    word: "tuitar",
    eligible: false,
  },
  {
    word: "tuíter",
    eligible: false,
  },
  {
    word: "tuiuca",
    eligible: false,
  },
  {
    word: "tuiués",
    eligible: false,
  },
  {
    word: "tuiuiú",
    eligible: false,
  },
  {
    word: "tuiuti",
    eligible: false,
  },
  {
    word: "tuiuva",
    eligible: false,
  },
  {
    word: "tujano",
    eligible: false,
  },
  {
    word: "tujeno",
    eligible: false,
  },
  {
    word: "tujona",
    eligible: false,
  },
  {
    word: "tujuba",
    eligible: false,
  },
  {
    word: "tujuco",
    eligible: false,
  },
  {
    word: "tujuju",
    eligible: false,
  },
  {
    word: "tujupi",
    eligible: false,
  },
  {
    word: "tujuva",
    eligible: false,
  },
  {
    word: "tulhas",
    eligible: false,
  },
  {
    word: "tulipa",
    eligible: false,
  },
  {
    word: "tulite",
    eligible: false,
  },
  {
    word: "Tullio",
    eligible: false,
  },
  {
    word: "tulpai",
    eligible: false,
  },
  {
    word: "tulupa",
    eligible: false,
  },
  {
    word: "túluva",
    eligible: false,
  },
  {
    word: "Tumaco",
    eligible: false,
  },
  {
    word: "tumbal",
    eligible: false,
  },
  {
    word: "tumbar",
    eligible: false,
  },
  {
    word: "tumbas",
    eligible: false,
  },
  {
    word: "túmido",
    eligible: false,
  },
  {
    word: "tumita",
    eligible: false,
  },
  {
    word: "túmulo",
    eligible: false,
  },
  {
    word: "tumurá",
    eligible: false,
  },
  {
    word: "tuncum",
    eligible: false,
  },
  {
    word: "tundar",
    eligible: false,
  },
  {
    word: "tundra",
    eligible: false,
  },
  {
    word: "tungão",
    eligible: false,
  },
  {
    word: "tungar",
    eligible: false,
  },
  {
    word: "tungro",
    eligible: false,
  },
  {
    word: "tungue",
    eligible: false,
  },
  {
    word: "túnica",
    eligible: false,
  },
  {
    word: "Tuntum",
    eligible: false,
  },
  {
    word: "Tunupa",
    eligible: false,
  },
  {
    word: "tupaia",
    eligible: false,
  },
  {
    word: "tupari",
    eligible: false,
  },
  {
    word: "tupeia",
    eligible: false,
  },
  {
    word: "tupeti",
    eligible: false,
  },
  {
    word: "túpico",
    eligible: false,
  },
  {
    word: "tupina",
    eligible: false,
  },
  {
    word: "tupiná",
    eligible: false,
  },
  {
    word: "tupixá",
    eligible: false,
  },
  {
    word: "tuputá",
    eligible: false,
  },
  {
    word: "turaco",
    eligible: false,
  },
  {
    word: "turaia",
    eligible: false,
  },
  {
    word: "turaré",
    eligible: false,
  },
  {
    word: "turari",
    eligible: false,
  },
  {
    word: "turbão",
    eligible: false,
  },
  {
    word: "turbar",
    eligible: false,
  },
  {
    word: "turbor",
    eligible: false,
  },
  {
    word: "turbos",
    eligible: false,
  },
  {
    word: "turcas",
    eligible: false,
  },
  {
    word: "turcol",
    eligible: false,
  },
  {
    word: "turcos",
    eligible: false,
  },
  {
    word: "tureba",
    eligible: false,
  },
  {
    word: "turejo",
    eligible: false,
  },
  {
    word: "turfol",
    eligible: false,
  },
  {
    word: "turgir",
    eligible: false,
  },
  {
    word: "turgor",
    eligible: false,
  },
  {
    word: "turião",
    eligible: false,
  },
  {
    word: "turica",
    eligible: false,
  },
  {
    word: "túrico",
    eligible: false,
  },
  {
    word: "turino",
    eligible: false,
  },
  {
    word: "Túrios",
    eligible: false,
  },
  {
    word: "turiri",
    eligible: false,
  },
  {
    word: "turiúa",
    eligible: false,
  },
  {
    word: "turmar",
    eligible: false,
  },
  {
    word: "turmas",
    eligible: false,
  },
  {
    word: "Turner",
    eligible: false,
  },
  {
    word: "túrnia",
    eligible: false,
  },
  {
    word: "túrnix",
    eligible: false,
  },
  {
    word: "túrone",
    eligible: false,
  },
  {
    word: "túrono",
    eligible: false,
  },
  {
    word: "turqui",
    eligible: false,
  },
  {
    word: "turrão",
    eligible: false,
  },
  {
    word: "turrar",
    eligible: false,
  },
  {
    word: "túrrea",
    eligible: false,
  },
  {
    word: "túrrio",
    eligible: false,
  },
  {
    word: "turros",
    eligible: false,
  },
  {
    word: "turuba",
    eligible: false,
  },
  {
    word: "turubi",
    eligible: false,
  },
  {
    word: "turuçu",
    eligible: false,
  },
  {
    word: "turueí",
    eligible: false,
  },
  {
    word: "turumã",
    eligible: false,
  },
  {
    word: "turuna",
    eligible: false,
  },
  {
    word: "tururi",
    eligible: false,
  },
  {
    word: "tururu",
    eligible: false,
  },
  {
    word: "turusá",
    eligible: false,
  },
  {
    word: "turvar",
    eligible: false,
  },
  {
    word: "turvos",
    eligible: false,
  },
  {
    word: "tusque",
    eligible: false,
  },
  {
    word: "tussol",
    eligible: false,
  },
  {
    word: "tussor",
    eligible: false,
  },
  {
    word: "tústio",
    eligible: false,
  },
  {
    word: "tutano",
    eligible: false,
  },
  {
    word: "tutear",
    eligible: false,
  },
  {
    word: "tutela",
    eligible: false,
  },
  {
    word: "tutiar",
    eligible: false,
  },
  {
    word: "tutino",
    eligible: false,
  },
  {
    word: "Tutmés",
    eligible: false,
  },
  {
    word: "Tutoia",
    eligible: false,
  },
  {
    word: "tutora",
    eligible: false,
  },
  {
    word: "tutriz",
    eligible: false,
  },
  {
    word: "tútulo",
    eligible: false,
  },
  {
    word: "Tuvalu",
    eligible: false,
  },
  {
    word: "tuvino",
    eligible: false,
  },
  {
    word: "tuvira",
    eligible: false,
  },
  {
    word: "tuvuna",
    eligible: false,
  },
  {
    word: "tuxaua",
    eligible: false,
  },
  {
    word: "tuxava",
    eligible: false,
  },
  {
    word: "tuzina",
    eligible: false,
  },
  {
    word: "uabaía",
    eligible: false,
  },
  {
    word: "uabaio",
    eligible: false,
  },
  {
    word: "uacacu",
    eligible: false,
  },
  {
    word: "uaçaçu",
    eligible: false,
  },
  {
    word: "uaçaís",
    eligible: false,
  },
  {
    word: "uacani",
    eligible: false,
  },
  {
    word: "uacapu",
    eligible: false,
  },
  {
    word: "uacará",
    eligible: false,
  },
  {
    word: "uacari",
    eligible: false,
  },
  {
    word: "uacauã",
    eligible: false,
  },
  {
    word: "uacima",
    eligible: false,
  },
  {
    word: "uaconá",
    eligible: false,
  },
  {
    word: "uacumã",
    eligible: false,
  },
  {
    word: "uacumo",
    eligible: false,
  },
  {
    word: "uacupi",
    eligible: false,
  },
  {
    word: "uacuri",
    eligible: false,
  },
  {
    word: "uadadá",
    eligible: false,
  },
  {
    word: "uádico",
    eligible: false,
  },
  {
    word: "uaeira",
    eligible: false,
  },
  {
    word: "uagogo",
    eligible: false,
  },
  {
    word: "uaiana",
    eligible: false,
  },
  {
    word: "uaiapé",
    eligible: false,
  },
  {
    word: "uaiapi",
    eligible: false,
  },
  {
    word: "uaicué",
    eligible: false,
  },
  {
    word: "uaieué",
    eligible: false,
  },
  {
    word: "uaioró",
    eligible: false,
  },
  {
    word: "uaiuai",
    eligible: false,
  },
  {
    word: "uaiumá",
    eligible: false,
  },
  {
    word: "uaiupé",
    eligible: false,
  },
  {
    word: "uaiupi",
    eligible: false,
  },
  {
    word: "uaiuru",
    eligible: false,
  },
  {
    word: "uajará",
    eligible: false,
  },
  {
    word: "uajeru",
    eligible: false,
  },
  {
    word: "uajuru",
    eligible: false,
  },
  {
    word: "ualabá",
    eligible: false,
  },
  {
    word: "ualala",
    eligible: false,
  },
  {
    word: "uamami",
    eligible: false,
  },
  {
    word: "uambés",
    eligible: false,
  },
  {
    word: "uamiri",
    eligible: false,
  },
  {
    word: "uamoti",
    eligible: false,
  },
  {
    word: "uanana",
    eligible: false,
  },
  {
    word: "uanani",
    eligible: false,
  },
  {
    word: "uanapo",
    eligible: false,
  },
  {
    word: "uanhaí",
    eligible: false,
  },
  {
    word: "uanica",
    eligible: false,
  },
  {
    word: "uapaca",
    eligible: false,
  },
  {
    word: "uapiti",
    eligible: false,
  },
  {
    word: "uapuçá",
    eligible: false,
  },
  {
    word: "uapuim",
    eligible: false,
  },
  {
    word: "uaracu",
    eligible: false,
  },
  {
    word: "uarana",
    eligible: false,
  },
  {
    word: "uaraná",
    eligible: false,
  },
  {
    word: "uarapá",
    eligible: false,
  },
  {
    word: "uarara",
    eligible: false,
  },
  {
    word: "Uarini",
    eligible: false,
  },
  {
    word: "uariuá",
    eligible: false,
  },
  {
    word: "uarixi",
    eligible: false,
  },
  {
    word: "uarubé",
    eligible: false,
  },
  {
    word: "uarumã",
    eligible: false,
  },
  {
    word: "uasena",
    eligible: false,
  },
  {
    word: "uatapi",
    eligible: false,
  },
  {
    word: "uatapu",
    eligible: false,
  },
  {
    word: "uatite",
    eligible: false,
  },
  {
    word: "uatito",
    eligible: false,
  },
  {
    word: "uatotó",
    eligible: false,
  },
  {
    word: "Uatumã",
    eligible: false,
  },
  {
    word: "uaturá",
    eligible: false,
  },
  {
    word: "uatúsi",
    eligible: false,
  },
  {
    word: "uauaçu",
    eligible: false,
  },
  {
    word: "uauira",
    eligible: false,
  },
  {
    word: "uauiru",
    eligible: false,
  },
  {
    word: "uaxupé",
    eligible: false,
  },
  {
    word: "ubaaçu",
    eligible: false,
  },
  {
    word: "ubaeté",
    eligible: false,
  },
  {
    word: "ubaias",
    eligible: false,
  },
  {
    word: "ubaibá",
    eligible: false,
  },
  {
    word: "ubaína",
    eligible: false,
  },
  {
    word: "Ubaíra",
    eligible: false,
  },
  {
    word: "Ubaldo",
    eligible: false,
  },
  {
    word: "ubango",
    eligible: false,
  },
  {
    word: "ubatão",
    eligible: false,
  },
  {
    word: "ubatim",
    eligible: false,
  },
  {
    word: "ubeguê",
    eligible: false,
  },
  {
    word: "uberal",
    eligible: false,
  },
  {
    word: "uberar",
    eligible: false,
  },
  {
    word: "Uberto",
    eligible: false,
  },
  {
    word: "ubiaçu",
    eligible: false,
  },
  {
    word: "ubíquo",
    eligible: false,
  },
  {
    word: "ubisco",
    eligible: false,
  },
  {
    word: "Ubuntu",
    eligible: false,
  },
  {
    word: "ucaciá",
    eligible: false,
  },
  {
    word: "ucanha",
    eligible: false,
  },
  {
    word: "ucasse",
    eligible: false,
  },
  {
    word: "uchiva",
    eligible: false,
  },
  {
    word: "ucumba",
    eligible: false,
  },
  {
    word: "ucuqui",
    eligible: false,
  },
  {
    word: "ucusso",
    eligible: false,
  },
  {
    word: "ucuuba",
    eligible: false,
  },
  {
    word: "udecrá",
    eligible: false,
  },
  {
    word: "udótea",
    eligible: false,
  },
  {
    word: "udunga",
    eligible: false,
  },
  {
    word: "uerana",
    eligible: false,
  },
  {
    word: "uerimá",
    eligible: false,
  },
  {
    word: "ufanar",
    eligible: false,
  },
  {
    word: "ufania",
    eligible: false,
  },
  {
    word: "ufanos",
    eligible: false,
  },
  {
    word: "UFCSPA",
    eligible: false,
  },
  {
    word: "Ufersa",
    eligible: false,
  },
  {
    word: "Ufesba",
    eligible: false,
  },
  {
    word: "UFSCAR",
    eligible: false,
  },
  {
    word: "Uganda",
    eligible: false,
  },
  {
    word: "ugarda",
    eligible: false,
  },
  {
    word: "ugerbo",
    eligible: false,
  },
  {
    word: "ugerno",
    eligible: false,
  },
  {
    word: "úgrico",
    eligible: false,
  },
  {
    word: "uiabuí",
    eligible: false,
  },
  {
    word: "uigita",
    eligible: false,
  },
  {
    word: "uigure",
    eligible: false,
  },
  {
    word: "Uílson",
    eligible: false,
  },
  {
    word: "uiraçu",
    eligible: false,
  },
  {
    word: "uirana",
    eligible: false,
  },
  {
    word: "uirari",
    eligible: false,
  },
  {
    word: "uirina",
    eligible: false,
  },
  {
    word: "uiriri",
    eligible: false,
  },
  {
    word: "uísque",
    eligible: false,
  },
  {
    word: "uitoto",
    eligible: false,
  },
  {
    word: "úlcera",
    eligible: false,
  },
  {
    word: "ulearo",
    eligible: false,
  },
  {
    word: "ulemba",
    eligible: false,
  },
  {
    word: "uleota",
    eligible: false,
  },
  {
    word: "Uliano",
    eligible: false,
  },
  {
    word: "ulídia",
    eligible: false,
  },
  {
    word: "ulmato",
    eligible: false,
  },
  {
    word: "úlmico",
    eligible: false,
  },
  {
    word: "ulmina",
    eligible: false,
  },
  {
    word: "ulonco",
    eligible: false,
  },
  {
    word: "Ulrico",
    eligible: false,
  },
  {
    word: "último",
    eligible: false,
  },
  {
    word: "ultriz",
    eligible: false,
  },
  {
    word: "ulular",
    eligible: false,
  },
  {
    word: "ulvina",
    eligible: false,
  },
  {
    word: "ulvita",
    eligible: false,
  },
  {
    word: "Umabel",
    eligible: false,
  },
  {
    word: "umação",
    eligible: false,
  },
  {
    word: "umaris",
    eligible: false,
  },
  {
    word: "umbala",
    eligible: false,
  },
  {
    word: "umbaré",
    eligible: false,
  },
  {
    word: "umbaru",
    eligible: false,
  },
  {
    word: "umbaua",
    eligible: false,
  },
  {
    word: "umbela",
    eligible: false,
  },
  {
    word: "umbigo",
    eligible: false,
  },
  {
    word: "umbola",
    eligible: false,
  },
  {
    word: "umbral",
    eligible: false,
  },
  {
    word: "umbrão",
    eligible: false,
  },
  {
    word: "umbria",
    eligible: false,
  },
  {
    word: "úmbrio",
    eligible: false,
  },
  {
    word: "umbror",
    eligible: false,
  },
  {
    word: "umbuia",
    eligible: false,
  },
  {
    word: "umbula",
    eligible: false,
  },
  {
    word: "umeral",
    eligible: false,
  },
  {
    word: "Umirim",
    eligible: false,
  },
  {
    word: "umiris",
    eligible: false,
  },
  {
    word: "umpada",
    eligible: false,
  },
  {
    word: "unário",
    eligible: false,
  },
  {
    word: "Unasul",
    eligible: false,
  },
  {
    word: "uncial",
    eligible: false,
  },
  {
    word: "uncito",
    eligible: false,
  },
  {
    word: "unções",
    eligible: false,
  },
  {
    word: "undalo",
    eligible: false,
  },
  {
    word: "undina",
    eligible: false,
  },
  {
    word: "undoso",
    eligible: false,
  },
  {
    word: "unelco",
    eligible: false,
  },
  {
    word: "unense",
    eligible: false,
  },
  {
    word: "Unesco",
    eligible: false,
  },
  {
    word: "ungajo",
    eligible: false,
  },
  {
    word: "ungiri",
    eligible: false,
  },
  {
    word: "ungote",
    eligible: false,
  },
  {
    word: "ungual",
    eligible: false,
  },
  {
    word: "únguis",
    eligible: false,
  },
  {
    word: "úngula",
    eligible: false,
  },
  {
    word: "unhaca",
    eligible: false,
  },
  {
    word: "unhaço",
    eligible: false,
  },
  {
    word: "unhame",
    eligible: false,
  },
  {
    word: "unhata",
    eligible: false,
  },
  {
    word: "unheta",
    eligible: false,
  },
  {
    word: "unhona",
    eligible: false,
  },
  {
    word: "unhoso",
    eligible: false,
  },
  {
    word: "unhudo",
    eligible: false,
  },
  {
    word: "únhula",
    eligible: false,
  },
  {
    word: "uniata",
    eligible: false,
  },
  {
    word: "Unicef",
    eligible: false,
  },
  {
    word: "unidas",
    eligible: false,
  },
  {
    word: "Unidos",
    eligible: false,
  },
  {
    word: "Uniemp",
    eligible: false,
  },
  {
    word: "Unifal",
    eligible: false,
  },
  {
    word: "Unifap",
    eligible: false,
  },
  {
    word: "Unifei",
    eligible: false,
  },
  {
    word: "Unilab",
    eligible: false,
  },
  {
    word: "uniões",
    eligible: false,
  },
  {
    word: "uníola",
    eligible: false,
  },
  {
    word: "uniora",
    eligible: false,
  },
  {
    word: "Unipar",
    eligible: false,
  },
  {
    word: "Unirio",
    eligible: false,
  },
  {
    word: "Unisys",
    eligible: false,
  },
  {
    word: "unível",
    eligible: false,
  },
  {
    word: "unjiri",
    eligible: false,
  },
  {
    word: "untuém",
    eligible: false,
  },
  {
    word: "untués",
    eligible: false,
  },
  {
    word: "untura",
    eligible: false,
  },
  {
    word: "uolofe",
    eligible: false,
  },
  {
    word: "uólofe",
    eligible: false,
  },
  {
    word: "uoraçu",
    eligible: false,
  },
  {
    word: "upanda",
    eligible: false,
  },
  {
    word: "upeneu",
    eligible: false,
  },
  {
    word: "upiúba",
    eligible: false,
  },
  {
    word: "uplote",
    eligible: false,
  },
  {
    word: "uqueté",
    eligible: false,
  },
  {
    word: "uracal",
    eligible: false,
  },
  {
    word: "uracil",
    eligible: false,
  },
  {
    word: "urálio",
    eligible: false,
  },
  {
    word: "uranar",
    eligible: false,
  },
  {
    word: "Urandi",
    eligible: false,
  },
  {
    word: "Urania",
    eligible: false,
  },
  {
    word: "urânio",
    eligible: false,
  },
  {
    word: "uranos",
    eligible: false,
  },
  {
    word: "Uranus",
    eligible: false,
  },
  {
    word: "urária",
    eligible: false,
  },
  {
    word: "urbano",
    eligible: false,
  },
  {
    word: "Urbino",
    eligible: false,
  },
  {
    word: "urdume",
    eligible: false,
  },
  {
    word: "urease",
    eligible: false,
  },
  {
    word: "ureico",
    eligible: false,
  },
  {
    word: "uremia",
    eligible: false,
  },
  {
    word: "urente",
    eligible: false,
  },
  {
    word: "ureter",
    eligible: false,
  },
  {
    word: "uréter",
    eligible: false,
  },
  {
    word: "uretra",
    eligible: false,
  },
  {
    word: "úrgico",
    eligible: false,
  },
  {
    word: "uriate",
    eligible: false,
  },
  {
    word: "urinar",
    eligible: false,
  },
  {
    word: "urinol",
    eligible: false,
  },
  {
    word: "úrnula",
    eligible: false,
  },
  {
    word: "urraca",
    eligible: false,
  },
  {
    word: "ursada",
    eligible: false,
  },
  {
    word: "ursina",
    eligible: false,
  },
  {
    word: "ursino",
    eligible: false,
  },
  {
    word: "Úrsula",
    eligible: false,
  },
  {
    word: "urtiga",
    eligible: false,
  },
  {
    word: "Uruaçu",
    eligible: false,
  },
  {
    word: "Uruana",
    eligible: false,
  },
  {
    word: "Uruará",
    eligible: false,
  },
  {
    word: "Uruçuí",
    eligible: false,
  },
  {
    word: "urulus",
    eligible: false,
  },
  {
    word: "Uruoca",
    eligible: false,
  },
  {
    word: "Urutaí",
    eligible: false,
  },
  {
    word: "urutau",
    eligible: false,
  },
  {
    word: "urzedo",
    eligible: false,
  },
  {
    word: "urzela",
    eligible: false,
  },
  {
    word: "usagem",
    eligible: false,
  },
  {
    word: "usagre",
    eligible: false,
  },
  {
    word: "usança",
    eligible: false,
  },
  {
    word: "usável",
    eligible: false,
  },
  {
    word: "uscufe",
    eligible: false,
  },
  {
    word: "useiro",
    eligible: false,
  },
  {
    word: "usinar",
    eligible: false,
  },
  {
    word: "usinas",
    eligible: false,
  },
  {
    word: "usípio",
    eligible: false,
  },
  {
    word: "usitar",
    eligible: false,
  },
  {
    word: "usnato",
    eligible: false,
  },
  {
    word: "usneal",
    eligible: false,
  },
  {
    word: "usneol",
    eligible: false,
  },
  {
    word: "úsnico",
    eligible: false,
  },
  {
    word: "usnina",
    eligible: false,
  },
  {
    word: "ussila",
    eligible: false,
  },
  {
    word: "ustina",
    eligible: false,
  },
  {
    word: "usuano",
    eligible: false,
  },
  {
    word: "usurar",
    eligible: false,
  },
  {
    word: "utaíte",
    eligible: false,
  },
  {
    word: "utente",
    eligible: false,
  },
  {
    word: "Utinga",
    eligible: false,
  },
  {
    word: "utopia",
    eligible: false,
  },
  {
    word: "utpala",
    eligible: false,
  },
  {
    word: "utuaba",
    eligible: false,
  },
  {
    word: "uuteni",
    eligible: false,
  },
  {
    word: "uvaaia",
    eligible: false,
  },
  {
    word: "uvaças",
    eligible: false,
  },
  {
    word: "uvaias",
    eligible: false,
  },
  {
    word: "uvalha",
    eligible: false,
  },
  {
    word: "uvário",
    eligible: false,
  },
  {
    word: "uveiro",
    eligible: false,
  },
  {
    word: "uveíte",
    eligible: false,
  },
  {
    word: "uvilha",
    eligible: false,
  },
  {
    word: "uvular",
    eligible: false,
  },
  {
    word: "uxiano",
    eligible: false,
  },
  {
    word: "uxório",
    eligible: false,
  },
  {
    word: "uzamba",
    eligible: false,
  },
  {
    word: "uzélia",
    eligible: false,
  },
  {
    word: "uzífur",
    eligible: false,
  },
  {
    word: "uzinho",
    eligible: false,
  },
  {
    word: "vaambo",
    eligible: false,
  },
  {
    word: "vacano",
    eligible: false,
  },
  {
    word: "vacari",
    eligible: false,
  },
  {
    word: "vacibá",
    eligible: false,
  },
  {
    word: "vacona",
    eligible: false,
  },
  {
    word: "vacuna",
    eligible: false,
  },
  {
    word: "vácuos",
    eligible: false,
  },
  {
    word: "vadear",
    eligible: false,
  },
  {
    word: "vadiar",
    eligible: false,
  },
  {
    word: "vadios",
    eligible: false,
  },
  {
    word: "vadoso",
    eligible: false,
  },
  {
    word: "vágado",
    eligible: false,
  },
  {
    word: "vagear",
    eligible: false,
  },
  {
    word: "vagens",
    eligible: false,
  },
  {
    word: "vagina",
    eligible: false,
  },
  {
    word: "vagite",
    eligible: false,
  },
  {
    word: "vagito",
    eligible: false,
  },
  {
    word: "Vagner",
    eligible: false,
  },
  {
    word: "Vágner",
    eligible: false,
  },
  {
    word: "vagões",
    eligible: false,
  },
  {
    word: "vagona",
    eligible: false,
  },
  {
    word: "vágulo",
    eligible: false,
  },
  {
    word: "vaicia",
    eligible: false,
  },
  {
    word: "vaioró",
    eligible: false,
  },
  {
    word: "vairão",
    eligible: false,
  },
  {
    word: "vaival",
    eligible: false,
  },
  {
    word: "vaivém",
    eligible: false,
  },
  {
    word: "vaixia",
    eligible: false,
  },
  {
    word: "vaixiá",
    eligible: false,
  },
  {
    word: "vajana",
    eligible: false,
  },
  {
    word: "valabá",
    eligible: false,
  },
  {
    word: "valaco",
    eligible: false,
  },
  {
    word: "Valdês",
    eligible: false,
  },
  {
    word: "Valdir",
    eligible: false,
  },
  {
    word: "valego",
    eligible: false,
  },
  {
    word: "valeia",
    eligible: false,
  },
  {
    word: "valejo",
    eligible: false,
  },
  {
    word: "valete",
    eligible: false,
  },
  {
    word: "valgas",
    eligible: false,
  },
  {
    word: "válgio",
    eligible: false,
  },
  {
    word: "valiar",
    eligible: false,
  },
  {
    word: "validé",
    eligible: false,
  },
  {
    word: "válido",
    eligible: false,
  },
  {
    word: "valilo",
    eligible: false,
  },
  {
    word: "valina",
    eligible: false,
  },
  {
    word: "valino",
    eligible: false,
  },
  {
    word: "valise",
    eligible: false,
  },
  {
    word: "Valmar",
    eligible: false,
  },
  {
    word: "Valmir",
    eligible: false,
  },
  {
    word: "Valmor",
    eligible: false,
  },
  {
    word: "valoca",
    eligible: false,
  },
  {
    word: "Valôna",
    eligible: false,
  },
  {
    word: "valona",
    eligible: false,
  },
  {
    word: "valoso",
    eligible: false,
  },
  {
    word: "valota",
    eligible: false,
  },
  {
    word: "valsar",
    eligible: false,
  },
  {
    word: "válseo",
    eligible: false,
  },
  {
    word: "valsol",
    eligible: false,
  },
  {
    word: "Valter",
    eligible: false,
  },
  {
    word: "Válter",
    eligible: false,
  },
  {
    word: "valuiú",
    eligible: false,
  },
  {
    word: "valuma",
    eligible: false,
  },
  {
    word: "valura",
    eligible: false,
  },
  {
    word: "valvar",
    eligible: false,
  },
  {
    word: "vamiri",
    eligible: false,
  },
  {
    word: "vanaçu",
    eligible: false,
  },
  {
    word: "vancão",
    eligible: false,
  },
  {
    word: "vandar",
    eligible: false,
  },
  {
    word: "vandau",
    eligible: false,
  },
  {
    word: "vândeo",
    eligible: false,
  },
  {
    word: "vanelo",
    eligible: false,
  },
  {
    word: "vangor",
    eligible: false,
  },
  {
    word: "vângor",
    eligible: false,
  },
  {
    word: "vanhai",
    eligible: false,
  },
  {
    word: "Vanias",
    eligible: false,
  },
  {
    word: "vânico",
    eligible: false,
  },
  {
    word: "vanila",
    eligible: false,
  },
  {
    word: "Vanini",
    eligible: false,
  },
  {
    word: "Vanita",
    eligible: false,
  },
  {
    word: "Vanusa",
    eligible: false,
  },
  {
    word: "vanzão",
    eligible: false,
  },
  {
    word: "vápido",
    eligible: false,
  },
  {
    word: "vaquia",
    eligible: false,
  },
  {
    word: "varacu",
    eligible: false,
  },
  {
    word: "varago",
    eligible: false,
  },
  {
    word: "varali",
    eligible: false,
  },
  {
    word: "varame",
    eligible: false,
  },
  {
    word: "varano",
    eligible: false,
  },
  {
    word: "varapó",
    eligible: false,
  },
  {
    word: "várdea",
    eligible: false,
  },
  {
    word: "vardeu",
    eligible: false,
  },
  {
    word: "vardiá",
    eligible: false,
  },
  {
    word: "varear",
    eligible: false,
  },
  {
    word: "varedo",
    eligible: false,
  },
  {
    word: "varego",
    eligible: false,
  },
  {
    word: "vareja",
    eligible: false,
  },
  {
    word: "varelo",
    eligible: false,
  },
  {
    word: "vareta",
    eligible: false,
  },
  {
    word: "vareza",
    eligible: false,
  },
  {
    word: "várgea",
    eligible: false,
  },
  {
    word: "vargem",
    eligible: false,
  },
  {
    word: "vargim",
    eligible: false,
  },
  {
    word: "variar",
    eligible: false,
  },
  {
    word: "variaz",
    eligible: false,
  },
  {
    word: "variço",
    eligible: false,
  },
  {
    word: "varino",
    eligible: false,
  },
  {
    word: "varjão",
    eligible: false,
  },
  {
    word: "varloa",
    eligible: false,
  },
  {
    word: "varola",
    eligible: false,
  },
  {
    word: "varote",
    eligible: false,
  },
  {
    word: "varrão",
    eligible: false,
  },
  {
    word: "varrer",
    eligible: false,
  },
  {
    word: "varudo",
    eligible: false,
  },
  {
    word: "várzea",
    eligible: false,
  },
  {
    word: "várzeo",
    eligible: false,
  },
  {
    word: "varzim",
    eligible: false,
  },
  {
    word: "vasate",
    eligible: false,
  },
  {
    word: "vascão",
    eligible: false,
  },
  {
    word: "vascar",
    eligible: false,
  },
  {
    word: "vascos",
    eligible: false,
  },
  {
    word: "vasite",
    eligible: false,
  },
  {
    word: "vasoso",
    eligible: false,
  },
  {
    word: "vásseo",
    eligible: false,
  },
  {
    word: "vasseu",
    eligible: false,
  },
  {
    word: "vastar",
    eligible: false,
  },
  {
    word: "vastos",
    eligible: false,
  },
  {
    word: "vatapá",
    eligible: false,
  },
  {
    word: "vatapi",
    eligible: false,
  },
  {
    word: "vatapu",
    eligible: false,
  },
  {
    word: "vático",
    eligible: false,
  },
  {
    word: "vátios",
    eligible: false,
  },
  {
    word: "vavavá",
    eligible: false,
  },
  {
    word: "vaxelo",
    eligible: false,
  },
  {
    word: "vazeia",
    eligible: false,
  },
  {
    word: "vaziar",
    eligible: false,
  },
  {
    word: "vaziez",
    eligible: false,
  },
  {
    word: "vazios",
    eligible: false,
  },
  {
    word: "veação",
    eligible: false,
  },
  {
    word: "veador",
    eligible: false,
  },
  {
    word: "veados",
    eligible: false,
  },
  {
    word: "vearia",
    eligible: false,
  },
  {
    word: "vectão",
    eligible: false,
  },
  {
    word: "vector",
    eligible: false,
  },
  {
    word: "vedeta",
    eligible: false,
  },
  {
    word: "vedete",
    eligible: false,
  },
  {
    word: "védico",
    eligible: false,
  },
  {
    word: "vedoia",
    eligible: false,
  },
  {
    word: "vedros",
    eligible: false,
  },
  {
    word: "veeiro",
    eligible: false,
  },
  {
    word: "vegado",
    eligible: false,
  },
  {
    word: "végeto",
    eligible: false,
  },
  {
    word: "veigal",
    eligible: false,
  },
  {
    word: "veiudo",
    eligible: false,
  },
  {
    word: "vejete",
    eligible: false,
  },
  {
    word: "velado",
    eligible: false,
  },
  {
    word: "velame",
    eligible: false,
  },
  {
    word: "velani",
    eligible: false,
  },
  {
    word: "velavo",
    eligible: false,
  },
  {
    word: "velcro",
    eligible: false,
  },
  {
    word: "velear",
    eligible: false,
  },
  {
    word: "velela",
    eligible: false,
  },
  {
    word: "velete",
    eligible: false,
  },
  {
    word: "veleto",
    eligible: false,
  },
  {
    word: "velhão",
    eligible: false,
  },
  {
    word: "velhas",
    eligible: false,
  },
  {
    word: "velhez",
    eligible: false,
  },
  {
    word: "velhos",
    eligible: false,
  },
  {
    word: "vélida",
    eligible: false,
  },
  {
    word: "velido",
    eligible: false,
  },
  {
    word: "velino",
    eligible: false,
  },
  {
    word: "Velita",
    eligible: false,
  },
  {
    word: "vélite",
    eligible: false,
  },
  {
    word: "veloce",
    eligible: false,
  },
  {
    word: "veloso",
    eligible: false,
  },
  {
    word: "veludo",
    eligible: false,
  },
  {
    word: "venado",
    eligible: false,
  },
  {
    word: "venamo",
    eligible: false,
  },
  {
    word: "vencer",
    eligible: false,
  },
  {
    word: "vendar",
    eligible: false,
  },
  {
    word: "vender",
    eligible: false,
  },
  {
    word: "vendos",
    eligible: false,
  },
  {
    word: "vênedo",
    eligible: false,
  },
  {
    word: "venelo",
    eligible: false,
  },
  {
    word: "veneno",
    eligible: false,
  },
  {
    word: "vénero",
    eligible: false,
  },
  {
    word: "vênero",
    eligible: false,
  },
  {
    word: "veneta",
    eligible: false,
  },
  {
    word: "Veneto",
    eligible: false,
  },
  {
    word: "véneto",
    eligible: false,
  },
  {
    word: "vêneto",
    eligible: false,
  },
  {
    word: "Veneza",
    eligible: false,
  },
  {
    word: "veneza",
    eligible: false,
  },
  {
    word: "venial",
    eligible: false,
  },
  {
    word: "venida",
    eligible: false,
  },
  {
    word: "Venina",
    eligible: false,
  },
  {
    word: "venoso",
    eligible: false,
  },
  {
    word: "ventar",
    eligible: false,
  },
  {
    word: "ventas",
    eligible: false,
  },
  {
    word: "ventor",
    eligible: false,
  },
  {
    word: "ventos",
    eligible: false,
  },
  {
    word: "ventre",
    eligible: false,
  },
  {
    word: "vénula",
    eligible: false,
  },
  {
    word: "vênula",
    eligible: false,
  },
  {
    word: "vépris",
    eligible: false,
  },
  {
    word: "verbal",
    eligible: false,
  },
  {
    word: "verbis",
    eligible: false,
  },
  {
    word: "verbos",
    eligible: false,
  },
  {
    word: "verças",
    eligible: false,
  },
  {
    word: "verdal",
    eligible: false,
  },
  {
    word: "verdão",
    eligible: false,
  },
  {
    word: "verdes",
    eligible: false,
  },
  {
    word: "verdor",
    eligible: false,
  },
  {
    word: "verdum",
    eligible: false,
  },
  {
    word: "verear",
    eligible: false,
  },
  {
    word: "vereda",
    eligible: false,
  },
  {
    word: "vereno",
    eligible: false,
  },
  {
    word: "vergal",
    eligible: false,
  },
  {
    word: "vergão",
    eligible: false,
  },
  {
    word: "vergar",
    eligible: false,
  },
  {
    word: "vergas",
    eligible: false,
  },
  {
    word: "vergel",
    eligible: false,
  },
  {
    word: "vergor",
    eligible: false,
  },
  {
    word: "verilo",
    eligible: false,
  },
  {
    word: "verina",
    eligible: false,
  },
  {
    word: "verito",
    eligible: false,
  },
  {
    word: "vermem",
    eligible: false,
  },
  {
    word: "vermes",
    eligible: false,
  },
  {
    word: "vérmis",
    eligible: false,
  },
  {
    word: "vernal",
    eligible: false,
  },
  {
    word: "vernar",
    eligible: false,
  },
  {
    word: "vérnia",
    eligible: false,
  },
  {
    word: "vérnix",
    eligible: false,
  },
  {
    word: "verniz",
    eligible: false,
  },
  {
    word: "vernon",
    eligible: false,
  },
  {
    word: "vernos",
    eligible: false,
  },
  {
    word: "verões",
    eligible: false,
  },
  {
    word: "Verona",
    eligible: false,
  },
  {
    word: "versal",
    eligible: false,
  },
  {
    word: "versão",
    eligible: false,
  },
  {
    word: "versar",
    eligible: false,
  },
  {
    word: "versor",
    eligible: false,
  },
  {
    word: "versos",
    eligible: false,
  },
  {
    word: "verste",
    eligible: false,
  },
  {
    word: "versus",
    eligible: false,
  },
  {
    word: "verteá",
    eligible: false,
  },
  {
    word: "verter",
    eligible: false,
  },
  {
    word: "vértex",
    eligible: false,
  },
  {
    word: "veruno",
    eligible: false,
  },
  {
    word: "veruto",
    eligible: false,
  },
  {
    word: "vesano",
    eligible: false,
  },
  {
    word: "véscia",
    eligible: false,
  },
  {
    word: "vespão",
    eligible: false,
  },
  {
    word: "vespas",
    eligible: false,
  },
  {
    word: "vésper",
    eligible: false,
  },
  {
    word: "vessar",
    eligible: false,
  },
  {
    word: "vestal",
    eligible: false,
  },
  {
    word: "vestar",
    eligible: false,
  },
  {
    word: "véstia",
    eligible: false,
  },
  {
    word: "vestir",
    eligible: false,
  },
  {
    word: "vestiu",
    eligible: false,
  },
  {
    word: "vesugo",
    eligible: false,
  },
  {
    word: "vetila",
    eligible: false,
  },
  {
    word: "vetriz",
    eligible: false,
  },
  {
    word: "Vevila",
    eligible: false,
  },
  {
    word: "vevuia",
    eligible: false,
  },
  {
    word: "vexame",
    eligible: false,
  },
  {
    word: "vexilo",
    eligible: false,
  },
  {
    word: "vézera",
    eligible: false,
  },
  {
    word: "viação",
    eligible: false,
  },
  {
    word: "viador",
    eligible: false,
  },
  {
    word: "viagem",
    eligible: false,
  },
  {
    word: "viagra",
    eligible: false,
  },
  {
    word: "viajão",
    eligible: false,
  },
  {
    word: "viajar",
    eligible: false,
  },
  {
    word: "viajor",
    eligible: false,
  },
  {
    word: "Viamão",
    eligible: false,
  },
  {
    word: "vianês",
    eligible: false,
  },
  {
    word: "viante",
    eligible: false,
  },
  {
    word: "viário",
    eligible: false,
  },
  {
    word: "viasco",
    eligible: false,
  },
  {
    word: "viável",
    eligible: false,
  },
  {
    word: "vibelo",
    eligible: false,
  },
  {
    word: "vibero",
    eligible: false,
  },
  {
    word: "víbice",
    eligible: false,
  },
  {
    word: "víbora",
    eligible: false,
  },
  {
    word: "vibrar",
    eligible: false,
  },
  {
    word: "víbrio",
    eligible: false,
  },
  {
    word: "vibute",
    eligible: false,
  },
  {
    word: "viciar",
    eligible: false,
  },
  {
    word: "vicina",
    eligible: false,
  },
  {
    word: "viçosa",
    eligible: false,
  },
  {
    word: "viçoso",
    eligible: false,
  },
  {
    word: "Victor",
    eligible: false,
  },
  {
    word: "Víctor",
    eligible: false,
  },
  {
    word: "victor",
    eligible: false,
  },
  {
    word: "vidaço",
    eligible: false,
  },
  {
    word: "vidago",
    eligible: false,
  },
  {
    word: "vidala",
    eligible: false,
  },
  {
    word: "vidama",
    eligible: false,
  },
  {
    word: "vidana",
    eligible: false,
  },
  {
    word: "videal",
    eligible: false,
  },
  {
    word: "videar",
    eligible: false,
  },
  {
    word: "vidoca",
    eligible: false,
  },
  {
    word: "vidral",
    eligible: false,
  },
  {
    word: "vidrão",
    eligible: false,
  },
  {
    word: "vidrar",
    eligible: false,
  },
  {
    word: "vidrio",
    eligible: false,
  },
  {
    word: "vidros",
    eligible: false,
  },
  {
    word: "vidual",
    eligible: false,
  },
  {
    word: "viegas",
    eligible: false,
  },
  {
    word: "vieira",
    eligible: false,
  },
  {
    word: "vieiro",
    eligible: false,
  },
  {
    word: "vienês",
    eligible: false,
  },
  {
    word: "Vietnã",
    eligible: false,
  },
  {
    word: "vigiar",
    eligible: false,
  },
  {
    word: "vígilo",
    eligible: false,
  },
  {
    word: "vigote",
    eligible: false,
  },
  {
    word: "viguês",
    eligible: false,
  },
  {
    word: "viking",
    eligible: false,
  },
  {
    word: "Vilaça",
    eligible: false,
  },
  {
    word: "vileco",
    eligible: false,
  },
  {
    word: "vilela",
    eligible: false,
  },
  {
    word: "vileta",
    eligible: false,
  },
  {
    word: "vileza",
    eligible: false,
  },
  {
    word: "Vilhar",
    eligible: false,
  },
  {
    word: "viliar",
    eligible: false,
  },
  {
    word: "Villas",
    eligible: false,
  },
  {
    word: "Vilmar",
    eligible: false,
  },
  {
    word: "viloca",
    eligible: false,
  },
  {
    word: "viloma",
    eligible: false,
  },
  {
    word: "vilosa",
    eligible: false,
  },
  {
    word: "viloso",
    eligible: false,
  },
  {
    word: "vilota",
    eligible: false,
  },
  {
    word: "Vílson",
    eligible: false,
  },
  {
    word: "vílula",
    eligible: false,
  },
  {
    word: "vimana",
    eligible: false,
  },
  {
    word: "vimial",
    eligible: false,
  },
  {
    word: "vimina",
    eligible: false,
  },
  {
    word: "vimoso",
    eligible: false,
  },
  {
    word: "vinago",
    eligible: false,
  },
  {
    word: "vinaia",
    eligible: false,
  },
  {
    word: "vinato",
    eligible: false,
  },
  {
    word: "vincar",
    eligible: false,
  },
  {
    word: "víncio",
    eligible: false,
  },
  {
    word: "vincos",
    eligible: false,
  },
  {
    word: "vindas",
    eligible: false,
  },
  {
    word: "vingar",
    eligible: false,
  },
  {
    word: "vinhal",
    eligible: false,
  },
  {
    word: "vinhão",
    eligible: false,
  },
  {
    word: "vinhar",
    eligible: false,
  },
  {
    word: "vinhas",
    eligible: false,
  },
  {
    word: "vinhos",
    eligible: false,
  },
  {
    word: "vinial",
    eligible: false,
  },
  {
    word: "vínico",
    eligible: false,
  },
  {
    word: "vinilo",
    eligible: false,
  },
  {
    word: "vinion",
    eligible: false,
  },
  {
    word: "vínion",
    eligible: false,
  },
  {
    word: "Vinola",
    eligible: false,
  },
  {
    word: "vinoso",
    eligible: false,
  },
  {
    word: "vintão",
    eligible: false,
  },
  {
    word: "vintém",
    eligible: false,
  },
  {
    word: "violal",
    eligible: false,
  },
  {
    word: "violão",
    eligible: false,
  },
  {
    word: "violar",
    eligible: false,
  },
  {
    word: "vióleo",
    eligible: false,
  },
  {
    word: "violle",
    eligible: false,
  },
  {
    word: "viomal",
    eligible: false,
  },
  {
    word: "vípero",
    eligible: false,
  },
  {
    word: "vipoma",
    eligible: false,
  },
  {
    word: "virada",
    eligible: false,
  },
  {
    word: "virado",
    eligible: false,
  },
  {
    word: "virago",
    eligible: false,
  },
  {
    word: "virale",
    eligible: false,
  },
  {
    word: "virama",
    eligible: false,
  },
  {
    word: "viraru",
    eligible: false,
  },
  {
    word: "viravó",
    eligible: false,
  },
  {
    word: "vírbia",
    eligible: false,
  },
  {
    word: "virens",
    eligible: false,
  },
  {
    word: "virgas",
    eligible: false,
  },
  {
    word: "virgem",
    eligible: false,
  },
  {
    word: "Virgil",
    eligible: false,
  },
  {
    word: "virial",
    eligible: false,
  },
  {
    word: "vírico",
    eligible: false,
  },
  {
    word: "víride",
    eligible: false,
  },
  {
    word: "virion",
    eligible: false,
  },
  {
    word: "virola",
    eligible: false,
  },
  {
    word: "virosa",
    eligible: false,
  },
  {
    word: "virose",
    eligible: false,
  },
  {
    word: "viroso",
    eligible: false,
  },
  {
    word: "virote",
    eligible: false,
  },
  {
    word: "virtal",
    eligible: false,
  },
  {
    word: "viruçu",
    eligible: false,
  },
  {
    word: "viruta",
    eligible: false,
  },
  {
    word: "visaio",
    eligible: false,
  },
  {
    word: "viscar",
    eligible: false,
  },
  {
    word: "vísceo",
    eligible: false,
  },
  {
    word: "viscos",
    eligible: false,
  },
  {
    word: "visela",
    eligible: false,
  },
  {
    word: "visgar",
    eligible: false,
  },
  {
    word: "visgos",
    eligible: false,
  },
  {
    word: "visita",
    eligible: false,
  },
  {
    word: "visivo",
    eligible: false,
  },
  {
    word: "vísmeo",
    eligible: false,
  },
  {
    word: "vísmia",
    eligible: false,
  },
  {
    word: "vísnea",
    eligible: false,
  },
  {
    word: "vispar",
    eligible: false,
  },
  {
    word: "vissiá",
    eligible: false,
  },
  {
    word: "vistão",
    eligible: false,
  },
  {
    word: "vistar",
    eligible: false,
  },
  {
    word: "vistas",
    eligible: false,
  },
  {
    word: "vistor",
    eligible: false,
  },
  {
    word: "vistos",
    eligible: false,
  },
  {
    word: "visual",
    eligible: false,
  },
  {
    word: "vítele",
    eligible: false,
  },
  {
    word: "vitelo",
    eligible: false,
  },
  {
    word: "vitibá",
    eligible: false,
  },
  {
    word: "vítice",
    eligible: false,
  },
  {
    word: "vítima",
    eligible: false,
  },
  {
    word: "vitina",
    eligible: false,
  },
  {
    word: "vitral",
    eligible: false,
  },
  {
    word: "vítreo",
    eligible: false,
  },
  {
    word: "vítria",
    eligible: false,
  },
  {
    word: "vítulo",
    eligible: false,
  },
  {
    word: "viuval",
    eligible: false,
  },
  {
    word: "viuvar",
    eligible: false,
  },
  {
    word: "viúvas",
    eligible: false,
  },
  {
    word: "viuvez",
    eligible: false,
  },
  {
    word: "viúvos",
    eligible: false,
  },
  {
    word: "vivace",
    eligible: false,
  },
  {
    word: "vivaço",
    eligible: false,
  },
  {
    word: "viveza",
    eligible: false,
  },
  {
    word: "Vivian",
    eligible: false,
  },
  {
    word: "vívido",
    eligible: false,
  },
  {
    word: "vívula",
    eligible: false,
  },
  {
    word: "vixuda",
    eligible: false,
  },
  {
    word: "Vizela",
    eligible: false,
  },
  {
    word: "voador",
    eligible: false,
  },
  {
    word: "voagem",
    eligible: false,
  },
  {
    word: "vocaca",
    eligible: false,
  },
  {
    word: "vocate",
    eligible: false,
  },
  {
    word: "vocero",
    eligible: false,
  },
  {
    word: "vodunô",
    eligible: false,
  },
  {
    word: "voeira",
    eligible: false,
  },
  {
    word: "voejar",
    eligible: false,
  },
  {
    word: "vogais",
    eligible: false,
  },
  {
    word: "vóglia",
    eligible: false,
  },
  {
    word: "voícia",
    eligible: false,
  },
  {
    word: "vôiria",
    eligible: false,
  },
  {
    word: "volano",
    eligible: false,
  },
  {
    word: "volapé",
    eligible: false,
  },
  {
    word: "volata",
    eligible: false,
  },
  {
    word: "volcar",
    eligible: false,
  },
  {
    word: "voleio",
    eligible: false,
  },
  {
    word: "volfro",
    eligible: false,
  },
  {
    word: "vólito",
    eligible: false,
  },
  {
    word: "volofo",
    eligible: false,
  },
  {
    word: "volovã",
    eligible: false,
  },
  {
    word: "volsco",
    eligible: false,
  },
  {
    word: "voltar",
    eligible: false,
  },
  {
    word: "voltas",
    eligible: false,
  },
  {
    word: "vóltio",
    eligible: false,
  },
  {
    word: "volume",
    eligible: false,
  },
  {
    word: "volver",
    eligible: false,
  },
  {
    word: "vólvox",
    eligible: false,
  },
  {
    word: "vômica",
    eligible: false,
  },
  {
    word: "vômico",
    eligible: false,
  },
  {
    word: "vômito",
    eligible: false,
  },
  {
    word: "vorace",
    eligible: false,
  },
  {
    word: "vórmio",
    eligible: false,
  },
  {
    word: "vortal",
    eligible: false,
  },
  {
    word: "vórtex",
    eligible: false,
  },
  {
    word: "vosear",
    eligible: false,
  },
  {
    word: "vosgos",
    eligible: false,
  },
  {
    word: "vóssia",
    eligible: false,
  },
  {
    word: "votivo",
    eligible: false,
  },
  {
    word: "votona",
    eligible: false,
  },
  {
    word: "voturo",
    eligible: false,
  },
  {
    word: "vozear",
    eligible: false,
  },
  {
    word: "vozido",
    eligible: false,
  },
  {
    word: "vulcão",
    eligible: false,
  },
  {
    word: "vulgar",
    eligible: false,
  },
  {
    word: "vulina",
    eligible: false,
  },
  {
    word: "vulpes",
    eligible: false,
  },
  {
    word: "vúlpia",
    eligible: false,
  },
  {
    word: "Vúlpio",
    eligible: false,
  },
  {
    word: "vulsco",
    eligible: false,
  },
  {
    word: "vultar",
    eligible: false,
  },
  {
    word: "vultos",
    eligible: false,
  },
  {
    word: "vulvar",
    eligible: false,
  },
  {
    word: "vundém",
    eligible: false,
  },
  {
    word: "vungar",
    eligible: false,
  },
  {
    word: "vunvum",
    eligible: false,
  },
  {
    word: "vunzar",
    eligible: false,
  },
  {
    word: "vurina",
    eligible: false,
  },
  {
    word: "vurmar",
    eligible: false,
  },
  {
    word: "vurmos",
    eligible: false,
  },
  {
    word: "waffle",
    eligible: false,
  },
  {
    word: "xabeba",
    eligible: false,
  },
  {
    word: "xábega",
    eligible: false,
  },
  {
    word: "xabepa",
    eligible: false,
  },
  {
    word: "xaboco",
    eligible: false,
  },
  {
    word: "xácara",
    eligible: false,
  },
  {
    word: "xacoco",
    eligible: false,
  },
  {
    word: "xácoma",
    eligible: false,
  },
  {
    word: "xacoto",
    eligible: false,
  },
  {
    word: "xadrez",
    eligible: false,
  },
  {
    word: "xágara",
    eligible: false,
  },
  {
    word: "xaguão",
    eligible: false,
  },
  {
    word: "xaimão",
    eligible: false,
  },
  {
    word: "xaimel",
    eligible: false,
  },
  {
    word: "xainxá",
    eligible: false,
  },
  {
    word: "xairel",
    eligible: false,
  },
  {
    word: "xaloco",
    eligible: false,
  },
  {
    word: "xamane",
    eligible: false,
  },
  {
    word: "xamate",
    eligible: false,
  },
  {
    word: "Xamaxe",
    eligible: false,
  },
  {
    word: "Xambrê",
    eligible: false,
  },
  {
    word: "Xangri",
    eligible: false,
  },
  {
    word: "xangri",
    eligible: false,
  },
  {
    word: "xantar",
    eligible: false,
  },
  {
    word: "xanten",
    eligible: false,
  },
  {
    word: "xântio",
    eligible: false,
  },
  {
    word: "xantos",
    eligible: false,
  },
  {
    word: "xanxão",
    eligible: false,
  },
  {
    word: "xapanã",
    eligible: false,
  },
  {
    word: "xaponã",
    eligible: false,
  },
  {
    word: "Xapuri",
    eligible: false,
  },
  {
    word: "xaputa",
    eligible: false,
  },
  {
    word: "xarada",
    eligible: false,
  },
  {
    word: "xarafo",
    eligible: false,
  },
  {
    word: "xarapa",
    eligible: false,
  },
  {
    word: "xareta",
    eligible: false,
  },
  {
    word: "xarife",
    eligible: false,
  },
  {
    word: "xaroco",
    eligible: false,
  },
  {
    word: "xarope",
    eligible: false,
  },
  {
    word: "xarrua",
    eligible: false,
  },
  {
    word: "xátria",
    eligible: false,
  },
  {
    word: "xauter",
    eligible: false,
  },
  {
    word: "xávega",
    eligible: false,
  },
  {
    word: "Xavier",
    eligible: false,
  },
  {
    word: "xaxado",
    eligible: false,
  },
  {
    word: "xaxará",
    eligible: false,
  },
  {
    word: "xecado",
    eligible: false,
  },
  {
    word: "xeique",
    eligible: false,
  },
  {
    word: "xelita",
    eligible: false,
  },
  {
    word: "xenato",
    eligible: false,
  },
  {
    word: "xénico",
    eligible: false,
  },
  {
    word: "xerbro",
    eligible: false,
  },
  {
    word: "xereca",
    eligible: false,
  },
  {
    word: "xereré",
    eligible: false,
  },
  {
    word: "xergão",
    eligible: false,
  },
  {
    word: "xerife",
    eligible: false,
  },
  {
    word: "xeroma",
    eligible: false,
  },
  {
    word: "xerose",
    eligible: false,
  },
  {
    word: "xerume",
    eligible: false,
  },
  {
    word: "xetetê",
    eligible: false,
  },
  {
    word: "xetrar",
    eligible: false,
  },
  {
    word: "xexéus",
    eligible: false,
  },
  {
    word: "xiamen",
    eligible: false,
  },
  {
    word: "xibalo",
    eligible: false,
  },
  {
    word: "xibará",
    eligible: false,
  },
  {
    word: "xibaro",
    eligible: false,
  },
  {
    word: "xibatã",
    eligible: false,
  },
  {
    word: "xibebe",
    eligible: false,
  },
  {
    word: "xicaca",
    eligible: false,
  },
  {
    word: "xícara",
    eligible: false,
  },
  {
    word: "xigogo",
    eligible: false,
  },
  {
    word: "xigono",
    eligible: false,
  },
  {
    word: "xigubo",
    eligible: false,
  },
  {
    word: "xigugo",
    eligible: false,
  },
  {
    word: "xiismo",
    eligible: false,
  },
  {
    word: "xilado",
    eligible: false,
  },
  {
    word: "xilema",
    eligible: false,
  },
  {
    word: "xileno",
    eligible: false,
  },
  {
    word: "xílico",
    eligible: false,
  },
  {
    word: "xiloma",
    eligible: false,
  },
  {
    word: "xilose",
    eligible: false,
  },
  {
    word: "xilreu",
    eligible: false,
  },
  {
    word: "xiluva",
    eligible: false,
  },
  {
    word: "ximana",
    eligible: false,
  },
  {
    word: "ximbra",
    eligible: false,
  },
  {
    word: "Ximena",
    eligible: false,
  },
  {
    word: "ximoco",
    eligible: false,
  },
  {
    word: "xinane",
    eligible: false,
  },
  {
    word: "xingar",
    eligible: false,
  },
  {
    word: "xinxim",
    eligible: false,
  },
  {
    word: "xipaia",
    eligible: false,
  },
  {
    word: "xipala",
    eligible: false,
  },
  {
    word: "xipefo",
    eligible: false,
  },
  {
    word: "xipene",
    eligible: false,
  },
  {
    word: "xipoco",
    eligible: false,
  },
  {
    word: "xistro",
    eligible: false,
  },
  {
    word: "xitaca",
    eligible: false,
  },
  {
    word: "xitala",
    eligible: false,
  },
  {
    word: "xitolo",
    eligible: false,
  },
  {
    word: "xivito",
    eligible: false,
  },
  {
    word: "xixica",
    eligible: false,
  },
  {
    word: "xixuão",
    eligible: false,
  },
  {
    word: "xongas",
    eligible: false,
  },
  {
    word: "Xopanã",
    eligible: false,
  },
  {
    word: "xopotó",
    eligible: false,
  },
  {
    word: "xoroca",
    eligible: false,
  },
  {
    word: "xoxota",
    eligible: false,
  },
  {
    word: "xucuru",
    eligible: false,
  },
  {
    word: "xumetó",
    eligible: false,
  },
  {
    word: "xurdir",
    eligible: false,
  },
  {
    word: "Yakuzá",
    eligible: false,
  },
  {
    word: "Yasmim",
    eligible: false,
  },
  {
    word: "yuppie",
    eligible: false,
  },
  {
    word: "zabalé",
    eligible: false,
  },
  {
    word: "zabelê",
    eligible: false,
  },
  {
    word: "zabelo",
    eligible: false,
  },
  {
    word: "zácoro",
    eligible: false,
  },
  {
    word: "zafira",
    eligible: false,
  },
  {
    word: "zagalo",
    eligible: false,
  },
  {
    word: "zagari",
    eligible: false,
  },
  {
    word: "zagaté",
    eligible: false,
  },
  {
    word: "zagrão",
    eligible: false,
  },
  {
    word: "zâimbo",
    eligible: false,
  },
  {
    word: "zainfe",
    eligible: false,
  },
  {
    word: "zalaca",
    eligible: false,
  },
  {
    word: "Zalmom",
    eligible: false,
  },
  {
    word: "Zâmbia",
    eligible: false,
  },
  {
    word: "zâmbio",
    eligible: false,
  },
  {
    word: "zamboa",
    eligible: false,
  },
  {
    word: "Zambri",
    eligible: false,
  },
  {
    word: "zambro",
    eligible: false,
  },
  {
    word: "zamena",
    eligible: false,
  },
  {
    word: "Zamira",
    eligible: false,
  },
  {
    word: "Zamora",
    eligible: false,
  },
  {
    word: "zampar",
    eligible: false,
  },
  {
    word: "zamuco",
    eligible: false,
  },
  {
    word: "zamumo",
    eligible: false,
  },
  {
    word: "zanago",
    eligible: false,
  },
  {
    word: "zanata",
    eligible: false,
  },
  {
    word: "Zanchi",
    eligible: false,
  },
  {
    word: "zanclo",
    eligible: false,
  },
  {
    word: "Zanete",
    eligible: false,
  },
  {
    word: "Zaneti",
    eligible: false,
  },
  {
    word: "zangão",
    eligible: false,
  },
  {
    word: "zângão",
    eligible: false,
  },
  {
    word: "zangar",
    eligible: false,
  },
  {
    word: "Zanguê",
    eligible: false,
  },
  {
    word: "Zanini",
    eligible: false,
  },
  {
    word: "zanizo",
    eligible: false,
  },
  {
    word: "zanoio",
    eligible: false,
  },
  {
    word: "zântio",
    eligible: false,
  },
  {
    word: "zanzar",
    eligible: false,
  },
  {
    word: "Zapata",
    eligible: false,
  },
  {
    word: "zapear",
    eligible: false,
  },
  {
    word: "zápete",
    eligible: false,
  },
  {
    word: "zapupe",
    eligible: false,
  },
  {
    word: "Zaqueu",
    eligible: false,
  },
  {
    word: "Zarcão",
    eligible: false,
  },
  {
    word: "zarcão",
    eligible: false,
  },
  {
    word: "Zaretã",
    eligible: false,
  },
  {
    word: "Zarifa",
    eligible: false,
  },
  {
    word: "zarpar",
    eligible: false,
  },
  {
    word: "zaruco",
    eligible: false,
  },
  {
    word: "Zarzur",
    eligible: false,
  },
  {
    word: "Zebida",
    eligible: false,
  },
  {
    word: "Zebina",
    eligible: false,
  },
  {
    word: "Zeboim",
    eligible: false,
  },
  {
    word: "zebral",
    eligible: false,
  },
  {
    word: "zebrar",
    eligible: false,
  },
  {
    word: "zebras",
    eligible: false,
  },
  {
    word: "zebrum",
    eligible: false,
  },
  {
    word: "Zebube",
    eligible: false,
  },
  {
    word: "zécora",
    eligible: false,
  },
  {
    word: "Zedade",
    eligible: false,
  },
  {
    word: "Zéfida",
    eligible: false,
  },
  {
    word: "zefire",
    eligible: false,
  },
  {
    word: "zéfiro",
    eligible: false,
  },
  {
    word: "Zeidas",
    eligible: false,
  },
  {
    word: "zeimão",
    eligible: false,
  },
  {
    word: "zeísmo",
    eligible: false,
  },
  {
    word: "Zelita",
    eligible: false,
  },
  {
    word: "zeloso",
    eligible: false,
  },
  {
    word: "zelote",
    eligible: false,
  },
  {
    word: "zembro",
    eligible: false,
  },
  {
    word: "Zemira",
    eligible: false,
  },
  {
    word: "zeneta",
    eligible: false,
  },
  {
    word: "zênite",
    eligible: false,
  },
  {
    word: "zenzém",
    eligible: false,
  },
  {
    word: "zeplim",
    eligible: false,
  },
  {
    word: "zequel",
    eligible: false,
  },
  {
    word: "Zeredá",
    eligible: false,
  },
  {
    word: "Zererá",
    eligible: false,
  },
  {
    word: "Zerete",
    eligible: false,
  },
  {
    word: "zeugma",
    eligible: false,
  },
  {
    word: "Zêzere",
    eligible: false,
  },
  {
    word: "Zezito",
    eligible: false,
  },
  {
    word: "Zibeão",
    eligible: false,
  },
  {
    word: "zibeta",
    eligible: false,
  },
  {
    word: "zichar",
    eligible: false,
  },
  {
    word: "zichos",
    eligible: false,
  },
  {
    word: "Zidane",
    eligible: false,
  },
  {
    word: "zifeus",
    eligible: false,
  },
  {
    word: "zígnia",
    eligible: false,
  },
  {
    word: "zigoma",
    eligible: false,
  },
  {
    word: "zigose",
    eligible: false,
  },
  {
    word: "zigoto",
    eligible: false,
  },
  {
    word: "Zilena",
    eligible: false,
  },
  {
    word: "zilhão",
    eligible: false,
  },
  {
    word: "zímase",
    eligible: false,
  },
  {
    word: "zimbro",
    eligible: false,
  },
  {
    word: "zímico",
    eligible: false,
  },
  {
    word: "Zimora",
    eligible: false,
  },
  {
    word: "zimose",
    eligible: false,
  },
  {
    word: "Zinara",
    eligible: false,
  },
  {
    word: "zincar",
    eligible: false,
  },
  {
    word: "zincos",
    eligible: false,
  },
  {
    word: "zingar",
    eligible: false,
  },
  {
    word: "Ziomar",
    eligible: false,
  },
  {
    word: "Zípora",
    eligible: false,
  },
  {
    word: "zirbal",
    eligible: false,
  },
  {
    word: "zircão",
    eligible: false,
  },
  {
    word: "zirrar",
    eligible: false,
  },
  {
    word: "zirros",
    eligible: false,
  },
  {
    word: "ziziar",
    eligible: false,
  },
  {
    word: "zízifo",
    eligible: false,
  },
  {
    word: "zoação",
    eligible: false,
  },
  {
    word: "zoário",
    eligible: false,
  },
  {
    word: "Zobeba",
    eligible: false,
  },
  {
    word: "zoécio",
    eligible: false,
  },
  {
    word: "zoeira",
    eligible: false,
  },
  {
    word: "zogada",
    eligible: false,
  },
  {
    word: "zoísmo",
    eligible: false,
  },
  {
    word: "zombar",
    eligible: false,
  },
  {
    word: "zombie",
    eligible: false,
  },
  {
    word: "zonear",
    eligible: false,
  },
  {
    word: "zonzar",
    eligible: false,
  },
  {
    word: "zonzom",
    eligible: false,
  },
  {
    word: "zonzos",
    eligible: false,
  },
  {
    word: "zoóbio",
    eligible: false,
  },
  {
    word: "zooide",
    eligible: false,
  },
  {
    word: "zoonte",
    eligible: false,
  },
  {
    word: "Zoraia",
    eligible: false,
  },
  {
    word: "Zorana",
    eligible: false,
  },
  {
    word: "zorate",
    eligible: false,
  },
  {
    word: "zorato",
    eligible: false,
  },
  {
    word: "zornal",
    eligible: false,
  },
  {
    word: "zornão",
    eligible: false,
  },
  {
    word: "zornar",
    eligible: false,
  },
  {
    word: "zorral",
    eligible: false,
  },
  {
    word: "zorrão",
    eligible: false,
  },
  {
    word: "zortar",
    eligible: false,
  },
  {
    word: "Zortéa",
    eligible: false,
  },
  {
    word: "zorzal",
    eligible: false,
  },
  {
    word: "zoster",
    eligible: false,
  },
  {
    word: "zóster",
    eligible: false,
  },
  {
    word: "zoteca",
    eligible: false,
  },
  {
    word: "Zózimo",
    eligible: false,
  },
  {
    word: "zuaque",
    eligible: false,
  },
  {
    word: "zuarte",
    eligible: false,
  },
  {
    word: "Zubair",
    eligible: false,
  },
  {
    word: "zuelar",
    eligible: false,
  },
  {
    word: "Zulmar",
    eligible: false,
  },
  {
    word: "zumbar",
    eligible: false,
  },
  {
    word: "zumbir",
    eligible: false,
  },
  {
    word: "zungar",
    eligible: false,
  },
  {
    word: "zunzum",
    eligible: false,
  },
  {
    word: "zureta",
    eligible: false,
  },
  {
    word: "Zuriel",
    eligible: false,
  },
  {
    word: "zurrar",
    eligible: false,
  },
  {
    word: "zurros",
    eligible: false,
  },
  {
    word: "zurzir",
    eligible: false,
  },
  {
    word: "zuzins",
    eligible: false,
  },
];

export default wordsObjects;
