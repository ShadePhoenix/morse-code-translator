import translate from "./translator.js";

const input = document.getElementById("input");

const output = document.getElementById("output");

const translatorSelect = document.getElementById("translationType");

const clearAll = () => {
    input.value = "";
    output.value = "";
};

translatorSelect.onchange = clearAll;

const submitBtn = document.getElementById("translate");

const translateSumbit = () => {
    const isEncoder = translatorSelect.value == "false" ? false : true;
    console.log(isEncoder);
    const translation = translate(
        input.value,
        isEncoder,
        isEncoder ? "" : " ",
        isEncoder ? " " : ""
    );
    output.value = translation;
    input.value = "";
};
submitBtn.addEventListener("click", translateSumbit);
