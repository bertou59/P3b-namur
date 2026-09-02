let jj = {};
const tot = 30;
let jAct = 1;
let ong = 'general';

const urlCloud = "https://kvdb.io/BERTOU59/p3b-namur-live";

async function chargerEnDirect() {
    try {
        const rep = await fetch(urlCloud);
        const txt = await rep.text();
        if (!txt || txt.trim() === "") return;
        jj = JSON.parse(txt);
        afficherScores();
        afficherClassement();
    } catch (e) {}
}

async function sauverScores() {
    try {
        await fetch(urlCloud, {
            method: "POST",
            body: JSON.stringify(jj)
        });
    } catch (e) {}
}

function afficherScores() {
    const liste = document.getElementById("liste-matchs");
    liste.innerHTML = "";
    jj[jAct].forEach(m => {
        const div = document.createElement("div");
        div.className = "match";
        div.innerHTML = `
            <span class="equipe">${m.visite}</span>
            <span class="score">${m.score}</span>
            <span class="equipe">${m.visiteur}</span>
        `;
        liste.appendChild(div);
    });
}

function afficherClassement() {
    const tab = document.getElementById("tableau-classement");
    tab.innerHTML = "";
    const cls = {};

    jj[1].forEach(m => {
        cls[m.visite] = { pts: 0, j: 0, g: 0, p: 0 };
        cls[m.visiteur] = { pts: 0, j: 0, g: 0, p: 0 };
    });

    for (let j = 1; j <= tot; j++) {
        jj[j].forEach(m => {
            const [a, b] = m.score.split("-").map(Number);
            cls[m.visite].j++;
            cls[m.visiteur].j++;
            if (a > b) {
                cls[m.visite].g++;
                cls[m.visiteur].p++;
                cls[m.visite].pts += 3;
            } else if (b > a) {
                cls[m.visiteur].g++;
                cls[m.visite].p++;
                cls[m.visiteur].pts += 3;
            } else {
                cls[m.visite].pts++;
                cls[m.visiteur].pts++;
            }
        });
    }

    const tri = Object.entries(cls).sort((a, b) => b[1].pts - a[1].pts);

    tri.forEach(([eq, s], i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${eq}</td>
            <td>${s.pts}</td>
            <td>${s.j}</td>
            <td>${s.g}</td>
            <td>${s.p}</td>
        `;
        tab.appendChild(tr);
    });
}

function changerTranche(x) {
    ong = x;
    afficherClassement();
}

function prec() {
    if (jAct > 1) {
        jAct--;
        afficherScores();
    }
}

function suiv() {
    if (jAct < tot) {
        jAct++;
        afficherScores();
    }
}

setInterval(chargerEnDirect, 15000);

chargerEnDirect();
