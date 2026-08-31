// Connexion à la base de données invisible (gratuite et publique)
const bucket = kvdb.bucket('ol-namur-9384');

// 1. LIRE LE SCORE (S'exécute dès qu'un supporter ouvre l'application)
function chargerScoreEnDirect() {
    bucket.get('scores').then(valeur => {
        if (valeur) {
            const scores = JSON.parse(valeur);
            // Met à jour l'affichage sur le smartphone
            if(document.getElementById('score-domicile')) {
                document.getElementById('score-domicile').innerText = scores.dom;
            }
            if(document.getElementById('score-exterieur')) {
                document.getElementById('score-exterieur').innerText = scores.ext;
            }
        }
    }).catch(err => console.log("Erreur de lecture :", err));
}

// 2. ENREGISTRER LE SCORE (À appeler quand VOUS modifiez le score)
// Ajoutez cette fonction sur vos boutons d'action si nécessaire
function sauvegarderScoreEnDirect(nouveauScoreDom, nouveauScoreExt) {
    const scores = { dom: nouveauScoreDom, ext: nouveauScoreExt };
    
    bucket.set('scores', JSON.stringify(scores))
        .then(() => {
            console.log("Score mis à jour pour tout le monde !");
            chargerScoreEnDirect(); // Recharge l'affichage
        })
        .catch(err => alert("Erreur d'enregistrement : " + err));
}

// Lancer la lecture du score dès que la page s'ouvre
window.onload = function() {
    chargerScoreEnDirect();
    // Rafraîchit le score automatiquement toutes les 10 secondes pour les supporters
    setInterval(chargerScoreEnDirect, 10000); 
};
// Connexion à la base de données en ligne
const bucket = kvdb.bucket('ol-namur-9384-p3b');

// Sauvegarde automatique dès que vous tapez un score
document.addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT') {
        sauvegarderTousLesScores();
    }
});

function sauvegarderTousLesScores() {
    // Récupère la journée actuelle (ex: "Journée 1")
    const titreJournee = document.querySelector('h2, h3, .journee, #journee')?.innerText || "Journee-1";
    const cleUnique = "scores-" + titreJournee.replace(/[^a-zA-Z0-9]/g, "-");

    // Rassemble tous les scores écrits à l'écran
    const tousLesInputs = Array.from(document.querySelectorAll('input'));
    const valeursScores = tousLesInputs.map(input => input.value);

    // Envoie les scores sur internet
    bucket.set(cleUnique, JSON.stringify(valeursScores))
        .then(() => console.log("Scores synchronisés en direct !"))
        .catch(err => console.error("Erreur de sauvegarde :", err));
}

// Charge les scores dès qu'on ouvre l'application ou qu'on change de journée
function chargerLesScoresEnDirect() {
    const titreJournee = document.querySelector('h2, h3, .journee, #journee')?.innerText || "Journee-1";
    const cleUnique = "scores-" + titreJournee.replace(/[^a-zA-Z0-9]/g, "-");

    bucket.get(cleUnique).then(valeur => {
        if (valeur) {
            const scoresEnregistres = JSON.parse(valeur);
            const tousLesInputs = document.querySelectorAll('input');
            tousLesInputs.forEach((input, index) => {
                if (scoresEnregistres[index] !== undefined) {
                    input.value = scoresEnregistres[index];
                }
            });
        }
    }).catch(err => console.error("Erreur de chargement :", err));
}

// Vérifie les scores toutes les 5 secondes pour les supporters
setInterval(chargerLesScoresEnDirect, 5000);
window.addEventListener('load', chargerLesScoresEnDirect);

// Relance le chargement si vous cliquez sur "Préc." ou "Suiv."
document.addEventListener('click', function(e) {
    setTimeout(chargerLesScoresEnDirect, 100);
});
