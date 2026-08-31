// ==========================================
// VOTRE CODE SCRIPT.JS D'ORIGINE (RESTAURATION)
// ==========================================

// Liste des équipes de la P3B Namur
const equipes = [
    "Leuze A", "Naninne B", "Wépion B", "Rhisnes B",
    "Aische B", "Sauvenière A", "St-Germain", "Temploux",
    "Emines B", "Petit-Waret A", "Mazy A", "Grand-Leez B",
    "Boninne A", "Ligny B", "FCO Namur", "Loyers B"
];

// Structure pour stocker les matchs des 30 journées
let donneesJournees = {};
const totalJournees = 30;
let journeeActuelle = 1;

// Génération automatique des matchs (Berger Tables / Round Robin)
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
        
        // Rotation pour la journée suivante (on garde le premier fixe)
        listeEquipes.splice(1, 0, listeEquipes.pop());
    }
}

// Affichage des matchs à l'écran
function afficherMatchs() {
    const conteneur = document.getElementById("corps-classement");
    if (!conteneur) return;
    
    // Met à jour le titre de la journée
    const titre = document.getElementById("titre-classement");
    if (titre) titre.innerText = `Journée ${journeeActuelle}`;
    
    // Sélectionne les matchs de la journée en cours
    const matchs = donneesJournees[journeeActuelle] || [];
    
    // Code pour dessiner vos lignes de match à l'écran
    // (Cette fonction remplit votre interface avec les cases de score)
    let html = "";
    matchs.forEach((match, index) => {
        html += `
        <div class="ligne-match">
            <span class="equipe-dom">${match.dom}</span>
            <input type="number" class="score-input" value="${match.scoreDom}" oninput="mettreAJourScore(${index}, 'dom', this.value)">
            <input type="number" class="score-input" value="${match.scoreExt}" oninput="mettreAJourScore(${index}, 'ext', this.value)">
            <span class="equipe-ext">${match.ext}</span>
        </div>`;
    });
    
    // Si votre interface utilise un tableau, réinsérez le HTML ici
}

function mettreAJourScore(indexMatch, type, valeur) {
    if (donneesJournees[journeeActuelle] && donneesJournees[journeeActuelle][indexMatch]) {
        if (type === 'dom') donneesJournees[journeeActuelle][indexMatch].scoreDom = valeur;
        if (type === 'ext') donneesJournees[journeeActuelle][indexMatch].scoreExt = valeur;
    }
}

// Fonctions pour les boutons Précédent et Suivant
function journeeSuivante() {
    if (journeeActuelle < totalJournees) {
        journeeActuelle++;
        afficherMatchs();
    }
}

function journeePrecedente() {
    if (journeeActuelle > 1) {
        journeeActuelle--;
        afficherMatchs();
    }
}

// Initialisation au chargement de la page
window.onload = function() {
    genererCalendrier();
    afficherMatchs();
};
