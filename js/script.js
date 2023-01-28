const en = {
  community: "Community",
  poems: "Poems",
  english: "English",
  french: "French",
  german: "German",
  italian: "Italian",
  information: "Information",
  translation: "Translation:",
  author: "Author",
  translator: "Translator",
  name: "Name",
  poet: "Poet",
};

const fr = {
  community: "Communauté",
  poems: "Poèmes",
  english: "Anglaise",
  french: "Française",
  german: "Allemande",
  italian: "Italienne",
  information: "Informations",
  translation: "Traduction:",
  author: "Auteure",
  translator: "Traductrice",
  name: "Nom",
  poet: "Poète",
};

const de = {
  community: "Gemeinschaft",
  poems: "Gedichte",
  english: "Englisch",
  french: "Französisch",
  german: "Deutsche",
  italian: "Italienisch",
  information: "Information",
  translation: "Übersetzung:",
  author: "Autor",
  translator: "Übersetzer",
  name: "Nome",
  poet: "Dichter",
};

const it = {
  community: "Comunità",
  poems: "Poesie",
  english: "Inglese",
  french: "Francese",
  german: "Tedesca",
  italian: "Italiana",
  information: "Informazione",
  translation: "Traduzione:",
  author: "Autore",
  translator: "Traduttore",
  name: "Nome",
  poet: "Poeta",
};

const poems = document.querySelector("#poems");
const community = document.querySelector("#community");

const query = new URLSearchParams();
console.log(query);

window.onload = () => {
  document.querySelector("#selectLangForPoem").value = "Select a language...";
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
  document.querySelectorAll(".navbar-nav a")[0].innerText = lang.information;
  document.querySelectorAll(".navbar-nav a")[1].innerText = lang.community;
  document.querySelector("#community h1").innerText = lang.community;
  document.querySelectorAll(".navbar-nav a")[2].innerText = lang.poems;
  document.querySelectorAll(".language a")[0].innerText = lang.english;
  document.querySelectorAll(".language a")[1].innerText = lang.french;
  document.querySelectorAll(".language a")[2].innerText = lang.german;
  document.querySelectorAll(".language a")[3].innerText = lang.italian;
  document.querySelector("#info h1").innerText = lang.information;
  document.querySelector("#poems h1").innerText = lang.poems;
  document.querySelectorAll(".poemCard .author span").forEach((el) => {
    el.innerText = lang.translation;
  });
  document.querySelectorAll(".communityName").forEach((el) => {
    switch (el.innerText) {
      case "Author Name":
        el.innerText = `${lang.author} ${lang.name}`;
        break;
      case "Translator Name":
        el.innerText = `${lang.translator} ${lang.name}`;
        break;
      case "Poet Name":
        el.innerText = `${lang.poet} ${lang.name}`;
        break;
    }
  });
};

const poemCardToShow = document.querySelector("#poemCardToShow");
const changePoemLang = () => {
  const language = document.querySelector("#selectLangForPoem").value;

  switch (language) {
    case "en":
      poemCardToShow.childNodes[3].innerText = "Belonging";
      poemCardToShow.childNodes[5].innerHTML = `
                <p>Sun, whose name are you?</p>
                <p>Which Galaxy,</p>
                <p>which Nation,</p>
                <p>which People do you belong to ?,</p>
                <br />
                <p>Well, you really cannot go on</p>
                <p>roaming like this around the world :</p>
                <p>today in the East,</p>
                <p>and tomorrow the West!</p>
                <br />
                <p>You have to make up your mind,</p>
                <p>And finally declare yourself:</p>
                <p>Whose are you?</p>
                <br />
                <p>We need to know:</p>
                <p>In case you die,</p>
                <p>where are we to burry you?</p>
                <br />
                <p>In which country,</p>
                <p>in which district,</p>
                <p>in which neighbourhood?</p>
  `;
      poemCardToShow.childNodes[7].innerHTML = `
                <span>Translation:</span> Svetlana Spaic`;
      break;

    case "fr":
      poemCardToShow.childNodes[3].innerText = "Appartenance";
      poemCardToShow.childNodes[5].innerHTML = `
                <p>Soleil, a qui est ton nom?</p>
                <p>A quelle Galaxie,</p>
                <p>a quelle Nation,</p>
                <p>a quel peuple appartiens-tu?</p>
                <br />
                <p>Mais tu ne peux vraiment plus</p>
                <p>roder comme ca de par le monde :</p>
                <p>aujourd'hui a l'Est</p>
                <p>et demain a l'Ouest !</p>
                <br />
                <p>Tu dois te decider</p>
                <p>et enfin te declarer :</p>
                <p>a qui tu es ?</p>
                <br />
                <p>Il faut nous tenir informes</p>
                <p>En cas de ton deces,</p>
                <p>ou allons nous t'enterrer ?</p>
                <p>Dans quel pays,</p>
                <p>dans quelle contree,</p>
                <p>dans quel quartier ?</p>
       `;
      poemCardToShow.childNodes[7].innerHTML = `
                <span>Traduction:</span> Svetlana Spaic`;
      break;

    case "du":
      poemCardToShow.childNodes[3].innerText = "Zon";
      poemCardToShow.childNodes[5].innerHTML = `
                <p>Zon, van wie is je naam ?</p>
                <p>Tot welke Melkweg,</p>
                <p>tot welke Natie</p>
                <p>tot welk volk behoor je ?</p>
                <br />
                <p>Je kunt toch echt niet meer</p>
                <p>zo rondzwerven door de wereld :</p>
                <p>vandaag in het Oosten</p>
                <p>en morgen in het Westen !</p>
                <br />
                <p>Je moet eindelijk een keuze maken:</p>
                <p>van wie ben je ?</p>
                <br />
                <p>We moeten het weten.</p>
                <p>In geval van je overlijden</p>
                <p>waar gaan we je begraven ?</p>
                <p>In welk land</p>
                <p>in welke streek</p>
                <p>in welke wijk ?</p>
       `;
      poemCardToShow.childNodes[7].innerHTML = `
                <span>Translatie:</span>  Lidy Maaz`;
      break;

    case "ar":
      poemCardToShow.childNodes[3].innerText = "شمس";
      poemCardToShow.childNodes[5].innerHTML = `
                <p>أيّتها الشمس</p>
                <p>لمن اسمك؟</p>
                <p>لأيّ بلاد تنتمين</p>
                <p>لأيّ أمّة</p>
                <p>لأيّ شعب؟</p>
                <p>لا يمكنك أن تهيمي هكذا</p>
                <p>في هذا العالم ..</p>
                <p>يوم في الشرق</p>
                <p>وآخر في الغرب</p>
                <br />
                <p>عليك في النهاية أن تختاري</p>
                <p>لمن أنت ...</p>
                <p>وعليك أن تعلمينا</p>
                <p>إذ أين سنواريك غداً لو حلّ فناؤك</p>
                <p>في أيّ بلاد</p>
                <p>في أيّة محلّة</p>
                <p>وفي أيّ حيّ؟</p>
       `;
      poemCardToShow.childNodes[7].innerHTML = `
                 <span>ترجمة</span> Fadi El Tofeili `;
      break;
  }
};
