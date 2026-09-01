const equipes = ["Leuze A","Naninne B","Wépion B","Rhisnes B","Aische B","Sauvenière A","St-Germain","Temploux","Emines B","Pt-Waret A","Mazy A","Gd-Leez B","Boninne A","Ligny B","FCO Namur","Loyers B"];
const c30 = {
    1:[["Leuze A","Naninne B"],["Wépion B","Rhisnes B"],["Aische B","Sauvenière A"],["St-Germain","Temploux"],["Emines B","Pt-Waret A"],["Mazy A","Gd-Leez B"],["Boninne A","Ligny B"],["FCO Namur","Loyers B"]],
    2:[["Rhisnes B","St-Germain"],["Naninne B","Mazy A"],["Sauvenière A","Wépion B"],["Loyers B","Aische B"],["Ligny B","FCO Namur"],["Gd-Leez B","Boninne A"],["Pt-Waret A","Leuze A"],["Temploux","Emines B"]],
    3:[["Leuze A","Sauvenière A"],["Wépion B","Loyers B"],["Aische B","Ligny B"],["St-Germain","Emines B"],["Mazy A","Pt-Waret A"],["Boninne A","Naninne B"],["FCO Namur","Gd-Leez B"],["Temploux","Rhisnes B"]],
    4:[["Naninne B","FCO Namur"],["Sauvenière A","Temploux"],["Loyers B","Leuze A"],["Ligny B","Wépion B"],["Gd-Leez B","Aische B"],["Pt-Waret A","Boninne A"],["Emines B","Rhisnes B"],["Mazy A","St-Germain"]],
    5:[["Leuze A","Ligny B"],["Wépion B","Gd-Leez B"],["Rhisnes B","Sauvenière A"],["Aische B","Pt-Waret A"],["St-Germain","Naninne B"],["Boninne A","Mazy A"],["FCO Namur","Loyers B"],["Temploux","Emines B"]],
    6:[["Naninne B","Wépion B"],["Loyers B","Ligny B"],["Mazy A","Aische B"],["Gd-Leez B","Leuze A"],["Pt-Waret A","Rhisnes B"],["Sauvenière A","Emines B"],["Boninne A","St-Germain"],["Ligny B","Temploux"]],
    7:[["Leuze A","Naninne B"],["Wépion B","Pt-Waret A"],["Rhisnes B","Mazy A"],["Aische B","Boninne A"],["St-Germain","Sauvenière A"],["Emines B","Loyers B"],["FCO Namur","Ligny B"],["Temploux","Gd-Leez B"]],
    8:[["Naninne B","Emines B"],["Mazy A","Wépion B"],["Boninne A","Rhisnes B"],["FCO Namur","Aische B"],["Ligny B","Leuze A"],["Gd-Leez B","St-Germain"],["Pt-Waret A","Sauvenière A"],["Loyers B","Temploux"]],
    9:[["Leuze A","FCO Namur"],["Wépion B","Boninne A"],["Rhisnes B","Aische B"],["Sauvenière A","Naninne B"],["St-Germain","Pt-Waret A"],["Emines B","Ligny B"],["Gd-Leez B","Mazy A"],["Temploux","Loyers B"]],
    10:[["Aische B","Leuze A"],["Boninne A","Wépion B"],["FCO Namur","Rhisnes B"],["Ligny B","Sauvenière A"],["Naninne B","Temploux"],["Mazy A","Emines B"],["Loyers B","Gd-Leez B"],["Pt-Waret A","St-Germain"]]
};
const c30Suite = {
    11:[["Leuze A","Wépion B"],["Rhisnes B","Aische B"],["Sauvenière A","Boninne A"],["St-Germain","FCO Namur"],["Emines B","Gd-Leez B"],["Pt-Waret A","Naninne B"],["Temploux","Ligny B"],["Mazy A","Loyers B"]],
    12:[["Wépion B","Leuze A"],["Aische B","St-Germain"],["Boninne A","Emines B"],["FCO Namur","Pt-Waret A"],["Ligny B","Mazy A"],["Gd-Leez B","Sauvenière A"],["Loyers B","Rhisnes B"],["Naninne B","Temploux"]],
    13:[["Leuze A","Rhisnes B"],["Wépion B","Aische B"],["Sauvenière A","St-Germain"],["Emines B","FCO Namur"],["Pt-Waret A","Ligny B"],["Mazy A","Boninne A"],["Gd-Leez B","Naninne B"],["Temploux","Loyers B"]],
    14:[["Leuze A","Aische B"],["Rhisnes B","Wépion B"],["Sauvenière A","Mazy A"],["St-Germain","Ligny B"],["Emines B","Boninne A"],["Pt-Waret A","Gd-Leez B"],["Temploux","FCO Namur"],["Loyers B","Naninne B"]],
    15:[["Wépion B","St-Germain"],["Aische B","Emines B"],["Boninne A","Leuze A"],["FCO Namur","Sauvenière A"],["Ligny B","Pt-Waret A"],["Mazy A","Naninne B"],["Gd-Leez B","Rhisnes B"],["Loyers B","Temploux"]],
    16:[["Naninne B","Leuze A"],["Rhisnes B","Wépion B"],["Sauvenière A","Aische B"],["Temploux","St-Germain"],["Pt-Waret A","Emines B"],["Gd-Leez B","Mazy A"],["Ligny B","Boninne A"],["Loyers B","FCO Namur"]],
    17:[["St-Germain","Rhisnes B"],["Mazy A","Naninne B"],["Wépion B","Sauvenière A"],["Aische B","Loyers B"],["FCO Namur","Ligny B"],["Boninne A","Gd-Leez B"],["Leuze A","Pt-Waret A"],["Emines B","Temploux"]],
    18:[["Sauvenière A","Leuze A"],["Loyers B","Wépion B"],["Ligny B","Aische B"],["Emines B","St-Germain"],["Pt-Waret A","Mazy A"],["Naninne B","Boninne A"],["Gd-Leez B","FCO Namur"],["Rhisnes B","Temploux"]],
    19:[["FCO Namur","Naninne B"],["Temploux","Sauvenière A"],["Leuze A","Loyers B"],["Wépion B","Ligny B"],["Aische B","Gd-Leez B"],["Boninne A","Pt-Waret A"],["Rhisnes B","Emines B"],["St-Germain","Mazy A"]],
    20:[["Ligny B","Leuze A"],["Gd-Leez B","Wépion B"],["Sauvenière A","Rhisnes B"],["Pt-Waret A","Aische B"],["Naninne B","St-Germain"],["Mazy A","Boninne A"],["Loyers B","FCO Namur"],["Emines B","Temploux"]],
    21:[["Wépion B","Naninne B"],["Ligny B","Loyers B"],["Aische B","Mazy A"],["Leuze A","Gd-Leez B"],["Rhisnes B","Pt-Waret A"],["Emines B","Sauvenière A"],["St-Germain","Boninne A"],["Temploux","Ligny B"]],
    22:[["Naninne B","Leuze A"],["Pt-Waret A","Wépion B"],["Mazy A","Rhisnes B"],["Boninne A","Aische B"],["Sauvenière A","St-Germain"],["Loyers B","Emines B"],["Ligny B","FCO Namur"],["Gd-Leez B","Temploux"]],
    23:[["Emines B","Naninne B"],["Wépion B","Mazy A"],["Rhisnes B","Boninne A"],["Aische B","FCO Namur"],["Leuze A","Ligny B"],["St-Germain","Gd-Leez B"],["Sauvenière A","Pt-Waret A"],["Temploux","Loyers B"]],
    24:[["FCO Namur","Leuze A"],["Boninne A","Wépion B"],["Aische B","Rhisnes B"],["Naninne B","Sauvenière A"],["Pt-Waret A","St-Germain"],["Ligny B","Emines B"],["Mazy A","Gd-Leez B"],["Loyers B","Temploux"]],
    25:[["Leuze A","Aische B"],["Wépion B","Boninne A"],["Rhisnes B","FCO Namur"],["Sauvenière A","Ligny B"],["Temploux","Naninne B"],["Emines B","Mazy A"],["Gd-Leez B","Loyers B"],["St-Germain","Pt-Waret A"]],
    26:[["Wépion B","Leuze A"],["Aische B","Rhisnes B"],["Boninne A","Sauvenière A"],["FCO Namur","St-Germain"],["Gd-Leez B","Emines B"],["Naninne B","Pt-Waret A"],["Ligny B","Temploux"],["Loyers B","Mazy A"]],
    27:[["Leuze A","Wépion B"],["St-Germain","Aische B"],["Emines B","Boninne A"],["Pt-Waret A","FCO Namur"],["Mazy A","Ligny B"],["Sauvenière A","Gd-Leez B"],["Rhisnes B","Loyers B"],["Temploux","Naninne B"]],
    28:[["Rhisnes B","Leuze A"],["Aische B","Wépion B"],["St-Germain","Sauvenière A"],["FCO Namur","Emines B"],["Ligny B","Pt-Waret A"],["Boninne A","Mazy A"],["Naninne B","Gd-Leez B"],["Loyers B","Temploux"]],
    29:[["Aische B","Leuze A"],["Wépion B","Rhisnes B"],["Mazy A","Sauvenière A"],["Ligny B","St-Germain"],["Boninne A","Emines B"],["Gd-Leez B","Pt-Waret A"],["FCO Namur","Temploux"],["Naninne B","Loyers B"]],
    30:[["St-Germain","Wépion B"],["Emines B","Aische B"],["Leuze A","Boninne A"],["Sauvenière A","FCO Namur"],["Pt-Waret A","Ligny B"],["Naninne B","Mazy A"],["Rhisnes B","Gd-Leez B"],["Temploux","Loyers B"]]
};let jj = {}; const tot = 30; let jAct = 1; let ong = 'general';
function genererCalendrierComplet() {
    const calendrierComplet = { ...c30, ...c30Suite };
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
        html += `<div class="${cl}"><span class="team-name dom">${m.dom}</span><div class="score-container"><input type="number" class="score-input" value="${m.scoreDom}" oninput="majS(${i},'dom',this.value)"><input type="number" class="score-input" value="${m.scoreExt}" oninput="majS(${i},'ext',this.value)"></div><span class="team-name ext">${m.ext}</span></div>`;
    });
    c.innerHTML = html;
}
function majS(i, t, v) {
    if (jj[jAct] && jj[jAct][i]) {
        if (t === 'dom') jj[jAct][i].scoreDom = v; else jj[jAct][i].scoreExt = v;
        localStorage.setItem('s-j' + jAct + '-m' + i + '-' + t, v);
        calc();
    }
}
function calc() {
    let cl = equipes.map(n => ({ nom: n, j: 0, g: 0, diff: 0, pts: 0 }));
    for (let j = 1; j <= tot; j++) {
        if (ong === 't1' && (j < 1 || j > 10)) continue;
        if (ong === 't2' && (j < 11 || j > 20)) continue;
        if (ong === 't3' && (j < 21 || j > 30)) continue;
        if (!jj[j]) continue;
        jj[j].forEach(m => {
            if (m.scoreDom !== "" && m.scoreExt !== "") {
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
function loadS() {
    for (let j = 1; j <= tot; j++) {
        if (!jj[j]) continue;
        jj[j].forEach((m, i) => {
            let d = localStorage.getItem('s-j' + j + '-m' + i + '-dom'), e = localStorage.getItem('s-j' + j + '-m' + i + '-ext');
            if (d !== null) m.scoreDom = d; if (e !== null) m.scoreExt = e;
        });
    }
}
window.onload = function() {
    genererCalendrierComplet(); loadS(); afficherMatchs(); calc();
    const bp = document.getElementById("btn-prev"), bn = document.getElementById("btn-next");
    if (bp) bp.onclick = () => { if (jAct > 1) { jAct--; afficherMatchs(); } };
    if (bn) bn.onclick = () => { if (jAct < tot) { jAct++; afficherMatchs(); } };
};

