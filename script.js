const equipes = [
    "Leuze A", "Naninne B", "Wépion B", "Rhisnes B", "Aische B", "Sauvenière A", 
    "St-Germain", "Temploux", "Emines B", "Petit-Waret A", "Mazy A", "Grand-Leez B", 
    "Boninne A", "Ligny B", "FCO Namur", "Loyers B"
];

const calendrierFixe = {
    1: [{dom:"Leuze A",ext:"Loyers B"},{dom:"Naninne B",ext:"FCO Namur"},{dom:"Wépion B",ext:"Ligny B"},{dom:"Rhisnes B",ext:"Boninne A"},{dom:"Aische B",ext:"Grand-Leez B"},{dom:"Sauvenière A",ext:"Mazy A"},{dom:"St-Germain",ext:"Petit-Waret A"},{dom:"Temploux",ext:"Emines B"}],
    2: [{dom:"Emines B",ext:"Leuze A"},{dom:"Petit-Waret A",ext:"Temploux"},{dom:"Mazy A",ext:"St-Germain"},{dom:"Grand-Leez B",ext:"Sauvenière A"},{dom:"Boninne A",ext:"Aische B"},{dom:"Ligny B",ext:"Rhisnes B"},{dom:"FCO Namur",ext:"Wépion B"},{dom:"Loyers B",ext:"Naninne B"}],
    3: [{dom:"Leuze A",ext:"Naninne B"},{dom:"Wépion B",ext:"Loyers B"},{dom:"Rhisnes B",ext:"FCO Namur"},{dom:"Aische B",ext:"Ligny B"},{dom:"Sauvenière A",ext:"Boninne A"},{dom:"St-Germain",ext:"Grand-Leez B"},{dom:"Temploux",ext:"Mazy A"},{dom:"Emines B",ext:"Petit-Waret A"}],
    4: [{dom:"Petit-Waret A",ext:"Leuze A"},{dom:"Mazy A",ext:"Emines B"},{dom:"Grand-Leez B",ext:"Temploux"},{dom:"Boninne A",ext:"St-Germain"},{dom:"Ligny B",ext:"Sauvenière A"},{dom:"FCO Namur",ext:"Aische B"},{dom:"Loyers B",ext:"Rhisnes B"},{dom:"Naninne B",ext:"Wépion B"}],
    5: [{dom:"Leuze A",ext:"Wépion B"},{dom:"Rhisnes B",ext:"Naninne B"},{dom:"Aische B",ext:"Loyers B"},{dom:"Sauvenière A",ext:"FCO Namur"},{dom:"St-Germain",ext:"Ligny B"},{dom:"Temploux",ext:"Boninne A"},{dom:"Emines B",ext:"Grand-Leez B"},{dom:"Petit-Waret A",ext:"Mazy A"}],
    6: [{dom:"Mazy A",ext:"Leuze A"},{dom:"Grand-Leez B",ext:"Petit-Waret A"},{dom:"Boninne A",ext:"Emines B"},{dom:"Ligny B",ext:"Temploux"},{dom:"FCO Namur",ext:"St-Germain"},{dom:"Loyers B",ext:"Sauvenière A"},{dom:"Naninne B",ext:"Aische B"},{dom:"Wépion B",ext:"Rhisnes B"}],
    7: [{dom:"Leuze A",ext:"Rhisnes B"},{dom:"Aische B",ext:"Wépion B"},{dom:"Sauvenière A",ext:"Naninne B"},{dom:"St-Germain",ext:"Loyers B"},{dom:"Temploux",ext:"FCO Namur"},{dom:"Emines B",ext:"Ligny B"},{dom:"Petit-Waret A",ext:"Boninne A"},{dom:"Mazy A",ext:"Grand-Leez B"}],
    8: [{dom:"Grand-Leez B",ext:"Leuze A"},{dom:"Boninne A",ext:"Mazy A"},{dom:"Ligny B",ext:"Petit-Waret A"},{dom:"FCO Namur",ext:"Emines B"},{dom:"Loyers B",ext:"Temploux"},{dom:"Naninne B",ext:"St-Germain"},{dom:"Wépion B",ext:"Sauvenière A"},{dom:"Rhisnes B",ext:"Aische B"}],
    9: [{dom:"Leuze A",ext:"Aische B"},{dom:"Sauvenière A",ext:"Rhisnes B"},{dom:"St-Germain",ext:"Wépion B"},{dom:"Temploux",ext:"Naninne B"},{dom:"Emines B",ext:"Loyers B"},{dom:"Petit-Waret A",ext:"FCO Namur"},{dom:"Mazy A",ext:"Ligny B"},{dom:"Grand-Leez B",ext:"Boninne A"}],
    10: [{dom:"Boninne A",ext:"Leuze A"},{dom:"Ligny B",ext:"Grand-Leez B"},{dom:"FCO Namur",ext:"Mazy A"},{dom:"Loyers B",ext:"Petit-Waret A"},{dom:"Naninne B",ext:"Emines B"},{dom:"Wépion B",ext:"Temploux"},{dom:"Rhisnes B",ext:"St-Germain"},{dom:"Aische B",ext:"Sauvenière A"}],
    11: [{dom:"Leuze A",ext:"Sauvenière A"},{dom:"St-Germain",ext:"Aische B"},{dom:"Temploux",ext:"Rhisnes B"},{dom:"Emines B",ext:"Wépion B"},{dom:"Petit-Waret A",ext:"Naninne B"},{dom:"Mazy A",ext:"Loyers B"},{dom:"Grand-Leez B",ext:"FCO Namur"},{dom:"Boninne A",ext:"Ligny B"}],
    12: [{dom:"Ligny B",ext:"Leuze A"},{dom:"FCO Namur",ext:"Boninne A"},{dom:"Loyers B",ext:"Grand-Leez B"},{dom:"Naninne B",ext:"Mazy A"},{dom:"Wépion B",ext:"Petit-Waret A"},{dom:"Rhisnes B",ext:"Emines B"},{dom:"Aische B",ext:"Temploux"},{dom:"Sauvenière A",ext:"St-Germain"}],
    13: [{dom:"Leuze A",ext:"St-Germain"},{dom:"Temploux",ext:"Sauvenière A"},{dom:"Emines B",ext:"Aische B"},{dom:"Petit-Waret A",ext:"Rhisnes B"},{dom:"Mazy A",ext:"Wépion B"},{dom:"Grand-Leez B",ext:"Naninne B"},{dom:"Boninne A",ext:"Loyers B"},{dom:"Ligny B",ext:"FCO Namur"}],
    14: [{dom:"FCO Namur",ext:"Leuze A"},{dom:"Loyers B",ext:"Ligny B"},{dom:"Naninne B",ext:"Boninne A"},{dom:"Wépion B",ext:"Grand-Leez B"},{dom:"Rhisnes B",ext:"Mazy A"},{dom:"Aische B",ext:"Petit-Waret A"},{dom:"Sauvenière A",ext:"Emines B"},{dom:"St-Germain",ext:"Temploux"}],
    15: [{dom:"Leuze A",ext:"Temploux"},{dom:"Emines B",ext:"St-Germain"},{dom:"Petit-Waret A",ext:"Sauvenière A"},{dom:"Mazy A",ext:"Aische B"},{dom:"Grand-Leez B",ext:"Rhisnes B"},{dom:"Boninne A",ext:"Wépion B"},{dom:"Ligny B",ext:"Naninne B"},{dom:"FCO Namur",ext:"Loyers B"}]
};

let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;
let ongletActif = 'general';

function genererCalendrierComplet() {
    for (let j = 1; j <= 15; j++) {
        donneesJournees[j] = calendrierFixe[j].map(m => ({ dom: m.dom, ext: m.ext, scoreDom: "", scoreExt: "" }));
        let jr = j + 15;
        donneesJournees[jr] = calendrierFixe[j].map(m => ({ dom: m.ext, ext: m.dom, scoreDom: "", scoreExt: "" }));
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
