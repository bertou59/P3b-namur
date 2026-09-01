const equipes = [
    "Leuze A", "Naninne B", "Wépion B", "Rhisnes B",
    "Aische B", "Sauvenière A", "St-Germain", "Temploux",
    "Emines B", "Petit-Waret A", "Mazy A", "Grand-Leez B",
    "Boninne A", "Ligny B", "FCO Namur", "Loyers B"
];

let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;
let ongletActif = 'general';

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
    const conteneur = document.getElementById("corps-matchs");
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
        localStorage.setItem('score-j' + journeeActuelle + '-m' + indexMatch + '-' + type, valeur);
        calculerEtAfficherClassement();
    }
}

function calculerEtAfficherClassement() {
    let classement = equipes.map(nom => ({ nom: nom, j: 0, g: 0, diff: 0, pts: 0 }));

    for (let j = 1; j <= totalJournees; j++) {
        // Filtre pour les tranches (Tranche 1: J1-10, Tranche 2: J11-20, Tranche 3: J21-30)
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
        html += `
        <tr>
            <td style="text-align:center; padding:8px;">${idx + 1}</td>
            <td style="padding:8px;">${eq.nom}</td>
            <td style="text-align:center; padding:8px;">${eq.j}</td>
            <td style="text-align:center; padding:8px;">${eq.g}</td>
            <td style="text-align:center; padding:8px;">${eq.diff > 0 ? '+' + eq.diff : eq.diff}</td>
            <td style="text-align:center; padding:8px; color:#00ff66; font-weight:bold;">${eq.pts}</td>
        </tr>`;
    });
    corps.innerHTML = html;
}

function changerOnglet(type) {
    ongletActif = type;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const titres = { general: "Classement Général", t1: "Classement Tranche 1", t2: "Classement Tranche 2", t3: "Classement Tranche 3" };
    document.getElementById("titre-classement-tab").innerText = titres[type];
    
    // Ajoute la couleur verte sur le bouton actif
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
    genererCalendrier();
    chargerScoresSauvegardes();
    afficherMatchs();
    calculerEtAfficherClassement();
    
    const btnPrec = document.getElementById("btn-prev");
    const btnSuiv = document.getElementById("btn-next");
    
    if (btnPrec) btnPrec.onclick = () => { if (journeeActuelle > 1) { journeeActuelle--; afficherMatchs(); } };
    if (btnSuiv) btnSuiv.onclick = () => { if (journeeActuelle < totalJournees) { journeeActuelle++; afficherMatchs(); } };
};
