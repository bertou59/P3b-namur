const equipes = [
    "Leuze A", "Naninne B", "Wépion B", "Rhisnes B", "Aische B", "Sauvenière A", 
    "St-Germain", "Temploux", "Emines B", "Petit-Waret A", "Mazy A", "Grand-Leez B", 
    "Boninne A", "Ligny B", "FCO Namur", "Loyers B"
];

const calendrierFixe = {
    1: [["Leuze A","Loyers B"],["Naninne B","FCO Namur"],["Wépion B","Ligny B"],["Rhisnes B","Boninne A"],["Aische B","Grand-Leez B"],["Sauvenière A","Mazy A"],["St-Germain","Petit-Waret A"],["Temploux","Emines B"]],
    2: [["Emines B","Leuze A"],["Petit-Waret A","Temploux"],["Mazy A","St-Germain"],["Grand-Leez B","Sauvenière A"],["Boninne A","Aische B"],["Ligny B","Rhisnes B"],["FCO Namur","Wépion B"],["Loyers B","Naninne B"]],
    3: [["Leuze A","Naninne B"],["Wépion B","Loyers B"],["Rhisnes B","FCO Namur"],["Aische B","Ligny B"],["Sauvenière A","Boninne A"],["St-Germain","Grand-Leez B"],["Temploux","Mazy A"],["Emines B","Petit-Waret A"]],
    4: [["Petit-Waret A","Leuze A"],["Mazy A","Emines B"],["Grand-Leez B","Temploux"],["Boninne A","St-Germain"],["Ligny B","Sauvenière A"],["FCO Namur","Aische B"],["Loyers B","Rhisnes B"],["Naninne B","Wépion B"]],
    5: [["Leuze A","Wépion B"],["Rhisnes B","Naninne B"],["Aische B","Loyers B"],["Sauvenière A","FCO Namur"],["St-Germain","Ligny B"],["Temploux","Boninne A"],["Emines B","Grand-Leez B"],["Petit-Waret A","Mazy A"]],
    6: [["Mazy A","Leuze A"],["Grand-Leez B","Petit-Waret A"],["Boninne A","Emines B"],["Ligny B","Temploux"],["FCO Namur","St-Germain"],["Loyers B","Sauvenière A"],["Naninne B","Aische B"],["Wépion B","Rhisnes B"]],
    7: [["Leuze A","Rhisnes B"],["Aische B","Wépion B"],["Sauvenière A","Naninne B"],["St-Germain","Loyers B"],["Temploux","FCO Namur"],["Emines B","Ligny B"],["Petit-Waret A","Boninne A"],["Mazy A","Grand-Leez B"]],
    8: [["Grand-Leez B","Leuze A"],["Boninne A","Mazy A"],["Ligny B","Petit-Waret A"],["FCO Namur","Emines B"],["Loyers B","Temploux"],["Naninne B","St-Germain"],["Wépion B","Sauvenière A"],["Rhisnes B","Aische B"]],
    9: [["Leuze A","Aische B"],["Sauvenière A","Rhisnes B"],["St-Germain","Wépion B"],["Temploux","Naninne B"],["Emines B","Loyers B"],["Petit-Waret A","FCO Namur"],["Mazy A","Ligny B"],["Grand-Leez B","Boninne A"]],
    10: [["Boninne A","Leuze A"],["Ligny B","Grand-Leez B"],["FCO Namur","Mazy A"],["Loyers B","Petit-Waret A"],["Naninne B","Emines B"],["Wépion B","Temploux"],["Rhisnes B","St-Germain"],["Aische B","Sauvenière A"]],
    11: [["Leuze A","Sauvenière A"],["St-Germain","Aische B"],["Temploux","Rhisnes B"],["Emines B","Wépion B"],["Petit-Waret A","Naninne B"],["Mazy A","Loyers B"],["Grand-Leez B","FCO Namur"],["Boninne A","Ligny B"]],
    12: [["Ligny B","Leuze A"],["FCO Namur","Boninne A"],["Loyers B","Grand-Leez B"],["Naninne B","Mazy A"],["Wépion B","Petit-Waret A"],["Rhisnes B","Emines B"],["Aische B","Temploux"],["Sauvenière A","St-Germain"]],
    13: [["Leuze A","St-Germain"],["Temploux","Sauvenière A"],["Emines B","Aische B"],["Petit-Waret A","Rhisnes B"],["Mazy A","Wépion B"],["Grand-Leez B","Naninne B"],["Boninne A","Loyers B"],["Ligny B","FCO Namur"]],
    14: [["FCO Namur","Leuze A"],["Loyers B","Ligny B"],["Naninne B","Boninne A"],["Wépion B","Grand-Leez B"],["Rhisnes B","Mazy A"],["Aische B","Petit-Waret A"],["Sauvenière A","Emines B"],["St-Germain","Temploux"]],
    15: [["Leuze A","Temploux"],["Emines B","St-Germain"],["Petit-Waret A","Sauvenière A"],["Mazy A","Aische B"],["Grand-Leez B","Rhisnes B"],["Boninne A","Wépion B"],["Ligny B","Naninne B"],["FCO Namur","Loyers B"]]
};

