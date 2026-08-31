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
    const conteneur = document.getElementById("matches-container") || document.getElementById("corps-classement");
    if (!conteneur) return;
    
    const titre = document.getElementById("journee-titre") || document.getElementById("titre-classement");
    if (titre) titre.innerText = `Journée ${journeeActuelle}`;
    
    const matchs = donneesJournees[journeeActuelle] || [];
    let html = "";
    matchs.forEach((match, index) => {
        html += `
        <div style="display:flex; justify-content:space-between; align-items:center; background:#1a1a1a; margin:10px 0; padding:15px; border-radius:12px; border: 1px solid #2d2d2d;">
            <span style="width:40%; text-align:right; color:#fff; font-family:sans-serif; font-size:16px;">${match.dom}</span>
            <div style="display:flex; gap:8px;">
                <input type="number" value="${match.scoreDom}" oninput="mettreAJourScore(${index}, 'dom', this.value)" style="width:40px; height:35px; text-align:center; background:#333; color:#fff; border:none; border-radius:6px; font-size:16px;">
                <input type="number" value="${match.scoreExt}" oninput="mettreAJourScore(${index}, 'ext', this.value)" style="width:40px; height:35px; text-align:center; background:#333; color:#fff; border:none; border-radius:6px; font-size:16px;">
            </div>
            <span style="width:40%; text-align:left; color:#fff; font-family:sans-serif; font-size:16px;">${match.ext}</span>
        </div>`;
    });
    conteneur.innerHTML = html;
}

function mettreAJourScore(indexMatch, type, valeur) {
    if (donneesJournees[journeeActuelle] && donneesJournees[journeeActuelle][indexMatch]) {
        if (type === 'dom') donneesJournees[journeeActuelle][indexMatch].scoreDom = valeur;
        if (type === 'ext') donneesJournees[journeeActuelle][indexMatch].scoreExt = valeur;
        localStorage.setItem('scores-j' + journeeActuelle + '-' + indexMatch + '-' + type, valeur);
    }
}

function chargerScoresLocaux() {
    for (let j = 1; j <= totalJournees; j++) {
        if (!donneesJournees[j]) continue;
        donneesJournees[j].forEach((match, index) => {
            let sDom = localStorage.getItem('scores-j' + j + '-' + index + '-dom');
            let sExt = localStorage.getItem('scores-j' + j + '-' + index + '-ext');
            if (sDom !== null) match.scoreDom = sDom;
            if (sExt !== null) match.scoreExt = sExt;
        });
    }
}

window.onload = function() {
    genererCalendrier();
    chargerScoresLocaux();
    afficherMatchs();
    
    const btnPrec = document.getElementById("btn-prev") || document.querySelector("button");
    const btnSuiv = document.getElementById("btn-next") || document.querySelectorAll("button")[1];
    
    if(btnPrec) btnPrec.onclick = () => { if (journeeActuelle > 1) { journeeActuelle--; afficherMatchs(); } };
    if(btnSuiv) btnSuiv.onclick = () => { if (journeeActuelle < totalJournees) { journeeActuelle++; afficherMatchs(); } };
};
