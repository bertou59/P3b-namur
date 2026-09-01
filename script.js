const equipes = [
    "Leuze A", "Naninne B", "CS Wépion B", "Rhisnes B", "Aische B", "RWA Sauvenière", 
    "St-Germain", "Temploux", "Emines B", "Pt-Waret A", "Mazy", "Gd-Leez B", 
    "Boninne A", "Ligny B", "FCO Namur", "RUS Loyers B"
];

const donneesJournees = {
    1: [
        { dom: "Leuze A", ext: "Naninne B", scoreDom: "", scoreExt: "" },
        { dom: "CS Wépion B", ext: "Rhisnes B", scoreDom: "", scoreExt: "" },
        { dom: "Aische B", ext: "RWA Sauvenière", scoreDom: "", scoreExt: "" },
        { dom: "St-Germain", ext: "Temploux", scoreDom: "", scoreExt: "" },
        { dom: "Emines B", ext: "Pt-Waret A", scoreDom: "", scoreExt: "" },
        { dom: "Mazy", ext: "Gd-Leez B", scoreDom: "", scoreExt: "" },
        { dom: "Boninne A", ext: "Ligny B", scoreDom: "", scoreExt: "" },
        { dom: "FCO Namur", ext: "RUS Loyers B", scoreDom: "", scoreExt: "" }
    ],
    2: [
        { dom: "Rhisnes B", ext: "St-Germain", scoreDom: "", scoreExt: "" },
        { dom: "Naninne B", ext: "Mazy", scoreDom: "", scoreExt: "" },
        { dom: "RWA Sauvenière", ext: "CS Wépion B", scoreDom: "", scoreExt: "" },
        { dom: "RUS Loyers B", ext: "Aische B", scoreDom: "", scoreExt: "" },
        { dom: "Ligny B", ext: "FCO Namur", scoreDom: "", scoreExt: "" },
        { dom: "Gd-Leez B", ext: "Boninne A", scoreDom: "", scoreExt: "" },
        { dom: "Pt-Waret A", ext: "Leuze A", scoreDom: "", scoreExt: "" },
        { dom: "Temploux", ext: "Emines B", scoreDom: "", scoreExt: "" }
    ]
};

const totalJournees = 30;
let journeeActuelle = 1;
let ongletActif = 'general';

function remplirResteDuCalendrier() {
    for (let j = 3; j <= totalJournees; j++) {
        donneesJournees[j] = [
            { dom: "Leuze A", ext: "Naninne B", scoreDom: "", scoreExt: "" },
            { dom: "CS Wépion B", ext: "Rhisnes B", scoreDom: "", scoreExt: "" },
            { dom: "Aische B", ext: "RWA Sauvenière", scoreDom: "", scoreExt: "" },
            { dom: "St-Germain", ext: "Temploux", scoreDom: "", scoreExt: "" },
            { dom: "Emines B", ext: "Pt-Waret A", scoreDom: "", scoreExt: "" },
            { dom: "Mazy", ext: "Gd-Leez B", scoreDom: "", scoreExt: "" },
            { dom: "Boninne A", ext: "Ligny B", scoreDom: "", scoreExt: "" },
            { dom: "FCO Namur", ext: "RUS Loyers B", scoreDom: "", scoreExt: "" }
        ];
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
                    else if (sExt > sDom) { eqExt.g++; eqDom.pts += 3; }
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
    if (event && event.target) event.target.classList.add('active');
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
    remplirResteDuCalendrier();
    chargerScoresSauvegardes();
    afficherMatchs();
    calculerEtAfficherClassement();
    const btnPrec = document.getElementById("btn-prev");
    const btnSuiv = document.getElementById("btn-next");
    if (btnPrec) btnPrec.onclick = () => { if (journeeActuelle > 1) { journeeActuelle--; afficherMatchs(); } };
    if (btnSuiv) btnSuiv.onclick = () => { if (journeeActuelle < totalJournees) { journeeActuelle++; afficherMatchs(); } };
};
