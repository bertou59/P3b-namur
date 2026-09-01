const equipes = [
    "Leuze A", "Naninne B", "CS Wépion B", "Rhisnes B", "Aische B", "RWA Sauvenière", 
    "St-Germain", "Temploux", "Emines B", "Pt-Waret A", "Mazy", "Gd-Leez B", 
    "Boninne A", "Ligny B", "FCO Namur", "RUS Loyers B"
];

// Le vrai calendrier officiel de la DH (Journées 1 et 2 validées avec vos photos)
const calendrierFixe = {
    1: [
        { dom: "Leuze A", ext: "Naninne B" },
        { dom: "CS Wépion B", ext: "Rhisnes B" },
        { dom: "Aische B", ext: "RWA Sauvenière" },
        { dom: "St-Germain", ext: "Temploux" },
        { dom: "Emines B", ext: "Pt-Waret A" },
        { dom: "Mazy", ext: "Gd-Leez B" },
        { dom: "Boninne A", ext: "Ligny B" },
        { dom: "FCO Namur", ext: "RUS Loyers B" }
    ],
    2: [
        { dom: "Rhisnes B", ext: "St-Germain" },
        { dom: "Naninne B", ext: "Mazy" },
        { dom: "RWA Sauvenière", ext: "CS Wépion B" },
        { dom: "RUS Loyers B", ext: "Aische B" },
        { dom: "Ligny B", ext: "FCO Namur" },
        { dom: "Gd-Leez B", ext: "Boninne A" },
        { dom: "Pt-Waret A", ext: "Leuze A" },
        { dom: "Temploux", ext: "Emines B" }
    ]
};

let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;
let ongletActif = 'general';

function genererCalendrierComplet() {
    // Initialise les structures pour les 30 journées
    for (let j = 1; j <= totalJournees; j++) {
        donneesJournees[j] = [];
    }
    
    // Injecte les vraies journées 1 et 2
    donneesJournees[1] = calendrierFixe[1].map(m => ({ ...m, scoreDom: "", scoreExt: "" }));
    donneesJournees[2] = calendrierFixe[2].map(m => ({ ...m, scoreDom: "", scoreExt: "" }));

    // Génère le reste des journées pour éviter les bugs d'affichage en attendant les vrais matchs
    for (let j = 3; j <= 15; j++) {
        donneesJournees[j] = calendrierFixe[1].map(m => ({ dom: m.dom, ext: m.ext, scoreDom: "", scoreExt: "" }));
    }
    for (let j = 16; j <= 30; j++) {
        donneesJournees[j] = calendrierFixe[1].map(m => ({ dom: m.ext, ext: m.dom, scoreDom: "", scoreExt: "" }));
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
