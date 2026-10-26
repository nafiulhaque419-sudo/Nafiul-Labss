let idx=0;
  
const elements = [
    // Period 1
    {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        protons: 1,
        neutrons: 0,
        shells: [1]
    },
    {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        protons: 2,
        neutrons: 2,
        shells: [2]
    },

    // Period 2
    {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        protons: 3,
        neutrons: 4,
        shells: [2, 1]
    },
    {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        protons: 4,
        neutrons: 5,
        shells: [2, 2]
    },
    {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5,
        protons: 5,
        neutrons: 6,
        shells: [2, 3]
    },
    {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        protons: 6,
        neutrons: 6,
        shells: [2, 4]
    },
    {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        protons: 7,
        neutrons: 7,
        shells: [2, 5]
    },
    {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        protons: 8,
        neutrons: 8,
        shells: [2, 6]
    },
    {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9,
        protons: 9,
        neutrons: 10,
        shells: [2, 7]
    },
    {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        protons: 10,
        neutrons: 10,
        shells: [2, 8]
    },

    // Period 3
    {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        protons: 11,
        neutrons: 12,
        shells: [2, 8, 1]
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        protons: 12,
        neutrons: 12,
        shells: [2, 8, 2]
    },
    {
        name: "Aluminium",
        symbol: "Al",
        atomicNumber: 13,
        protons: 13,
        neutrons: 14,
        shells: [2, 8, 3]
    },
    {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        protons: 14,
        neutrons: 14,
        shells: [2, 8, 4]
    },
    {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        protons: 15,
        neutrons: 16,
        shells: [2, 8, 5]
    },
    {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        protons: 16,
        neutrons: 16,
        shells: [2, 8, 6]
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        protons: 17,
        neutrons: 18,
        shells: [2, 8, 7]
    },
    {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        protons: 18,
        neutrons: 22,
        shells: [2, 8, 8]
    },

    // Period 4
    {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        protons: 19,
        neutrons: 20,
        shells: [2, 8, 8, 1]
    },
    {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        protons: 20,
        neutrons: 20,
        shells: [2, 8, 8, 2]
    },
    {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21,
        protons: 21,
        neutrons: 24,
        shells: [2, 8, 9, 2]
    },
    {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22,
        protons: 22,
        neutrons: 26,
        shells: [2, 8, 10, 2]
    },
    {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23,
        protons: 23,
        neutrons: 28,
        shells: [2, 8, 11, 2]
    },
    {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24,
        protons: 24,
        neutrons: 28,
        shells: [2, 8, 13, 1]
    },
    {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25,
        protons: 25,
        neutrons: 30,
        shells: [2, 8, 13, 2]
    },
    {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        protons: 26,
        neutrons: 30,
        shells: [2, 8, 14, 2]
    },
    {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27,
        protons: 27,
        neutrons: 32,
        shells: [2, 8, 15, 2]
    },
    {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28,
        protons: 28,
        neutrons: 30,
        shells: [2, 8, 16, 2]
    },
    {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        protons: 29,
        neutrons: 34,
        shells: [2, 8, 18, 1]
    },
    {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30,
        protons: 30,
        neutrons: 34,
        shells: [2, 8, 18, 2]
    },
    {
        name: "Gallium",
        symbol: "Ga",
        atomicNumber: 31,
        protons: 31,
        neutrons: 38,
        shells: [2, 8, 18, 3]
    },
    {
        name: "Germanium",
        symbol: "Ge",
        atomicNumber: 32,
        protons: 32,
        neutrons: 42,
        shells: [2, 8, 18, 4]
    },
    {
        name: "Arsenic",
        symbol: "As",
        atomicNumber: 33,
        protons: 33,
        neutrons: 42,
        shells: [2, 8, 18, 5]
    },
    {
        name: "Selenium",
        symbol: "Se",
        atomicNumber: 34,
        protons: 34,
        neutrons: 46,
        shells: [2, 8, 18, 6]
    },
    {
        name: "Bromine",
        symbol: "Br",
        atomicNumber: 35,
        protons: 35,
        neutrons: 44,
        shells: [2, 8, 18, 7]
    },
    {
        name: "Krypton",
        symbol: "Kr",
        atomicNumber: 36,
        protons: 36,
        neutrons: 48,
        shells: [2, 8, 18, 8]
    },

    // Period 5
    {
        name: "Rubidium",
        symbol: "Rb",
        atomicNumber: 37,
        protons: 37,
        neutrons: 48,
        shells: [2, 8, 18, 8, 1]
    },
    {
        name: "Strontium",
        symbol: "Sr",
        atomicNumber: 38,
        protons: 38,
        neutrons: 50,
        shells: [2, 8, 18, 8, 2]
    },
    {
        name: "Yttrium",
        symbol: "Y",
        atomicNumber: 39,
        protons: 39,
        neutrons: 50,
        shells: [2, 8, 18, 9, 2]
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        atomicNumber: 40,
        protons: 40,
        neutrons: 50,
        shells: [2, 8, 18, 10, 2]
    },
    {
        name: "Niobium",
        symbol: "Nb",
        atomicNumber: 41,
        protons: 41,
        neutrons: 52,
        shells: [2, 8, 18, 12, 1]
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        atomicNumber: 42,
        protons: 42,
        neutrons: 54,
        shells: [2, 8, 18, 13, 1]
    },
    {
        name: "Technetium",
        symbol: "Tc",
        atomicNumber: 43,
        protons: 43,
        neutrons: 55,
        shells: [2, 8, 18, 13, 2]
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        atomicNumber: 44,
        protons: 44,
        neutrons: 58,
        shells: [2, 8, 18, 15, 1]
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        atomicNumber: 45,
        protons: 45,
        neutrons: 58,
        shells: [2, 8, 18, 16, 1]
    },
    {
        name: "Palladium",
        symbol: "Pd",
        atomicNumber: 46,
        protons: 46,
        neutrons: 60,
        shells: [2, 8, 18, 18]
    },
    {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47,
        protons: 47,
        neutrons: 60,
        shells: [2, 8, 18, 18, 1]
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        atomicNumber: 48,
        protons: 48,
        neutrons: 66,
        shells: [2, 8, 18, 18, 2]
    },
    {
        name: "Indium",
        symbol: "In",
        atomicNumber: 49,
        protons: 49,
        neutrons: 66,
        shells: [2, 8, 18, 18, 3]
    },
    {
        name: "Tin",
        symbol: "Sn",
        atomicNumber: 50,
        protons: 50,
        neutrons: 70,
        shells: [2, 8, 18, 18, 4]
    },
    {
        name: "Antimony",
        symbol: "Sb",
        atomicNumber: 51,
        protons: 51,
        neutrons: 70,
        shells: [2, 8, 18, 18, 5]
    },
    {
        name: "Tellurium",
        symbol: "Te",
        atomicNumber: 52,
        protons: 52,
        neutrons: 76,
        shells: [2, 8, 18, 18, 6]
    },
    {
        name: "Iodine",
        symbol: "I",
        atomicNumber: 53,
        protons: 53,
        neutrons: 74,
        shells: [2, 8, 18, 18, 7]
    },
    {
        name: "Xenon",
        symbol: "Xe",
        atomicNumber: 54,
        protons: 54,
        neutrons: 77,
        shells: [2, 8, 18, 18, 8]
    },

    // Period 6
    {
        name: "Caesium",
        symbol: "Cs",
        atomicNumber: 55,
        protons: 55,
        neutrons: 78,
        shells: [2, 8, 18, 18, 8, 1]
    },
    {
        name: "Barium",
        symbol: "Ba",
        atomicNumber: 56,
        protons: 56,
        neutrons: 82,
        shells: [2, 8, 18, 18, 8, 2]
    },
    {
        name: "Lanthanum",
        symbol: "La",
        atomicNumber: 57,
        protons: 57,
        neutrons: 82,
        shells: [2, 8, 18, 18, 9, 2]
    },
    {
        name: "Cerium",
        symbol: "Ce",
        atomicNumber: 58,
        protons: 58,
        neutrons: 82,
        shells: [2, 8, 18, 19, 9, 2]
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        atomicNumber: 59,
        protons: 59,
        neutrons: 82,
        shells: [2, 8, 18, 21, 8, 2]
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        atomicNumber: 60,
        protons: 60,
        neutrons: 84,
        shells: [2, 8, 18, 22, 8, 2]
    },
    {
        name: "Promethium",
        symbol: "Pm",
        atomicNumber: 61,
        protons: 61,
        neutrons: 84,
        shells: [2, 8, 18, 23, 8, 2]
    },
    {
        name: "Samarium",
        symbol: "Sm",
        atomicNumber: 62,
        protons: 62,
        neutrons: 88,
        shells: [2, 8, 18, 24, 8, 2]
    },
    {
        name: "Europium",
        symbol: "Eu",
        atomicNumber: 63,
        protons: 63,
        neutrons: 90,
        shells: [2, 8, 18, 25, 8, 2]
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        atomicNumber: 64,
        protons: 64,
        neutrons: 94,
        shells: [2, 8, 18, 25, 9, 2]
    },
    {
        name: "Terbium",
        symbol: "Tb",
        atomicNumber: 65,
        protons: 65,
        neutrons: 94,
        shells: [2, 8, 18, 27, 8, 2]
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        atomicNumber: 66,
        protons: 66,
        neutrons: 98,
        shells: [2, 8, 18, 28, 8, 2]
    },
    {
        name: "Holmium",
        symbol: "Ho",
        atomicNumber: 67,
        protons: 67,
        neutrons: 98,
        shells: [2, 8, 18, 29, 8, 2]
    },
    {
        name: "Erbium",
        symbol: "Er",
        atomicNumber: 68,
        protons: 68,
        neutrons: 100,
        shells: [2, 8, 18, 30, 8, 2]
    },
    {
        name: "Thulium",
        symbol: "Tm",
        atomicNumber: 69,
        protons: 69,
        neutrons: 100,
        shells: [2, 8, 18, 31, 8, 2]
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        atomicNumber: 70,
        protons: 70,
        neutrons: 103,
        shells: [2, 8, 18, 32, 8, 2]
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        atomicNumber: 71,
        protons: 71,
        neutrons: 104,
        shells: [2, 8, 18, 32, 9, 2]
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        atomicNumber: 72,
        protons: 72,
        neutrons: 106,
        shells: [2, 8, 18, 32, 10, 2]
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        atomicNumber: 73,
        protons: 73,
        neutrons: 108,
        shells: [2, 8, 18, 32, 11, 2]
    },
    {
        name: "Tungsten",
        symbol: "W",
        atomicNumber: 74,
        protons: 74,
        neutrons: 110,
        shells: [2, 8, 18, 32, 12, 2]
    },
    {
        name: "Rhenium",
        symbol: "Re",
        atomicNumber: 75,
        protons: 75,
        neutrons: 111,
        shells: [2, 8, 18, 32, 13, 2]
    },
    {
        name: "Osmium",
        symbol: "Os",
        atomicNumber: 76,
        protons: 76,
        neutrons: 114,
        shells: [2, 8, 18, 32, 14, 2]
    },
    {
        name: "Iridium",
        symbol: "Ir",
        atomicNumber: 77,
        protons: 77,
        neutrons: 115,
        shells: [2, 8, 18, 32, 15, 2]
    },
    {
        name: "Platinum",
        symbol: "Pt",
        atomicNumber: 78,
        protons: 78,
        neutrons: 117,
        shells: [2, 8, 18, 32, 17, 1]
    },
    {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79,
        protons: 79,
        neutrons: 118,
        shells: [2, 8, 18, 32, 18, 1]
    },
    {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80,
        protons: 80,
        neutrons: 121,
        shells: [2, 8, 18, 32, 18, 2]
    },
    {
        name: "Thallium",
        symbol: "Tl",
        atomicNumber: 81,
        protons: 81,
        neutrons: 123,
        shells: [2, 8, 18, 32, 18, 3]
    },
    {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82,
        protons: 82,
        neutrons: 125,
        shells: [2, 8, 18, 32, 18, 4]
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        atomicNumber: 83,
        protons: 83,
        neutrons: 126,
        shells: [2, 8, 18, 32, 18, 5]
    },
    {
        name: "Polonium",
        symbol: "Po",
        atomicNumber: 84,
        protons: 84,
        neutrons: 125,
        shells: [2, 8, 18, 32, 18, 6]
    },
    {
        name: "Astatine",
        symbol: "At",
        atomicNumber: 85,
        protons: 85,
        neutrons: 125,
        shells: [2, 8, 18, 32, 18, 7]
    },
    {
        name: "Radon",
        symbol: "Rn",
        atomicNumber: 86,
        protons: 86,
        neutrons: 136,
        shells: [2, 8, 18, 32, 18, 8]
    },

    // Period 7
    {
        name: "Francium",
        symbol: "Fr",
        atomicNumber: 87,
        protons: 87,
        neutrons: 136,
        shells: [2, 8, 18, 32, 18, 8, 1]
    },
    {
        name: "Radium",
        symbol: "Ra",
        atomicNumber: 88,
        protons: 88,
        neutrons: 138,
        shells: [2, 8, 18, 32, 18, 8, 2]
    },
    {
        name: "Actinium",
        symbol: "Ac",
        atomicNumber: 89,
        protons: 89,
        neutrons: 138,
        shells: [2, 8, 18, 32, 18, 9, 2]
    },
    {
        name: "Thorium",
        symbol: "Th",
        atomicNumber: 90,
        protons: 90,
        neutrons: 142,
        shells: [2, 8, 18, 32, 18, 10, 2]
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        atomicNumber: 91,
        protons: 91,
        neutrons: 140,
        shells: [2, 8, 18, 32, 20, 9, 2]
    },
    {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92,
        protons: 92,
        neutrons: 146,
        shells: [2, 8, 18, 32, 21, 9, 2]
    },
    {
        name: "Neptunium",
        symbol: "Np",
        atomicNumber: 93,
        protons: 93,
        neutrons: 144,
        shells: [2, 8, 18, 32, 22, 9, 2]
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        atomicNumber: 94,
        protons: 94,
        neutrons: 150,
        shells: [2, 8, 18, 32, 24, 8, 2]
    },
    {
        name: "Americium",
        symbol: "Am",
        atomicNumber: 95,
        protons: 95,
        neutrons: 148,
        shells: [2, 8, 18, 32, 25, 8, 2]
    },
    {
        name: "Curium",
        symbol: "Cm",
        atomicNumber: 96,
        protons: 96,
        neutrons: 151,
        shells: [2, 8, 18, 32, 25, 9, 2]
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        atomicNumber: 97,
        protons: 97,
        neutrons: 150,
        shells: [2, 8, 18, 32, 27, 8, 2]
    },
    {
        name: "Californium",
        symbol: "Cf",
        atomicNumber: 98,
        protons: 98,
        neutrons: 153,
        shells: [2, 8, 18, 32, 28, 8, 2]
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        atomicNumber: 99,
        protons: 99,
        neutrons: 153,
        shells: [2, 8, 18, 32, 29, 8, 2]
    },
    {
        name: "Fermium",
        symbol: "Fm",
        atomicNumber: 100,
        protons: 100,
        neutrons: 157,
        shells: [2, 8, 18, 32, 30, 8, 2]
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        atomicNumber: 101,
        protons: 101,
        neutrons: 157,
        shells: [2, 8, 18, 32, 31, 8, 2]
    },
    {
        name: "Nobelium",
        symbol: "No",
        atomicNumber: 102,
        protons: 102,
        neutrons: 157,
        shells: [2, 8, 18, 32, 32, 8, 2]
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        atomicNumber: 103,
        protons: 103,
        neutrons: 159,
        shells: [2, 8, 18, 32, 32, 8, 3]
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        atomicNumber: 104,
        protons: 104,
        neutrons: 163,
        shells: [2, 8, 18, 32, 32, 10, 2]
    },
    {
        name: "Dubnium",
        symbol: "Db",
        atomicNumber: 105,
        protons: 105,
        neutrons: 163,
        shells: [2, 8, 18, 32, 32, 11, 2]
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        atomicNumber: 106,
        protons: 106,
        neutrons: 163,
        shells: [2, 8, 18, 32, 32, 12, 2]
    },
    {
        name: "Bohrium",
        symbol: "Bh",
        atomicNumber: 107,
        protons: 107,
        neutrons: 163,
        shells: [2, 8, 18, 32, 32, 13, 2]
    },
    {
        name: "Hassium",
        symbol: "Hs",
        atomicNumber: 108,
        protons: 108,
        neutrons: 169,
        shells: [2, 8, 18, 32, 32, 14, 2]
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        atomicNumber: 109,
        protons: 109,
        neutrons: 169,
        shells: [2, 8, 18, 32, 32, 15, 2]
    },
    {
        name: "Darmstadtium",
        symbol: "Ds",
        atomicNumber: 110,
        protons: 110,
        neutrons: 171,
        shells: [2, 8, 18, 32, 32, 16, 2]
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        atomicNumber: 111,
        protons: 111,
        neutrons: 171,
        shells: [2, 8, 18, 32, 32, 17, 2]
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        atomicNumber: 112,
        protons: 112,
        neutrons: 173,
        shells: [2, 8, 18, 32, 32, 18, 2]
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        atomicNumber: 113,
        protons: 113,
        neutrons: 173,
        shells: [2, 8, 18, 32, 32, 18, 3]
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        atomicNumber: 114,
        protons: 114,
        neutrons: 175,
        shells: [2, 8, 18, 32, 32, 18, 4]
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        atomicNumber: 115,
        protons: 115,
        neutrons: 175,
        shells: [2, 8, 18, 32, 32, 18, 5]
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        atomicNumber: 116,
        protons: 116,
        neutrons: 177,
        shells: [2, 8, 18, 32, 32, 18, 6]
    },
    {
        name: "Tennessine",
        symbol: "Ts",
        atomicNumber: 117,
        protons: 117,
        neutrons: 176,
        shells: [2, 8, 18, 32, 32, 18, 7]
    },
    {
        name: "Oganesson",
        symbol: "Og",
        atomicNumber: 118,
        protons: 118,
        neutrons: 176,
        shells: [2, 8, 18, 32, 32, 18, 8]
    }
];

