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
