// Chargement des données JSON
async function chargerDonnees() {
    const response = await fetch('saison-26-27.json');
    const data = await response.json();
    return data;
}

// Affichage des matchs
function afficherMatchs(journee, data) {
    const listeMatchs = document.getElementById('liste-matchs');
    listeMatchs.innerHTML = '';

    data.matchs[journee].forEach(match => {
        const div = document.createElement('div');
        div.className = 'match';

        div.innerHTML = `
            <span class="equipe">${match.visite}</span>
            <span class="score">${match.score}</span>
            <span class="equipe">${match.visiteur}</span>
        `;

        listeMatchs.appendChild(div);
    });
}

// Calcul du classement
function calculerClassement(data) {
    const classement = {};

    data.equipes.forEach(equipe => {
        classement[equipe] = { points: 0, joues: 0, gagnes: 0, perdus: 0 };
    });

    Object.values(data.matchs).forEach(journee => {
        journee.forEach(match => {
            const [scoreA, scoreB] = match.score.split('-').map(Number);

            classement[match.visite].joues++;
            classement[match.visiteur].joues++;

            if (scoreA > scoreB) {
                classement[match.visite].gagnes++;
                classement[match.visiteur].perdus++;
                classement[match.visite].points += 3;
            } else if (scoreB > scoreA) {
                classement[match.visiteur].gagnes++;
                classement[match.visite].perdus++;
                classement[match.visiteur].points += 3;
            } else {
                classement[match.visite].points++;
                classement[match.visiteur].points++;
            }
        });
    });

    return classement;
}

// Affichage du classement
function afficherClassement(classement) {
    const tableau = document.getElementById('tableau-classement');
    tableau.innerHTML = '';

    const equipesTriees = Object.entries(classement).sort((a, b) => b[1].points - a[1].points);

    equipesTriees.forEach(([equipe, stats], index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${equipe}</td>
            <td>${stats.points}</td>
            <td>${stats.joues}</td>
            <td>${stats.gagnes}</td>
            <td>${stats.perdus}</td>
        `;

        tableau.appendChild(row);
    });
}

// Changer de journée
function changerJournee(direction, data) {
    if (direction === 'prec' && data.journee > 1) {
        data.journee--;
    } else if (direction === 'suiv' && data.journee < data.totalJournees) {
        data.journee++;
    }

    afficherMatchs(data.journee, data);
}

// Initialisation
async function init() {
    const data = await chargerDonnees();
    data.journee = 1;
    data.totalJournees = Object.keys(data.matchs).length;

    afficherMatchs(data.journee, data);

    const classement = calculerClassement(data);
    afficherClassement(classement);

    document.getElementById('prec').onclick = () => changerJournee('prec', data);
    document.getElementById('suiv').onclick = () => changerJournee('suiv', data);
}

init();