let element=elements[idx];

function createElectrons(element) {
    const atom = document.querySelector(".atom");

    atom.querySelectorAll(".shell").forEach(shell => {
        shell.remove();
    });

    element.shells.forEach((electronCount, shellIndex) => {

        const shellWrapper=document.createElement("div");
        shellWrapper.className="shell-wrapper";
      
        const shell = document.createElement("div");
        shell.className="shell";
        shell.classList.add(`shell${shellIndex+1}`);

        const radius = 75 + shellIndex * 50;

        shell.style.width = `${radius * 2}px`;
        shell.style.height = `${radius * 2}px`;

        shellWrapper.appendChild(shell);
      
        shellWrapper.style.left = "50%";
        shellWrapper.style.top = "50%";
        shellWrapper.style.transform = "translate(-50%, -50%)";

        for (let i = 0; i < electronCount; i++) {
            const electron = document.createElement("div");
            electron.className = "electron";

            const angle = (360 / electronCount) * i;

            const radians = angle * Math.PI / 180;

            const x = radius + radius * Math.cos(radians);
            const y = radius + radius * Math.sin(radians);

            electron.style.left = `${x-7.5}px`;
            electron.style.top = `${y-10}px`;

            shell.appendChild(electron);
        }

        atom.appendChild(shellWrapper);
    });
}

