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
        <div style="display:flex; justify-content:space-between; align-items:center; background:#1e1e1e; margin:8px 0; padding:12px; border-radius:8px;">
            <span style="width:35%; text-align:right; color:#fff;">${match.dom}</span>
            <input type="number" value="${match.scoreDom}" oninput="mettreAJourScore(${index}, 'dom', this.value)" style="width:45px; text-align:center; background:#333; color:#fff; border:none; padding:5px; border-radius:4px;">
            <input type="number" value="${match.scoreExt}" oninput="mettreAJourScore(${index}, 'ext', this.value)" style="width:45px; text-align:center; background:#333; color:#fff; border:none; padding:5px; border-radius:4px;">
            <span style="width:35%; text-align:left; color:#fff;">${match.ext}</span>
        </div>`;
    });
    conteneur.innerHTML = html;
}

function mettreAJourScore(indexMatch, type, valeur) {
    if (donneesJournees[journeeActuelle] && donneesJournees[journeeActuelle][indexMatch]) {
        if (type === 'dom') donneesJournees[journeeActuelle][indexMatch].scoreDom = valeur;
        if (type === 'ext') donneesJournees[journeeActuelle][indexMatch].scoreExt = valeur;
    }
}

window.onload = function() {
    genererCalendrier();
    afficherMatchs();
    
    const boutons = document.getElementsByTagName("button");
    for (let btn of boutons) {
        if (btn.innerText.includes("Préc")) {
            btn.onclick = () => { if (journeeActuelle > 1) { journeeActuelle--; afficherMatchs(); } };
        }
        if (btn.innerText.includes("Suiv")) {
            btn.onclick = () => { if (journeeActuelle < totalJournees) { journeeActuelle++; afficherMatchs(); } };
        }
    }
};
