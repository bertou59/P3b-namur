const cal30Fin = {
    21: [[ "Leuze A", "Emines B" ], [ "Wépion B", "Ligny B" ], [ "Boninne A", "Rhisnes B" ], [ "Mazy A", "St-Germain" ], [ "Loyers B", "Gd-Leez B" ], [ "Sauvenière A", "Naninne B" ], [ "Aische B", "Pt-Waret A" ], [ "FCO Namur", "Temploux" ]],
    22: [[ "Naninne B", "Loyers B" ], [ "Rhisnes B", "FCO Namur" ], [ "Leuze A", "Wépion B" ], [ "Temploux", "Aische B" ], [ "Pt-Waret A", "Sauvenière A" ], [ "Gd-Leez B", "Ligny B" ], [ "Emines B", "Mazy A" ], [ "St-Germain", "Boninne A" ]],
    23: [[ "Wépion B", "Gd-Leez B" ], [ "Aische B", "Rhisnes B" ], [ "FCO Namur", "St-Germain" ], [ "Boninne A", "Emines B" ], [ "Mazy A", "Leuze A" ], [ "Ligny B", "Naninne B" ], [ "Loyers B", "Pt-Waret A" ], [ "Sauvenière A", "Temploux" ]],
    24: [[ "Rhisnes B", "Sauvenière A" ], [ "Naninne B", "Gd-Leez B" ], [ "Leuze A", "Boninne A" ], [ "St-Germain", "Aische B" ], [ "Temploux", "Loyers B" ], [ "Pt-Waret A", "Ligny B" ], [ "Emines B", "FCO Namur" ], [ "Mazy A", "Wépion B" ]],
    25: [[ "Wépion B", "Naninne B" ], [ "Loyers B", "Rhisnes B" ], [ "Sauvenière A", "St-Germain" ], [ "Aische B", "Emines B" ], [ "FCO Namur", "Leuze A" ], [ "Boninne A", "Mazy A" ], [ "Gd-Leez B", "Pt-Waret A" ], [ "Ligny B", "Temploux" ]],
    26: [[ "Leuze A", "Aische B" ], [ "Rhisnes B", "Ligny B" ], [ "Emines B", "Sauvenière A" ], [ "St-Germain", "Loyers B" ], [ "Temploux", "Gd-Leez B" ], [ "Pt-Waret A", "Naninne B" ], [ "Mazy A", "FCO Namur" ], [ "Boninne A", "Wépion B" ]],
    27: [[ "Wépion B", "Pt-Waret A" ], [ "Naninne B", "Temploux" ], [ "Gd-Leez B", "Rhisnes B" ], [ "Ligny B", "St-Germain" ], [ "Loyers B", "Emines B" ], [ "Sauvenière A", "Leuze A" ], [ "Aische B", "Mazy A" ], [ "FCO Namur", "Boninne A" ]],
    28: [[ "Leuze A", "Loyers B" ], [ "Rhisnes B", "Naninne B" ], [ "Boninne A", "Aische B" ], [ "Mazy A", "Sauvenière A" ], [ "Emines B", "Ligny B" ], [ "St-Germain", "Gd-Leez B" ], [ "Temploux", "Pt-Waret A" ], [ "FCO Namur", "Wépion B" ]],
    29: [[ "Pt-Waret A", "Rhisnes B" ], [ "Naninne B", "St-Germain" ], [ "Gd-Leez B", "Emines B" ], [ "Ligny B", "Leuze A" ], [ "Loyers B", "Mazy A" ], [ "Sauvenière A", "Boninne A" ], [ "Aische B", "FCO Namur" ], [ "Temploux", "Wépion B" ]],
    30: [[ "St-Germain", "Wépion B" ], [ "Emines B", "Aische B" ], [ "Leuze A", "Boninne A" ], [ "Sauvenière A", "FCO Namur" ], [ "Pt-Waret A", "Ligny B" ], [ "Naninne B", "Mazy A" ], [ "Rhisnes B", "Gd-Leez B" ], [ "Temploux", "Loyers B" ]]
};

let jj = {}; const tot = 30; let jAct = 1; let ong = 'general';
const urlCloud = "https://jsonbin.io";
let aLeDroitDeModifier = false;

function genererCalendrierComplet() {
    const calendrierComplet = { ...cal30, ...cal30Suite, ...cal30Fin };
    for (let j = 1; j <= tot; j++) {
        jj[j] = calendrierComplet[j].map(m => ({ dom: m[0], ext: m[1], scoreDom: "", scoreExt: "" }));
    }
}

