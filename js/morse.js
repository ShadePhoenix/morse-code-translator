const morseCodex = {
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
    " ": "/",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----."
};

export const engToMor = (english) => {
    return english
        .split("")
        .map((char) => (char = morseCodex[char.toUpperCase()]))
        .join(" ");
};

export const morToEng = (morse) => {
    const keys = Object.keys(morseCodex);
    return morse
        .split(" ")
        .map((code) => keys.find((key) => morseCodex[key] === code))
        .join("");
};
