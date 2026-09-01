const equipes = ["Leuze A", "Naninne B", "Wépion B", "Rhisnes B", "Aische B", "Sauvenière A", "St-Germain", "Temploux", "Emines B", "Pt-Waret A", "Mazy A", "Gd-Leez B", "Boninne A", "Ligny B", "FCO Namur", "Loyers B"];

const cal30 = {
    1: [[ "Leuze A", "Naninne B" ], [ "Wépion B", "Rhisnes B" ], [ "Aische B", "Sauvenière A" ], [ "St-Germain", "Temploux" ], [ "Emines B", "Pt-Waret A" ], [ "Mazy A", "Gd-Leez B" ], [ "Boninne A", "Ligny B" ], [ "FCO Namur", "Loyers B" ]],
    2: [[ "Rhisnes B", "St-Germain" ], [ "Naninne B", "Mazy A" ], [ "Sauvenière A", "Wépion B" ], [ "Loyers B", "Aische B" ], [ "Ligny B", "FCO Namur" ], [ "Gd-Leez B", "Boninne A" ], [ "Pt-Waret A", "Leuze A" ], [ "Temploux", "Emines B" ]],
    3: [[ "Leuze A", "Temploux" ], [ "Wépion B", "St-Germain" ], [ "Aische B", "Ligny B" ], [ "Sauvenière A", "Loyers B" ], [ "Emines B", "Rhisnes B" ], [ "Mazy A", "Pt-Waret A" ], [ "Boninne A", "Naninne B" ], [ "FCO Namur", "Gd-Leez B" ]],
    4: [[ "Rhisnes B", "Leuze A" ], [ "Naninne B", "FCO Namur" ], [ "St-Germain", "Emines B" ], [ "Loyers B", "Wépion B" ], [ "Ligny B", "Sauvenière A" ], [ "Gd-Leez B", "Aische B" ], [ "Pt-Waret A", "Boninne A" ], [ "Temploux", "Mazy A" ]],
    5: [[ "Leuze A", "St-Germain" ], [ "Wépion B", "Emines B" ], [ "Aische B", "Naninne B" ], [ "Sauvenière A", "Gd-Leez B" ], [ "Loyers B", "Ligny B" ], [ "Mazy A", "Rhisnes B" ], [ "Boninne A", "Temploux" ], [ "FCO Namur", "Pt-Waret A" ]],
    6: [[ "Rhisnes B", "Boninne A" ], [ "Naninne B", "Sauvenière A" ], [ "St-Germain", "Mazy A" ], [ "Emines B", "Leuze A" ], [ "Ligny B", "Wépion B" ], [ "Gd-Leez B", "Loyers B" ], [ "Pt-Waret A", "Aische B" ], [ "Temploux", "FCO Namur" ]],
    7: [[ "Wépion B", "Leuze A" ], [ "Aische B", "Temploux" ], [ "Sauvenière A", "Pt-Waret A" ], [ "Loyers B", "Naninne B" ], [ "Ligny B", "Gd-Leez B" ], [ "Mazy A", "Emines B" ], [ "Boninne A", "St-Germain" ], [ "FCO Namur", "Rhisnes B" ]],
    8: [[ "Rhisnes B", "Aische B" ], [ "Leuze A", "Mazy A" ], [ "Naninne B", "Ligny B" ], [ "St-Germain", "FCO Namur" ], [ "Emines B", "Boninne A" ], [ "Gd-Leez B", "Wépion B" ], [ "Pt-Waret A", "Loyers B" ], [ "Temploux", "Sauvenière A" ]],
    9: [[ "Wépion B", "Mazy A" ], [ "Aische B", "St-Germain" ], [ "Sauvenière A", "Rhisnes B" ], [ "Loyers B", "Temploux" ], [ "Ligny B", "Pt-Waret A" ], [ "Gd-Leez B", "Naninne B" ], [ "Boninne A", "Leuze A" ], [ "FCO Namur", "Emines B" ]],
    10: [[ "Rhisnes B", "Loyers B" ], [ "St-Germain", "Sauvenière A" ], [ "Emines B", "Aische B" ], [ "Leuze A", "FCO Namur" ], [ "Mazy A", "Boninne A" ], [ "Naninne B", "Wépion B" ], [ "Pt-Waret A", "Gd-Leez B" ], [ "Temploux", "Ligny B" ]]
};
const cal30Suite = {
    11: [[ "Naninne B", "Pt-Waret A" ], [ "Wépion B", "Boninne A" ], [ "Loyers B", "St-Germain" ], [ "FCO Namur", "Mazy A" ], [ "Aische B", "Leuze A" ], [ "Sauvenière A", "Emines B" ], [ "Ligny B", "Rhisnes B" ], [ "Gd-Leez B", "Temploux" ]],
    12: [[ "Rhisnes B", "Gd-Leez B" ], [ "Leuze A", "Sauvenière A" ], [ "St-Germain", "Ligny B" ], [ "Emines B", "Loyers B" ], [ "Mazy A", "Aische B" ], [ "Boninne A", "FCO Namur" ], [ "Pt-Waret A", "Wépion B" ], [ "Temploux", "Naninne B" ]],
    13: [[ "Naninne B", "Rhisnes B" ], [ "Wépion B", "FCO Namur" ], [ "Loyers B", "Leuze A" ], [ "Aische B", "Boninne A" ], [ "Sauvenière A", "Mazy A" ], [ "Ligny B", "Emines B" ], [ "Gd-Leez B", "St-Germain" ], [ "Pt-Waret A", "Temploux" ]],
    14: [[ "Rhisnes B", "Pt-Waret A" ], [ "Leuze A", "Ligny B" ], [ "Wépion B", "Temploux" ], [ "St-Germain", "Naninne B" ], [ "Emines B", "Gd-Leez B" ], [ "Mazy A", "Loyers B" ], [ "FCO Namur", "Aische B" ], [ "Boninne A", "Sauvenière A" ]],
    15: [[ "Naninne B", "Emines B" ], [ "Loyers B", "Boninne A" ], [ "Aische B", "Wépion B" ], [ "Sauvenière A", "FCO Namur" ], [ "Ligny B", "Mazy A" ], [ "Gd-Leez B", "Leuze A" ], [ "Pt-Waret A", "St-Germain" ], [ "Temploux", "Rhisnes B" ]],
    16: [[ "Naninne B", "Leuze A" ], [ "Rhisnes B", "Wépion B" ], [ "Loyers B", "FCO Namur" ], [ "Sauvenière A", "Aische B" ], [ "Temploux", "St-Germain" ], [ "Pt-Waret A", "Emines B" ], [ "Gd-Leez B", "Mazy A" ], [ "Ligny B", "Boninne A" ]],
    17: [[ "Wépion B", "Sauvenière A" ], [ "Leuze A", "Pt-Waret A" ], [ "St-Germain", "Rhisnes B" ], [ "FCO Namur", "Ligny B" ], [ "Mazy A", "Naninne B" ], [ "Emines B", "Temploux" ], [ "Aische B", "Loyers B" ], [ "Boninne A", "Gd-Leez B" ]],
    18: [[ "Rhisnes B", "Emines B" ], [ "Naninne B", "Boninne A" ], [ "Loyers B", "Sauvenière A" ], [ "St-Germain", "Wépion B" ], [ "Ligny B", "Aische B" ], [ "Temploux", "Leuze A" ], [ "Pt-Waret A", "Mazy A" ], [ "Gd-Leez B", "FCO Namur" ]],
    19: [[ "Leuze A", "Rhisnes B" ], [ "Wépion B", "Loyers B" ], [ "Emines B", "St-Germain" ], [ "Sauvenière A", "Ligny B" ], [ "Aische B", "Gd-Leez B" ], [ "FCO Namur", "Naninne B" ], [ "Boninne A", "Pt-Waret A" ], [ "Mazy A", "Temploux" ]],
    20: [[ "Naninne B", "Aische B" ], [ "Gd-Leez B", "Sauvenière A" ], [ "Ligny B", "Loyers B" ], [ "St-Germain", "Leuze A" ], [ "Rhisnes B", "Mazy A" ], [ "Temploux", "Boninne A" ], [ "Pt-Waret A", "FCO Namur" ], [ "Emines B", "Wépion B" ]]
};
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