function afficherMatchs() {
    const c = document.getElementById("corps-matchs"); if (!c) return;
    document.getElementById("titre-classement").innerText = `Journée ${jAct}`;
    let html = "";
    (jj[jAct] || []).forEach((m, i) => {
        let cl = (m.dom === "FCO Namur" || m.ext === "FCO Namur") ? "match-row fco-namur-row-highlight" : "match-row";
        let desactive = aLeDroitDeModifier ? "" : " disabled";
        html += `<div class="${cl}"><span class="team-name dom">${m.dom}</span><div class="score-container"><input type="number" class="score-input" value="${m.scoreDom}"${desactive} oninput="majS(${i},'dom',this.value)"><input type="number" class="score-input" value="${m.scoreExt}"${desactive} oninput="majS(${i},'ext',this.value)"></div><span class="team-name ext">${m.ext}</span></div>`;
    });
    c.innerHTML = html;
}

function majS(i, t, v) {
    if (!aLeDroitDeModifier) return;
    if (jj[jAct] && jj[jAct][i]) {
        if (t === 'dom') jj[jAct][i].scoreDom = v; else jj[jAct][i].scoreExt = v;
        sauvegarderVersLeCloud();
        calc();
    }
}

function sauvegarderVersLeCloud() {
    fetch(urlCloud, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Bin-Private': 'false' },
        body: JSON.stringify(jj)
    }).catch(() => {});
}

function telechargerDuCloud() {
    fetch(urlCloud + '/latest').then(res => res.json()).then(res => {
        if (res.record) {
            jj = res.record;
            afficherMatchs(); calc();
        }
    }).catch(() => {});
}

function calc() {
    let cl = equipes.map(n => ({ nom: n, j: 0, g: 0, diff: 0, pts: 0 }));
    for (let j = 1; j <= tot; j++) {
        if (ong === 't1' && (j < 1 || j > 10)) continue;
        if (ong === 't2' && (j < 11 || j > 20)) continue;
        if (ong === 't3' && (j < 21 || j > 30)) continue;
        if (!jj[j]) continue;
        jj[j].forEach(m => {
            if (m.scoreDom !== "" && m.scoreExt !== "" && m.scoreDom !== null && m.scoreExt !== null) {
                let d = parseInt(m.scoreDom), e = parseInt(m.scoreExt);
                let ed = cl.find(x => x.nom === m.dom), ee = cl.find(x => x.nom === m.ext);
                if (ed && ee) {
                    ed.j++; ee.j++; ed.diff += (d - e); ee.diff += (e - d);
                    if (d > e) { ed.g++; ed.pts += 3; } else if (e > d) { ee.g++; ee.pts += 3; } else { ed.pts += 1; ee.pts += 1; }
                }
            }
        });
    }
    cl.sort((a, b) => b.pts - a.pts || b.g - a.g || b.diff - a.diff);
    const corps = document.getElementById("corps-classement"); if (!corps) return;
    let html = "";
    cl.forEach((eq, idx) => {
        let rowCl = eq.nom === "FCO Namur" ? ' class="fco-namur-row-highlight"' : '';
        html += `<tr${rowCl}><td>${idx + 1}</td><td style="text-align:left;">${eq.nom}</td><td>${eq.j}</td><td>${eq.g}</td><td>${eq.diff > 0 ? '+' + eq.diff : eq.diff}</td><td class="pts-color">${eq.pts}</td></tr>`;
    });
    corps.innerHTML = html;
}

function changerOnglet(type) {
    ong = type; document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById("titre-classement-tab").innerText = { general: "Classement Général", t1: "Classement Tranche 1", t2: "Classement Tranche 2", t3: "Classement Tranche 3" }[type];
    if (event && event.target) event.target.classList.add('active');
    calc();
}

window.onload = function() {
    genererCalendrierComplet();
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === '1234') {
        aLeDroitDeModifier = true;
    }
    telechargerDuCloud();
    setInterval(telechargerDuCloud, 30000);
    const bp = document.getElementById("btn-prev"), bn = document.getElementById("btn-next");
    if (bp) bp.onclick = () => { if (jAct > 1) { jAct--; afficherMatchs(); } };
    if (bn) bn.onclick = () => { if (jAct < tot) { jAct++; afficherMatchs(); } };
};
