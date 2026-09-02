const urlCloud = "https://kvdb.io/BERTOU59/p3b-namur-live";

async function chargerLive() {
    try {
        const rep = await fetch(urlCloud);
        const txt = await rep.text();
        if (!txt || txt.trim() === "") return;

        const jj = JSON.parse(txt);
        const zone = document.getElementById("liste-live");
        zone.innerHTML = "";

        for (let j = 1; j <= 30; j++) {
            if (!jj[j]) continue;

            const titre = document.createElement("h3");
            titre.textContent = "Journée " + j;
            zone.appendChild(titre);

            jj[j].forEach(m => {
                const div = document.createElement("div");
                div.className = "match-live";
                div.textContent = `${m.visite} ${m.score} ${m.visiteur}`;
                zone.appendChild(div);
            });
        }
    } catch (e) {}
}

chargerLive();
