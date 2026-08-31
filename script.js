function gen() { 
    document.getElementById("titre-journee").innerText = `Journée ${journeeActuelle}`; 
    document.getElementById("date-j").innerText = D[journeeActuelle]; 
    let h = ""; 
    if(M[journeeActuelle]) { 
        M[journeeActuelle].forEach((m, i) => { 
            let cDom = m.dom === "FCO Namur" ? "color:#ffff00;font-weight:bold;" : "color:#fff;";
            let cExt = m.ext === "FCO Namur" ? "color:#ffff00;font-weight:bold;" : "color:#fff;";
            h += `<div class="match-card ${m.dom === "FCO Namur" || m.ext === "FCO Namur" ? "match-fco-namur" : ""}"><span class="equipe domicile" style="${cDom}">${m.dom}</span><div class="score-container"><input type="tel" class="score-input" style="width:26px;height:26px;font-size:13px;text-align:center;background:#2d2d2d;color:#fff;border:1px solid #444;border-radius:4px;padding:0;" value="${m.sD}" onchange="enregistrerScore(${i}, 'dom', this.value)"><input type="tel" class="score-input" style="width:26px;height:26px;font-size:13px;text-align:center;background:#2d2d2d;color:#fff;border:1px solid #444;border-radius:4px;padding:0;" value="${m.sE}" onchange="enregistrerScore(${i}, 'ext', this.value)"></div><span class="equipe exterior" style="${cExt}">${m.ext}</span></div>`; 
        }); 
    } 
    document.getElementById("liste-matchs").innerHTML = h; 
}
