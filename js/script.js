const en = {
  community: "Community",
  poems: "Poems",
  english: "English",
  french: "French",
  german: "Ferman",
  italian: "Italian",
  information: "Information",
  translation: "Translation",
  author: "Author",
  translator: "Translator",
};

const fr = {
  community: "Communauté",
  poems: "Poèmes",
  english: "Anglaise",
  french: "Française",
  german: "Allemande",
  italian: "Italienne",
  information: "Informations",
  translation: "Traduction",
  author: "Auteure",
  translator: "Traductrice",
};

const de = {
  community: "Gemeinschaft",
  poems: "Gedichte",
  english: "Englisch",
  french: "Französisch",
  german: "Deutsche",
  italian: "Italienisch",
  information: "Information",
  translation: "Übersetzung",
  author: "Autor",
  translator: "Übersetzer",
};

const it = {
  community: "Comunità",
  poems: "Poesie",
  english: "Inglese",
  french: "Francese",
  german: "Tedesca",
  italian: "Italiana",
  information: "Informazione",
  translation: "Traduzione",
  author: "Autore",
  translator: "Traduttore",
};

window.onload = () => {
  if (window.location.hash) {
    switch (window.location.hash) {
      case "#en":
        setLang(en);
        break;
      case "#fr":
        setLang(fr);
        break;
      case "#de":
        setLang(de);
        break;
      case "#it":
        setLang(it);
        break;
    }
  }
};

const changeLang = (language) => {
  location.hash = language;
  location.reload();
};

const setLang = (lang) => {
  document.querySelectorAll(".navbar-nav a")[0].innerText = lang.community;
  document.querySelector("#community h1").innerText = lang.community;
  document.querySelectorAll(".navbar-nav a")[1].innerText = lang.poems;
  document.querySelectorAll(".language a")[0].innerText = lang.english;
  document.querySelectorAll(".language a")[1].innerText = lang.french;
  document.querySelectorAll(".language a")[2].innerText = lang.german;
  document.querySelectorAll(".language a")[3].innerText = lang.italian;
  console.log(lang.information);
  document.querySelector("#info h1").innerText = lang.information;
  console.log(lang.poems);
  document.querySelector("#poems h1").innerText = lang.poems;
  document.querySelectorAll(".poemCard .author span").forEach((el) => {
    el.innerText = lang.translation;
  });
  console.log(lang.author);
  console.log(lang.translator);
};
