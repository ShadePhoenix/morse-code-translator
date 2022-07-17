import { engToMor, morToEng } from "./morse.js";

const engInput = document.getElementById("englishInput");
const morInput = document.getElementById("morseInput");

const engToMorOutput = document.getElementById("engToMorOutput");
const morToEngOutput = document.getElementById("morToEngOutput");

const engSubmitBtn = document.getElementById("engToMorBtn");
engSubmitBtn.addEventListener("click", () => submitEngInput());
const morSubmitBtn = document.getElementById("morToEngBtn");
morSubmitBtn.addEventListener("click", () => submitMorInput());

function submitEngInput() {
    engToMorOutput.value = engToMor(engInput.value);
}

function submitMorInput() {
    morToEngOutput.value = morToEng(morInput.value);
}
