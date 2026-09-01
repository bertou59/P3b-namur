const equipes = [
    "Leuze A", "Naninne B", "Wépion B", "Rhisnes B",
    "Aische B", "Sauvenière A", "St-Germain", "Temploux",
    "Emines B", "Petit-Waret A", "Mazy A", "Grand-Leez B",
    "Boninne A", "Ligny B", "FCO Namur", "Loyers B"
];

let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;

function genererCalendrier() {
    let listeEquipes = [...equipes];
    for (let j = 1; j <= totalJournees; j++) {
        donneesJournees[j] = [];
        let copieList = [...listeEquipes];
        for (let m = 0; m < 8; m++) {
            let dom = copieList[m];
            let ext = copieList[15 - m];
            donneesJournees[j].push({ dom: dom, ext: ext, scoreDom: "", scoreExt: "" });
        }
        listeEquipes.splice(1, 0, listeEquipes.pop());
    }
}

function afficherMatchs() {
    const conteneur = document.getElementById("corps-classement");
    if (!conteneur) return;
    
    const titre = document.getElementById("titre-classement");
    if (titre) titre.innerText = `Journée ${journeeActuelle}`;
    
    const matchs = donneesJournees[journeeActuelle] || [];
    let html = "";
    matchs.forEach((match, index) => {
        html += `
        <div class="match-row">
            <span class="team-name dom">${match.dom}</span>
            <div class="score-container">
                <input type="number" class="score-input" value="${match.scoreDom}" oninput="mettreAJourScore(${index}, 'dom', this.value)">
                <input type="number" class="score-input" value="${match.scoreExt}" oninput="mettreAJourScore(${index}, 'ext', this.value)">
            </div>
            <span class="team-name ext">${match.ext}</span>
        </div>`;
    });
    conteneur.innerHTML = html;
}

function mettreAJourScore(indexMatch, type, valeur) {
    if (donneesJournees[journeeActuelle] && donneesJournees[journeeActuelle][indexMatch]) {
        if (type === 'dom') donneesJournees[journeeActuelle][indexMatch].scoreDom = valeur;
        if (type === 'ext') donneesJournees[journeeActuelle][indexMatch].scoreExt = valeur;
        // Sauvegarde automatique dans la mémoire du smartphone
        localStorage.setItem('score-j' + journeeActuelle + '-m' + indexMatch + '-' + type, valeur);
    }
}

function chargerScoresSauvegardes() {
    for (let j = 1; j <= totalJournees; j++) {
        if (!donneesJournees[j]) continue;
        donneesJournees[j].forEach((match, index) => {
            let sDom = localStorage.getItem('score-j' + j + '-m' + index + '-dom');
            let sExt = localStorage.getItem('score-j' + j + '-m' + index + '-ext');
            if (sDom !== null) match.scoreDom = sDom;
            if (sExt !== null) match.scoreExt = sExt;
        });
    }
}

window.onload = function() {
    genererCalendrier();
    chargerScoresSauvegardes();
    afficherMatchs();
    
    const btnPrec = document.getElementById("btn-prev");
    const btnSuiv = document.getElementById("btn-next");
    
    if (btnPrec) {
        btnPrec.onclick = () => {
            if (journeeActuelle > 1) {
                journeeActuelle--;
                afficherMatchs();
            }
        };
    }
    if (btnSuiv) {
        btnSuiv.onclick = () => {
            if (journeeActuelle < totalJournees) {
                journeeActuelle++;
                afficherMatchs();
            }
        };
    }
};