function createNucleus(){
  const nucleus=document.createElement("div");
  nucleus.className="nucleus";
  nucleus.style.left = "50%";
  nucleus.style.top = "50%";
  nucleus.style.transform = "translate(-50%, -50%)";
  return nucleus;
}

function createParticles(element, nucleus){
  for(let i=0; i<(element.neutrons || element.protons); i++){

    if(i<element.protons){
      const proton=document.createElement("div");
      proton.className="proton";
    
      const angle = (360 / element.protons) * i;

      const radians = angle * Math.PI / 180;

      const numx=Math.floor(Math.random()*35);

      const numy=Math.floor(Math.random()*35);

      const x = 40+numx * Math.cos(radians);
      const y = 40+numy * Math.sin(radians);

      proton.style.left = `${x}px`;
      proton.style.top = `${y}px`;

      if(element.name==="Hydrogen"){
        proton.style.left = "38px";
        proton.style.top = "38px";
      }
    
      nucleus.appendChild(proton);
    }

    if(i<element.neutrons){

      const neutron=document.createElement("div");
      neutron.className="neutron";
      let angle = (360 / element.neutrons) * i;

      const c=((360 / element.protons) * 1)/2;
    
      angle=angle+c;

      const radians = angle * Math.PI / 180;

      const numx=Math.floor(Math.random()*35);

      const numy=Math.floor(Math.random()*35);

      const x = 40+numx * Math.cos(radians);
      const y = 40+numy * Math.sin(radians);

      neutron.style.left = `${x}px`;
      neutron.style.top = `${y}px`;
      nucleus.appendChild(neutron);
    }
  }

  

  const atom=document.querySelector(".atom");
  atom.innerHTML="";
  atom.appendChild(nucleus);
}