let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;
let ongletActif = 'general';

function genererCalendrierComplet() {
    for (let j = 1; j <= 15; j++) {
        donneesJournees[j] = calendrierFixe[j].map(m => ({ dom: m[0], ext: m[1], scoreDom: "", scoreExt: "" }));
        let jr = j + 15;
        donneesJournees[jr] = calendrierFixe[j].map(m => ({ dom: m[1], ext: m[0], scoreDom: "", scoreExt: "" }));
    }
}

function afficherMatchs() {
    const conteneur = document.getElementById("corps-matchs");
    if (!conteneur) return;
    const titre = document.getElementById("titre-classement");
    if (titre) titre.innerText = `Journée ${journeeActuelle}`;
    const matchs = donneesJournees[journeeActuelle] || [];
    let html = "";
    matchs.forEach((match, index) => {
        let ligneClasse = (match.dom === "FCO Namur" || match.ext === "FCO Namur") ? "match-row fco-namur-row-highlight" : "match-row";
        html += `
        <div class="${ligneClasse}">
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
        localStorage.setItem('score-j' + journeeActuelle + '-m' + indexMatch + '-' + type, valeur);
        calculerEtAfficherClassement();
    }
}

function calculerEtAfficherClassement() {
    let classement = equipes.map(nom => ({ nom: nom, j: 0, g: 0, diff: 0, pts: 0 }));
    for (let j = 1; j <= totalJournees; j++) {
        if (ongletActif === 't1' && (j < 1 || j > 10)) continue;
        if (ongletActif === 't2' && (j < 11 || j > 20)) continue;
        if (ongletActif === 't3' && (j < 21 || j > 30)) continue;
        if (!donneesJournees[j]) continue;
        donneesJournees[j].forEach(match => {
            if (match.scoreDom !== "" && match.scoreExt !== "") {
                let sDom = parseInt(match.scoreDom);
                let sExt = parseInt(match.scoreExt);
                let eqDom = classement.find(e => e.nom === match.dom);
                let eqExt = classement.find(e => e.nom === match.ext);
                if (eqDom && eqExt) {
                    eqDom.j++; eqExt.j++;
                    eqDom.diff += (sDom - sExt);
                    eqExt.diff += (sExt - sDom);
                    if (sDom > sExt) { eqDom.g++; eqDom.pts += 3; }
                    else if (sExt > sDom) { eqExt.g++; eqExt.pts += 3; }
                    else { eqDom.pts += 1; eqExt.pts += 1; }
                }
            }
        });
    }
    classement.sort((a, b) => b.pts - a.pts || b.g - a.g || b.diff - a.diff);
    const corps = document.getElementById("corps-classement");
    if (!corps) return;
    let html = "";
    classement.forEach((eq, idx) => {
        let classeLigne = eq.nom === "FCO Namur" ? ' class="fco-namur-row-highlight"' : '';
        html += `
        <tr${classeLigne}>
            <td>${idx + 1}</td>
            <td style="text-align:left;">${eq.nom}</td>
            <td>${eq.j}</td>
            <td>${eq.g}</td>
            <td>${eq.diff > 0 ? '+' + eq.diff : eq.diff}</td>
            <td class="pts-color">${eq.pts}</td>
        </tr>`;
    });
    corps.innerHTML = html;
}

function changerOnglet(type) {
    ongletActif = type;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const titres = { general: "Classement Général", t1: "Classement Tranche 1", t2: "Classement Tranche 2", t3: "Classement Tranche 3" };
    document.getElementById("titre-classement-tab").innerText = titres[type];
    event.target.classList.add('active');
    calculerEtAfficherClassement();
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
    genererCalendrierComplet();
    chargerScoresSauvegardes();
    afficherMatchs();
    calculerEtAfficherClassement();
    const btnPrec = document.getElementById("btn-prev");
    const btnSuiv = document.getElementById("btn-next");
    if (btnPrec) btnPrec.onclick = () => { if (journeeActuelle > 1) { journeeActuelle--; afficherMatchs(); } };
    if (btnSuiv) btnSuiv.onclick = () => { if (journeeActuelle < totalJournees) { journeeActuelle++; afficherMatchs(); } };
};
