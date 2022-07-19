const encoder = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/"
};

const decoder = Object.entries(encoder).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

export const Translate = (
    input,
    translator,
    splitDelim = "",
    joinDelim = " "
) => {
    const strArr = input.split(splitDelim);
    strArr.every();
    return input.map((char) => translator[char]).join(joinDelim);
};

export const morToEng = (morse) => {
    const keys = Object.keys(encoder);
    return morse
        .split(" ")
        .map((code) => keys.find((key) => encoder[key] === code))
        .join("");
};