const nucleus=createNucleus();

createParticles(element, nucleus);

createElectrons(element);

const prev=document.querySelector("#previous-element");
const next=document.querySelector("#next-element");
const name=document.querySelector("#element-name");
const symbol=document.querySelector("#element-symbol");
const an=document.querySelector("#atomic-number");
const ec=document.querySelector("#element-counter");
const pn=document.querySelector("#pn");
const nn=document.querySelector("#nn");
const en=document.querySelector("#en");

prev.addEventListener("click", ()=>{
  if(idx===0){
    return;
  }

  idx--;

  const element=elements[idx];

  name.innerHTML=`${element.name}`;

  symbol.innerHTML=`${element.symbol}`;
  an.innerHTML=`${element.atomicNumber}`;

  ec.innerHTML=`${element.atomicNumber}/118`;

  pn.innerHTML=`${element.protons}`;
  nn.innerHTML=`${element.neutrons}`;

  let electrons=0;

  for(let i=0; i<element.shells.length; i++){
    electrons+=element.shells[i];
  }
  
  en.innerHTML=`${electrons}`;
  

  const nucleus=createNucleus();

  createParticles(element, nucleus);

  createElectrons(element);
});

next.addEventListener("click", ()=>{
  if(idx===117){
    return;
  }

  idx++;

  const element=elements[idx];

  name.innerHTML=`${element.name}`;

  symbol.innerHTML=`${element.symbol}`;

  an.innerHTML=`${element.atomicNumber}`;

  ec.innerHTML=`${element.atomicNumber}/118`;

  pn.innerHTML=`${element.protons}`;
  nn.innerHTML=`${element.neutrons}`;

  let electrons=0;

  for(let i=0; i<element.shells.length; i++){
    electrons+=element.shells[i];
  }
  
  en.innerHTML=`${electrons}`;

  const nucleus=createNucleus();

  createParticles(element, nucleus);

  createElectrons(element);
});