const urlCloud = "https://kvdb.io/BERTOU59/p3b-namur-live";

let jj = {};
const tot = 30;
let jAct = 1;

async function chargerBase() {
    try {
        const rep = await fetch(urlCloud);
        const txt = await rep.text();
        if (!txt || txt.trim() === "") {
            jj = {};
            for (let j = 1; j <= tot; j++) jj[j] = [];
        } else {
            jj = JSON.parse(txt);
        }
        afficherJournee();
    } catch (e) {}
}

async function sauverBase() {
    try {
        await fetch(urlCloud, {
            method: "POST",
            body: JSON.stringify(jj)
        });
    } catch (e) {}
}

function afficherJournee() {
    const zone = document.getElementById("liste-admin");
    zone.innerHTML = "";
    jj[jAct].forEach((m, i) => {
        const div = document.createElement("div");
        div.className = "match-admin";
        div.innerHTML = `
            <span>${m.visite}</span>
            <input type="text" value="${m.score}" data-i="${i}" class="champ-score">
            <span>${m.visiteur}</span>
        `;
        zone.appendChild(div);
    });
}

document.addEventListener("input", e => {
    if (e.target.classList.contains("champ-score")) {
        const i = parseInt(e.target.dataset.i, 10);
        jj[jAct][i].score = e.target.value;
    }
});

function prec() {
    if (jAct > 1) {
        jAct--;
        afficherJournee();
    }
}

function suiv() {
    if (jAct < tot) {
        jAct++;
        afficherJournee();
    }
}

document.getElementById("btn-sauver").addEventListener("click", async () => {
    await sauverBase();
    alert("Scores enregistrés.");
});

chargerBase();
